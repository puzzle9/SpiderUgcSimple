# start

## req

- `http://127.0.0.1:7002/`

## res

### success

```json
{
  "code": 200,
  "type": "xxxx",
  "data": {}
}
```

### error

```json
{
  "code": "int xxx",
  "message": "xxxx"
}
```

# type

## wechat mp

```sh
curl --request GET 'http://127.0.0.1:7002/?type=&value=https://mp.weixin.qq.com/s/S_g27h2KJPSb1NZ9DPM5Ig''
```

```json
{
  "code": 200,
  "type": "wechatMp",
  "data": {
    "title": "斗鱼二次元突破次元壁，即将空降雾都重庆......",
    "description": "勒是雾都，勒是船新的二次元世界！",
    "url": "http://mp.weixin.qq.com/s?__biz=MzA5Njc0ODQ0MA==&mid=2650339957&idx=1&sn=f2f97c83a29a792d48299bd38cf4c8cd&chksm=88a70c82bfd0859436777a9c2c20bac939f0b57f6e983dbd2484c9268d3864c9a16406a2f9d3#rd",
    "image": "http://mmbiz.qpic.cn/mmbiz_jpg/MYbMgCX2CbR1ICZv18L0e6ibFeczDdiaj1d5KBaPZnn0NY8ia1z1icT4ydCJKHBXechFsEPwVGsA97fq80ThSl8lAg/0?wx_fmt=jpeg",
    "article_author": "",
    "number_read": 0,
    "number_like": 0,
    "number_comment": 0
  }
}
```
