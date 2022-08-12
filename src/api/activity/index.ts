import { request } from '@/utils/request';

export function motion(activity: string, data: any, handle: Function) {
  return request<any>(
    {
      url: activity,
      method: 'post',
      data,
    },
    {
      isGetDataDirectly: false,
      handle,
    },
  );
}
