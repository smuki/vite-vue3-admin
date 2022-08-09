import { type RouteRecordRaw } from 'vue-router';
import { defineStore } from 'pinia';
//import { useWsStore } from './ws';
import { store } from '@/store';
import { login } from '@/api/login';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { logout /*, getInfo, permmenu */, permmenu } from '@/api/account';
import { generatorDynamicRouter } from '@/router/generator-router';
import { resetRouter } from '@/router';

interface UserState {
  token: string;
  name: string;
  avatar: string;
  // like [ 'sys:user:add', 'sys:user:update' ]
  perms: string[];
  menus: RouteRecordRaw[];
  userInfo: Partial<API.UserMst>;
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: Storage.get(ACCESS_TOKEN_KEY, null),
    name: 'amdin',
    avatar: '',
    perms: [],
    menus: [],
    userInfo: {},
  }),
  getters: {
    getToken(): string {
      return this.token;
    },
    getAvatar(): string {
      return this.avatar;
    },
    getName(): string {
      return this.name;
    },
    getPerms(): string[] {
      return this.perms;
    },
  },
  actions: {
    /** 清空token及用户信息 */
    resetToken() {
      this.avatar = this.token = this.name = '';
      this.perms = [];
      this.menus = [];
      this.userInfo = {};
      Storage.clear();
    },
    /** 登录成功保存token */
    setToken(token: string) {
      this.token = token ?? '';
      const ex = 7 * 24 * 60 * 60 * 1000;
      Storage.set(ACCESS_TOKEN_KEY, this.token, ex);
    },
    /** 登录 */
    async login(params: API.LoginParams) {
      try {
        console.log('###############await login(params)......');

        const xxx = await login(params);

        console.log(xxx);

        const { Token, entity } = await login(params);
        //console.log(ttt);
        //const { Token, entity } = await login(params);
        console.log('data');
        console.log(Token);
        console.log(entity);
        console.log('data.Token');
        console.log(Token);
        this.setToken(Token);
        return this.afterLogin(entity);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    /** 登录成功之后, 获取用户信息以及生成权限路由 */
    async afterLogin(userInfo) {
      try {
        const { menus, perms } = await permmenu();

        console.log(typeof menus);
        console.log('-1generatorResult------------------------------------');
        console.log('-2generatorResult------------------------------------');
        console.log('-3generatorResult------------------------------------');
        console.log('-4generatorResult------------------------------------');
        console.log('-5generatorResult------------------------------------');
        console.log('-6generatorResult------------------------------------');
        console.log('-7generatorResult------------------------------------');
        console.log(menus);

        this.name = '';
        this.avatar = '';
        //const perms = [];
        // 生成路由
        const generatorResult = await generatorDynamicRouter(menus);

        console.log('-generatorResult------------------------------------');
        console.log('-generatorResult------------------------------------');
        console.log('-generatorResult------------------------------------');
        console.log('-generatorResult------------------------------------');
        console.log('-generatorResult------------------------------------');
        console.log('-generatorResult------------------------------------');

        console.log(generatorResult);

        this.menus = generatorResult.menus.filter((item) => !item.meta?.hideInMenu);
        //!wsStore.client && wsStore.initSocket();

        console.log(menus);
        console.log(perms);

        return { menus, perms, userInfo };
      } catch (error) {
        return Promise.reject(error);
        // return this.logout();
      }
    },
    /** 登出 */
    async logout() {
      await logout();
      //const wsStore = useWsStore();
      //wsStore.closeSocket();
      this.resetToken();
      resetRouter();
    },
  },
});

// 在组件setup函数外使用
export function useUserStoreWithOut() {
  return useUserStore(store);
}
