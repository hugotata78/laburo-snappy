<template>
  <div id="panel" class="bg-white">
    <div class="header"></div>
    <div class="container mt-3">
      <div class="d-flex flex-column justify-content-center p-5">
        <h1 class="text-center">Panel de Administrador</h1>
      </div>
      <div id="comentarios" class="mt-3">
        <h3 class="color-titulo">Lista de Comentarios</h3>
        <button
          class="btn btn-success"
          v-if="botones"
          v-on:click="mostrarFormularioAgregar"
        >
          Agregar un Comentario
        </button>
        <div v-if="formulariosAgregar">
          <form
            class=" needs-validation w-50 mx-auto border rounded p-3"
            enctype="mulitpart/form-data"
            v-on:submit.prevent="agregarComentario"
          >
            <h3 class="color-titulo">Agregar Testimonios</h3>
            <div class="input-group m-1 w-100 p-2">
              <input
                type="text"
                class="form-control m-1"
                placeholder="nombre y apellido"
                v-model="nombre"
                required
              />
              <input
                type="text"
                class="form-control m-1"
                placeholder="puesto"
                v-model="puesto"
                required
              />
            </div>
            <div class="input-group m-1 p-2">
              <textarea
                class="form-control m-1 w-100 p-2"
                placeholder="Comentario en Español"
                v-model="contenidoEnEspañol"
                required
              ></textarea>
            </div>
            <div class="input-group m-1 p-2">
              <textarea
                class="form-control m-1 w-100 p-2"
                placeholder="Comentario en Inglés"
                v-model="contenidoEnIngles"
                required
              ></textarea>
            </div>
            <div class="input-group m-1 p-2">
              <textarea
                class="form-control m-1 w-100 p-2"
                placeholder="Comentario en Portugués"
                v-model="contenidoEnPortugues"
                required
              ></textarea>
            </div>
            <div class="input-group m-1 w-100 p-2">
              <input
                type="file"
                accept="image/*"
                value="subir imagen"
                name=""
                id=""
                v-on:change="seleccionarImagen($event)"
                required
              />
              <button
                class="btn btn-info ml-2"
                v-on:click.prevent="guardarImagen"
              >
                Añadir Imagen
              </button>
            </div>
            <div class="input-group m-1 w-100 p-2">
              <button
                class="btn btn-secondary m-1 p-2"
                v-on:click.prevent="cancelar"
              >
                Salir
              </button>
              <input
                class="btn btn-primary m-1 p-2"
                type="submit"
                name=""
                value="Añadir Comentario"
                id=""
              />
            </div>
          </form>
        </div>
        <div v-if="formulariosEditar">
          <form
            class=" needs-validation w-50 mx-auto border rounded p-3"
            enctype="mulitpart/form-data"
            v-on:submit.prevent="editarComantario(item)"
          >
            <h3 class="color-titulo">Editar Testimonios</h3>
            <div class="input-group m-1 w-100 p-2">
              <input
                type="text"
                class="form-control m-1"
                placeholder="nombre y apellido"
                v-model="nombre"
                required
              />
              <input
                type="text"
                class="form-control m-1"
                placeholder="puesto"
                v-model="puesto"
                required
              />
            </div>
            <div class="input-group m-1 p-2">
              <textarea
                class="form-control m-1 w-100 p-2"
                placeholder="Comentario en Español"
                v-model="contenidoEnEspañol"
                required
              ></textarea>
            </div>
            <div class="input-group m-1 p-2">
              <textarea
                class="form-control m-1 w-100 p-2"
                placeholder="Comentario en Inglés"
                v-model="contenidoEnIngles"
                required
              ></textarea>
            </div>
            <div class="input-group m-1 p-2">
              <textarea
                class="form-control m-1 w-100 p-2"
                placeholder="Comentario en Portugués"
                v-model="contenidoEnPortugues"
                required
              ></textarea>
            </div>
            <div class="input-group m-1 w-100 p-2">
              <input
                type="file"
                accept="image/*"
                value="subir imagen"
                name=""
                id=""
                v-on:change="seleccionarImagen($event)"
                required
              />
              <button
                class="btn btn-info ml-2"
                v-on:click.prevent="guardarImagen"
              >
                Añadir Imagen
              </button>
            </div>
            <div class="input-group m-1 w-100 p-2">
              <button
                class="btn btn-secondary m-1 p-2"
                v-on:click.prevent="cancelar"
              >
                Salir
              </button>
              <input
                class="btn btn-primary m-1 p-2"
                type="submit"
                name=""
                value="Guardar Cambios"
                id=""
              />
            </div>
          </form>
        </div>
        <table class="table table-hover mt-5 border rounded">
          <thead>
            <tr>
              <th class="color-titulo">Nombre</th>
              <th class="color-titulo">Puesto</th>
              <th class="color-titulo">Contenido en Español</th>
              <th class="color-titulo">Contenido en Inglés</th>
              <th class="color-titulo">Contenido en Portugués</th>
              <th class="color-titulo">Url Imagen</th>
              <th class="color-titulo">Editar</th>
              <th class="color-titulo">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in comentarios" :key="item.id">
              <td>{{ item.nombre }}</td>
              <td>{{ item.puesto }}</td>
              <td>{{ item.contenidoEnEspañol }}</td>
              <td>{{ item.contenidoEnIngles }}</td>
              <td>{{ item.contenidoEnPortugues }}</td>
              <td>{{ item.imgUrl }}</td>
              <td>
                <b-button
                  v-b-modal.modal-prevent-edit
                  v-on:click="mostrarFormularioEditar(item)"
                  class="btn btn-success"
                >
                  <b-icon-pencil-square></b-icon-pencil-square>
                </b-button>
              </td>
              <td>
                <button
                  v-on:click="eliminarComentario(item)"
                  class="btn btn-danger"
                >
                  <b-icon-trash-fill></b-icon-trash-fill>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <go-top class="bg-success"></go-top>
    </div>
  </div>
