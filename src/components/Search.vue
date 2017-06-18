<template>
	<div id="search">
		<div class="search">
			<div class="mail"><span @click="backTo()" class="icon iconfont icon-back"></span></div>
			<div class="searchbox">
				<input type="text" ref="searchbox" v-model="searchword" @keyup.enter="beginsearch()" placeholder="请输入小区名字">
			</div>
			<div class="share" @click="beginsearch()">搜索</div>
		</div>
		<div class="home-content">
			<dl v-for="item in searchdata">
				<dt><img :src="item.image"></dt>
				<dd class="gname">{{item.name}}</dd>
				<dd class="gprice">￥{{item.price}}<span>￥{{Math.round(item.price*1.2)+'.00'}}</span></dd>
			</dl>
		</div>
		
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Toast } from 'mint-ui'

	export default{
		name: 'home',
		data(){
			return {
				searchword: '',
				searchdata: []
			}
		},
		methods: {
		    toact(val){
		    	this.active = val;
		    },
		    backTo(){
				window.location.hash = 'home';
			},
			beginsearch(){
				var word = this.searchword;
				if(!word){
					Toast({
					  message: '请输入需要查找的内容',
					  duration: 2000
					});
					return;
				}
				var _body = JSON.stringify({'search':word});
				var me = this;

				Vue.http.post("/mobile/index/search",_body).then(function(res){
					res = res.body;
					var re = new RegExp(word)
					me.searchdata = res.data.filter(function  (ele) {
						return ele.name.search(re)!=-1;
					})
					if(me.searchdata.length === 0){
						Toast({
						  message: '没有查找到相关商品',
						  duration: 2000
						});
					}
				},function  (err) {
					console.log('轮播图请求失败',err);
				})
				
				
			}
		},
		created(){
			
		},
		mounted(){
			this.$refs.searchbox.focus();

		}
	}
</script>

<style>
	#search{
		width: 100%;
		height: 100%;
		background: #fff;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 11;
	}
	#search .search{
		width: 3.75rem;
		height: .56rem;
		line-height: .56rem;
		background: #27b765;
		display: flex;
		justify-content:flex-start;
		margin-bottom: .02rem;
		position: fixed;
		top:0;
		left:0;
		border-bottom: 1px solid #ccc;
	}
	#search .search .searchbox{
		width:2.7rem;
		text-align: center;
		position: relative;
	}
	#search .search .searchbox input{
		width:2.75rem;
		height: .33rem;
		border-radius: .02rem;
		border: 1px solid #1a9850;
		outline:none;
		padding-left:.75rem;
		box-sizing: border-box;
		background: #1a9850;
	}
	
	#search .search .mail,.search .share{
		width:.45rem;
		text-align: center;
		font-size: .16rem;
		color: #fff;
	}
	.search .share{
		margin-left: .1rem;
	}
	#search .search .mail span{
		height: .43rem;
		font-size: .2rem;
		font-weight: bold;
	}

	#search .home-content{
		margin-top: .42rem;
		display: flex;
		flex-wrap:wrap;
	}
	#search .home-content dl{
		width: 50%;
		height: 2rem;
		box-sizing: border-box;
		padding: .06rem .1rem;
		text-align: center;
		margin-bottom: .1rem;
	}
	#search .home-content dl dt{
		height: 1.6rem;
		box-sizing: border-box;
		padding: .1rem;
		overflow: hidden;
	}
	#search .home-content dl dt img{
		width: 1.4rem;
	}
	#search .home-content dl .gname{
		color:#000;
		font-size: .14rem;
	}
	#search .home-content dl .gprice{
		color:#f12c8e;
		font-size: .11rem;
		font-weight: bold;
	}
	#search .home-content dl .gprice span{
		color:#808080;
		margin-left: .07rem;
		text-decoration: line-through;
		font-weight: normal;
	}	
	
	
</style>