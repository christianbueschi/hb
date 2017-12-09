!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Siema",[],t):"object"==typeof exports?exports.Siema=t():e.Siema=t()}(this,function(){return function(e){function t(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,s){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,i){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),o=function(){function e(t){var i=this;if(s(this,e),this.config=e.mergeSettings(t),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,null===this.selector)throw new Error("Something wrong with your selector 😭");this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.startIndex,this.transformProperty=e.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler"].forEach(function(e){i[e]=i[e].bind(i)}),this.init()}return r(e,[{key:"attachEvents",value:function(){window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null},this.selector.addEventListener("touchstart",this.touchstartHandler,{passive:!0}),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler,{passive:!0}),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler))}},{key:"detachEvents",value:function(){window.removeEventListener("resize",this.resizeHandler),this.selector.style.cursor="auto",this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler)}},{key:"init",value:function(){this.attachEvents(),this.resolveSlidesNumber(),this.selector.style.overflow="hidden",this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.config.draggable&&(this.selector.style.cursor="-webkit-grab");for(var e=document.createDocumentFragment(),t=0;t<this.innerElements.length;t++){var i=document.createElement("div");i.style.cssFloat="left",i.style.float="left",i.style.width=100/this.innerElements.length+"%",i.appendChild(this.innerElements[t]),e.appendChild(i)}this.sliderFrame.appendChild(e),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent(),this.config.onInit.call(this)}},{key:"resolveSlidesNumber",value:function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===n(this.config.perPage)){this.perPage=1;for(var e in this.config.perPage)window.innerWidth>=e&&(this.perPage=this.config.perPage[e])}}},{key:"prev",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;0===this.currentSlide&&this.config.loop?this.currentSlide=this.innerElements.length-this.perPage:this.currentSlide=Math.max(this.currentSlide-e,0),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"next",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;this.currentSlide===this.innerElements.length-this.perPage&&this.config.loop?this.currentSlide=0:this.currentSlide=Math.min(this.currentSlide+e,this.innerElements.length-this.perPage),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"goTo",value:function(e,t){if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;this.currentSlide=Math.min(Math.max(e,0),this.innerElements.length-this.perPage),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"slideToCurrent",value:function(){this.sliderFrame.style[this.transformProperty]="translate3d(-"+this.currentSlide*(this.selectorWidth/this.perPage)+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var e=this.drag.endX-this.drag.startX,t=Math.abs(e),i=this.config.multipleDrag?Math.ceil(t/(this.selectorWidth/this.perPage)):1;e>0&&t>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(i):e<0&&t>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(i),this.slideToCurrent()}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.slideToCurrent()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null}}},{key:"touchstartHandler",value:function(e){e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.touches[0].pageX,this.drag.startY=e.touches[0].pageY}},{key:"touchendHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(e){e.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX)),this.pointerDown&&this.drag.letItGo&&(e.preventDefault(),this.drag.endX=e.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,this.sliderFrame.style[this.transformProperty]="translate3d("+-1*(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.startX-this.drag.endX))+"px, 0, 0)")}},{key:"mousedownHandler",value:function(e){e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.pageX}},{key:"mouseupHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(e){e.preventDefault(),this.pointerDown&&(this.drag.endX=e.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,this.sliderFrame.style[this.transformProperty]="translate3d("+-1*(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.startX-this.drag.endX))+"px, 0, 0)")}},{key:"mouseleaveHandler",value:function(e){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=e.pageX,this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.updateAfterDrag(),this.clearDrag())}},{key:"updateFrame",value:function(){this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.config.draggable&&(this.selector.style.cursor="-webkit-grab");for(var e=document.createDocumentFragment(),t=0;t<this.innerElements.length;t++){var i=document.createElement("div");i.style.cssFloat="left",i.style.float="left",i.style.width=100/this.innerElements.length+"%",i.appendChild(this.innerElements[t]),e.appendChild(i)}this.sliderFrame.appendChild(e),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"remove",value:function(e,t){if(e<0||e>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");this.innerElements.splice(e,1),this.updateFrame(),t&&t.call(this)}},{key:"insert",value:function(e,t,i){if(t<0||t>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(-1!==this.innerElements.indexOf(e))throw new Error("The same item in a carousel? Really? Nope 😭");this.innerElements.splice(t,0,e),this.currentSlide=t<=this.currentSlide?this.currentSlide+1:this.currentSlide,this.updateFrame(),i&&i.call(this)}},{key:"prepend",value:function(e,t){this.insert(e,0),t&&t.call(this)}},{key:"append",value:function(e,t){this.insert(e,this.innerElements.length+1),t&&t.call(this)}},{key:"destroy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];if(this.detachEvents(),e){for(var i=document.createDocumentFragment(),s=0;s<this.innerElements.length;s++)i.appendChild(this.innerElements[s]);this.selector.innerHTML="",this.selector.appendChild(i),this.selector.removeAttribute("style")}t&&t.call(this)}}],[{key:"mergeSettings",value:function(e){var t={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,onInit:function(){},onChange:function(){}},i=e;for(var s in i)t[s]=i[s];return t}},{key:"webkitOrNot",value:function(){return"string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform"}}]),e}();t.default=o,e.exports=t.default}])});
/*!
 *
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.6
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define([], factory);
    else if(typeof exports === 'object')
        exports["Typed"] = factory();
    else
        root["Typed"] = factory();
})(this, function() {
    return /******/ (function(modules) { // webpackBootstrap
        /******/ 	// The module cache
        /******/ 	var installedModules = {};
        /******/
        /******/ 	// The require function
        /******/ 	function __webpack_require__(moduleId) {
            /******/
            /******/ 		// Check if module is in cache
            /******/ 		if(installedModules[moduleId])
            /******/ 			return installedModules[moduleId].exports;
            /******/
            /******/ 		// Create a new module (and put it into the cache)
            /******/ 		var module = installedModules[moduleId] = {
                /******/ 			exports: {},
                /******/ 			id: moduleId,
                /******/ 			loaded: false
                /******/ 		};
            /******/
            /******/ 		// Execute the module function
            /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ 		// Flag the module as loaded
            /******/ 		module.loaded = true;
            /******/
            /******/ 		// Return the exports of the module
            /******/ 		return module.exports;
            /******/ 	}
        /******/
        /******/
        /******/ 	// expose the modules object (__webpack_modules__)
        /******/ 	__webpack_require__.m = modules;
        /******/
        /******/ 	// expose the module cache
        /******/ 	__webpack_require__.c = installedModules;
        /******/
        /******/ 	// __webpack_public_path__
        /******/ 	__webpack_require__.p = "";
        /******/
        /******/ 	// Load entry module and return exports
        /******/ 	return __webpack_require__(0);
        /******/ })
    /************************************************************************/
    /******/ ([
        /* 0 */
        /***/ (function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
                value: true
            });

            var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

            var _initializerJs = __webpack_require__(1);

            var _htmlParserJs = __webpack_require__(3);

            /**
             * Welcome to Typed.js!
             * @param {string} elementId HTML element ID _OR_ HTML element
             * @param {object} options options object
             * @returns {object} a new Typed object
             */

            var Typed = (function () {
                function Typed(elementId, options) {
                    _classCallCheck(this, Typed);

                    // Initialize it up
                    _initializerJs.initializer.load(this, options, elementId);
                    // All systems go!
                    this.begin();
                }

                /**
                 * Toggle start() and stop() of the Typed instance
                 * @public
                 */

                _createClass(Typed, [{
                    key: 'toggle',
                    value: function toggle() {
                        this.pause.status ? this.start() : this.stop();
                    }

                    /**
                     * Stop typing / backspacing and enable cursor blinking
                     * @public
                     */
                }, {
                    key: 'stop',
                    value: function stop() {
                        if (this.typingComplete) return;
                        if (this.pause.status) return;
                        this.toggleBlinking(true);
                        this.pause.status = true;
                        this.options.onStop(this.arrayPos, this);
                    }

                    /**
                     * Start typing / backspacing after being stopped
                     * @public
                     */
                }, {
                    key: 'start',
                    value: function start() {
                        if (this.typingComplete) return;
                        if (!this.pause.status) return;
                        this.pause.status = false;
                        if (this.pause.typewrite) {
                            this.typewrite(this.pause.curString, this.pause.curStrPos);
                        } else {
                            this.backspace(this.pause.curString, this.pause.curStrPos);
                        }
                        this.options.onStart(this.arrayPos, this);
                    }

                    /**
                     * Destroy this instance of Typed
                     * @public
                     */
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.reset(false);
                        this.options.onDestroy(this);
                    }

                    /**
                     * Reset Typed and optionally restarts
                     * @param {boolean} restart
                     * @public
                     */
                }, {
                    key: 'reset',
                    value: function reset() {
                        var restart = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

                        clearInterval(this.timeout);
                        this.replaceText('');
                        if (this.cursor && this.cursor.parentNode) {
                            this.cursor.parentNode.removeChild(this.cursor);
                            this.cursor = null;
                        }
                        this.strPos = 0;
                        this.arrayPos = 0;
                        this.curLoop = 0;
                        if (restart) {
                            this.insertCursor();
                            this.options.onReset(this);
                            this.begin();
                        }
                    }

                    /**
                     * Begins the typing animation
                     * @private
                     */
                }, {
                    key: 'begin',
                    value: function begin() {
                        var _this = this;

                        this.typingComplete = false;
                        this.shuffleStringsIfNeeded(this);
                        this.insertCursor();
                        if (this.bindInputFocusEvents) this.bindFocusEvents();
                        this.timeout = setTimeout(function () {
                            // Check if there is some text in the element, if yes start by backspacing the default message
                            if (!_this.currentElContent || _this.currentElContent.length === 0) {
                                _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos);
                            } else {
                                // Start typing
                                _this.backspace(_this.currentElContent, _this.currentElContent.length);
                            }
                        }, this.startDelay);
                    }

                    /**
                     * Called for each character typed
                     * @param {string} curString the current string in the strings array
                     * @param {number} curStrPos the current position in the curString
                     * @private
                     */
                }, {
                    key: 'typewrite',
                    value: function typewrite(curString, curStrPos) {
                        var _this2 = this;

                        if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
                            this.el.classList.remove(this.fadeOutClass);
                            if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
                        }

                        var humanize = this.humanizer(this.typeSpeed);
                        var numChars = 1;

                        if (this.pause.status === true) {
                            this.setPauseStatus(curString, curStrPos, true);
                            return;
                        }

                        // contain typing function in a timeout humanize'd delay
                        this.timeout = setTimeout(function () {
                            // skip over any HTML chars
                            curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);

                            var pauseTime = 0;
                            var substr = curString.substr(curStrPos);
                            // check for an escape character before a pause value
                            // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
                            // single ^ are removed from string
                            if (substr.charAt(0) === '^') {
                                if (/^\^\d+/.test(substr)) {
                                    var skip = 1; // skip at least 1
                                    substr = /\d+/.exec(substr)[0];
                                    skip += substr.length;
                                    pauseTime = parseInt(substr);
                                    _this2.temporaryPause = true;
                                    _this2.options.onTypingPaused(_this2.arrayPos, _this2);
                                    // strip out the escape character and pause value so they're not printed
                                    curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                                    _this2.toggleBlinking(true);
                                }
                            }

                            // check for skip characters formatted as
                            // "this is a `string to print NOW` ..."
                            if (substr.charAt(0) === '`') {
                                while (curString.substr(curStrPos + numChars).charAt(0) !== '`') {
                                    numChars++;
                                    if (curStrPos + numChars > curString.length) break;
                                }
                                // strip out the escape characters and append all the string in between
                                var stringBeforeSkip = curString.substring(0, curStrPos);
                                var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
                                var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
                                curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
                                numChars--;
                            }

                            // timeout for any pause after a character
                            _this2.timeout = setTimeout(function () {
                                // Accounts for blinking while paused
                                _this2.toggleBlinking(false);

                                // We're done with this sentence!
                                if (curStrPos === curString.length) {
                                    _this2.doneTyping(curString, curStrPos);
                                } else {
                                    _this2.keepTyping(curString, curStrPos, numChars);
                                }
                                // end of character pause
                                if (_this2.temporaryPause) {
                                    _this2.temporaryPause = false;
                                    _this2.options.onTypingResumed(_this2.arrayPos, _this2);
                                }
                            }, pauseTime);

                            // humanized value for typing
                        }, humanize);
                    }

                    /**
                     * Continue to the next string & begin typing
                     * @param {string} curString the current string in the strings array
                     * @param {number} curStrPos the current position in the curString
                     * @private
                     */
                }, {
                    key: 'keepTyping',
                    value: function keepTyping(curString, curStrPos, numChars) {
                        // call before functions if applicable
                        if (curStrPos === 0) {
                            this.toggleBlinking(false);
                            this.options.preStringTyped(this.arrayPos, this);
                        }
                        // start typing each new char into existing string
                        // curString: arg, this.el.html: original text inside element
                        curStrPos += numChars;
                        var nextString = curString.substr(0, curStrPos);
                        this.replaceText(nextString);
                        // loop the function
                        this.typewrite(curString, curStrPos);
                    }

                    /**
                     * We're done typing all strings
                     * @param {string} curString the current string in the strings array
                     * @param {number} curStrPos the current position in the curString
                     * @private
                     */
                }, {
                    key: 'doneTyping',
                    value: function doneTyping(curString, curStrPos) {
                        var _this3 = this;

                        // fires callback function
                        this.options.onStringTyped(this.arrayPos, this);
                        this.toggleBlinking(true);
                        // is this the final string
                        if (this.arrayPos === this.strings.length - 1) {
                            // callback that occurs on the last typed string
                            this.complete();
                            // quit if we wont loop back
                            if (this.loop === false || this.curLoop === this.loopCount) {
                                return;
                            }
                        }
                        this.timeout = setTimeout(function () {
                            _this3.backspace(curString, curStrPos);
                        }, this.backDelay);
                    }

                    /**
                     * Backspaces 1 character at a time
                     * @param {string} curString the current string in the strings array
                     * @param {number} curStrPos the current position in the curString
                     * @private
                     */
                }, {
                    key: 'backspace',
                    value: function backspace(curString, curStrPos) {
                        var _this4 = this;

                        if (this.pause.status === true) {
                            this.setPauseStatus(curString, curStrPos, true);
                            return;
                        }
                        if (this.fadeOut) return this.initFadeOut();

                        this.toggleBlinking(false);
                        var humanize = this.humanizer(this.backSpeed);

                        this.timeout = setTimeout(function () {
                            curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4);
                            // replace text with base text + typed characters
                            var curStringAtPosition = curString.substr(0, curStrPos);
                            _this4.replaceText(curStringAtPosition);

                            // if smartBack is enabled
                            if (_this4.smartBackspace) {
                                // the remaining part of the current string is equal of the same part of the new string
                                var nextString = _this4.strings[_this4.arrayPos + 1];
                                if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) {
                                    _this4.stopNum = curStrPos;
                                } else {
                                    _this4.stopNum = 0;
                                }
                            }

                            // if the number (id of character in current string) is
                            // less than the stop number, keep going
                            if (curStrPos > _this4.stopNum) {
                                // subtract characters one by one
                                curStrPos--;
                                // loop the function
                                _this4.backspace(curString, curStrPos);
                            } else if (curStrPos <= _this4.stopNum) {
                                // if the stop number has been reached, increase
                                // array position to next string
                                _this4.arrayPos++;
                                // When looping, begin at the beginning after backspace complete
                                if (_this4.arrayPos === _this4.strings.length) {
                                    _this4.arrayPos = 0;
                                    _this4.options.onLastStringBackspaced();
                                    _this4.shuffleStringsIfNeeded();
                                    _this4.begin();
                                } else {
                                    _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
                                }
                            }
                            // humanized value for typing
                        }, humanize);
                    }

                    /**
                     * Full animation is complete
                     * @private
                     */
                }, {
                    key: 'complete',
                    value: function complete() {
                        this.options.onComplete(this);
                        if (this.loop) {
                            this.curLoop++;
                        } else {
                            this.typingComplete = true;
                        }
                    }

                    /**
                     * Has the typing been stopped
                     * @param {string} curString the current string in the strings array
                     * @param {number} curStrPos the current position in the curString
                     * @param {boolean} isTyping
                     * @private
                     */
                }, {
                    key: 'setPauseStatus',
                    value: function setPauseStatus(curString, curStrPos, isTyping) {
                        this.pause.typewrite = isTyping;
                        this.pause.curString = curString;
                        this.pause.curStrPos = curStrPos;
                    }

                    /**
                     * Toggle the blinking cursor
                     * @param {boolean} isBlinking
                     * @private
                     */
                }, {
                    key: 'toggleBlinking',
                    value: function toggleBlinking(isBlinking) {
                        if (!this.cursor) return;
                        // if in paused state, don't toggle blinking a 2nd time
                        if (this.pause.status) return;
                        if (this.cursorBlinking === isBlinking) return;
                        this.cursorBlinking = isBlinking;
                        var status = isBlinking ? 'infinite' : 0;
                        this.cursor.style.animationIterationCount = status;
                    }

                    /**
                     * Speed in MS to type
                     * @param {number} speed
                     * @private
                     */
                }, {
                    key: 'humanizer',
                    value: function humanizer(speed) {
                        return Math.round(Math.random() * speed / 2) + speed;
                    }

                    /**
                     * Shuffle the sequence of the strings array
                     * @private
                     */
                }, {
                    key: 'shuffleStringsIfNeeded',
                    value: function shuffleStringsIfNeeded() {
                        if (!this.shuffle) return;
                        this.sequence = this.sequence.sort(function () {
                            return Math.random() - 0.5;
                        });
                    }

                    /**
                     * Adds a CSS class to fade out current string
                     * @private
                     */
                }, {
                    key: 'initFadeOut',
                    value: function initFadeOut() {
                        var _this5 = this;

                        this.el.className += ' ' + this.fadeOutClass;
                        if (this.cursor) this.cursor.className += ' ' + this.fadeOutClass;
                        return setTimeout(function () {
                            _this5.arrayPos++;
                            _this5.replaceText('');

                            // Resets current string if end of loop reached
                            if (_this5.strings.length > _this5.arrayPos) {
                                _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0);
                            } else {
                                _this5.typewrite(_this5.strings[0], 0);
                                _this5.arrayPos = 0;
                            }
                        }, this.fadeOutDelay);
                    }

                    /**
                     * Replaces current text in the HTML element
                     * depending on element type
                     * @param {string} str
                     * @private
                     */
                }, {
                    key: 'replaceText',
                    value: function replaceText(str) {
                        if (this.attr) {
                            this.el.setAttribute(this.attr, str);
                        } else {
                            if (this.isInput) {
                                this.el.value = str;
                            } else if (this.contentType === 'html') {
                                this.el.innerHTML = str;
                            } else {
                                this.el.textContent = str;
                            }
                        }
                    }

                    /**
                     * If using input elements, bind focus in order to
                     * start and stop the animation
                     * @private
                     */
                }, {
                    key: 'bindFocusEvents',
                    value: function bindFocusEvents() {
                        var _this6 = this;

                        if (!this.isInput) return;
                        this.el.addEventListener('focus', function (e) {
                            _this6.stop();
                        });
                        this.el.addEventListener('blur', function (e) {
                            if (_this6.el.value && _this6.el.value.length !== 0) {
                                return;
                            }
                            _this6.start();
                        });
                    }

                    /**
                     * On init, insert the cursor element
                     * @private
                     */
                }, {
                    key: 'insertCursor',
                    value: function insertCursor() {
                        if (!this.showCursor) return;
                        if (this.cursor) return;
                        this.cursor = document.createElement('span');
                        this.cursor.className = 'typed-cursor';
                        this.cursor.innerHTML = this.cursorChar;
                        this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
                    }
                }]);

                return Typed;
            })();

            exports['default'] = Typed;
            module.exports = exports['default'];

            /***/ }),
        /* 1 */
        /***/ (function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, '__esModule', {
                value: true
            });

            var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

            var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

            var _defaultsJs = __webpack_require__(2);

            var _defaultsJs2 = _interopRequireDefault(_defaultsJs);

            /**
             * Initialize the Typed object
             */

            var Initializer = (function () {
                function Initializer() {
                    _classCallCheck(this, Initializer);
                }

                _createClass(Initializer, [{
                    key: 'load',

                    /**
                     * Load up defaults & options on the Typed instance
                     * @param {Typed} self instance of Typed
                     * @param {object} options options object
                     * @param {string} elementId HTML element ID _OR_ instance of HTML element
                     * @private
                     */

                    value: function load(self, options, elementId) {
                        // chosen element to manipulate text
                        if (typeof elementId === 'string') {
                            self.el = document.querySelector(elementId);
                        } else {
                            self.el = elementId;
                        }

                        self.options = _extends({}, _defaultsJs2['default'], options);

                        // attribute to type into
                        self.isInput = self.el.tagName.toLowerCase() === 'input';
                        self.attr = self.options.attr;
                        self.bindInputFocusEvents = self.options.bindInputFocusEvents;

                        // show cursor
                        self.showCursor = self.isInput ? false : self.options.showCursor;

                        // custom cursor
                        self.cursorChar = self.options.cursorChar;

                        // Is the cursor blinking
                        self.cursorBlinking = true;

                        // text content of element
                        self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;

                        // html or plain text
                        self.contentType = self.options.contentType;

                        // typing speed
                        self.typeSpeed = self.options.typeSpeed;

                        // add a delay before typing starts
                        self.startDelay = self.options.startDelay;

                        // backspacing speed
                        self.backSpeed = self.options.backSpeed;

                        // only backspace what doesn't match the previous string
                        self.smartBackspace = self.options.smartBackspace;

                        // amount of time to wait before backspacing
                        self.backDelay = self.options.backDelay;

                        // Fade out instead of backspace
                        self.fadeOut = self.options.fadeOut;
                        self.fadeOutClass = self.options.fadeOutClass;
                        self.fadeOutDelay = self.options.fadeOutDelay;

                        // variable to check whether typing is currently paused
                        self.isPaused = false;

                        // input strings of text
                        self.strings = self.options.strings.map(function (s) {
                            return s.trim();
                        });

                        // div containing strings
                        if (typeof self.options.stringsElement === 'string') {
                            self.stringsElement = document.querySelector(self.options.stringsElement);
                        } else {
                            self.stringsElement = self.options.stringsElement;
                        }

                        if (self.stringsElement) {
                            self.strings = [];
                            self.stringsElement.style.display = 'none';
                            var strings = Array.prototype.slice.apply(self.stringsElement.children);
                            var stringsLength = strings.length;

                            if (stringsLength) {
                                for (var i = 0; i < stringsLength; i += 1) {
                                    var stringEl = strings[i];
                                    self.strings.push(stringEl.innerHTML.trim());
                                }
                            }
                        }

                        // character number position of current string
                        self.strPos = 0;

                        // current array position
                        self.arrayPos = 0;

                        // index of string to stop backspacing on
                        self.stopNum = 0;

                        // Looping logic
                        self.loop = self.options.loop;
                        self.loopCount = self.options.loopCount;
                        self.curLoop = 0;

                        // shuffle the strings
                        self.shuffle = self.options.shuffle;
                        // the order of strings
                        self.sequence = [];

                        self.pause = {
                            status: false,
                            typewrite: true,
                            curString: '',
                            curStrPos: 0
                        };

                        // When the typing is complete (when not looped)
                        self.typingComplete = false;

                        // Set the order in which the strings are typed
                        for (var i in self.strings) {
                            self.sequence[i] = i;
                        }

                        // If there is some text in the element
                        self.currentElContent = this.getCurrentElContent(self);

                        self.autoInsertCss = self.options.autoInsertCss;

                        this.appendAnimationCss(self);
                    }
                }, {
                    key: 'getCurrentElContent',
                    value: function getCurrentElContent(self) {
                        var elContent = '';
                        if (self.attr) {
                            elContent = self.el.getAttribute(self.attr);
                        } else if (self.isInput) {
                            elContent = self.el.value;
                        } else if (self.contentType === 'html') {
                            elContent = self.el.innerHTML;
                        } else {
                            elContent = self.el.textContent;
                        }
                        return elContent;
                    }
                }, {
                    key: 'appendAnimationCss',
                    value: function appendAnimationCss(self) {
                        if (!self.autoInsertCss) {
                            return;
                        }
                        if (!self.showCursor || !self.fadeOut) {
                            return;
                        }

                        var css = document.createElement('style');
                        css.type = 'text/css';
                        var innerCss = '';
                        if (self.showCursor) {
                            innerCss += '\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ';
                        }
                        if (self.fadeOut) {
                            innerCss += '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      ';
                        }
                        if (css.length === 0) {
                            return;
                        }
                        css.innerHTML = innerCss;
                        document.head.appendChild(css);
                    }
                }]);

                return Initializer;
            })();

            exports['default'] = Initializer;
            var initializer = new Initializer();
            exports.initializer = initializer;

            /***/ }),
        /* 2 */
        /***/ (function(module, exports) {

            /**
             * Defaults & options
             * @returns {object} Typed defaults & options
             * @public
             */

            'use strict';

            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            var defaults = {
                /**
                 * @property {array} strings strings to be typed
                 * @property {string} stringsElement ID of element containing string children
                 */
                strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'],
                stringsElement: null,

                /**
                 * @property {number} typeSpeed type speed in milliseconds
                 */
                typeSpeed: 0,

                /**
                 * @property {number} startDelay time before typing starts in milliseconds
                 */
                startDelay: 0,

                /**
                 * @property {number} backSpeed backspacing speed in milliseconds
                 */
                backSpeed: 0,

                /**
                 * @property {boolean} smartBackspace only backspace what doesn't match the previous string
                 */
                smartBackspace: true,

                /**
                 * @property {boolean} shuffle shuffle the strings
                 */
                shuffle: false,

                /**
                 * @property {number} backDelay time before backspacing in milliseconds
                 */
                backDelay: 700,

                /**
                 * @property {boolean} fadeOut Fade out instead of backspace
                 * @property {string} fadeOutClass css class for fade animation
                 * @property {boolean} fadeOutDelay Fade out delay in milliseconds
                 */
                fadeOut: false,
                fadeOutClass: 'typed-fade-out',
                fadeOutDelay: 500,

                /**
                 * @property {boolean} loop loop strings
                 * @property {number} loopCount amount of loops
                 */
                loop: false,
                loopCount: Infinity,

                /**
                 * @property {boolean} showCursor show cursor
                 * @property {string} cursorChar character for cursor
                 * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
                 */
                showCursor: true,
                cursorChar: '|',
                autoInsertCss: true,

                /**
                 * @property {string} attr attribute for typing
                 * Ex: input placeholder, value, or just HTML text
                 */
                attr: null,

                /**
                 * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
                 */
                bindInputFocusEvents: false,

                /**
                 * @property {string} contentType 'html' or 'null' for plaintext
                 */
                contentType: 'html',

                /**
                 * All typing is complete
                 * @param {Typed} self
                 */
                onComplete: function onComplete(self) {},

                /**
                 * Before each string is typed
                 * @param {number} arrayPos
                 * @param {Typed} self
                 */
                preStringTyped: function preStringTyped(arrayPos, self) {},

                /**
                 * After each string is typed
                 * @param {number} arrayPos
                 * @param {Typed} self
                 */
                onStringTyped: function onStringTyped(arrayPos, self) {},

                /**
                 * During looping, after last string is typed
                 * @param {Typed} self
                 */
                onLastStringBackspaced: function onLastStringBackspaced(self) {},

                /**
                 * Typing has been stopped
                 * @param {number} arrayPos
                 * @param {Typed} self
                 */
                onTypingPaused: function onTypingPaused(arrayPos, self) {},

                /**
                 * Typing has been started after being stopped
                 * @param {number} arrayPos
                 * @param {Typed} self
                 */
                onTypingResumed: function onTypingResumed(arrayPos, self) {},

                /**
                 * After reset
                 * @param {Typed} self
                 */
                onReset: function onReset(self) {},

                /**
                 * After stop
                 * @param {number} arrayPos
                 * @param {Typed} self
                 */
                onStop: function onStop(arrayPos, self) {},

                /**
                 * After start
                 * @param {number} arrayPos
                 * @param {Typed} self
                 */
                onStart: function onStart(arrayPos, self) {},

                /**
                 * After destroy
                 * @param {Typed} self
                 */
                onDestroy: function onDestroy(self) {}
            };

            exports['default'] = defaults;
            module.exports = exports['default'];

            /***/ }),
        /* 3 */
        /***/ (function(module, exports) {


            /**
             * TODO: These methods can probably be combined somehow
             * Parse HTML tags & HTML Characters
             */

            'use strict';

            Object.defineProperty(exports, '__esModule', {
                value: true
            });

            var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

            var HTMLParser = (function () {
                function HTMLParser() {
                    _classCallCheck(this, HTMLParser);
                }

                _createClass(HTMLParser, [{
                    key: 'typeHtmlChars',

                    /**
                     * Type HTML tags & HTML Characters
                     * @param {string} curString Current string
                     * @param {number} curStrPos Position in current string
                     * @param {Typed} self instance of Typed
                     * @returns {number} a new string position
                     * @private
                     */

                    value: function typeHtmlChars(curString, curStrPos, self) {
                        if (self.contentType !== 'html') return curStrPos;
                        var curChar = curString.substr(curStrPos).charAt(0);
                        if (curChar === '<' || curChar === '&') {
                            var endTag = '';
                            if (curChar === '<') {
                                endTag = '>';
                            } else {
                                endTag = ';';
                            }
                            while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
                                curStrPos++;
                                if (curStrPos + 1 > curString.length) {
                                    break;
                                }
                            }
                            curStrPos++;
                        }
                        return curStrPos;
                    }

                    /**
                     * Backspace HTML tags and HTML Characters
                     * @param {string} curString Current string
                     * @param {number} curStrPos Position in current string
                     * @param {Typed} self instance of Typed
                     * @returns {number} a new string position
                     * @private
                     */
                }, {
                    key: 'backSpaceHtmlChars',
                    value: function backSpaceHtmlChars(curString, curStrPos, self) {
                        if (self.contentType !== 'html') return curStrPos;
                        var curChar = curString.substr(curStrPos).charAt(0);
                        if (curChar === '>' || curChar === ';') {
                            var endTag = '';
                            if (curChar === '>') {
                                endTag = '<';
                            } else {
                                endTag = '&';
                            }
                            while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
                                curStrPos--;
                                if (curStrPos < 0) {
                                    break;
                                }
                            }
                            curStrPos--;
                        }
                        return curStrPos;
                    }
                }]);

                return HTMLParser;
            })();

            exports['default'] = HTMLParser;
            var htmlParser = new HTMLParser();
            exports.htmlParser = htmlParser;

            /***/ })
        /******/ ])
});
;
(function () {


    $(document).ready(function () {


    })


})();

(function () {

    var $body = $('body');
    var onScrollBody = function() {
        if(window.pageYOffset > 100) {
            $body.addClass('header-background');
        }  else {
            $body.removeClass('header-background');
        }
    };

    $(window).on('scroll', onScrollBody)

})();

(function() {

    $(document).ready(function () {

        var startIndex = 0;

        if($('.siema').length > 0) {

            var siema = new Siema({
                selector: '.siema',
                duration: 200,
                easing: 'ease-out',
                perPage: 1,
                startIndex: startIndex,
                draggable: true,
                multipleDrag: true,
                threshold: 20,
                loop: false,
                onInit: function() {},
                onChange: function() {}
            });

            var loop = function() {
                setTimeout(function() {
                    if(startIndex < 3) {
                        startIndex++;
                        siema.goTo(startIndex);
                    } else {
                        startIndex = 0;
                        siema.goTo(startIndex);
                    }

                    loop();

                }, 6000);
            };

            loop();

            $('.js-prev').on('click', function() {
                siema.prev();
            });

            $('.js-next').on('click', function() {
                siema.next();
            });

            $('.js-down').on('click', function() {
                var aTag = $('#start');
                $('html,body').animate({scrollTop: aTag.offset().top},'slow');
            });


        }
    })

})();