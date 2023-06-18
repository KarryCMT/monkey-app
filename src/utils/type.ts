export function isString(obj: any) {
  return Object.prototype.toString.call(obj) === '[object String]';
}

export function isObject(obj: any) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export function isFunction(fn: any) {
  const getType = {};
  return fn && getType.toString.call(fn) === '[object Function]';
}

export function isArray(arr: any) {
  return Array.isArray(arr);
}

export function isUndefined(val: any) {
  return val === void 0;
}

export function isDefined(val: any) {
  return val !== undefined && val !== null;
}

export function isPhone(phone: string) {
  return /1\d{10}$/.test(phone);
}

export function isEmptyObject(object: object) {
  if (!object) {
    return true;
  }
  return !Object.keys(object).length;
}

export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

export function isEmail(email: string) {
  return /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/.test(
    email,
  );
}

export function isJSON(str: any) {
  if (typeof str === 'string') {
    try {
      const obj = JSON.parse(str);
      return !!(typeof obj === 'object' && obj);
    } catch (e) {
      return false;
    }
  }
}

interface Class2Type {
  [key: string]: string;
}

export function _typeof(value: any) {
  const class2type: Class2Type = {};
  'Boolean Number String Function Array Date RegExp Object Error'
    .split(' ')
    .forEach(key => {
      class2type['[object ' + key + ']'] = key.toLowerCase();
    });

  if (value === null) {
    return String(value);
  }

  return typeof value === 'object' || typeof value === 'function'
    ? class2type[class2type.toString.call(value)] || 'object'
    : typeof value;
}

interface IsVueOptions {
  template?: string;
  render?: Function;
  mixins?: Array<any>;
}

/**
 * 判断是不是vue 组件
 * @param options
 * @returns {boolean}
 */

export function isVue(obj: IsVueOptions): boolean {
  if (!obj) {
    return false;
  }
  if (typeof obj.template === 'string' || typeof obj.render === 'function') {
    return true;
  }
  if (!obj.mixins || obj.mixins.length === 0) {
    return false;
  }
  for (let i = 0; obj.mixins.length > i; i++) {
    if (isVue(obj.mixins[i])) {
      return true;
    }
    if (obj.mixins.length - 1 === i) {
      return isVue(obj.mixins[i]);
    }
  }
  return false;
}

/**
 * 判断是否为ip地址
 * @param value 判断值
 * @returns {boolean}
 */
export function isIp(value: string): boolean {
  const reg =
    /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return reg.test(value);
}
