<template>
  <div id="main_div">
    <!-- Home Section start-->

    <!--Home Section start-->
    <section id="home"  class="home home-two vertical-scrolling">
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-sm-12">
            <div class="home-contain">
              <div class="text-white">
                <div class="contain">
                  <h2 class="h2Custom text-white"><format-message path="Home.welcome" default-message="Hola! Bienvenido a"/></h2>
                  <h1 class="text-white"><format-message path="Home.snappy" default-message="Snappy"/> <b><format-message path="Home.labs" default-message="Labs!"/></b></h1>
                  <p class="slide-cap-desc"><format-message path="Home.desc" tag="div" default-message='Automatiza de forma sencilla tu atención al cliente.\n\nAsistentes con Inteligencia Artificial entrenados especialmente para ecommerce, 100% personalizados y disponibles 24/7.'/></p>
                  
                </div>
				<div class="play-button">
                  <a href="#contact" class="animated-circle" ><img :src='"../assets/images/home2/demo-button.png"' alt="solicitar demo" class="img-fluid"></a>
                </div>
                <!-- <div class="play-button">
                  <a v-on:click="isHidden = !isHidden"  class="popup-vimeo animated-circle" ><img :src='"../assets/images/home2/play-button.png"' alt="play-button" class="img-fluid"></a>
                </div>
                <div  v-on:click="isHidden = !isHidden" v-if="!isHidden" :player-height=100  class="white-popup">
                  <vimeo-player :player-width='940' :player-height='529'   class="vimeo-player" ref="player" :video-id=videoid />
                </div>  -->
              </div>
            </div>
          </div>
          <div class="col-sm-7">
            <div class="exhome-right">
              <!-- Tile js start -->
              <Tile :image = '"home2/slider-caption.png"'/>
              <!-- Tile js end -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Home Section End-->

    <!--Home Section End -->

    <!-- About Start  -->
    <!--  <About/> -->
    <!-- About End -->

   <!-- clientes Start  -->
    <Clients/>
    <!-- clientes End -->

    <!-- Feature Section start -->
    <Feature/>
    <!-- Feature Section End -->

    <!-- Screenshots Section Start -->
    <!--  <Screenshots/> -->
    <!-- Screenshots Section End -->

    <!-- Team Section Start -->
    <!-- <Team/> -->
    <!-- team Section End -->

    <!-- blog Section Start -->
    <!-- <Latest-blog/> -->
    <!-- blog Section End -->

    <!-- testimonial Section start-->
    <Testimonial/>
    <!-- testimonial Section End -->

    <!-- Price Section start-->
    <!-- <Price/> -->
    <!-- Price Section End -->

    <!-- Contact Section start -->
    <Contact_us/>
    <!-- Contact Section End -->

    <!--Subscribe section start-->
    <!-- <Subscribe/> -->
    <!--Subscribe section Ends-->

    <!--Map Section Start-->
    <!-- <Map/>-->
    <!--Map Section Ends-->

    <!-- Footer Section start -->
    <Footer/>
    <!-- Footer Section End -->

    <js/>

  </div>
</template>
<script>
import es, { Home } from '../lang/es'
export default {
	name: 'Home',
	data () {
		return {
			isHidden: true,
			videoid:54298665,
      
      
		}
	},
	props: {
		urlLang: {
			type: String,
			required: false,
			default: "es"
		},
	},
  
	beforeCreate: function () {
		document.body.className = 'home-style-two'
	},
	mounted() {
		this.$inter.setCurrentLocale(this.urlLang)
    
	},
  

}
</script>

