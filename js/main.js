/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/accordion/accordion.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/accordion/accordion.js ***!
  \***************************************************/
/***/ (() => {

var checkAccordion = document.querySelector(".accordion");

if (checkAccordion) {
  var btns = document.querySelectorAll(".accordion__title");
  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!this.classList.contains("acc-active")) {
        //for auto-closing
        // btns.forEach((btn) => {
        //   btn.classList.remove("acc-active");
        // });
        this.classList.add("acc-active");
      } else {
        this.classList.remove("acc-active");
      }
    });
  });
}

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {

//burger
window.addEventListener("DOMContentLoaded", function () {
  var menu = document.querySelector(".header__list"),
      menuItem = document.querySelectorAll(".header__link"),
      hamburger = document.querySelector(".header__burger"),
      overflowHidden = document.querySelector("body");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("burger_active");
    menu.classList.toggle("menu_active");
    overflowHidden.classList.toggle("overflow-hidden-y");
  });
  menuItem.forEach(function (item) {
    item.addEventListener("click", function () {
      hamburger.classList.toggle("burger_active");
      menu.classList.toggle("menu_active");
      overflowHidden.classList.toggle("overflow-hidden-y");
    });
  });
}); //Hidden header

var header = document.querySelector(".header");
var scrollPrev = 0;
window.addEventListener("scroll", function () {
  var scrolled = window.pageYOffset;

  if (scrolled > 100 && scrolled > scrollPrev) {
    header.classList.add("out");
  } else {
    header.classList.remove("out");
  }

  scrollPrev = scrolled;
});

/***/ }),

/***/ "./src/blocks/modules/how-we-work/how-we-work.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/how-we-work/how-we-work.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

var howWeWorkMenu = ["1", "2", "3", "4"];
var swiperHowWeWork = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".swiper-how-we-work", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<span class="' + className + ' js-swiper-circle">' + howWeWorkMenu[index] + "</span>";
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true
  }
});

/***/ }),

/***/ "./src/blocks/modules/main-form/main-form.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/main-form/main-form.js ***!
  \***************************************************/
/***/ (() => {

var formWithFiles = document.querySelector("#myFile");

if (formWithFiles) {
  var uploadInput = function UploadInput(elem) {
    var domElem;
    var fileContainer = {};
    var that = this;
    var fileDocumentList = document.createElement("div");
    fileDocumentList.classList.add("file-list");
    return {
      init: function Init() {
        domElem = document.querySelector(elem);

        if (!domElem) {
          console.error("lol, no such elem");
          return;
        }

        domElem.parentNode.insertBefore(fileDocumentList, domElem.nextSibling);
        domElem.addEventListener("change", this.onFilesAdd);
        fileDocumentList.addEventListener("click", this.onFileDelete);
      },
      onFilesAdd: function OnFilesAdd(e) {
        var eventFiles = this.files;
        var i = 0;

        for (i; i < eventFiles.length; ++i) {
          fileContainer[eventFiles.item(i).name] = eventFiles.item(i);
          var newFileRecord = document.createElement("div");
          newFileRecord.className = "file-record";
          newFileRecord.dataset.name = eventFiles.item(i).name;
          newFileRecord.innerHTML = eventFiles.item(i).name + ' <span class="file-remove"></span>';
          fileDocumentList.appendChild(newFileRecord);
        }
      },
      onFileDelete: function OnFileDelete(e) {
        if (e.target.className != "file-remove") {
          return;
        }

        delete fileContainer[e.target.parentNode.dataset.name];
        e.target.parentNode.remove();
      },
      getFileList: function GetFileList() {
        var fileList = [];
        Object.keys(fileContainer).forEach(function makeFileList(key) {
          fileList.push(fileContainer[key]);
        });
        return fileList;
      }
    };
  };

  var uploadControl = uploadInput("#myFile");
  uploadControl.init();
}

/***/ }),

/***/ "./src/blocks/modules/main-slider/main-slider.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/main-slider/main-slider.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".main-swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  noSwiping: true
});
swiper.on("slideChange", function () {
  var slideCounter = document.querySelectorAll(".js-swiper-controls__num");
  slideCounter.forEach(function (item) {
    item.textContent = swiper.activeIndex + 1;
  });
});

/***/ }),

/***/ "./src/blocks/modules/popups/popups.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/popups/popups.js ***!
  \*********************************************/
