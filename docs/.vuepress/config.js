const {
  defaultTheme
} = require('vuepress')
module.exports = {
  // 基本路径配置
  base: 'webdocs',
  lang: 'zh-CN',
  title: '你好！ vuepress',
  description: 'web教程 前端教程 HTML HTML5 CSS CSS3 JavaScript js Vue ElementUI Vant React ',
  head: [
    ['link', {
      rel: 'icon',
      href: '/imgs/logo.png'
    }]
  ],
  // 主题配置
  theme: defaultTheme({
    // 默认主题配置
    // home 导航上点击logo图标 或 404页面的返回首页链接  跳转的页面
    home: "/",
    // public下的 路径
    logo: '/imgs/logo.jpg',
    // 仓库地址
    repo: 'https://github.com/beijingGreateWall731/webdocs',
    // 导航栏
    navbar: [
      // navbarItem
      {
        text: '首页',
        link: '/'
      },
      // navbarGroup
      {
        text: "教程",
        children: [{
            text: 'HTML基础',
            link: '/html-docs/base.md'
          },
          {
            text: "Javascript",
            children: [{
                text: 'Javascript基础',
                link: '/js-docs/base.md'
              },
              {
                text: 'Javascript进阶',
                link: '/js-docs/advanced'
              },
            ]
          },
          {
            text: 'ES6基础',
            link: '/es6-docs/base.md'
          },
          {
            text: 'Vue基础',
            link: '/vue-docs/base.md'
          },
          {
            text: 'Vue3基础',
            link: '/vue-docs/v3_base.md'
          },
          {
            text: '移动端',
            link: '/mobile-docs/base.md'
          },
          {
            text: '中后台',
            link: '/middle-back-office-docs/base.md'
          },
          {
            text: 'React',
            link: '/react-docs/base.md'
          }
        ]
      }
    ],
    // 侧边栏 数组
    // 所有的页面使用相同的侧边栏
    // sidebar:[
    //   // SidebarItem
    //   {
    //     text:'Foo',
    //     link:'/foo/',
    //     collapsible:true,// 是否可折叠
    //     children:[
    //       // SidebarItem
    //       {
    //         text:'gitHub',
    //         link:'https://github.com',
    //         children:[]
    //       },
    //       // 字符串 页面文件路径
    //       '/foo/bar.md'
    //     ]
    //   },
    //    // 字符串 页面文件路径
    //    '/foo/foo.md'
    // ]
    // 侧边栏对象
    // 不同字路径下的页面会使用不同的侧边栏
    // sidebar:"auto"
    sidebar: {
      // key 为路径前缀 value 为sidebatItem对象数组
      '/foo/':[
        {
          text:'foo',
          collapsible:true,
          children:['/foo/bar.md','/foo/foo.md']
        }
      ],
      "/html-docs/":[
        {
          text:"html教程",
          collapsible:true,
          children:[
            '/html-docs/base.md',
            '/html-docs/advanced.md',
            '/html-docs/test1.md',
            '/html-docs/test2.md',
          ]
        }
      ]
    },
    editLinkText: "在Github上 编辑此页",
    docsRepo: 'https://github.com/beijingGreateWall731/webdocs',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/-/edit/:branch/:path',
    lastUpdatedText: "上次更新"
  })
}