// ==UserScript==
// @name             Spoiler Free Mode for F1TV
// @version          1.0
// @downloadURL      https://github.com/Lovasz-Akos/F1TV-Spoiler-Free-Mode/raw/refs/heads/main/f1tv-spoilers.user.js
// @updateURL        https://github.com/Lovasz-Akos/F1TV-Spoiler-Free-Mode/raw/refs/heads/main/f1tv-spoilers.user.js
// @description      Remove all banners and thumbnail containers, only show sessions
// @author           https://github.com/Lovasz-Akos
// @match            https://f1tv.formula1.com/
// @icon             https://www.google.com/s2/favicons?sz=64&domain=formula1.com
// @grant            none
// @run-at           document-end
// ==/UserScript==

window.onload = async function () {
  const endTime = Date.now() + 2000;

  while (document.getElementsByClassName("super-hero container")[0] == null) {
    await new Promise((r) => setTimeout(r, 1));
  }

  const bigBanner = document.getElementsByClassName("super-hero container");
  bigBanner[0].remove();

  const sessionDiv = document.getElementsByClassName("container")[0];

  while (Date.now() < endTime) {
    var spoilerBanners = document.getElementsByClassName("container");
    for (let index = 0; index < spoilerBanners.length; index++) {
      if (index >= 3 && spoilerBanners[index] != sessionDiv) {
        spoilerBanners[index].remove();
      }
    }
  }

  console.log("Finished removing spoilers");
};
