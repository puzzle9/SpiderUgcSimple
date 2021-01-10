import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  config.keys = appInfo.name + '_1609755534183_4575'

  config.middleware = []

  config.security = {
    csrf: false,
  }

  return config
}
