(window.webpackJsonp=window.webpackJsonp||[]).push([[356],{708:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("FEBS Cloud Web的登录逻辑比较简单，大致过程如下图所示：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://s2.ax1x.com/2019/08/28/mHF6WF.png",alt:"158.png"}})]),s._v(" "),n("p",[s._v("登录的具体代码实现如下（位于FEBS Cloud Web的src/views/login/index.vue）：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("handleLogin() {\n  this.$refs.loginForm.validate(valid => {\n    if (valid) {\n      this.loading = true\n      const that = this\n      this.$login('auth/oauth/token', {\n        ...that.loginForm,\n        key: this.randomId\n      }).then((r) => {\n        const data = r.data\n        this.saveLoginData(data)\n        this.$get('auth/user').then((r) => {\n          this.$store.commit('account/setUser', r.data.principal)\n          this.$message({\n            message: this.$t('tips.loginSuccess'),\n            type: 'success'\n          })\n          that.loading = false\n          this.$router.push('/')\n        }).catch((error) => {\n          this.$message({\n            message: this.$t('tips.loginFail'),\n            type: 'error'\n          })\n          console.error(error)\n          that.loading = false\n        })\n        this.$get(`system/user/success/${that.loginForm.username}`).catch((e) => { console.log(r) })\n      }).catch((error) => {\n        console.error(error)\n        that.loading = false\n        this.changeCodeImage()\n      })\n    } else {\n      return false\n    }\n  })\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br")])]),n("p",[s._v("上面的"),n("code",[s._v("handleLogin")]),s._v("方法中，我们首先对用户输入的内容进行了校验（比如用户名密码，验证码是否都有填写），校验通过后，使用6.1节中封装好的login方法到后端获取访问令牌（请求头携带了"),n("code",[s._v("Authorization = Basic ZmViczoxMjM0NTY=")]),s._v("）。获取访问令牌的过程，我们之前在PostMan里演示很多遍了，只不过这里用JS实现罢了。当用户登录成功，后端会返回如下JSON数据：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n    "access_token": "78bcf572-c7ec-40e3-bf22-35ce17c618ee",\n    "token_type": "bearer",\n    "refresh_token": "7d2c2478-07ef-43c4-b9f8-f57157b6abed",\n    "expires_in": 86399,\n    "scope": "all"\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("上面JSON包含了访问令牌，令牌失效时间和刷新令牌等信息，我们通过"),n("code",[s._v("saveLoginData")]),s._v("方法将这些信息存储到浏览器内存中，供后续使用。"),n("code",[s._v("saveLoginData")]),s._v("具体代码如下所示：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("saveLoginData(data) {\n  this.$store.commit('account/setAccessToken', data.access_token)\n  this.$store.commit('account/setRefreshToken', data.refresh_token)\n  const current = new Date()\n  const expireTime = current.setTime(current.getTime() + 1000 * data.expires_in)\n  this.$store.commit('account/setExpireTime', expireTime)\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("上面代码中，我们将令牌等信息存储到了Vuex中。虽然Vuex能够存储信息并全局生效，但是当我们刷新页面后，这些信息就会丢失，我们通常借助LocalStorage来持久化信息。比如查看"),n("code",[s._v("setAccessToken")]),s._v("的源码（位于src/store/modules/account.js）:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import db from '@/utils/localstorage'\n\nexport default {\n  namespaced: true,\n  state: {\n    accessToken: db.get('ACCESS_TOKEN'),\n    ......\n  },\n  mutations: {\n    setAccessToken(state, val) {\n      db.save('ACCESS_TOKEN', val)\n      state.accessToken = val\n    },\n    ......\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("可以看到，我们不但设置了"),n("code",[s._v("state.accessToken")]),s._v("的值，还使用了"),n("code",[s._v("db.save")]),s._v("方法（封装后的LocalStorage）将访问令牌保存到了浏览器内存中。")]),s._v(" "),n("p",[s._v("此外，我们还在"),n("code",[s._v("saveLoginData")]),s._v("方法中通过"),n("code",[s._v("expires_in")]),s._v("（令牌的有效时间，单位为秒）计算出了令牌的具体失效时间点，这个时间点用于后续刷新令牌时使用，在6.5节会详细介绍。")])])}),[],!1,null,null,null);n.default=t.exports}}]);