/***/ (() => {

function modalContent(trigger, item) {
  var btn = document.querySelectorAll(trigger),
      pop = document.querySelector(item),
      close = document.querySelectorAll('.popup-close'),
      closeBack = document.querySelectorAll('.popup'),
      activeClass = 'show',
      hideClass = 'hide';

  function showContent() {
    pop.classList.add(activeClass);
    pop.classList.remove(hideClass);
    document.body.style.overflow = 'hidden';
    window.dispatchEvent(new CustomEvent('resize'));
  }

  function hideContent() {
    pop.classList.remove(activeClass);
    pop.classList.add(hideClass);
    document.body.style.overflow = '';
  }

  function showHideContent(trigger, func) {
    trigger.forEach(function (item) {
      item.addEventListener('click', function (e) {
        if (e.target && e.target.className === item.className) {
          e.preventDefault();
          func();
        }
      });
    });
  }

  showHideContent(btn, showContent);
  showHideContent(close, hideContent);
  showHideContent(closeBack, hideContent);

  function hideScroll() {
    var div = document.createElement('div');
    document.body.append(div);
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    var result = div.offsetWidth - div.clientWidth;
    return result;
  }
}

modalContent('.popup-btn', '.popup_main-popup');

/***/ }),

/***/ "./src/blocks/modules/project-sliders/project-sliders.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/project-sliders/project-sliders.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

var swiperPhoto = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".swiper-photo", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 15,
  navigation: {
    nextEl: ".swiper-button-next-projects",
    prevEl: ".swiper-button-prev-projects"
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    1239: {
      slidesPerView: 3,
      spaceBetween: 60
    }
  }
});

if (document.querySelector(".swiper-photo")) {
  if (swiperPhoto.activeIndex == 0) {
    document.querySelector(".tabs__title:nth-child(1)").classList.add("tabs__title_active");
  }

  console.log(swiperPhoto.activeIndex);
  var slideTitles = document.querySelectorAll(".tabs__title");
  var slideTitle1 = document.querySelector(".tabs__title:nth-child(1)");
  var slideTitle2 = document.querySelector(".tabs__title:nth-child(2)");
  var slideTitle3 = document.querySelector(".tabs__title:nth-child(3)");
  var slideTitle4 = document.querySelector(".tabs__title:nth-child(4)");
  var slideTitle5 = document.querySelector(".tabs__title:nth-child(5)");
  slideTitle1.addEventListener("click", function () {
    slideTitles.forEach(function (item) {
      item.classList.remove("tabs__title_active");
    });
    slideTitle1.classList.add("tabs__title_active");
    swiperPhoto.slideTo(0);
  });
  slideTitle2.addEventListener("click", function () {
    slideTitles.forEach(function (item) {
      item.classList.remove("tabs__title_active");
    });
    slideTitle2.classList.add("tabs__title_active");
    swiperPhoto.slideTo(1);
  });
  slideTitle3.addEventListener("click", function () {
    slideTitles.forEach(function (item) {
      item.classList.remove("tabs__title_active");
    });
    slideTitle3.classList.add("tabs__title_active");
    swiperPhoto.slideTo(2);
  });
  slideTitle4.addEventListener("click", function () {
    slideTitles.forEach(function (item) {
      item.classList.remove("tabs__title_active");
    });
    slideTitle4.classList.add("tabs__title_active");
    swiperPhoto.slideTo(3);
  });
  slideTitle5.addEventListener("click", function () {
    slideTitles.forEach(function (item) {
      item.classList.remove("tabs__title_active");
    });
    slideTitle5.classList.add("tabs__title_active");
    swiperPhoto.slideTo(4);
  });
  swiperPhoto.on("slideChange", function () {
    if (swiperPhoto.activeIndex == 0) {
      slideTitles.forEach(function (item) {
        item.classList.remove("tabs__title_active");
      });
      slideTitle1.classList.add("tabs__title_active");
    }

    if (swiperPhoto.activeIndex == 1) {
      slideTitles.forEach(function (item) {
        item.classList.remove("tabs__title_active");
      });
      slideTitle2.classList.add("tabs__title_active");
    }

    if (swiperPhoto.activeIndex == 2) {
      slideTitles.forEach(function (item) {
        item.classList.remove("tabs__title_active");
      });
      slideTitle3.classList.add("tabs__title_active");
    }

    if (swiperPhoto.activeIndex == 3) {
      slideTitles.forEach(function (item) {
        item.classList.remove("tabs__title_active");
      });
      slideTitle4.classList.add("tabs__title_active");
    }

    if (swiperPhoto.activeIndex == 4) {
      slideTitles.forEach(function (item) {
        item.classList.remove("tabs__title_active");
      });
      slideTitle5.classList.add("tabs__title_active");
    }

    if (document.querySelector(".swiper-button-next-projects").classList.contains("swiper-button-disabled")) {
      slideTitles.forEach(function (item) {
        item.classList.remove("tabs__title_active");
      });
      slideTitle5.classList.add("tabs__title_active");
    }
  });
}

