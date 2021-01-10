import { Service } from 'egg'

const superagent = require('superagent')
const cheerio = require('cheerio')

export default class wechatMp extends Service {
  public async start(value) {
    try {
      let res = await superagent
        .get(value)
        .set(
          'User-Agent',
          'Mozilla/5.0 (Linux; Android 10; M2006J10C Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.86 Mobile Safari/537.36 MicroMessenger/6.7.3.1341(0x26070340) NetType/WIFI Language/zh_CN Process/toolsmp',
        )

      if (res.status != 200) {
        return {
          code: res.status,
          message: 'error wechatMp',
        }
      }

      let $ = cheerio.load(res.text)

      return {
        title: $("meta[property='og:title']").attr('content'),
        description: $("meta[property='og:description']").attr('content'),
        url: $("meta[property='og:url']").attr('content'),
        cover: $("meta[property='og:image']").attr('content'),
        article_author: $("meta[property='og:article:author']").attr('content'),
        number_read: 0,
        number_like: 0,
        number_comment: 0,
      }
    } catch (error) {
      console.log(error);

      return {
        code: 500,
        message: 'error wechatMp',
      }
    }
  }
}
