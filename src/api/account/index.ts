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
  return request<BaseResponse<API.UserMst>>(
    {
      url: 'ADM04017C',
      method: 'post',
    },
    {
      isGetDataDirectly: false,
    },
  );
}

export function permmenu() {
  return request<BaseResponse<API.PermMenu>>(
    {
      url: 'ADM04017B',
      method: 'post',
    },
    {
      isGetDataDirectly: false,
    },
  );
}

export function logout() {
  return request({
    url: 'ADM01001C/logout',
    method: 'post',
  });
}
