// ==UserScript==
// @name        自定义NGA移动端样式
// @namespace   https://github.com/biuuu
// @match        *://bbs.ngacn.cc/*
// @match        *://ngabbs.com/*
// @match        *://nga.178.com/*
// @match        *://bbs.nga.cn/*
// @grant       GM_addStyle
// @run-at      document-start
// @version     1.7
// @author      lvlvl
// ==/UserScript==

(function () {
  'use strict';

  GM_addStyle(`
.topic~span,
.replyer,
.forumbox .topicrow .postdate,
.right>.postbtmb,
#m_pbtntop {
  display: none !important;
}

.topicrow .c2 {
  display: flex;
  flex-direction: column-reverse;
  gap: 1em;
}

.row2 .c2 .posterInfoLine,
.row2 .c2,
.row1 .c2 .posterInfoLine,
.row1 .c2,
.contentBlock {
  background: transparent;
  border: none;
}

.topicrow .c2 {
  padding: 1em 1em !important;
  border-bottom: 1px solid hsl(0deg 0% 0% / 10%) !important;
}

.postrow .c2 {
  padding: 1em 1em 0 1em !important;
  border-bottom: 1px solid hsl(0deg 0% 0% / 10%) !important;
}

.posterInfoLine {
  margin: 0 !important;
  padding: 0;
  display: flex;
  align-items: center;
  font-size: 18px;
}

.module_wrap {
  margin: 0;
}

.forumbox .topicrow .topic {
  font-size: 22px;
  line-height: normal;
}

.topicrow .author {
  order: -1;
  margin: 0 !important;
}

.topicrow .posterInfoLine .replies {
  order: 1;
  margin: 0 0 0 1em !important;
}

.posterInfoLine .replies,
.block_txt:not(.contentFullWidthButton, .block_txt_c0, .block_txt_c2, .vertmod) {
  min-width: auto !important;
  padding: 0 !important;
  margin: 0 !important;
  color: #A9A9A9 !important;
  font-size: inherit !important;
  font-weight: normal !important;
  background: transparent !important;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif !important;
}

tr:not(.set_topic) .posterInfoLine .replies::after {
  content: '回复';
  margin-left: 4px;
}

.c2>.replies {
  display: none;
}

.replydate {
  margin-left: auto !important;
}

.postrow.row1 {
  background: #fdf5d4;
}

.postrow .author,
.postrow .userlink,
.postrow .block_txt:not(.contentFullWidthButton, .block_txt_c0, .block_txt_c2, .block_txt_c3, .vertmod) {
  color: inherit !important;
  font-weight: normal !important;
  font-size: inherit !important;
  margin-top: 2px;
}

.postrow .contentFullWidthButton {
  margin: 0.5em 0 !important;
}

.topicrow .posterInfoLine {
  line-height: 1 !important;
}

.postrow .posterInfoLine {
  padding: 0 6px !important;
}

#mainmenu {
  margin-top: 0 !important;
}

.postrow .posterInfoLine .userlink {
  color: #efb973 !important;
  font-size: 20px !important;
  display: inline-block;
}

.postrow .usercol {
  padding-top: 10px;
  display: inline-block;
}

.postrow .avatar {
  box-shadow: none !important;
  border-radius: 50% !important;
  margin: 0 1em 0 1em !important;
  width: 4em;
  height: 4em;
  object-fit: cover;
}

.postrow .c2 {
  display: flex;
  flex-direction: column;
}

.postrow .postInfo {
  order: 1;
  margin: 0.5em 0 !important;
  padding: 0 !important;
}

.postrow .posterInfoLineB {
  order: 2;
  border-top: 1px solid #00000015 !important;
  display: flex;
}

.postrow .posterInfoLine {
  margin: 0 -1em !important;
}

.posterInfoLineB .postbtmb {
  padding: 0.5em !important;
}

.posterInfoLineB>.postbtmb:first-child {
  order: 8;
}

.posterInfoLineB>.postbtmb:last-child {
  display: none;
}

.posterInfoLineB .noselectmenu {
  order: 7;
  margin-left: auto !important;
}

.postrow .posterInfoLine:not(.posterInfoLineB) {
  border-bottom: 1px solid #00000015;
  padding: 0 1em 1em 0 !important;
  line-height: 1 !important;
}

.postrow .c2 {
  position: relative;
}

.postrow .postInfo a.stxt {
  position: absolute;
  right: 1em;
  top: 8px;
  font-size: 20px;
}

.postrow .c2>.postInfo+span>br {
  display: none;
}

.postrow .c2 .posterInfoLine > .right:first-child + div {
  width: auto !important;
  margin: 0 !important;
  position: relative;
}

.postrow .c2 .posterInfoLine > .right:first-child + div > .avatar + img {
  margin-left: 0 !important;
  position: absolute;
  left: 10px;
  top: -6px;
}

.postrow .postInfo+span {
  margin: 1em 0 0 0;
  display: block !important;
}

.postrow .postInfo+span>div:first-child {
  display: none;
}

.forumbox .postrow .postcontent img:not(img[class]) {
  max-width: 100% !important;
  min-width: 320px !important;
}

.posterInfoLineB+span .postbodysubtitle {
  margin: 0.5em 0 !important;
}

.postcontent .quote:first-child {
  margin-top: 0;
}

.postcontent .quote+br {
  display: none;
}

#m_posts_c .postbox:first-child .postrow .postInfo+span>div:first-child {
  display: block;
  margin-bottom: 1em;
  font-size: 22px;
}

#m_posts_c .postbox:first-child {
  border-top: 1px solid #00000020 !important;
}

#m_posts_c .postbox:last-of-type {
  margin-bottom: 1em !important;
}

#mainmenu>.stdbtn>.innerbg>.right {
  float: none;
}

.catenew .togcheck {
  display: none;
}

#m_threads .forumbox>tbody a.topic {
  text-decoration: none !important;
}

.indexblock .catenew .cr,
.indexblock .catenew .c {
  background-position: 12px 6px !important;
}

.indexblock .catenew .a {
  margin: 0 0 0 58px;
  height: 52px;
}

.indexblock .catenew a {
  white-space: normal;
  font-size: 14px;
  font-weight: normal;
  color: #591804;
  line-height: 1.2;
  text-decoration: none !important;
}

.indexblock .catenew p {
  padding: 0;
  line-height: 1;
  white-space: normal;
}

.indexblock .catenew br {
  display: none;
}

.author .silver {
  color: inherit !important;
}

.indexblock .catenew .b {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  height: 100%;
  padding-right: 8px;
  box-sizing: border-box;
}

.catenew, .cateblock, .forumbox {
  border: none !important;
  box-shadow: none !important;
}

.forumbox .postrow .c2 .subtitle {
  padding: 0.5em 0 0 0;
  margin: 0.5em 0 0 0;
  line-height: 1;
  border-top: 1px solid #00000015;
}

.postcontent .userlink {
  color: #6a6a6a !important
}

#m_threads .forumbox tbody td.c2 {
  position: relative;
}

#m_threads .forumbox tbody a.topic:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.15);
}

.comment_c .posterInfoSub .avatar {
  margin-left: 0 !important;
}

#sub_forums_c .catenew .b {
  display: flex;
  align-items: center;
}

#m_cate5>.w100>div:first-of-type>a {
  display: none !important;
}

#m_cate5>.w100>div:first-of-type {
  padding: 0 !important;
}

#m_threads>.w100>span:first-of-type>div {
  padding: 0 !important;
}

#m_threads>.w100>span:first-of-type>div>a {
  display: none !important;
}

#b_nav> :not(.nav) {
  display: none;
}

#m_posts_c> :not(.forumbox.postbox) {
  display: none;
}
`)

  // Function to create and append a meta tag
  function addMetaTag(name, content) {
    // 检查是否已存在同名 meta 标签，避免重复添加（可选，但推荐）
    if (document.querySelector(`meta[name="${name}"]`)) {
      console.log(`Meta tag "${name}" already exists.`);
      // 可选：如果想强制覆盖，可以先移除旧的
      // const existingTag = document.querySelector(`meta[name="${name}"]`);
      // existingTag.parentNode.removeChild(existingTag);
      // return; // 如果不想覆盖，可以取消注释这行
    }

    const meta = document.createElement('meta');
    meta.setAttribute('name', name);
    meta.setAttribute('content', content);
    // 确保 head 存在后再添加
    if (document.head) {
      document.head.appendChild(meta);
      console.log(`Added meta tag: name="${name}", content="${content}"`);
    } else {
      // 如果 head 还不存在（理论上 @run-at document-start 时可能），
      // 尝试监听 DOMContentLoaded，但这会更晚执行
      document.addEventListener('DOMContentLoaded', () => {
        if (!document.querySelector(`meta[name="${name}"]`)) { // 再次检查
          document.head.appendChild(meta);
          console.log(`Added meta tag (on DOMContentLoaded): name="${name}", content="${content}"`);
        }
      });
    }
  }

  // 添加核心的 meta 标签
  addMetaTag('apple-mobile-web-app-capable', 'yes');
  addMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent'); // 或 'default', 'black'
  addMetaTag('apple-mobile-web-app-title', 'NGA玩家社区'); // 可选

  // 添加推荐的 viewport 标签（如果网站还没有的话）
  // 注意：如果网站已有 viewport，这里的添加可能会冲突或无效，需要判断处理
  if (!document.querySelector('meta[name="viewport"]')) {
    addMetaTag('viewport', 'width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover');
  } else {
    console.log("Viewport meta tag already exists.");
    // 你可能想修改已有的 viewport，但这更复杂，需要解析并修改 content 属性
  }
})();
