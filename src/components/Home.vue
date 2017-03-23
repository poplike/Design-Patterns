<template>
<div class="carousel" id="carousel">
    <ul class="img_list" :style="{transform: 'translateX(-'+ 100 * current +'%)'}">
        <li class="cell" v-for='(cell, index) in urlArr'><img :src="cell" alt="" />{{index}}</li>
    </ul>
	<ul class="nav_btn">
		<li class="nav" v-for='(cell, index) in urlArr'></li>
	</ul>

</div>
</template>

<script>
export default {
  name: 'home',
  data(){
  	return{
		urlArr: [
		    require('../assets/logo.png'),
		    require('../assets/logo.png'),
		    require('../assets/logo.png'),
		],
		current: 0,
		setInt:''
  	}

  },
     mounted: function(){
     	var _this = this;
        setInt=setInterval(_this.Interval,3000)
     },
     methods: {
        Interval:function(){
        	if(this.current==this.urlArr.length-1){
        		this.current=0;
        	}else{
        		this.current++
        	}
        }
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#carousel{
	width: 500px;
	height: auto;
	margin: 0 auto;
	overflow: hidden;
	.img_list{
		white-space: nowrap;
		display: inline-block;
		height: auto;
		transition: transform .5s;
		li{
			display: inline-block;
			width: 100%;
			height: auto;
		}
	}
}
</style>
