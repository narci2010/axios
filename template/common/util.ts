/*
 * @Description: 工具类
 * @Author: Narci.Lee(narci2010@qq.com)
 * @Date: 2019-07-02 10:08:59
 * @LastEditTime: 2019-07-02 10:24:57
 * @LastEditors: Please set LastEditors
 */

import axios from 'axios'

const instance = axios.create()

/**
 * @description:创建api
 * @param {string}
 * @return:
 */
function createAPI(baseURL: string) {
  return function(conf: any) {
    conf = conf || {}
    return instance(
      Object.assign(
        {},
        {
          url: conf.url,
          baseURL: baseURL,
          method: conf.method
        },
        conf.opts
      )
    )
  }
}

/**
 * @description:将url转换成rest api（主要是路径接口）
 * @param {string,any}
 * @return:
 */
function convertRESTAPI(url: string, opts: any) {
  if (!opts || !opts.path) return url

  const pathKeys = Object.keys(opts.path)

  pathKeys.forEach(key => {
    const r = new RegExp('(:' + key + '|{' + key + '})', 'g')
    url = url.replace(r, opts.path[key])
  })

  return url
}

export { createAPI, convertRESTAPI }
