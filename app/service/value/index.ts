import { Service } from 'egg'

export default class Index extends Service {
  public async start(type, value) {
    let data = this.service.value[type]

    if (!data) {
      throw new Error('error data type')
    }

    return await this.service.value[type].start(value)
  }
}
