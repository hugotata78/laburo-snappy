<template>
  <div>
    <!-- testimonial Section start-->
    <section id="testimonial" class="testimonial">
      <div class="testimonial-decor"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="row">
              <div
                v-for="item of comentarios"
                :key="item.id"
                class="col-lg-4 col-md-6"
              >
                <div class="review-box">
                  <img :src="item.imgUrl" alt="review" class="img-fluid" />
                  <h5>{{ item.nombre }}</h5>
                  <div class="rating-star">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div class="review-message">
                    <format-message
                      tag="p"
                      :default-message="cambiarIdioma(url, item)"
                    />
                  </div>
                  <h6>{{ item.puesto }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- testimonial Section End -->
  </div>
</template>
<script>
  import { db } from "../config";
  const coleccion = db.collection("comentarios");
  export default {
    name: "Testimonial",
    data() {
      return {
        comentarios: [],
        url: null
      };
    },
    mounted(){
      this.url = window.location.pathname
      
    },
    firestore() {
      return {
        comentarios: coleccion,
      };
    },

    methods: {
      cambiarIdioma(url, item) {
        switch (url) {
          case "/":
            return item.contenidoEnEspañol;
          case "/es":
            return item.contenidoEnEspañol;
          case "/en":
            return item.contenidoEnIngles;
          case "/br":
            return item.contenidoEnPortugues;
          default:
            return item.contenidoEnEspañol;
        }
        
      },
      
    },
  };
</script>
