// ==UserScript==
// @name        自定义NGA移动端样式
// @namespace   https://github.com/biuuu
// @match        *://bbs.ngacn.cc/*
// @match        *://ngabbs.com/*
// @match        *://nga.178.com/*
// @match        *://bbs.nga.cn/*
// @grant       GM_addStyle
// @version     1.0
// @author      lvlvl
// ==/UserScript==
GM_addStyle(`
.topic ~ span,
.replyer,
.forumbox .topicrow .postdate,
.right >.postbtmb,
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
.row1 .c2, .contentBlock {
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
  font-size: 26px;
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
.block_txt:not(.contentFullWidthButton,.block_txt_c0,.block_txt_c2) {
  min-width: auto !important;
  padding: 0 !important;
  color: #A9A9A9 !important;
  font-size: 19px !important;
  font-weight: normal !important;
  background: transparent !important;
  font-family: PingFang SC,HarmonyOS_Regular,Helvetica Neue,Microsoft YaHei,sans-serif !important;
}

tr:not(.set_topic) .posterInfoLine .replies::after {
  content: '回复';
  margin-left: 2px;
}
.c2 > .replies {
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
.postrow .block_txt:not(.contentFullWidthButton,.block_txt_c0,.block_txt_c2,.block_txt_c3) {
  color: #efb973 !important;
  font-weight: normal !important;
  font-size: 20px !important;
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
.postrow .avatar + img {
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
.postrow .posterInfoLineB  {
  order: 2;
  border-top: 1px solid #00000015 !important;
  display: flex;
}
.posterInfoLineB .postbtmb {
  padding: 0.5em !important;
}
.posterInfoLineB > .postbtmb:first-child {
  order: 8;
}
.posterInfoLineB > .postbtmb:last-child {
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
.postrow {
  position: relative;
}
.postrow .postInfo a.stxt {
  position: absolute;
  right: 1em;
  top: 1.6em;
}
.postrow .c2 > .postInfo + span > br  {
  display: none;
}
.postrow .postInfo + span {
  margin: 1em 0;
  display: block !important;
}
.postrow .postInfo + span > div:first-child {
  display: none;
}
.posterInfoLineB + span {
  border-top: 1px solid #00000015;
  margin-top: 0.5em !important;
}
.posterInfoLineB + span .postbodysubtitle {
  margin: 0.5em 0 !important;
}
.postcontent .quote:first-child {
  margin-top: 0;
}
.postcontent .quote + br {
  display: none;
}
#m_posts_c .postbox:first-child .postrow .postInfo + span > div:first-child {
  display: block;
  margin-bottom: 1em;
  font-size: 26px;
}
#m_posts_c .postbox:first-child {
  border-top: 1px solid #00000020 !important;
}
#m_posts_c .postbox:last-of-type {
  margin-bottom: 1em !important;
}
#mainmenu > .stdbtn > .innerbg > .right {
  float: none;
}
#m_cate5 > .w100 > div:first-of-type > a {
  display: none !important;
}
#m_cate5 > .w100 > div:first-of-type {
  padding: 0 !important;
}
#m_threads > .w100 > span:first-of-type > div {
  padding: 0 !important;
}
#m_threads > .w100 > span:first-of-type > div > a {
  display: none !important;
}
`)



































