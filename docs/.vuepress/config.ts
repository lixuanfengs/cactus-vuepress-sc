/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
// @ts-ignore
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm主题包
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Cactusli blog",
      description: '后端技术博客,专注前后端学习与总结。Java,JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github等技术文章。',
    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
 // base: '/cactus-vuepress/', 如果想使用自定义域名 需要注释 base
  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      {
        text: '后端',
        link: '/Java/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
          {
            text: '后端技术源码',
            items: [
              { text: '自建rpc', link: '/pages/920e2b/' },
            ],
          },{
            text: 'Docker && kubernetes',
            items: [
              { text: 'Docker', link: '/pages/ba6e69/' },
              { text: 'kubernetes', link: '/pages/237864/' },
            ],
          },
        ],
      },
      {
        text: '前端',
        link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
          {
            text: '前端文章',
            items: [
              { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
            ],
          },
          {
            text: '学习笔记',
            items: [
              { text: '《JavaScript教程》', link: '/note/javascript/' },
              { text: '《JavaScript高级程序设计》', link: '/note/js/' },
              { text: '《ES6 教程》', link: '/note/es6/' },
              { text: '《Vue》', link: '/note/vue/' },
              { text: '《React》', link: '/note/react/' },
              {
                text: '《TypeScript 从零实现 axios》',
                link: '/note/typescript-axios/',
              },
              {
                text: '《Git》',
                link: '/note/git/',
              },
              {
                text: 'TypeScript',
                link: '/pages/51afd6/',
              },
              {
                text: 'JS设计模式总结',
                link: '/pages/4643cd/',
              },
            ],
          },
          {
            text: '页面',
            link: '/ui/',
            items: [
              { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
              { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
            ],
          },
        ],
      },
      {
        text: '技术',
        link: '/technology/',
        items: [
          { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
          { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
          { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
          { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
        ],
      },
      {
        text: '更多',
        link: '/more/',
        items: [
          { text: '学习', link: '/pages/f2a556/' },
          { text: '面试', link: '/pages/aea6571b7a8bae86/' },
          { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
          { text: '实用技巧', link: '/pages/baaa02/' },
          { text: '友情链接', link: '/friends/' },
        ],
      },
      { text: '关于', link: '/about/' },
      {
        text: '收藏',
        link: '/pages/beb6c0bd8a66cea6/',
        // items: [
        //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
        //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
        //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
        // ],
      },
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.png', // 导航栏logo
    repo: 'lixuanfengs/cactus-vuepress', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

     bodyBgImg: [
         'https://cdn.jsdelivr.net/gh/lixuanfengs/blog-images/cactus-vuepress-img/87c01ec7gy1frmrxuzha8j21hc0u0gur.jpg',
         'https://cdn.jsdelivr.net/gh/lixuanfengs/blog-images/cactus-vuepress-img/87c01ec7gy1frmmw9573mj21kw0w0npk.jpg',
         'https://cdn.jsdelivr.net/gh/lixuanfengs/blog-images/cactus-vuepress-img/87c01ec7gy1frmrru1bh9j21hc0u0qbx.jpg',
         'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
         'https://cdn.jsdelivr.net/gh/lixuanfengs/blog-images/cactus-vuepress-img/87c01ec7gy1frmrtnq32hj21hc0u0wnl.jpg',
         'https://cdn.jsdelivr.net/gh/lixuanfengs/blog-images/cactus-vuepress-img/0060lm7Tly1ftg6owkw9lj31hc0u0tt9.jpg',
         'https://cdn.jsdelivr.net/gh/lixuanfengs/blog-images/cactus-vuepress-img/0060lm7Tly1ftg6x22sgcj31hc0u0qh8.jpg',
         'https://cdn.jsdelivr.net/gh/lixuanfengs/blog-images/cactus-vuepress-img/0060lm7Tly1ftg6omusg9j31hc0u010h.jpg',
         'https://cdn.jsdelivr.net/gh/lixuanfengs/blog-images/cactus-vuepress-img/0060lm7Tly1ftg6p3dkm1j31hc0u04mm.jpg',
         'https://cdn.jsdelivr.net/gh/lixuanfengs/blog-images/cactus-vuepress-img/87c01ec7gy1frmrr7y6u3j21hc0u0k0c.jpg',
         'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
         'https://cdn.jsdelivr.net/gh/lixuanfengs/blog-images/cactus-vuepress-img/87c01ec7gy1frmmknznonj21hc0u01l1.jpg',
         'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg',
         'https://cactusmall.oss-cn-beijing.aliyuncs.com/cactusli/anime%20aesthetics%20-%20thirty-seven.gif',
         'https://cdn.jsdelivr.net/gh/lixuanfengs/blog-images/cactus-vuepress-img/87c01ec7gy1frmmmaptjmj21hc0u0npf.jpg',
         'https://cdn.jsdelivr.net/gh/lixuanfengs/blog-images/cactus-vuepress-img/87c01ec7gy1frmrz8e3ytj21hc0u0wnn.jpg',
         'https://cdn.jsdelivr.net/gh/lixuanfengs/blog-images/cactus-vuepress-img/0060lm7Tly1ftg6ozby6nj31hc0u01cf.jpg',
         'https://cdn.jsdelivr.net/gh/lixuanfengs/blog-images/cactus-vuepress-img/0060lm7Tly1ftg6xc454vj31hc0u07wh.jpg',
     ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
     bodyBgImgOpacity: 0.7, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
     titleBadge: false, // 文章标题前的图标是否显示，默认true
     titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
       '图标地址1',
       '图标地址2'
     ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: false, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'lixuanfengs', // 必需
      link: 'https://github.com/lixuanfengs', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: 'https://cactusmall.oss-cn-beijing.aliyuncs.com/cactusli/cactusxx.jpg',
      name: 'Cactus Li',
      slogan: '后端小学生',
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:1183895890@qq.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/lixuanfengs',
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/playlist?id=755597173',
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2022, // 博客创建年份
      copyrightInfo:
        'Cactusli | <a href="https://github.com/lixuanfengs/cactus-vuepress/blob/master/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签或换行标签</br>
    },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: 'cactusli',
        link: 'https://github.com/lixuanfengs'
      }
    },

    // 自定义hmtl(广告)模块
    htmlModules
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: '后端端博客,个人技术博客,后端,后端开发,前端框架,Java后端,后端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
      },
    ],
    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
  ],


  // 插件配置
  plugins: <UserPlugins>[

    'vuepress-plugin-baidu-autopush', // 百度自动推送

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode,
      },
    ],

    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
    'fulltext-search',

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    // 'thirdparty-search': {
    //   thirdparty: [
    //     {
    //       title: '在MDN中搜索',
    //       frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
    //       behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在Runoob中搜索',
    //       frontUrl: 'https://www.runoob.com/?s=',
    //     },
    //     {
    //       title: '在Vue API中搜索',
    //       frontUrl: 'https://cn.vuejs.org/v2/api/#',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q=',
    //     },
    //     {
    //       title: '通过百度搜索本站的',
    //       frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
    //     },
    //   ],
    // },

    [
      'one-click-copy', // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],

    [
      'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      {
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    [
      'vuepress-plugin-comment', // 评论
      {
        choosen: 'gitalk',
        options: {
          clientID: '5942c087c9fcf64976c3',
          clientSecret: 'ee148e6578ef59a712692c1a70219408bad7adba',
          repo: 'cactus-vuepress', // GitHub 仓库
          owner: 'lixuanfengs', // GitHub仓库所有者
          admin: ['lixuanfengs'], // 对仓库有写权限的人
          // distractionFreeMode: true,
          pagerDirection: 'last', // 'first'正序 | 'last'倒序
          id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
          title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
          labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
          body:
            '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts',
  ]
})
