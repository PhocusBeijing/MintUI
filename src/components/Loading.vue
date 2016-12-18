<template>
	<div id="comp">
		<div class="headbar">
			<router-link to="/home">
				<icon name="mail-reply" scale="1.3"></icon>
			</router-link>
			<h1 class="info">Loading 加载</h1>
		</div>



		<div class="content">
			<h2>1、基础用法</h2>
			<p>显示于屏幕居中位置，实际运用中，你可以加一些逻辑判断。如：数据请求结束后隐藏。</p>
			<div class="demo">
				<mt-button @click="showLoader1">基础用法</mt-button>
				<mt-button @click="showLoader2">带有文字</mt-button>
				<mt-button @click="showLoader3">图标类型</mt-button>
			</div>
			<div class="code">
<xmp>&lt;template>
  &lt;mt-button @click="showLoader1">基础用法&lt;/mt-button>
  &lt;mt-button @click="showLoader2">带有文字&lt;/mt-button>
  &lt;mt-button @click="showLoader3">图标类型&lt;/mt-button>
&lt;/template>

&lt;script>
  import &#123; { Indicator } from 'mint-ui';
  export default &#123;
  data () &#123;
    return &#123; }
  },	
  methods: {
    showLoader1 () {
      Indicator.open();
      setTimeout(() => {
          Indicator.close();
        }, 2000);
    },
    showLoader2 () {
      Indicator.open("Loading...");
      setTimeout(() => {
          Indicator.close();
        }, 2000);
    },
    showLoader3 () {
      Indicator.open({
        text: "Loading...",
        spinnerType: "fading-circle"
      });
      setTimeout(() => {
          Indicator.close();
        }, 2000);
    }
  }
  }
&lt;/script>
</xmp>
			</div>	
		</div>







		<div class="content">
			<h2>Attributes</h2>
			<ul class="parent">
				<li>text</li>
				<ul class="child">
					<li>说明：加载提示文字；</li>
					<li>类型：String</li>
					<li>接受：-</li>
					<li>默认：-</li>
				</ul>
				<li>spinnerType</li>
				<ul class="child">
					<li>说明：加载图标类型；</li>
					<li>类型：String</li>
					<li>接受：snake, fading-circle, double-bounce, triple-bounce</li>
					<li>默认：snake</li>
				</ul>
				<li>duration</li>
				<ul class="child">
					<li>说明：显示时长；</li>
					<li>类型：Number</li>
					<li>接受：-</li>
					<li>默认：3000</li>
				</ul>
			</ul>
		</div>



	</div>
</template>


<script type="text/javascript">
	import { Indicator } from 'mint-ui';
	export default {
		data () {
			return {

			}
		},
		methods: {
			showLoader1 () {
				Indicator.open();
				setTimeout(() => {
				  	Indicator.close();
				}, 3000);
			},
			showLoader2 () {
				Indicator.open("Loading...");
				setTimeout(() => {
				  	Indicator.close();
				}, 3000);
			},
			showLoader3 () {
				Indicator.open({
					text: "Loading...",
					spinnerType: "fading-circle"
				});
				setTimeout(() => {
				  	Indicator.close();
				}, 3000);
			}
		}
	}
</script>


<style type="text/css" scoped>

</style>