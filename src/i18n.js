import { createI18n } from "vue-i18n";
import messages from "@/locales/locales";

const i18n = createI18n({
  locale: localStorage.getItem("lang") || "ge",
  fallbackLocale: localStorage.getItem("lang") || "ge",
  messages: messages,
});
export default i18n;
