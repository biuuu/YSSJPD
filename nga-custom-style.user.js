// ==UserScript==
// @name        自定义NGA移动端样式
// @namespace   https://github.com/biuuu
// @match        *://bbs.ngacn.cc/*
// @match        *://ngabbs.com/*
// @match        *://nga.178.com/*
// @match        *://bbs.nga.cn/*
// @grant       GM_addStyle
// @version     1.2
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
  text-decoration: auto !important;
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
  // 定义需要处理的区域及其选择器
  const targetsConfig = [
    {
      id: 'forumThreads', // 唯一标识符，用于调试和标记
      delegationParentSelector: '#m_threads',        // 委托事件监听器的父元素
      itemSelector: '.forumbox > tbody',             // 可点击的容器项 (相对于父元素或全局均可，只要能在父元素内唯一定位)
      targetLinkSelector: 'a.topic',                 // 容器项内部的目标链接
      interactiveElementsSelector: 'a, button, input, select, textarea, [onclick]', // 容器项内忽略跳转的交互元素
      cssHighlightSelector: '#m_threads .forumbox > tbody' // 用于 CSS 高亮的完整选择器
    },
    {
      id: 'indexBlocks',
      delegationParentSelector: '#indexBlockLeft',
      itemSelector: '.indexblock',
      targetLinkSelector: 'a.uitxt3',
      interactiveElementsSelector: 'a, button, input, select, textarea, [onclick]',
      cssHighlightSelector: '#indexBlockLeft .indexblock'
    }
    // 如果有更多区域，可以在这里添加更多配置对象
  ];

  // --- 通用：创建针对特定配置的点击处理函数 ---
  function createClickHandler(config) {
    return function handleClick(event) {
      // `this` 指向附加监听器的 delegationParent
      const tappedItem = event.target.closest(config.itemSelector);

      // 确保点击发生在目标 item 内，并且该 item 在委托父元素下
      if (!tappedItem || !this.contains(tappedItem)) {
        return;
      }

      const link = tappedItem.querySelector(config.targetLinkSelector);
      if (!link || !link.href) {
        // console.log(`[${config.id}] No valid target link found in tapped item:`, tappedItem);
        return;
      }

      const clickedInteractiveElement = event.target.closest(config.interactiveElementsSelector);
      if (clickedInteractiveElement && tappedItem.contains(clickedInteractiveElement)) {
        // console.log(`[${config.id}] Clicked on an interactive element inside item, allowing default behavior.`);
        return; // 点击的是内部可交互元素，执行默认行为
      }

      // 执行跳转
      // console.log(`[${config.id}] Item background clicked via delegation on ${this.id || this.className}, navigating to:`, link.href);
      window.location.href = link.href;
    };
  }

  // --- 通用：查找父元素并附加监听器，如果父元素不存在则设置观察器 ---
  function setupTapDelegation(config) {
    const parentDataAttribute = `data-tap-delegation-${config.id}-attached`;

    // 尝试附加监听器
    function attachListener(parentEl) {
      if (parentEl && !parentEl.hasAttribute(parentDataAttribute)) {
        console.log(`[${config.id}] Attaching click listener to:`, parentEl);
        const handler = createClickHandler(config);
        parentEl.addEventListener('click', handler, false);
        parentEl.setAttribute(parentDataAttribute, 'true'); // 标记已附加
        return true;
      }
      return false;
    }

    // 1. 尝试立即查找父元素
    const immediateParent = document.querySelector(config.delegationParentSelector);
    if (attachListener(immediateParent)) {
      console.log(`[${config.id}] Tap enhancement initialized immediately.`);
      return; // 成功找到并附加，完成此配置的初始化
    }

    // 2. 如果父元素尚未存在，则使用 MutationObserver 等待它出现
    console.log(`[${config.id}] Delegation parent "${config.delegationParentSelector}" not found. Setting up observer...`);
    const observer = new MutationObserver((mutationsList, obs) => {
      // 优化：只在添加了节点时检查
      let parentFound = false;
      for (const mutation of mutationsList) {
        if (mutation.addedNodes.length > 0) {
          // 尝试直接查找父元素，因为添加的节点可能是父元素本身或包含父元素的容器
          const parentInDoc = document.querySelector(config.delegationParentSelector);
          if (parentInDoc && !parentInDoc.hasAttribute(parentDataAttribute)) {
            // console.log(`[${config.id}] Delegation parent found after mutation:`, parentInDoc);
            if (attachListener(parentInDoc)) {
              parentFound = true;
              break; // 找到并处理了，跳出内层循环
            }
          }
          // 如果直接查找失败 (例如父元素在 addedNodes 的更深层级)，可以遍历 addedNodes，但效率较低
          /*
          for (const node of mutation.addedNodes) {
              if (node.nodeType === Node.ELEMENT_NODE) {
                  const potentialParent = node.matches(config.delegationParentSelector) ? node : node.querySelector(config.delegationParentSelector);
                  if (potentialParent && !potentialParent.hasAttribute(parentDataAttribute)) {
                      // console.log(`[${config.id}] Delegation parent found within added node:`, potentialParent);
                      if (attachListener(potentialParent)) {
                          parentFound = true;
                          break; // 跳出 addedNodes 循环
                      }
                  }
              }
          }
          */
        }
        if (parentFound) break; // 跳出 mutationsList 循环
      }


      if (parentFound) {
        obs.disconnect(); // 成功附加监听器后，停止观察
        console.log(`[${config.id}] Observer disconnected.`);
      }
    });

    // 开始观察 document.body 的子节点和子树变化
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    console.log(`[${config.id}] Observer waiting for delegation parent "${config.delegationParentSelector}"...`);
  }

  // --- 对每个配置执行初始化 ---
  targetsConfig.forEach(config => {
    setupTapDelegation(config);
  });
})();
