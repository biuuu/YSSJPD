// ==UserScript==
// @name        梦幻西游网页版
// @namespace   https://github.com/biuuu/YSSJPD
// @match       https://xyh5.163.com/game/*
// @icon        https://biuuu.github.io/YSSJPD/256x256.png
// @grant       none
// @run-at      document-body
// @version     1.3
// @author      芭芭拉
// @description https://xyh5.163.com/game/?bg=false
// @updateURL   https://biuuu.github.io/YSSJPD/mhxy.user.js
// @supportURL  https://github.com/biuuu/YSSJPD/issues
// ==/UserScript==

if (true) {
  const manifest = {
    "name": "梦幻西游网页版",
    "short_name": "梦幻西游网页版",
    "start_url": "https://xyh5.163.com/game/?bg=false",
    "display": "fullscreen",
    "background_color": "#fff",
    "theme_color": "#00bcd4",
    "description": "这里是梦幻西游网页版哦",
    "icons": [
      {
        "src": "https://biuuu.github.io/YSSJPD/mhxy.ico",
        "sizes": "64x64",
        "type": "image/vnd.microsoft.icon"
      }
    ],
  }

  const blob = new Blob([JSON.stringify(manifest, null, 2)], {type : 'application/json'})
  const objectURL = URL.createObjectURL(blob)

  document.head.insertAdjacentHTML('beforeend', `<link rel="manifest" href="${objectURL}">`)
}

document.head.insertAdjacentHTML('beforeend', `
<style>
 
</style>
`)
