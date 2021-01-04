import { Service } from 'egg'

export default class Type extends Service {
  public TYPE_UNKNOW = 'unknow'
  public TYPE_WECHAT_MP = 'wechatMp'

  public async start(value) {
    switch (true) {
      // https://mp.weixin.qq.com/s/S_g27h2KJPSb1NZ9DPM5Ig
      case /mp.weixin.qq.com/.test(value):
        return this.TYPE_WECHAT_MP
        break;

      default:
        return 'unknow'
        break;
    }
  }
}
