import { Controller } from 'egg'

export default class IndexController extends Controller {
  public async start() {
    const { ctx } = this

    let query: any = ctx.request.query,
      type: string = query.type || null,
      value: any = query.value || null

    if (!type && !value) {
      ctx.body = {
        code: 1,
        message: 'hello Spider Ugc Simple',
      }

      return
    }

    let type_service = this.service.type

    type = type || (await type_service.start(value))

    if (type == type_service.TYPE_UNKNOW) {
      ctx.body = {
        code: 422,
        message: 'error type',
      }

      return
    }

    let data = await this.service.value.index.start(type, value)

    ctx.body = {
      code: ('code' in data) ? data.code : 200,
      type,
      data: data,
    }
  }
}
