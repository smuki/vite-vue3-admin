import { request, BaseResponse } from '@/utils/request';

export function updateAccountInfo(data: any) {
  return request<BaseResponse<any>>({
    url: 'account/update',
    method: 'post',
    data,
  });
}

export function updatePassword(data: any) {
  return request({
    url: 'account/password',
    method: 'post',
    data,
  });
}

export function getInfo() {
  return request<API.AdminUserInfo>({
    url: 'account/info',
    method: 'get',
  });
}

export function permmenu() {
  return request<API.PermMenu>({
    url: 'ADM04017B',
    method: 'post',
  });
}

export function logout() {
  return request({
    url: 'ADM01001C/logout',
    method: 'post',
  });
}
