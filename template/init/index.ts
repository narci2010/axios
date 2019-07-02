/*
 * @Description: 真对某个项目（后台系统）
 * @Author: Narci.Lee(narci2010@qq.com)
 * @Date: 2019-06-11 10:39:04
 * @LastEditTime: 2019-07-02 13:04:58
 * @LastEditors: Please set LastEditors
 */
<% _.forEach(data.moduleNames, function(moduleName){ %>
import * as {{$$.getImportName(moduleName)}} from './{{moduleName}}'<% }) %>

export {<% _.forEach(data.moduleNames, function(moduleName, i){ %>
  {{$$.getImportName(moduleName)}}<% if(data.moduleNames.length- 1 !== i) { %>,<% } %><% }) %>
};
