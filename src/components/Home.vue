<template>
	<div class="wraper">
		<div class="header">
	      <h1>EvenlessMobile</h1>
	      <p>Made with MintUI, Vusjs, Webpack.</p>
	    </div>
	    <h1 class="title">{{ msg.part1 }}</h1>
	    <mt-cell title="Toast 吐司框" to="/toast" is-link>
	      <icon slot="icon" name="check-square"></icon>
	    </mt-cell>
	    <mt-cell title="Loader 加载" to="/loading" is-link>
	      <icon slot="icon" name="circle-o"></icon>
	    </mt-cell>
	    <mt-cell title="Modal 弹框" to="/modal" is-link>
	      <icon slot="icon" name="bell"></icon>
	    </mt-cell>
	    <mt-cell title="Actions 操作" to="/actions" is-link>
	      <icon slot="icon" name="arrow-circle-up"></icon>
	    </mt-cell>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				msg: {
			        part1: "JS Components",
			        part2: "CSS Components",
			        part3: "Form Components"
			    }
			}
		}
	}
	
</script>