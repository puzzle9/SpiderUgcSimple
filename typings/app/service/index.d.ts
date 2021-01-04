// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportType from '../../../app/service/type';
import ExportValueIndex from '../../../app/service/value/index';
import ExportValueWechatMp from '../../../app/service/value/wechat_mp';

declare module 'egg' {
  interface IService {
    type: AutoInstanceType<typeof ExportType>;
    value: {
      index: AutoInstanceType<typeof ExportValueIndex>;
      wechatMp: AutoInstanceType<typeof ExportValueWechatMp>;
    }
  }
}
