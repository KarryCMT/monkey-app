import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {getToken, getAppId, baseURL} from './index';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

function baseRequest(opts: AxiosRequestConfig): AxiosInstance {
  return axios.create({
    method: 'post',
    timeout: 20000,
    baseURL,
    ...opts,
  });
}

const pending: any[] = []; // 声明一个数组用于存储每个请求的取消函数和axios标识
const cancelToken = axios.CancelToken;
const removePending = (config: any) => {
  const params =
    ((config.method || 'get').toUpperCase() === 'GET'
      ? config.params
      : config.data) || {};
  if (!params.cancelTokenId) {
    return;
  }
  for (const p in pending) {
    // 当前请求在数组中存在时执行函数体
    if (
      pending[p].u ===
      `${config.url} &${config.method}&${params.cancelTokenId || ''}`
    ) {
      pending[p].f(); //执行取消操作
      pending.splice(Number(p), 1);
    }
  }
};

interface Options {
  hasAppId?: boolean;
  [proname: string]: any;
}

const requestInterceptor = (
  service: AxiosInstance,
  hasToken: boolean,
  options: Options,
): void => {
  // request拦截器
  service.interceptors.request.use(
    config => {
      const token = getToken();
      const appId = getAppId();
      if (token && hasToken) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      if (appId && (options.hasAppId || options.hasAppId === undefined)) {
        config.headers['App-Id'] = appId;
      }
      const params =
        ((config.method || 'get').toUpperCase() === 'GET'
          ? config.params
          : config.data) || {};
      // 存在cancelTokenId去重请求
      if (params.cancelTokenId) {
        // 取消重复请求
        removePending(config); // 在一个axios发送前执行一下取消操作
        config.cancelToken = new cancelToken(c => {
          // 这里的axios标识我是用请求地址&请求方式拼接的字符串
          pending.push({
            u: `${config.url} &${config.method}&${params.cancelTokenId}`,
            f: c,
          });
        });

        delete (config.data || config.params || {}).cancelTokenId;
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );
};

const responseInterceptor = (service: AxiosInstance): void => {
  // 响应拦截器
  service.interceptors.response.use(
    res => {
      // IE
      if (
        res.data == null &&
        res.config.responseType === 'json' &&
        res.request.responseText != null
      ) {
        try {
          res.data = JSON.parse(res.request.responseText);
        } catch (e) {
          // ignored
        }
      }

      // 退出登录 返回数据特殊处理
      if (typeof res.data === 'string') {
        res.data = JSON.parse(res.data);
      }

      if (res.data && res.data.data && res.data.data.total) {
        res.data.data.total = Number(res.data.data.total);
      }
      res.data.headers = {
        'content-type': res.headers['content-type'],
      };
      // 已结束请求删除
      removePending(res.config);

      return res.data;
    },
    error => {
      return Promise.reject(error); // todo 请求异常 promise loading处理
    },
  );
};

function request(
  opts: AxiosRequestConfig,
  hasToken = true,
): Promise<AxiosResponse> {
  const service = baseRequest(opts);

  requestInterceptor(service, hasToken, opts);
  responseInterceptor(service);

  return service(opts);
}

function requestNoToken(
  opts: AxiosRequestConfig,
  options = {},
): Promise<AxiosResponse> {
  const service = baseRequest(opts);
  requestInterceptor(service, false, options);
  responseInterceptor(service);
  return service(opts);
}

function exportRequest(opts: AxiosRequestConfig) {
  const service = baseRequest(opts);
  // request拦截器
  service.interceptors.request.use(
    config => {
      const token = getToken();
      config.responseType = 'blob';
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  // 响应拦截器
  service.interceptors.response.use(
    res => {
      return res;
    },
    error => {
      return Promise.reject(error); // todo 请求异常 promise loading处理
    },
  );
  return service(opts);
}

export {baseRequest, request, requestNoToken, exportRequest};
