<template>
	<div>
		<div class="full-page">
			<div class="thanks-bg">
				<div class="container">
					<div class="col-md-12">
						<div class="thanks-section">
							<div>
								<img :src='"../assets/images/thank-you.png"' class="img-fluid downlod-img" alt="">
								<div class="col-lg-8 offset-lg-2 thanksH2">
									<h2><format-message path="contactSent.thanks" default-message="Gracias! Pronto nos pondremos en contacto."/></h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<js/>
			<!--end of color select tag -->
	</div>
	</div>
</template>
<script>
//import $ from 'jquery'
export default {
	mounted () {
		//this.loader()
	},
	methods: {

	}
}
</script>

<style>
.thanksH2{
    line-height: 40px;
}
</style>

