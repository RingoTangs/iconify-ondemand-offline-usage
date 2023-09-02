import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { icons as mdi } from "@iconify-json/mdi";
import { icons as ic } from "@iconify-json/ic";
import { addCollection, disableCache } from "@iconify/iconify";
import {
  addCollection as addCollectionVue,
  disableCache as disableCacheVe,
} from "@iconify/vue";
import myIcon from "./my-icon.json";

// Iconify 离线使用

/**
 * https://iconify.design/docs/icon-components/svg-framework/
 */
// 使用行内元素渲染SVG
addCollection(mdi);
addCollection(ic);
addCollection(myIcon);    // 添加自定义图标
disableCache("all");

/**
 * https://iconify.design/docs/icon-components/vue/
 */
// 使用 Vue 组件渲染 SVG
addCollectionVue(ic);
addCollectionVue(mdi);
addCollectionVue(myIcon);  // 添加自定义图标
disableCacheVe("all");

createApp(App).mount("#app");
