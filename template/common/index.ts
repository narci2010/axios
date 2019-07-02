/*
 * @Description: 顶层api入口
 * @Author: Narci.Lee(narci2010@qq.com)
 * @Date: 2019-06-11 10:39:04
 * @LastEditTime: 2019-07-02 10:08:46
 * @LastEditors: Please set LastEditors
 */
<% _.forEach(config.projects, function(project){ %>
import * as {{$$.convertUrl(project.name)}} from './{{project.name}}'<% }) %>

export {<% _.forEach(config.projects, function(project, i){ %>
  {{$$.convertUrl(project.name)}}<% if(config.projects.length - 1 !== i) { %>,<% } %><% }) %>
};
