/*
* @Author: lenovo
* @Date:   2017-08-07 14:17:29
* @Last Modified by:   lenovo
* @Last Modified time: 2017-08-07 15:10:39
*/

'use strict';
var _cities = {
	cityInfo : {
		'北京' :['北京'],
		'上海' :['上海'],
		'天津' :['天津'],
		'重庆' :['重庆']
	},
	//获取所有的省份
	getProvince: function(){
		var provinces = [];;
		for(var item in this.cityInfo){
			provinces.push(item);
		}
		return provinces;
	},
	getCities: function(provinceName){
		return this.cityInfo[provinceName] || [];
	}
};
module.exports = _cities;