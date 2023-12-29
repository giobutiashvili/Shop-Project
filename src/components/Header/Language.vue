<template>
  <ul class="list-inline mb-0 ms-4">
    <li class="list-inline-item">
      <button
        @click="changeLang('ge')"
        :class="
          this.$store.state.language == 'ge'
            ? 'btn btn-success'
            : 'btn btn-secondary'
        "
      >
        GE
      </button>
    </li>
    <li class="list-inline-item">
      <button
        @click="changeLang('en')"
        :class="
          this.$store.state.language == 'en'
            ? 'btn btn-success'
            : 'btn btn-secondary'
        "
      >
        EN
      </button>
    </li>
  </ul>
</template>
<script>
export default {
  methods: {
    changeLang(lang) {
      this.$store.dispatch("changeLang", lang);
    },
  },
};
</script>
