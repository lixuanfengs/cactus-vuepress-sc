(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{293:function(t,e,o){},350:function(t,e,o){"use strict";o(293)},363:function(t,e,o){"use strict";o.r(e);var i={data:()=>({twikoo:"",firstLoad:!0}),mounted(){null!=this.$frontmatter.comment&&!this.$frontmatter.comment||"/"==this.$route.path||this.otherPage(this.$route)||this.isFourZeroFour(this.$route)||setTimeout(()=>{this.twikooInit()},700)},watch:{$route(t,e){"/"==this.$route.path||this.otherPage(this.$route)||""!=this.$route.hash||this.isFourZeroFour(t)||("/"!=t.path&&0!=this.getCommentByFrontmatter(t)?"/"==e.path||this.otherPage(e)||!this.getCommentByFrontmatter(e)?this.firstLoad?setTimeout(()=>{this.twikooInit(),this.firstLoad=!1},700):this.twikooInit():"/"!=this.$route.path&&""==this.$route.hash&&setTimeout(()=>{this.updateComment()},700):this.deleteComment())}},methods:{twikooInit(){twikoo.init({envId:"https://twikoo.youngkbt.cn/",el:"#tcomment"}).then(()=>{this.loadTwikoo()})},loadTwikoo(){let t=document.getElementsByClassName("page")[0],e=document.getElementById("twikoo");e?this.twikoo=e:e=this.twikoo,t&&(e?t.appendChild(e):t.appendChild(this.twikoo)),this.updateComment()},updateComment(){let t=document.getElementsByClassName("tk-icon")[0];t&&t.click()},deleteComment(){let t=document.getElementById("twikoo");t&&t.parentNode.removeChild(t)},getCommentByFrontmatter(t){let e=!0;return this.$site.pages.forEach(o=>{o.path==t.path&&(e=o.frontmatter.comment)}),e},isFourZeroFour(t){let e=!0;return this.$site.pages.forEach(o=>{o.path==t.path&&(e=!1)}),e},otherPage:t=>"/archives/"==t.path||"/categories/"==t.path||"/tags/"==t.path}},s=(o(350),o(0)),h=Object(s.a)(i,(function(){return(0,this._self._c)("div",{attrs:{id:"tcomment"}})}),[],!1,null,null,null);e.default=h.exports}}]);