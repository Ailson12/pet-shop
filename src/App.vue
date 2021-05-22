<template>
  <sidebar>
    <template v-slot:conteudo>
      <router-view></router-view>
    </template>
  </sidebar>
</template>

<script>
import Sidebar from "./components/template/Sidebar"
export default {
  name: "App",
  components: {
    Sidebar
  }
}
</script>