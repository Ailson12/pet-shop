<template>
    <div class="c-app">
        <div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
            <div class="c-sidebar-brand d-lg-down-none">
                <div class="c-sidebar-brand-full">
                    <h5 class="d-inline mr-2">Mimo canino</h5>
                    <i id="logo" class="cil-animal"></i>
                </div>
            </div>
            <ul class="c-sidebar-nav ps ps--active-y">
                <li class="c-sidebar-nav-divider"></li>
                <li class="c-sidebar-nav-title">Cadastro</li>
                   <li class="c-sidebar-nav-item" >
                        <a href="#" class="c-sidebar-nav-link">
                            Produtos
                            <span class="cil-basket ml-2"></span>
                        </a>
                </li>
            </ul>
        </div>
        <div class="c-wrapper c-fixed-components">
            <header class="c-header c-header-light c-header-fixed c-header-with-subheader">
                <button 
                    class="c-header-toggler c-class-toggler d-lg-none mfe-auto"
                    type="button"
                    data-target="#sidebar"
                    data-class="c-sidebar-show"
                    >
                    <i class="cil-hamburger-menu"></i>
                </button>
                <button class="c-header-toggler c-class-toggler mfs-3 d-md-down-none" 
                    type="button" 
                    data-target="#sidebar" 
                    data-class="c-sidebar-lg-show" 
                    responsive="true">
                    <i class="cil-hamburger-menu"></i>
                </button>
            </header>
            <!-- "body" aonde ficara o conteudo -->
            <div class="c-body">
                <main class="c-main">
                    <div class="container-fluid">
                        <transition name="slide-fade" mode="out-in">
                            <div>
                                Conteudo
                            </div>
                        </transition>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sidebar"
}
</script>

<style>

</style>