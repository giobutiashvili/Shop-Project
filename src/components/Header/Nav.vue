<template>
  <li class="nav-item">
    <router-link class="nav-link" aria-current="page" to="/">{{
      $t("main")
    }}</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/aboutus">{{
      $t("aboutUs")
    }}</router-link>
  </li>

  <li class="nav-item">
    <router-link class="nav-link" to="/contact">{{
      $t("contact")
    }}</router-link>
  </li>
</template>
<script></script>
<style scoped>
a.router-link-active {
  color: lightseagreen;
  font-weight: bold;
}
</style>
