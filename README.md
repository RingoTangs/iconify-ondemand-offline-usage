# Iconify官网

[Iconify Design: All popular icon sets, one framework.](https://iconify.design/)



# Getting Started

```
yarn

yarn dev
```

以下方法全部都是 `Iconify` 按需(On Demand)离线(Offline)使用方法。

默认情况下，`Iconify` 会从网络上加载图标。



# Iconify 在 Vue3 工程的使用方法

## 方法一：Svg Framework

官网文档链接：[Iconify SVG Framework](https://iconify.design/docs/icon-components/svg-framework/)

```
yarn add @iconify-json/mdi   # 这里后面的 mdi 可以换成其他的库, 这里以mdi为例

yarn add @iconify/iconify
```

```typescript
// main.ts

import { icons } from "@iconify-json/mdi";
import { addCollection } from "@iconify/iconify";
addCollection(mdi);
```

```vue
<!-- Hello.vue -->

<template>
  <i class="iconify" data-icon="mdi:ab-testing"></i>
</template>
```



## 方法二：Vue Component

官网文档链接：[Iconify for Vue](https://iconify.design/docs/icon-components/vue/)

```
yarn add @iconify-json/mdi   # 这里后面的 mdi 可以换成其他的库, 这里以mdi为例

yarn add @iconify/vue
```

```typescript
// main.ts

import { icons } from "@iconify-json/mdi";
import { addCollection } from "@iconify/vue";
addCollection(mdi);
```

```vue
<!-- Hello.vue -->
<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <Icon icon="mdi:ab-testing"></Icon>
</template>
```



## 方法三：添加自定义图标

创建 IconifyJSON 文件

```json
/* my-icon */
{
  "prefix": "my",
  "icons": {
    "ab-testing": {
      "body": "<path fill=\"currentColor\" d=\"M4 2a2 2 0 0 0-2 2v8h2V8h2v4h2V4a2 2 0 0 0-2-2H4m0 2h2v2H4m18 9.5V14a2 2 0 0 0-2-2h-4v10h4a2 2 0 0 0 2-2v-1.5a1.54 1.54 0 0 0-1.5-1.5a1.54 1.54 0 0 0 1.5-1.5M20 20h-2v-2h2v2m0-4h-2v-2h2M5.79 21.61l-1.58-1.22l14-18l1.58 1.22Z\"/>"
    }
  },
  "lastModified": 1689058119,
  "width": 24,
  "height": 24
}
```

```typescript
// main.ts
import { addCollection, disableCache } from "@iconify/iconify";
import {
  addCollection as addCollectionVue,
  disableCache as disableCacheVe,
} from "@iconify/vue";
import myIcon from "./my-icon.json";

addCollection(myIcon);    // 添加自定义图标
disableCache("all");

addCollectionVue(myIcon);  // 添加自定义图标
disableCacheVe("all");
```

```vue
<!-- Hello.vue -->
<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <Icon icon="my:ab-testing"></Icon>
  <i class="iconify" data-icon="my:ab-testing"></i>
</template>
```