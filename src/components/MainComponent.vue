<template>
  <MainHeader />
  <router-view />
  <MainFooter />
</template>
<script>
import MainHeader from "@/components/Header/MainHeader.vue";
import MainFooter from "@/components/Footer/MainFooter.vue";
export default {
  components: {
    MainHeader,
    MainFooter,
  },
};
</script>
