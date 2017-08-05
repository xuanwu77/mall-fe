/*
* @Author: lenovo
* @Date:   2017-07-21 11:22:35
* @Last Modified by:   lenovo
* @Last Modified time: 2017-08-05 09:37:20
*/

'use strict';
var _mm = require('util/mm.js');

var _product = {
    // 获取商品列表
    getProductList : function(listParam, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/list.do'),
            data    : listParam,
            success : resolve,
            error   : reject
        });
    },
    //获取商品详细信息
    getProductDetail : function(productId, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/detail.do'),
            data    : {
            	productId : productId

            },
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _product;