/***/ }),

/***/ "./src/blocks/modules/services/services.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/services/services.js ***!
  \*************************************************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Создаем новый observer (наблюдатель)
var observer = new IntersectionObserver(function (entries, obs) {
  entries.forEach(function (entry) {
    // Если элемент в зоне видимости, то ничего не происходит
    if (!entry.isIntersecting) return; // удаляем классы

    var observerTitles = document.querySelectorAll(".single-service-nav__link");
    observerTitles.forEach(function (item) {
      item.classList.remove("single-service-nav__link_active");
      document.querySelector(".single-service-nav__link_1").classList.add("single-service-nav__link_active");
    });
  });
});

if (document.querySelector(".service-descr__h3_1")) {
  // Задаем элемент для наблюдения
  var el = document.querySelector(".service-descr__h3_1"); // Прикрепляем его к «наблюдателю»

  observer.observe(el);
} // Создаем новый observer (наблюдатель)


var observer2 = new IntersectionObserver(function (entries, obs) {
  entries.forEach(function (entry) {
    // Если элемент в зоне видимости, то ничего не происходит
    if (!entry.isIntersecting) return; // удаляем классы

    var observerTitles = document.querySelectorAll(".single-service-nav__link");
    observerTitles.forEach(function (item) {
      item.classList.remove("single-service-nav__link_active");
      document.querySelector(".single-service-nav__link_2").classList.add("single-service-nav__link_active");
    });
  });
});

if (document.querySelector(".service-descr__h3_2")) {
  // Задаем элемент для наблюдения
  var _el = document.querySelector(".service-descr__h3_2"); // Прикрепляем его к «наблюдателю»


  observer2.observe(_el);
} // Создаем новый observer (наблюдатель)


var observer3 = new IntersectionObserver(function (entries, obs) {
  entries.forEach(function (entry) {
    // Если элемент в зоне видимости, то ничего не происходит
    if (!entry.isIntersecting) return; // удаляем классы

    var observerTitles = document.querySelectorAll(".single-service-nav__link");
    observerTitles.forEach(function (item) {
      item.classList.remove("single-service-nav__link_active");
      document.querySelector(".single-service-nav__link_3").classList.add("single-service-nav__link_active");
    });
  });
});

if (document.querySelector(".service-descr__h3_3")) {
  // Задаем элемент для наблюдения
  var _el2 = document.querySelector(".service-descr__h3_3"); // Прикрепляем его к «наблюдателю»


  observer3.observe(_el2);
} // Создаем новый observer (наблюдатель)


var observer4 = new IntersectionObserver(function (entries, obs) {
  entries.forEach(function (entry) {
    // Если элемент в зоне видимости, то ничего не происходит
    if (!entry.isIntersecting) return; // удаляем классы

    var observerTitles = document.querySelectorAll(".single-service-nav__link");
    observerTitles.forEach(function (item) {
      item.classList.remove("single-service-nav__link_active");
      document.querySelector(".single-service-nav__link_4").classList.add("single-service-nav__link_active");
    });
  });
});

if (document.querySelector(".service-descr__h3_4")) {
  // Задаем элемент для наблюдения
  var _el3 = document.querySelector(".service-descr__h3_4"); // Прикрепляем его к «наблюдателю»


  observer4.observe(_el3);
} // Создаем новый observer (наблюдатель)


var observer5 = new IntersectionObserver(function (entries, obs) {
  entries.forEach(function (entry) {
    // Если элемент в зоне видимости, то ничего не происходит
    if (!entry.isIntersecting) return; // удаляем классы

    var observerTitles = document.querySelectorAll(".single-service-nav__link");
    observerTitles.forEach(function (item) {
      item.classList.remove("single-service-nav__link_active");
      document.querySelector(".single-service-nav__link_5").classList.add("single-service-nav__link_active");
    });
  });
});

