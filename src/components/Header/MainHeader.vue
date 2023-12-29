<template>
  <nav class="navbar navbar-expand-lg sticky-top w-100 bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">ამაზონი</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <Nav />
        </ul>
        <Search />
        <div class="d-flex mt-2 mt-lg-0">
          <Cart />
          <Language />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Nav from "@/components/Header/Nav.vue";
import Search from "@/components/Header/Search.vue";
import Cart from "@/components/Header/Cart.vue";
import Language from "@/components/Header/Language.vue";

export default {
  components: {
    Nav,
    Search,
    Cart,
    Language,
  },
};
</script>
