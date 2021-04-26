<template>
		<!-- Contact Section start -->
		<section id="contact" class="contact">
			<div class="contact-decor">
				<div class="contact-circle1"><img :src='"../assets/images/main-banner12.png"' alt=""></div>
				<div class="contact-circle2"><img :src='"../assets/images/main-banner1.png"' alt=""></div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-md-12 col-lg-8 col-sm-12">
						<div class="contact-us">
							<div class="w-100">
								<h2 class="title"><format-message path="contact.solicitatu" tag="div" default-message="Solicita tu "/><format-message path="contact.demo" default-message="demo"/></h2>
								<form class="theme-form" id="ContactForm" method="post" action="https://api.snappylabs.io/contact">
									<div class="form-group">
										<div class="row">
											<div id="mail_alert_class" class="alert alert-success alert-dismissible d-none">
												<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
												<div id="alert_mail">

												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-sm-12 col-md-6 md-fgrup-margin">
												<input type="text" class="form-control" id="namec" name="name" :placeholder="name" required="required">
											</div>
											<div class="col-sm-12 col-md-6">
												<input type="number" class="form-control" id="phone" name="phone" :placeholder="phone">
											</div>
										</div>
									</div>
									<div class="form-group">
										<input type="email" class="form-control"  name="email" id="email" :placeholder="email" required="required">
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-sm-12 col-md-6 md-fgrup-margin">
												<input type="text" class="form-control" id="url" name="url" :placeholder="url" required="required">
											</div>
											<div class="col-sm-12 col-md-6">
												<input type="number" class="form-control" id="users" name="users" :placeholder="visits">
											</div>
										</div>
									</div>
									<div class="row">
											<div class="col-sm-12 col-md-6 md-fgrup-margin">
												<select id="businessType" name="businessType" class="form-control">
														<option option :value="null" selected disabled hidden> {{ business }} </option>
														<option value="ecommerce">Ecommerce</option>
														<option value="other">{{ other }}</option>
													</select>
											</div>	
											<div class="col-sm-12 col-md-6">
													<select id="platform" name="platform" class="form-control">
														<option option :value="null" selected disabled hidden> {{ platform }} </option>
														<option value="vtex">Vtex</option>
														<option value="magento">Magento</option>
														<option value="tienda nube">Tienda Nube</option>
														<option value="prestashop">Prestashop</option>
														<option value="woocommerce">WooCommerce</option>
														<option value="shopify">Shopify</option>
														<option value="self development">{{selfDevelopment}}</option>
														<option value="other">{{ other }}</option>
													</select>
											</div>
									</div>
									<div class="form-group">
										<textarea class="form-control" id="message" name="message" rows="4" :placeholder="message" required="required"></textarea>
									</div>
									<div class="form-group">	
											<label for="subscribed">
												<input type="checkbox" id="subscribed" name="subscribed" />
												{{subscribe}} 
											</label>
					
									</div>
									<div class="form-button">
										<input type="submit" id="emailsend" name="send" class="btn btn-custom theme-color" :value="request" />
									</div>
								</form>
							</div>
						</div>
					</div>
					<div class="col-lg-4 d-medium-none-lg">
						<div class="contact-right">
							<img :src='"../assets/images/Contact-info.png"' class="img-fluid" alt="">
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Contact Section End -->
</template>
<script>
export default {
	name: 'Contact_us',
	computed: {
		name() {
			return this.$inter.formatMessage({
				path: 'contact.name',
				defaultMessage: 'Nombre'
			})
		},
		email() {
			return this.$inter.formatMessage({
				path: 'contact.email',
				defaultMessage: 'Email'
			})
		},
		phone() {
			return this.$inter.formatMessage({
				path: 'contact.telephone',
				defaultMessage: 'Telefono (opcional)'
			})
		},
		url() {
			return this.$inter.formatMessage({
				path: `contact.url`,
				defaultMessage: 'ULR / Negocio'
			})
		},
		visits() {
			return this.$inter.formatMessage({
				path: `contact.visits`,
				defaultMessage: 'Visitas aprox. al sitio web (opcional)'
			})
		},
		message() {
			return this.$inter.formatMessage({
				path: `contact.message`,
				defaultMessage: 'Mensaje'
			})
		},
		platform() {
			return this.$inter.formatMessage({
				path: `contact.platform`,
				defaultMessage: 'Plataforma'
			})
		},
		business() {
			return this.$inter.formatMessage({
				path: `contact.business`,
				defaultMessage: 'Tipo de Negocio'
			})
		},
		subscribe() {
			return this.$inter.formatMessage({
				path: `contact.subscribed`,
				defaultMessage: 'Deseo suscribirme al Newsletter de Snappy'
			})
		},
		request() {
			return this.$inter.formatMessage({
				path: `contact.request`,
				defaultMessage: 'Solicitar'
			})
		},
		other() {
			return this.$inter.formatMessage({
				path: `contact.other`,
				defaultMessage: 'Otro'
			})
		},
		selfDevelopment() {
			return this.$inter.formatMessage({
				path: `contact.selfDevelopment`,
				defaultMessage: 'Desarrollo Propio'
			})
		}
	}
}
</script>

