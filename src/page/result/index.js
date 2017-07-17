/*
* @Author: lenovo
* @Date:   2017-07-17 17:48:33
* @Last Modified by:   lenovo
* @Last Modified time: 2017-07-17 18:45:28
*/

'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
	var type = _mm.getUrlParam('type') || 'default',
	$element = $('.' + type + '-success');
	//显示对应的提示元素
	$element.show();
})