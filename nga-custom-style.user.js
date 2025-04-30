// ==UserScript==
// @name        自定义NGA移动端样式
// @namespace   https://github.com/biuuu
// @match        *://bbs.ngacn.cc/*
// @match        *://ngabbs.com/*
// @match        *://nga.178.com/*
// @match        *://bbs.nga.cn/*
// @grant       GM_addStyle
// @version     1.4
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
  const targetsConfig = [
    {
      id: 'forumThreads',
      delegationParentSelector: '#m_threads',
      itemSelector: '.forumbox > tbody',
      targetLinkSelector: 'a.topic', // THE link we always want to navigate to
      // We still need this to identify non-link interactive elements
      interactiveElementsSelector: 'button, input, select, textarea, [onclick]:not(a)', // Exclude 'a' here
      cssHighlightSelector: '#m_threads .forumbox > tbody'
    },
    {
      id: 'indexBlocks',
      delegationParentSelector: '#indexBlockLeft',
      itemSelector: '.indexblock',
      targetLinkSelector: 'a.uitxt3', // THE link we always want to navigate to
      interactiveElementsSelector: 'button, input, select, textarea, [onclick]:not(a)', // Exclude 'a' here
      cssHighlightSelector: '#indexBlockLeft .indexblock'
    }
  ];

  // --- Tap/Scroll Detection State ---
  let touchStartX, touchStartY, isScrollingOrNonLinkInteractive, touchStartTime;
  const scrollThreshold = 10;

  // --- 通用：创建针对特定配置的事件处理函数 ---
  function createTouchHandlers(config) {
    return {
      handleTouchStart: function (event) {
        if (event.touches.length !== 1) {
          isScrollingOrNonLinkInteractive = true; return;
        }
        const tappedItem = event.target.closest(config.itemSelector);
        if (!tappedItem || !this.contains(tappedItem)) {
          isScrollingOrNonLinkInteractive = true; return;
        }

        // --- 重要变更 ---
        // 检查是否触摸开始于 *非链接* 的交互元素上
        const touchedNonLinkInteractive = event.target.closest(config.interactiveElementsSelector);
        if (touchedNonLinkInteractive && tappedItem.contains(touchedNonLinkInteractive)) {
          // console.log(`[${config.id}] Touch started on non-link interactive element. Allowing default.`);
          isScrollingOrNonLinkInteractive = true; // 标记为不需要我们处理
          return;
        }
        // 如果触摸开始于普通元素或 *任何* 链接上，我们继续，准备在 touchend 处理

        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
        touchStartTime = Date.now();
        isScrollingOrNonLinkInteractive = false; // 重置标记
        // console.log(`[${config.id}] TouchStart potentially valid for tap.`);
      },

      handleTouchMove: function (event) {
        if (isScrollingOrNonLinkInteractive || event.touches.length !== 1) return;

        const deltaX = Math.abs(event.touches[0].clientX - touchStartX);
        const deltaY = Math.abs(event.touches[0].clientY - touchStartY);

        if (deltaX > scrollThreshold || deltaY > scrollThreshold) {
          // console.log(`[${config.id}] TouchMove detected as scroll.`);
          isScrollingOrNonLinkInteractive = true;
        }
      },

      handleTouchEnd: function (event) {
        if (isScrollingOrNonLinkInteractive) {
          // console.log(`[${config.id}] TouchEnd ignored due to scroll or start on non-link interactive.`);
          isScrollingOrNonLinkInteractive = false; // Reset for next interaction
          return;
        }

        const tappedItem = event.target.closest(config.itemSelector);
        // 需要检查抬起时是否还在 item 内，因为用户可能移出手指
        if (!tappedItem || !this.contains(tappedItem)) {
          // console.log(`[${config.id}] TouchEnd outside item.`);
          isScrollingOrNonLinkInteractive = false; // Reset
          return;
        }

        // --- 核心逻辑 ---
        // 1. 查找我们 *总是* 要导航到的目标链接
        const targetLink = tappedItem.querySelector(config.targetLinkSelector);
        if (!targetLink || !targetLink.href) {
          console.warn(`[${config.id}] Target link selector "${config.targetLinkSelector}" not found or has no href in item:`, tappedItem);
          isScrollingOrNonLinkInteractive = false; // Reset
          return;
        }

        // 2. 检查手指抬起的位置是否在 *任何* <a> 标签上
        // event.changedTouches[0].target 是 touchend 时手指下的元素
        const endTarget = event.changedTouches?.[0]?.target || event.target; // Fallback for safety
        const releasedOnAnyLink = endTarget.closest('a');

        if (releasedOnAnyLink && tappedItem.contains(releasedOnAnyLink)) {
          // console.log(`[${config.id}] TouchEnd on a link (${releasedOnAnyLink.href}). Preventing its default navigation.`);
          // 阻止这个被点击链接的默认行为！
          event.preventDefault();
        }
        // 如果抬起时不在任何链接上（例如在背景或其他元素上），则无需 preventDefault

        // 3. 执行到目标链接的导航
        // console.log(`[${config.id}] Tap confirmed on item. Navigating to TARGET link:`, targetLink.href);
        window.location.href = targetLink.href;

        // 重置状态
        isScrollingOrNonLinkInteractive = false;
        touchStartX = null;
        touchStartY = null;
        touchStartTime = null;
      },

      handleTouchCancel: function (event) {
        // console.log(`[${config.id}] TouchCancel.`);
        isScrollingOrNonLinkInteractive = true; // Treat cancel as not a tap
        touchStartX = null;
        touchStartY = null;
        touchStartTime = null;
      }
    };
  }

  // --- 通用：查找父元素并附加监听器，处理延迟加载 ---
  function setupTapDelegation(config) {
    const parentDataAttribute = `data-tap-delegation-${config.id}-attached`;

    function attachListeners(parentEl) {
      if (parentEl && !parentEl.hasAttribute(parentDataAttribute)) {
        console.log(`[${config.id}] Attaching touch listeners to:`, parentEl);
        const handlers = createTouchHandlers(config);
        // touchstart 和 touchmove 保持 passive: true
        parentEl.addEventListener('touchstart', handlers.handleTouchStart, { passive: true, capture: false });
        parentEl.addEventListener('touchmove', handlers.handleTouchMove, { passive: true, capture: false });
        // touchend 必须是 passive: false 因为我们调用了 preventDefault()
        parentEl.addEventListener('touchend', handlers.handleTouchEnd, { passive: false, capture: false });
        parentEl.addEventListener('touchcancel', handlers.handleTouchCancel, { passive: true, capture: false });
        parentEl.setAttribute(parentDataAttribute, 'true');
        return true;
      }
      return false;
    }

    // 初始化和 MutationObserver 逻辑 (保持不变)
    const immediateParent = document.querySelector(config.delegationParentSelector);
    if (attachListeners(immediateParent)) {
      console.log(`[${config.id}] Tap enhancement (Unified Target) initialized immediately.`);
      return;
    }

    console.log(`[${config.id}] Delegation parent "${config.delegationParentSelector}" not found. Setting up observer...`);
    const observer = new MutationObserver((mutationsList, obs) => {
      let parentFound = false;
      for (const mutation of mutationsList) {
        if (mutation.addedNodes.length > 0) {
          const parentInDoc = document.querySelector(config.delegationParentSelector);
          if (parentInDoc && !parentInDoc.hasAttribute(parentDataAttribute)) {
            if (attachListeners(parentInDoc)) {
              parentFound = true;
              break;
            }
          }
        }
        if (parentFound) break;
      }
      if (parentFound) {
        obs.disconnect();
        console.log(`[${config.id}] Observer disconnected.`);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    console.log(`[${config.id}] Observer waiting for delegation parent "${config.delegationParentSelector}"...`);
  }

  // --- 对每个配置执行初始化 ---
  targetsConfig.forEach(config => {
    setupTapDelegation(config);
  });

})();
