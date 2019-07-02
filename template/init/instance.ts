/*
 * @Description: 针对每个项目，提供一个instance对象（主要解决一个前端可能跟多个后台系统交互的场景，如现在流行的微服务）
 * @Author: Narci.Lee(narci2010@qq.com)
 * @Date: 2019-06-11 10:39:04
 * @LastEditTime: 2019-07-02 10:23:07
 * @LastEditors: Please set LastEditors
 */

import { createAPI } from '../util'
import config from '../config'

const baseUrl = {
  mock:
    '{{$$.joinUrl(config.host, "mock", data.project._id, data.project.url)}}',
  dev: '',
  pre: '',
  prod: ''
}[config.env || 'mock']

export default createAPI(baseUrl)
