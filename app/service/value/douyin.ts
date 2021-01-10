import { Service } from "egg";
import { isArray, isNumber } from "util";

const superagent = require("superagent");

export default class douyin extends Service {
  public async getVideoId(value: string | number) {
    if (isNumber(value)) {
      return value;
    }

    let getExec = (data) => {
      let value = /video\/(\d+)/.exec(data);
      return isArray(value) ? value[1] : null;
    };

    let video_id = getExec(value);

    if (!video_id) {
      let res = await superagent
        .get(value)
        .set(
          "User-Agent",
          "Mozilla/5.0 (Linux; Android 10; M2006J10C Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.86 Mobile Safari/537.36 MicroMessenger/6.7.3.1341(0x26070340) NetType/WIFI Language/zh_CN Process/toolsmp"
        );

      video_id = getExec(res.redirects[0]);
    }

    return video_id;
  }

  public async start(value) {
    let video_id = await this.getVideoId(value);

    if (!video_id) {
      return {
        code: 404,
        message: `error douyin ${value}`,
      };
    }

    try {
      let url = `https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids=${video_id}`;

      let res = await superagent
        .get(url)
        .set(
          "User-Agent",
          "Mozilla/5.0 (Linux; Android 10; M2006J10C Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.86 Mobile Safari/537.36 MicroMessenger/6.7.3.1341(0x26070340) NetType/WIFI Language/zh_CN Process/toolsmp"
        );

      let item = res.body.item_list[0];

      if (!item) {
        return {
          code: 404,
          message: `error douyin ${value}`,
        };
      }

      return {
        title: item.desc,
        url: item.share_url,
        play_addr: item.video.play_addr.url_list[0],
        cover: item.video.cover.url_list[0],
        author: item.author.nickname,
        number_like: item.statistics.digg_count,
        number_comment: item.statistics.comment_count,
      };
    } catch (error) {
      console.log(error);

      return {
        code: 500,
        message: "error douyin",
      };
    }
  }
}
