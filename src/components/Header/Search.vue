<template>
  <form class="d-flex" role="search">
    <input
      v-model="searchword"
      class="form-control me-2"
      type="search"
      placeholder="search"
      aria-label="Search"
    />
  </form>
</template>
<script>
export default {
  data() {
    return {
      searchword: "",
    };
  },
  watch: {
    searchword(val) {
      if (val != "") {
        this.$store.dispatch("setSearchWord", val);
      }
    },
  },
};
</script>
