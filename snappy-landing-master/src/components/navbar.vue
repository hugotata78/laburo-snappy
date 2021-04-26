<template>
	<b-navbar type="light" class="navbar-light theme-nav fixed-top" toggleable="lg" fixed="top" v-bind:style="{background:myStyles}"  v-b-scrollspy:nav-scroller>
		<div class="container">
		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
		<b-navbar-brand class="navbar-brand" to="/">
			<img :src='"../assets/images/SnappyLogo.svg"' alt="logo" height="50px"> <format-message path="navbar.snappylabs" default-message="Snappy Labs"/>
									
			</b-navbar-brand>
		<b-collapse class="default-nav"  is-nav id="nav_collapse">
			<b-navbar-nav class="navbar-nav ml-auto" id="mymenu">
					<!-- <b-nav-item href="#home"><format-message path="navbar.home" default-message="Inicio"/></b-nav-item> -->
					<!-- <b-nav-item href="#clients"><format-message path="navbar.clients" default-message="Clientes"/></b-nav-item> -->
					<b-nav-item href="/#feature"><format-message path="navbar.feature" default-message="Caracteristicas"/></b-nav-item>

					<!-- <b-nav-item href="#price"><format-message path="navbar.price" default-message="Precios"/></b-nav-item> -->
					<b-nav-item href="/#contact"><b><format-message path="navbar.contact" default-message="Solicita tu demo"/></b></b-nav-item>
					<b-nav-item to="/panel"><b><format-message path="navbar.panel" default-message="Panel Administrador"/></b></b-nav-item>

					<b-nav-item href="https://blog.snappylabs.io/"><format-message path="navbar.blog" default-message="Blog"/></b-nav-item>
					<b-nav-item href="https://app.snappylabs.io/"><format-message path="navbar.login" default-message="Ingresar"/></b-nav-item>
					
					
					<b-nav-item-dropdown right-alignment href="#Other_page" text="currentLang" class="nav-link ">
							<template slot="button-content">
								<i class="fa fa-globe fa-2" aria-hidden="true"></i>
							</template>
						<b-dropdown-item class="nav-link" @click="changeLang('es')">Español</b-dropdown-item>
						<b-dropdown-item class="nav-link" @click="changeLang('en')">English</b-dropdown-item>
						<b-dropdown-item class="nav-link" @click="changeLang('br')">Portugués</b-dropdown-item>
					</b-nav-item-dropdown>

			</b-navbar-nav>
		</b-collapse>
		</div>

	</b-navbar>
</template>
<script>
export default {
	name:'Navbar',
	data () {
		return {
			lang: 'es', // default language set to english
			bgColor:'transparente',
		}
	},
	methods: {
		changeLang(lang) {
			this.$router.push("/"+lang)
			this.$inter.setCurrentLocale(lang)
			

		},
		myStyles(){
			if(window.location.pathname === '/panel'){
				this.bgColor = '#21ecff'
			}else{
				this.bgColor = 'transparent'
			}
			return this.bgColor
		}
	},
	computed: {
		currentLang() {
			return this.$inter.formatMessage({
				path: `Main.lang`,
				defaultMessage: 'Default'
			})
		},
		
	},
}
</script>
