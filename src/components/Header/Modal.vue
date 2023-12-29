<template>
  <div
    class="modal fade"
    :id="bsTarget"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            {{ modalTitle }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <slot> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bsTarget", "modalTitle"],
};
</script>

<style>
.modal-backdrop {
  z-index: 1000 !important;
}
</style>
