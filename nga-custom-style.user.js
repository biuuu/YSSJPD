// ==UserScript==
// @name        自定义NGA移动端样式
// @namespace   https://github.com/biuuu
// @match        *://bbs.ngacn.cc/*
// @match        *://ngabbs.com/*
// @match        *://nga.178.com/*
// @match        *://bbs.nga.cn/*
// @grant       GM_addStyle
// @run-at      document-start
// @version     1.16
// @author      lvlvl
// ==/UserScript==

(function () {
  'use strict';

  GM_addStyle(`
body {
  font-size: 20px !important;
}
body :not(.a239ga,.forumbox .topicrow .replies) {
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif !important;
}
.forumbox .postrow .postcontent {
  font-size: 22px;
}
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
  gap: 20px;
}

.row2 .c2 .posterInfoLine,
.row2 .c2,
.row1 .c2 .posterInfoLine,
.row1 .c2,
.contentBlock {
  background: transparent !important;
  border: none;
}

.postrow.row2 {
  background-color: #fff9e4;
}

.postrow {
  color: #323232;
}

.catenew, .cateblock, .forumbox {
  background-color: #fef9e6 !important;
}

.topicrow .c2 {
  padding: 20px 20px !important;
  border-bottom: 1px solid hsl(0deg 0% 0% / 10%) !important;
}

.postrow .c2 {
  padding: 0 20px !important;
  border-bottom: 1px solid hsl(0deg 0% 0% / 10%) !important;
}

.posterInfoLine {
  margin: 0 !important;
  padding: 0;
  display: flex;
  align-items: center;
  font-size: 16px;
}

#m_threads {
  margin: 0 !important;
}

.forumbox .topicrow .topic {
  font-size: 22px;
  line-height: normal;
}

#m_threads+#m_pbtnbtm {
  margin-top: 20px;
}

.topicrow .author {
  order: -1;
  margin: 0 !important;
}

.topicrow .posterInfoLine .replies {
  order: 1;
  margin: 0 0 0 20px !important;
}

.posterInfoLine .replies,
.block_txt:not(.contentFullWidthButton, .block_txt_c0, .block_txt_c2, .vertmod) {
  min-width: auto !important;
  padding: 0 !important;
  margin: 0 !important;
  color: #868686 !important;
  font-size: inherit !important;
  font-weight: normal !important;
  background: transparent !important;
  font-family: inherit !important;
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
  font-size: inherit !important;
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
  margin: 10px 0 !important;
}

.topicrow .posterInfoLine {
  line-height: 1 !important;
  padding: 0 !important;
}

.postrow .posterInfoLine {
  padding: 0 6px !important;
}

.topicrow .posterInfoLine a {
  color: #868686 !important;
}

#mainmenu {
  margin-top: 0 !important;
  transition: none !important;
}

.postrow .posterInfoLine .userlink {
  color: #efb973 !important;
  font-size: 20px !important;
  display: inline-block;
}

.postrow .posterInfoLine .usercol {
  padding-top: 10px;
  display: inline-block;
}

.postrow .avatar {
  box-shadow: none !important;
  border-radius: 50% !important;
  object-fit: cover;
}

.posterInfoLine > .avatar {
  margin-right: 12px !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.postrow .c2 {
  display: flex;
  flex-direction: column;
}

.postrow .postInfo {
  order: 1;
  margin: 10px 0 !important;
  padding: 0 !important;
}

.postrow .posterInfoLineB {
  order: 2;
  border-top: 1px solid #00000015 !important;
  display: flex;
}

.postrow .posterInfoLine {
  margin: 0 -20px !important;
}

.posterInfoLineB .postbtmb {
  padding: 10px !important;
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
  border-bottom: 1px solid #00000015 !important;
  padding: 20px !important;
  line-height: 1 !important;
  min-height: 80px;
  box-sizing: border-box;
}

.postrow .c2 {
  position: relative;
}

.forumbox {
  border-spacing: initial !important;
  margin: 0 !important;
}

.postrow .postInfo a.stxt {
  position: absolute;
  right: 20px;
  top: 8px;
  font-size: 20px;
}

.postrow .c2>.postInfo+span>br {
  display: none;
}

.postrow .c2 .posterInfoLine > .right:first-child + div {
  margin-right: 12px !important;
  margin-top: 0 !important;
  margin-left: -12px !important
}

.postrow .c2 .posterInfoLine > .right:first-child + div > .avatar,
.postrow .c2 .posterInfoLine > .right:first-child + div > .avatar + img {

}

.postrow .c2 > .clear,
.postrow .c2 > a,
.postrow .c2 > .postBtnPos {
  display: none;
}

.postrow .postInfo+span {
  margin: 20px 0 0 0;
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
  margin: 10px 0 !important;
}

.postcontent .quote:first-child {
  margin-top: 0;
}

.postcontent .quote+br {
  display: none;
}

#m_posts_c .postbox:first-child .postrow .postInfo+span>div:first-child {
  display: block;
  margin-bottom: 20px;
  font-size: 22px;
}

#m_posts_c .postbox:first-child {
  border-top: 1px solid #00000020 !important;
}

#m_posts_c .postbox:last-of-type {
  margin-bottom: 20px !important;
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
  background-position: 10px 6px !important;
  background-size: 54px !important;
}

.indexblock .catenew .togcheckblock {
  position: relative;
}

.indexblock .catenew .a {
  margin: 0 0 0 72px;
  height: 64px;
}

.indexblock .catenew a {
  white-space: normal;
  font-size: 16px;
  font-weight: normal;
  color: #591804;
  line-height: 1.2;
  text-decoration: none !important;
}

.indexblock .catenew .togcheckblock a:after {
  content: '';
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.indexblock .catenew p {
  display: none;
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
  padding: 10px 0 0 0;
  margin: 10px 0 0 0;
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

.forumbox .postrow .postcontent img:not(img[class]) {
  margin-right: 0 !important;
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

  function delayStyle() {
    GM_addStyle(`
    a {
      color: #434344;
    }
    a:hover {
      color: #434344;
      text-decoration: none;
    }
    `)
  }
  let win = (window.unsafeWindow || window)
  if (win.document.readyState != 'loading') {
    delayStyle()
  } else {
    win.addEventListener('DOMContentLoaded', delayStyle)
  }


  // --- 配置 ---
  const parentSelector = '#mc';     // 父元素选择器
  const targetSelector = 'a.topic'; // 目标链接选择器
  const maxWaitTime = 15000;        // 等待父元素最大时间 (ms)
  const MOVE_THRESHOLD = 10;        // 判定为滑动的移动阈值 (像素)
  const MAX_TAP_TIME = 300;         // Tap 的最大允许时间 (ms)
  // --- 配置结束 ---

  console.log('修复iOS链接双击脚本 (v1.5 - Tap Simulation): 初始化...');

  const isTouchDevice = navigator.maxTouchPoints > 0 || ('ontouchstart' in window);

  if (!isTouchDevice) {
    console.log('修复iOS链接双击脚本: 非触摸设备，脚本停止。');
    return;
  }
  console.log('修复iOS链接双击脚本: 触摸设备，尝试应用修复。');

  // --- 用于跟踪触摸状态的变量 ---
  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;
  let isPotentialTap = false;
  let potentialTapTargetLink = null; // 存储 touchstart 时触碰到的链接元素

  /**
   * 重置触摸状态变量
   */
  function resetTouchState() {
    touchStartX = 0;
    touchStartY = 0;
    touchStartTime = 0;
    isPotentialTap = false;
    potentialTapTargetLink = null;
    // console.log('Touch state reset');
  }

  /**
   * 附加事件监听器到父元素
   * @param {Element} parentElement 父元素 (#mc)
   */
  function attachTapFixListeners(parentElement) {
    console.log(`修复iOS链接双击脚本: 父元素 "${parentSelector}" 已找到。附加 Tap 模拟监听器。`);

    // Touch Start
    parentElement.addEventListener('touchstart', function (event) {
      // 只处理单指触摸
      if (event.touches.length !== 1) {
        resetTouchState(); // 多指触摸，重置状态
        return;
      }

      const touch = event.touches[0];
      potentialTapTargetLink = touch.target.closest(targetSelector); // 查找触碰点下的链接

      // 如果触碰点不在目标链接内，则忽略此次触摸序列
      if (!potentialTapTargetLink || !potentialTapTargetLink.href) {
        resetTouchState();
        return;
      }

      // 记录起始状态
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      touchStartTime = Date.now();
      isPotentialTap = true; // 假设是 Tap，直到被 touchmove 推翻
      // console.log('touchstart on potential link:', potentialTapTargetLink.href);

    }, { passive: true }); // touchstart 通常可以 passive，除非需要阻止默认滚动等

    // Touch Move
    parentElement.addEventListener('touchmove', function (event) {
      // 如果已经不是 potential tap 或者没有触摸点，则忽略
      if (!isPotentialTap || event.touches.length === 0) {
        return;
      }

      // 如果是多指触摸，也标记为非 Tap (例如缩放手势)
      if (event.touches.length > 1) {
        // console.log('touchmove: Multi-touch detected, cancelling tap.');
        isPotentialTap = false;
        return;
      }

      const touch = event.touches[0];
      const deltaX = Math.abs(touch.clientX - touchStartX);
      const deltaY = Math.abs(touch.clientY - touchStartY);

      // 如果移动超过阈值，则判定为滑动
      if (deltaX > MOVE_THRESHOLD || deltaY > MOVE_THRESHOLD) {
        // console.log('touchmove: Movement threshold exceeded, cancelling tap.');
        isPotentialTap = false;
      }
    }, { passive: true }); // touchmove 通常也应该是 passive，我们只读取坐标，不阻止滚动

    // Touch End
    parentElement.addEventListener('touchend', function (event) {
      // 必须是从 potential tap 状态过来，且是单指抬起
      if (!isPotentialTap || event.changedTouches.length !== 1) {
        resetTouchState(); // 不满足条件或不是单指抬起，重置
        return;
      }

      // 检查结束点是否还在原始链接上 (或者其子元素上)
      // event.changedTouches[0].target 可能与 touchstart 的 target 不同
      const touchEndTarget = event.changedTouches[0].target;
      const currentTargetLink = touchEndTarget.closest(targetSelector);

      // 检查时间是否过长
      const touchDuration = Date.now() - touchStartTime;

      // 最终检查：是 potential tap，时间短，结束点链接与起始点链接是同一个，且链接有效
      if (isPotentialTap &&
        touchDuration < MAX_TAP_TIME &&
        currentTargetLink &&
        currentTargetLink === potentialTapTargetLink && // 确保起始和结束是同一个链接元素
        potentialTapTargetLink.href) {
        console.log(`修复iOS链接双击脚本: Tap detected on "${targetSelector}". Navigating to: ${potentialTapTargetLink.href}`);

        // 阻止可能触发的 click 事件或默认行为
        event.preventDefault();
        // 阻止冒泡
        event.stopPropagation();

        // 执行跳转
        window.location.href = potentialTapTargetLink.href;

        // 跳转后也重置状态（虽然页面可能已经跳转，但以防万一）
        resetTouchState();

      } else {
        // 如果不满足 Tap 条件，则只重置状态
        // console.log('touchend: Not a valid tap.', { isPotentialTap, touchDuration, currentTargetLink, potentialTapTargetLink });
        resetTouchState();
      }
    }, { passive: false }); // touchend 需要 non-passive 以便 preventDefault 生效

    // Touch Cancel - 当触摸被系统中断时重置状态
    parentElement.addEventListener('touchcancel', function (event) {
      // console.log('touchcancel received.');
      resetTouchState();
    }, { passive: true });

    console.log(`修复iOS链接双击脚本: Tap 模拟监听器已成功附加到 "${parentSelector}"。`);
  }

  /**
   * 等待元素出现
   * (waitForElement 函数代码与之前版本相同，此处省略以保持简洁)
   * ... [waitForElement function code here] ...
   */
  function waitForElement(selector, callback, timeout) {
    const startTime = Date.now();
    const element = document.querySelector(selector);
    if (element) {
      callback(element);
      return;
    }
    let observer = null;
    let timeoutId = null;
    const disconnectObserver = () => {
      if (observer) { observer.disconnect(); observer = null; /* console.log(`Observer disconnected for "${selector}".`); */ }
      if (timeoutId) { clearTimeout(timeoutId); timeoutId = null; }
    };
    observer = new MutationObserver((mutations, obs) => {
      const targetElement = document.querySelector(selector);
      if (targetElement) {
        /* console.log(`Element "${selector}" found via MutationObserver.`); */
        disconnectObserver();
        callback(targetElement);
      } else if (Date.now() - startTime > timeout) {
        console.warn(`Fix iOS Double Tap Script: Timeout waiting for "${selector}". Element not found after ${timeout}ms.`);
        disconnectObserver();
      }
    });
    observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
    /* console.log(`Element "${selector}" not found immediately. Started MutationObserver.`); */
    timeoutId = setTimeout(() => {
      if (observer) {
        console.warn(`Fix iOS Double Tap Script: Timeout waiting for "${selector}". Element not found after ${timeout}ms.`);
        disconnectObserver();
      }
    }, timeout);
  }


  // --- 开始执行 ---
  waitForElement(parentSelector, attachTapFixListeners, maxWaitTime);


  console.log('PhotoSwipe Dynamic Module Injector: Script running...');

  // --- Configuration ---
  const gallerySelector = '#mc'; // The selector for your gallery container
  const childrenSelector = '.postcontent img[data-usethumb]';         // The selector for items within the gallery
  const photoswipeCssUrl = 'https://unpkg.com/photoswipe@5/dist/photoswipe.css';
  const lightboxModuleUrl = 'https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.js';
  const photoswipeModuleUrl = 'https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js';
  // --- End Configuration ---

  // 1. Inject the CSS dynamically
  function addCssLink(url) {
      // Check if CSS is already added (optional, prevents duplicates if script runs multiple times)
      if (document.querySelector(`link[href="${url}"]`)) {
          console.log('PhotoSwipe Dynamic Module Injector: CSS link already exists.');
          return;
      }
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = url;
      // Append to head, or documentElement if head doesn't exist yet (unlikely with document-idle)
      (document.head || document.documentElement).appendChild(link);
      console.log('PhotoSwipe Dynamic Module Injector: CSS link added.');
  }

  addCssLink(photoswipeCssUrl);

  // 2. Prepare the JavaScript module code as a string
  //    We use template literals (backticks ``) for easier multi-line string definition.
  //    We also add a check inside the module to ensure the gallery element exists before initializing.
  const moduleScriptContent = `
      import PhotoSwipeLightbox from '${lightboxModuleUrl}';
      // The pswpModule now needs the actual PhotoSwipe module, so we import it too
      // Note: The original '() => import()' syntax is for lazy-loading,
      //       but since we are in a module script already, we can import directly.
      //       If PhotoSwipe itself is large and you want to truly lazy load it,
      //       the original syntax inside the module would still work.
      import PhotoSwipe from '${photoswipeModuleUrl}';

      console.log('PhotoSwipe Module: Script loaded.');

      // Function to initialize PhotoSwipe, checks for gallery element first
      function initPhotoSwipeWhenReady() {
          const galleryElement = document.querySelector('${gallerySelector}');
          if (galleryElement) {
              console.log('PhotoSwipe Module: Found gallery "${gallerySelector}", initializing lightbox...');
              try {
                  const lightbox = new PhotoSwipeLightbox({
                    gallery: '${gallerySelector}',
                    children: '${childrenSelector}',
                    // Pass the imported PhotoSwipe class constructor
                    pswpModule: PhotoSwipe
                  });

                  lightbox.addFilter('domItemData', (itemData, element, linkEl) => {
                    if (element) {
                      let src = element.dataset.srcorg || element.dataset.usethumb || element.src

                      itemData.src = src;
                      itemData.w = element.naturalWidth || element.dataset.nw || element.width;
                      itemData.h = element.naturalHeight || element.dataset.nh || element.height;
                      itemData.msrc = element.dataset.usethumb;
                      itemData.thumbCropped = true;
                    }

                    return itemData;
                  });
                  lightbox.init();
                  console.log('PhotoSwipe Module: Lightbox initialized successfully.');
              } catch (error) {
                  console.error('PhotoSwipe Module: Error during lightbox initialization:', error);
              }
          } else {
              // Element not found yet, wait and retry.
              // This is a simple polling mechanism. For complex dynamic pages,
              // a MutationObserver within the userscript wrapper might be more robust
              // before injecting this module script.
              console.warn('PhotoSwipe Module: Gallery element "${gallerySelector}" not found. Retrying in 500ms...');
              setTimeout(initPhotoSwipeWhenReady, 500);
          }
      }

      // Start the initialization process
      // We might need to wait for DOMContentLoaded just in case, although 'run-at document-idle' helps.
      if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initPhotoSwipeWhenReady);
      } else {
          // DOM is already ready or interactive/complete
          initPhotoSwipeWhenReady();
      }
  `;

  // 3. Create a <script type="module"> element
  const scriptElement = document.createElement('script');
  scriptElement.type = 'module';
  // Use textContent to set the script's code
  scriptElement.textContent = moduleScriptContent;

  // 4. Append the script element to the <head> or <body>
  //    Appending to head is common practice for modules.
  (document.head || document.documentElement).appendChild(scriptElement);
  console.log('PhotoSwipe Dynamic Module Injector: Module script tag added to the page.');

})();