if (document.querySelector(".service-descr__h3_5")) {
  // Задаем элемент для наблюдения
  var _el4 = document.querySelector(".service-descr__h3_5"); // Прикрепляем его к «наблюдателю»


  observer5.observe(_el4);
}

var anchors = document.querySelectorAll('a[href*="#"]');

if (anchors) {
  var _iterator = _createForOfIteratorHelper(anchors),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        var blockID = anchor.getAttribute("href").substr(1);

        if (blockID) {
          document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

var observerLinks = document.querySelectorAll(".single-service-nav__link");

if (observerLinks) {
  var btns = document.querySelectorAll(".single-service-nav__link");
  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var _this = this;

      setTimeout(function () {
        if (!_this.classList.contains("acc-active")) {
          btns.forEach(function (btn) {
            btn.classList.remove("single-service-nav__link_active");
          });

          _this.classList.add("single-service-nav__link_active");
        } else {
          _this.classList.remove("single-service-nav__link_active");
        }
      }, "1000");
    });
  });
} // function t() {
//   let t = document.getElementsByClassName("single-service-nav__link_active");
//   t[0] && t[0].classList.remove("single-service-nav__link_active");
//   let e,
//     n = document.getElementsByClassName("service-descr__h3");
//   for (e = 0; e < n.length; e++) {
//     if (n[e].getBoundingClientRect().top > 1) break;
//   }
//   if ((e--, e >= 0)) {
//     let t =
//         n[e].firstElementChild && n[e].firstElementChild.getAttribute("href"),
//       i = document.querySelector(
//         '.single-service-nav__link a[href="' + t + '"]'
//       );
//     t && i && i.classList.add("single-service-nav__link_active");
//   }
// }
// document.addEventListener("DOMContentLoaded", function () {
//   t(), window.addEventListener("scroll", t);
// });

/***/ }),

/***/ "./src/blocks/modules/tabs/tabs.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/tabs/tabs.js ***!
  \*****************************************/
/***/ (() => {

var tabs = function tabs(headerSelector, tabSelector, contentSelector, activeClass) {
  var header = document.querySelector(headerSelector),
      tab = document.querySelectorAll(tabSelector),
      content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach(function (item) {
      item.style.display = "none";
    });
    tab.forEach(function (item) {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    content[i].style.display = "block";
    tab[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();
  header.addEventListener("click", function (e) {
    var target = e.target;

    if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
      tab.forEach(function (item, i) {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};

var projectTabs = document.querySelector(".project-tabs");

if (projectTabs) {
  tabs(".project-tabs__titles", ".project-tabs__title", ".project-tabs__item", "project-tabs__title_active");
}

var servicesTabs = document.querySelector(".services-tabs");

if (servicesTabs) {
  tabs(".services-tabs__titles", ".services-tabs__title", ".services-tabs__item", "tabs__title_active");
}

var vacancyTabs = document.querySelector(".vacancy-tabs");

if (vacancyTabs) {
  tabs(".vacancy-tabs__titles", ".vacancy-tabs__title", ".vacancy-tabs__item", "vacancy-tabs__title_active");
}

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_main_slider_main_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/main-slider/main-slider */ "./src/blocks/modules/main-slider/main-slider.js");
/* harmony import */ var _modules_project_sliders_project_sliders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/project-sliders/project-sliders */ "./src/blocks/modules/project-sliders/project-sliders.js");
/* harmony import */ var _modules_how_we_work_how_we_work__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/how-we-work/how-we-work */ "./src/blocks/modules/how-we-work/how-we-work.js");
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/accordion/accordion */ "./src/blocks/modules/accordion/accordion.js");
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/tabs/tabs */ "./src/blocks/modules/tabs/tabs.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_services_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/services/services */ "./src/blocks/modules/services/services.js");
/* harmony import */ var _modules_services_services__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_services_services__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_popups_popups__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/popups/popups */ "./src/blocks/modules/popups/popups.js");
/* harmony import */ var _modules_popups_popups__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_popups_popups__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_main_form_main_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/main-form/main-form */ "./src/blocks/modules/main-form/main-form.js");
/* harmony import */ var _modules_main_form_main_form__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_main_form_main_form__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_9__);











/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_scss_starter"] = self["webpackChunkgulp_scss_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map