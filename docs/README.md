---
# 首页不显示导航栏
navbar: false
# 设置当前页面为 首页
home: true
# 首页图片
heroImage: /imgs/logo.jpg
# 首页夜间模式的图片
heroImageDark: /imgs/44.png
# 首页大标题
heroText: 欢迎来到 不凡学院
# 首页的标题
tagline: 一家 踏实、负责、专业 的培训机构
# 首页按钮
actions:
 - text: 快速开始
   link: /html-docs/base.html
   type: primary
 - text: 课程介绍
   link: /guide/getting-started.html
   type: secondary
# 首页特性列表
features:
 - title: 实用优先
   details: 所有内容以当前热门的技术为主，以常见的前端展示效果为案例
 - title: 深入原理
   details: 授人以鱼不如授人以渔，了然
 - title: 真实项目
   details: 项目阶段，完全是企业级真实项目，UI设计稿，后台接口真实提供
# 首页页脚
footer: MIT Licensed | Copyright © 2022-present zhujinlong
---


[[toc]]

# Hello VuePress
这是学习vuepress的第一步 搭建环境
## 第二步 了解配置
+ 配置一
+ 配置二
vuepress2 已经发布了 :tada:
```js{1,6-8}
import {defaultTheme , defineUserConfig} from 'vuepress'
export default defineUserConfig({
  title:'你好 vuepress',

  theme:defaultTheme({
    logo:'https://vuejs.org/images/logo.png'
  })
})
```

```md
<!-- 默认情况下这里保持原样 -->
1+2+3 = {{1+2+3}}
````

```md:no-v-pre
 <!-- 这里会被vue编译 -->
1 + 2 + 3 = {{1 + 2 + 3}}
```

```js:no-v-pre
// 由于代码高亮，这里不会被正确编译
const onePlusTwoPlusThress = {{1 + 2 + 3}}
```

## 导入代码块
```md
<!-- 最简单的导入 -->
@[code](./foo.js)
```

```md
<!-- 导入部分代码可以这样写 -->
@[code{1-10}](./foo.js)
```

```md
<!-- 显示指定导入的代码类型 -->
@[code js](./foo.js)
```
实际上 `[]`中的第二部分会被作为代码块来处理，因为在上面 [代码块](README.md)中提到的内容都可以使用
```md
<!-- 行高亮 -->
@[code js{2,4-5}](./foo.js)
```
@[code js](./foo.js)


+ md中可以直接使用 `vue 模板语法`

<span v-for="item in 10" :key="item"> {{item}}-- </span>

**输入**
```md
这是默认主题内的组件 <Badge>  <Badge text="演示" />
```
**输出**
这是默认主题内的组件  <Badge text="演示" />
# 静态资源
## 相对路径
```md
![图片](./images/25.jpg)
```
![图片](./images/25.jpg)
```md
使用相对public 下的静态资源
![图片](/imgs/44.png)
```
![图片](/imgs/44.png)
# 测试持续集成 自动化部署