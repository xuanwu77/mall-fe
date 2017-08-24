/*
* @Author: lenovo
* @Date:   2017-08-05 16:58:34
* @Last Modified by:   lenovo
* @Last Modified time: 2017-08-08 16:05:48
*/

'use strict';
/*
* @Author: lenovo
* @Date:   2017-08-05 10:59:13
* @Last Modified by:   lenovo
* @Last Modified time: 2017-08-05 16:58:13
*/

'use strict';
require('./index.css');
require('page/common/header/index.js');
require('page/common/nav/index.js');
var _mm               = require('util/mm.js');
var _order            = require('service/order-service.js');
var _address          = require('service/address-service.js');
var templateAddress   = require('./address-list.string');
var templateProduct   = require('./product-list.string');
var addressModal      = require('./address-modal.js');

var page = {
    data : {
        selectedAddressId : null
    },
    init : function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad : function(){
        this.loadAddressList();
        this.loadProductList();

    },
    bindEvent : function(){
        var _this = this;
        //地址的选择
        $(document).on('click', '.address-item', function(){
           $(this).addClass('active').
           		siblings('.address-item').removeClass('active');
           _this.data.selectedAddressId = $(this).data('id');
        });
        //订单提交
        $(document).on('click', '.order-submmit', function(){
        	var shippingId = _this.data.selectedAddressId;
        	if(shippingId){
        		_order.createOrder({
        			shippingId : shippingId
        		},function(res){
        			window.location.href = './payment.html?orderNum=' + res.orderNo;
        		},function(errMsg){
        			_mm.errorTips(errMsg);
        		});
        	} 
        });   
        //地址的添加
        $(document).on('click', '.address-add', function(){
        	addressModal.show({
        		isUpdate : false,
        		onSuccess: function(){
        			_this.loadAddressList();
        		}
        	});
        });
        //地址的编辑
        $(document).on('click', '.address-update', function(){
        	var shippingId = $(this).parents('.address-item').data('id');
        	_address.getAddress(shippingId,function(res){
        		addressModal.show({
        		isUpdate : true,
        		data     : res,
        		onSuccess: function(){
        			_this.loadAddressList();
        		}
        	});
        	},function(errMsg){
        		_mm.errorTips(errMsg);

        	});
        });
               
    },
    // 加载地址列表
    loadAddressList : function(){
        var _this       = this;
        // 获取地址列表
        _address.getAddressList(function(res){
            var addressListHtml = _mm.renderHtml(templateAddress,res);
            $('.address-con').html(addressListHtml);
           
        }, function(errMsg){
            $('.address-con').html('<p>地址加载失败，请刷新后重试</p>');
        });
    },
    // 加载商品列表
    loadProductList : function(){
        var _this       = this;
        // 获取地址列表
        _order.getProductList(function(res){
            var productListHtml = _mm.renderHtml(templateProduct,res);
            $('.product-con').html(productListHtml);
            
        }, function(errMsg){
            $('.product-con').html('<p>商品信息加载失败，请刷新后重试</p>');
        });
    }
};
$(function(){
    page.init();
})