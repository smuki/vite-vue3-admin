declare namespace API {
  type SysMenus = {
    sKey: string;
    sParent: string;
    sName: string;
    sRouter: string;
    perms: string;
    /** 当前菜单类型 0: 目录 | 1: 菜单 | 2: 权限 */
    nType: 0 | 1 | 2;
    sIcon: string;
    nSequency: number;
    sPath: string;
    bKeepAlive: boolean;
    bHidden: boolean;
  };

  type Menu = {
    createTime: Date;
    updateTime: Date;
    id: number;
    parentId: number;
    name: string;
    router: string;
    perms: string;
    /** 当前菜单类型 0: 目录 | 1: 菜单 | 2: 权限 */
    type: 0 | 1 | 2;
    icon: string;
    nSequency: number;
    viewPath: string;
    keepalive: boolean;
    isShow: boolean;
  };

  type PermMenu = {
    menus: SysMenus[];
    perms: string[];
  };

  type UserMst = {
    sUserId: string;
    sUserName: string;
    sHash: string;
    sDefaultLang: string;
    sCorporation: string;
    sAvatarUrl: string;
    sRole: string[];
  };

  type AdminUserInfo = {
    createTime: Date;
    updateTime: Date;
    id: number;
    departmentId: number;
    name: string;
    username: string;
    password: string;
    psalt: string;
    nickName: string;
    headImg: string;
    loginIp: string;
    email: string;
    phone: string;
    remark: string;
    status: number;
    roles: number[];
    departmentName: string;
  };
}
