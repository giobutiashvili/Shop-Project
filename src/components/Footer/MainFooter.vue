<template>
  <footer class="bg-dark text-light">
    <div class="container p-5">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 col-md-6 col-lg-4 mt-3">
          <h5>სწრაფი ლინკები</h5>
          <links />
        </div>

        <div class="col-12 col-md-6 col-lg-4 mt-3">
          <subscribe />
        </div>

        <div class="col-12 col-md-6 col-lg-4 mt-3">
          <info />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import links from "@/components/Footer/Links.vue";
import subscribe from "@/components/Footer/Subscribe.vue";
import info from "@/components/Footer/Info.vue";

export default {
  components: {
    links,
    subscribe,
    info,
  },
};
</script>
<style>
footer {
  position: relative;
}
</style>
