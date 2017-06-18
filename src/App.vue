<template>
  <div id="app">
    <div class="content">
      <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <ul class="footer">
      <li><router-link to="/home"><div class="icon iconfont icon-shouye"></div><p>首页</p></router-link></li>
      <li><router-link to="/info"><div class="icon iconfont icon-xiaoxizhongxin"></div><p>消息</p></router-link></li>
      <li><router-link to="/mine"><div class="icon iconfont icon-account"></div><p>我</p></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body,html{
    height: 100%;
  }
  #app{
    height: 100%;
    display: flex;
    background: #f5f5f5;
    flex-direction: column;
  }
  .content{
    overflow: auto;
    flex:1;
  }
  .footer{
    width: 100%;
    height: .48rem;
    display: flex;
    background: #f8f8f8;
    justify-content:space-around;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 10;
  }
  .footer:after{
    content:'';
    display: block;
    height: 1px;
    width:100%;
    background: #b2b2b2;
    position: absolute;
    top:0;
    transform: scale(1, .5);
    transform-origin:left top;
  }
  .footer>li{
    width:.5rem;
    text-align: center;

  }
  .footer>li a{
    color: #7a7a7a;
    
  }
  .footer>li a div{
    height: .28rem;
    line-height: .31rem;
    font-size: .2rem;
  }
  .footer>li a p{
    font-size: .12rem;
  }
  .footer>li .router-link-active{
    color: #00b074;
  }
</style>
