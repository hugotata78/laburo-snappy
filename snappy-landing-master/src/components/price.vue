<template>
	<div>
		<!-- Price Section start-->
		<section id="price" class="price">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="w-100">
								<h2 class="title"><format-message path="price.planes1" tag="div" default-message="Planes "/> <format-message path="price.planes2" default-message="Inteligentes"/></h2>
							</div>	
						<div class="row">
							<div class="col-sm-4">
								<h7><format-message path="price.countrySelector" tag="div" default-message="País:"/></h7>
								<select  name="countryPrice" id="countryPrice" class="form-control" tabindex="12" @change="onChange($event)">
										<option v-for="country in plans_countries" :key="country">{{ country }}</option>
								</select>
								<br>
							</div>
						</div>
							<div class="row">
								<div class="price-item col-sm-4" v-for="plan in filtered_plans" :key="plan.uuid">
									<div class="price-block">
										<div class="price-type">
											<h2>{{ plan.name }}</h2>
										</div>
										<div class="mrp">
											<h6 class="user-type">{{ plan.description }}</h6>
											<div class="price-devide"></div>
											<h2>${{ plan.prices[1] }}</h2>
											<h6 class="price-year">per month</h6>
											<div class="price-devide"></div>
										</div>
										<ul class="price-feature">
											<li>Hasta <b>{{ plan.maxConversation }} conversaciones</b></li>
											<li v-for="feature in plan.features" :key="feature.fid">{{ feature.desc }}</li>
										</ul>
										<a href="#" class="btn btn-custom theme-color" role="button" ><format-message path="price.select" tag="div" default-message="Seleccionar"/></a>
									</div>
								</div>
							</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Price Section End -->
	</div>
</template>


<script>
export default {
	name: 'Price',
	data: () => ({
		currentCountry: "Argentina",
		Plans: [
			{
				"uuid":"1",
				"name":"Gratarola",
				"description": "Para los ratones",
				"maxConversation": 200,
				"prices": {1: 0, 6: 0, 12: 0},
				"features": [
					{"desc": "-"},
					{"desc": "-"},	
					{"desc": "-"},
					{"desc": "-"},			
				],
				"country": "Argentina"
			},
			{
				"uuid":"2",
				"name":"Esencial",
				"description": "Este plan es CLAVE!",
				"maxConversation": 10,
				"prices": {1: 1000, 6: 5000, 12: 8000},
				"features": [
					{"desc": "Whatsapp Integration"},
					{"desc": "Facebook Integration"},
					{"desc": "-"},
					{"desc": "-"},
				],
				"country": "Argentina"
			},
			{
				"uuid":"3",
				"name":"BRUTAL!",
				"description": "El que tiene plata hace lo que quiere!",
				"maxConversation": 9999,
				"prices": {1: 10000, 6: 50000, 12: 80000},
				"features": [
					{"desc": "Whatsapp Integration"},
					{"desc": "Facebook Integration"},
					{"desc": "Atencion VIP"},
					{"desc": "Llamadas por dia del amigo!"},
				],
				"country": "Argentina"
			},
			{
				"uuid":"4",
				"name":"Free",
				"description": "Dont expect much, its free!",
				"maxConversation": 1,
				"prices": {1: 0, 6: 0, 12: 0},
				"features": [
					{"desc": "-"},
					{"desc": "-"},
					{"desc": "-"},
					{"desc": "-"},				
				
				],
				"country": "USA"
			},
			{
				"uuid":"5",
				"name":"Esencial",
				"description": "A must have plan for any adventurer",
				"maxConversation": 10,
				"prices": {1: 10, 6: 500, 12: 800},
				"features": [
					{"desc": "Whatsapp Integration"},
					{"desc": "Facebook Integration"},
					{"desc": "-"},
					{"desc": "-"},
				],
				"country": "USA"
			},
			{
				"uuid":"6",
				"name":"UNLIMITED",
				"description": "Show me the money!",
				"maxConversation": 9999,
				"prices": {1: 10000, 6: 50000, 12: 80000},
				"features": [
					{"desc": "Whatsapp Integration"},
					{"desc": "Facebook Integration"},
					{"desc": "VIP Support"},
					{"desc": "Birthday calls from our CEO."},
				],
				"country": "USA"
			},
		]
	}),
	components: {
	},
	computed: {
		plans_countries: function () {
			return [...new Set(this.Plans.map(i=>i.country))]
		},
		filtered_plans: function () {
			return this.Plans.filter(p => p.country == this.currentCountry);
		}
	},
	methods:{
		onChange:function(event){
			// console.log(event.target);
			this.currentCountry = event.target.value;
			// console.log(this.currentCountry);
		}
	}
}


</script>