<template>
    <div>
        <h1>Fotos</h1>
        <div class="estilo">
            <ph-image v-ph-zoom='2.6' url='http://placehold.it/600/92c952' title="accusamus beatae ad facilis cum similique qui sunt"></ph-image>
            <div class="ph-btn">
            <ph-button type='submit' title="Remover" phStyle="danger" :msgConfirm='false' @eventClick="evento()"></ph-button>

            </div>
        </div>
    </div>
</template>

<script>
import zoom from "../../directives/zoom/Zoom";
import Image from "../shared/image/image";
import Button from "../shared/button/Button";

export default {
  components: {
    "ph-image": Image,
    "ph-button": Button
  },
  directives: {
    "ph-zoom": zoom
  },
  methods: {
    evento() {
      alert("Teste");
    }
  }
};
</script>

<style scoped>
.estilo {
  display: block;
  width: 150px;
  height: 150px;
  border: 1px solid black;
  margin: auto;
}

.ph-btn{
    padding-top: 5px;
}
</style>