</template>
<script>
  import GoTop from "@inotom/vue-go-top";
  import { db, storage, obtenerComentarios } from "../config";

  const myBtn = document.getElementById("myBtn");
  const ref = storage.ref();
  const coleccion = db.collection("comentarios");

  export default {
    name: "Panel",
    components: {
      GoTop,
    },
    data() {
      return {
        formulariosAgregar: false,
        formulariosEditar: false,
        botones: true,
        nombre: null,
        contenidoEnEspañol: null,
        contenidoEnIngles:null,
        contenidoEnPortugues:null,
        puesto: null,
        imgUrl: null,
        imagen: null,
        comentarios: [],
        item: null,
        isLoading:true
      };
    },
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
    
    firestore() {
      return {
        comentarios: coleccion,
      };
    },
    methods: {
      seleccionarImagen(e) {
        this.imagen = e.target.files[0];
      },
      guardarImagen() {
        const refImg = ref.child("images/" + this.imagen.name);
        const metadata = { contentType: "img/jpeg" };
        refImg
          .put(this.imagen, metadata)
          .then((e) => {
            ref
              .child(e.ref._delegate._location.path_)
              .getDownloadURL()
              .then((url) => {
                return (this.imgUrl = url);
              });
          })
          .catch((e) => console.log(e));
      },
      agregarComentario() {
        this.$firestore.comentarios
          .add({
            nombre: this.nombre,
            puesto: this.puesto,
            contenidoEnEspañol: this.contenidoEnEspañol,
            contenidoEnIngles:this.contenidoEnIngles,
            contenidoEnPortugues:this.contenidoEnPortugues,
            imgUrl: this.imgUrl,
          })
          .then(() => {
            this.$swal(
              "¡Realizado!",

              "Los datos se guardaron exitosamente.",

              "success"
            );
          });
        this.nombre = null;
        this.puesto = null;
        this.contenidoEnEspañol = null;
        this.contenidoEnIngles = null;
        this.contenidoEnPortugues = null;
        this.formulariosAgregar = false;
        this.botones = true;
      },
      editarComantario(item) {
        this.$firestore.comentarios
          .doc(item[".key"])
          .set({
            nombre: this.nombre,
            puesto: this.puesto,
            contenidoEnEspañol: this.contenidoEnEspañol,
            contenidoEnIngles:this.contenidoEnIngles,
            contenidoEnPortugues:this.contenidoEnPortugues,
            imgUrl: this.imgUrl,
          })
          .then(() => {
            this.$swal(
              "¡Realizado!",

              "Los cambios se realizaron exitosamente.",

              "success"
            );
          });
        this.nombre = null;
        this.puesto = null;
        this.contenidoEnEspañol = null;
        this.contenidoEnIngles = null;
        this.contenidoEnPortugues = null;
        this.imgUrl = null;
        this.formulariosEditar = false;
        this.botones = true;
      },
      eliminarComentario(item) {
        this.$swal({
          title: "¿Estás seguro?",

          text: "No podras revertir los cambios!",

          type: "warning",

          showCancelButton: true,

          confirmButtonColor: "#3085d6",

          cancelButtonColor: "#d33",

          confirmButtonText: "Si, deseo eliminarlo!",

          cancelButtonText: "Cancelar",
        }).then((result) => {
          if (result.value) {
            this.$firestore.comentarios.doc(item[".key"]).delete();

            this.$swal(
              "¡Elimonado!",

              "Tu archivo ha sido eliminado.",

              "success"
            );
          }
        });
      },
      mostrarFormularioAgregar() {
        
        this.formulariosAgregar = true;
        this.botones = false;
      },
      mostrarFormularioEditar(item) {
        this.formulariosEditar = true;
        this.nombre = item.nombre;
        this.contenidoEnEspañol = item.contenidoEnEspañol;
        this.contenidoEnIngles = item.contenidoEnIngles;
        this.contenidoEnPortugues = item.contenidoEnPortugues;
        this.puesto = item.puesto;
        this.item = item;
        this.botones = false;
      },

      cancelar() {
        this.$swal({
          title: "¿Estás seguro?",

          text: "Los cambios realizados hasta el momento se perderan!",

          type: "warning",

          showCancelButton: true,

          confirmButtonColor: "#3085d6",

          cancelButtonColor: "#d33",

          confirmButtonText: "Si, deseo salir!",
          cancelButtonText: "Cancelar!",
        }).then((result) => {
          if (result.value) {
            this.botones = true;
            this.formulariosAgregar = false;
            this.formulariosEditar = false;
            this.nombre = null;
            this.puesto = null;
            this.contenido = null;
            this.imgUrl = null;
          }
        });
      },

      resetearUrl() {
        window.history.replaceState(null, null, " ");
      },
    },
    
  };
</script>
<style>
  html {
    scroll-behavior: smooth;
    overflow-y: scroll;
  }
  
  .header {
    margin: 0;
    padding: 0;
    height: 100px;
    width: 100%;
    background: #21ecff;
  }
  .color-titulo {
    color: #21ecff;
    text-align: center;
  }

  .bg-scroll-top {
    background: #21ecff;
  }
</style>
