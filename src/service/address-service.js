/*
* @Author: lenovo
* @Date:   2017-08-05 16:42:35
* @Last Modified by:   lenovo
* @Last Modified time: 2017-08-08 16:06:21
*/

'use strict';
var _mm = require('util/mm.js');

var _address = {
    // 获取地址列表
    getAddressList : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/shipping/list.do'),
            data    : {
            	pageSize: 50
            },
            success : resolve,
            error   : reject
        });
    },
    //新建收件人
    save : function(addressInfo,resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/shipping/add.do'),
            data    : addressInfo,
            success : resolve,
            error   : reject
        });
    },
    //获取单条收件人信息
    getAddress :function(shippingId,resolve,reject){
          _mm.request({
            url     : _mm.getServerUrl('/shipping/select.do'),
            data    : {
                shippingId : shippingId
            },
            success : resolve,
            error   : reject
        });
    }
}
   
module.exports = _address;