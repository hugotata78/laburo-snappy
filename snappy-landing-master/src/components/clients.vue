<template>
	<!-- About Start -->
	<section id="clients" class="clients">
		<div class="container">
			<div class="row ">
				<div class="col-2 offset-1">
					<img :src='"../assets/images/clients/coca-cola.svg"' alt="CocaCola" class="clientImg">
				</div>
				<div class="col-2">
					<img :src='"../assets/images/clients/levis.png"' alt="Levis" class="clientImg">
				</div>
				<div class="col-2">
					<img :src='"../assets/images/clients/vans.png"' alt="Vans" class="clientImg">
				</div>
				<div class="col-2">
					<img :src='"../assets/images/clients/arredo2.svg"' alt="Arredo" class="clientImg">
				</div>
				<div class="col-2">
					<img :src='"../assets/images/clients/tennis2.svg"' alt="Tennis" class="clientImg">
				</div>
			</div>
		</div>
	</section>
	<!-- About End -->

</template>
<script>
export default {
	name: 'clients'
}
</script>
<style>
 
</style>

<style lang="scss" scoped>
	.clientImg {
		width: 100%;
	}

	.clients {
		max-width: 100%;

		.container {
			width: 100%;
			max-width: none;
		}
	}
</style>