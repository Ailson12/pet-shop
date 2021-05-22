<template>
    <div>
        <div v-for="(menu, indice) in routes" :key="indice + menu">
            <li class="c-sidebar-nav-divider"></li>
            <li class="c-sidebar-nav-title">{{ menu.titulo }}</li>
            <li v-for="(submenu, key) in menu.submenu" class="c-sidebar-nav-item" :key="key + submenu">
                <router-link :to="submenu.rota" class="c-sidebar-nav-link">
                    {{ submenu.titulo }}
                    <span :class="submenu.icone"></span>
                </router-link>
            </li>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        routes: {
            type: Array,
            require: true
        }
    }
}
</script>