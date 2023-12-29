<template>
  <button
    :count="this.$store.state.productToCart.length"
    :class="[
      'btn btn-warning d-block ms-0 ms-lg-2 position-relative',
      { mybtn: this.$store.state.productToCart.length > 0 },
    ]"
    data-bs-toggle="modal"
    data-bs-target="#cart"
  >
    <i class="bi bi-cart4"></i>
  </button>

  <Modal bsTarget="cart" :modalTitle="$t('cart')">
    <table class="table" v-if="this.$store.state.productToCart.length > 0">
      <thead>
        <tr>
          <th>პროდუქტი</th>
          <th>ფასი</th>
          <th>რაოდენობა</th>
          <th>ჯამი</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in this.$store.state.productToCart"
          :key="product.id"
        >
          <td>{{ product.title }} {{ product.brand }}</td>
          <td>{{ product.price }} $</td>
          <td>
            <button
              @click="changeCount(product.id, 'decrease')"
              class="btn btn-danger"
            >
              -
            </button>
            {{ product.productCount }}
            <button
              @click="changeCount(product.id, 'increase')"
              class="btn btn-success"
            >
              +
            </button>
          </td>
          <td>{{ product.price * product.productCount }} $</td>
          <td
            class="fs-5 fw-bold text-danger cursor-pointer"
            @click="deleteFromCart(product.id)"
          >
            X
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else class="text-center">კალათა ცარიელია</p>
  </Modal>
</template>
<script>
import Modal from "./Modal.vue";
export default {
  components: {
    Modal,
  },
  methods: {
    deleteFromCart(productID) {
      let index = this.$store.state.productToCart.findIndex((obj) => {
        return obj.id == productID;
      });

      this.$store.state.productToCart.splice(index, 1);

      localStorage.setItem(
        "productToCart",
        JSON.stringify(this.$store.state.productToCart)
      );
    },
    changeCount(productID, action) {
      let changebleProduct = this.$store.state.productToCart.find((ob) => {
        return ob.id == productID;
      });

      if (changebleProduct.productCount > 1) {
        if (action == "decrease") {
          changebleProduct.productCount--;
        }

        if (action == "increase") {
          changebleProduct.productCount++;
        }
      } else {
        this.deleteFromCart(changebleProduct.productID);
      }

      localStorage.setItem(
        "productToCart",
        JSON.stringify(this.$store.state.productToCart)
      );
    },
  },
};
</script>

<style>
.mybtn::after {
  content: attr(count);
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: red;
  color: white;
  border-radius: 10px;
  font-size: 12px;
  bottom: 20px;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
