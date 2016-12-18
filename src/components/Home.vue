<template>
	<div class="wraper">
		<div class="header">
	      <h1>EvenlessMobile</h1>
	      <p>Made with MintUI, Vusjs, Webpack.</p>
	    </div>
	    <h1 class="title">{{ msg.part1 }}</h1>
	    <mt-cell title="Toast 吐司框" to="/toast" is-link>
	      <i class="fa fa-check-square"></i>
	    </mt-cell>
	    <mt-cell title="Loader 加载" to="/loading" is-link>
	      <i class="fa fa-circle-o"></i>
	    </mt-cell>
	    <mt-cell title="Modal 弹框" to="/modal" is-link>
	      <i class="fa fa-bell"></i>
	    </mt-cell>
	    <mt-cell title="Actions 操作" to="/actions" is-link>
	      <i class="fa fa-arrow-circle-up"></i>
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