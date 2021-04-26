<template>
    <!-- Feature Section start -->
    <section id="feature" class="feature">
      <div class="feature-decor">
        <div class="feature-circle1"><img :src='"../assets/images/feature2.png"' alt=""></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="feature-phone">
            <img :src='"../assets/images/222.png"' class="img-fluid" alt="">
          </div>
          <div class="offset-lg-4 col-lg-8">
            <div class="row">
              <div class="col-sm-12 mrgn-md-top">
                <h2 class="title"><format-message path="fatures.featuresof" tag="div" default-message="Caracteristicas de"/> <span><format-message path="features.snappy" default-message=" Snappy"/></span></h2>
              </div>
              <div class="col-12 col-md-6">
                <ul class="feature-style">
                  <li>
                    <div class="feature-icon">
                      <img :src='"../assets/images/icon/1.png"' alt="icon">
                    </div>
                    <div class="feature-subtitle">
                      <h3><format-message path="features.feature1title" default-message="ASISTENTE DE COMPRAS"/></h3>
                    </div>
                    <div>
                      <p><format-message path="features.feature1desc" default-message="Ofrece a tus visitantes una nueva forma de encontrar los productos. Hoy en día los usuarios no quieren buscar productos por categorías, quieren chatear!"/></p>
                    </div>
                  </li>
                  <li>
                    <div class="feature-icon">
                      <img :src='"../assets/images/icon/3.png"' alt="icon">
                    </div>
                    <div class="feature-subtitle">
                      <h3><format-message path="features.feature2title" default-message="REDUCE 80% EN COSTOS DE ATENCIÓN"/></h3>
                    </div>
                    <div>
                      <p><format-message path="features.feature2desc" default-message="Tus visitantes no quieren mandar un correo o llamar por teléfono. Brinda atención inmediata las 24 horas, y reduce hasta el 80% de las preguntas frecuentes."/></p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="col-12 col-md-6 sm-m-top">
                <ul class="feature-style">
                  <li>
                    <div class="feature-icon">
                      <img :src='"../assets/images/icon/5.png"' alt="icon">
                    </div>
                    <div class="feature-subtitle">
                       <h3><format-message path="features.feature3title" default-message="ASISTENTE IA + HUMANO"/></h3>
                    </div>
                    <div>
                      <p><format-message path="features.feature3desc" default-message="El asistente te avisará cuando un usuario quiere hablar contido o tus vendedores o bien puedes unirte a las conversaciones en tiempo real y toma el control cuando tú quieras."/></p>
                    </div>
                  </li>
                  <li>
                    <div class="feature-icon">
                      <img :src='"../assets/images/icon/6.png"' alt="icon">
                    </div>
                    <div class="feature-subtitle">
                       <h3><format-message path="features.feature4title" default-message="SOPORTE 24 x 7"/></h3>
                    </div>
                    <div>
                      <p><format-message path="features.feature4desc" default-message="Con Snappy Labs tus clientes siempre obtendran respuesta!"/></p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Feature Section End -->
</template>
<script>
export default {
	name: 'feature'
}
</script>
