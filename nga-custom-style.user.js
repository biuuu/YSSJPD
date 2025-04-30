// ==UserScript==
// @name        自定义NGA移动端样式
// @namespace   https://github.com/biuuu
// @match        *://bbs.ngacn.cc/*
// @match        *://ngabbs.com/*
// @match        *://nga.178.com/*
// @match        *://bbs.nga.cn/*
// @grant       GM_addStyle
// @version     1.1
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

.posterInfoLine {
  margin: 0 !important;
}

body {
  background: #fef9e6;
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
  border-bottom: 1px solid hsl(0deg 0% 0% / 20%) !important;
}

.postrow .c2 {
  padding: 1em 1em 0 1em !important;
  border-bottom: 1px solid hsl(0deg 0% 0% / 10%) !important;
}

.posterInfoLine {
  padding: 0;
  display: flex;
  align-items: center;
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

.posterInfoLine .replies {
  order: 1;
  margin: 0 0 0 1em !important;
}

.posterInfoLine .replies,
.block_txt:not(.contentFullWidthButton, .block_txt_c0, .block_txt_c2, .vertmod) {
  min-width: auto !important;
  padding: 0 !important;
  color: #A9A9A9 !important;
  font-size: 19px !important;
  font-weight: normal !important;
  background: transparent !important;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif !important;
}

tr:not(.set_topic) .posterInfoLine .replies::after {
  content: '回复';
  margin-left: 2px;
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
  color: #efb973 !important;
  font-weight: normal !important;
  font-size: 22px !important;
  margin-top: 6px;
}

.postrow .contentFullWidthButton {
  margin: 0.5em 0 !important;
}

.postrow .posterInfoLine {
  padding: 0 !important;
}

.postrow .avatar {
  box-shadow: none !important;
  border-radius: 50% !important;
  margin: 0 1em 0 0 !important;
  width: 4em;
  height: 4em;
}

.postrow .avatar+img {
  position: relative;
  top: calc(-100% + 2px);
  left: -4px;
  margin-left: 0 !important;
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
  padding-bottom: 1em !important;
}

.postrow .c2 {
  position: relative;
}

.postrow .postInfo a.stxt {
  position: absolute;
  right: 1em;
  top: 1.6em;
}

.postrow .c2>.postInfo+span>br {
  display: none;
}

.postrow .postInfo+span {
  margin: 1em 0;
  display: block !important;
}

.postrow .postInfo+span>div:first-child {
  display: none;
}

.posterInfoLineB+span {
  border-top: 1px solid #00000015;
  margin-top: 0.5em !important;
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

#m_threads .forumbox>tbody {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.15);
}

#m_threads .forumbox>tbody a.topic {
  text-decoration: auto !important;
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
}

.indexblock .catenew p {
  padding: 0;
  line-height: 1;
  white-space: normal;
}

.indexblock .catenew br {
  display: none;
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

  // --- 配置 ---
  const delegationParentSelector = '#m_threads';
  const tbodySelector = '.forumbox > tbody';
  const targetLinkSelector = 'a.topic';
  const interactiveElementsSelector = 'a, button, input, select, textarea, [onclick]';

  // --- 核心：事件处理函数 ---
  function handleClick(event) {
    // `this` 在这里会是 delegationParent
    const tappedTbody = event.target.closest(tbodySelector);

    // 确保点击发生在目标 tbody 内，并且该 tbody 在委托父元素下
    if (!tappedTbody || !this.contains(tappedTbody)) {
      return;
    }

    const link = tappedTbody.querySelector(targetLinkSelector);
    if (!link || !link.href) {
      return;
    }

    const clickedInteractiveElement = event.target.closest(interactiveElementsSelector);
    if (clickedInteractiveElement && tappedTbody.contains(clickedInteractiveElement)) {
      return; // 点击的是内部可交互元素，执行默认行为
    }

    // 执行跳转
    // console.log('TBody background clicked via delegation, navigating to:', link.href);
    window.location.href = link.href;
  }

  // --- 查找并附加监听器的函数 ---
  function attachListener(parentEl) {
    if (parentEl && !parentEl.dataset.tapDelegationAttached) {
      console.log('Attaching click listener to:', parentEl);
      parentEl.addEventListener('click', handleClick, false);
      parentEl.dataset.tapDelegationAttached = 'true'; // 标记已附加，防止重复
      return true; // 表示成功附加
    }
    return false; // 表示未附加 (元素不存在或已附加)
  }

  // --- 初始化逻辑 ---
  function initialize() {
    // 1. 尝试立即查找父元素
    const immediateParent = document.querySelector(delegationParentSelector);
    if (attachListener(immediateParent)) {
      console.log('Tap enhancement initialized immediately.');
      return; // 成功找到并附加，完成初始化
    }

    // 2. 如果父元素尚未存在，则使用 MutationObserver 等待它出现
    console.log('Delegation parent not found immediately. Setting up observer...');
    const observer = new MutationObserver((mutationsList, obs) => {
      for (const mutation of mutationsList) {
        if (mutation.addedNodes.length > 0) {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
              // 检查添加的节点本身是否是目标父元素
              if (node.matches(delegationParentSelector)) {
                console.log('Delegation parent appeared:', node);
                if (attachListener(node)) {
                  obs.disconnect(); // 成功附加监听器后，停止观察
                  console.log('Observer disconnected.');
                  return; // 完成初始化
                }
              }
              // 检查添加的节点内部是否包含目标父元素 (不太可能，但为了完整性)
              else if (typeof node.querySelector === 'function') {
                const foundParent = node.querySelector(delegationParentSelector);
                if (foundParent) {
                  console.log('Delegation parent found within added node:', foundParent);
                  if (attachListener(foundParent)) {
                    obs.disconnect(); // 成功附加监听器后，停止观察
                    console.log('Observer disconnected.');
                    return; // 完成初始化
                  }
                }
              }
            }
          }
        }
      }
    });

    // 开始观察 document.body 的子节点和子树变化
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    console.log('Observer waiting for delegation parent...');
  }

  // --- 执行初始化 ---
  // 即使设置了 @run-at document-idle，也可能需要一点点延迟来确保某些框架初始化完毕
  // 但 MutationObserver 本身可以处理延迟，所以直接调用通常没问题
  initialize();

})();
































