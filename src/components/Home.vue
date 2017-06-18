<template>
	<div id="home">
		<div class="search">
			<img src="../assets/bg.jpg" alt="">
			<div class="searchbox">
				<input type="text" @focus="tosearch()" placeholder="请输入小区名字">
				<span class="icon iconfont icon-search"></span>
			</div>
			<div class="location">
                <span class="city">成都</span>
            </div>
		</div>
		<div class="home-menu">
			<dl>
				<dt><img src="../assets/newhouse.png" alt=""></dt>
				<dd>新房</dd>
			</dl>
			<dl>
				<dt><img src="../assets/ershoufang.png" alt=""></dt>
				<dd>二手房</dd>
			</dl>
			<dl>
				<dt><img src="../assets/zufang.png" alt=""></dt>
				<dd>租房</dd>
			</dl>
		</div>
		<div class="recommendhouse">
			<h3>推荐房源</h3>
			<div class="recommendlist">
				<dl v-for="item in list">
					<router-link :to="'/housedetail/'+item.id">
						<dt>
							<img :src="item.picpath">
							<div id="vr">
								<span class="vr" v-if="item.vr"></span>					
								<span class="video" v-if="item.video"></span>				
							</div>
						</dt>
						<dd>
							<h4>{{item.title}}</h4>
							<p class="data_top">
								<span class="house-span" v-for="top in item.data_top">{{top}}</span>
							</p>
							<p class="data_bottom">
								<span class="house-span" v-for="bottom in item.data_bottom">{{bottom}}</span>
							</p>
							<div class="tag">
								<span v-if="item.realhouse">真房源</span>
								<span v-if="item.twodiploma">两证齐全</span>
								<span class="twoyear" v-if="item.fulltwoyear">满两年</span>
							</div>
							<div class="price-div">
								<div class="price"><b>{{item.price}}</b><span class="c-orange">万元</span></div>
								<div class="unit-price"><i>{{item.unitPrice}}</i><span>元/平米</span></div>
							</div>
						</dd>
					</router-link>
				</dl>
			</div>
		</div>
		
			
			
			
		
	</div>
</template>

<script>
	import Vue from 'vue'

	export default{
		name: 'home',
		data(){
			return {
				list:[]
			}
		},
		methods: {
		    tosearch(){
		    	window.location.hash = 'search';
		    }
		},
		created(){
			var me = this;
			Vue.http.get("/api/dblist").then(function(res){
				me.list = res.data.data;
			},function  (err) {
				console.log('数据请求失败',err);
			})

			
		},
		mounted(){
			

		}
	}
</script>

