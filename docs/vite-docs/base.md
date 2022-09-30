# vite 教程
## 搭建第一个Vite项目
:::tip
Vite需要[Node.js](http://nodejs.cn/)版本在 **16+** 以上
:::
使用npm
```sh
npm create vite@latest
```
使用yarn
```sh
yarn create vite
```
然后按照操作提示即可。如果认为跟着操作穿件麻烦，还可以使用附加的命令来创建项目
比如创建一个vue项目：
```sh
# npm 6+
npm create vite@latest 项目名称 --template vue

# npm 7+

npm create vite@latest 项目名称 -- --template vue 

# yarn

yarn create vite 项目名称 --template vue 

```

## 命令行界面
通过脚手架安装的Vite项目中的默认 ` npm scripts `
```json
"scripts":{
  "dev":"vite", // 启动开发服务器，别名：`vite dev`,`vite serve`
  "build":"vite build", // 为生产环境构建产物
  "preview":"vite preview" // 本地预览生产构建产物
}
```

## CSS
可以这样直接将 `.css` 文件导入,导入的文件内容将插入到 ` style `标签中，同时支持 `HMR` .
```vue
<script setup>
  import '../common/common.css'
</script>
```

## `@import` 支持
在Vite中，支持`@import css` 内联
```vue
<style>
@import url(../common/common.css);
</style> 
```

## CSS Moudules
任何以 `.moudel.css` 为后缀的css文件都会认为是一个 **CSS Modules** 文件,导入这样的文件会返回一个相应的模块的对象。
```vue
<script setup>
import classes from '../common/demo.module.css'
onMounted(()=>{
  document.getElementById('demo').className = classes.blue
})
</script>
```

## 禁用CSS注入页面
自动注入页面的CSS可以使用`?inline`来关闭。
```vue{2}
<script setup>
  import '../common/common.css?inline'
</script>
```
## 静态资源处理
导入一个静态资源会返回解析后的**URL**
```vue
<script setup>
  import logo from '../assets/logo.jpg'
  onMounted(()=>{
    document.getElementById('logo').src = logo
  })
</script>
```

## JSON 可以直接被导入，支持具名导入
```vue
<script setup>
// 导入整个对象
import json from '../assets/article.json'
// 具名导入
import {JS} from '../assets/article.json'
</script>
```

## Glob导入
Vite 支持使用特殊的 `import.meta.glob函数` 从文件系统导入多个模块
匹配到的文件是懒加载的，通过动态导入实现，并且会在构建是分离为独立的chunk.
```vue
<script setup>
const modules  = import.meta.glob('./dir/*.js');

</script>
```

## 动态导入
和[glob导入](#glob导入)一样,Vite也支持动态导入
```vue
<script setup>
  const modules = await import(`./dir/${file}.js`)
</script>
``` 
:::warning
`flie`只支持一层的导入 如果file 是 `foo/bar`则导入失败
:::

