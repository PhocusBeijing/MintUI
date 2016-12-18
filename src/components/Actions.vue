<template>
	<div id="comp">
		<div class="headbar">
			<router-link to="/home">
				<icon name="mail-reply" scale="1.3"></icon>
			</router-link>
			<h1 class="info">Actions 操作</h1>
		</div>


		<div class="content">
			<h2>1、基础用法</h2>
			<p>带有取消按钮的操作列表。</p>
			<div class="demo">
				<mt-button @click="showAction">操作列表</mt-button>
			</div>
			<div class="code">
<xmp>&lt;template>
  &lt;mt-button @click="showAction">操作列表&lt;/mt-button>
  &lt;mt-actionsheet
    :actions="actions"
    v-model="sheetVisible">
  &lt;/mt-actionsheet>
&lt;/template>

&lt;script>
  import { Actionsheet } from 'mint-ui';
  export default &#123;
  conponents: {
    'actionsheet': Actionsheet
  },
  data () &#123;
    return {
      sheetVisible: false,
      actions: [
        {
          name: '照相机',
          method: function () {
            alert('照相机')
          }
        },
        {
          name: '从相册中选',
          method: function () {
            alert('从相册中选')
          }
        }
      ]
    }
  },	
  methods: {
    showAction () {
      this.sheetVisible = true;
    }
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
				<li>actions</li>
				<ul class="child">
					<li>说明：菜单项数组；</li>
					<li>类型：Array</li>
					<li>接受：-</li>
					<li>默认：-</li>
				</ul>
				<li>cancelText</li>
				<ul class="child">
					<li>说明：取消按钮的文本。若设为空字符串，则不显示取消按钮；</li>
					<li>类型：String</li>
					<li>接受：-</li>
					<li>默认：'取消'</li>
				</ul>
				<li>closeOnClickModal</li>
				<ul class="child">
					<li>说明：是否可以通过点击 modal 层来关闭 actionsheet。</li>
					<li>类型：Boolean</li>
					<li>接受：-</li>
					<li>默认：true</li>
				</ul>
			</ul>

			<!-- 弹出菜单 -->
			<mt-actionsheet
			  	:actions="actions"
			  	v-model="sheetVisible">
			</mt-actionsheet>
		</div>
	</div>
</template>


<script type="text/javascript">
	import { Actionsheet } from 'mint-ui';
	export default {
		components: {
			'actionsheet': Actionsheet
		},
		data () {
			return {
				sheetVisible: false,
				actions: [
					{
						name: '照相机',
						method: function () {
							alert('照相机')
						}
					},
					{
						name: '从相册中选',
						method: function () {
							alert('从相册中选')
						}
					}
				]
			}
		},
		methods: {
			showAction () {
				this.sheetVisible = true;
			}
		}
	}
</script>


<style type="text/css" scoped>

</style>