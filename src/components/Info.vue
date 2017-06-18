<template>
	<div id="info">
		<h3>消息页</h3>
		
	</div>
</template>

<script>
	import Vue from 'vue'

	export default{
		name: 'info'
		
	}	
</script>

<style>
	#info{
		background: #eee;
	}
	#info h3{
		height: .43rem;
		width: 100%;
		line-height: .43rem;
		text-align: center;
		background: #fff;
		border-bottom: 1px solid #eee;
		font-size: .16rem;
		color:#000;
		font-weight: normal;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
	}
	
</style>