<style>
	#home .search{
		width: 3.75rem;
		height: 1.65rem;
		position: relative;
	}
	#home .search img{
		width: 100%;
		height: 100%;
	}
	#home .search .searchbox{
		width:3.35rem;
		height: .35rem;
		position: absolute;
		left:.2rem;
		bottom:.23rem;
	}
	#home .search .searchbox input{
		width:3.35rem;
		height: .35rem;
		border-radius: .02rem;
		border: 0;
		box-sizing: border-box;
		padding-left: 1.14rem;
		font-size: .14rem;
	}
	#home .search .searchbox span{
		position: absolute;
		left: .9rem;
		top: .09rem;
		font-size: .16rem;
		color: #969696;
	}
	#home .search .location {
	    position: absolute;
	    top: 0.15rem;
	    left: 0.2rem;
	    height: .21rem;
	    line-height: .21rem;
	    padding-left: .14rem;
	    background: url(../assets/loca.png)no-repeat left .04rem;
	    background-size: .1rem .13rem;
	    box-sizing: border-box;
	    color: #ffffff;
	    font-size: .16rem;
	}
	#home .search .city {
	    display: inline-block;
	    box-sizing: border-box;
	    padding-right: .12rem;
	    height: .2rem;
	    background: url(../assets/xiala.png)no-repeat right .08rem;
	    background-size: .08rem .05rem;
	}
	#home .home-menu{
		height: 1rem;
		display: flex;
		background: #fff;
		margin-bottom: .1rem;
	}
	#home .home-menu dl{
		width: 33.33%;
		text-align: center;
	}
	#home .home-menu dl dt{
		height: .73rem;
	}
	#home .home-menu dl dt img{
		width: .55rem;
		height: .55rem;
		margin-top: .1rem;
	}
	#home .home-menu dl dd{
		font-size: .15rem;
	}
	#home .recommendhouse{
		background: #fff;
		padding-left: .1rem;
		margin-bottom: .48rem;
	}
	#home .recommendhouse h3{
		height: .44rem;
		line-height: .44rem;
		font-size: .16rem;
		font-weight: normal;
		border-bottom: 1px solid #efefef;
	}
	#home .recommendhouse .recommendlist dl a{
		display: flex;
		justify-content:flex-start;
		
	}
	#home .recommendhouse .recommendlist dl dt{
		width: 1.05rem;
		height: .8rem;
		padding-right: .1rem;
		padding-top: .16rem;
		position: relative;
	}
	#home .recommendhouse .recommendlist dl dt #vr{
		position: absolute;
		left: 0.05rem;
		bottom: 0.01rem;
	}
	#home .recommendhouse .recommendlist dl dt #vr .vr, #home .recommendhouse .recommendlist dl dt #vr .video {
	    display: inline-block;
	    width: 0.18rem;
	    height: 0.16rem;
	    background: url(../assets/vrRed.png) no-repeat center;
	    background-size: 100% 100%;
	}
	#home .recommendhouse .recommendlist dl dt #vr .video{
		background: url(../assets/video.png) no-repeat center;
	}
	#home .recommendhouse .recommendlist dl dt img{
		width: 100%;
		height: 100%;
	}
	#home .recommendhouse .recommendlist dl dd{
		width: 2.45rem;
		height: 1.2rem;
		padding-top: .1rem;
		border-bottom: 1px solid #efefef;
	}
	#home .recommendhouse .recommendlist dl dd h4{
		font-size: 0.16rem;
	    line-height: 1.3;
	    color: #000;
	    font-weight: normal;
	    word-wrap: normal;
	}
	#home .recommendhouse .recommendlist dl dd p{
		line-height: 1.1;
	}
	#home .recommendhouse .recommendlist dl dd .data_top{
		padding-top: .04rem;
	}
	#home .recommendhouse .recommendlist dl dd .data_bottom{
		padding-bottom: .04rem;
	}
	#home .recommendhouse .recommendlist dl dd .house-span{
		font-size: 0.12rem;
	    color: rgb(153,153,153);
	    padding-right: 0.05rem;
	    max-width: 0.6rem;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	#home .recommendhouse .recommendlist dl dd .tag{
		height: .24rem;
	}
	#home .recommendhouse .recommendlist dl dd .tag span{
		border-radius: 1px;
	    font-size: 0.11rem !important;
	    height: 0.12rem;
	    line-height: .12rem;
	    padding: 0 0.02rem!important;
	    margin-top: -0.08rem;
	    margin-right: .08rem;
	    border: 1px solid #ddf7e8;
	    color: #1bc964;
	    background-color: #ddf7e8;
	}
	#home .recommendhouse .recommendlist dl dd .tag .twoyear{
		color: #ffae3b;
		border: 1px solid #ffedd4;
		background-color: #ffedd4;
	}
	#home .recommendhouse .recommendlist dl dd .price-div{
		height: 0.2rem;
	    line-height: 0.2rem;
	    display: flex;
	}
	#home .recommendhouse .recommendlist dl dd .price-div .price {
	    font-size: 0.16rem;
	    color: rgb(255,90,31);
	}
	#home .recommendhouse .recommendlist dl dd .price-div .unit-price {
	    font-size: .12rem;
	    margin-left: .1rem;
	    color: #999999;
	}
	#home .recommendhouse .recommendlist dl dd .price-div .unit-price i{
		font-style: normal;
	}

	








	
	
</style>