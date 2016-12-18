<template>
	<div id="comp">
		<div class="headbar">
			<router-link to="/home">
				<icon name="mail-reply" scale="1.3"></icon>
			</router-link>
			<h1 class="info">Modal 弹框</h1>
		</div>




		<div class="content">
			<h2>1、基础用法</h2>
			<p>三种不同的弹框模式供你选择。</p>
			<div class="demo">
				<mt-button @click="showModal1">确认框</mt-button>
			</div>
			<div class="code">
<xmp>&lt;template>
  &lt;mt-button @click="showModal1">确认框&lt;/mt-button>
&lt;/template>

&lt;script>
  import MessageBox from 'mint-ui';
  export default &#123;
  data () &#123;
    return &#123; }
  },	
  methods: {
    showModal1 () {
      MessageBox({				
        title: '操作提示',
        message: '您的机票已预订成功!',
        confirmButtonClass: "confirm",
        confirmButtonText: "知道了"
      })
    }
  }
  }
&lt;/script>
</xmp>
			</div>	
		</div>





		<div class="content">
			<h2>2、确认取消</h2>
			<p>可设置确认取消按钮。</p>
			<div class="demo">
				<mt-button @click="showModal2">确认框</mt-button>
			</div>
			<div class="code">
<xmp>&lt;template>
  &lt;mt-button @click="showModal2">确认框&lt;/mt-button>
&lt;/template>

&lt;script>
  import MessageBox from 'mint-ui';
  export default &#123;
  data () &#123;
    return &#123; }
  },	
  methods: {
    showModal2 () {
      MessageBox.confirm('确定要执行此操作吗?','操作提示').then(action => {
        console.log("Confirmed")
      })
    }
  }
  }
&lt;/script>
</xmp>
			</div>	
		</div>





		<div class="content">
			<h2>3、带输入框</h2>
			<p>添加输入框及绑定事件。</p>
			<div class="demo">
				<mt-button @click="showModal3">输入框</mt-button>
			</div>
			<div class="code">
<xmp>&lt;template>
  &lt;mt-button @click="showModal3">确认框&lt;/mt-button>
&lt;/template>

&lt;script>
  import { MessageBox } from 'mint-ui';
  export default &#123;
  data () &#123;
    return &#123; }
  },	
  methods: {
    showModal3 () {
      MessageBox.prompt('请输入您的收货地址','操作提示').then(({ value, action }) => {
        console.log(value)
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
				<li>title</li>
				<ul class="child">
					<li>说明：弹出标题；</li>
					<li>类型：String</li>
					<li>接受：-</li>
					<li>默认：-</li>
				</ul>
				<li>message</li>
				<ul class="child">
					<li>说明：弹框说明文字；</li>
					<li>类型：String</li>
					<li>接受：-</li>
					<li>默认：-</li>
				</ul>
				<li>showConfirmButton</li>
				<ul class="child">
					<li>说明：是否显示确认按钮；</li>
					<li>类型：Boolean</li>
					<li>接受：true, false</li>
					<li>默认：true</li>
				</ul>
				<li>showCancelButton</li>
				<ul class="child">
					<li>说明：是否显示取消按钮；</li>
					<li>类型：Boolean</li>
					<li>接受：true, false</li>
					<li>默认：false</li>
				</ul>
				<li>confirmButtonText</li>
				<ul class="child">
					<li>说明：确认按钮上的显示文字；</li>
					<li>类型：String</li>
					<li>接受：-</li>
					<li>默认：-</li>
				</ul>
				<li>cancelButtonText</li>
				<ul class="child">
					<li>说明：取消按钮上的显示文字；</li>
					<li>类型：String</li>
					<li>接受：-</li>
					<li>默认：-</li>
				</ul>
				<li>showInput</li>
				<ul class="child">
					<li>说明：是否显示输入框；</li>
					<li>类型：Boolean</li>
					<li>接受：true, false</li>
					<li>默认：false</li>
				</ul>
				<li>inputType</li>
				<ul class="child">
					<li>说明：输入框文本类型；</li>
					<li>类型：String</li>
					<li>接受：HTML中input接受的输入类型</li>
					<li>默认：text</li>
				</ul>
				<li>inputValue</li>
				<ul class="child">
					<li>说明：输入框的值；</li>
					<li>类型：String</li>
					<li>接受：-</li>
					<li>默认：-</li>
				</ul>
				<li>inputPlaceholder</li>
				<ul class="child">
					<li>说明：输入框提示文字；</li>
					<li>类型：String</li>
					<li>接受：-</li>
					<li>默认：-</li>
				</ul>
			</ul>
		</div>



	</div>
</template>


<script type="text/javascript">
	import { MessageBox } from 'mint-ui';
	export default {
		data () {
			return {

			}
		},
		methods: {
			showModal1 () {
				MessageBox({				
					title: '操作提示',
					message: '您的机票已预订成功!',
					confirmButtonClass: "confirm",
					confirmButtonText: "知道了"
				})
			},
			showModal2 () {
				MessageBox.confirm('确定要执行此操作吗?','操作提示').then(action => {
					console.log("Confirmed")
				});
			},
			showModal3 () {
				MessageBox.prompt('请输入您的收货地址','操作提示').then(({ value, action }) => {
					console.log(value)
				})
			}
		}
	}
</script>


<style type="text/css" scoped>

</style>