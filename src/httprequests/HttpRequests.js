import axios from "axios";

export default class HttpRequests {
  getCategories() {
    return axios.get("products/categories");
  }

  getProducts(categoryFilter) {
    if (categoryFilter) {
      var url = "/category/" + categoryFilter;
    } else {
      var url = "";
    }
    return axios.get("products" + url);
  }

  getProductFull(productID) {
    return axios.get("products/" + productID);
  }
}
