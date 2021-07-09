// ==UserScript==
// @name        原神世界频道
// @namespace   https://github.com/biuuu/YSSJPD
// @match       https://live.bilibili.com/21987615
// @icon        https://biuuu.github.io/YSSJPD/256x256.png
// @grant       none
// @run-at      document-body
// @version     1.1
// @author      芭芭拉
// @description 这里是原神世界频道，你可以在这里讨论原神哦 https://live.bilibili.com/21987615
// @updateURL   https://biuuu.github.io/YSSJPD/index.user.js
// @supportURL  https://github.com/biuuu/YSSJPD/issues
// ==/UserScript==

const manifest = {
  "name": "原神世界频道",
  "short_name": "原神世界频道",
  "start_url": "https://live.bilibili.com/21987615",
  "display": "fullscreen",
  "background_color": "#fff",
  "theme_color": "#00bcd4",
  "description": "这里是原神世界频道，你可以在这里讨论原神哦",
  "icons": [
    {
      "src": "https://biuuu.github.io/YSSJPD/256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
}

document.title = '原神世界频道'

const blob = new Blob([JSON.stringify(manifest, null, 2)], {type : 'application/json'})
const objectURL = URL.createObjectURL(blob)

document.head.insertAdjacentHTML('beforeend', `<link rel="manifest" href="${objectURL}">`)

document.head.insertAdjacentHTML('beforeend', `
<style>
@media screen and (max-width: 550px) {
  .player-and-aside-area > div:not(#aside-area-vm) {
    display: none;
  }
  #aside-area-vm {
    width: 100vw;
    height: 100vh;
    position: static;
    border: 0;
  }
  #sections-vm, #sidebar-vm, #link-footer-vm,
  .live-room-app > div:not(main) {
    display: none;
  }
  .live-room-app .app-content .app-body {
    min-width: auto;
    max-width: 100%;
    width: auto;
  }
  .live-room-app .app-content {
    padding-top: 0;
  }
  #rank-list-vm, #pay-note-panel-vm {
    display: none;
  }
  .live-room-app .app-content .app-body .player-and-aside-area .aside-area .chat-history-panel {
    height: calc(100% - 145px);
  }
  #danmaku-buffer-prompt {
    width: calc(100vw - 20px);
  }
  #chat-control-panel-vm {
    border-radius: 0;
  }
  .live-room-app .app-content .app-body {
    padding: 0;
  }
  #fans-medal-popover, #brush-prompt, #penury-gift-msg,
  .chat-item.gift-item {
    display: none;
  }
  #aside-area-vm > div:not(.chat-history-panel,.chat-control-panel) {
    display: none;
  }
  .live-room-app .app-content .app-body .player-and-aside-area {
    margin-bottom: 0;
  }
  .chat-history-panel .chat-history-list.with-penury-gift.with-brush-prompt,
  .chat-history-panel .chat-history-list.with-brush-prompt {
    height: 100%;
  }
  body {
    min-width: auto;
  }
}
</style>
`)