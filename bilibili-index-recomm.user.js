// ==UserScript==
// @name        Bilibili首页推荐
// @namespace   https://github.com/biuuu
// @match       https://www.bilibili.com/
// @icon        https:////static.hdslb.com/mobile/img/512.png
// @grant       none
// @run-at      document-start
// @version     1.2
// @author      biuuu
// @description 把Bilibili首页推荐变成App推荐的形式
// ==/UserScript==
(function (global) {
  const style = document.createElement('style')
  style.textContent = `
  .recommended-container .container.refreshed > div {
    margin-top: 0 !important;
  }
  `
  document.head.appendChild(style)

  const isRecommApiURL = (url) => {
    return url.pathname === '/x/web-interface/index/top/feed/rcmd' && url.searchParams.get('fresh_type') === '3'
  }

  const originFetch = global.fetch
  global.fetch = async function (...args) {
    if (!args[0].startsWith('http')) {
      args[0] = location.protocol + args[0]
    }
    const url = new URL(args[0])
    if (isRecommApiURL(url)) {
      url.searchParams.set('ps', '20')
      url.searchParams.set('fresh_type', '5')
      url.searchParams.set('feed_version', 'V12')
      args[0] = url.toString()
    }
    const response = await originFetch(...args)
    return response
  }

  const isRecommendList = (list) => {
    if (Array.isArray(list)) {
      const foundedItem = list.find(item => {
        return item && item.cover && item.title
      })
      if (foundedItem) return true
    }
    return false
  }

  let times = 0
  const clickRefreshBtn = () => {
    const btn = document.querySelector('.feed-roll-btn button')
    if (btn) {
      btn.click()
    } else if (times < 100) {
      times++
      setTimeout(clickRefreshBtn, 100)
    }
  }

  let firstLoad = true
  const originSlice = Array.prototype.slice
  Array.prototype.slice = new Proxy(originSlice, {
    apply (target, self, args) {
      if (args && args[0] === 0 && args[1] === 6 && isRecommendList(self)) {
        if (!firstLoad) {
          args[1] = 20
        } else {
          firstLoad = false
          __pinia.feed.refreshed = true
          clickRefreshBtn()
        }
      }
      return Reflect.apply(target, self, args)
    }
  })
}(unsafeWindow || window))
