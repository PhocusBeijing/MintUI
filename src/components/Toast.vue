<template>
	<div id="comp">
		<div class="headbar">
			<router-link to="/home">
				<icon name="mail-reply" scale="1.3"></icon>
			</router-link>
			<h1 class="info">Toast 吐司框</h1>
		</div>



		<div class="content">
			<h2>1、基础用法</h2>
			<p>显示于屏幕居中位置，纯文字提示。</p>
			<div class="demo">
				<mt-button @click="showToast1">基础用法</mt-button>
			</div>
			<div class="code">
<xmp>&lt;template>
  &lt;mt-button @click="showToast1">基础用法&lt;/mt-button>
&lt;/template>

&lt;script>
  import { Toast } from 'mint-ui';
  export default &#123;
  data () &#123;
    return &#123; }
  },	
  methods: {
    showToast1 () {
      Toast('恭喜, 操作成功');
      }
    }
  }
&lt;/script>
</xmp>
			</div>	
		</div>




		<div class="content">
			<h2>2、配置参数</h2>
			<p>通过对象传参方式，构建个性化的提示框。</p>
			<div class="demo">
				<mt-button @click="showToast2">配置参数</mt-button>
			</div>
			<div class="code">
<xmp>&lt;template>
  &lt;mt-button @click="showToast2">配置参数&lt;/mt-button>
&lt;/template>

&lt;script>
  import { Toast } from 'mint-ui';
  export default &#123;
  data () &#123;
    return &#123; }
  },	
  methods: {
    showToast2 () {
      Toast({
          message: "恭喜, 操作成功",
          position: "bottom",
          duration: 2000
        })
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
				<li>message</li>
				<ul class="child">
					<li>说明：提示框文本内容；</li>
					<li>类型：String</li>
					<li>接受：-</li>
					<li>默认：-</li>
				</ul>
				<li>position</li>
				<ul class="child">
					<li>说明：提示框位置；</li>
					<li>类型：String</li>
					<li>接受：top, bottom, middle</li>
					<li>默认：middle</li>
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
	import { Toast } from 'mint-ui';
	export default {
		data () {
			return {

			}
		},
		methods: {
			showToast1 () {
				Toast('恭喜, 操作成功');
			}, 
			showToast2 () {
				Toast({
					message: '恭喜, 操作成功',
					position: 'bottom',
					duration: 2000
				})
			}
		}
	}
</script>


<style type="text/css" scoped>

</style>