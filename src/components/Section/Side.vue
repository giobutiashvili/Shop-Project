<template>
  <div class="col-12 mb-2 mb-lg-0 col-lg-3">
    <div class="w-100 border border-success-subtle rounded shadow p-2">
      <h4 class="text-center">{{ $t("category") }}</h4>
      <ul
        v-if="categories.length > 0"
        class="list-unstyled d-flex flex-wrap justify-content-around d-lg-block"
      >
        <li class="my-2 d-grid" v-for="(category, i) in categories" :key="i">
          <router-link
            class="btn btn-outline-info text-decoration-none text-dark"
            :to="'/' + category"
          >
            {{ $t("categories." + category) }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HttpRequests from "@/httprequests/HttpRequests";
const httprequests = new HttpRequests();

export default {
  data() {
    return {
      categories: [],
    };
  },

  mounted() {
    this.getCategories();
  },

  methods: {
    getCategories() {
      httprequests.getCategories().then((response) => {
        this.categories = response.data;
      });
    },
  },
};
</script>
