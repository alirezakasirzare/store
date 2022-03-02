(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // js/lightense.min.js
  var require_lightense_min = __commonJS({
    "js/lightense.min.js"(exports, module) {
      !function(e, t) {
        typeof exports == "object" && typeof module == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports.Lightense = t() : e.Lightense = t();
      }(exports, function() {
        return e = { 352: (e2) => {
          function t2(e3, t3) {
            var n2 = Object.keys(e3);
            if (Object.getOwnPropertySymbols) {
              var r2 = Object.getOwnPropertySymbols(e3);
              t3 && (r2 = r2.filter(function(t4) {
                return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
              })), n2.push.apply(n2, r2);
            }
            return n2;
          }
          function n(e3) {
            for (var n2 = 1; n2 < arguments.length; n2++) {
              var i2 = arguments[n2] != null ? arguments[n2] : {};
              n2 % 2 ? t2(Object(i2), true).forEach(function(t3) {
                r(e3, t3, i2[t3]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(i2)) : t2(Object(i2)).forEach(function(t3) {
                Object.defineProperty(e3, t3, Object.getOwnPropertyDescriptor(i2, t3));
              });
            }
            return e3;
          }
          function r(e3, t3, n2) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          function i(e3) {
            return (i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
              return typeof e4;
            } : function(e4) {
              return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
            })(e3);
          }
          var o = function() {
            "use strict";
            var e3, t3 = { time: 300, padding: 40, offset: 40, keyboard: true, cubicBezier: "cubic-bezier(.2, 0, .1, 1)", background: "var(--bg-color-80, rgba(255, 255, 255, .98))", zIndex: 1e6, beforeShow: void 0, afterShow: void 0, beforeHide: void 0, afterHide: void 0 }, r2 = {};
            function o2(e4) {
              var t4 = r2[e4];
              if (t4) {
                if (typeof t4 != "function")
                  throw "config.".concat(e4, " must be a function!");
                Reflect.apply(t4, r2, [r2]);
              }
            }
            function a(e4) {
              switch (i(e4)) {
                case "undefined":
                  throw "You need to pass an element!";
                case "string":
                  return document.querySelectorAll(e4);
                case "object":
                  return e4;
              }
            }
            function c(e4) {
              var t4 = e4.length;
              if (t4)
                for (var n2 = 0; n2 < t4; n2++)
                  s(e4[n2]);
              else
                s(e4);
            }
            function s(e4) {
              e4.src && !e4.classList.contains("lightense-target") && (e4.classList.add("lightense-target"), e4.addEventListener("click", function(i2) {
                if (r2.keyboard && (i2.metaKey || i2.ctrlKey))
                  return window.open(e4.src, "_blank");
                !function(e5) {
                  if (r2.target = e5, r2.target.classList.contains("lightense-open"))
                    return g();
                  o2("beforeShow"), r2.scrollY = window.scrollY, function(e6, t4, n2) {
                    e6.addEventListener(t4, function r3(i4) {
                      Reflect.apply(n2, this, i4), e6.removeEventListener(t4, r3);
                    });
                  }(r2.target, "transitionend", function() {
                    o2("afterShow");
                  });
                  var i3 = new Image();
                  i3.onload = function() {
                    !function(e6) {
                      var n2 = e6.width, i4 = e6.height, o3 = window.pageYOffset || document.documentElement.scrollTop || 0, a2 = window.pageXOffset || document.documentElement.scrollLeft || 0, c2 = r2.target.getBoundingClientRect(), s2 = n2 / c2.width, d2 = window.innerWidth || document.documentElement.clientWidth || 0, l2 = window.innerHeight || document.documentElement.clientHeight || 0, u2 = r2.target.getAttribute("data-lightense-padding") || r2.target.getAttribute("data-padding") || r2.padding, g2 = d2 > u2 ? d2 - u2 : d2 - t3.padding, p2 = l2 > u2 ? l2 - u2 : l2 - t3.padding, f2 = n2 / i4, b = g2 / p2;
                      r2.scaleFactor = n2 < g2 && i4 < p2 ? s2 : f2 < b ? p2 / i4 * s2 : g2 / n2 * s2;
                      var h = d2 / 2, m = o3 + l2 / 2, v = c2.left + a2 + c2.width / 2, y = c2.top + o3 + c2.height / 2;
                      r2.translateX = Math.round(h - v), r2.translateY = Math.round(m - y);
                    }(this), function() {
                      r2.target.classList.add("lightense-open"), r2.wrap = document.createElement("div"), r2.wrap.className = "lightense-wrap", setTimeout(function() {
                        r2.target.style.transform = "scale(" + r2.scaleFactor + ")";
                      }, 20), r2.target.parentNode.insertBefore(r2.wrap, r2.target), r2.wrap.appendChild(r2.target), setTimeout(function() {
                        r2.wrap.style.transform = "translate3d(" + r2.translateX + "px, " + r2.translateY + "px, 0)";
                      }, 20);
                      var e6 = { cubicBezier: r2.target.getAttribute("data-lightense-cubic-bezier") || r2.cubicBezier, background: r2.target.getAttribute("data-lightense-background") || r2.target.getAttribute("data-background") || r2.background, zIndex: r2.target.getAttribute("data-lightense-z-index") || r2.zIndex }, t4 = n(n({}, r2), e6);
                      d("lightense-images-css-computed", "\n    :root {\n      --lightense-z-index: ".concat(t4.zIndex - 1, ";\n      --lightense-backdrop: ").concat(t4.background, ";\n      --lightense-duration: ").concat(t4.time, "ms;\n      --lightense-timing-func: ").concat(t4.cubicBezier, ";\n    }")), r2.container.style.visibility = "visible", setTimeout(function() {
                        r2.container.style.opacity = "1";
                      }, 20);
                    }(), window.addEventListener("keyup", f, false), window.addEventListener("scroll", p, false), r2.container.addEventListener("click", g, false);
                  }, i3.src = r2.target.src;
                }(this);
              }, false));
            }
            function d(e4, t4) {
              var n2 = document.head || document.getElementsByTagName("head")[0];
              document.getElementById(e4) && document.getElementById(e4).remove();
              var r3 = document.createElement("style");
              r3.id = e4, r3.styleSheet ? r3.styleSheet.cssText = t4 : r3.appendChild(document.createTextNode(t4)), n2.appendChild(r3);
            }
            function l() {
              d("lightense-images-css", "\n:root {\n  --lightense-z-index: ".concat(r2.zIndex - 1, ";\n  --lightense-backdrop: ").concat(r2.background, ";\n  --lightense-duration: ").concat(r2.time, "ms;\n  --lightense-timing-func: ").concat(r2.cubicBezier, ";\n}\n\n.lightense-backdrop {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: calc(var(--lightense-z-index) - 1);\n  padding: 0;\n  margin: 0;\n  transition: opacity var(--lightense-duration) ease;\n  cursor: zoom-out;\n  opacity: 0;\n  background-color: var(--lightense-backdrop);\n  visibility: hidden;\n}\n\n@supports (-webkit-backdrop-filter: blur(30px)) {\n  .lightense-backdrop {\n    background-color: var(--lightense-backdrop);\n    -webkit-backdrop-filter: blur(30px);\n  }\n}\n\n@supports (backdrop-filter: blur(30px)) {\n  .lightense-backdrop {\n    background-color: var(--lightense-backdrop);\n    backdrop-filter: blur(30px);\n  }\n}\n\n.lightense-wrap {\n  position: relative;\n  transition: transform var(--lightense-duration) var(--lightense-timing-func);\n  z-index: var(--lightense-z-index);\n  pointer-events: none;\n}\n\n.lightense-target {\n  cursor: zoom-in;\n  transition: transform var(--lightense-duration) var(--lightense-timing-func);\n  pointer-events: auto;\n}\n\n.lightense-open {\n  cursor: zoom-out;\n}\n\n.lightense-transitioning {\n  pointer-events: none;\n}"));
            }
            function u() {
              document.querySelector(".lightense-backdrop") === null ? (r2.container = document.createElement("div"), r2.container.className = "lightense-backdrop", document.body.appendChild(r2.container)) : r2.container = document.querySelector(".lightense-backdrop");
            }
            function g() {
              o2("beforeHide"), window.removeEventListener("keyup", f, false), window.removeEventListener("scroll", p, false), r2.container.removeEventListener("click", g, false), r2.target.classList.remove("lightense-open"), r2.wrap.style.transform = "", r2.target.style.transform = "", r2.target.classList.add("lightense-transitioning"), r2.container.style.opacity = "", setTimeout(function() {
                o2("afterHide"), r2.container.style.visibility = "", r2.container.style.backgroundColor = "", r2.wrap.parentNode.replaceChild(r2.target, r2.wrap), r2.target.classList.remove("lightense-transitioning");
              }, r2.time);
            }
            function p() {
              Math.abs(r2.scrollY - window.scrollY) >= r2.offset && g();
            }
            function f(e4) {
              e4.preventDefault(), e4.keyCode === 27 && g();
            }
            return function(i2) {
              var o3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              e3 = a(i2), r2 = n(n({}, t3), o3), l(), u(), c(e3);
            };
          }();
          e2.exports = o;
        } }, t = {}, function n(r) {
          var i = t[r];
          if (i !== void 0)
            return i.exports;
          var o = t[r] = { exports: {} };
          return e[r](o, o.exports, n), o.exports;
        }(352);
        var e, t;
      });
    }
  });

  // node_modules/@popperjs/core/dist/cjs/popper.js
  var require_popper = __commonJS({
    "node_modules/@popperjs/core/dist/cjs/popper.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function getWindow(node) {
        if (node == null) {
          return window;
        }
        if (node.toString() !== "[object Window]") {
          var ownerDocument = node.ownerDocument;
          return ownerDocument ? ownerDocument.defaultView || window : window;
        }
        return node;
      }
      function isElement(node) {
        var OwnElement = getWindow(node).Element;
        return node instanceof OwnElement || node instanceof Element;
      }
      function isHTMLElement(node) {
        var OwnElement = getWindow(node).HTMLElement;
        return node instanceof OwnElement || node instanceof HTMLElement;
      }
      function isShadowRoot(node) {
        if (typeof ShadowRoot === "undefined") {
          return false;
        }
        var OwnElement = getWindow(node).ShadowRoot;
        return node instanceof OwnElement || node instanceof ShadowRoot;
      }
      var max = Math.max;
      var min = Math.min;
      var round = Math.round;
      function getBoundingClientRect(element, includeScale) {
        if (includeScale === void 0) {
          includeScale = false;
        }
        var rect = element.getBoundingClientRect();
        var scaleX = 1;
        var scaleY = 1;
        if (isHTMLElement(element) && includeScale) {
          var offsetHeight = element.offsetHeight;
          var offsetWidth = element.offsetWidth;
          if (offsetWidth > 0) {
            scaleX = round(rect.width) / offsetWidth || 1;
          }
          if (offsetHeight > 0) {
            scaleY = round(rect.height) / offsetHeight || 1;
          }
        }
        return {
          width: rect.width / scaleX,
          height: rect.height / scaleY,
          top: rect.top / scaleY,
          right: rect.right / scaleX,
          bottom: rect.bottom / scaleY,
          left: rect.left / scaleX,
          x: rect.left / scaleX,
          y: rect.top / scaleY
        };
      }
      function getWindowScroll(node) {
        var win = getWindow(node);
        var scrollLeft = win.pageXOffset;
        var scrollTop = win.pageYOffset;
        return {
          scrollLeft,
          scrollTop
        };
      }
      function getHTMLElementScroll(element) {
        return {
          scrollLeft: element.scrollLeft,
          scrollTop: element.scrollTop
        };
      }
      function getNodeScroll(node) {
        if (node === getWindow(node) || !isHTMLElement(node)) {
          return getWindowScroll(node);
        } else {
          return getHTMLElementScroll(node);
        }
      }
      function getNodeName(element) {
        return element ? (element.nodeName || "").toLowerCase() : null;
      }
      function getDocumentElement(element) {
        return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
      }
      function getWindowScrollBarX(element) {
        return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
      }
      function getComputedStyle2(element) {
        return getWindow(element).getComputedStyle(element);
      }
      function isScrollParent(element) {
        var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
        return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
      }
      function isElementScaled(element) {
        var rect = element.getBoundingClientRect();
        var scaleX = round(rect.width) / element.offsetWidth || 1;
        var scaleY = round(rect.height) / element.offsetHeight || 1;
        return scaleX !== 1 || scaleY !== 1;
      }
      function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
        if (isFixed === void 0) {
          isFixed = false;
        }
        var isOffsetParentAnElement = isHTMLElement(offsetParent);
        var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
        var documentElement = getDocumentElement(offsetParent);
        var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
        var scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        var offsets = {
          x: 0,
          y: 0
        };
        if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
          if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
            scroll = getNodeScroll(offsetParent);
          }
          if (isHTMLElement(offsetParent)) {
            offsets = getBoundingClientRect(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
          } else if (documentElement) {
            offsets.x = getWindowScrollBarX(documentElement);
          }
        }
        return {
          x: rect.left + scroll.scrollLeft - offsets.x,
          y: rect.top + scroll.scrollTop - offsets.y,
          width: rect.width,
          height: rect.height
        };
      }
      function getLayoutRect(element) {
        var clientRect = getBoundingClientRect(element);
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        if (Math.abs(clientRect.width - width) <= 1) {
          width = clientRect.width;
        }
        if (Math.abs(clientRect.height - height) <= 1) {
          height = clientRect.height;
        }
        return {
          x: element.offsetLeft,
          y: element.offsetTop,
          width,
          height
        };
      }
      function getParentNode(element) {
        if (getNodeName(element) === "html") {
          return element;
        }
        return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
      }
      function getScrollParent(node) {
        if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
          return node.ownerDocument.body;
        }
        if (isHTMLElement(node) && isScrollParent(node)) {
          return node;
        }
        return getScrollParent(getParentNode(node));
      }
      function listScrollParents(element, list) {
        var _element$ownerDocumen;
        if (list === void 0) {
          list = [];
        }
        var scrollParent = getScrollParent(element);
        var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
        var win = getWindow(scrollParent);
        var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
        var updatedList = list.concat(target);
        return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
      }
      function isTableElement(element) {
        return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
      }
      function getTrueOffsetParent(element) {
        if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
          return null;
        }
        return element.offsetParent;
      }
      function getContainingBlock(element) {
        var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
        var isIE = navigator.userAgent.indexOf("Trident") !== -1;
        if (isIE && isHTMLElement(element)) {
          var elementCss = getComputedStyle2(element);
          if (elementCss.position === "fixed") {
            return null;
          }
        }
        var currentNode = getParentNode(element);
        while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
          var css = getComputedStyle2(currentNode);
          if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
            return currentNode;
          } else {
            currentNode = currentNode.parentNode;
          }
        }
        return null;
      }
      function getOffsetParent(element) {
        var window2 = getWindow(element);
        var offsetParent = getTrueOffsetParent(element);
        while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
          offsetParent = getTrueOffsetParent(offsetParent);
        }
        if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
          return window2;
        }
        return offsetParent || getContainingBlock(element) || window2;
      }
      var top = "top";
      var bottom = "bottom";
      var right = "right";
      var left = "left";
      var auto = "auto";
      var basePlacements = [top, bottom, right, left];
      var start = "start";
      var end = "end";
      var clippingParents = "clippingParents";
      var viewport = "viewport";
      var popper = "popper";
      var reference = "reference";
      var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
        return acc.concat([placement + "-" + start, placement + "-" + end]);
      }, []);
      var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
        return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
      }, []);
      var beforeRead = "beforeRead";
      var read = "read";
      var afterRead = "afterRead";
      var beforeMain = "beforeMain";
      var main = "main";
      var afterMain = "afterMain";
      var beforeWrite = "beforeWrite";
      var write = "write";
      var afterWrite = "afterWrite";
      var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
      function order(modifiers) {
        var map = /* @__PURE__ */ new Map();
        var visited = /* @__PURE__ */ new Set();
        var result = [];
        modifiers.forEach(function(modifier) {
          map.set(modifier.name, modifier);
        });
        function sort(modifier) {
          visited.add(modifier.name);
          var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
          requires.forEach(function(dep) {
            if (!visited.has(dep)) {
              var depModifier = map.get(dep);
              if (depModifier) {
                sort(depModifier);
              }
            }
          });
          result.push(modifier);
        }
        modifiers.forEach(function(modifier) {
          if (!visited.has(modifier.name)) {
            sort(modifier);
          }
        });
        return result;
      }
      function orderModifiers(modifiers) {
        var orderedModifiers = order(modifiers);
        return modifierPhases.reduce(function(acc, phase) {
          return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
          }));
        }, []);
      }
      function debounce(fn) {
        var pending;
        return function() {
          if (!pending) {
            pending = new Promise(function(resolve) {
              Promise.resolve().then(function() {
                pending = void 0;
                resolve(fn());
              });
            });
          }
          return pending;
        };
      }
      function format(str) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return [].concat(args).reduce(function(p, c) {
          return p.replace(/%s/, c);
        }, str);
      }
      var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
      var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
      var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
      function validateModifiers(modifiers) {
        modifiers.forEach(function(modifier) {
          [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self2) {
            return self2.indexOf(value) === index;
          }).forEach(function(key) {
            switch (key) {
              case "name":
                if (typeof modifier.name !== "string") {
                  console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
                }
                break;
              case "enabled":
                if (typeof modifier.enabled !== "boolean") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
                }
                break;
              case "phase":
                if (modifierPhases.indexOf(modifier.phase) < 0) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
                }
                break;
              case "fn":
                if (typeof modifier.fn !== "function") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
                }
                break;
              case "effect":
                if (modifier.effect != null && typeof modifier.effect !== "function") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
                }
                break;
              case "requires":
                if (modifier.requires != null && !Array.isArray(modifier.requires)) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
                }
                break;
              case "requiresIfExists":
                if (!Array.isArray(modifier.requiresIfExists)) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
                }
                break;
              case "options":
              case "data":
                break;
              default:
                console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
                  return '"' + s + '"';
                }).join(", ") + '; but "' + key + '" was provided.');
            }
            modifier.requires && modifier.requires.forEach(function(requirement) {
              if (modifiers.find(function(mod) {
                return mod.name === requirement;
              }) == null) {
                console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
              }
            });
          });
        });
      }
      function uniqueBy(arr, fn) {
        var identifiers = /* @__PURE__ */ new Set();
        return arr.filter(function(item) {
          var identifier = fn(item);
          if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
          }
        });
      }
      function getBasePlacement(placement) {
        return placement.split("-")[0];
      }
      function mergeByName(modifiers) {
        var merged = modifiers.reduce(function(merged2, current) {
          var existing = merged2[current.name];
          merged2[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
          }) : current;
          return merged2;
        }, {});
        return Object.keys(merged).map(function(key) {
          return merged[key];
        });
      }
      function getViewportRect(element) {
        var win = getWindow(element);
        var html = getDocumentElement(element);
        var visualViewport = win.visualViewport;
        var width = html.clientWidth;
        var height = html.clientHeight;
        var x = 0;
        var y = 0;
        if (visualViewport) {
          width = visualViewport.width;
          height = visualViewport.height;
          if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
          }
        }
        return {
          width,
          height,
          x: x + getWindowScrollBarX(element),
          y
        };
      }
      function getDocumentRect(element) {
        var _element$ownerDocumen;
        var html = getDocumentElement(element);
        var winScroll = getWindowScroll(element);
        var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
        var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
        var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
        var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
        var y = -winScroll.scrollTop;
        if (getComputedStyle2(body || html).direction === "rtl") {
          x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
        }
        return {
          width,
          height,
          x,
          y
        };
      }
      function contains(parent, child) {
        var rootNode = child.getRootNode && child.getRootNode();
        if (parent.contains(child)) {
          return true;
        } else if (rootNode && isShadowRoot(rootNode)) {
          var next = child;
          do {
            if (next && parent.isSameNode(next)) {
              return true;
            }
            next = next.parentNode || next.host;
          } while (next);
        }
        return false;
      }
      function rectToClientRect(rect) {
        return Object.assign({}, rect, {
          left: rect.x,
          top: rect.y,
          right: rect.x + rect.width,
          bottom: rect.y + rect.height
        });
      }
      function getInnerBoundingClientRect(element) {
        var rect = getBoundingClientRect(element);
        rect.top = rect.top + element.clientTop;
        rect.left = rect.left + element.clientLeft;
        rect.bottom = rect.top + element.clientHeight;
        rect.right = rect.left + element.clientWidth;
        rect.width = element.clientWidth;
        rect.height = element.clientHeight;
        rect.x = rect.left;
        rect.y = rect.top;
        return rect;
      }
      function getClientRectFromMixedType(element, clippingParent) {
        return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
      }
      function getClippingParents(element) {
        var clippingParents2 = listScrollParents(getParentNode(element));
        var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
        var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
        if (!isElement(clipperElement)) {
          return [];
        }
        return clippingParents2.filter(function(clippingParent) {
          return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
        });
      }
      function getClippingRect(element, boundary, rootBoundary) {
        var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
        var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
        var firstClippingParent = clippingParents2[0];
        var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
          var rect = getClientRectFromMixedType(element, clippingParent);
          accRect.top = max(rect.top, accRect.top);
          accRect.right = min(rect.right, accRect.right);
          accRect.bottom = min(rect.bottom, accRect.bottom);
          accRect.left = max(rect.left, accRect.left);
          return accRect;
        }, getClientRectFromMixedType(element, firstClippingParent));
        clippingRect.width = clippingRect.right - clippingRect.left;
        clippingRect.height = clippingRect.bottom - clippingRect.top;
        clippingRect.x = clippingRect.left;
        clippingRect.y = clippingRect.top;
        return clippingRect;
      }
      function getVariation(placement) {
        return placement.split("-")[1];
      }
      function getMainAxisFromPlacement(placement) {
        return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
      }
      function computeOffsets(_ref) {
        var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
        var basePlacement = placement ? getBasePlacement(placement) : null;
        var variation = placement ? getVariation(placement) : null;
        var commonX = reference2.x + reference2.width / 2 - element.width / 2;
        var commonY = reference2.y + reference2.height / 2 - element.height / 2;
        var offsets;
        switch (basePlacement) {
          case top:
            offsets = {
              x: commonX,
              y: reference2.y - element.height
            };
            break;
          case bottom:
            offsets = {
              x: commonX,
              y: reference2.y + reference2.height
            };
            break;
          case right:
            offsets = {
              x: reference2.x + reference2.width,
              y: commonY
            };
            break;
          case left:
            offsets = {
              x: reference2.x - element.width,
              y: commonY
            };
            break;
          default:
            offsets = {
              x: reference2.x,
              y: reference2.y
            };
        }
        var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
        if (mainAxis != null) {
          var len = mainAxis === "y" ? "height" : "width";
          switch (variation) {
            case start:
              offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
              break;
            case end:
              offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
              break;
          }
        }
        return offsets;
      }
      function getFreshSideObject() {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        };
      }
      function mergePaddingObject(paddingObject) {
        return Object.assign({}, getFreshSideObject(), paddingObject);
      }
      function expandToHashMap(value, keys) {
        return keys.reduce(function(hashMap, key) {
          hashMap[key] = value;
          return hashMap;
        }, {});
      }
      function detectOverflow(state, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
        var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
        var altContext = elementContext === popper ? reference : popper;
        var popperRect = state.rects.popper;
        var element = state.elements[altBoundary ? altContext : elementContext];
        var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
        var referenceClientRect = getBoundingClientRect(state.elements.reference);
        var popperOffsets2 = computeOffsets({
          reference: referenceClientRect,
          element: popperRect,
          strategy: "absolute",
          placement
        });
        var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
        var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
        var overflowOffsets = {
          top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
          bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
          left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
          right: elementClientRect.right - clippingClientRect.right + paddingObject.right
        };
        var offsetData = state.modifiersData.offset;
        if (elementContext === popper && offsetData) {
          var offset2 = offsetData[placement];
          Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
            var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset2[axis] * multiply;
          });
        }
        return overflowOffsets;
      }
      var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
      var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
      var DEFAULT_OPTIONS = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
      };
      function areValidElements() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return !args.some(function(element) {
          return !(element && typeof element.getBoundingClientRect === "function");
        });
      }
      function popperGenerator(generatorOptions) {
        if (generatorOptions === void 0) {
          generatorOptions = {};
        }
        var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
        return function createPopper2(reference2, popper2, options) {
          if (options === void 0) {
            options = defaultOptions;
          }
          var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
              reference: reference2,
              popper: popper2
            },
            attributes: {},
            styles: {}
          };
          var effectCleanupFns = [];
          var isDestroyed = false;
          var instance = {
            state,
            setOptions: function setOptions(setOptionsAction) {
              var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
              cleanupModifierEffects();
              state.options = Object.assign({}, defaultOptions, state.options, options2);
              state.scrollParents = {
                reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
                popper: listScrollParents(popper2)
              };
              var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
              state.orderedModifiers = orderedModifiers.filter(function(m) {
                return m.enabled;
              });
              if (true) {
                var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
                  var name = _ref.name;
                  return name;
                });
                validateModifiers(modifiers);
                if (getBasePlacement(state.options.placement) === auto) {
                  var flipModifier = state.orderedModifiers.find(function(_ref2) {
                    var name = _ref2.name;
                    return name === "flip";
                  });
                  if (!flipModifier) {
                    console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
                  }
                }
                var _getComputedStyle = getComputedStyle2(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
                if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
                  return parseFloat(margin);
                })) {
                  console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
                }
              }
              runModifierEffects();
              return instance.update();
            },
            forceUpdate: function forceUpdate() {
              if (isDestroyed) {
                return;
              }
              var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
              if (!areValidElements(reference3, popper3)) {
                if (true) {
                  console.error(INVALID_ELEMENT_ERROR);
                }
                return;
              }
              state.rects = {
                reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
                popper: getLayoutRect(popper3)
              };
              state.reset = false;
              state.placement = state.options.placement;
              state.orderedModifiers.forEach(function(modifier) {
                return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
              });
              var __debug_loops__ = 0;
              for (var index = 0; index < state.orderedModifiers.length; index++) {
                if (true) {
                  __debug_loops__ += 1;
                  if (__debug_loops__ > 100) {
                    console.error(INFINITE_LOOP_ERROR);
                    break;
                  }
                }
                if (state.reset === true) {
                  state.reset = false;
                  index = -1;
                  continue;
                }
                var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                if (typeof fn === "function") {
                  state = fn({
                    state,
                    options: _options,
                    name,
                    instance
                  }) || state;
                }
              }
            },
            update: debounce(function() {
              return new Promise(function(resolve) {
                instance.forceUpdate();
                resolve(state);
              });
            }),
            destroy: function destroy() {
              cleanupModifierEffects();
              isDestroyed = true;
            }
          };
          if (!areValidElements(reference2, popper2)) {
            if (true) {
              console.error(INVALID_ELEMENT_ERROR);
            }
            return instance;
          }
          instance.setOptions(options).then(function(state2) {
            if (!isDestroyed && options.onFirstUpdate) {
              options.onFirstUpdate(state2);
            }
          });
          function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref3) {
              var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
              if (typeof effect2 === "function") {
                var cleanupFn = effect2({
                  state,
                  name,
                  instance,
                  options: options2
                });
                var noopFn = function noopFn2() {
                };
                effectCleanupFns.push(cleanupFn || noopFn);
              }
            });
          }
          function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
              return fn();
            });
            effectCleanupFns = [];
          }
          return instance;
        };
      }
      var passive = {
        passive: true
      };
      function effect$2(_ref) {
        var state = _ref.state, instance = _ref.instance, options = _ref.options;
        var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
        var window2 = getWindow(state.elements.popper);
        var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
        if (scroll) {
          scrollParents.forEach(function(scrollParent) {
            scrollParent.addEventListener("scroll", instance.update, passive);
          });
        }
        if (resize) {
          window2.addEventListener("resize", instance.update, passive);
        }
        return function() {
          if (scroll) {
            scrollParents.forEach(function(scrollParent) {
              scrollParent.removeEventListener("scroll", instance.update, passive);
            });
          }
          if (resize) {
            window2.removeEventListener("resize", instance.update, passive);
          }
        };
      }
      var eventListeners = {
        name: "eventListeners",
        enabled: true,
        phase: "write",
        fn: function fn() {
        },
        effect: effect$2,
        data: {}
      };
      function popperOffsets(_ref) {
        var state = _ref.state, name = _ref.name;
        state.modifiersData[name] = computeOffsets({
          reference: state.rects.reference,
          element: state.rects.popper,
          strategy: "absolute",
          placement: state.placement
        });
      }
      var popperOffsets$1 = {
        name: "popperOffsets",
        enabled: true,
        phase: "read",
        fn: popperOffsets,
        data: {}
      };
      var unsetSides = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
      };
      function roundOffsetsByDPR(_ref) {
        var x = _ref.x, y = _ref.y;
        var win = window;
        var dpr = win.devicePixelRatio || 1;
        return {
          x: round(x * dpr) / dpr || 0,
          y: round(y * dpr) / dpr || 0
        };
      }
      function mapToStyles(_ref2) {
        var _Object$assign2;
        var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
        var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
        var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
          x,
          y
        }) : {
          x,
          y
        };
        x = _ref3.x;
        y = _ref3.y;
        var hasX = offsets.hasOwnProperty("x");
        var hasY = offsets.hasOwnProperty("y");
        var sideX = left;
        var sideY = top;
        var win = window;
        if (adaptive) {
          var offsetParent = getOffsetParent(popper2);
          var heightProp = "clientHeight";
          var widthProp = "clientWidth";
          if (offsetParent === getWindow(popper2)) {
            offsetParent = getDocumentElement(popper2);
            if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
              heightProp = "scrollHeight";
              widthProp = "scrollWidth";
            }
          }
          offsetParent = offsetParent;
          if (placement === top || (placement === left || placement === right) && variation === end) {
            sideY = bottom;
            var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
          }
          if (placement === left || (placement === top || placement === bottom) && variation === end) {
            sideX = right;
            var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
          }
        }
        var commonStyles = Object.assign({
          position
        }, adaptive && unsetSides);
        var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
          x,
          y
        }) : {
          x,
          y
        };
        x = _ref4.x;
        y = _ref4.y;
        if (gpuAcceleration) {
          var _Object$assign;
          return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
        }
        return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
      }
      function computeStyles(_ref5) {
        var state = _ref5.state, options = _ref5.options;
        var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
        if (true) {
          var transitionProperty = getComputedStyle2(state.elements.popper).transitionProperty || "";
          if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
            return transitionProperty.indexOf(property) >= 0;
          })) {
            console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
          }
        }
        var commonStyles = {
          placement: getBasePlacement(state.placement),
          variation: getVariation(state.placement),
          popper: state.elements.popper,
          popperRect: state.rects.popper,
          gpuAcceleration,
          isFixed: state.options.strategy === "fixed"
        };
        if (state.modifiersData.popperOffsets != null) {
          state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.popperOffsets,
            position: state.options.strategy,
            adaptive,
            roundOffsets
          })));
        }
        if (state.modifiersData.arrow != null) {
          state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.arrow,
            position: "absolute",
            adaptive: false,
            roundOffsets
          })));
        }
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-placement": state.placement
        });
      }
      var computeStyles$1 = {
        name: "computeStyles",
        enabled: true,
        phase: "beforeWrite",
        fn: computeStyles,
        data: {}
      };
      function applyStyles(_ref) {
        var state = _ref.state;
        Object.keys(state.elements).forEach(function(name) {
          var style = state.styles[name] || {};
          var attributes = state.attributes[name] || {};
          var element = state.elements[name];
          if (!isHTMLElement(element) || !getNodeName(element)) {
            return;
          }
          Object.assign(element.style, style);
          Object.keys(attributes).forEach(function(name2) {
            var value = attributes[name2];
            if (value === false) {
              element.removeAttribute(name2);
            } else {
              element.setAttribute(name2, value === true ? "" : value);
            }
          });
        });
      }
      function effect$1(_ref2) {
        var state = _ref2.state;
        var initialStyles = {
          popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;
        if (state.elements.arrow) {
          Object.assign(state.elements.arrow.style, initialStyles.arrow);
        }
        return function() {
          Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
            var style = styleProperties.reduce(function(style2, property) {
              style2[property] = "";
              return style2;
            }, {});
            if (!isHTMLElement(element) || !getNodeName(element)) {
              return;
            }
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
              element.removeAttribute(attribute);
            });
          });
        };
      }
      var applyStyles$1 = {
        name: "applyStyles",
        enabled: true,
        phase: "write",
        fn: applyStyles,
        effect: effect$1,
        requires: ["computeStyles"]
      };
      function distanceAndSkiddingToXY(placement, rects, offset2) {
        var basePlacement = getBasePlacement(placement);
        var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
        var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
          placement
        })) : offset2, skidding = _ref[0], distance = _ref[1];
        skidding = skidding || 0;
        distance = (distance || 0) * invertDistance;
        return [left, right].indexOf(basePlacement) >= 0 ? {
          x: distance,
          y: skidding
        } : {
          x: skidding,
          y: distance
        };
      }
      function offset(_ref2) {
        var state = _ref2.state, options = _ref2.options, name = _ref2.name;
        var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
        var data = placements.reduce(function(acc, placement) {
          acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
          return acc;
        }, {});
        var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
        if (state.modifiersData.popperOffsets != null) {
          state.modifiersData.popperOffsets.x += x;
          state.modifiersData.popperOffsets.y += y;
        }
        state.modifiersData[name] = data;
      }
      var offset$1 = {
        name: "offset",
        enabled: true,
        phase: "main",
        requires: ["popperOffsets"],
        fn: offset
      };
      var hash$1 = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, function(matched) {
          return hash$1[matched];
        });
      }
      var hash = {
        start: "end",
        end: "start"
      };
      function getOppositeVariationPlacement(placement) {
        return placement.replace(/start|end/g, function(matched) {
          return hash[matched];
        });
      }
      function computeAutoPlacement(state, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
        var variation = getVariation(placement);
        var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
          return getVariation(placement2) === variation;
        }) : basePlacements;
        var allowedPlacements = placements$1.filter(function(placement2) {
          return allowedAutoPlacements.indexOf(placement2) >= 0;
        });
        if (allowedPlacements.length === 0) {
          allowedPlacements = placements$1;
          if (true) {
            console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
          }
        }
        var overflows = allowedPlacements.reduce(function(acc, placement2) {
          acc[placement2] = detectOverflow(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding
          })[getBasePlacement(placement2)];
          return acc;
        }, {});
        return Object.keys(overflows).sort(function(a, b) {
          return overflows[a] - overflows[b];
        });
      }
      function getExpandedFallbackPlacements(placement) {
        if (getBasePlacement(placement) === auto) {
          return [];
        }
        var oppositePlacement = getOppositePlacement(placement);
        return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
      }
      function flip(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        if (state.modifiersData[name]._skip) {
          return;
        }
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
        var preferredPlacement = state.options.placement;
        var basePlacement = getBasePlacement(preferredPlacement);
        var isBasePlacement = basePlacement === preferredPlacement;
        var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
        var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
          return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding,
            flipVariations,
            allowedAutoPlacements
          }) : placement2);
        }, []);
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var checksMap = /* @__PURE__ */ new Map();
        var makeFallbackChecks = true;
        var firstFittingPlacement = placements2[0];
        for (var i = 0; i < placements2.length; i++) {
          var placement = placements2[i];
          var _basePlacement = getBasePlacement(placement);
          var isStartVariation = getVariation(placement) === start;
          var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
          var len = isVertical ? "width" : "height";
          var overflow = detectOverflow(state, {
            placement,
            boundary,
            rootBoundary,
            altBoundary,
            padding
          });
          var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
          if (referenceRect[len] > popperRect[len]) {
            mainVariationSide = getOppositePlacement(mainVariationSide);
          }
          var altVariationSide = getOppositePlacement(mainVariationSide);
          var checks = [];
          if (checkMainAxis) {
            checks.push(overflow[_basePlacement] <= 0);
          }
          if (checkAltAxis) {
            checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
          }
          if (checks.every(function(check) {
            return check;
          })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
          }
          checksMap.set(placement, checks);
        }
        if (makeFallbackChecks) {
          var numberOfChecks = flipVariations ? 3 : 1;
          var _loop = function _loop2(_i2) {
            var fittingPlacement = placements2.find(function(placement2) {
              var checks2 = checksMap.get(placement2);
              if (checks2) {
                return checks2.slice(0, _i2).every(function(check) {
                  return check;
                });
              }
            });
            if (fittingPlacement) {
              firstFittingPlacement = fittingPlacement;
              return "break";
            }
          };
          for (var _i = numberOfChecks; _i > 0; _i--) {
            var _ret = _loop(_i);
            if (_ret === "break")
              break;
          }
        }
        if (state.placement !== firstFittingPlacement) {
          state.modifiersData[name]._skip = true;
          state.placement = firstFittingPlacement;
          state.reset = true;
        }
      }
      var flip$1 = {
        name: "flip",
        enabled: true,
        phase: "main",
        fn: flip,
        requiresIfExists: ["offset"],
        data: {
          _skip: false
        }
      };
      function getAltAxis(axis) {
        return axis === "x" ? "y" : "x";
      }
      function within(min$1, value, max$1) {
        return max(min$1, min(value, max$1));
      }
      function withinMaxClamp(min2, value, max2) {
        var v = within(min2, value, max2);
        return v > max2 ? max2 : v;
      }
      function preventOverflow(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
        var overflow = detectOverflow(state, {
          boundary,
          rootBoundary,
          padding,
          altBoundary
        });
        var basePlacement = getBasePlacement(state.placement);
        var variation = getVariation(state.placement);
        var isBasePlacement = !variation;
        var mainAxis = getMainAxisFromPlacement(basePlacement);
        var altAxis = getAltAxis(mainAxis);
        var popperOffsets2 = state.modifiersData.popperOffsets;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
          placement: state.placement
        })) : tetherOffset;
        var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
          mainAxis: tetherOffsetValue,
          altAxis: tetherOffsetValue
        } : Object.assign({
          mainAxis: 0,
          altAxis: 0
        }, tetherOffsetValue);
        var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
        var data = {
          x: 0,
          y: 0
        };
        if (!popperOffsets2) {
          return;
        }
        if (checkMainAxis) {
          var _offsetModifierState$;
          var mainSide = mainAxis === "y" ? top : left;
          var altSide = mainAxis === "y" ? bottom : right;
          var len = mainAxis === "y" ? "height" : "width";
          var offset2 = popperOffsets2[mainAxis];
          var min$1 = offset2 + overflow[mainSide];
          var max$1 = offset2 - overflow[altSide];
          var additive = tether ? -popperRect[len] / 2 : 0;
          var minLen = variation === start ? referenceRect[len] : popperRect[len];
          var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
          var arrowElement = state.elements.arrow;
          var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
            width: 0,
            height: 0
          };
          var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
          var arrowPaddingMin = arrowPaddingObject[mainSide];
          var arrowPaddingMax = arrowPaddingObject[altSide];
          var arrowLen = within(0, referenceRect[len], arrowRect[len]);
          var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
          var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
          var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
          var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
          var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
          var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
          var tetherMax = offset2 + maxOffset - offsetModifierValue;
          var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
          popperOffsets2[mainAxis] = preventedOffset;
          data[mainAxis] = preventedOffset - offset2;
        }
        if (checkAltAxis) {
          var _offsetModifierState$2;
          var _mainSide = mainAxis === "x" ? top : left;
          var _altSide = mainAxis === "x" ? bottom : right;
          var _offset = popperOffsets2[altAxis];
          var _len = altAxis === "y" ? "height" : "width";
          var _min = _offset + overflow[_mainSide];
          var _max = _offset - overflow[_altSide];
          var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
          var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
          var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
          var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
          var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
          popperOffsets2[altAxis] = _preventedOffset;
          data[altAxis] = _preventedOffset - _offset;
        }
        state.modifiersData[name] = data;
      }
      var preventOverflow$1 = {
        name: "preventOverflow",
        enabled: true,
        phase: "main",
        fn: preventOverflow,
        requiresIfExists: ["offset"]
      };
      var toPaddingObject = function toPaddingObject2(padding, state) {
        padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
          placement: state.placement
        })) : padding;
        return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
      };
      function arrow(_ref) {
        var _state$modifiersData$;
        var state = _ref.state, name = _ref.name, options = _ref.options;
        var arrowElement = state.elements.arrow;
        var popperOffsets2 = state.modifiersData.popperOffsets;
        var basePlacement = getBasePlacement(state.placement);
        var axis = getMainAxisFromPlacement(basePlacement);
        var isVertical = [left, right].indexOf(basePlacement) >= 0;
        var len = isVertical ? "height" : "width";
        if (!arrowElement || !popperOffsets2) {
          return;
        }
        var paddingObject = toPaddingObject(options.padding, state);
        var arrowRect = getLayoutRect(arrowElement);
        var minProp = axis === "y" ? top : left;
        var maxProp = axis === "y" ? bottom : right;
        var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
        var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
        var arrowOffsetParent = getOffsetParent(arrowElement);
        var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
        var centerToReference = endDiff / 2 - startDiff / 2;
        var min2 = paddingObject[minProp];
        var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
        var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
        var offset2 = within(min2, center, max2);
        var axisProp = axis;
        state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
      }
      function effect(_ref2) {
        var state = _ref2.state, options = _ref2.options;
        var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
        if (arrowElement == null) {
          return;
        }
        if (typeof arrowElement === "string") {
          arrowElement = state.elements.popper.querySelector(arrowElement);
          if (!arrowElement) {
            return;
          }
        }
        if (true) {
          if (!isHTMLElement(arrowElement)) {
            console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
          }
        }
        if (!contains(state.elements.popper, arrowElement)) {
          if (true) {
            console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
          }
          return;
        }
        state.elements.arrow = arrowElement;
      }
      var arrow$1 = {
        name: "arrow",
        enabled: true,
        phase: "main",
        fn: arrow,
        effect,
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
      };
      function getSideOffsets(overflow, rect, preventedOffsets) {
        if (preventedOffsets === void 0) {
          preventedOffsets = {
            x: 0,
            y: 0
          };
        }
        return {
          top: overflow.top - rect.height - preventedOffsets.y,
          right: overflow.right - rect.width + preventedOffsets.x,
          bottom: overflow.bottom - rect.height + preventedOffsets.y,
          left: overflow.left - rect.width - preventedOffsets.x
        };
      }
      function isAnySideFullyClipped(overflow) {
        return [top, right, bottom, left].some(function(side) {
          return overflow[side] >= 0;
        });
      }
      function hide(_ref) {
        var state = _ref.state, name = _ref.name;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var preventedOffsets = state.modifiersData.preventOverflow;
        var referenceOverflow = detectOverflow(state, {
          elementContext: "reference"
        });
        var popperAltOverflow = detectOverflow(state, {
          altBoundary: true
        });
        var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
        var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
        var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
        var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
        state.modifiersData[name] = {
          referenceClippingOffsets,
          popperEscapeOffsets,
          isReferenceHidden,
          hasPopperEscaped
        };
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-reference-hidden": isReferenceHidden,
          "data-popper-escaped": hasPopperEscaped
        });
      }
      var hide$1 = {
        name: "hide",
        enabled: true,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: hide
      };
      var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
      var createPopper$1 = /* @__PURE__ */ popperGenerator({
        defaultModifiers: defaultModifiers$1
      });
      var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
      var createPopper = /* @__PURE__ */ popperGenerator({
        defaultModifiers
      });
      exports.applyStyles = applyStyles$1;
      exports.arrow = arrow$1;
      exports.computeStyles = computeStyles$1;
      exports.createPopper = createPopper;
      exports.createPopperLite = createPopper$1;
      exports.defaultModifiers = defaultModifiers;
      exports.detectOverflow = detectOverflow;
      exports.eventListeners = eventListeners;
      exports.flip = flip$1;
      exports.hide = hide$1;
      exports.offset = offset$1;
      exports.popperGenerator = popperGenerator;
      exports.popperOffsets = popperOffsets$1;
      exports.preventOverflow = preventOverflow$1;
    }
  });

  // node_modules/bootstrap/js/dist/dom/event-handler.js
  var require_event_handler = __commonJS({
    "node_modules/bootstrap/js/dist/dom/event-handler.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.EventHandler = factory());
      })(exports, function() {
        "use strict";
        const getjQuery = () => {
          const {
            jQuery
          } = window;
          if (jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
            return jQuery;
          }
          return null;
        };
        const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
        const stripNameRegex = /\..*/;
        const stripUidRegex = /::\d+$/;
        const eventRegistry = {};
        let uidEvent = 1;
        const customEvents = {
          mouseenter: "mouseover",
          mouseleave: "mouseout"
        };
        const customEventsRegex = /^(mouseenter|mouseleave)/i;
        const nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
        function getUidEvent(element, uid) {
          return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
        }
        function getEvent(element) {
          const uid = getUidEvent(element);
          element.uidEvent = uid;
          eventRegistry[uid] = eventRegistry[uid] || {};
          return eventRegistry[uid];
        }
        function bootstrapHandler(element, fn) {
          return function handler(event) {
            event.delegateTarget = element;
            if (handler.oneOff) {
              EventHandler.off(element, event.type, fn);
            }
            return fn.apply(element, [event]);
          };
        }
        function bootstrapDelegationHandler(element, selector, fn) {
          return function handler(event) {
            const domElements = element.querySelectorAll(selector);
            for (let {
              target
            } = event; target && target !== this; target = target.parentNode) {
              for (let i = domElements.length; i--; ) {
                if (domElements[i] === target) {
                  event.delegateTarget = target;
                  if (handler.oneOff) {
                    EventHandler.off(element, event.type, selector, fn);
                  }
                  return fn.apply(target, [event]);
                }
              }
            }
            return null;
          };
        }
        function findHandler(events, handler, delegationSelector = null) {
          const uidEventList = Object.keys(events);
          for (let i = 0, len = uidEventList.length; i < len; i++) {
            const event = events[uidEventList[i]];
            if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
              return event;
            }
          }
          return null;
        }
        function normalizeParams(originalTypeEvent, handler, delegationFn) {
          const delegation = typeof handler === "string";
          const originalHandler = delegation ? delegationFn : handler;
          let typeEvent = getTypeEvent(originalTypeEvent);
          const isNative = nativeEvents.has(typeEvent);
          if (!isNative) {
            typeEvent = originalTypeEvent;
          }
          return [delegation, originalHandler, typeEvent];
        }
        function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
          if (typeof originalTypeEvent !== "string" || !element) {
            return;
          }
          if (!handler) {
            handler = delegationFn;
            delegationFn = null;
          }
          if (customEventsRegex.test(originalTypeEvent)) {
            const wrapFn = (fn2) => {
              return function(event) {
                if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
                  return fn2.call(this, event);
                }
              };
            };
            if (delegationFn) {
              delegationFn = wrapFn(delegationFn);
            } else {
              handler = wrapFn(handler);
            }
          }
          const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
          const events = getEvent(element);
          const handlers = events[typeEvent] || (events[typeEvent] = {});
          const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);
          if (previousFn) {
            previousFn.oneOff = previousFn.oneOff && oneOff;
            return;
          }
          const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ""));
          const fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
          fn.delegationSelector = delegation ? handler : null;
          fn.originalHandler = originalHandler;
          fn.oneOff = oneOff;
          fn.uidEvent = uid;
          handlers[uid] = fn;
          element.addEventListener(typeEvent, fn, delegation);
        }
        function removeHandler(element, events, typeEvent, handler, delegationSelector) {
          const fn = findHandler(events[typeEvent], handler, delegationSelector);
          if (!fn) {
            return;
          }
          element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
          delete events[typeEvent][fn.uidEvent];
        }
        function removeNamespacedHandlers(element, events, typeEvent, namespace) {
          const storeElementEvent = events[typeEvent] || {};
          Object.keys(storeElementEvent).forEach((handlerKey) => {
            if (handlerKey.includes(namespace)) {
              const event = storeElementEvent[handlerKey];
              removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
            }
          });
        }
        function getTypeEvent(event) {
          event = event.replace(stripNameRegex, "");
          return customEvents[event] || event;
        }
        const EventHandler = {
          on(element, event, handler, delegationFn) {
            addHandler(element, event, handler, delegationFn, false);
          },
          one(element, event, handler, delegationFn) {
            addHandler(element, event, handler, delegationFn, true);
          },
          off(element, originalTypeEvent, handler, delegationFn) {
            if (typeof originalTypeEvent !== "string" || !element) {
              return;
            }
            const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
            const inNamespace = typeEvent !== originalTypeEvent;
            const events = getEvent(element);
            const isNamespace = originalTypeEvent.startsWith(".");
            if (typeof originalHandler !== "undefined") {
              if (!events || !events[typeEvent]) {
                return;
              }
              removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
              return;
            }
            if (isNamespace) {
              Object.keys(events).forEach((elementEvent) => {
                removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
              });
            }
            const storeElementEvent = events[typeEvent] || {};
            Object.keys(storeElementEvent).forEach((keyHandlers) => {
              const handlerKey = keyHandlers.replace(stripUidRegex, "");
              if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                const event = storeElementEvent[keyHandlers];
                removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
              }
            });
          },
          trigger(element, event, args) {
            if (typeof event !== "string" || !element) {
              return null;
            }
            const $ = getjQuery();
            const typeEvent = getTypeEvent(event);
            const inNamespace = event !== typeEvent;
            const isNative = nativeEvents.has(typeEvent);
            let jQueryEvent;
            let bubbles = true;
            let nativeDispatch = true;
            let defaultPrevented = false;
            let evt = null;
            if (inNamespace && $) {
              jQueryEvent = $.Event(event, args);
              $(element).trigger(jQueryEvent);
              bubbles = !jQueryEvent.isPropagationStopped();
              nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
              defaultPrevented = jQueryEvent.isDefaultPrevented();
            }
            if (isNative) {
              evt = document.createEvent("HTMLEvents");
              evt.initEvent(typeEvent, bubbles, true);
            } else {
              evt = new CustomEvent(event, {
                bubbles,
                cancelable: true
              });
            }
            if (typeof args !== "undefined") {
              Object.keys(args).forEach((key) => {
                Object.defineProperty(evt, key, {
                  get() {
                    return args[key];
                  }
                });
              });
            }
            if (defaultPrevented) {
              evt.preventDefault();
            }
            if (nativeDispatch) {
              element.dispatchEvent(evt);
            }
            if (evt.defaultPrevented && typeof jQueryEvent !== "undefined") {
              jQueryEvent.preventDefault();
            }
            return evt;
          }
        };
        return EventHandler;
      });
    }
  });

  // node_modules/bootstrap/js/dist/dom/manipulator.js
  var require_manipulator = __commonJS({
    "node_modules/bootstrap/js/dist/dom/manipulator.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Manipulator = factory());
      })(exports, function() {
        "use strict";
        function normalizeData(val) {
          if (val === "true") {
            return true;
          }
          if (val === "false") {
            return false;
          }
          if (val === Number(val).toString()) {
            return Number(val);
          }
          if (val === "" || val === "null") {
            return null;
          }
          return val;
        }
        function normalizeDataKey(key) {
          return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
        }
        const Manipulator = {
          setDataAttribute(element, key, value) {
            element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
          },
          removeDataAttribute(element, key) {
            element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
          },
          getDataAttributes(element) {
            if (!element) {
              return {};
            }
            const attributes = {};
            Object.keys(element.dataset).filter((key) => key.startsWith("bs")).forEach((key) => {
              let pureKey = key.replace(/^bs/, "");
              pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
              attributes[pureKey] = normalizeData(element.dataset[key]);
            });
            return attributes;
          },
          getDataAttribute(element, key) {
            return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
          },
          offset(element) {
            const rect = element.getBoundingClientRect();
            return {
              top: rect.top + window.pageYOffset,
              left: rect.left + window.pageXOffset
            };
          },
          position(element) {
            return {
              top: element.offsetTop,
              left: element.offsetLeft
            };
          }
        };
        return Manipulator;
      });
    }
  });

  // node_modules/bootstrap/js/dist/dom/selector-engine.js
  var require_selector_engine = __commonJS({
    "node_modules/bootstrap/js/dist/dom/selector-engine.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.SelectorEngine = factory());
      })(exports, function() {
        "use strict";
        const isElement = (obj) => {
          if (!obj || typeof obj !== "object") {
            return false;
          }
          if (typeof obj.jquery !== "undefined") {
            obj = obj[0];
          }
          return typeof obj.nodeType !== "undefined";
        };
        const isVisible = (element) => {
          if (!isElement(element) || element.getClientRects().length === 0) {
            return false;
          }
          return getComputedStyle(element).getPropertyValue("visibility") === "visible";
        };
        const isDisabled = (element) => {
          if (!element || element.nodeType !== Node.ELEMENT_NODE) {
            return true;
          }
          if (element.classList.contains("disabled")) {
            return true;
          }
          if (typeof element.disabled !== "undefined") {
            return element.disabled;
          }
          return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
        };
        const NODE_TEXT = 3;
        const SelectorEngine = {
          find(selector, element = document.documentElement) {
            return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
          },
          findOne(selector, element = document.documentElement) {
            return Element.prototype.querySelector.call(element, selector);
          },
          children(element, selector) {
            return [].concat(...element.children).filter((child) => child.matches(selector));
          },
          parents(element, selector) {
            const parents = [];
            let ancestor = element.parentNode;
            while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
              if (ancestor.matches(selector)) {
                parents.push(ancestor);
              }
              ancestor = ancestor.parentNode;
            }
            return parents;
          },
          prev(element, selector) {
            let previous = element.previousElementSibling;
            while (previous) {
              if (previous.matches(selector)) {
                return [previous];
              }
              previous = previous.previousElementSibling;
            }
            return [];
          },
          next(element, selector) {
            let next = element.nextElementSibling;
            while (next) {
              if (next.matches(selector)) {
                return [next];
              }
              next = next.nextElementSibling;
            }
            return [];
          },
          focusableChildren(element) {
            const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(", ");
            return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
          }
        };
        return SelectorEngine;
      });
    }
  });

  // node_modules/bootstrap/js/dist/dom/data.js
  var require_data = __commonJS({
    "node_modules/bootstrap/js/dist/dom/data.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Data = factory());
      })(exports, function() {
        "use strict";
        const elementMap = /* @__PURE__ */ new Map();
        const data = {
          set(element, key, instance) {
            if (!elementMap.has(element)) {
              elementMap.set(element, /* @__PURE__ */ new Map());
            }
            const instanceMap = elementMap.get(element);
            if (!instanceMap.has(key) && instanceMap.size !== 0) {
              console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
              return;
            }
            instanceMap.set(key, instance);
          },
          get(element, key) {
            if (elementMap.has(element)) {
              return elementMap.get(element).get(key) || null;
            }
            return null;
          },
          remove(element, key) {
            if (!elementMap.has(element)) {
              return;
            }
            const instanceMap = elementMap.get(element);
            instanceMap.delete(key);
            if (instanceMap.size === 0) {
              elementMap.delete(element);
            }
          }
        };
        return data;
      });
    }
  });

  // node_modules/bootstrap/js/dist/base-component.js
  var require_base_component = __commonJS({
    "node_modules/bootstrap/js/dist/base-component.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_data(), require_event_handler()) : typeof define === "function" && define.amd ? define(["./dom/data", "./dom/event-handler"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Base = factory(global.Data, global.EventHandler));
      })(exports, function(Data, EventHandler) {
        "use strict";
        const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
        const Data__default = /* @__PURE__ */ _interopDefaultLegacy(Data);
        const EventHandler__default = /* @__PURE__ */ _interopDefaultLegacy(EventHandler);
        const MILLISECONDS_MULTIPLIER = 1e3;
        const TRANSITION_END = "transitionend";
        const getTransitionDurationFromElement = (element) => {
          if (!element) {
            return 0;
          }
          let {
            transitionDuration,
            transitionDelay
          } = window.getComputedStyle(element);
          const floatTransitionDuration = Number.parseFloat(transitionDuration);
          const floatTransitionDelay = Number.parseFloat(transitionDelay);
          if (!floatTransitionDuration && !floatTransitionDelay) {
            return 0;
          }
          transitionDuration = transitionDuration.split(",")[0];
          transitionDelay = transitionDelay.split(",")[0];
          return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
        };
        const triggerTransitionEnd = (element) => {
          element.dispatchEvent(new Event(TRANSITION_END));
        };
        const isElement = (obj) => {
          if (!obj || typeof obj !== "object") {
            return false;
          }
          if (typeof obj.jquery !== "undefined") {
            obj = obj[0];
          }
          return typeof obj.nodeType !== "undefined";
        };
        const getElement = (obj) => {
          if (isElement(obj)) {
            return obj.jquery ? obj[0] : obj;
          }
          if (typeof obj === "string" && obj.length > 0) {
            return document.querySelector(obj);
          }
          return null;
        };
        const execute = (callback) => {
          if (typeof callback === "function") {
            callback();
          }
        };
        const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
          if (!waitForTransition) {
            execute(callback);
            return;
          }
          const durationPadding = 5;
          const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
          let called = false;
          const handler = ({
            target
          }) => {
            if (target !== transitionElement) {
              return;
            }
            called = true;
            transitionElement.removeEventListener(TRANSITION_END, handler);
            execute(callback);
          };
          transitionElement.addEventListener(TRANSITION_END, handler);
          setTimeout(() => {
            if (!called) {
              triggerTransitionEnd(transitionElement);
            }
          }, emulatedDuration);
        };
        const VERSION = "5.1.3";
        class BaseComponent {
          constructor(element) {
            element = getElement(element);
            if (!element) {
              return;
            }
            this._element = element;
            Data__default.default.set(this._element, this.constructor.DATA_KEY, this);
          }
          dispose() {
            Data__default.default.remove(this._element, this.constructor.DATA_KEY);
            EventHandler__default.default.off(this._element, this.constructor.EVENT_KEY);
            Object.getOwnPropertyNames(this).forEach((propertyName) => {
              this[propertyName] = null;
            });
          }
          _queueCallback(callback, element, isAnimated = true) {
            executeAfterTransition(callback, element, isAnimated);
          }
          static getInstance(element) {
            return Data__default.default.get(getElement(element), this.DATA_KEY);
          }
          static getOrCreateInstance(element, config = {}) {
            return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
          }
          static get VERSION() {
            return VERSION;
          }
          static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
          }
          static get DATA_KEY() {
            return `bs.${this.NAME}`;
          }
          static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
          }
        }
        return BaseComponent;
      });
    }
  });

  // node_modules/bootstrap/js/dist/dropdown.js
  var require_dropdown = __commonJS({
    "node_modules/bootstrap/js/dist/dropdown.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_popper(), require_event_handler(), require_manipulator(), require_selector_engine(), require_base_component()) : typeof define === "function" && define.amd ? define(["@popperjs/core", "./dom/event-handler", "./dom/manipulator", "./dom/selector-engine", "./base-component"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Dropdown = factory(global.Popper, global.EventHandler, global.Manipulator, global.SelectorEngine, global.Base));
      })(exports, function(Popper, EventHandler, Manipulator, SelectorEngine, BaseComponent) {
        "use strict";
        const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
        function _interopNamespace(e) {
          if (e && e.__esModule)
            return e;
          const n = /* @__PURE__ */ Object.create(null);
          if (e) {
            for (const k in e) {
              if (k !== "default") {
                const d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                  enumerable: true,
                  get: () => e[k]
                });
              }
            }
          }
          n.default = e;
          return Object.freeze(n);
        }
        const Popper__namespace = /* @__PURE__ */ _interopNamespace(Popper);
        const EventHandler__default = /* @__PURE__ */ _interopDefaultLegacy(EventHandler);
        const Manipulator__default = /* @__PURE__ */ _interopDefaultLegacy(Manipulator);
        const SelectorEngine__default = /* @__PURE__ */ _interopDefaultLegacy(SelectorEngine);
        const BaseComponent__default = /* @__PURE__ */ _interopDefaultLegacy(BaseComponent);
        const toType = (obj) => {
          if (obj === null || obj === void 0) {
            return `${obj}`;
          }
          return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
        };
        const getSelector = (element) => {
          let selector = element.getAttribute("data-bs-target");
          if (!selector || selector === "#") {
            let hrefAttr = element.getAttribute("href");
            if (!hrefAttr || !hrefAttr.includes("#") && !hrefAttr.startsWith(".")) {
              return null;
            }
            if (hrefAttr.includes("#") && !hrefAttr.startsWith("#")) {
              hrefAttr = `#${hrefAttr.split("#")[1]}`;
            }
            selector = hrefAttr && hrefAttr !== "#" ? hrefAttr.trim() : null;
          }
          return selector;
        };
        const getElementFromSelector = (element) => {
          const selector = getSelector(element);
          return selector ? document.querySelector(selector) : null;
        };
        const isElement = (obj) => {
          if (!obj || typeof obj !== "object") {
            return false;
          }
          if (typeof obj.jquery !== "undefined") {
            obj = obj[0];
          }
          return typeof obj.nodeType !== "undefined";
        };
        const getElement = (obj) => {
          if (isElement(obj)) {
            return obj.jquery ? obj[0] : obj;
          }
          if (typeof obj === "string" && obj.length > 0) {
            return document.querySelector(obj);
          }
          return null;
        };
        const typeCheckConfig = (componentName, config, configTypes) => {
          Object.keys(configTypes).forEach((property) => {
            const expectedTypes = configTypes[property];
            const value = config[property];
            const valueType = value && isElement(value) ? "element" : toType(value);
            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
            }
          });
        };
        const isVisible = (element) => {
          if (!isElement(element) || element.getClientRects().length === 0) {
            return false;
          }
          return getComputedStyle(element).getPropertyValue("visibility") === "visible";
        };
        const isDisabled = (element) => {
          if (!element || element.nodeType !== Node.ELEMENT_NODE) {
            return true;
          }
          if (element.classList.contains("disabled")) {
            return true;
          }
          if (typeof element.disabled !== "undefined") {
            return element.disabled;
          }
          return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
        };
        const noop = () => {
        };
        const getjQuery = () => {
          const {
            jQuery
          } = window;
          if (jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
            return jQuery;
          }
          return null;
        };
        const DOMContentLoadedCallbacks = [];
        const onDOMContentLoaded = (callback) => {
          if (document.readyState === "loading") {
            if (!DOMContentLoadedCallbacks.length) {
              document.addEventListener("DOMContentLoaded", () => {
                DOMContentLoadedCallbacks.forEach((callback2) => callback2());
              });
            }
            DOMContentLoadedCallbacks.push(callback);
          } else {
            callback();
          }
        };
        const isRTL = () => document.documentElement.dir === "rtl";
        const defineJQueryPlugin = (plugin) => {
          onDOMContentLoaded(() => {
            const $ = getjQuery();
            if ($) {
              const name = plugin.NAME;
              const JQUERY_NO_CONFLICT = $.fn[name];
              $.fn[name] = plugin.jQueryInterface;
              $.fn[name].Constructor = plugin;
              $.fn[name].noConflict = () => {
                $.fn[name] = JQUERY_NO_CONFLICT;
                return plugin.jQueryInterface;
              };
            }
          });
        };
        const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
          let index = list.indexOf(activeElement);
          if (index === -1) {
            return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
          }
          const listLength = list.length;
          index += shouldGetNext ? 1 : -1;
          if (isCycleAllowed) {
            index = (index + listLength) % listLength;
          }
          return list[Math.max(0, Math.min(index, listLength - 1))];
        };
        const NAME = "dropdown";
        const DATA_KEY = "bs.dropdown";
        const EVENT_KEY = `.${DATA_KEY}`;
        const DATA_API_KEY = ".data-api";
        const ESCAPE_KEY = "Escape";
        const SPACE_KEY = "Space";
        const TAB_KEY = "Tab";
        const ARROW_UP_KEY = "ArrowUp";
        const ARROW_DOWN_KEY = "ArrowDown";
        const RIGHT_MOUSE_BUTTON = 2;
        const REGEXP_KEYDOWN = new RegExp(`${ARROW_UP_KEY}|${ARROW_DOWN_KEY}|${ESCAPE_KEY}`);
        const EVENT_HIDE = `hide${EVENT_KEY}`;
        const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
        const EVENT_SHOW = `show${EVENT_KEY}`;
        const EVENT_SHOWN = `shown${EVENT_KEY}`;
        const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
        const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY}${DATA_API_KEY}`;
        const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`;
        const CLASS_NAME_SHOW = "show";
        const CLASS_NAME_DROPUP = "dropup";
        const CLASS_NAME_DROPEND = "dropend";
        const CLASS_NAME_DROPSTART = "dropstart";
        const CLASS_NAME_NAVBAR = "navbar";
        const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="dropdown"]';
        const SELECTOR_MENU = ".dropdown-menu";
        const SELECTOR_NAVBAR_NAV = ".navbar-nav";
        const SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
        const PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
        const PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
        const PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
        const PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
        const PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
        const PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
        const Default = {
          offset: [0, 2],
          boundary: "clippingParents",
          reference: "toggle",
          display: "dynamic",
          popperConfig: null,
          autoClose: true
        };
        const DefaultType = {
          offset: "(array|string|function)",
          boundary: "(string|element)",
          reference: "(string|element|object)",
          display: "string",
          popperConfig: "(null|object|function)",
          autoClose: "(boolean|string)"
        };
        class Dropdown3 extends BaseComponent__default.default {
          constructor(element, config) {
            super(element);
            this._popper = null;
            this._config = this._getConfig(config);
            this._menu = this._getMenuElement();
            this._inNavbar = this._detectNavbar();
          }
          static get Default() {
            return Default;
          }
          static get DefaultType() {
            return DefaultType;
          }
          static get NAME() {
            return NAME;
          }
          toggle() {
            return this._isShown() ? this.hide() : this.show();
          }
          show() {
            if (isDisabled(this._element) || this._isShown(this._menu)) {
              return;
            }
            const relatedTarget = {
              relatedTarget: this._element
            };
            const showEvent = EventHandler__default.default.trigger(this._element, EVENT_SHOW, relatedTarget);
            if (showEvent.defaultPrevented) {
              return;
            }
            const parent = Dropdown3.getParentFromElement(this._element);
            if (this._inNavbar) {
              Manipulator__default.default.setDataAttribute(this._menu, "popper", "none");
            } else {
              this._createPopper(parent);
            }
            if ("ontouchstart" in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
              [].concat(...document.body.children).forEach((elem) => EventHandler__default.default.on(elem, "mouseover", noop));
            }
            this._element.focus();
            this._element.setAttribute("aria-expanded", true);
            this._menu.classList.add(CLASS_NAME_SHOW);
            this._element.classList.add(CLASS_NAME_SHOW);
            EventHandler__default.default.trigger(this._element, EVENT_SHOWN, relatedTarget);
          }
          hide() {
            if (isDisabled(this._element) || !this._isShown(this._menu)) {
              return;
            }
            const relatedTarget = {
              relatedTarget: this._element
            };
            this._completeHide(relatedTarget);
          }
          dispose() {
            if (this._popper) {
              this._popper.destroy();
            }
            super.dispose();
          }
          update() {
            this._inNavbar = this._detectNavbar();
            if (this._popper) {
              this._popper.update();
            }
          }
          _completeHide(relatedTarget) {
            const hideEvent = EventHandler__default.default.trigger(this._element, EVENT_HIDE, relatedTarget);
            if (hideEvent.defaultPrevented) {
              return;
            }
            if ("ontouchstart" in document.documentElement) {
              [].concat(...document.body.children).forEach((elem) => EventHandler__default.default.off(elem, "mouseover", noop));
            }
            if (this._popper) {
              this._popper.destroy();
            }
            this._menu.classList.remove(CLASS_NAME_SHOW);
            this._element.classList.remove(CLASS_NAME_SHOW);
            this._element.setAttribute("aria-expanded", "false");
            Manipulator__default.default.removeDataAttribute(this._menu, "popper");
            EventHandler__default.default.trigger(this._element, EVENT_HIDDEN, relatedTarget);
          }
          _getConfig(config) {
            config = {
              ...this.constructor.Default,
              ...Manipulator__default.default.getDataAttributes(this._element),
              ...config
            };
            typeCheckConfig(NAME, config, this.constructor.DefaultType);
            if (typeof config.reference === "object" && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
              throw new TypeError(`${NAME.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            }
            return config;
          }
          _createPopper(parent) {
            if (typeof Popper__namespace === "undefined") {
              throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            }
            let referenceElement = this._element;
            if (this._config.reference === "parent") {
              referenceElement = parent;
            } else if (isElement(this._config.reference)) {
              referenceElement = getElement(this._config.reference);
            } else if (typeof this._config.reference === "object") {
              referenceElement = this._config.reference;
            }
            const popperConfig = this._getPopperConfig();
            const isDisplayStatic = popperConfig.modifiers.find((modifier) => modifier.name === "applyStyles" && modifier.enabled === false);
            this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);
            if (isDisplayStatic) {
              Manipulator__default.default.setDataAttribute(this._menu, "popper", "static");
            }
          }
          _isShown(element = this._element) {
            return element.classList.contains(CLASS_NAME_SHOW);
          }
          _getMenuElement() {
            return SelectorEngine__default.default.next(this._element, SELECTOR_MENU)[0];
          }
          _getPlacement() {
            const parentDropdown = this._element.parentNode;
            if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
              return PLACEMENT_RIGHT;
            }
            if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
              return PLACEMENT_LEFT;
            }
            const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
            if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
              return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
            }
            return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
          }
          _detectNavbar() {
            return this._element.closest(`.${CLASS_NAME_NAVBAR}`) !== null;
          }
          _getOffset() {
            const {
              offset
            } = this._config;
            if (typeof offset === "string") {
              return offset.split(",").map((val) => Number.parseInt(val, 10));
            }
            if (typeof offset === "function") {
              return (popperData) => offset(popperData, this._element);
            }
            return offset;
          }
          _getPopperConfig() {
            const defaultBsPopperConfig = {
              placement: this._getPlacement(),
              modifiers: [{
                name: "preventOverflow",
                options: {
                  boundary: this._config.boundary
                }
              }, {
                name: "offset",
                options: {
                  offset: this._getOffset()
                }
              }]
            };
            if (this._config.display === "static") {
              defaultBsPopperConfig.modifiers = [{
                name: "applyStyles",
                enabled: false
              }];
            }
            return {
              ...defaultBsPopperConfig,
              ...typeof this._config.popperConfig === "function" ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig
            };
          }
          _selectMenuItem({
            key,
            target
          }) {
            const items = SelectorEngine__default.default.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);
            if (!items.length) {
              return;
            }
            getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
          }
          static jQueryInterface(config) {
            return this.each(function() {
              const data = Dropdown3.getOrCreateInstance(this, config);
              if (typeof config !== "string") {
                return;
              }
              if (typeof data[config] === "undefined") {
                throw new TypeError(`No method named "${config}"`);
              }
              data[config]();
            });
          }
          static clearMenus(event) {
            if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY)) {
              return;
            }
            const toggles = SelectorEngine__default.default.find(SELECTOR_DATA_TOGGLE);
            for (let i = 0, len = toggles.length; i < len; i++) {
              const context = Dropdown3.getInstance(toggles[i]);
              if (!context || context._config.autoClose === false) {
                continue;
              }
              if (!context._isShown()) {
                continue;
              }
              const relatedTarget = {
                relatedTarget: context._element
              };
              if (event) {
                const composedPath = event.composedPath();
                const isMenuTarget = composedPath.includes(context._menu);
                if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
                  continue;
                }
                if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) {
                  continue;
                }
                if (event.type === "click") {
                  relatedTarget.clickEvent = event;
                }
              }
              context._completeHide(relatedTarget);
            }
          }
          static getParentFromElement(element) {
            return getElementFromSelector(element) || element.parentNode;
          }
          static dataApiKeydownHandler(event) {
            if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
              return;
            }
            const isActive = this.classList.contains(CLASS_NAME_SHOW);
            if (!isActive && event.key === ESCAPE_KEY) {
              return;
            }
            event.preventDefault();
            event.stopPropagation();
            if (isDisabled(this)) {
              return;
            }
            const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE) ? this : SelectorEngine__default.default.prev(this, SELECTOR_DATA_TOGGLE)[0];
            const instance = Dropdown3.getOrCreateInstance(getToggleButton);
            if (event.key === ESCAPE_KEY) {
              instance.hide();
              return;
            }
            if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) {
              if (!isActive) {
                instance.show();
              }
              instance._selectMenuItem(event);
              return;
            }
            if (!isActive || event.key === SPACE_KEY) {
              Dropdown3.clearMenus();
            }
          }
        }
        EventHandler__default.default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown3.dataApiKeydownHandler);
        EventHandler__default.default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown3.dataApiKeydownHandler);
        EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, Dropdown3.clearMenus);
        EventHandler__default.default.on(document, EVENT_KEYUP_DATA_API, Dropdown3.clearMenus);
        EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
          event.preventDefault();
          Dropdown3.getOrCreateInstance(this).toggle();
        });
        defineJQueryPlugin(Dropdown3);
        return Dropdown3;
      });
    }
  });

  // node_modules/bootstrap/js/dist/tooltip.js
  var require_tooltip = __commonJS({
    "node_modules/bootstrap/js/dist/tooltip.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_popper(), require_data(), require_event_handler(), require_manipulator(), require_selector_engine(), require_base_component()) : typeof define === "function" && define.amd ? define(["@popperjs/core", "./dom/data", "./dom/event-handler", "./dom/manipulator", "./dom/selector-engine", "./base-component"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Tooltip = factory(global.Popper, global.Data, global.EventHandler, global.Manipulator, global.SelectorEngine, global.Base));
      })(exports, function(Popper, Data, EventHandler, Manipulator, SelectorEngine, BaseComponent) {
        "use strict";
        const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
        function _interopNamespace(e) {
          if (e && e.__esModule)
            return e;
          const n = /* @__PURE__ */ Object.create(null);
          if (e) {
            for (const k in e) {
              if (k !== "default") {
                const d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                  enumerable: true,
                  get: () => e[k]
                });
              }
            }
          }
          n.default = e;
          return Object.freeze(n);
        }
        const Popper__namespace = /* @__PURE__ */ _interopNamespace(Popper);
        const Data__default = /* @__PURE__ */ _interopDefaultLegacy(Data);
        const EventHandler__default = /* @__PURE__ */ _interopDefaultLegacy(EventHandler);
        const Manipulator__default = /* @__PURE__ */ _interopDefaultLegacy(Manipulator);
        const SelectorEngine__default = /* @__PURE__ */ _interopDefaultLegacy(SelectorEngine);
        const BaseComponent__default = /* @__PURE__ */ _interopDefaultLegacy(BaseComponent);
        const MAX_UID = 1e6;
        const toType = (obj) => {
          if (obj === null || obj === void 0) {
            return `${obj}`;
          }
          return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
        };
        const getUID = (prefix) => {
          do {
            prefix += Math.floor(Math.random() * MAX_UID);
          } while (document.getElementById(prefix));
          return prefix;
        };
        const isElement = (obj) => {
          if (!obj || typeof obj !== "object") {
            return false;
          }
          if (typeof obj.jquery !== "undefined") {
            obj = obj[0];
          }
          return typeof obj.nodeType !== "undefined";
        };
        const getElement = (obj) => {
          if (isElement(obj)) {
            return obj.jquery ? obj[0] : obj;
          }
          if (typeof obj === "string" && obj.length > 0) {
            return document.querySelector(obj);
          }
          return null;
        };
        const typeCheckConfig = (componentName, config, configTypes) => {
          Object.keys(configTypes).forEach((property) => {
            const expectedTypes = configTypes[property];
            const value = config[property];
            const valueType = value && isElement(value) ? "element" : toType(value);
            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
            }
          });
        };
        const findShadowRoot = (element) => {
          if (!document.documentElement.attachShadow) {
            return null;
          }
          if (typeof element.getRootNode === "function") {
            const root = element.getRootNode();
            return root instanceof ShadowRoot ? root : null;
          }
          if (element instanceof ShadowRoot) {
            return element;
          }
          if (!element.parentNode) {
            return null;
          }
          return findShadowRoot(element.parentNode);
        };
        const noop = () => {
        };
        const getjQuery = () => {
          const {
            jQuery
          } = window;
          if (jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
            return jQuery;
          }
          return null;
        };
        const DOMContentLoadedCallbacks = [];
        const onDOMContentLoaded = (callback) => {
          if (document.readyState === "loading") {
            if (!DOMContentLoadedCallbacks.length) {
              document.addEventListener("DOMContentLoaded", () => {
                DOMContentLoadedCallbacks.forEach((callback2) => callback2());
              });
            }
            DOMContentLoadedCallbacks.push(callback);
          } else {
            callback();
          }
        };
        const isRTL = () => document.documentElement.dir === "rtl";
        const defineJQueryPlugin = (plugin) => {
          onDOMContentLoaded(() => {
            const $ = getjQuery();
            if ($) {
              const name = plugin.NAME;
              const JQUERY_NO_CONFLICT = $.fn[name];
              $.fn[name] = plugin.jQueryInterface;
              $.fn[name].Constructor = plugin;
              $.fn[name].noConflict = () => {
                $.fn[name] = JQUERY_NO_CONFLICT;
                return plugin.jQueryInterface;
              };
            }
          });
        };
        const uriAttributes = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
        const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
        const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
        const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
        const allowedAttribute = (attribute, allowedAttributeList) => {
          const attributeName = attribute.nodeName.toLowerCase();
          if (allowedAttributeList.includes(attributeName)) {
            if (uriAttributes.has(attributeName)) {
              return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
            }
            return true;
          }
          const regExp = allowedAttributeList.filter((attributeRegex) => attributeRegex instanceof RegExp);
          for (let i = 0, len = regExp.length; i < len; i++) {
            if (regExp[i].test(attributeName)) {
              return true;
            }
          }
          return false;
        };
        const DefaultAllowlist = {
          "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: []
        };
        function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
          if (!unsafeHtml.length) {
            return unsafeHtml;
          }
          if (sanitizeFn && typeof sanitizeFn === "function") {
            return sanitizeFn(unsafeHtml);
          }
          const domParser = new window.DOMParser();
          const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
          const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
          for (let i = 0, len = elements.length; i < len; i++) {
            const element = elements[i];
            const elementName = element.nodeName.toLowerCase();
            if (!Object.keys(allowList).includes(elementName)) {
              element.remove();
              continue;
            }
            const attributeList = [].concat(...element.attributes);
            const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
            attributeList.forEach((attribute) => {
              if (!allowedAttribute(attribute, allowedAttributes)) {
                element.removeAttribute(attribute.nodeName);
              }
            });
          }
          return createdDocument.body.innerHTML;
        }
        const NAME = "tooltip";
        const DATA_KEY = "bs.tooltip";
        const EVENT_KEY = `.${DATA_KEY}`;
        const CLASS_PREFIX = "bs-tooltip";
        const DISALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
        const DefaultType = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(array|string|function)",
          container: "(string|element|boolean)",
          fallbackPlacements: "array",
          boundary: "(string|element)",
          customClass: "(string|function)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          allowList: "object",
          popperConfig: "(null|object|function)"
        };
        const AttachmentMap = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: isRTL() ? "left" : "right",
          BOTTOM: "bottom",
          LEFT: isRTL() ? "right" : "left"
        };
        const Default = {
          animation: true,
          template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: false,
          selector: false,
          placement: "top",
          offset: [0, 0],
          container: false,
          fallbackPlacements: ["top", "right", "bottom", "left"],
          boundary: "clippingParents",
          customClass: "",
          sanitize: true,
          sanitizeFn: null,
          allowList: DefaultAllowlist,
          popperConfig: null
        };
        const Event2 = {
          HIDE: `hide${EVENT_KEY}`,
          HIDDEN: `hidden${EVENT_KEY}`,
          SHOW: `show${EVENT_KEY}`,
          SHOWN: `shown${EVENT_KEY}`,
          INSERTED: `inserted${EVENT_KEY}`,
          CLICK: `click${EVENT_KEY}`,
          FOCUSIN: `focusin${EVENT_KEY}`,
          FOCUSOUT: `focusout${EVENT_KEY}`,
          MOUSEENTER: `mouseenter${EVENT_KEY}`,
          MOUSELEAVE: `mouseleave${EVENT_KEY}`
        };
        const CLASS_NAME_FADE = "fade";
        const CLASS_NAME_MODAL = "modal";
        const CLASS_NAME_SHOW = "show";
        const HOVER_STATE_SHOW = "show";
        const HOVER_STATE_OUT = "out";
        const SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
        const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
        const EVENT_MODAL_HIDE = "hide.bs.modal";
        const TRIGGER_HOVER = "hover";
        const TRIGGER_FOCUS = "focus";
        const TRIGGER_CLICK = "click";
        const TRIGGER_MANUAL = "manual";
        class Tooltip3 extends BaseComponent__default.default {
          constructor(element, config) {
            if (typeof Popper__namespace === "undefined") {
              throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            }
            super(element);
            this._isEnabled = true;
            this._timeout = 0;
            this._hoverState = "";
            this._activeTrigger = {};
            this._popper = null;
            this._config = this._getConfig(config);
            this.tip = null;
            this._setListeners();
          }
          static get Default() {
            return Default;
          }
          static get NAME() {
            return NAME;
          }
          static get Event() {
            return Event2;
          }
          static get DefaultType() {
            return DefaultType;
          }
          enable() {
            this._isEnabled = true;
          }
          disable() {
            this._isEnabled = false;
          }
          toggleEnabled() {
            this._isEnabled = !this._isEnabled;
          }
          toggle(event) {
            if (!this._isEnabled) {
              return;
            }
            if (event) {
              const context = this._initializeOnDelegatedTarget(event);
              context._activeTrigger.click = !context._activeTrigger.click;
              if (context._isWithActiveTrigger()) {
                context._enter(null, context);
              } else {
                context._leave(null, context);
              }
            } else {
              if (this.getTipElement().classList.contains(CLASS_NAME_SHOW)) {
                this._leave(null, this);
                return;
              }
              this._enter(null, this);
            }
          }
          dispose() {
            clearTimeout(this._timeout);
            EventHandler__default.default.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
            if (this.tip) {
              this.tip.remove();
            }
            this._disposePopper();
            super.dispose();
          }
          show() {
            if (this._element.style.display === "none") {
              throw new Error("Please use show on visible elements");
            }
            if (!(this.isWithContent() && this._isEnabled)) {
              return;
            }
            const showEvent = EventHandler__default.default.trigger(this._element, this.constructor.Event.SHOW);
            const shadowRoot = findShadowRoot(this._element);
            const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);
            if (showEvent.defaultPrevented || !isInTheDom) {
              return;
            }
            if (this.constructor.NAME === "tooltip" && this.tip && this.getTitle() !== this.tip.querySelector(SELECTOR_TOOLTIP_INNER).innerHTML) {
              this._disposePopper();
              this.tip.remove();
              this.tip = null;
            }
            const tip = this.getTipElement();
            const tipId = getUID(this.constructor.NAME);
            tip.setAttribute("id", tipId);
            this._element.setAttribute("aria-describedby", tipId);
            if (this._config.animation) {
              tip.classList.add(CLASS_NAME_FADE);
            }
            const placement = typeof this._config.placement === "function" ? this._config.placement.call(this, tip, this._element) : this._config.placement;
            const attachment = this._getAttachment(placement);
            this._addAttachmentClass(attachment);
            const {
              container
            } = this._config;
            Data__default.default.set(tip, this.constructor.DATA_KEY, this);
            if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
              container.append(tip);
              EventHandler__default.default.trigger(this._element, this.constructor.Event.INSERTED);
            }
            if (this._popper) {
              this._popper.update();
            } else {
              this._popper = Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
            }
            tip.classList.add(CLASS_NAME_SHOW);
            const customClass = this._resolvePossibleFunction(this._config.customClass);
            if (customClass) {
              tip.classList.add(...customClass.split(" "));
            }
            if ("ontouchstart" in document.documentElement) {
              [].concat(...document.body.children).forEach((element) => {
                EventHandler__default.default.on(element, "mouseover", noop);
              });
            }
            const complete = () => {
              const prevHoverState = this._hoverState;
              this._hoverState = null;
              EventHandler__default.default.trigger(this._element, this.constructor.Event.SHOWN);
              if (prevHoverState === HOVER_STATE_OUT) {
                this._leave(null, this);
              }
            };
            const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE);
            this._queueCallback(complete, this.tip, isAnimated);
          }
          hide() {
            if (!this._popper) {
              return;
            }
            const tip = this.getTipElement();
            const complete = () => {
              if (this._isWithActiveTrigger()) {
                return;
              }
              if (this._hoverState !== HOVER_STATE_SHOW) {
                tip.remove();
              }
              this._cleanTipClass();
              this._element.removeAttribute("aria-describedby");
              EventHandler__default.default.trigger(this._element, this.constructor.Event.HIDDEN);
              this._disposePopper();
            };
            const hideEvent = EventHandler__default.default.trigger(this._element, this.constructor.Event.HIDE);
            if (hideEvent.defaultPrevented) {
              return;
            }
            tip.classList.remove(CLASS_NAME_SHOW);
            if ("ontouchstart" in document.documentElement) {
              [].concat(...document.body.children).forEach((element) => EventHandler__default.default.off(element, "mouseover", noop));
            }
            this._activeTrigger[TRIGGER_CLICK] = false;
            this._activeTrigger[TRIGGER_FOCUS] = false;
            this._activeTrigger[TRIGGER_HOVER] = false;
            const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE);
            this._queueCallback(complete, this.tip, isAnimated);
            this._hoverState = "";
          }
          update() {
            if (this._popper !== null) {
              this._popper.update();
            }
          }
          isWithContent() {
            return Boolean(this.getTitle());
          }
          getTipElement() {
            if (this.tip) {
              return this.tip;
            }
            const element = document.createElement("div");
            element.innerHTML = this._config.template;
            const tip = element.children[0];
            this.setContent(tip);
            tip.classList.remove(CLASS_NAME_FADE, CLASS_NAME_SHOW);
            this.tip = tip;
            return this.tip;
          }
          setContent(tip) {
            this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TOOLTIP_INNER);
          }
          _sanitizeAndSetContent(template, content, selector) {
            const templateElement = SelectorEngine__default.default.findOne(selector, template);
            if (!content && templateElement) {
              templateElement.remove();
              return;
            }
            this.setElementContent(templateElement, content);
          }
          setElementContent(element, content) {
            if (element === null) {
              return;
            }
            if (isElement(content)) {
              content = getElement(content);
              if (this._config.html) {
                if (content.parentNode !== element) {
                  element.innerHTML = "";
                  element.append(content);
                }
              } else {
                element.textContent = content.textContent;
              }
              return;
            }
            if (this._config.html) {
              if (this._config.sanitize) {
                content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
              }
              element.innerHTML = content;
            } else {
              element.textContent = content;
            }
          }
          getTitle() {
            const title = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(title);
          }
          updateAttachment(attachment) {
            if (attachment === "right") {
              return "end";
            }
            if (attachment === "left") {
              return "start";
            }
            return attachment;
          }
          _initializeOnDelegatedTarget(event, context) {
            return context || this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
          }
          _getOffset() {
            const {
              offset
            } = this._config;
            if (typeof offset === "string") {
              return offset.split(",").map((val) => Number.parseInt(val, 10));
            }
            if (typeof offset === "function") {
              return (popperData) => offset(popperData, this._element);
            }
            return offset;
          }
          _resolvePossibleFunction(content) {
            return typeof content === "function" ? content.call(this._element) : content;
          }
          _getPopperConfig(attachment) {
            const defaultBsPopperConfig = {
              placement: attachment,
              modifiers: [{
                name: "flip",
                options: {
                  fallbackPlacements: this._config.fallbackPlacements
                }
              }, {
                name: "offset",
                options: {
                  offset: this._getOffset()
                }
              }, {
                name: "preventOverflow",
                options: {
                  boundary: this._config.boundary
                }
              }, {
                name: "arrow",
                options: {
                  element: `.${this.constructor.NAME}-arrow`
                }
              }, {
                name: "onChange",
                enabled: true,
                phase: "afterWrite",
                fn: (data) => this._handlePopperPlacementChange(data)
              }],
              onFirstUpdate: (data) => {
                if (data.options.placement !== data.placement) {
                  this._handlePopperPlacementChange(data);
                }
              }
            };
            return {
              ...defaultBsPopperConfig,
              ...typeof this._config.popperConfig === "function" ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig
            };
          }
          _addAttachmentClass(attachment) {
            this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(attachment)}`);
          }
          _getAttachment(placement) {
            return AttachmentMap[placement.toUpperCase()];
          }
          _setListeners() {
            const triggers = this._config.trigger.split(" ");
            triggers.forEach((trigger) => {
              if (trigger === "click") {
                EventHandler__default.default.on(this._element, this.constructor.Event.CLICK, this._config.selector, (event) => this.toggle(event));
              } else if (trigger !== TRIGGER_MANUAL) {
                const eventIn = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
                const eventOut = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                EventHandler__default.default.on(this._element, eventIn, this._config.selector, (event) => this._enter(event));
                EventHandler__default.default.on(this._element, eventOut, this._config.selector, (event) => this._leave(event));
              }
            });
            this._hideModalHandler = () => {
              if (this._element) {
                this.hide();
              }
            };
            EventHandler__default.default.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
            if (this._config.selector) {
              this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
              };
            } else {
              this._fixTitle();
            }
          }
          _fixTitle() {
            const title = this._element.getAttribute("title");
            const originalTitleType = typeof this._element.getAttribute("data-bs-original-title");
            if (title || originalTitleType !== "string") {
              this._element.setAttribute("data-bs-original-title", title || "");
              if (title && !this._element.getAttribute("aria-label") && !this._element.textContent) {
                this._element.setAttribute("aria-label", title);
              }
              this._element.setAttribute("title", "");
            }
          }
          _enter(event, context) {
            context = this._initializeOnDelegatedTarget(event, context);
            if (event) {
              context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
            }
            if (context.getTipElement().classList.contains(CLASS_NAME_SHOW) || context._hoverState === HOVER_STATE_SHOW) {
              context._hoverState = HOVER_STATE_SHOW;
              return;
            }
            clearTimeout(context._timeout);
            context._hoverState = HOVER_STATE_SHOW;
            if (!context._config.delay || !context._config.delay.show) {
              context.show();
              return;
            }
            context._timeout = setTimeout(() => {
              if (context._hoverState === HOVER_STATE_SHOW) {
                context.show();
              }
            }, context._config.delay.show);
          }
          _leave(event, context) {
            context = this._initializeOnDelegatedTarget(event, context);
            if (event) {
              context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
            }
            if (context._isWithActiveTrigger()) {
              return;
            }
            clearTimeout(context._timeout);
            context._hoverState = HOVER_STATE_OUT;
            if (!context._config.delay || !context._config.delay.hide) {
              context.hide();
              return;
            }
            context._timeout = setTimeout(() => {
              if (context._hoverState === HOVER_STATE_OUT) {
                context.hide();
              }
            }, context._config.delay.hide);
          }
          _isWithActiveTrigger() {
            for (const trigger in this._activeTrigger) {
              if (this._activeTrigger[trigger]) {
                return true;
              }
            }
            return false;
          }
          _getConfig(config) {
            const dataAttributes = Manipulator__default.default.getDataAttributes(this._element);
            Object.keys(dataAttributes).forEach((dataAttr) => {
              if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
                delete dataAttributes[dataAttr];
              }
            });
            config = {
              ...this.constructor.Default,
              ...dataAttributes,
              ...typeof config === "object" && config ? config : {}
            };
            config.container = config.container === false ? document.body : getElement(config.container);
            if (typeof config.delay === "number") {
              config.delay = {
                show: config.delay,
                hide: config.delay
              };
            }
            if (typeof config.title === "number") {
              config.title = config.title.toString();
            }
            if (typeof config.content === "number") {
              config.content = config.content.toString();
            }
            typeCheckConfig(NAME, config, this.constructor.DefaultType);
            if (config.sanitize) {
              config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
            }
            return config;
          }
          _getDelegateConfig() {
            const config = {};
            for (const key in this._config) {
              if (this.constructor.Default[key] !== this._config[key]) {
                config[key] = this._config[key];
              }
            }
            return config;
          }
          _cleanTipClass() {
            const tip = this.getTipElement();
            const basicClassPrefixRegex = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g");
            const tabClass = tip.getAttribute("class").match(basicClassPrefixRegex);
            if (tabClass !== null && tabClass.length > 0) {
              tabClass.map((token) => token.trim()).forEach((tClass) => tip.classList.remove(tClass));
            }
          }
          _getBasicClassPrefix() {
            return CLASS_PREFIX;
          }
          _handlePopperPlacementChange(popperData) {
            const {
              state
            } = popperData;
            if (!state) {
              return;
            }
            this.tip = state.elements.popper;
            this._cleanTipClass();
            this._addAttachmentClass(this._getAttachment(state.placement));
          }
          _disposePopper() {
            if (this._popper) {
              this._popper.destroy();
              this._popper = null;
            }
          }
          static jQueryInterface(config) {
            return this.each(function() {
              const data = Tooltip3.getOrCreateInstance(this, config);
              if (typeof config === "string") {
                if (typeof data[config] === "undefined") {
                  throw new TypeError(`No method named "${config}"`);
                }
                data[config]();
              }
            });
          }
        }
        defineJQueryPlugin(Tooltip3);
        return Tooltip3;
      });
    }
  });

  // node_modules/tiny-slider/dist/tiny-slider.js
  var require_tiny_slider = __commonJS({
    "node_modules/tiny-slider/dist/tiny-slider.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var win$1 = window;
      var raf = win$1.requestAnimationFrame || win$1.webkitRequestAnimationFrame || win$1.mozRequestAnimationFrame || win$1.msRequestAnimationFrame || function(cb) {
        return setTimeout(cb, 16);
      };
      var win = window;
      var caf = win.cancelAnimationFrame || win.mozCancelAnimationFrame || function(id) {
        clearTimeout(id);
      };
      function extend() {
        var obj, name, copy, target = arguments[0] || {}, i = 1, length = arguments.length;
        for (; i < length; i++) {
          if ((obj = arguments[i]) !== null) {
            for (name in obj) {
              copy = obj[name];
              if (target === copy) {
                continue;
              } else if (copy !== void 0) {
                target[name] = copy;
              }
            }
          }
        }
        return target;
      }
      function checkStorageValue(value) {
        return ["true", "false"].indexOf(value) >= 0 ? JSON.parse(value) : value;
      }
      function setLocalStorage(storage, key, value, access) {
        if (access) {
          try {
            storage.setItem(key, value);
          } catch (e) {
          }
        }
        return value;
      }
      function getSlideId() {
        var id = window.tnsId;
        window.tnsId = !id ? 1 : id + 1;
        return "tns" + window.tnsId;
      }
      function getBody() {
        var doc = document, body = doc.body;
        if (!body) {
          body = doc.createElement("body");
          body.fake = true;
        }
        return body;
      }
      var docElement = document.documentElement;
      function setFakeBody(body) {
        var docOverflow = "";
        if (body.fake) {
          docOverflow = docElement.style.overflow;
          body.style.background = "";
          body.style.overflow = docElement.style.overflow = "hidden";
          docElement.appendChild(body);
        }
        return docOverflow;
      }
      function resetFakeBody(body, docOverflow) {
        if (body.fake) {
          body.remove();
          docElement.style.overflow = docOverflow;
          docElement.offsetHeight;
        }
      }
      function calc() {
        var doc = document, body = getBody(), docOverflow = setFakeBody(body), div = doc.createElement("div"), result = false;
        body.appendChild(div);
        try {
          var str = "(10px * 10)", vals = ["calc" + str, "-moz-calc" + str, "-webkit-calc" + str], val;
          for (var i = 0; i < 3; i++) {
            val = vals[i];
            div.style.width = val;
            if (div.offsetWidth === 100) {
              result = val.replace(str, "");
              break;
            }
          }
        } catch (e) {
        }
        body.fake ? resetFakeBody(body, docOverflow) : div.remove();
        return result;
      }
      function percentageLayout() {
        var doc = document, body = getBody(), docOverflow = setFakeBody(body), wrapper = doc.createElement("div"), outer = doc.createElement("div"), str = "", count = 70, perPage = 3, supported = false;
        wrapper.className = "tns-t-subp2";
        outer.className = "tns-t-ct";
        for (var i = 0; i < count; i++) {
          str += "<div></div>";
        }
        outer.innerHTML = str;
        wrapper.appendChild(outer);
        body.appendChild(wrapper);
        supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;
        body.fake ? resetFakeBody(body, docOverflow) : wrapper.remove();
        return supported;
      }
      function mediaquerySupport() {
        if (window.matchMedia || window.msMatchMedia) {
          return true;
        }
        var doc = document, body = getBody(), docOverflow = setFakeBody(body), div = doc.createElement("div"), style = doc.createElement("style"), rule = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", position;
        style.type = "text/css";
        div.className = "tns-mq-test";
        body.appendChild(style);
        body.appendChild(div);
        if (style.styleSheet) {
          style.styleSheet.cssText = rule;
        } else {
          style.appendChild(doc.createTextNode(rule));
        }
        position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle["position"];
        body.fake ? resetFakeBody(body, docOverflow) : div.remove();
        return position === "absolute";
      }
      function createStyleSheet(media, nonce) {
        var style = document.createElement("style");
        if (media) {
          style.setAttribute("media", media);
        }
        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
        document.querySelector("head").appendChild(style);
        return style.sheet ? style.sheet : style.styleSheet;
      }
      function addCSSRule(sheet, selector, rules, index) {
        "insertRule" in sheet ? sheet.insertRule(selector + "{" + rules + "}", index) : sheet.addRule(selector, rules, index);
      }
      function removeCSSRule(sheet, index) {
        "deleteRule" in sheet ? sheet.deleteRule(index) : sheet.removeRule(index);
      }
      function getCssRulesLength(sheet) {
        var rule = "insertRule" in sheet ? sheet.cssRules : sheet.rules;
        return rule.length;
      }
      function toDegree(y, x) {
        return Math.atan2(y, x) * (180 / Math.PI);
      }
      function getTouchDirection(angle, range) {
        var direction = false, gap = Math.abs(90 - Math.abs(angle));
        if (gap >= 90 - range) {
          direction = "horizontal";
        } else if (gap <= range) {
          direction = "vertical";
        }
        return direction;
      }
      function forEach(arr, callback, scope) {
        for (var i = 0, l = arr.length; i < l; i++) {
          callback.call(scope, arr[i], i);
        }
      }
      var classListSupport = "classList" in document.createElement("_");
      var hasClass = classListSupport ? function(el, str) {
        return el.classList.contains(str);
      } : function(el, str) {
        return el.className.indexOf(str) >= 0;
      };
      var addClass = classListSupport ? function(el, str) {
        if (!hasClass(el, str)) {
          el.classList.add(str);
        }
      } : function(el, str) {
        if (!hasClass(el, str)) {
          el.className += " " + str;
        }
      };
      var removeClass = classListSupport ? function(el, str) {
        if (hasClass(el, str)) {
          el.classList.remove(str);
        }
      } : function(el, str) {
        if (hasClass(el, str)) {
          el.className = el.className.replace(str, "");
        }
      };
      function hasAttr(el, attr) {
        return el.hasAttribute(attr);
      }
      function getAttr(el, attr) {
        return el.getAttribute(attr);
      }
      function isNodeList(el) {
        return typeof el.item !== "undefined";
      }
      function setAttrs(els, attrs) {
        els = isNodeList(els) || els instanceof Array ? els : [els];
        if (Object.prototype.toString.call(attrs) !== "[object Object]") {
          return;
        }
        for (var i = els.length; i--; ) {
          for (var key in attrs) {
            els[i].setAttribute(key, attrs[key]);
          }
        }
      }
      function removeAttrs(els, attrs) {
        els = isNodeList(els) || els instanceof Array ? els : [els];
        attrs = attrs instanceof Array ? attrs : [attrs];
        var attrLength = attrs.length;
        for (var i = els.length; i--; ) {
          for (var j = attrLength; j--; ) {
            els[i].removeAttribute(attrs[j]);
          }
        }
      }
      function arrayFromNodeList(nl) {
        var arr = [];
        for (var i = 0, l = nl.length; i < l; i++) {
          arr.push(nl[i]);
        }
        return arr;
      }
      function hideElement(el, forceHide) {
        if (el.style.display !== "none") {
          el.style.display = "none";
        }
      }
      function showElement(el, forceHide) {
        if (el.style.display === "none") {
          el.style.display = "";
        }
      }
      function isVisible(el) {
        return window.getComputedStyle(el).display !== "none";
      }
      function whichProperty(props) {
        if (typeof props === "string") {
          var arr = [props], Props = props.charAt(0).toUpperCase() + props.substr(1), prefixes = ["Webkit", "Moz", "ms", "O"];
          prefixes.forEach(function(prefix) {
            if (prefix !== "ms" || props === "transform") {
              arr.push(prefix + Props);
            }
          });
          props = arr;
        }
        var el = document.createElement("fakeelement");
        props.length;
        for (var i = 0; i < props.length; i++) {
          var prop = props[i];
          if (el.style[prop] !== void 0) {
            return prop;
          }
        }
        return false;
      }
      function has3DTransforms(tf) {
        if (!tf) {
          return false;
        }
        if (!window.getComputedStyle) {
          return false;
        }
        var doc = document, body = getBody(), docOverflow = setFakeBody(body), el = doc.createElement("p"), has3d, cssTF = tf.length > 9 ? "-" + tf.slice(0, -9).toLowerCase() + "-" : "";
        cssTF += "transform";
        body.insertBefore(el, null);
        el.style[tf] = "translate3d(1px,1px,1px)";
        has3d = window.getComputedStyle(el).getPropertyValue(cssTF);
        body.fake ? resetFakeBody(body, docOverflow) : el.remove();
        return has3d !== void 0 && has3d.length > 0 && has3d !== "none";
      }
      function getEndProperty(propIn, propOut) {
        var endProp = false;
        if (/^Webkit/.test(propIn)) {
          endProp = "webkit" + propOut + "End";
        } else if (/^O/.test(propIn)) {
          endProp = "o" + propOut + "End";
        } else if (propIn) {
          endProp = propOut.toLowerCase() + "end";
        }
        return endProp;
      }
      var supportsPassive = false;
      try {
        opts = Object.defineProperty({}, "passive", {
          get: function() {
            supportsPassive = true;
          }
        });
        window.addEventListener("test", null, opts);
      } catch (e) {
      }
      var opts;
      var passiveOption = supportsPassive ? {
        passive: true
      } : false;
      function addEvents(el, obj, preventScrolling) {
        for (var prop in obj) {
          var option = ["touchstart", "touchmove"].indexOf(prop) >= 0 && !preventScrolling ? passiveOption : false;
          el.addEventListener(prop, obj[prop], option);
        }
      }
      function removeEvents(el, obj) {
        for (var prop in obj) {
          var option = ["touchstart", "touchmove"].indexOf(prop) >= 0 ? passiveOption : false;
          el.removeEventListener(prop, obj[prop], option);
        }
      }
      function Events() {
        return {
          topics: {},
          on: function(eventName, fn) {
            this.topics[eventName] = this.topics[eventName] || [];
            this.topics[eventName].push(fn);
          },
          off: function(eventName, fn) {
            if (this.topics[eventName]) {
              for (var i = 0; i < this.topics[eventName].length; i++) {
                if (this.topics[eventName][i] === fn) {
                  this.topics[eventName].splice(i, 1);
                  break;
                }
              }
            }
          },
          emit: function(eventName, data) {
            data.type = eventName;
            if (this.topics[eventName]) {
              this.topics[eventName].forEach(function(fn) {
                fn(data, eventName);
              });
            }
          }
        };
      }
      function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
        var tick = Math.min(duration, 10), unit = to.indexOf("%") >= 0 ? "%" : "px", to = to.replace(unit, ""), from = Number(element.style[attr].replace(prefix, "").replace(postfix, "").replace(unit, "")), positionTick = (to - from) / duration * tick;
        setTimeout(moveElement, tick);
        function moveElement() {
          duration -= tick;
          from += positionTick;
          element.style[attr] = prefix + from + unit + postfix;
          if (duration > 0) {
            setTimeout(moveElement, tick);
          } else {
            callback();
          }
        }
      }
      if (!Object.keys) {
        Object.keys = function(object) {
          var keys = [];
          for (var name in object) {
            if (Object.prototype.hasOwnProperty.call(object, name)) {
              keys.push(name);
            }
          }
          return keys;
        };
      }
      if (!("remove" in Element.prototype)) {
        Element.prototype.remove = function() {
          if (this.parentNode) {
            this.parentNode.removeChild(this);
          }
        };
      }
      var tns3 = function(options) {
        options = extend({
          container: ".slider",
          mode: "carousel",
          axis: "horizontal",
          items: 1,
          gutter: 0,
          edgePadding: 0,
          fixedWidth: false,
          autoWidth: false,
          viewportMax: false,
          slideBy: 1,
          center: false,
          controls: true,
          controlsPosition: "top",
          controlsText: ["prev", "next"],
          controlsContainer: false,
          prevButton: false,
          nextButton: false,
          nav: true,
          navPosition: "top",
          navContainer: false,
          navAsThumbnails: false,
          arrowKeys: false,
          speed: 300,
          autoplay: false,
          autoplayPosition: "top",
          autoplayTimeout: 5e3,
          autoplayDirection: "forward",
          autoplayText: ["start", "stop"],
          autoplayHoverPause: false,
          autoplayButton: false,
          autoplayButtonOutput: true,
          autoplayResetOnVisibility: true,
          animateIn: "tns-fadeIn",
          animateOut: "tns-fadeOut",
          animateNormal: "tns-normal",
          animateDelay: false,
          loop: true,
          rewind: false,
          autoHeight: false,
          responsive: false,
          lazyload: false,
          lazyloadSelector: ".tns-lazy-img",
          touch: true,
          mouseDrag: false,
          swipeAngle: 15,
          nested: false,
          preventActionWhenRunning: false,
          preventScrollOnTouch: false,
          freezable: true,
          onInit: false,
          useLocalStorage: true,
          nonce: false
        }, options || {});
        var doc = document, win2 = window, KEYS = {
          ENTER: 13,
          SPACE: 32,
          LEFT: 37,
          RIGHT: 39
        }, tnsStorage = {}, localStorageAccess = options.useLocalStorage;
        if (localStorageAccess) {
          var browserInfo = navigator.userAgent;
          var uid = new Date();
          try {
            tnsStorage = win2.localStorage;
            if (tnsStorage) {
              tnsStorage.setItem(uid, uid);
              localStorageAccess = tnsStorage.getItem(uid) == uid;
              tnsStorage.removeItem(uid);
            } else {
              localStorageAccess = false;
            }
            if (!localStorageAccess) {
              tnsStorage = {};
            }
          } catch (e) {
            localStorageAccess = false;
          }
          if (localStorageAccess) {
            if (tnsStorage["tnsApp"] && tnsStorage["tnsApp"] !== browserInfo) {
              ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(item) {
                tnsStorage.removeItem(item);
              });
            }
            localStorage["tnsApp"] = browserInfo;
          }
        }
        var CALC = tnsStorage["tC"] ? checkStorageValue(tnsStorage["tC"]) : setLocalStorage(tnsStorage, "tC", calc(), localStorageAccess), PERCENTAGELAYOUT = tnsStorage["tPL"] ? checkStorageValue(tnsStorage["tPL"]) : setLocalStorage(tnsStorage, "tPL", percentageLayout(), localStorageAccess), CSSMQ = tnsStorage["tMQ"] ? checkStorageValue(tnsStorage["tMQ"]) : setLocalStorage(tnsStorage, "tMQ", mediaquerySupport(), localStorageAccess), TRANSFORM = tnsStorage["tTf"] ? checkStorageValue(tnsStorage["tTf"]) : setLocalStorage(tnsStorage, "tTf", whichProperty("transform"), localStorageAccess), HAS3DTRANSFORMS = tnsStorage["t3D"] ? checkStorageValue(tnsStorage["t3D"]) : setLocalStorage(tnsStorage, "t3D", has3DTransforms(TRANSFORM), localStorageAccess), TRANSITIONDURATION = tnsStorage["tTDu"] ? checkStorageValue(tnsStorage["tTDu"]) : setLocalStorage(tnsStorage, "tTDu", whichProperty("transitionDuration"), localStorageAccess), TRANSITIONDELAY = tnsStorage["tTDe"] ? checkStorageValue(tnsStorage["tTDe"]) : setLocalStorage(tnsStorage, "tTDe", whichProperty("transitionDelay"), localStorageAccess), ANIMATIONDURATION = tnsStorage["tADu"] ? checkStorageValue(tnsStorage["tADu"]) : setLocalStorage(tnsStorage, "tADu", whichProperty("animationDuration"), localStorageAccess), ANIMATIONDELAY = tnsStorage["tADe"] ? checkStorageValue(tnsStorage["tADe"]) : setLocalStorage(tnsStorage, "tADe", whichProperty("animationDelay"), localStorageAccess), TRANSITIONEND = tnsStorage["tTE"] ? checkStorageValue(tnsStorage["tTE"]) : setLocalStorage(tnsStorage, "tTE", getEndProperty(TRANSITIONDURATION, "Transition"), localStorageAccess), ANIMATIONEND = tnsStorage["tAE"] ? checkStorageValue(tnsStorage["tAE"]) : setLocalStorage(tnsStorage, "tAE", getEndProperty(ANIMATIONDURATION, "Animation"), localStorageAccess);
        var supportConsoleWarn = win2.console && typeof win2.console.warn === "function", tnsList = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"], optionsElements = {};
        tnsList.forEach(function(item) {
          if (typeof options[item] === "string") {
            var str = options[item], el = doc.querySelector(str);
            optionsElements[item] = str;
            if (el && el.nodeName) {
              options[item] = el;
            } else {
              if (supportConsoleWarn) {
                console.warn("Can't find", options[item]);
              }
              return;
            }
          }
        });
        if (options.container.children.length < 1) {
          if (supportConsoleWarn) {
            console.warn("No slides found in", options.container);
          }
          return;
        }
        var responsive = options.responsive, nested = options.nested, carousel = options.mode === "carousel" ? true : false;
        if (responsive) {
          if (0 in responsive) {
            options = extend(options, responsive[0]);
            delete responsive[0];
          }
          var responsiveTem = {};
          for (var key in responsive) {
            var val = responsive[key];
            val = typeof val === "number" ? {
              items: val
            } : val;
            responsiveTem[key] = val;
          }
          responsive = responsiveTem;
          responsiveTem = null;
        }
        function updateOptions(obj) {
          for (var key2 in obj) {
            if (!carousel) {
              if (key2 === "slideBy") {
                obj[key2] = "page";
              }
              if (key2 === "edgePadding") {
                obj[key2] = false;
              }
              if (key2 === "autoHeight") {
                obj[key2] = false;
              }
            }
            if (key2 === "responsive") {
              updateOptions(obj[key2]);
            }
          }
        }
        if (!carousel) {
          updateOptions(options);
        }
        if (!carousel) {
          options.axis = "horizontal";
          options.slideBy = "page";
          options.edgePadding = false;
          var animateIn = options.animateIn, animateOut = options.animateOut, animateDelay = options.animateDelay, animateNormal = options.animateNormal;
        }
        var horizontal = options.axis === "horizontal" ? true : false, outerWrapper = doc.createElement("div"), innerWrapper = doc.createElement("div"), middleWrapper, container = options.container, containerParent = container.parentNode, containerHTML = container.outerHTML, slideItems = container.children, slideCount = slideItems.length, breakpointZone, windowWidth = getWindowWidth(), isOn = false;
        if (responsive) {
          setBreakpointZone();
        }
        if (carousel) {
          container.className += " tns-vpfix";
        }
        var autoWidth = options.autoWidth, fixedWidth = getOption("fixedWidth"), edgePadding = getOption("edgePadding"), gutter = getOption("gutter"), viewport = getViewportWidth(), center = getOption("center"), items = !autoWidth ? Math.floor(getOption("items")) : 1, slideBy = getOption("slideBy"), viewportMax = options.viewportMax || options.fixedWidthViewportWidth, arrowKeys = getOption("arrowKeys"), speed = getOption("speed"), rewind = options.rewind, loop = rewind ? false : options.loop, autoHeight = getOption("autoHeight"), controls = getOption("controls"), controlsText = getOption("controlsText"), nav = getOption("nav"), touch = getOption("touch"), mouseDrag = getOption("mouseDrag"), autoplay = getOption("autoplay"), autoplayTimeout = getOption("autoplayTimeout"), autoplayText = getOption("autoplayText"), autoplayHoverPause = getOption("autoplayHoverPause"), autoplayResetOnVisibility = getOption("autoplayResetOnVisibility"), sheet = createStyleSheet(null, getOption("nonce")), lazyload = options.lazyload, lazyloadSelector = options.lazyloadSelector, slidePositions, slideItemsOut = [], cloneCount = loop ? getCloneCountForLoop() : 0, slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2, hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false, rightBoundary = fixedWidth ? getRightBoundary() : null, updateIndexBeforeTransform = !carousel || !loop ? true : false, transformAttr = horizontal ? "left" : "top", transformPrefix = "", transformPostfix = "", getIndexMax = function() {
          if (fixedWidth) {
            return function() {
              return center && !loop ? slideCount - 1 : Math.ceil(-rightBoundary / (fixedWidth + gutter));
            };
          } else if (autoWidth) {
            return function() {
              for (var i = 0; i < slideCountNew; i++) {
                if (slidePositions[i] >= -rightBoundary) {
                  return i;
                }
              }
            };
          } else {
            return function() {
              if (center && carousel && !loop) {
                return slideCount - 1;
              } else {
                return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
              }
            };
          }
        }(), index = getStartIndex(getOption("startIndex")), indexCached = index;
        getCurrentSlide();
        var indexMin = 0, indexMax = !autoWidth ? getIndexMax() : null, preventActionWhenRunning = options.preventActionWhenRunning, swipeAngle = options.swipeAngle, moveDirectionExpected = swipeAngle ? "?" : true, running = false, onInit = options.onInit, events = new Events(), newContainerClasses = " tns-slider tns-" + options.mode, slideId = container.id || getSlideId(), disable = getOption("disable"), disabled = false, freezable = options.freezable, freeze = freezable && !autoWidth ? getFreeze() : false, frozen = false, controlsEvents = {
          "click": onControlsClick,
          "keydown": onControlsKeydown
        }, navEvents = {
          "click": onNavClick,
          "keydown": onNavKeydown
        }, hoverEvents = {
          "mouseover": mouseoverPause,
          "mouseout": mouseoutRestart
        }, visibilityEvent = {
          "visibilitychange": onVisibilityChange
        }, docmentKeydownEvent = {
          "keydown": onDocumentKeydown
        }, touchEvents = {
          "touchstart": onPanStart,
          "touchmove": onPanMove,
          "touchend": onPanEnd,
          "touchcancel": onPanEnd
        }, dragEvents = {
          "mousedown": onPanStart,
          "mousemove": onPanMove,
          "mouseup": onPanEnd,
          "mouseleave": onPanEnd
        }, hasControls = hasOption("controls"), hasNav = hasOption("nav"), navAsThumbnails = autoWidth ? true : options.navAsThumbnails, hasAutoplay = hasOption("autoplay"), hasTouch = hasOption("touch"), hasMouseDrag = hasOption("mouseDrag"), slideActiveClass = "tns-slide-active", slideClonedClass = "tns-slide-cloned", imgCompleteClass = "tns-complete", imgEvents = {
          "load": onImgLoaded,
          "error": onImgFailed
        }, imgsComplete, liveregionCurrent, preventScroll = options.preventScrollOnTouch === "force" ? true : false;
        if (hasControls) {
          var controlsContainer = options.controlsContainer, controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : "", prevButton = options.prevButton, nextButton = options.nextButton, prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : "", nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : "", prevIsButton, nextIsButton;
        }
        if (hasNav) {
          var navContainer = options.navContainer, navContainerHTML = options.navContainer ? options.navContainer.outerHTML : "", navItems, pages = autoWidth ? slideCount : getPages(), pagesCached = 0, navClicked = -1, navCurrentIndex = getCurrentNavIndex(), navCurrentIndexCached = navCurrentIndex, navActiveClass = "tns-nav-active", navStr = "Carousel Page ", navStrCurrent = " (Current Slide)";
        }
        if (hasAutoplay) {
          var autoplayDirection = options.autoplayDirection === "forward" ? 1 : -1, autoplayButton = options.autoplayButton, autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : "", autoplayHtmlStrings = ["<span class='tns-visually-hidden'>", " animation</span>"], autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused;
        }
        if (hasTouch || hasMouseDrag) {
          var initPosition = {}, lastPosition = {}, translateInit, panStart = false, rafIndex, getDist = horizontal ? function(a, b) {
            return a.x - b.x;
          } : function(a, b) {
            return a.y - b.y;
          };
        }
        if (!autoWidth) {
          resetVariblesWhenDisable(disable || freeze);
        }
        if (TRANSFORM) {
          transformAttr = TRANSFORM;
          transformPrefix = "translate";
          if (HAS3DTRANSFORMS) {
            transformPrefix += horizontal ? "3d(" : "3d(0px, ";
            transformPostfix = horizontal ? ", 0px, 0px)" : ", 0px)";
          } else {
            transformPrefix += horizontal ? "X(" : "Y(";
            transformPostfix = ")";
          }
        }
        if (carousel) {
          container.className = container.className.replace("tns-vpfix", "");
        }
        initStructure();
        initSheet();
        initSliderTransform();
        function resetVariblesWhenDisable(condition) {
          if (condition) {
            controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
          }
        }
        function getCurrentSlide() {
          var tem = carousel ? index - cloneCount : index;
          while (tem < 0) {
            tem += slideCount;
          }
          return tem % slideCount + 1;
        }
        function getStartIndex(ind) {
          ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
          return carousel ? ind + cloneCount : ind;
        }
        function getAbsIndex(i) {
          if (i == null) {
            i = index;
          }
          if (carousel) {
            i -= cloneCount;
          }
          while (i < 0) {
            i += slideCount;
          }
          return Math.floor(i % slideCount);
        }
        function getCurrentNavIndex() {
          var absIndex = getAbsIndex(), result;
          result = navAsThumbnails ? absIndex : fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) : Math.floor(absIndex / items);
          if (!loop && carousel && index === indexMax) {
            result = pages - 1;
          }
          return result;
        }
        function getItemsMax() {
          if (autoWidth || fixedWidth && !viewportMax) {
            return slideCount - 1;
          } else {
            var str = fixedWidth ? "fixedWidth" : "items", arr = [];
            if (fixedWidth || options[str] < slideCount) {
              arr.push(options[str]);
            }
            if (responsive) {
              for (var bp in responsive) {
                var tem = responsive[bp][str];
                if (tem && (fixedWidth || tem < slideCount)) {
                  arr.push(tem);
                }
              }
            }
            if (!arr.length) {
              arr.push(0);
            }
            return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
          }
        }
        function getCloneCountForLoop() {
          var itemsMax = getItemsMax(), result = carousel ? Math.ceil((itemsMax * 5 - slideCount) / 2) : itemsMax * 4 - slideCount;
          result = Math.max(itemsMax, result);
          return hasOption("edgePadding") ? result + 1 : result;
        }
        function getWindowWidth() {
          return win2.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
        }
        function getInsertPosition(pos) {
          return pos === "top" ? "afterbegin" : "beforeend";
        }
        function getClientWidth(el) {
          if (el == null) {
            return;
          }
          var div = doc.createElement("div"), rect, width;
          el.appendChild(div);
          rect = div.getBoundingClientRect();
          width = rect.right - rect.left;
          div.remove();
          return width || getClientWidth(el.parentNode);
        }
        function getViewportWidth() {
          var gap = edgePadding ? edgePadding * 2 - gutter : 0;
          return getClientWidth(containerParent) - gap;
        }
        function hasOption(item) {
          if (options[item]) {
            return true;
          } else {
            if (responsive) {
              for (var bp in responsive) {
                if (responsive[bp][item]) {
                  return true;
                }
              }
            }
            return false;
          }
        }
        function getOption(item, ww) {
          if (ww == null) {
            ww = windowWidth;
          }
          if (item === "items" && fixedWidth) {
            return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;
          } else {
            var result = options[item];
            if (responsive) {
              for (var bp in responsive) {
                if (ww >= parseInt(bp)) {
                  if (item in responsive[bp]) {
                    result = responsive[bp][item];
                  }
                }
              }
            }
            if (item === "slideBy" && result === "page") {
              result = getOption("items");
            }
            if (!carousel && (item === "slideBy" || item === "items")) {
              result = Math.floor(result);
            }
            return result;
          }
        }
        function getSlideMarginLeft(i) {
          return CALC ? CALC + "(" + i * 100 + "% / " + slideCountNew + ")" : i * 100 / slideCountNew + "%";
        }
        function getInnerWrapperStyles(edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
          var str = "";
          if (edgePaddingTem !== void 0) {
            var gap = edgePaddingTem;
            if (gutterTem) {
              gap -= gutterTem;
            }
            str = horizontal ? "margin: 0 " + gap + "px 0 " + edgePaddingTem + "px;" : "margin: " + edgePaddingTem + "px 0 " + gap + "px 0;";
          } else if (gutterTem && !fixedWidthTem) {
            var gutterTemUnit = "-" + gutterTem + "px", dir = horizontal ? gutterTemUnit + " 0 0" : "0 " + gutterTemUnit + " 0";
            str = "margin: 0 " + dir + ";";
          }
          if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) {
            str += getTransitionDurationStyle(speedTem);
          }
          return str;
        }
        function getContainerWidth(fixedWidthTem, gutterTem, itemsTem) {
          if (fixedWidthTem) {
            return (fixedWidthTem + gutterTem) * slideCountNew + "px";
          } else {
            return CALC ? CALC + "(" + slideCountNew * 100 + "% / " + itemsTem + ")" : slideCountNew * 100 / itemsTem + "%";
          }
        }
        function getSlideWidthStyle(fixedWidthTem, gutterTem, itemsTem) {
          var width;
          if (fixedWidthTem) {
            width = fixedWidthTem + gutterTem + "px";
          } else {
            if (!carousel) {
              itemsTem = Math.floor(itemsTem);
            }
            var dividend = carousel ? slideCountNew : itemsTem;
            width = CALC ? CALC + "(100% / " + dividend + ")" : 100 / dividend + "%";
          }
          width = "width:" + width;
          return nested !== "inner" ? width + ";" : width + " !important;";
        }
        function getSlideGutterStyle(gutterTem) {
          var str = "";
          if (gutterTem !== false) {
            var prop = horizontal ? "padding-" : "margin-", dir = horizontal ? "right" : "bottom";
            str = prop + dir + ": " + gutterTem + "px;";
          }
          return str;
        }
        function getCSSPrefix(name, num) {
          var prefix = name.substring(0, name.length - num).toLowerCase();
          if (prefix) {
            prefix = "-" + prefix + "-";
          }
          return prefix;
        }
        function getTransitionDurationStyle(speed2) {
          return getCSSPrefix(TRANSITIONDURATION, 18) + "transition-duration:" + speed2 / 1e3 + "s;";
        }
        function getAnimationDurationStyle(speed2) {
          return getCSSPrefix(ANIMATIONDURATION, 17) + "animation-duration:" + speed2 / 1e3 + "s;";
        }
        function initStructure() {
          var classOuter = "tns-outer", classInner = "tns-inner";
          hasOption("gutter");
          outerWrapper.className = classOuter;
          innerWrapper.className = classInner;
          outerWrapper.id = slideId + "-ow";
          innerWrapper.id = slideId + "-iw";
          if (container.id === "") {
            container.id = slideId;
          }
          newContainerClasses += PERCENTAGELAYOUT || autoWidth ? " tns-subpixel" : " tns-no-subpixel";
          newContainerClasses += CALC ? " tns-calc" : " tns-no-calc";
          if (autoWidth) {
            newContainerClasses += " tns-autowidth";
          }
          newContainerClasses += " tns-" + options.axis;
          container.className += newContainerClasses;
          if (carousel) {
            middleWrapper = doc.createElement("div");
            middleWrapper.id = slideId + "-mw";
            middleWrapper.className = "tns-ovh";
            outerWrapper.appendChild(middleWrapper);
            middleWrapper.appendChild(innerWrapper);
          } else {
            outerWrapper.appendChild(innerWrapper);
          }
          if (autoHeight) {
            var wp = middleWrapper ? middleWrapper : innerWrapper;
            wp.className += " tns-ah";
          }
          containerParent.insertBefore(outerWrapper, container);
          innerWrapper.appendChild(container);
          forEach(slideItems, function(item, i) {
            addClass(item, "tns-item");
            if (!item.id) {
              item.id = slideId + "-item" + i;
            }
            if (!carousel && animateNormal) {
              addClass(item, animateNormal);
            }
            setAttrs(item, {
              "aria-hidden": "true",
              "tabindex": "-1"
            });
          });
          if (cloneCount) {
            var fragmentBefore = doc.createDocumentFragment(), fragmentAfter = doc.createDocumentFragment();
            for (var j = cloneCount; j--; ) {
              var num = j % slideCount, cloneFirst = slideItems[num].cloneNode(true);
              addClass(cloneFirst, slideClonedClass);
              removeAttrs(cloneFirst, "id");
              fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);
              if (carousel) {
                var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
                addClass(cloneLast, slideClonedClass);
                removeAttrs(cloneLast, "id");
                fragmentBefore.appendChild(cloneLast);
              }
            }
            container.insertBefore(fragmentBefore, container.firstChild);
            container.appendChild(fragmentAfter);
            slideItems = container.children;
          }
        }
        function initSliderTransform() {
          if (hasOption("autoHeight") || autoWidth || !horizontal) {
            var imgs = container.querySelectorAll("img");
            forEach(imgs, function(img) {
              var src = img.src;
              if (!lazyload) {
                if (src && src.indexOf("data:image") < 0) {
                  img.src = "";
                  addEvents(img, imgEvents);
                  addClass(img, "loading");
                  img.src = src;
                } else {
                  imgLoaded(img);
                }
              }
            });
            raf(function() {
              imgsLoadedCheck(arrayFromNodeList(imgs), function() {
                imgsComplete = true;
              });
            });
            if (hasOption("autoHeight")) {
              imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1));
            }
            lazyload ? initSliderTransformStyleCheck() : raf(function() {
              imgsLoadedCheck(arrayFromNodeList(imgs), initSliderTransformStyleCheck);
            });
          } else {
            if (carousel) {
              doContainerTransformSilent();
            }
            initTools();
            initEvents();
          }
        }
        function initSliderTransformStyleCheck() {
          if (autoWidth && slideCount > 1) {
            var num = loop ? index : slideCount - 1;
            (function stylesApplicationCheck() {
              var left = slideItems[num].getBoundingClientRect().left;
              var right = slideItems[num - 1].getBoundingClientRect().right;
              Math.abs(left - right) <= 1 ? initSliderTransformCore() : setTimeout(function() {
                stylesApplicationCheck();
              }, 16);
            })();
          } else {
            initSliderTransformCore();
          }
        }
        function initSliderTransformCore() {
          if (!horizontal || autoWidth) {
            setSlidePositions();
            if (autoWidth) {
              rightBoundary = getRightBoundary();
              if (freezable) {
                freeze = getFreeze();
              }
              indexMax = getIndexMax();
              resetVariblesWhenDisable(disable || freeze);
            } else {
              updateContentWrapperHeight();
            }
          }
          if (carousel) {
            doContainerTransformSilent();
          }
          initTools();
          initEvents();
        }
        function initSheet() {
          if (!carousel) {
            for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
              var item = slideItems[i];
              item.style.left = (i - index) * 100 / items + "%";
              addClass(item, animateIn);
              removeClass(item, animateNormal);
            }
          }
          if (horizontal) {
            if (PERCENTAGELAYOUT || autoWidth) {
              addCSSRule(sheet, "#" + slideId + " > .tns-item", "font-size:" + win2.getComputedStyle(slideItems[0]).fontSize + ";", getCssRulesLength(sheet));
              addCSSRule(sheet, "#" + slideId, "font-size:0;", getCssRulesLength(sheet));
            } else if (carousel) {
              forEach(slideItems, function(slide, i2) {
                slide.style.marginLeft = getSlideMarginLeft(i2);
              });
            }
          }
          if (CSSMQ) {
            if (TRANSITIONDURATION) {
              var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : "";
              addCSSRule(sheet, "#" + slideId + "-mw", str, getCssRulesLength(sheet));
            }
            str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
            addCSSRule(sheet, "#" + slideId + "-iw", str, getCssRulesLength(sheet));
            if (carousel) {
              str = horizontal && !autoWidth ? "width:" + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ";" : "";
              if (TRANSITIONDURATION) {
                str += getTransitionDurationStyle(speed);
              }
              addCSSRule(sheet, "#" + slideId, str, getCssRulesLength(sheet));
            }
            str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : "";
            if (options.gutter) {
              str += getSlideGutterStyle(options.gutter);
            }
            if (!carousel) {
              if (TRANSITIONDURATION) {
                str += getTransitionDurationStyle(speed);
              }
              if (ANIMATIONDURATION) {
                str += getAnimationDurationStyle(speed);
              }
            }
            if (str) {
              addCSSRule(sheet, "#" + slideId + " > .tns-item", str, getCssRulesLength(sheet));
            }
          } else {
            update_carousel_transition_duration();
            innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);
            if (carousel && horizontal && !autoWidth) {
              container.style.width = getContainerWidth(fixedWidth, gutter, items);
            }
            var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : "";
            if (gutter) {
              str += getSlideGutterStyle(gutter);
            }
            if (str) {
              addCSSRule(sheet, "#" + slideId + " > .tns-item", str, getCssRulesLength(sheet));
            }
          }
          if (responsive && CSSMQ) {
            for (var bp in responsive) {
              bp = parseInt(bp);
              var opts2 = responsive[bp], str = "", middleWrapperStr = "", innerWrapperStr = "", containerStr = "", slideStr = "", itemsBP = !autoWidth ? getOption("items", bp) : null, fixedWidthBP = getOption("fixedWidth", bp), speedBP = getOption("speed", bp), edgePaddingBP = getOption("edgePadding", bp), autoHeightBP = getOption("autoHeight", bp), gutterBP = getOption("gutter", bp);
              if (TRANSITIONDURATION && middleWrapper && getOption("autoHeight", bp) && "speed" in opts2) {
                middleWrapperStr = "#" + slideId + "-mw{" + getTransitionDurationStyle(speedBP) + "}";
              }
              if ("edgePadding" in opts2 || "gutter" in opts2) {
                innerWrapperStr = "#" + slideId + "-iw{" + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + "}";
              }
              if (carousel && horizontal && !autoWidth && ("fixedWidth" in opts2 || "items" in opts2 || fixedWidth && "gutter" in opts2)) {
                containerStr = "width:" + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ";";
              }
              if (TRANSITIONDURATION && "speed" in opts2) {
                containerStr += getTransitionDurationStyle(speedBP);
              }
              if (containerStr) {
                containerStr = "#" + slideId + "{" + containerStr + "}";
              }
              if ("fixedWidth" in opts2 || fixedWidth && "gutter" in opts2 || !carousel && "items" in opts2) {
                slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
              }
              if ("gutter" in opts2) {
                slideStr += getSlideGutterStyle(gutterBP);
              }
              if (!carousel && "speed" in opts2) {
                if (TRANSITIONDURATION) {
                  slideStr += getTransitionDurationStyle(speedBP);
                }
                if (ANIMATIONDURATION) {
                  slideStr += getAnimationDurationStyle(speedBP);
                }
              }
              if (slideStr) {
                slideStr = "#" + slideId + " > .tns-item{" + slideStr + "}";
              }
              str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;
              if (str) {
                sheet.insertRule("@media (min-width: " + bp / 16 + "em) {" + str + "}", sheet.cssRules.length);
              }
            }
          }
        }
        function initTools() {
          updateSlideStatus();
          outerWrapper.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + "</span>  of " + slideCount + "</div>");
          liveregionCurrent = outerWrapper.querySelector(".tns-liveregion .current");
          if (hasAutoplay) {
            var txt = autoplay ? "stop" : "start";
            if (autoplayButton) {
              setAttrs(autoplayButton, {
                "data-action": txt
              });
            } else if (options.autoplayButtonOutput) {
              outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button type="button" data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + "</button>");
              autoplayButton = outerWrapper.querySelector("[data-action]");
            }
            if (autoplayButton) {
              addEvents(autoplayButton, {
                "click": toggleAutoplay
              });
            }
            if (autoplay) {
              startAutoplay();
              if (autoplayHoverPause) {
                addEvents(container, hoverEvents);
              }
              if (autoplayResetOnVisibility) {
                addEvents(container, visibilityEvent);
              }
            }
          }
          if (hasNav) {
            if (navContainer) {
              setAttrs(navContainer, {
                "aria-label": "Carousel Pagination"
              });
              navItems = navContainer.children;
              forEach(navItems, function(item, i2) {
                setAttrs(item, {
                  "data-nav": i2,
                  "tabindex": "-1",
                  "aria-label": navStr + (i2 + 1),
                  "aria-controls": slideId
                });
              });
            } else {
              var navHtml = "", hiddenStr = navAsThumbnails ? "" : 'style="display:none"';
              for (var i = 0; i < slideCount; i++) {
                navHtml += '<button type="button" data-nav="' + i + '" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) + '"></button>';
              }
              navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + "</div>";
              outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);
              navContainer = outerWrapper.querySelector(".tns-nav");
              navItems = navContainer.children;
            }
            updateNavVisibility();
            if (TRANSITIONDURATION) {
              var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(), str = "transition: all " + speed / 1e3 + "s";
              if (prefix) {
                str = "-" + prefix + "-" + str;
              }
              addCSSRule(sheet, "[aria-controls^=" + slideId + "-item]", str, getCssRulesLength(sheet));
            }
            setAttrs(navItems[navCurrentIndex], {
              "aria-label": navStr + (navCurrentIndex + 1) + navStrCurrent
            });
            removeAttrs(navItems[navCurrentIndex], "tabindex");
            addClass(navItems[navCurrentIndex], navActiveClass);
            addEvents(navContainer, navEvents);
          }
          if (hasControls) {
            if (!controlsContainer && (!prevButton || !nextButton)) {
              outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[1] + "</button></div>");
              controlsContainer = outerWrapper.querySelector(".tns-controls");
            }
            if (!prevButton || !nextButton) {
              prevButton = controlsContainer.children[0];
              nextButton = controlsContainer.children[1];
            }
            if (options.controlsContainer) {
              setAttrs(controlsContainer, {
                "aria-label": "Carousel Navigation",
                "tabindex": "0"
              });
            }
            if (options.controlsContainer || options.prevButton && options.nextButton) {
              setAttrs([prevButton, nextButton], {
                "aria-controls": slideId,
                "tabindex": "-1"
              });
            }
            if (options.controlsContainer || options.prevButton && options.nextButton) {
              setAttrs(prevButton, {
                "data-controls": "prev"
              });
              setAttrs(nextButton, {
                "data-controls": "next"
              });
            }
            prevIsButton = isButton(prevButton);
            nextIsButton = isButton(nextButton);
            updateControlsStatus();
            if (controlsContainer) {
              addEvents(controlsContainer, controlsEvents);
            } else {
              addEvents(prevButton, controlsEvents);
              addEvents(nextButton, controlsEvents);
            }
          }
          disableUI();
        }
        function initEvents() {
          if (carousel && TRANSITIONEND) {
            var eve = {};
            eve[TRANSITIONEND] = onTransitionEnd;
            addEvents(container, eve);
          }
          if (touch) {
            addEvents(container, touchEvents, options.preventScrollOnTouch);
          }
          if (mouseDrag) {
            addEvents(container, dragEvents);
          }
          if (arrowKeys) {
            addEvents(doc, docmentKeydownEvent);
          }
          if (nested === "inner") {
            events.on("outerResized", function() {
              resizeTasks();
              events.emit("innerLoaded", info());
            });
          } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
            addEvents(win2, {
              "resize": onResize
            });
          }
          if (autoHeight) {
            if (nested === "outer") {
              events.on("innerLoaded", doAutoHeight);
            } else if (!disable) {
              doAutoHeight();
            }
          }
          doLazyLoad();
          if (disable) {
            disableSlider();
          } else if (freeze) {
            freezeSlider();
          }
          events.on("indexChanged", additionalUpdates);
          if (nested === "inner") {
            events.emit("innerLoaded", info());
          }
          if (typeof onInit === "function") {
            onInit(info());
          }
          isOn = true;
        }
        function destroy() {
          sheet.disabled = true;
          if (sheet.ownerNode) {
            sheet.ownerNode.remove();
          }
          removeEvents(win2, {
            "resize": onResize
          });
          if (arrowKeys) {
            removeEvents(doc, docmentKeydownEvent);
          }
          if (controlsContainer) {
            removeEvents(controlsContainer, controlsEvents);
          }
          if (navContainer) {
            removeEvents(navContainer, navEvents);
          }
          removeEvents(container, hoverEvents);
          removeEvents(container, visibilityEvent);
          if (autoplayButton) {
            removeEvents(autoplayButton, {
              "click": toggleAutoplay
            });
          }
          if (autoplay) {
            clearInterval(autoplayTimer);
          }
          if (carousel && TRANSITIONEND) {
            var eve = {};
            eve[TRANSITIONEND] = onTransitionEnd;
            removeEvents(container, eve);
          }
          if (touch) {
            removeEvents(container, touchEvents);
          }
          if (mouseDrag) {
            removeEvents(container, dragEvents);
          }
          var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];
          tnsList.forEach(function(item, i) {
            var el = item === "container" ? outerWrapper : options[item];
            if (typeof el === "object" && el) {
              var prevEl = el.previousElementSibling ? el.previousElementSibling : false, parentEl = el.parentNode;
              el.outerHTML = htmlList[i];
              options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
            }
          });
          tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = panStart = rafIndex = getDist = touch = mouseDrag = null;
          for (var a in this) {
            if (a !== "rebuild") {
              this[a] = null;
            }
          }
          isOn = false;
        }
        function onResize(e) {
          raf(function() {
            resizeTasks(getEvent(e));
          });
        }
        function resizeTasks(e) {
          if (!isOn) {
            return;
          }
          if (nested === "outer") {
            events.emit("outerResized", info(e));
          }
          windowWidth = getWindowWidth();
          var bpChanged, breakpointZoneTem = breakpointZone, needContainerTransform = false;
          if (responsive) {
            setBreakpointZone();
            bpChanged = breakpointZoneTem !== breakpointZone;
            if (bpChanged) {
              events.emit("newBreakpointStart", info(e));
            }
          }
          var indChanged, itemsChanged, itemsTem = items, disableTem = disable, freezeTem = freeze, arrowKeysTem = arrowKeys, controlsTem = controls, navTem = nav, touchTem = touch, mouseDragTem = mouseDrag, autoplayTem = autoplay, autoplayHoverPauseTem = autoplayHoverPause, autoplayResetOnVisibilityTem = autoplayResetOnVisibility, indexTem = index;
          if (bpChanged) {
            var fixedWidthTem = fixedWidth, autoHeightTem = autoHeight, controlsTextTem = controlsText, centerTem = center, autoplayTextTem = autoplayText;
            if (!CSSMQ) {
              var gutterTem = gutter, edgePaddingTem = edgePadding;
            }
          }
          arrowKeys = getOption("arrowKeys");
          controls = getOption("controls");
          nav = getOption("nav");
          touch = getOption("touch");
          center = getOption("center");
          mouseDrag = getOption("mouseDrag");
          autoplay = getOption("autoplay");
          autoplayHoverPause = getOption("autoplayHoverPause");
          autoplayResetOnVisibility = getOption("autoplayResetOnVisibility");
          if (bpChanged) {
            disable = getOption("disable");
            fixedWidth = getOption("fixedWidth");
            speed = getOption("speed");
            autoHeight = getOption("autoHeight");
            controlsText = getOption("controlsText");
            autoplayText = getOption("autoplayText");
            autoplayTimeout = getOption("autoplayTimeout");
            if (!CSSMQ) {
              edgePadding = getOption("edgePadding");
              gutter = getOption("gutter");
            }
          }
          resetVariblesWhenDisable(disable);
          viewport = getViewportWidth();
          if ((!horizontal || autoWidth) && !disable) {
            setSlidePositions();
            if (!horizontal) {
              updateContentWrapperHeight();
              needContainerTransform = true;
            }
          }
          if (fixedWidth || autoWidth) {
            rightBoundary = getRightBoundary();
            indexMax = getIndexMax();
          }
          if (bpChanged || fixedWidth) {
            items = getOption("items");
            slideBy = getOption("slideBy");
            itemsChanged = items !== itemsTem;
            if (itemsChanged) {
              if (!fixedWidth && !autoWidth) {
                indexMax = getIndexMax();
              }
              updateIndex();
            }
          }
          if (bpChanged) {
            if (disable !== disableTem) {
              if (disable) {
                disableSlider();
              } else {
                enableSlider();
              }
            }
          }
          if (freezable && (bpChanged || fixedWidth || autoWidth)) {
            freeze = getFreeze();
            if (freeze !== freezeTem) {
              if (freeze) {
                doContainerTransform(getContainerTransformValue(getStartIndex(0)));
                freezeSlider();
              } else {
                unfreezeSlider();
                needContainerTransform = true;
              }
            }
          }
          resetVariblesWhenDisable(disable || freeze);
          if (!autoplay) {
            autoplayHoverPause = autoplayResetOnVisibility = false;
          }
          if (arrowKeys !== arrowKeysTem) {
            arrowKeys ? addEvents(doc, docmentKeydownEvent) : removeEvents(doc, docmentKeydownEvent);
          }
          if (controls !== controlsTem) {
            if (controls) {
              if (controlsContainer) {
                showElement(controlsContainer);
              } else {
                if (prevButton) {
                  showElement(prevButton);
                }
                if (nextButton) {
                  showElement(nextButton);
                }
              }
            } else {
              if (controlsContainer) {
                hideElement(controlsContainer);
              } else {
                if (prevButton) {
                  hideElement(prevButton);
                }
                if (nextButton) {
                  hideElement(nextButton);
                }
              }
            }
          }
          if (nav !== navTem) {
            if (nav) {
              showElement(navContainer);
              updateNavVisibility();
            } else {
              hideElement(navContainer);
            }
          }
          if (touch !== touchTem) {
            touch ? addEvents(container, touchEvents, options.preventScrollOnTouch) : removeEvents(container, touchEvents);
          }
          if (mouseDrag !== mouseDragTem) {
            mouseDrag ? addEvents(container, dragEvents) : removeEvents(container, dragEvents);
          }
          if (autoplay !== autoplayTem) {
            if (autoplay) {
              if (autoplayButton) {
                showElement(autoplayButton);
              }
              if (!animating && !autoplayUserPaused) {
                startAutoplay();
              }
            } else {
              if (autoplayButton) {
                hideElement(autoplayButton);
              }
              if (animating) {
                stopAutoplay();
              }
            }
          }
          if (autoplayHoverPause !== autoplayHoverPauseTem) {
            autoplayHoverPause ? addEvents(container, hoverEvents) : removeEvents(container, hoverEvents);
          }
          if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
            autoplayResetOnVisibility ? addEvents(doc, visibilityEvent) : removeEvents(doc, visibilityEvent);
          }
          if (bpChanged) {
            if (fixedWidth !== fixedWidthTem || center !== centerTem) {
              needContainerTransform = true;
            }
            if (autoHeight !== autoHeightTem) {
              if (!autoHeight) {
                innerWrapper.style.height = "";
              }
            }
            if (controls && controlsText !== controlsTextTem) {
              prevButton.innerHTML = controlsText[0];
              nextButton.innerHTML = controlsText[1];
            }
            if (autoplayButton && autoplayText !== autoplayTextTem) {
              var i = autoplay ? 1 : 0, html = autoplayButton.innerHTML, len = html.length - autoplayTextTem[i].length;
              if (html.substring(len) === autoplayTextTem[i]) {
                autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
              }
            }
          } else {
            if (center && (fixedWidth || autoWidth)) {
              needContainerTransform = true;
            }
          }
          if (itemsChanged || fixedWidth && !autoWidth) {
            pages = getPages();
            updateNavVisibility();
          }
          indChanged = index !== indexTem;
          if (indChanged) {
            events.emit("indexChanged", info());
            needContainerTransform = true;
          } else if (itemsChanged) {
            if (!indChanged) {
              additionalUpdates();
            }
          } else if (fixedWidth || autoWidth) {
            doLazyLoad();
            updateSlideStatus();
            updateLiveRegion();
          }
          if (itemsChanged && !carousel) {
            updateGallerySlidePositions();
          }
          if (!disable && !freeze) {
            if (bpChanged && !CSSMQ) {
              if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
                innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
              }
              if (horizontal) {
                if (carousel) {
                  container.style.width = getContainerWidth(fixedWidth, gutter, items);
                }
                var str = getSlideWidthStyle(fixedWidth, gutter, items) + getSlideGutterStyle(gutter);
                removeCSSRule(sheet, getCssRulesLength(sheet) - 1);
                addCSSRule(sheet, "#" + slideId + " > .tns-item", str, getCssRulesLength(sheet));
              }
            }
            if (autoHeight) {
              doAutoHeight();
            }
            if (needContainerTransform) {
              doContainerTransformSilent();
              indexCached = index;
            }
          }
          if (bpChanged) {
            events.emit("newBreakpointEnd", info(e));
          }
        }
        function getFreeze() {
          if (!fixedWidth && !autoWidth) {
            var a = center ? items - (items - 1) / 2 : items;
            return slideCount <= a;
          }
          var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount], vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;
          if (center) {
            vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
          }
          return width <= vp;
        }
        function setBreakpointZone() {
          breakpointZone = 0;
          for (var bp in responsive) {
            bp = parseInt(bp);
            if (windowWidth >= bp) {
              breakpointZone = bp;
            }
          }
        }
        var updateIndex = function() {
          return loop ? carousel ? function() {
            var leftEdge = indexMin, rightEdge = indexMax;
            leftEdge += slideBy;
            rightEdge -= slideBy;
            if (edgePadding) {
              leftEdge += 1;
              rightEdge -= 1;
            } else if (fixedWidth) {
              if ((viewport + gutter) % (fixedWidth + gutter)) {
                rightEdge -= 1;
              }
            }
            if (cloneCount) {
              if (index > rightEdge) {
                index -= slideCount;
              } else if (index < leftEdge) {
                index += slideCount;
              }
            }
          } : function() {
            if (index > indexMax) {
              while (index >= indexMin + slideCount) {
                index -= slideCount;
              }
            } else if (index < indexMin) {
              while (index <= indexMax - slideCount) {
                index += slideCount;
              }
            }
          } : function() {
            index = Math.max(indexMin, Math.min(indexMax, index));
          };
        }();
        function disableUI() {
          if (!autoplay && autoplayButton) {
            hideElement(autoplayButton);
          }
          if (!nav && navContainer) {
            hideElement(navContainer);
          }
          if (!controls) {
            if (controlsContainer) {
              hideElement(controlsContainer);
            } else {
              if (prevButton) {
                hideElement(prevButton);
              }
              if (nextButton) {
                hideElement(nextButton);
              }
            }
          }
        }
        function enableUI() {
          if (autoplay && autoplayButton) {
            showElement(autoplayButton);
          }
          if (nav && navContainer) {
            showElement(navContainer);
          }
          if (controls) {
            if (controlsContainer) {
              showElement(controlsContainer);
            } else {
              if (prevButton) {
                showElement(prevButton);
              }
              if (nextButton) {
                showElement(nextButton);
              }
            }
          }
        }
        function freezeSlider() {
          if (frozen) {
            return;
          }
          if (edgePadding) {
            innerWrapper.style.margin = "0px";
          }
          if (cloneCount) {
            var str = "tns-transparent";
            for (var i = cloneCount; i--; ) {
              if (carousel) {
                addClass(slideItems[i], str);
              }
              addClass(slideItems[slideCountNew - i - 1], str);
            }
          }
          disableUI();
          frozen = true;
        }
        function unfreezeSlider() {
          if (!frozen) {
            return;
          }
          if (edgePadding && CSSMQ) {
            innerWrapper.style.margin = "";
          }
          if (cloneCount) {
            var str = "tns-transparent";
            for (var i = cloneCount; i--; ) {
              if (carousel) {
                removeClass(slideItems[i], str);
              }
              removeClass(slideItems[slideCountNew - i - 1], str);
            }
          }
          enableUI();
          frozen = false;
        }
        function disableSlider() {
          if (disabled) {
            return;
          }
          sheet.disabled = true;
          container.className = container.className.replace(newContainerClasses.substring(1), "");
          removeAttrs(container, ["style"]);
          if (loop) {
            for (var j = cloneCount; j--; ) {
              if (carousel) {
                hideElement(slideItems[j]);
              }
              hideElement(slideItems[slideCountNew - j - 1]);
            }
          }
          if (!horizontal || !carousel) {
            removeAttrs(innerWrapper, ["style"]);
          }
          if (!carousel) {
            for (var i = index, l = index + slideCount; i < l; i++) {
              var item = slideItems[i];
              removeAttrs(item, ["style"]);
              removeClass(item, animateIn);
              removeClass(item, animateNormal);
            }
          }
          disableUI();
          disabled = true;
        }
        function enableSlider() {
          if (!disabled) {
            return;
          }
          sheet.disabled = false;
          container.className += newContainerClasses;
          doContainerTransformSilent();
          if (loop) {
            for (var j = cloneCount; j--; ) {
              if (carousel) {
                showElement(slideItems[j]);
              }
              showElement(slideItems[slideCountNew - j - 1]);
            }
          }
          if (!carousel) {
            for (var i = index, l = index + slideCount; i < l; i++) {
              var item = slideItems[i], classN = i < index + items ? animateIn : animateNormal;
              item.style.left = (i - index) * 100 / items + "%";
              addClass(item, classN);
            }
          }
          enableUI();
          disabled = false;
        }
        function updateLiveRegion() {
          var str = getLiveRegionStr();
          if (liveregionCurrent.innerHTML !== str) {
            liveregionCurrent.innerHTML = str;
          }
        }
        function getLiveRegionStr() {
          var arr = getVisibleSlideRange(), start = arr[0] + 1, end = arr[1] + 1;
          return start === end ? start + "" : start + " to " + end;
        }
        function getVisibleSlideRange(val2) {
          if (val2 == null) {
            val2 = getContainerTransformValue();
          }
          var start = index, end, rangestart, rangeend;
          if (center || edgePadding) {
            if (autoWidth || fixedWidth) {
              rangestart = -(parseFloat(val2) + edgePadding);
              rangeend = rangestart + viewport + edgePadding * 2;
            }
          } else {
            if (autoWidth) {
              rangestart = slidePositions[index];
              rangeend = rangestart + viewport;
            }
          }
          if (autoWidth) {
            slidePositions.forEach(function(point, i) {
              if (i < slideCountNew) {
                if ((center || edgePadding) && point <= rangestart + 0.5) {
                  start = i;
                }
                if (rangeend - point >= 0.5) {
                  end = i;
                }
              }
            });
          } else {
            if (fixedWidth) {
              var cell = fixedWidth + gutter;
              if (center || edgePadding) {
                start = Math.floor(rangestart / cell);
                end = Math.ceil(rangeend / cell - 1);
              } else {
                end = start + Math.ceil(viewport / cell) - 1;
              }
            } else {
              if (center || edgePadding) {
                var a = items - 1;
                if (center) {
                  start -= a / 2;
                  end = index + a / 2;
                } else {
                  end = index + a;
                }
                if (edgePadding) {
                  var b = edgePadding * items / viewport;
                  start -= b;
                  end += b;
                }
                start = Math.floor(start);
                end = Math.ceil(end);
              } else {
                end = start + items - 1;
              }
            }
            start = Math.max(start, 0);
            end = Math.min(end, slideCountNew - 1);
          }
          return [start, end];
        }
        function doLazyLoad() {
          if (lazyload && !disable) {
            var arg = getVisibleSlideRange();
            arg.push(lazyloadSelector);
            getImageArray.apply(null, arg).forEach(function(img) {
              if (!hasClass(img, imgCompleteClass)) {
                var eve = {};
                eve[TRANSITIONEND] = function(e) {
                  e.stopPropagation();
                };
                addEvents(img, eve);
                addEvents(img, imgEvents);
                img.src = getAttr(img, "data-src");
                var srcset = getAttr(img, "data-srcset");
                if (srcset) {
                  img.srcset = srcset;
                }
                addClass(img, "loading");
              }
            });
          }
        }
        function onImgLoaded(e) {
          imgLoaded(getTarget(e));
        }
        function onImgFailed(e) {
          imgFailed(getTarget(e));
        }
        function imgLoaded(img) {
          addClass(img, "loaded");
          imgCompleted(img);
        }
        function imgFailed(img) {
          addClass(img, "failed");
          imgCompleted(img);
        }
        function imgCompleted(img) {
          addClass(img, imgCompleteClass);
          removeClass(img, "loading");
          removeEvents(img, imgEvents);
        }
        function getImageArray(start, end, imgSelector) {
          var imgs = [];
          if (!imgSelector) {
            imgSelector = "img";
          }
          while (start <= end) {
            forEach(slideItems[start].querySelectorAll(imgSelector), function(img) {
              imgs.push(img);
            });
            start++;
          }
          return imgs;
        }
        function doAutoHeight() {
          var imgs = getImageArray.apply(null, getVisibleSlideRange());
          raf(function() {
            imgsLoadedCheck(imgs, updateInnerWrapperHeight);
          });
        }
        function imgsLoadedCheck(imgs, cb) {
          if (imgsComplete) {
            return cb();
          }
          imgs.forEach(function(img, index2) {
            if (!lazyload && img.complete) {
              imgCompleted(img);
            }
            if (hasClass(img, imgCompleteClass)) {
              imgs.splice(index2, 1);
            }
          });
          if (!imgs.length) {
            return cb();
          }
          raf(function() {
            imgsLoadedCheck(imgs, cb);
          });
        }
        function additionalUpdates() {
          doLazyLoad();
          updateSlideStatus();
          updateLiveRegion();
          updateControlsStatus();
          updateNavStatus();
        }
        function update_carousel_transition_duration() {
          if (carousel && autoHeight) {
            middleWrapper.style[TRANSITIONDURATION] = speed / 1e3 + "s";
          }
        }
        function getMaxSlideHeight(slideStart, slideRange) {
          var heights = [];
          for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
            heights.push(slideItems[i].offsetHeight);
          }
          return Math.max.apply(null, heights);
        }
        function updateInnerWrapperHeight() {
          var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount), wp = middleWrapper ? middleWrapper : innerWrapper;
          if (wp.style.height !== maxHeight) {
            wp.style.height = maxHeight + "px";
          }
        }
        function setSlidePositions() {
          slidePositions = [0];
          var attr = horizontal ? "left" : "top", attr2 = horizontal ? "right" : "bottom", base = slideItems[0].getBoundingClientRect()[attr];
          forEach(slideItems, function(item, i) {
            if (i) {
              slidePositions.push(item.getBoundingClientRect()[attr] - base);
            }
            if (i === slideCountNew - 1) {
              slidePositions.push(item.getBoundingClientRect()[attr2] - base);
            }
          });
        }
        function updateSlideStatus() {
          var range = getVisibleSlideRange(), start = range[0], end = range[1];
          forEach(slideItems, function(item, i) {
            if (i >= start && i <= end) {
              if (hasAttr(item, "aria-hidden")) {
                removeAttrs(item, ["aria-hidden", "tabindex"]);
                addClass(item, slideActiveClass);
              }
            } else {
              if (!hasAttr(item, "aria-hidden")) {
                setAttrs(item, {
                  "aria-hidden": "true",
                  "tabindex": "-1"
                });
                removeClass(item, slideActiveClass);
              }
            }
          });
        }
        function updateGallerySlidePositions() {
          var l = index + Math.min(slideCount, items);
          for (var i = slideCountNew; i--; ) {
            var item = slideItems[i];
            if (i >= index && i < l) {
              addClass(item, "tns-moving");
              item.style.left = (i - index) * 100 / items + "%";
              addClass(item, animateIn);
              removeClass(item, animateNormal);
            } else if (item.style.left) {
              item.style.left = "";
              addClass(item, animateNormal);
              removeClass(item, animateIn);
            }
            removeClass(item, animateOut);
          }
          setTimeout(function() {
            forEach(slideItems, function(el) {
              removeClass(el, "tns-moving");
            });
          }, 300);
        }
        function updateNavStatus() {
          if (nav) {
            navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
            navClicked = -1;
            if (navCurrentIndex !== navCurrentIndexCached) {
              var navPrev = navItems[navCurrentIndexCached], navCurrent = navItems[navCurrentIndex];
              setAttrs(navPrev, {
                "tabindex": "-1",
                "aria-label": navStr + (navCurrentIndexCached + 1)
              });
              removeClass(navPrev, navActiveClass);
              setAttrs(navCurrent, {
                "aria-label": navStr + (navCurrentIndex + 1) + navStrCurrent
              });
              removeAttrs(navCurrent, "tabindex");
              addClass(navCurrent, navActiveClass);
              navCurrentIndexCached = navCurrentIndex;
            }
          }
        }
        function getLowerCaseNodeName(el) {
          return el.nodeName.toLowerCase();
        }
        function isButton(el) {
          return getLowerCaseNodeName(el) === "button";
        }
        function isAriaDisabled(el) {
          return el.getAttribute("aria-disabled") === "true";
        }
        function disEnableElement(isButton2, el, val2) {
          if (isButton2) {
            el.disabled = val2;
          } else {
            el.setAttribute("aria-disabled", val2.toString());
          }
        }
        function updateControlsStatus() {
          if (!controls || rewind || loop) {
            return;
          }
          var prevDisabled = prevIsButton ? prevButton.disabled : isAriaDisabled(prevButton), nextDisabled = nextIsButton ? nextButton.disabled : isAriaDisabled(nextButton), disablePrev = index <= indexMin ? true : false, disableNext = !rewind && index >= indexMax ? true : false;
          if (disablePrev && !prevDisabled) {
            disEnableElement(prevIsButton, prevButton, true);
          }
          if (!disablePrev && prevDisabled) {
            disEnableElement(prevIsButton, prevButton, false);
          }
          if (disableNext && !nextDisabled) {
            disEnableElement(nextIsButton, nextButton, true);
          }
          if (!disableNext && nextDisabled) {
            disEnableElement(nextIsButton, nextButton, false);
          }
        }
        function resetDuration(el, str) {
          if (TRANSITIONDURATION) {
            el.style[TRANSITIONDURATION] = str;
          }
        }
        function getSliderWidth() {
          return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
        }
        function getCenterGap(num) {
          if (num == null) {
            num = index;
          }
          var gap = edgePadding ? gutter : 0;
          return autoWidth ? (viewport - gap - (slidePositions[num + 1] - slidePositions[num] - gutter)) / 2 : fixedWidth ? (viewport - fixedWidth) / 2 : (items - 1) / 2;
        }
        function getRightBoundary() {
          var gap = edgePadding ? gutter : 0, result = viewport + gap - getSliderWidth();
          if (center && !loop) {
            result = fixedWidth ? -(fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() : getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
          }
          if (result > 0) {
            result = 0;
          }
          return result;
        }
        function getContainerTransformValue(num) {
          if (num == null) {
            num = index;
          }
          var val2;
          if (horizontal && !autoWidth) {
            if (fixedWidth) {
              val2 = -(fixedWidth + gutter) * num;
              if (center) {
                val2 += getCenterGap();
              }
            } else {
              var denominator = TRANSFORM ? slideCountNew : items;
              if (center) {
                num -= getCenterGap();
              }
              val2 = -num * 100 / denominator;
            }
          } else {
            val2 = -slidePositions[num];
            if (center && autoWidth) {
              val2 += getCenterGap();
            }
          }
          if (hasRightDeadZone) {
            val2 = Math.max(val2, rightBoundary);
          }
          val2 += horizontal && !autoWidth && !fixedWidth ? "%" : "px";
          return val2;
        }
        function doContainerTransformSilent(val2) {
          resetDuration(container, "0s");
          doContainerTransform(val2);
        }
        function doContainerTransform(val2) {
          if (val2 == null) {
            val2 = getContainerTransformValue();
          }
          container.style[transformAttr] = transformPrefix + val2 + transformPostfix;
        }
        function animateSlide(number, classOut, classIn, isOut) {
          var l = number + items;
          if (!loop) {
            l = Math.min(l, slideCountNew);
          }
          for (var i = number; i < l; i++) {
            var item = slideItems[i];
            if (!isOut) {
              item.style.left = (i - index) * 100 / items + "%";
            }
            if (animateDelay && TRANSITIONDELAY) {
              item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1e3 + "s";
            }
            removeClass(item, classOut);
            addClass(item, classIn);
            if (isOut) {
              slideItemsOut.push(item);
            }
          }
        }
        var transformCore = function() {
          return carousel ? function() {
            resetDuration(container, "");
            if (TRANSITIONDURATION || !speed) {
              doContainerTransform();
              if (!speed || !isVisible(container)) {
                onTransitionEnd();
              }
            } else {
              jsTransform(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
            }
            if (!horizontal) {
              updateContentWrapperHeight();
            }
          } : function() {
            slideItemsOut = [];
            var eve = {};
            eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
            removeEvents(slideItems[indexCached], eve);
            addEvents(slideItems[index], eve);
            animateSlide(indexCached, animateIn, animateOut, true);
            animateSlide(index, animateNormal, animateIn);
            if (!TRANSITIONEND || !ANIMATIONEND || !speed || !isVisible(container)) {
              onTransitionEnd();
            }
          };
        }();
        function render(e, sliderMoved) {
          if (updateIndexBeforeTransform) {
            updateIndex();
          }
          if (index !== indexCached || sliderMoved) {
            events.emit("indexChanged", info());
            events.emit("transitionStart", info());
            if (autoHeight) {
              doAutoHeight();
            }
            if (animating && e && ["click", "keydown"].indexOf(e.type) >= 0) {
              stopAutoplay();
            }
            running = true;
            transformCore();
          }
        }
        function strTrans(str) {
          return str.toLowerCase().replace(/-/g, "");
        }
        function onTransitionEnd(event) {
          if (carousel || running) {
            events.emit("transitionEnd", info(event));
            if (!carousel && slideItemsOut.length > 0) {
              for (var i = 0; i < slideItemsOut.length; i++) {
                var item = slideItemsOut[i];
                item.style.left = "";
                if (ANIMATIONDELAY && TRANSITIONDELAY) {
                  item.style[ANIMATIONDELAY] = "";
                  item.style[TRANSITIONDELAY] = "";
                }
                removeClass(item, animateOut);
                addClass(item, animateNormal);
              }
            }
            if (!event || !carousel && event.target.parentNode === container || event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {
              if (!updateIndexBeforeTransform) {
                var indexTem = index;
                updateIndex();
                if (index !== indexTem) {
                  events.emit("indexChanged", info());
                  doContainerTransformSilent();
                }
              }
              if (nested === "inner") {
                events.emit("innerLoaded", info());
              }
              running = false;
              indexCached = index;
            }
          }
        }
        function goTo(targetIndex, e) {
          if (freeze) {
            return;
          }
          if (targetIndex === "prev") {
            onControlsClick(e, -1);
          } else if (targetIndex === "next") {
            onControlsClick(e, 1);
          } else {
            if (running) {
              if (preventActionWhenRunning) {
                return;
              } else {
                onTransitionEnd();
              }
            }
            var absIndex = getAbsIndex(), indexGap = 0;
            if (targetIndex === "first") {
              indexGap = -absIndex;
            } else if (targetIndex === "last") {
              indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
            } else {
              if (typeof targetIndex !== "number") {
                targetIndex = parseInt(targetIndex);
              }
              if (!isNaN(targetIndex)) {
                if (!e) {
                  targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex));
                }
                indexGap = targetIndex - absIndex;
              }
            }
            if (!carousel && indexGap && Math.abs(indexGap) < items) {
              var factor = indexGap > 0 ? 1 : -1;
              indexGap += index + indexGap - slideCount >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
            }
            index += indexGap;
            if (carousel && loop) {
              if (index < indexMin) {
                index += slideCount;
              }
              if (index > indexMax) {
                index -= slideCount;
              }
            }
            if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
              render(e);
            }
          }
        }
        function onControlsClick(e, dir) {
          if (running) {
            if (preventActionWhenRunning) {
              return;
            } else {
              onTransitionEnd();
            }
          }
          var passEventObject;
          if (!dir) {
            e = getEvent(e);
            var target = getTarget(e);
            while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) {
              target = target.parentNode;
            }
            var targetIn = [prevButton, nextButton].indexOf(target);
            if (targetIn >= 0) {
              passEventObject = true;
              dir = targetIn === 0 ? -1 : 1;
            }
          }
          if (rewind) {
            if (index === indexMin && dir === -1) {
              goTo("last", e);
              return;
            } else if (index === indexMax && dir === 1) {
              goTo("first", e);
              return;
            }
          }
          if (dir) {
            index += slideBy * dir;
            if (autoWidth) {
              index = Math.floor(index);
            }
            render(passEventObject || e && e.type === "keydown" ? e : null);
          }
        }
        function onNavClick(e) {
          if (running) {
            if (preventActionWhenRunning) {
              return;
            } else {
              onTransitionEnd();
            }
          }
          e = getEvent(e);
          var target = getTarget(e), navIndex;
          while (target !== navContainer && !hasAttr(target, "data-nav")) {
            target = target.parentNode;
          }
          if (hasAttr(target, "data-nav")) {
            var navIndex = navClicked = Number(getAttr(target, "data-nav")), targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items, targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
            goTo(targetIndex, e);
            if (navCurrentIndex === navIndex) {
              if (animating) {
                stopAutoplay();
              }
              navClicked = -1;
            }
          }
        }
        function setAutoplayTimer() {
          autoplayTimer = setInterval(function() {
            onControlsClick(null, autoplayDirection);
          }, autoplayTimeout);
          animating = true;
        }
        function stopAutoplayTimer() {
          clearInterval(autoplayTimer);
          animating = false;
        }
        function updateAutoplayButton(action, txt) {
          setAttrs(autoplayButton, {
            "data-action": action
          });
          autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
        }
        function startAutoplay() {
          setAutoplayTimer();
          if (autoplayButton) {
            updateAutoplayButton("stop", autoplayText[1]);
          }
        }
        function stopAutoplay() {
          stopAutoplayTimer();
          if (autoplayButton) {
            updateAutoplayButton("start", autoplayText[0]);
          }
        }
        function play() {
          if (autoplay && !animating) {
            startAutoplay();
            autoplayUserPaused = false;
          }
        }
        function pause() {
          if (animating) {
            stopAutoplay();
            autoplayUserPaused = true;
          }
        }
        function toggleAutoplay() {
          if (animating) {
            stopAutoplay();
            autoplayUserPaused = true;
          } else {
            startAutoplay();
            autoplayUserPaused = false;
          }
        }
        function onVisibilityChange() {
          if (doc.hidden) {
            if (animating) {
              stopAutoplayTimer();
              autoplayVisibilityPaused = true;
            }
          } else if (autoplayVisibilityPaused) {
            setAutoplayTimer();
            autoplayVisibilityPaused = false;
          }
        }
        function mouseoverPause() {
          if (animating) {
            stopAutoplayTimer();
            autoplayHoverPaused = true;
          }
        }
        function mouseoutRestart() {
          if (autoplayHoverPaused) {
            setAutoplayTimer();
            autoplayHoverPaused = false;
          }
        }
        function onDocumentKeydown(e) {
          e = getEvent(e);
          var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);
          if (keyIndex >= 0) {
            onControlsClick(e, keyIndex === 0 ? -1 : 1);
          }
        }
        function onControlsKeydown(e) {
          e = getEvent(e);
          var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);
          if (keyIndex >= 0) {
            if (keyIndex === 0) {
              if (!prevButton.disabled) {
                onControlsClick(e, -1);
              }
            } else if (!nextButton.disabled) {
              onControlsClick(e, 1);
            }
          }
        }
        function setFocus(el) {
          el.focus();
        }
        function onNavKeydown(e) {
          e = getEvent(e);
          var curElement = doc.activeElement;
          if (!hasAttr(curElement, "data-nav")) {
            return;
          }
          var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode), navIndex = Number(getAttr(curElement, "data-nav"));
          if (keyIndex >= 0) {
            if (keyIndex === 0) {
              if (navIndex > 0) {
                setFocus(navItems[navIndex - 1]);
              }
            } else if (keyIndex === 1) {
              if (navIndex < pages - 1) {
                setFocus(navItems[navIndex + 1]);
              }
            } else {
              navClicked = navIndex;
              goTo(navIndex, e);
            }
          }
        }
        function getEvent(e) {
          e = e || win2.event;
          return isTouchEvent(e) ? e.changedTouches[0] : e;
        }
        function getTarget(e) {
          return e.target || win2.event.srcElement;
        }
        function isTouchEvent(e) {
          return e.type.indexOf("touch") >= 0;
        }
        function preventDefaultBehavior(e) {
          e.preventDefault ? e.preventDefault() : e.returnValue = false;
        }
        function getMoveDirectionExpected() {
          return getTouchDirection(toDegree(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
        }
        function onPanStart(e) {
          if (running) {
            if (preventActionWhenRunning) {
              return;
            } else {
              onTransitionEnd();
            }
          }
          if (autoplay && animating) {
            stopAutoplayTimer();
          }
          panStart = true;
          if (rafIndex) {
            caf(rafIndex);
            rafIndex = null;
          }
          var $ = getEvent(e);
          events.emit(isTouchEvent(e) ? "touchStart" : "dragStart", info(e));
          if (!isTouchEvent(e) && ["img", "a"].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
            preventDefaultBehavior(e);
          }
          lastPosition.x = initPosition.x = $.clientX;
          lastPosition.y = initPosition.y = $.clientY;
          if (carousel) {
            translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ""));
            resetDuration(container, "0s");
          }
        }
        function onPanMove(e) {
          if (panStart) {
            var $ = getEvent(e);
            lastPosition.x = $.clientX;
            lastPosition.y = $.clientY;
            if (carousel) {
              if (!rafIndex) {
                rafIndex = raf(function() {
                  panUpdate(e);
                });
              }
            } else {
              if (moveDirectionExpected === "?") {
                moveDirectionExpected = getMoveDirectionExpected();
              }
              if (moveDirectionExpected) {
                preventScroll = true;
              }
            }
            if ((typeof e.cancelable !== "boolean" || e.cancelable) && preventScroll) {
              e.preventDefault();
            }
          }
        }
        function panUpdate(e) {
          if (!moveDirectionExpected) {
            panStart = false;
            return;
          }
          caf(rafIndex);
          if (panStart) {
            rafIndex = raf(function() {
              panUpdate(e);
            });
          }
          if (moveDirectionExpected === "?") {
            moveDirectionExpected = getMoveDirectionExpected();
          }
          if (moveDirectionExpected) {
            if (!preventScroll && isTouchEvent(e)) {
              preventScroll = true;
            }
            try {
              if (e.type) {
                events.emit(isTouchEvent(e) ? "touchMove" : "dragMove", info(e));
              }
            } catch (err) {
            }
            var x = translateInit, dist = getDist(lastPosition, initPosition);
            if (!horizontal || fixedWidth || autoWidth) {
              x += dist;
              x += "px";
            } else {
              var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew) : dist * 100 / (viewport + gutter);
              x += percentageX;
              x += "%";
            }
            container.style[transformAttr] = transformPrefix + x + transformPostfix;
          }
        }
        function onPanEnd(e) {
          if (panStart) {
            if (rafIndex) {
              caf(rafIndex);
              rafIndex = null;
            }
            if (carousel) {
              resetDuration(container, "");
            }
            panStart = false;
            var $ = getEvent(e);
            lastPosition.x = $.clientX;
            lastPosition.y = $.clientY;
            var dist = getDist(lastPosition, initPosition);
            if (Math.abs(dist)) {
              if (!isTouchEvent(e)) {
                var target = getTarget(e);
                addEvents(target, {
                  "click": function preventClick(e2) {
                    preventDefaultBehavior(e2);
                    removeEvents(target, {
                      "click": preventClick
                    });
                  }
                });
              }
              if (carousel) {
                rafIndex = raf(function() {
                  if (horizontal && !autoWidth) {
                    var indexMoved = -dist * items / (viewport + gutter);
                    indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
                    index += indexMoved;
                  } else {
                    var moved = -(translateInit + dist);
                    if (moved <= 0) {
                      index = indexMin;
                    } else if (moved >= slidePositions[slideCountNew - 1]) {
                      index = indexMax;
                    } else {
                      var i = 0;
                      while (i < slideCountNew && moved >= slidePositions[i]) {
                        index = i;
                        if (moved > slidePositions[i] && dist < 0) {
                          index += 1;
                        }
                        i++;
                      }
                    }
                  }
                  render(e, dist);
                  events.emit(isTouchEvent(e) ? "touchEnd" : "dragEnd", info(e));
                });
              } else {
                if (moveDirectionExpected) {
                  onControlsClick(e, dist > 0 ? -1 : 1);
                }
              }
            }
          }
          if (options.preventScrollOnTouch === "auto") {
            preventScroll = false;
          }
          if (swipeAngle) {
            moveDirectionExpected = "?";
          }
          if (autoplay && !animating) {
            setAutoplayTimer();
          }
        }
        function updateContentWrapperHeight() {
          var wp = middleWrapper ? middleWrapper : innerWrapper;
          wp.style.height = slidePositions[index + items] - slidePositions[index] + "px";
        }
        function getPages() {
          var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
          return Math.min(Math.ceil(rough), slideCount);
        }
        function updateNavVisibility() {
          if (!nav || navAsThumbnails) {
            return;
          }
          if (pages !== pagesCached) {
            var min = pagesCached, max = pages, fn = showElement;
            if (pagesCached > pages) {
              min = pages;
              max = pagesCached;
              fn = hideElement;
            }
            while (min < max) {
              fn(navItems[min]);
              min++;
            }
            pagesCached = pages;
          }
        }
        function info(e) {
          return {
            container,
            slideItems,
            navContainer,
            navItems,
            controlsContainer,
            hasControls,
            prevButton,
            nextButton,
            items,
            slideBy,
            cloneCount,
            slideCount,
            slideCountNew,
            index,
            indexCached,
            displayIndex: getCurrentSlide(),
            navCurrentIndex,
            navCurrentIndexCached,
            pages,
            pagesCached,
            sheet,
            isOn,
            event: e || {}
          };
        }
        return {
          version: "2.9.4",
          getInfo: info,
          events,
          goTo,
          play,
          pause,
          isOn,
          updateSliderHeight: updateInnerWrapperHeight,
          refresh: initSliderTransform,
          destroy,
          rebuild: function() {
            return tns3(extend(options, optionsElements));
          }
        };
      };
      exports.tns = tns3;
    }
  });

  // node_modules/bootstrap/js/dist/offcanvas.js
  var require_offcanvas = __commonJS({
    "node_modules/bootstrap/js/dist/offcanvas.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_selector_engine(), require_manipulator(), require_event_handler(), require_base_component()) : typeof define === "function" && define.amd ? define(["./dom/selector-engine", "./dom/manipulator", "./dom/event-handler", "./base-component"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Offcanvas = factory(global.SelectorEngine, global.Manipulator, global.EventHandler, global.Base));
      })(exports, function(SelectorEngine, Manipulator, EventHandler, BaseComponent) {
        "use strict";
        const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
        const SelectorEngine__default = /* @__PURE__ */ _interopDefaultLegacy(SelectorEngine);
        const Manipulator__default = /* @__PURE__ */ _interopDefaultLegacy(Manipulator);
        const EventHandler__default = /* @__PURE__ */ _interopDefaultLegacy(EventHandler);
        const BaseComponent__default = /* @__PURE__ */ _interopDefaultLegacy(BaseComponent);
        const MILLISECONDS_MULTIPLIER = 1e3;
        const TRANSITION_END = "transitionend";
        const toType = (obj) => {
          if (obj === null || obj === void 0) {
            return `${obj}`;
          }
          return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
        };
        const getSelector = (element) => {
          let selector = element.getAttribute("data-bs-target");
          if (!selector || selector === "#") {
            let hrefAttr = element.getAttribute("href");
            if (!hrefAttr || !hrefAttr.includes("#") && !hrefAttr.startsWith(".")) {
              return null;
            }
            if (hrefAttr.includes("#") && !hrefAttr.startsWith("#")) {
              hrefAttr = `#${hrefAttr.split("#")[1]}`;
            }
            selector = hrefAttr && hrefAttr !== "#" ? hrefAttr.trim() : null;
          }
          return selector;
        };
        const getElementFromSelector = (element) => {
          const selector = getSelector(element);
          return selector ? document.querySelector(selector) : null;
        };
        const getTransitionDurationFromElement = (element) => {
          if (!element) {
            return 0;
          }
          let {
            transitionDuration,
            transitionDelay
          } = window.getComputedStyle(element);
          const floatTransitionDuration = Number.parseFloat(transitionDuration);
          const floatTransitionDelay = Number.parseFloat(transitionDelay);
          if (!floatTransitionDuration && !floatTransitionDelay) {
            return 0;
          }
          transitionDuration = transitionDuration.split(",")[0];
          transitionDelay = transitionDelay.split(",")[0];
          return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
        };
        const triggerTransitionEnd = (element) => {
          element.dispatchEvent(new Event(TRANSITION_END));
        };
        const isElement = (obj) => {
          if (!obj || typeof obj !== "object") {
            return false;
          }
          if (typeof obj.jquery !== "undefined") {
            obj = obj[0];
          }
          return typeof obj.nodeType !== "undefined";
        };
        const getElement = (obj) => {
          if (isElement(obj)) {
            return obj.jquery ? obj[0] : obj;
          }
          if (typeof obj === "string" && obj.length > 0) {
            return document.querySelector(obj);
          }
          return null;
        };
        const typeCheckConfig = (componentName, config, configTypes) => {
          Object.keys(configTypes).forEach((property) => {
            const expectedTypes = configTypes[property];
            const value = config[property];
            const valueType = value && isElement(value) ? "element" : toType(value);
            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
            }
          });
        };
        const isVisible = (element) => {
          if (!isElement(element) || element.getClientRects().length === 0) {
            return false;
          }
          return getComputedStyle(element).getPropertyValue("visibility") === "visible";
        };
        const isDisabled = (element) => {
          if (!element || element.nodeType !== Node.ELEMENT_NODE) {
            return true;
          }
          if (element.classList.contains("disabled")) {
            return true;
          }
          if (typeof element.disabled !== "undefined") {
            return element.disabled;
          }
          return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
        };
        const reflow = (element) => {
          element.offsetHeight;
        };
        const getjQuery = () => {
          const {
            jQuery
          } = window;
          if (jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
            return jQuery;
          }
          return null;
        };
        const DOMContentLoadedCallbacks = [];
        const onDOMContentLoaded = (callback) => {
          if (document.readyState === "loading") {
            if (!DOMContentLoadedCallbacks.length) {
              document.addEventListener("DOMContentLoaded", () => {
                DOMContentLoadedCallbacks.forEach((callback2) => callback2());
              });
            }
            DOMContentLoadedCallbacks.push(callback);
          } else {
            callback();
          }
        };
        const defineJQueryPlugin = (plugin) => {
          onDOMContentLoaded(() => {
            const $ = getjQuery();
            if ($) {
              const name = plugin.NAME;
              const JQUERY_NO_CONFLICT = $.fn[name];
              $.fn[name] = plugin.jQueryInterface;
              $.fn[name].Constructor = plugin;
              $.fn[name].noConflict = () => {
                $.fn[name] = JQUERY_NO_CONFLICT;
                return plugin.jQueryInterface;
              };
            }
          });
        };
        const execute = (callback) => {
          if (typeof callback === "function") {
            callback();
          }
        };
        const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
          if (!waitForTransition) {
            execute(callback);
            return;
          }
          const durationPadding = 5;
          const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
          let called = false;
          const handler = ({
            target
          }) => {
            if (target !== transitionElement) {
              return;
            }
            called = true;
            transitionElement.removeEventListener(TRANSITION_END, handler);
            execute(callback);
          };
          transitionElement.addEventListener(TRANSITION_END, handler);
          setTimeout(() => {
            if (!called) {
              triggerTransitionEnd(transitionElement);
            }
          }, emulatedDuration);
        };
        const SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
        const SELECTOR_STICKY_CONTENT = ".sticky-top";
        class ScrollBarHelper {
          constructor() {
            this._element = document.body;
          }
          getWidth() {
            const documentWidth = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - documentWidth);
          }
          hide() {
            const width = this.getWidth();
            this._disableOverFlow();
            this._setElementAttributes(this._element, "paddingRight", (calculatedValue) => calculatedValue + width);
            this._setElementAttributes(SELECTOR_FIXED_CONTENT, "paddingRight", (calculatedValue) => calculatedValue + width);
            this._setElementAttributes(SELECTOR_STICKY_CONTENT, "marginRight", (calculatedValue) => calculatedValue - width);
          }
          _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow");
            this._element.style.overflow = "hidden";
          }
          _setElementAttributes(selector, styleProp, callback) {
            const scrollbarWidth = this.getWidth();
            const manipulationCallBack = (element) => {
              if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
                return;
              }
              this._saveInitialAttribute(element, styleProp);
              const calculatedValue = window.getComputedStyle(element)[styleProp];
              element.style[styleProp] = `${callback(Number.parseFloat(calculatedValue))}px`;
            };
            this._applyManipulationCallback(selector, manipulationCallBack);
          }
          reset() {
            this._resetElementAttributes(this._element, "overflow");
            this._resetElementAttributes(this._element, "paddingRight");
            this._resetElementAttributes(SELECTOR_FIXED_CONTENT, "paddingRight");
            this._resetElementAttributes(SELECTOR_STICKY_CONTENT, "marginRight");
          }
          _saveInitialAttribute(element, styleProp) {
            const actualValue = element.style[styleProp];
            if (actualValue) {
              Manipulator__default.default.setDataAttribute(element, styleProp, actualValue);
            }
          }
          _resetElementAttributes(selector, styleProp) {
            const manipulationCallBack = (element) => {
              const value = Manipulator__default.default.getDataAttribute(element, styleProp);
              if (typeof value === "undefined") {
                element.style.removeProperty(styleProp);
              } else {
                Manipulator__default.default.removeDataAttribute(element, styleProp);
                element.style[styleProp] = value;
              }
            };
            this._applyManipulationCallback(selector, manipulationCallBack);
          }
          _applyManipulationCallback(selector, callBack) {
            if (isElement(selector)) {
              callBack(selector);
            } else {
              SelectorEngine__default.default.find(selector, this._element).forEach(callBack);
            }
          }
          isOverflowing() {
            return this.getWidth() > 0;
          }
        }
        const Default$2 = {
          className: "modal-backdrop",
          isVisible: true,
          isAnimated: false,
          rootElement: "body",
          clickCallback: null
        };
        const DefaultType$2 = {
          className: "string",
          isVisible: "boolean",
          isAnimated: "boolean",
          rootElement: "(element|string)",
          clickCallback: "(function|null)"
        };
        const NAME$2 = "backdrop";
        const CLASS_NAME_FADE = "fade";
        const CLASS_NAME_SHOW$1 = "show";
        const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$2}`;
        class Backdrop {
          constructor(config) {
            this._config = this._getConfig(config);
            this._isAppended = false;
            this._element = null;
          }
          show(callback) {
            if (!this._config.isVisible) {
              execute(callback);
              return;
            }
            this._append();
            if (this._config.isAnimated) {
              reflow(this._getElement());
            }
            this._getElement().classList.add(CLASS_NAME_SHOW$1);
            this._emulateAnimation(() => {
              execute(callback);
            });
          }
          hide(callback) {
            if (!this._config.isVisible) {
              execute(callback);
              return;
            }
            this._getElement().classList.remove(CLASS_NAME_SHOW$1);
            this._emulateAnimation(() => {
              this.dispose();
              execute(callback);
            });
          }
          _getElement() {
            if (!this._element) {
              const backdrop = document.createElement("div");
              backdrop.className = this._config.className;
              if (this._config.isAnimated) {
                backdrop.classList.add(CLASS_NAME_FADE);
              }
              this._element = backdrop;
            }
            return this._element;
          }
          _getConfig(config) {
            config = {
              ...Default$2,
              ...typeof config === "object" ? config : {}
            };
            config.rootElement = getElement(config.rootElement);
            typeCheckConfig(NAME$2, config, DefaultType$2);
            return config;
          }
          _append() {
            if (this._isAppended) {
              return;
            }
            this._config.rootElement.append(this._getElement());
            EventHandler__default.default.on(this._getElement(), EVENT_MOUSEDOWN, () => {
              execute(this._config.clickCallback);
            });
            this._isAppended = true;
          }
          dispose() {
            if (!this._isAppended) {
              return;
            }
            EventHandler__default.default.off(this._element, EVENT_MOUSEDOWN);
            this._element.remove();
            this._isAppended = false;
          }
          _emulateAnimation(callback) {
            executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
          }
        }
        const Default$1 = {
          trapElement: null,
          autofocus: true
        };
        const DefaultType$1 = {
          trapElement: "element",
          autofocus: "boolean"
        };
        const NAME$1 = "focustrap";
        const DATA_KEY$1 = "bs.focustrap";
        const EVENT_KEY$1 = `.${DATA_KEY$1}`;
        const EVENT_FOCUSIN = `focusin${EVENT_KEY$1}`;
        const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$1}`;
        const TAB_KEY = "Tab";
        const TAB_NAV_FORWARD = "forward";
        const TAB_NAV_BACKWARD = "backward";
        class FocusTrap {
          constructor(config) {
            this._config = this._getConfig(config);
            this._isActive = false;
            this._lastTabNavDirection = null;
          }
          activate() {
            const {
              trapElement,
              autofocus
            } = this._config;
            if (this._isActive) {
              return;
            }
            if (autofocus) {
              trapElement.focus();
            }
            EventHandler__default.default.off(document, EVENT_KEY$1);
            EventHandler__default.default.on(document, EVENT_FOCUSIN, (event) => this._handleFocusin(event));
            EventHandler__default.default.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
            this._isActive = true;
          }
          deactivate() {
            if (!this._isActive) {
              return;
            }
            this._isActive = false;
            EventHandler__default.default.off(document, EVENT_KEY$1);
          }
          _handleFocusin(event) {
            const {
              target
            } = event;
            const {
              trapElement
            } = this._config;
            if (target === document || target === trapElement || trapElement.contains(target)) {
              return;
            }
            const elements = SelectorEngine__default.default.focusableChildren(trapElement);
            if (elements.length === 0) {
              trapElement.focus();
            } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
              elements[elements.length - 1].focus();
            } else {
              elements[0].focus();
            }
          }
          _handleKeydown(event) {
            if (event.key !== TAB_KEY) {
              return;
            }
            this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
          }
          _getConfig(config) {
            config = {
              ...Default$1,
              ...typeof config === "object" ? config : {}
            };
            typeCheckConfig(NAME$1, config, DefaultType$1);
            return config;
          }
        }
        const enableDismissTrigger = (component, method = "hide") => {
          const clickEvent = `click.dismiss${component.EVENT_KEY}`;
          const name = component.NAME;
          EventHandler__default.default.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
            if (["A", "AREA"].includes(this.tagName)) {
              event.preventDefault();
            }
            if (isDisabled(this)) {
              return;
            }
            const target = getElementFromSelector(this) || this.closest(`.${name}`);
            const instance = component.getOrCreateInstance(target);
            instance[method]();
          });
        };
        const NAME = "offcanvas";
        const DATA_KEY = "bs.offcanvas";
        const EVENT_KEY = `.${DATA_KEY}`;
        const DATA_API_KEY = ".data-api";
        const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`;
        const ESCAPE_KEY = "Escape";
        const Default = {
          backdrop: true,
          keyboard: true,
          scroll: false
        };
        const DefaultType = {
          backdrop: "boolean",
          keyboard: "boolean",
          scroll: "boolean"
        };
        const CLASS_NAME_SHOW = "show";
        const CLASS_NAME_BACKDROP = "offcanvas-backdrop";
        const OPEN_SELECTOR = ".offcanvas.show";
        const EVENT_SHOW = `show${EVENT_KEY}`;
        const EVENT_SHOWN = `shown${EVENT_KEY}`;
        const EVENT_HIDE = `hide${EVENT_KEY}`;
        const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
        const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
        const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY}`;
        const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="offcanvas"]';
        class Offcanvas extends BaseComponent__default.default {
          constructor(element, config) {
            super(element);
            this._config = this._getConfig(config);
            this._isShown = false;
            this._backdrop = this._initializeBackDrop();
            this._focustrap = this._initializeFocusTrap();
            this._addEventListeners();
          }
          static get NAME() {
            return NAME;
          }
          static get Default() {
            return Default;
          }
          toggle(relatedTarget) {
            return this._isShown ? this.hide() : this.show(relatedTarget);
          }
          show(relatedTarget) {
            if (this._isShown) {
              return;
            }
            const showEvent = EventHandler__default.default.trigger(this._element, EVENT_SHOW, {
              relatedTarget
            });
            if (showEvent.defaultPrevented) {
              return;
            }
            this._isShown = true;
            this._element.style.visibility = "visible";
            this._backdrop.show();
            if (!this._config.scroll) {
              new ScrollBarHelper().hide();
            }
            this._element.removeAttribute("aria-hidden");
            this._element.setAttribute("aria-modal", true);
            this._element.setAttribute("role", "dialog");
            this._element.classList.add(CLASS_NAME_SHOW);
            const completeCallBack = () => {
              if (!this._config.scroll) {
                this._focustrap.activate();
              }
              EventHandler__default.default.trigger(this._element, EVENT_SHOWN, {
                relatedTarget
              });
            };
            this._queueCallback(completeCallBack, this._element, true);
          }
          hide() {
            if (!this._isShown) {
              return;
            }
            const hideEvent = EventHandler__default.default.trigger(this._element, EVENT_HIDE);
            if (hideEvent.defaultPrevented) {
              return;
            }
            this._focustrap.deactivate();
            this._element.blur();
            this._isShown = false;
            this._element.classList.remove(CLASS_NAME_SHOW);
            this._backdrop.hide();
            const completeCallback = () => {
              this._element.setAttribute("aria-hidden", true);
              this._element.removeAttribute("aria-modal");
              this._element.removeAttribute("role");
              this._element.style.visibility = "hidden";
              if (!this._config.scroll) {
                new ScrollBarHelper().reset();
              }
              EventHandler__default.default.trigger(this._element, EVENT_HIDDEN);
            };
            this._queueCallback(completeCallback, this._element, true);
          }
          dispose() {
            this._backdrop.dispose();
            this._focustrap.deactivate();
            super.dispose();
          }
          _getConfig(config) {
            config = {
              ...Default,
              ...Manipulator__default.default.getDataAttributes(this._element),
              ...typeof config === "object" ? config : {}
            };
            typeCheckConfig(NAME, config, DefaultType);
            return config;
          }
          _initializeBackDrop() {
            return new Backdrop({
              className: CLASS_NAME_BACKDROP,
              isVisible: this._config.backdrop,
              isAnimated: true,
              rootElement: this._element.parentNode,
              clickCallback: () => this.hide()
            });
          }
          _initializeFocusTrap() {
            return new FocusTrap({
              trapElement: this._element
            });
          }
          _addEventListeners() {
            EventHandler__default.default.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
              if (this._config.keyboard && event.key === ESCAPE_KEY) {
                this.hide();
              }
            });
          }
          static jQueryInterface(config) {
            return this.each(function() {
              const data = Offcanvas.getOrCreateInstance(this, config);
              if (typeof config !== "string") {
                return;
              }
              if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
                throw new TypeError(`No method named "${config}"`);
              }
              data[config](this);
            });
          }
        }
        EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
          const target = getElementFromSelector(this);
          if (["A", "AREA"].includes(this.tagName)) {
            event.preventDefault();
          }
          if (isDisabled(this)) {
            return;
          }
          EventHandler__default.default.one(target, EVENT_HIDDEN, () => {
            if (isVisible(this)) {
              this.focus();
            }
          });
          const allReadyOpen = SelectorEngine__default.default.findOne(OPEN_SELECTOR);
          if (allReadyOpen && allReadyOpen !== target) {
            Offcanvas.getInstance(allReadyOpen).hide();
          }
          const data = Offcanvas.getOrCreateInstance(target);
          data.toggle(this);
        });
        EventHandler__default.default.on(window, EVENT_LOAD_DATA_API, () => SelectorEngine__default.default.find(OPEN_SELECTOR).forEach((el) => Offcanvas.getOrCreateInstance(el).show()));
        enableDismissTrigger(Offcanvas);
        defineJQueryPlugin(Offcanvas);
        return Offcanvas;
      });
    }
  });

  // node_modules/bootstrap/js/dist/collapse.js
  var require_collapse = __commonJS({
    "node_modules/bootstrap/js/dist/collapse.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_data(), require_event_handler(), require_manipulator(), require_selector_engine(), require_base_component()) : typeof define === "function" && define.amd ? define(["./dom/data", "./dom/event-handler", "./dom/manipulator", "./dom/selector-engine", "./base-component"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Collapse = factory(global.Data, global.EventHandler, global.Manipulator, global.SelectorEngine, global.Base));
      })(exports, function(Data, EventHandler, Manipulator, SelectorEngine, BaseComponent) {
        "use strict";
        const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
        const Data__default = /* @__PURE__ */ _interopDefaultLegacy(Data);
        const EventHandler__default = /* @__PURE__ */ _interopDefaultLegacy(EventHandler);
        const Manipulator__default = /* @__PURE__ */ _interopDefaultLegacy(Manipulator);
        const SelectorEngine__default = /* @__PURE__ */ _interopDefaultLegacy(SelectorEngine);
        const BaseComponent__default = /* @__PURE__ */ _interopDefaultLegacy(BaseComponent);
        const toType = (obj) => {
          if (obj === null || obj === void 0) {
            return `${obj}`;
          }
          return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
        };
        const getSelector = (element) => {
          let selector = element.getAttribute("data-bs-target");
          if (!selector || selector === "#") {
            let hrefAttr = element.getAttribute("href");
            if (!hrefAttr || !hrefAttr.includes("#") && !hrefAttr.startsWith(".")) {
              return null;
            }
            if (hrefAttr.includes("#") && !hrefAttr.startsWith("#")) {
              hrefAttr = `#${hrefAttr.split("#")[1]}`;
            }
            selector = hrefAttr && hrefAttr !== "#" ? hrefAttr.trim() : null;
          }
          return selector;
        };
        const getSelectorFromElement = (element) => {
          const selector = getSelector(element);
          if (selector) {
            return document.querySelector(selector) ? selector : null;
          }
          return null;
        };
        const getElementFromSelector = (element) => {
          const selector = getSelector(element);
          return selector ? document.querySelector(selector) : null;
        };
        const isElement = (obj) => {
          if (!obj || typeof obj !== "object") {
            return false;
          }
          if (typeof obj.jquery !== "undefined") {
            obj = obj[0];
          }
          return typeof obj.nodeType !== "undefined";
        };
        const getElement = (obj) => {
          if (isElement(obj)) {
            return obj.jquery ? obj[0] : obj;
          }
          if (typeof obj === "string" && obj.length > 0) {
            return document.querySelector(obj);
          }
          return null;
        };
        const typeCheckConfig = (componentName, config, configTypes) => {
          Object.keys(configTypes).forEach((property) => {
            const expectedTypes = configTypes[property];
            const value = config[property];
            const valueType = value && isElement(value) ? "element" : toType(value);
            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
            }
          });
        };
        const reflow = (element) => {
          element.offsetHeight;
        };
        const getjQuery = () => {
          const {
            jQuery
          } = window;
          if (jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
            return jQuery;
          }
          return null;
        };
        const DOMContentLoadedCallbacks = [];
        const onDOMContentLoaded = (callback) => {
          if (document.readyState === "loading") {
            if (!DOMContentLoadedCallbacks.length) {
              document.addEventListener("DOMContentLoaded", () => {
                DOMContentLoadedCallbacks.forEach((callback2) => callback2());
              });
            }
            DOMContentLoadedCallbacks.push(callback);
          } else {
            callback();
          }
        };
        const defineJQueryPlugin = (plugin) => {
          onDOMContentLoaded(() => {
            const $ = getjQuery();
            if ($) {
              const name = plugin.NAME;
              const JQUERY_NO_CONFLICT = $.fn[name];
              $.fn[name] = plugin.jQueryInterface;
              $.fn[name].Constructor = plugin;
              $.fn[name].noConflict = () => {
                $.fn[name] = JQUERY_NO_CONFLICT;
                return plugin.jQueryInterface;
              };
            }
          });
        };
        const NAME = "collapse";
        const DATA_KEY = "bs.collapse";
        const EVENT_KEY = `.${DATA_KEY}`;
        const DATA_API_KEY = ".data-api";
        const Default = {
          toggle: true,
          parent: null
        };
        const DefaultType = {
          toggle: "boolean",
          parent: "(null|element)"
        };
        const EVENT_SHOW = `show${EVENT_KEY}`;
        const EVENT_SHOWN = `shown${EVENT_KEY}`;
        const EVENT_HIDE = `hide${EVENT_KEY}`;
        const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
        const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
        const CLASS_NAME_SHOW = "show";
        const CLASS_NAME_COLLAPSE = "collapse";
        const CLASS_NAME_COLLAPSING = "collapsing";
        const CLASS_NAME_COLLAPSED = "collapsed";
        const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
        const CLASS_NAME_HORIZONTAL = "collapse-horizontal";
        const WIDTH = "width";
        const HEIGHT = "height";
        const SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
        const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="collapse"]';
        class Collapse extends BaseComponent__default.default {
          constructor(element, config) {
            super(element);
            this._isTransitioning = false;
            this._config = this._getConfig(config);
            this._triggerArray = [];
            const toggleList = SelectorEngine__default.default.find(SELECTOR_DATA_TOGGLE);
            for (let i = 0, len = toggleList.length; i < len; i++) {
              const elem = toggleList[i];
              const selector = getSelectorFromElement(elem);
              const filterElement = SelectorEngine__default.default.find(selector).filter((foundElem) => foundElem === this._element);
              if (selector !== null && filterElement.length) {
                this._selector = selector;
                this._triggerArray.push(elem);
              }
            }
            this._initializeChildren();
            if (!this._config.parent) {
              this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
            }
            if (this._config.toggle) {
              this.toggle();
            }
          }
          static get Default() {
            return Default;
          }
          static get NAME() {
            return NAME;
          }
          toggle() {
            if (this._isShown()) {
              this.hide();
            } else {
              this.show();
            }
          }
          show() {
            if (this._isTransitioning || this._isShown()) {
              return;
            }
            let actives = [];
            let activesData;
            if (this._config.parent) {
              const children = SelectorEngine__default.default.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
              actives = SelectorEngine__default.default.find(SELECTOR_ACTIVES, this._config.parent).filter((elem) => !children.includes(elem));
            }
            const container = SelectorEngine__default.default.findOne(this._selector);
            if (actives.length) {
              const tempActiveData = actives.find((elem) => container !== elem);
              activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;
              if (activesData && activesData._isTransitioning) {
                return;
              }
            }
            const startEvent = EventHandler__default.default.trigger(this._element, EVENT_SHOW);
            if (startEvent.defaultPrevented) {
              return;
            }
            actives.forEach((elemActive) => {
              if (container !== elemActive) {
                Collapse.getOrCreateInstance(elemActive, {
                  toggle: false
                }).hide();
              }
              if (!activesData) {
                Data__default.default.set(elemActive, DATA_KEY, null);
              }
            });
            const dimension = this._getDimension();
            this._element.classList.remove(CLASS_NAME_COLLAPSE);
            this._element.classList.add(CLASS_NAME_COLLAPSING);
            this._element.style[dimension] = 0;
            this._addAriaAndCollapsedClass(this._triggerArray, true);
            this._isTransitioning = true;
            const complete = () => {
              this._isTransitioning = false;
              this._element.classList.remove(CLASS_NAME_COLLAPSING);
              this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
              this._element.style[dimension] = "";
              EventHandler__default.default.trigger(this._element, EVENT_SHOWN);
            };
            const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
            const scrollSize = `scroll${capitalizedDimension}`;
            this._queueCallback(complete, this._element, true);
            this._element.style[dimension] = `${this._element[scrollSize]}px`;
          }
          hide() {
            if (this._isTransitioning || !this._isShown()) {
              return;
            }
            const startEvent = EventHandler__default.default.trigger(this._element, EVENT_HIDE);
            if (startEvent.defaultPrevented) {
              return;
            }
            const dimension = this._getDimension();
            this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
            reflow(this._element);
            this._element.classList.add(CLASS_NAME_COLLAPSING);
            this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
            const triggerArrayLength = this._triggerArray.length;
            for (let i = 0; i < triggerArrayLength; i++) {
              const trigger = this._triggerArray[i];
              const elem = getElementFromSelector(trigger);
              if (elem && !this._isShown(elem)) {
                this._addAriaAndCollapsedClass([trigger], false);
              }
            }
            this._isTransitioning = true;
            const complete = () => {
              this._isTransitioning = false;
              this._element.classList.remove(CLASS_NAME_COLLAPSING);
              this._element.classList.add(CLASS_NAME_COLLAPSE);
              EventHandler__default.default.trigger(this._element, EVENT_HIDDEN);
            };
            this._element.style[dimension] = "";
            this._queueCallback(complete, this._element, true);
          }
          _isShown(element = this._element) {
            return element.classList.contains(CLASS_NAME_SHOW);
          }
          _getConfig(config) {
            config = {
              ...Default,
              ...Manipulator__default.default.getDataAttributes(this._element),
              ...config
            };
            config.toggle = Boolean(config.toggle);
            config.parent = getElement(config.parent);
            typeCheckConfig(NAME, config, DefaultType);
            return config;
          }
          _getDimension() {
            return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
          }
          _initializeChildren() {
            if (!this._config.parent) {
              return;
            }
            const children = SelectorEngine__default.default.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
            SelectorEngine__default.default.find(SELECTOR_DATA_TOGGLE, this._config.parent).filter((elem) => !children.includes(elem)).forEach((element) => {
              const selected = getElementFromSelector(element);
              if (selected) {
                this._addAriaAndCollapsedClass([element], this._isShown(selected));
              }
            });
          }
          _addAriaAndCollapsedClass(triggerArray, isOpen) {
            if (!triggerArray.length) {
              return;
            }
            triggerArray.forEach((elem) => {
              if (isOpen) {
                elem.classList.remove(CLASS_NAME_COLLAPSED);
              } else {
                elem.classList.add(CLASS_NAME_COLLAPSED);
              }
              elem.setAttribute("aria-expanded", isOpen);
            });
          }
          static jQueryInterface(config) {
            return this.each(function() {
              const _config = {};
              if (typeof config === "string" && /show|hide/.test(config)) {
                _config.toggle = false;
              }
              const data = Collapse.getOrCreateInstance(this, _config);
              if (typeof config === "string") {
                if (typeof data[config] === "undefined") {
                  throw new TypeError(`No method named "${config}"`);
                }
                data[config]();
              }
            });
          }
        }
        EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
          if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
            event.preventDefault();
          }
          const selector = getSelectorFromElement(this);
          const selectorElements = SelectorEngine__default.default.find(selector);
          selectorElements.forEach((element) => {
            Collapse.getOrCreateInstance(element, {
              toggle: false
            }).toggle();
          });
        });
        defineJQueryPlugin(Collapse);
        return Collapse;
      });
    }
  });

  // js/main.js
  var import_lightense = __toESM(require_lightense_min());
  var import_dropdown = __toESM(require_dropdown());
  var import_tooltip = __toESM(require_tooltip());
  var import_tiny_slider = __toESM(require_tiny_slider());
  var import_offcanvas = __toESM(require_offcanvas());
  var import_collapse = __toESM(require_collapse());

  // js/base.js
  window.addEventListener("load", () => {
    let myDropdownsTogglerHeader = document.querySelectorAll(".main-header [data-bs-toggle='dropdown']");
    myDropdownsTogglerHeader = Array.from(myDropdownsTogglerHeader);
    myDropdownsTogglerHeader.forEach((dropdownToggler) => {
      var dropdownInstance = new Dropdown(dropdownToggler);
      const dropdown = dropdownInstance._menu;
      let cliced = false;
      dropdown.addEventListener("mouseenter", () => {
        if (!cliced) {
          dropdownToggler.classList.add("main-header__nav__row__right__link--active");
        }
      });
      dropdown.addEventListener("mouseleave", () => {
        if (!cliced) {
          dropdownToggler.classList.remove("main-header__nav__row__right__link--active");
        }
      });
      dropdownToggler.addEventListener("show.bs.dropdown", function() {
        dropdownToggler.classList.add("main-header__nav__row__right__link--active");
        cliced = true;
      });
      dropdownToggler.addEventListener("hide.bs.dropdown", function() {
        dropdownToggler.classList.remove("main-header__nav__row__right__link--active");
        cliced = false;
      });
    });
    function handelSearchForm(e, openMode = true) {
      e?.preventDefault();
      e?.stopPropagation();
      const tooglePlace = document.getElementById("toggleSeatchPlace");
      tooglePlace.classList[openMode ? "add" : "remove"]("open-search");
    }
    clickOutsideHandel(document.getElementById("formSearch"), () => {
      handelSearchForm(null, false);
    });
    window.handelSearchForm = handelSearchForm;
    function clickOutsideHandel(element, doingFunction) {
      document.addEventListener("click", function(event) {
        var isClickInsideElement = element.contains(event.target);
        if (!isClickInsideElement) {
          doingFunction();
        }
      });
    }
    const bigSlider = tns({
      container: "#big-slider",
      items: 1,
      slideBy: "page",
      mouseDrag: true,
      nav: false,
      controlsContainer: "#custom-control",
      loop: false
    });
    const smallSlider = tns({
      container: "#small-slider",
      items: 3,
      slideBy: "page",
      mouseDrag: true,
      nav: false,
      controls: false,
      edgePadding: 10,
      loop: false,
      responsive: {
        576: {
          items: 4
        },
        768: {
          items: 5
        },
        992: {
          items: 3
        }
      }
    });
    const moreProductSlider = tns({
      container: "#more-product-slider",
      items: 1,
      mouseDrag: true,
      nav: false,
      loop: true,
      gutter: 20,
      controlsContainer: "#custom-control-more",
      responsive: {
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        }
      }
    });
    bigSlider.events.on("transitionStart", removeActiveItemaInSmallSlider);
    bigSlider.events.on("transitionEnd", changeSmallSlider);
    function changeSmallSlider(e) {
      if (e.index == 0) {
        e.prevButton.classList.add("big-slider-container__controls__item--disabled");
      } else {
        e.prevButton.classList.remove("big-slider-container__controls__item--disabled");
      }
      if (e.index == e.slideCount - 1) {
        e.nextButton.classList.add("big-slider-container__controls__item--disabled");
      } else {
        e.nextButton.classList.remove("big-slider-container__controls__item--disabled");
      }
      smallSlider.goTo(e.index);
      smallSlider.getInfo().slideItems[e.index].classList.add("small-slider__item-container--active");
    }
    function removeActiveItemaInSmallSlider() {
      Array.from(smallSlider.getInfo().slideItems).forEach((item) => {
        item.classList.remove("small-slider__item-container--active");
      });
    }
    document.querySelectorAll(".small-slider__item-container").forEach((item, index) => {
      let checkX = null;
      item.addEventListener("mouseup", (e) => {
        if (e.clientX == checkX) {
          bigSlider.goTo(index);
        }
      });
      item.addEventListener("mousedown", (e) => {
        checkX = e.clientX;
      });
    });
    Lightense("#big-slider-zooming-item");
    const bigSliderZoomButton = document.getElementById("zoom-btn-big-slider");
    const bigSliderZoomingItem = document.getElementById("big-slider-zooming-item");
    var tooltip = new Tooltip(bigSliderZoomButton);
    bigSliderZoomButton.addEventListener("click", () => {
      const informationOfBigSlider = bigSlider.getInfo();
      bigSliderZoomingItem.src = informationOfBigSlider.slideItems[informationOfBigSlider.index].querySelector("img").src;
      bigSliderZoomingItem.click();
    });
  });

  // js/main.js
  window.Dropdown = import_dropdown.default;
  window.Tooltip = import_tooltip.default;
  window.Lightense = import_lightense.default;
  window.tns = import_tiny_slider.tns;
})();
/*!
  * Bootstrap base-component.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap collapse.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap data.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap dropdown.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap event-handler.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap manipulator.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap offcanvas.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap selector-engine.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap tooltip.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*! lightense-images v1.0.17 | © Tunghsiao Liu | MIT */
