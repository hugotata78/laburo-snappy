<template >
  <!-- About Start -->
    <section id="about" class="about" >
      <div class="about-decor">
        <div class="about-circle1"><img :src='"../assets/images/team1.png"' alt="team1"></div>
        <div class="about-circle2"><img :src='"../assets/images/main-banner1.png"' alt="banner1"></div>
      </div>
      <div class="container">
        <div class="row ">
          <div class="col-md-5">
            <div class="about-contain">
              <div>
                <h2 class="title"><format-message path="about.title" default-message="ASISTENTE DE COMPRAS"/></h2>
                <p class="caption-about">
                  <format-message path="about.desc" default-message="Ofrece a tus visitantes una nueva forma de encontrar los productos. Hoy en día los usuarios no quieren buscar productos por categorías, quieren chatear!"/>
                </p>
                <div class="row sm-mb">
                  <div class="col-6">
                    <ul class="about-style">
                      <li class="abt-hover">
                        <div class="about-icon">
                          <div class="icon-hover">
                            <img :src='"../assets/images/icon1.png"' alt="easy-to-customized">
                          </div>
                        </div>
                        <div class="about-text">
                          <h3><format-message path="about.feature1" default-message="Buscador de productos"/></h3>
                        </div>
                      </li>
                      <li class="abt-hover">
                        <div class="about-icon">
                          <div class="icon-hover">
                            <img :src='"../assets/images/icon3.png"' alt="easy-to-use">
                          </div>
                        </div>
                        <div class="about-text">
                          <h3><format-message path="about.feature2" default-message="Reconocimiento de errores ortográficos"/></h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-6">
                    <ul class="about-style">
                      <li class="abt-hover">
                        <div class="about-icon">
                          <div class="icon-hover">
                            <img :src='"../assets/images/icon2.png"' alt="Awasome-Design">
                          </div>
                        </div>
                        <div class="about-text">
                          <h3><format-message path="about.feature3" default-message="Integración con plataformas de Ecommerce"/></h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="top-margin">
                  <button type="button" class="btn btn-custom theme-color theme-color">view more</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-7 d-medium-none">
            <div class="about-right">
              <div class="about-phone">
                <img  :src='"../assets/images/aboutus.png"' class="img-fluid" alt="aboutus">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About End -->

</template>
<script>
export default {
	name: 'about'
}
</script>
