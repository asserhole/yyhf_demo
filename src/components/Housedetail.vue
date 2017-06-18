<template>
	<div id="housedetail">
		<div class="header">
			<div class="logo"><img src="../assets/logo.png" ></div>
			<div class="right">
				<span class="slogan"></span>
				<span class="site">成都</span>
			</div>
		</div>
		<mt-swipe  :auto="0" :prevent="true">
		  <mt-swipe-item v-for="item in list.picpath"><img :src="item"></mt-swipe-item>
		</mt-swipe>
		<div class="title"><span><img src="../assets/real.png" alt=""></span>{{list.title}}</div>
		<div class="maindata">
			<div class="box">
				<p>售价</p>
				<span>{{list.price}}万</span>
			</div>
			<div class="box">
				<p>户型</p>
				<span>{{list.housetype}}</span>
			</div>
			<div class="box">
				<p>建筑面积</p>
				<span>{{list.area}}㎡</span>
			</div>
		</div>
		<div class="unit-price">
			单价：<span>{{list.unitPrice}}</span><p><img src="../assets/pinggu.png" alt=""></p>
		</div>
		<div class="other">
			<p>装修：<span>{{list.decoration}}</span></p>
			<p>楼层：<span>{{list.floor}}</span></p>
			<p>朝向：<span>{{list.direction}}</span></p>
			<p>年代：<span>{{list.year}}</span></p>
		</div>
		<h4>{{list.village}}</h4>
		<div class="content1">
			<p>建筑类型：<span>{{list.jtype}}</span></p>
			<p>物业类型：<span>{{list.wtype}}</span></p>
			<p>竣工时间：<span>{{list.finishdate}}</span></p>
			<p>产权年限：<span>{{list.ownright}}</span></p>
			<p>绿化率：<span>{{list.greenrate}}</span></p>
			<p>容积率：<span>{{list.rongrate}}</span></p>
		</div>
		<div class="content2">
			<p>物业费：<span>{{list.fee}}</span></p>
			<p>物业公司：<span>{{list.company}}</span></p>
			<p>开 发 商：<span>{{list.developer}}</span></p>
		</div>
		
		
	</div>
</template>

<script>
	import Vue from 'vue'

	export default{
		name: 'housedetail',
		data(){
			return {
				list: {}
			}
		},
		methods: {
		    
		},
		created(){
			var me = this;
			Vue.http.get("/api/id"+this.$route.params.id).then(function(res){
				me.list = res.data.data;
				console.log(me.list);
			},function  (err) {
				console.log('数据请求失败',err);
			})
			

		}
	}
</script>

<style>
	#housedetail{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #ededef;
		z-index: 310;
	}
	#housedetail .header{
		background: #27b765;
		height: .5rem;
		padding: 0 .13rem;
		width: 100%;
		box-sizing: border-box;
		position: relative;
	}
	#housedetail .header .logo{
		width: .95rem;
		height: .24rem;
		padding-top: .13rem;
	}
	#housedetail .header .logo img{
		width: 100%;
		height: 100%;
	}
	#housedetail .header .right{
		position: absolute;
		display: flex;
		right: .13rem;
		height: .2rem;
		top: .18rem
	}
	#housedetail .header .right .slogan {
	    display: block;
	    width: 1rem;
	    height: 0.2rem;
	    background: url(../assets/slogan.png)no-repeat center;
	    background-size: auto 100%;
	    margin: 0;
	}
	#housedetail .header .right .site {
	    height: .4rem;
	    line-height: .2rem;
	    font-size: .14rem;
	    max-width: 1.5rem;
	    white-space: nowrap;
	    overflow: hidden;
	    color: #ffffff;
	    text-align: right;
	    text-overflow: ellipsis;
	    box-sizing: border-box;
	    padding-right: .12rem;
	    background: url(../assets/xiala.png)no-repeat right .08rem;
	    background-size: .08rem .05rem;
	}
	#housedetail .mint-swipe{
		width: 100%;
		height: 2.24rem;
		background: #eee;

	}
	#housedetail .mint-swipe img{
		width: 100%;
		height: 100%;
	}
	#housedetail .title{
		 padding-left: .36rem;
		 height: .45rem;
		 line-height: .45rem;
		 background: #fff;
		 font-size: .16rem;
		 position: relative;
	}
	#housedetail .title span{
		position: absolute;
		width: .16rem;
		height: .16rem;
		left: .13rem;
		top:.02rem;
	}
	#housedetail .title span img{
		width: 100%;
		height: 100%;
	}
	#housedetail .maindata{
		background: #fff;
		height: .65rem;
		border-top:1px solid #eee;
		border-bottom:1px solid #eee;
		box-sizing: border-box;
		padding: .1rem 0;
		text-align: center;
		display: flex;
	}
	#housedetail .maindata p{
		color: #000;
		padding-bottom: .05rem;
	}
	#housedetail .maindata span{
		color: #1bc964;
	}
	#housedetail .maindata .box{
		box-sizing: border-box;
		border-right: 1px solid #eee;
		width: 33.33%;
		height: .45rem;
		font-size: .15rem;
		
	}
	#housedetail .maindata .box:last-child{
		border:0;
	}
	#housedetail .unit-price{
		height: .5rem;
		border-bottom:1px solid #eee;
		line-height: .5rem;
		color: #aaa;
		padding-left: .1rem;
		font-size: .15rem;
		position: relative;
		background: #fff;
	}
	#housedetail .unit-price span{
		color: #000;
	}
	#housedetail .unit-price p{
		width: .7rem;
		height: .25rem;
		position: absolute;
		right:.15rem;
		top:.07rem;
	}
	#housedetail .unit-price p img{
		width: 100%;
		height: 100%;

	}
	#housedetail .other{
		background: #fff;
		height: .78rem;
		color: #aaa;
		padding-left: .1rem;
		display: flex;
		flex-wrap:wrap;
		margin-bottom: .05rem;
	}
	#housedetail .other p{
		font-size: .15rem;
		line-height: .35rem;
		width: 50%;
	}
	#housedetail .other span{
		color: #000;
	}
	#housedetail h4{
		color: #27b765;
		height: .44rem;
		line-height: .44rem;
		font-size: .15rem;
		padding-left: .1rem;
		background: #fff;
		font-weight: normal;
	}
	#housedetail .content1{
		background: #fff;
		height: 1.07rem;
		color: #aaa;
		padding-left: .1rem;
		display: flex;
		flex-wrap:wrap;
	}
	#housedetail .content1 p{
		font-size: .15rem;
		line-height: .35rem;
		width: 50%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
	}
	#housedetail .content1 span{
		color: #000;
	}
	#housedetail .content2{
		background: #fff;
		height: 1.07rem;
		color: #aaa;
		padding-left: .1rem;
	}
	#housedetail .content2 p{
		font-size: .15rem;
		line-height: .35rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
	}
	#housedetail .content2 span{
		color: #000;
	}


		
	
</style>