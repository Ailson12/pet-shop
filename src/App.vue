<template>
  <sidebar>
    <template v-slot:conteudo>
      <router-view></router-view>
    </template>
  </sidebar>
</template>

<script>
import { APP_NAME } from "../env"
import Sidebar from "./components/template/Sidebar"
export default {
  name: "App",
  components: {
    Sidebar
  },
  data() {
    return {
      APP_NAME
    }
  },
  mounted() {
    document.title = APP_NAME;
  }
}
</script>