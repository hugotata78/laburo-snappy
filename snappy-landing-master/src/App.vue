<template>
	<div id="app">
		<!-- Preloader -->
		<transition name="fade">
			<div v-if="true" class="loader-wrapper">
			<div class="loader"></div>
			</div>
		</transition>
		<!-- Preloader end -->

		<!-- <router-view name="navbar"></router-view> -->
		<navbar />
		<router-view />

		<vue-progress-bar></vue-progress-bar>
	</div>
</template>
<script>
import $ from 'jquery'
import navbar from '@/components/navbar'

export default {
	name: 'App',
	components: {
		navbar
	},
	data: () => ({
		isLoading: true,
		url:window.location.pathname
	}),
	mounted () {
		//  [App.vue specific] When App.vue is finish loading finish the progress bar
		this.$Progress.finish();
		this.isLoading = false;
		// this.loader()
	},
	created () {
		//  [App.vue specific] When App.vue is first loaded start the progress bar
		this.$Progress.start()
		this.isLoading = true;

		//  hook the progress bar to start before we move router-view
		this.$router.beforeEach((to, from, next) => {
			//  does the page we want to go to have a meta.progress object
			if (to.meta.progress !== undefined) {
				let meta = to.meta.progress
				// parse meta tags
				this.$Progress.parseMeta(meta)
			}
			//  start the progress bar
			this.$Progress.start()
			this.isLoading = true;
			//  continue to next page
			next()
		})
		//  hook the progress bar to finish after we've finished moving router-view
		this.$router.afterEach((to, from) => {
		//  finish the progress bar
			this.$Progress.finish()
			this.isLoading = false;
		})
	},
	methods: {
		// loader () {
		// 	$(document).ready(function () {
		// 	// ----------------------------------------
		// 	//  Pre Loader
		// 	// ----------------------------------------
		// 		$(window).on('load', function () {
		// 			$('.loader-wrapper').fadeOut('slow')
		// 			$('.loader-wrapper').remove('slow')
		// 		})
		// 	})
		// }
	}
}
</script>

<style lang="scss" scoped>
	.fade-enter-active, .fade-leave-active {
		transition: opacity 1s;
	}

	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
</style>
