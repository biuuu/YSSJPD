// ==UserScript==
// @name        自定义NGA移动端样式
// @namespace   https://github.com/biuuu
// @match        *://bbs.ngacn.cc/*
// @match        *://ngabbs.com/*
// @match        *://nga.178.com/*
// @match        *://bbs.nga.cn/*
// @grant       GM_addStyle
// @run-at      document-start
// @version     1.9
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
  background: transparent !important;
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

#m_threads {
  margin: 0 !important;
}

#m_pbtnbtm .w100 {
  margin-top: 0.5em;
  display: flex;
  justify-content: space-between;
}

#m_pbtnbtm .w100 .clear {
  display: none;
}

#m_pbtnbtm .w100 .left {
  order: -1;
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
  border-bottom: 1px solid #00000015 !important;
  padding: 0 1em 1em 0 !important;
  line-height: 1 !important;
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

  // --- Configuration ---
  const parentSelector = '#mc';     // The parent element ID/selector to wait for and delegate from
  const targetSelector = 'a.topic'; // The target link elements selector within the parent
  const maxWaitTime = 15000;        // Maximum time (in milliseconds) to wait for the parent element (15 seconds)
  // --- End Configuration ---

  // Check if it's likely a touch device
  const isTouchDevice = navigator.maxTouchPoints > 0 || ('ontouchstart' in window);

  if (!isTouchDevice) {
    console.log('Fix iOS Double Tap Script: Not detected as a touch device. Script inactive.');
    return;
  }
  console.log('Fix iOS Double Tap Script: Touch device detected. Attempting to apply fix for all matching links.');

  /**
   * Attaches the click listener to the found parent element.
   * @param {Element} parentElement The parent element (#mc) that was found.
   */
  function attachClickListener(parentElement) {
    console.log(`Fix iOS Double Tap Script: Parent element "${parentSelector}" found. Attaching click listener.`);

    parentElement.addEventListener('click', function (event) {
      // Find the closest ancestor matching the target link selector
      const linkElement = event.target.closest(targetSelector);

      // Proceed only if a matching link element was clicked and it has an href
      if (linkElement && linkElement.href) {

        // On touch devices, we assume *any* click on a target link might be
        // delayed due to potential mouseover/hover interactions designed for desktops.
        // Therefore, we prevent the default behavior and navigate immediately.
        console.log(`Fix iOS Double Tap Script: Click intercepted on "${targetSelector}". Forcing navigation to: ${linkElement.href}`);

        // Prevent the default click behavior (which might be delayed/require double tap)
        event.preventDefault();
        // Stop the event from bubbling further if needed
        event.stopPropagation();
        // Navigate immediately
        window.location.href = linkElement.href;

      }
      // If the click wasn't on a target link, do nothing and let it bubble/default.
    }, false); // Use bubble phase

    console.log(`Fix iOS Double Tap Script: Click listener attached successfully to "${parentSelector}".`);
  }

  /**
   * Waits for an element matching the selector to appear in the DOM.
   * @param {string} selector CSS selector for the element to wait for.
   * @param {function} callback Function to execute once the element is found.
   * @param {number} timeout Max time to wait in milliseconds.
   */
  function waitForElement(selector, callback, timeout) {
    const startTime = Date.now();

    // --- Immediate Check ---
    const element = document.querySelector(selector);
    if (element) {
      callback(element);
      return; // Found it immediately
    }

    // --- Setup MutationObserver ---
    let observer = null;
    let timeoutId = null;

    const disconnectObserver = () => {
      if (observer) {
        observer.disconnect();
        observer = null;
        console.log(`Fix iOS Double Tap Script: MutationObserver disconnected for "${selector}".`);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    };

    observer = new MutationObserver((mutations, obs) => {
      const targetElement = document.querySelector(selector);
      if (targetElement) {
        console.log(`Fix iOS Double Tap Script: Element "${selector}" found via MutationObserver.`);
        disconnectObserver(); // Stop observing once found
        callback(targetElement); // Execute the callback
      } else if (Date.now() - startTime > timeout) {
        // Double check time in case timeout fires slightly before mutation
        console.warn(`Fix iOS Double Tap Script: Timeout waiting for "${selector}". Element not found after ${timeout}ms.`);
        disconnectObserver(); // Stop observing on timeout
      }
    });

    // --- Start Observing ---
    observer.observe(document.body || document.documentElement, {
      childList: true,  // Watch for direct children additions/removals
      subtree: true     // Watch descendants as well
    });
    console.log(`Fix iOS Double Tap Script: Element "${selector}" not found immediately. Started MutationObserver.`);

    // --- Setup Timeout ---
    timeoutId = setTimeout(() => {
      if (observer) { // Check if observer still exists
        console.warn(`Fix iOS Double Tap Script: Timeout waiting for "${selector}". Element not found after ${timeout}ms.`);
        disconnectObserver(); // Stop observing on timeout
      }
    }, timeout);
  }

  // --- Start the process ---
  // Wait for the parent element and then attach the listener
  waitForElement(parentSelector, attachClickListener, maxWaitTime);

})();
