import Taro from '@tarojs/taro'
import { baseUrl, noConsole } from '../config'

export default (options = { method: 'GET', data: {} }) => {
  if (!noConsole) {
    console.log(`${new Date().toLocaleString} [ M=${options.url}] p=${JSON.stringify(options.data)}`)
  }
  const token = Taro.getStorageInfo('token')
  return Taro.request({
    url: baseUrl + options.url,
    data: options.data,
    header: {
      'Content-Type': 'application/json',
      't2': token
    },
    method: options.method.toUpperCase(),
    success: function () {

    },
    fail: function (errMsg) {
      Taro.showToast({
        title: '请求失败',
        icon: 'none',
        mask: true,
        duration: 3000
      })
    }
  }).then(res => {
    console.log(res.data)
    return res.data
    // const { statusCode, data } = res
    // if (statusCode >= 200 && statusCode < 300) {
    //   if (!noConsole) {
    //     console.log(`${new Date().toLocaleString} [ M=${options.url}] 接口响应：`, res)
    //   }
    // } else {
    //   Taro.showToast({
    //     title: `网络请求错误，状态码${statusCode}`,
    //     icon: 'none',
    //     mask: true,
    //     duration: 3000
    //   })
    // }
  })
}
