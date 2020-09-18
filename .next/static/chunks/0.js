(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/photoswipe/dist/photoswipe-ui-default.js":
/*!***************************************************************!*\
  !*** ./node_modules/photoswipe/dist/photoswipe-ui-default.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
/**
*
* UI on top of main sliding area (caption, arrows, close button, etc.).
* Built just using public methods/properties of PhotoSwipe.
* 
*/
(function (root, factory) { 
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
})(this, function () {

	'use strict';



var PhotoSwipeUI_Default =
 function(pswp, framework) {

	var ui = this;
	var _overlayUIUpdated = false,
		_controlsVisible = true,
		_fullscrenAPI,
		_controls,
		_captionContainer,
		_fakeCaptionContainer,
		_indexIndicator,
		_shareButton,
		_shareModal,
		_shareModalHidden = true,
		_initalCloseOnScrollValue,
		_isIdle,
		_listen,

		_loadingIndicator,
		_loadingIndicatorHidden,
		_loadingIndicatorTimeout,

		_galleryHasOneSlide,

		_options,
		_defaultUIOptions = {
			barsSize: {top:44, bottom:'auto'},
			closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'], 
			timeToIdle: 4000, 
			timeToIdleOutside: 1000,
			loadingIndicatorDelay: 1000, // 2s
			
			addCaptionHTMLFn: function(item, captionEl /*, isFake */) {
				if(!item.title) {
					captionEl.children[0].innerHTML = '';
					return false;
				}
				captionEl.children[0].innerHTML = item.title;
				return true;
			},

			closeEl:true,
			captionEl: true,
			fullscreenEl: true,
			zoomEl: true,
			shareEl: true,
			counterEl: true,
			arrowEl: true,
			preloaderEl: true,

			tapToClose: false,
			tapToToggleControls: true,

			clickToCloseNonZoomable: true,

			shareButtons: [
				{id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
				{id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
				{id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/'+
													'?url={{url}}&media={{image_url}}&description={{text}}'},
				{id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
			],
			getImageURLForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.src || '';
			},
			getPageURLForShare: function( /* shareButtonData */ ) {
				return window.location.href;
			},
			getTextForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.title || '';
			},
				
			indexIndicatorSep: ' / ',
			fitControlsWidth: 1200

		},
		_blockControlsTap,
		_blockControlsTapTimeout;



	var _onControlsTap = function(e) {
			if(_blockControlsTap) {
				return true;
			}


			e = e || window.event;

			if(_options.timeToIdle && _options.mouseUsed && !_isIdle) {
				// reset idle timer
				_onIdleMouseMove();
			}


			var target = e.target || e.srcElement,
				uiElement,
				clickedClass = target.getAttribute('class') || '',
				found;

			for(var i = 0; i < _uiElements.length; i++) {
				uiElement = _uiElements[i];
				if(uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name ) > -1 ) {
					uiElement.onTap();
					found = true;

				}
			}

			if(found) {
				if(e.stopPropagation) {
					e.stopPropagation();
				}
				_blockControlsTap = true;

				// Some versions of Android don't prevent ghost click event 
				// when preventDefault() was called on touchstart and/or touchend.
				// 
				// This happens on v4.3, 4.2, 4.1, 
				// older versions strangely work correctly, 
				// but just in case we add delay on all of them)	
				var tapDelay = framework.features.isOldAndroid ? 600 : 30;
				_blockControlsTapTimeout = setTimeout(function() {
					_blockControlsTap = false;
				}, tapDelay);
			}

		},
		_fitControlsInViewport = function() {
			return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
		},
		_togglePswpClass = function(el, cName, add) {
			framework[ (add ? 'add' : 'remove') + 'Class' ](el, 'pswp__' + cName);
		},

		// add class when there is just one item in the gallery
		// (by default it hides left/right arrows and 1ofX counter)
		_countNumItems = function() {
			var hasOneSlide = (_options.getNumItemsFn() === 1);

			if(hasOneSlide !== _galleryHasOneSlide) {
				_togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);
				_galleryHasOneSlide = hasOneSlide;
			}
		},
		_toggleShareModalClass = function() {
			_togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
		},
		_toggleShareModal = function() {

			_shareModalHidden = !_shareModalHidden;
			
			
			if(!_shareModalHidden) {
				_toggleShareModalClass();
				setTimeout(function() {
					if(!_shareModalHidden) {
						framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
					}
				}, 30);
			} else {
				framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
				setTimeout(function() {
					if(_shareModalHidden) {
						_toggleShareModalClass();
					}
				}, 300);
			}
			
			if(!_shareModalHidden) {
				_updateShareURLs();
			}
			return false;
		},

		_openWindowPopup = function(e) {
			e = e || window.event;
			var target = e.target || e.srcElement;

			pswp.shout('shareLinkClick', e, target);

			if(!target.href) {
				return false;
			}

			if( target.hasAttribute('download') ) {
				return true;
			}

			window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,'+
										'location=yes,width=550,height=420,top=100,left=' + 
										(window.screen ? Math.round(screen.width / 2 - 275) : 100)  );

			if(!_shareModalHidden) {
				_toggleShareModal();
			}
			
			return false;
		},
		_updateShareURLs = function() {
			var shareButtonOut = '',
				shareButtonData,
				shareURL,
				image_url,
				page_url,
				share_text;

			for(var i = 0; i < _options.shareButtons.length; i++) {
				shareButtonData = _options.shareButtons[i];

				image_url = _options.getImageURLForShare(shareButtonData);
				page_url = _options.getPageURLForShare(shareButtonData);
				share_text = _options.getTextForShare(shareButtonData);

				shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url) )
									.replace('{{image_url}}', encodeURIComponent(image_url) )
									.replace('{{raw_image_url}}', image_url )
									.replace('{{text}}', encodeURIComponent(share_text) );

				shareButtonOut += '<a href="' + shareURL + '" target="_blank" '+
									'class="pswp__share--' + shareButtonData.id + '"' +
									(shareButtonData.download ? 'download' : '') + '>' + 
									shareButtonData.label + '</a>';

				if(_options.parseShareButtonOut) {
					shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
				}
			}
			_shareModal.children[0].innerHTML = shareButtonOut;
			_shareModal.children[0].onclick = _openWindowPopup;

		},
		_hasCloseClass = function(target) {
			for(var  i = 0; i < _options.closeElClasses.length; i++) {
				if( framework.hasClass(target, 'pswp__' + _options.closeElClasses[i]) ) {
					return true;
				}
			}
		},
		_idleInterval,
		_idleTimer,
		_idleIncrement = 0,
		_onIdleMouseMove = function() {
			clearTimeout(_idleTimer);
			_idleIncrement = 0;
			if(_isIdle) {
				ui.setIdle(false);
			}
		},
		_onMouseLeaveWindow = function(e) {
			e = e ? e : window.event;
			var from = e.relatedTarget || e.toElement;
			if (!from || from.nodeName === 'HTML') {
				clearTimeout(_idleTimer);
				_idleTimer = setTimeout(function() {
					ui.setIdle(true);
				}, _options.timeToIdleOutside);
			}
		},
		_setupFullscreenAPI = function() {
			if(_options.fullscreenEl && !framework.features.isOldAndroid) {
				if(!_fullscrenAPI) {
					_fullscrenAPI = ui.getFullscreenAPI();
				}
				if(_fullscrenAPI) {
					framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
					ui.updateFullscreen();
					framework.addClass(pswp.template, 'pswp--supports-fs');
				} else {
					framework.removeClass(pswp.template, 'pswp--supports-fs');
				}
			}
		},
		_setupLoadingIndicator = function() {
			// Setup loading indicator
			if(_options.preloaderEl) {
			
				_toggleLoadingIndicator(true);

				_listen('beforeChange', function() {

					clearTimeout(_loadingIndicatorTimeout);

					// display loading indicator with delay
					_loadingIndicatorTimeout = setTimeout(function() {

						if(pswp.currItem && pswp.currItem.loading) {

							if( !pswp.allowProgressiveImg() || (pswp.currItem.img && !pswp.currItem.img.naturalWidth)  ) {
								// show preloader if progressive loading is not enabled, 
								// or image width is not defined yet (because of slow connection)
								_toggleLoadingIndicator(false); 
								// items-controller.js function allowProgressiveImg
							}
							
						} else {
							_toggleLoadingIndicator(true); // hide preloader
						}

					}, _options.loadingIndicatorDelay);
					
				});
				_listen('imageLoadComplete', function(index, item) {
					if(pswp.currItem === item) {
						_toggleLoadingIndicator(true);
					}
				});

			}
		},
		_toggleLoadingIndicator = function(hide) {
			if( _loadingIndicatorHidden !== hide ) {
				_togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
				_loadingIndicatorHidden = hide;
			}
		},
		_applyNavBarGaps = function(item) {
			var gap = item.vGap;

			if( _fitControlsInViewport() ) {
				
				var bars = _options.barsSize; 
				if(_options.captionEl && bars.bottom === 'auto') {
					if(!_fakeCaptionContainer) {
						_fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');
						_fakeCaptionContainer.appendChild( framework.createEl('pswp__caption__center') );
						_controls.insertBefore(_fakeCaptionContainer, _captionContainer);
						framework.addClass(_controls, 'pswp__ui--fit');
					}
					if( _options.addCaptionHTMLFn(item, _fakeCaptionContainer, true) ) {

						var captionSize = _fakeCaptionContainer.clientHeight;
						gap.bottom = parseInt(captionSize,10) || 44;
					} else {
						gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
					}
				} else {
					gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
				}
				
				// height of top bar is static, no need to calculate it
				gap.top = bars.top;
			} else {
				gap.top = gap.bottom = 0;
			}
		},
		_setupIdle = function() {
			// Hide controls when mouse is used
			if(_options.timeToIdle) {
				_listen('mouseUsed', function() {
					
					framework.bind(document, 'mousemove', _onIdleMouseMove);
					framework.bind(document, 'mouseout', _onMouseLeaveWindow);

					_idleInterval = setInterval(function() {
						_idleIncrement++;
						if(_idleIncrement === 2) {
							ui.setIdle(true);
						}
					}, _options.timeToIdle / 2);
				});
			}
		},
		_setupHidingControlsDuringGestures = function() {

			// Hide controls on vertical drag
			_listen('onVerticalDrag', function(now) {
				if(_controlsVisible && now < 0.95) {
					ui.hideControls();
				} else if(!_controlsVisible && now >= 0.95) {
					ui.showControls();
				}
			});

			// Hide controls when pinching to close
			var pinchControlsHidden;
			_listen('onPinchClose' , function(now) {
				if(_controlsVisible && now < 0.9) {
					ui.hideControls();
					pinchControlsHidden = true;
				} else if(pinchControlsHidden && !_controlsVisible && now > 0.9) {
					ui.showControls();
				}
			});

			_listen('zoomGestureEnded', function() {
				pinchControlsHidden = false;
				if(pinchControlsHidden && !_controlsVisible) {
					ui.showControls();
				}
			});

		};



	var _uiElements = [
		{ 
			name: 'caption', 
			option: 'captionEl',
			onInit: function(el) {  
				_captionContainer = el; 
			} 
		},
		{ 
			name: 'share-modal', 
			option: 'shareEl',
			onInit: function(el) {  
				_shareModal = el;
			},
			onTap: function() {
				_toggleShareModal();
			} 
		},
		{ 
			name: 'button--share', 
			option: 'shareEl',
			onInit: function(el) { 
				_shareButton = el;
			},
			onTap: function() {
				_toggleShareModal();
			} 
		},
		{ 
			name: 'button--zoom', 
			option: 'zoomEl',
			onTap: pswp.toggleDesktopZoom
		},
		{ 
			name: 'counter', 
			option: 'counterEl',
			onInit: function(el) {  
				_indexIndicator = el;
			} 
		},
		{ 
			name: 'button--close', 
			option: 'closeEl',
			onTap: pswp.close
		},
		{ 
			name: 'button--arrow--left', 
			option: 'arrowEl',
			onTap: pswp.prev
		},
		{ 
			name: 'button--arrow--right', 
			option: 'arrowEl',
			onTap: pswp.next
		},
		{ 
			name: 'button--fs', 
			option: 'fullscreenEl',
			onTap: function() {  
				if(_fullscrenAPI.isFullscreen()) {
					_fullscrenAPI.exit();
				} else {
					_fullscrenAPI.enter();
				}
			} 
		},
		{ 
			name: 'preloader', 
			option: 'preloaderEl',
			onInit: function(el) {  
				_loadingIndicator = el;
			} 
		}

	];

	var _setupUIElements = function() {
		var item,
			classAttr,
			uiElement;

		var loopThroughChildElements = function(sChildren) {
			if(!sChildren) {
				return;
			}

			var l = sChildren.length;
			for(var i = 0; i < l; i++) {
				item = sChildren[i];
				classAttr = item.className;

				for(var a = 0; a < _uiElements.length; a++) {
					uiElement = _uiElements[a];

					if(classAttr.indexOf('pswp__' + uiElement.name) > -1  ) {

						if( _options[uiElement.option] ) { // if element is not disabled from options
							
							framework.removeClass(item, 'pswp__element--disabled');
							if(uiElement.onInit) {
								uiElement.onInit(item);
							}
							
							//item.style.display = 'block';
						} else {
							framework.addClass(item, 'pswp__element--disabled');
							//item.style.display = 'none';
						}
					}
				}
			}
		};
		loopThroughChildElements(_controls.children);

		var topBar =  framework.getChildByClass(_controls, 'pswp__top-bar');
		if(topBar) {
			loopThroughChildElements( topBar.children );
		}
	};


	

	ui.init = function() {

		// extend options
		framework.extend(pswp.options, _defaultUIOptions, true);

		// create local link for fast access
		_options = pswp.options;

		// find pswp__ui element
		_controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui');

		// create local link
		_listen = pswp.listen;


		_setupHidingControlsDuringGestures();

		// update controls when slides change
		_listen('beforeChange', ui.update);

		// toggle zoom on double-tap
		_listen('doubleTap', function(point) {
			var initialZoomLevel = pswp.currItem.initialZoomLevel;
			if(pswp.getZoomLevel() !== initialZoomLevel) {
				pswp.zoomTo(initialZoomLevel, point, 333);
			} else {
				pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
			}
		});

		// Allow text selection in caption
		_listen('preventDragEvent', function(e, isDown, preventObj) {
			var t = e.target || e.srcElement;
			if(
				t && 
				t.getAttribute('class') && e.type.indexOf('mouse') > -1 && 
				( t.getAttribute('class').indexOf('__caption') > 0 || (/(SMALL|STRONG|EM)/i).test(t.tagName) ) 
			) {
				preventObj.prevent = false;
			}
		});

		// bind events for UI
		_listen('bindEvents', function() {
			framework.bind(_controls, 'pswpTap click', _onControlsTap);
			framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);

			if(!pswp.likelyTouchDevice) {
				framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
			}
		});

		// unbind events for UI
		_listen('unbindEvents', function() {
			if(!_shareModalHidden) {
				_toggleShareModal();
			}

			if(_idleInterval) {
				clearInterval(_idleInterval);
			}
			framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
			framework.unbind(document, 'mousemove', _onIdleMouseMove);
			framework.unbind(_controls, 'pswpTap click', _onControlsTap);
			framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
			framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);

			if(_fullscrenAPI) {
				framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
				if(_fullscrenAPI.isFullscreen()) {
					_options.hideAnimationDuration = 0;
					_fullscrenAPI.exit();
				}
				_fullscrenAPI = null;
			}
		});


		// clean up things when gallery is destroyed
		_listen('destroy', function() {
			if(_options.captionEl) {
				if(_fakeCaptionContainer) {
					_controls.removeChild(_fakeCaptionContainer);
				}
				framework.removeClass(_captionContainer, 'pswp__caption--empty');
			}

			if(_shareModal) {
				_shareModal.children[0].onclick = null;
			}
			framework.removeClass(_controls, 'pswp__ui--over-close');
			framework.addClass( _controls, 'pswp__ui--hidden');
			ui.setIdle(false);
		});
		

		if(!_options.showAnimationDuration) {
			framework.removeClass( _controls, 'pswp__ui--hidden');
		}
		_listen('initialZoomIn', function() {
			if(_options.showAnimationDuration) {
				framework.removeClass( _controls, 'pswp__ui--hidden');
			}
		});
		_listen('initialZoomOut', function() {
			framework.addClass( _controls, 'pswp__ui--hidden');
		});

		_listen('parseVerticalMargin', _applyNavBarGaps);
		
		_setupUIElements();

		if(_options.shareEl && _shareButton && _shareModal) {
			_shareModalHidden = true;
		}

		_countNumItems();

		_setupIdle();

		_setupFullscreenAPI();

		_setupLoadingIndicator();
	};

	ui.setIdle = function(isIdle) {
		_isIdle = isIdle;
		_togglePswpClass(_controls, 'ui--idle', isIdle);
	};

	ui.update = function() {
		// Don't update UI if it's hidden
		if(_controlsVisible && pswp.currItem) {
			
			ui.updateIndexIndicator();

			if(_options.captionEl) {
				_options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

				_togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
			}

			_overlayUIUpdated = true;

		} else {
			_overlayUIUpdated = false;
		}

		if(!_shareModalHidden) {
			_toggleShareModal();
		}

		_countNumItems();
	};

	ui.updateFullscreen = function(e) {

		if(e) {
			// some browsers change window scroll position during the fullscreen
			// so PhotoSwipe updates it just in case
			setTimeout(function() {
				pswp.setScrollOffset( 0, framework.getScrollY() );
			}, 50);
		}
		
		// toogle pswp--fs class on root element
		framework[ (_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class' ](pswp.template, 'pswp--fs');
	};

	ui.updateIndexIndicator = function() {
		if(_options.counterEl) {
			_indexIndicator.innerHTML = (pswp.getCurrentIndex()+1) + 
										_options.indexIndicatorSep + 
										_options.getNumItemsFn();
		}
	};
	
	ui.onGlobalTap = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		if(_blockControlsTap) {
			return;
		}

		if(e.detail && e.detail.pointerType === 'mouse') {

			// close gallery if clicked outside of the image
			if(_hasCloseClass(target)) {
				pswp.close();
				return;
			}

			if(framework.hasClass(target, 'pswp__img')) {
				if(pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
					if(_options.clickToCloseNonZoomable) {
						pswp.close();
					}
				} else {
					pswp.toggleDesktopZoom(e.detail.releasePoint);
				}
			}
			
		} else {

			// tap anywhere (except buttons) to toggle visibility of controls
			if(_options.tapToToggleControls) {
				if(_controlsVisible) {
					ui.hideControls();
				} else {
					ui.showControls();
				}
			}

			// tap to close gallery
			if(_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target)) ) {
				pswp.close();
				return;
			}
			
		}
	};
	ui.onMouseOver = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		// add class when mouse is over an element that should close the gallery
		_togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
	};

	ui.hideControls = function() {
		framework.addClass(_controls,'pswp__ui--hidden');
		_controlsVisible = false;
	};

	ui.showControls = function() {
		_controlsVisible = true;
		if(!_overlayUIUpdated) {
			ui.update();
		}
		framework.removeClass(_controls,'pswp__ui--hidden');
	};

	ui.supportsFullscreen = function() {
		var d = document;
		return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
	};

	ui.getFullscreenAPI = function() {
		var dE = document.documentElement,
			api,
			tF = 'fullscreenchange';

		if (dE.requestFullscreen) {
			api = {
				enterK: 'requestFullscreen',
				exitK: 'exitFullscreen',
				elementK: 'fullscreenElement',
				eventK: tF
			};

		} else if(dE.mozRequestFullScreen ) {
			api = {
				enterK: 'mozRequestFullScreen',
				exitK: 'mozCancelFullScreen',
				elementK: 'mozFullScreenElement',
				eventK: 'moz' + tF
			};

			

		} else if(dE.webkitRequestFullscreen) {
			api = {
				enterK: 'webkitRequestFullscreen',
				exitK: 'webkitExitFullscreen',
				elementK: 'webkitFullscreenElement',
				eventK: 'webkit' + tF
			};

		} else if(dE.msRequestFullscreen) {
			api = {
				enterK: 'msRequestFullscreen',
				exitK: 'msExitFullscreen',
				elementK: 'msFullscreenElement',
				eventK: 'MSFullscreenChange'
			};
		}

		if(api) {
			api.enter = function() { 
				// disable close-on-scroll in fullscreen
				_initalCloseOnScrollValue = _options.closeOnScroll; 
				_options.closeOnScroll = false; 

				if(this.enterK === 'webkitRequestFullscreen') {
					pswp.template[this.enterK]( Element.ALLOW_KEYBOARD_INPUT );
				} else {
					return pswp.template[this.enterK](); 
				}
			};
			api.exit = function() { 
				_options.closeOnScroll = _initalCloseOnScrollValue;

				return document[this.exitK](); 

			};
			api.isFullscreen = function() { return document[this.elementK]; };
		}

		return api;
	};



};
return PhotoSwipeUI_Default;


});


/***/ }),

/***/ "./node_modules/photoswipe/dist/photoswipe.js":
/*!****************************************************!*\
  !*** ./node_modules/photoswipe/dist/photoswipe.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! PhotoSwipe - v4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
(function (root, factory) { 
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
})(this, function () {

	'use strict';
	var PhotoSwipe = function(template, UiClass, items, options){

/*>>framework-bridge*/
/**
 *
 * Set of generic functions used by gallery.
 * 
 * You're free to modify anything here as long as functionality is kept.
 * 
 */
var framework = {
	features: null,
	bind: function(target, type, listener, unbind) {
		var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
		type = type.split(' ');
		for(var i = 0; i < type.length; i++) {
			if(type[i]) {
				target[methodName]( type[i], listener, false);
			}
		}
	},
	isArray: function(obj) {
		return (obj instanceof Array);
	},
	createEl: function(classes, tag) {
		var el = document.createElement(tag || 'div');
		if(classes) {
			el.className = classes;
		}
		return el;
	},
	getScrollY: function() {
		var yOffset = window.pageYOffset;
		return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
	},
	unbind: function(target, type, listener) {
		framework.bind(target,type,listener,true);
	},
	removeClass: function(el, className) {
		var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
		el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, ''); 
	},
	addClass: function(el, className) {
		if( !framework.hasClass(el,className) ) {
			el.className += (el.className ? ' ' : '') + className;
		}
	},
	hasClass: function(el, className) {
		return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
	},
	getChildByClass: function(parentEl, childClassName) {
		var node = parentEl.firstChild;
		while(node) {
			if( framework.hasClass(node, childClassName) ) {
				return node;
			}
			node = node.nextSibling;
		}
	},
	arraySearch: function(array, value, key) {
		var i = array.length;
		while(i--) {
			if(array[i][key] === value) {
				return i;
			} 
		}
		return -1;
	},
	extend: function(o1, o2, preventOverwrite) {
		for (var prop in o2) {
			if (o2.hasOwnProperty(prop)) {
				if(preventOverwrite && o1.hasOwnProperty(prop)) {
					continue;
				}
				o1[prop] = o2[prop];
			}
		}
	},
	easing: {
		sine: {
			out: function(k) {
				return Math.sin(k * (Math.PI / 2));
			},
			inOut: function(k) {
				return - (Math.cos(Math.PI * k) - 1) / 2;
			}
		},
		cubic: {
			out: function(k) {
				return --k * k * k + 1;
			}
		}
		/*
			elastic: {
				out: function ( k ) {

					var s, a = 0.1, p = 0.4;
					if ( k === 0 ) return 0;
					if ( k === 1 ) return 1;
					if ( !a || a < 1 ) { a = 1; s = p / 4; }
					else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
					return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

				},
			},
			back: {
				out: function ( k ) {
					var s = 1.70158;
					return --k * k * ( ( s + 1 ) * k + s ) + 1;
				}
			}
		*/
	},

	/**
	 * 
	 * @return {object}
	 * 
	 * {
	 *  raf : request animation frame function
	 *  caf : cancel animation frame function
	 *  transfrom : transform property key (with vendor), or null if not supported
	 *  oldIE : IE8 or below
	 * }
	 * 
	 */
	detectFeatures: function() {
		if(framework.features) {
			return framework.features;
		}
		var helperEl = framework.createEl(),
			helperStyle = helperEl.style,
			vendor = '',
			features = {};

		// IE8 and below
		features.oldIE = document.all && !document.addEventListener;

		features.touch = 'ontouchstart' in window;

		if(window.requestAnimationFrame) {
			features.raf = window.requestAnimationFrame;
			features.caf = window.cancelAnimationFrame;
		}

		features.pointerEvent = !!(window.PointerEvent) || navigator.msPointerEnabled;

		// fix false-positive detection of old Android in new IE
		// (IE11 ua string contains "Android 4.0")
		
		if(!features.pointerEvent) { 

			var ua = navigator.userAgent;

			// Detect if device is iPhone or iPod and if it's older than iOS 8
			// http://stackoverflow.com/a/14223920
			// 
			// This detection is made because of buggy top/bottom toolbars
			// that don't trigger window.resize event.
			// For more info refer to _isFixedPosition variable in core.js

			if (/iP(hone|od)/.test(navigator.platform)) {
				var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
				if(v && v.length > 0) {
					v = parseInt(v[1], 10);
					if(v >= 1 && v < 8 ) {
						features.isOldIOSPhone = true;
					}
				}
			}

			// Detect old Android (before KitKat)
			// due to bugs related to position:fixed
			// http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript
			
			var match = ua.match(/Android\s([0-9\.]*)/);
			var androidversion =  match ? match[1] : 0;
			androidversion = parseFloat(androidversion);
			if(androidversion >= 1 ) {
				if(androidversion < 4.4) {
					features.isOldAndroid = true; // for fixed position bug & performance
				}
				features.androidVersion = androidversion; // for touchend bug
			}	
			features.isMobileOpera = /opera mini|opera mobi/i.test(ua);

			// p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
		}
		
		var styleChecks = ['transform', 'perspective', 'animationName'],
			vendors = ['', 'webkit','Moz','ms','O'],
			styleCheckItem,
			styleName;

		for(var i = 0; i < 4; i++) {
			vendor = vendors[i];

			for(var a = 0; a < 3; a++) {
				styleCheckItem = styleChecks[a];

				// uppercase first letter of property name, if vendor is present
				styleName = vendor + (vendor ? 
										styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) : 
										styleCheckItem);
			
				if(!features[styleCheckItem] && styleName in helperStyle ) {
					features[styleCheckItem] = styleName;
				}
			}

			if(vendor && !features.raf) {
				vendor = vendor.toLowerCase();
				features.raf = window[vendor+'RequestAnimationFrame'];
				if(features.raf) {
					features.caf = window[vendor+'CancelAnimationFrame'] || 
									window[vendor+'CancelRequestAnimationFrame'];
				}
			}
		}
			
		if(!features.raf) {
			var lastTime = 0;
			features.raf = function(fn) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function() { fn(currTime + timeToCall); }, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
			features.caf = function(id) { clearTimeout(id); };
		}

		// Detect SVG support
		features.svg = !!document.createElementNS && 
						!!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

		framework.features = features;

		return features;
	}
};

framework.detectFeatures();

// Override addEventListener for old versions of IE
if(framework.features.oldIE) {

	framework.bind = function(target, type, listener, unbind) {
		
		type = type.split(' ');

		var methodName = (unbind ? 'detach' : 'attach') + 'Event',
			evName,
			_handleEv = function() {
				listener.handleEvent.call(listener);
			};

		for(var i = 0; i < type.length; i++) {
			evName = type[i];
			if(evName) {

				if(typeof listener === 'object' && listener.handleEvent) {
					if(!unbind) {
						listener['oldIE' + evName] = _handleEv;
					} else {
						if(!listener['oldIE' + evName]) {
							return false;
						}
					}

					target[methodName]( 'on' + evName, listener['oldIE' + evName]);
				} else {
					target[methodName]( 'on' + evName, listener);
				}

			}
		}
	};
	
}

/*>>framework-bridge*/

/*>>core*/
//function(template, UiClass, items, options)

var self = this;

/**
 * Static vars, don't change unless you know what you're doing.
 */
var DOUBLE_TAP_RADIUS = 25, 
	NUM_HOLDERS = 3;

/**
 * Options
 */
var _options = {
	allowPanToNext:true,
	spacing: 0.12,
	bgOpacity: 1,
	mouseUsed: false,
	loop: true,
	pinchToClose: true,
	closeOnScroll: true,
	closeOnVerticalDrag: true,
	verticalDragRange: 0.75,
	hideAnimationDuration: 333,
	showAnimationDuration: 333,
	showHideOpacity: false,
	focus: true,
	escKey: true,
	arrowKeys: true,
	mainScrollEndFriction: 0.35,
	panEndFriction: 0.35,
	isClickableElement: function(el) {
        return el.tagName === 'A';
    },
    getDoubleTapZoom: function(isMouseClick, item) {
    	if(isMouseClick) {
    		return 1;
    	} else {
    		return item.initialZoomLevel < 0.7 ? 1 : 1.33;
    	}
    },
    maxSpreadZoom: 1.33,
	modal: true,

	// not fully implemented yet
	scaleMode: 'fit' // TODO
};
framework.extend(_options, options);


/**
 * Private helper variables & functions
 */

var _getEmptyPoint = function() { 
		return {x:0,y:0}; 
	};

var _isOpen,
	_isDestroying,
	_closedByScroll,
	_currentItemIndex,
	_containerStyle,
	_containerShiftIndex,
	_currPanDist = _getEmptyPoint(),
	_startPanOffset = _getEmptyPoint(),
	_panOffset = _getEmptyPoint(),
	_upMoveEvents, // drag move, drag end & drag cancel events array
	_downEvents, // drag start events array
	_globalEventHandlers,
	_viewportSize = {},
	_currZoomLevel,
	_startZoomLevel,
	_translatePrefix,
	_translateSufix,
	_updateSizeInterval,
	_itemsNeedUpdate,
	_currPositionIndex = 0,
	_offset = {},
	_slideSize = _getEmptyPoint(), // size of slide area, including spacing
	_itemHolders,
	_prevItemIndex,
	_indexDiff = 0, // difference of indexes since last content update
	_dragStartEvent,
	_dragMoveEvent,
	_dragEndEvent,
	_dragCancelEvent,
	_transformKey,
	_pointerEventEnabled,
	_isFixedPosition = true,
	_likelyTouchDevice,
	_modules = [],
	_requestAF,
	_cancelAF,
	_initalClassName,
	_initalWindowScrollY,
	_oldIE,
	_currentWindowScrollY,
	_features,
	_windowVisibleSize = {},
	_renderMaxResolution = false,
	_orientationChangeTimeout,


	// Registers PhotoSWipe module (History, Controller ...)
	_registerModule = function(name, module) {
		framework.extend(self, module.publicMethods);
		_modules.push(name);
	},

	_getLoopedId = function(index) {
		var numSlides = _getNumItems();
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	
	// Micro bind/trigger
	_listeners = {},
	_listen = function(name, fn) {
		if(!_listeners[name]) {
			_listeners[name] = [];
		}
		return _listeners[name].push(fn);
	},
	_shout = function(name) {
		var listeners = _listeners[name];

		if(listeners) {
			var args = Array.prototype.slice.call(arguments);
			args.shift();

			for(var i = 0; i < listeners.length; i++) {
				listeners[i].apply(self, args);
			}
		}
	},

	_getCurrentTime = function() {
		return new Date().getTime();
	},
	_applyBgOpacity = function(opacity) {
		_bgOpacity = opacity;
		self.bg.style.opacity = opacity * _options.bgOpacity;
	},

	_applyZoomTransform = function(styleObj,x,y,zoom,item) {
		if(!_renderMaxResolution || (item && item !== self.currItem) ) {
			zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);	
		}
			
		styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
	},
	_applyCurrentZoomPan = function( allowRenderResolution ) {
		if(_currZoomElementStyle) {

			if(allowRenderResolution) {
				if(_currZoomLevel > self.currItem.fitRatio) {
					if(!_renderMaxResolution) {
						_setImageSize(self.currItem, false, true);
						_renderMaxResolution = true;
					}
				} else {
					if(_renderMaxResolution) {
						_setImageSize(self.currItem);
						_renderMaxResolution = false;
					}
				}
			}
			

			_applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
		}
	},
	_applyZoomPanToItem = function(item) {
		if(item.container) {

			_applyZoomTransform(item.container.style, 
								item.initialPosition.x, 
								item.initialPosition.y, 
								item.initialZoomLevel,
								item);
		}
	},
	_setTranslateX = function(x, elStyle) {
		elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
	},
	_moveMainScroll = function(x, dragging) {

		if(!_options.loop && dragging) {
			var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
				delta = Math.round(x - _mainScrollPos.x);

			if( (newSlideIndexOffset < 0 && delta > 0) || 
				(newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) ) {
				x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
			} 
		}
		
		_mainScrollPos.x = x;
		_setTranslateX(x, _containerStyle);
	},
	_calculatePanOffset = function(axis, zoomLevel) {
		var m = _midZoomPoint[axis] - _offset[axis];
		return _startPanOffset[axis] + _currPanDist[axis] + m - m * ( zoomLevel / _startZoomLevel );
	},
	
	_equalizePoints = function(p1, p2) {
		p1.x = p2.x;
		p1.y = p2.y;
		if(p2.id) {
			p1.id = p2.id;
		}
	},
	_roundPoint = function(p) {
		p.x = Math.round(p.x);
		p.y = Math.round(p.y);
	},

	_mouseMoveTimeout = null,
	_onFirstMouseMove = function() {
		// Wait until mouse move event is fired at least twice during 100ms
		// We do this, because some mobile browsers trigger it on touchstart
		if(_mouseMoveTimeout ) { 
			framework.unbind(document, 'mousemove', _onFirstMouseMove);
			framework.addClass(template, 'pswp--has_mouse');
			_options.mouseUsed = true;
			_shout('mouseUsed');
		}
		_mouseMoveTimeout = setTimeout(function() {
			_mouseMoveTimeout = null;
		}, 100);
	},

	_bindEvents = function() {
		framework.bind(document, 'keydown', self);

		if(_features.transform) {
			// don't bind click event in browsers that don't support transform (mostly IE8)
			framework.bind(self.scrollWrap, 'click', self);
		}
		

		if(!_options.mouseUsed) {
			framework.bind(document, 'mousemove', _onFirstMouseMove);
		}

		framework.bind(window, 'resize scroll orientationchange', self);

		_shout('bindEvents');
	},

	_unbindEvents = function() {
		framework.unbind(window, 'resize scroll orientationchange', self);
		framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
		framework.unbind(document, 'keydown', self);
		framework.unbind(document, 'mousemove', _onFirstMouseMove);

		if(_features.transform) {
			framework.unbind(self.scrollWrap, 'click', self);
		}

		if(_isDragging) {
			framework.unbind(window, _upMoveEvents, self);
		}

		clearTimeout(_orientationChangeTimeout);

		_shout('unbindEvents');
	},
	
	_calculatePanBounds = function(zoomLevel, update) {
		var bounds = _calculateItemSize( self.currItem, _viewportSize, zoomLevel );
		if(update) {
			_currPanBounds = bounds;
		}
		return bounds;
	},
	
	_getMinZoomLevel = function(item) {
		if(!item) {
			item = self.currItem;
		}
		return item.initialZoomLevel;
	},
	_getMaxZoomLevel = function(item) {
		if(!item) {
			item = self.currItem;
		}
		return item.w > 0 ? _options.maxSpreadZoom : 1;
	},

	// Return true if offset is out of the bounds
	_modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
		if(destZoomLevel === self.currItem.initialZoomLevel) {
			destPanOffset[axis] = self.currItem.initialPosition[axis];
			return true;
		} else {
			destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel); 

			if(destPanOffset[axis] > destPanBounds.min[axis]) {
				destPanOffset[axis] = destPanBounds.min[axis];
				return true;
			} else if(destPanOffset[axis] < destPanBounds.max[axis] ) {
				destPanOffset[axis] = destPanBounds.max[axis];
				return true;
			}
		}
		return false;
	},

	_setupTransforms = function() {

		if(_transformKey) {
			// setup 3d transforms
			var allow3dTransform = _features.perspective && !_likelyTouchDevice;
			_translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
			_translateSufix = _features.perspective ? ', 0px)' : ')';	
			return;
		}

		// Override zoom/pan/move functions in case old browser is used (most likely IE)
		// (so they use left/top/width/height, instead of CSS transform)
	
		_transformKey = 'left';
		framework.addClass(template, 'pswp--ie');

		_setTranslateX = function(x, elStyle) {
			elStyle.left = x + 'px';
		};
		_applyZoomPanToItem = function(item) {

			var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
				s = item.container.style,
				w = zoomRatio * item.w,
				h = zoomRatio * item.h;

			s.width = w + 'px';
			s.height = h + 'px';
			s.left = item.initialPosition.x + 'px';
			s.top = item.initialPosition.y + 'px';

		};
		_applyCurrentZoomPan = function() {
			if(_currZoomElementStyle) {

				var s = _currZoomElementStyle,
					item = self.currItem,
					zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
					w = zoomRatio * item.w,
					h = zoomRatio * item.h;

				s.width = w + 'px';
				s.height = h + 'px';


				s.left = _panOffset.x + 'px';
				s.top = _panOffset.y + 'px';
			}
			
		};
	},

	_onKeyDown = function(e) {
		var keydownAction = '';
		if(_options.escKey && e.keyCode === 27) { 
			keydownAction = 'close';
		} else if(_options.arrowKeys) {
			if(e.keyCode === 37) {
				keydownAction = 'prev';
			} else if(e.keyCode === 39) { 
				keydownAction = 'next';
			}
		}

		if(keydownAction) {
			// don't do anything if special key pressed to prevent from overriding default browser actions
			// e.g. in Chrome on Mac cmd+arrow-left returns to previous page
			if( !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey ) {
				if(e.preventDefault) {
					e.preventDefault();
				} else {
					e.returnValue = false;
				} 
				self[keydownAction]();
			}
		}
	},

	_onGlobalClick = function(e) {
		if(!e) {
			return;
		}

		// don't allow click event to pass through when triggering after drag or some other gesture
		if(_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
			e.preventDefault();
			e.stopPropagation();
		}
	},

	_updatePageScrollOffset = function() {
		self.setScrollOffset(0, framework.getScrollY());		
	};
	


	



// Micro animation engine
var _animations = {},
	_numAnimations = 0,
	_stopAnimation = function(name) {
		if(_animations[name]) {
			if(_animations[name].raf) {
				_cancelAF( _animations[name].raf );
			}
			_numAnimations--;
			delete _animations[name];
		}
	},
	_registerStartAnimation = function(name) {
		if(_animations[name]) {
			_stopAnimation(name);
		}
		if(!_animations[name]) {
			_numAnimations++;
			_animations[name] = {};
		}
	},
	_stopAllAnimations = function() {
		for (var prop in _animations) {

			if( _animations.hasOwnProperty( prop ) ) {
				_stopAnimation(prop);
			} 
			
		}
	},
	_animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
		var startAnimTime = _getCurrentTime(), t;
		_registerStartAnimation(name);

		var animloop = function(){
			if ( _animations[name] ) {
				
				t = _getCurrentTime() - startAnimTime; // time diff
				//b - beginning (start prop)
				//d - anim duration

				if ( t >= d ) {
					_stopAnimation(name);
					onUpdate(endProp);
					if(onComplete) {
						onComplete();
					}
					return;
				}
				onUpdate( (endProp - b) * easingFn(t/d) + b );

				_animations[name].raf = _requestAF(animloop);
			}
		};
		animloop();
	};
	


var publicMethods = {

	// make a few local variables and functions public
	shout: _shout,
	listen: _listen,
	viewportSize: _viewportSize,
	options: _options,

	isMainScrollAnimating: function() {
		return _mainScrollAnimating;
	},
	getZoomLevel: function() {
		return _currZoomLevel;
	},
	getCurrentIndex: function() {
		return _currentItemIndex;
	},
	isDragging: function() {
		return _isDragging;
	},	
	isZooming: function() {
		return _isZooming;
	},
	setScrollOffset: function(x,y) {
		_offset.x = x;
		_currentWindowScrollY = _offset.y = y;
		_shout('updateScrollOffset', _offset);
	},
	applyZoomPan: function(zoomLevel,panX,panY,allowRenderResolution) {
		_panOffset.x = panX;
		_panOffset.y = panY;
		_currZoomLevel = zoomLevel;
		_applyCurrentZoomPan( allowRenderResolution );
	},

	init: function() {

		if(_isOpen || _isDestroying) {
			return;
		}

		var i;

		self.framework = framework; // basic functionality
		self.template = template; // root DOM element of PhotoSwipe
		self.bg = framework.getChildByClass(template, 'pswp__bg');

		_initalClassName = template.className;
		_isOpen = true;
				
		_features = framework.detectFeatures();
		_requestAF = _features.raf;
		_cancelAF = _features.caf;
		_transformKey = _features.transform;
		_oldIE = _features.oldIE;
		
		self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
		self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');

		_containerStyle = self.container.style; // for fast access

		// Objects that hold slides (there are only 3 in DOM)
		self.itemHolders = _itemHolders = [
			{el:self.container.children[0] , wrap:0, index: -1},
			{el:self.container.children[1] , wrap:0, index: -1},
			{el:self.container.children[2] , wrap:0, index: -1}
		];

		// hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
		_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

		_setupTransforms();

		// Setup global events
		_globalEventHandlers = {
			resize: self.updateSize,

			// Fixes: iOS 10.3 resize event
			// does not update scrollWrap.clientWidth instantly after resize
			// https://github.com/dimsemenov/PhotoSwipe/issues/1315
			orientationchange: function() {
				clearTimeout(_orientationChangeTimeout);
				_orientationChangeTimeout = setTimeout(function() {
					if(_viewportSize.x !== self.scrollWrap.clientWidth) {
						self.updateSize();
					}
				}, 500);
			},
			scroll: _updatePageScrollOffset,
			keydown: _onKeyDown,
			click: _onGlobalClick
		};

		// disable show/hide effects on old browsers that don't support CSS animations or transforms, 
		// old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
		var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
		if(!_features.animationName || !_features.transform || oldPhone) {
			_options.showAnimationDuration = _options.hideAnimationDuration = 0;
		}

		// init modules
		for(i = 0; i < _modules.length; i++) {
			self['init' + _modules[i]]();
		}
		
		// init
		if(UiClass) {
			var ui = self.ui = new UiClass(self, framework);
			ui.init();
		}

		_shout('firstUpdate');
		_currentItemIndex = _currentItemIndex || _options.index || 0;
		// validate index
		if( isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems() ) {
			_currentItemIndex = 0;
		}
		self.currItem = _getItemAt( _currentItemIndex );

		
		if(_features.isOldIOSPhone || _features.isOldAndroid) {
			_isFixedPosition = false;
		}
		
		template.setAttribute('aria-hidden', 'false');
		if(_options.modal) {
			if(!_isFixedPosition) {
				template.style.position = 'absolute';
				template.style.top = framework.getScrollY() + 'px';
			} else {
				template.style.position = 'fixed';
			}
		}

		if(_currentWindowScrollY === undefined) {
			_shout('initialLayout');
			_currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
		}
		
		// add classes to root element of PhotoSwipe
		var rootClasses = 'pswp--open ';
		if(_options.mainClass) {
			rootClasses += _options.mainClass + ' ';
		}
		if(_options.showHideOpacity) {
			rootClasses += 'pswp--animate_opacity ';
		}
		rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
		rootClasses += _features.animationName ? ' pswp--css_animation' : '';
		rootClasses += _features.svg ? ' pswp--svg' : '';
		framework.addClass(template, rootClasses);

		self.updateSize();

		// initial update
		_containerShiftIndex = -1;
		_indexDiff = null;
		for(i = 0; i < NUM_HOLDERS; i++) {
			_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
		}

		if(!_oldIE) {
			framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
		}	

		_listen('initialZoomInEnd', function() {
			self.setContent(_itemHolders[0], _currentItemIndex-1);
			self.setContent(_itemHolders[2], _currentItemIndex+1);

			_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

			if(_options.focus) {
				// focus causes layout, 
				// which causes lag during the animation, 
				// that's why we delay it untill the initial zoom transition ends
				template.focus();
			}
			 

			_bindEvents();
		});

		// set content for center slide (first time)
		self.setContent(_itemHolders[1], _currentItemIndex);
		
		self.updateCurrItem();

		_shout('afterInit');

		if(!_isFixedPosition) {

			// On all versions of iOS lower than 8.0, we check size of viewport every second.
			// 
			// This is done to detect when Safari top & bottom bars appear, 
			// as this action doesn't trigger any events (like resize). 
			// 
			// On iOS8 they fixed this.
			// 
			// 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.
			
			_updateSizeInterval = setInterval(function() {
				if(!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel === self.currItem.initialZoomLevel)  ) {
					self.updateSize();
				}
			}, 1000);
		}

		framework.addClass(template, 'pswp--visible');
	},

	// Close the gallery, then destroy it
	close: function() {
		if(!_isOpen) {
			return;
		}

		_isOpen = false;
		_isDestroying = true;
		_shout('close');
		_unbindEvents();

		_showOrHide(self.currItem, null, true, self.destroy);
	},

	// destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
	destroy: function() {
		_shout('destroy');

		if(_showOrHideTimeout) {
			clearTimeout(_showOrHideTimeout);
		}
		
		template.setAttribute('aria-hidden', 'true');
		template.className = _initalClassName;

		if(_updateSizeInterval) {
			clearInterval(_updateSizeInterval);
		}

		framework.unbind(self.scrollWrap, _downEvents, self);

		// we unbind scroll event at the end, as closing animation may depend on it
		framework.unbind(window, 'scroll', self);

		_stopDragUpdateLoop();

		_stopAllAnimations();

		_listeners = null;
	},

	/**
	 * Pan image to position
	 * @param {Number} x     
	 * @param {Number} y     
	 * @param {Boolean} force Will ignore bounds if set to true.
	 */
	panTo: function(x,y,force) {
		if(!force) {
			if(x > _currPanBounds.min.x) {
				x = _currPanBounds.min.x;
			} else if(x < _currPanBounds.max.x) {
				x = _currPanBounds.max.x;
			}

			if(y > _currPanBounds.min.y) {
				y = _currPanBounds.min.y;
			} else if(y < _currPanBounds.max.y) {
				y = _currPanBounds.max.y;
			}
		}
		
		_panOffset.x = x;
		_panOffset.y = y;
		_applyCurrentZoomPan();
	},
	
	handleEvent: function (e) {
		e = e || window.event;
		if(_globalEventHandlers[e.type]) {
			_globalEventHandlers[e.type](e);
		}
	},


	goTo: function(index) {

		index = _getLoopedId(index);

		var diff = index - _currentItemIndex;
		_indexDiff = diff;

		_currentItemIndex = index;
		self.currItem = _getItemAt( _currentItemIndex );
		_currPositionIndex -= diff;
		
		_moveMainScroll(_slideSize.x * _currPositionIndex);
		

		_stopAllAnimations();
		_mainScrollAnimating = false;

		self.updateCurrItem();
	},
	next: function() {
		self.goTo( _currentItemIndex + 1);
	},
	prev: function() {
		self.goTo( _currentItemIndex - 1);
	},

	// update current zoom/pan objects
	updateCurrZoomItem: function(emulateSetContent) {
		if(emulateSetContent) {
			_shout('beforeChange', 0);
		}

		// itemHolder[1] is middle (current) item
		if(_itemHolders[1].el.children.length) {
			var zoomElement = _itemHolders[1].el.children[0];
			if( framework.hasClass(zoomElement, 'pswp__zoom-wrap') ) {
				_currZoomElementStyle = zoomElement.style;
			} else {
				_currZoomElementStyle = null;
			}
		} else {
			_currZoomElementStyle = null;
		}
		
		_currPanBounds = self.currItem.bounds;	
		_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;

		_panOffset.x = _currPanBounds.center.x;
		_panOffset.y = _currPanBounds.center.y;

		if(emulateSetContent) {
			_shout('afterChange');
		}
	},


	invalidateCurrItems: function() {
		_itemsNeedUpdate = true;
		for(var i = 0; i < NUM_HOLDERS; i++) {
			if( _itemHolders[i].item ) {
				_itemHolders[i].item.needsUpdate = true;
			}
		}
	},

	updateCurrItem: function(beforeAnimation) {

		if(_indexDiff === 0) {
			return;
		}

		var diffAbs = Math.abs(_indexDiff),
			tempHolder;

		if(beforeAnimation && diffAbs < 2) {
			return;
		}


		self.currItem = _getItemAt( _currentItemIndex );
		_renderMaxResolution = false;
		
		_shout('beforeChange', _indexDiff);

		if(diffAbs >= NUM_HOLDERS) {
			_containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
			diffAbs = NUM_HOLDERS;
		}
		for(var i = 0; i < diffAbs; i++) {
			if(_indexDiff > 0) {
				tempHolder = _itemHolders.shift();
				_itemHolders[NUM_HOLDERS-1] = tempHolder; // move first to last

				_containerShiftIndex++;
				_setTranslateX( (_containerShiftIndex+2) * _slideSize.x, tempHolder.el.style);
				self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
			} else {
				tempHolder = _itemHolders.pop();
				_itemHolders.unshift( tempHolder ); // move last to first

				_containerShiftIndex--;
				_setTranslateX( _containerShiftIndex * _slideSize.x, tempHolder.el.style);
				self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
			}
			
		}

		// reset zoom/pan on previous item
		if(_currZoomElementStyle && Math.abs(_indexDiff) === 1) {

			var prevItem = _getItemAt(_prevItemIndex);
			if(prevItem.initialZoomLevel !== _currZoomLevel) {
				_calculateItemSize(prevItem , _viewportSize );
				_setImageSize(prevItem);
				_applyZoomPanToItem( prevItem ); 				
			}

		}

		// reset diff after update
		_indexDiff = 0;

		self.updateCurrZoomItem();

		_prevItemIndex = _currentItemIndex;

		_shout('afterChange');
		
	},



	updateSize: function(force) {
		
		if(!_isFixedPosition && _options.modal) {
			var windowScrollY = framework.getScrollY();
			if(_currentWindowScrollY !== windowScrollY) {
				template.style.top = windowScrollY + 'px';
				_currentWindowScrollY = windowScrollY;
			}
			if(!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
				return;
			}
			_windowVisibleSize.x = window.innerWidth;
			_windowVisibleSize.y = window.innerHeight;

			//template.style.width = _windowVisibleSize.x + 'px';
			template.style.height = _windowVisibleSize.y + 'px';
		}



		_viewportSize.x = self.scrollWrap.clientWidth;
		_viewportSize.y = self.scrollWrap.clientHeight;

		_updatePageScrollOffset();

		_slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
		_slideSize.y = _viewportSize.y;

		_moveMainScroll(_slideSize.x * _currPositionIndex);

		_shout('beforeResize'); // even may be used for example to switch image sources


		// don't re-calculate size on inital size update
		if(_containerShiftIndex !== undefined) {

			var holder,
				item,
				hIndex;

			for(var i = 0; i < NUM_HOLDERS; i++) {
				holder = _itemHolders[i];
				_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, holder.el.style);

				hIndex = _currentItemIndex+i-1;

				if(_options.loop && _getNumItems() > 2) {
					hIndex = _getLoopedId(hIndex);
				}

				// update zoom level on items and refresh source (if needsUpdate)
				item = _getItemAt( hIndex );

				// re-render gallery item if `needsUpdate`,
				// or doesn't have `bounds` (entirely new slide object)
				if( item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds) ) {

					self.cleanSlide( item );
					
					self.setContent( holder, hIndex );

					// if "center" slide
					if(i === 1) {
						self.currItem = item;
						self.updateCurrZoomItem(true);
					}

					item.needsUpdate = false;

				} else if(holder.index === -1 && hIndex >= 0) {
					// add content first time
					self.setContent( holder, hIndex );
				}
				if(item && item.container) {
					_calculateItemSize(item, _viewportSize);
					_setImageSize(item);
					_applyZoomPanToItem( item );
				}
				
			}
			_itemsNeedUpdate = false;
		}	

		_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
		_currPanBounds = self.currItem.bounds;

		if(_currPanBounds) {
			_panOffset.x = _currPanBounds.center.x;
			_panOffset.y = _currPanBounds.center.y;
			_applyCurrentZoomPan( true );
		}
		
		_shout('resize');
	},
	
	// Zoom current item to
	zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
		/*
			if(destZoomLevel === 'fit') {
				destZoomLevel = self.currItem.fitRatio;
			} else if(destZoomLevel === 'fill') {
				destZoomLevel = self.currItem.fillRatio;
			}
		*/

		if(centerPoint) {
			_startZoomLevel = _currZoomLevel;
			_midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x ;
			_midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y ;
			_equalizePoints(_startPanOffset, _panOffset);
		}

		var destPanBounds = _calculatePanBounds(destZoomLevel, false),
			destPanOffset = {};

		_modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
		_modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

		var initialZoomLevel = _currZoomLevel;
		var initialPanOffset = {
			x: _panOffset.x,
			y: _panOffset.y
		};

		_roundPoint(destPanOffset);

		var onUpdate = function(now) {
			if(now === 1) {
				_currZoomLevel = destZoomLevel;
				_panOffset.x = destPanOffset.x;
				_panOffset.y = destPanOffset.y;
			} else {
				_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
				_panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
				_panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
			}

			if(updateFn) {
				updateFn(now);
			}

			_applyCurrentZoomPan( now === 1 );
		};

		if(speed) {
			_animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
		} else {
			onUpdate(1);
		}
	}


};


/*>>core*/

/*>>gestures*/
/**
 * Mouse/touch/pointer event handlers.
 * 
 * separated from @core.js for readability
 */

var MIN_SWIPE_DISTANCE = 30,
	DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

var _gestureStartTime,
	_gestureCheckSpeedTime,

	// pool of objects that are used during dragging of zooming
	p = {}, // first point
	p2 = {}, // second point (for zoom gesture)
	delta = {},
	_currPoint = {},
	_startPoint = {},
	_currPointers = [],
	_startMainScrollPos = {},
	_releaseAnimData,
	_posPoints = [], // array of points during dragging, used to determine type of gesture
	_tempPoint = {},

	_isZoomingIn,
	_verticalDragInitiated,
	_oldAndroidTouchEndTimeout,
	_currZoomedItemIndex = 0,
	_centerPoint = _getEmptyPoint(),
	_lastReleaseTime = 0,
	_isDragging, // at least one pointer is down
	_isMultitouch, // at least two _pointers are down
	_zoomStarted, // zoom level changed during zoom gesture
	_moved,
	_dragAnimFrame,
	_mainScrollShifted,
	_currentPoints, // array of current touch points
	_isZooming,
	_currPointsDistance,
	_startPointsDistance,
	_currPanBounds,
	_mainScrollPos = _getEmptyPoint(),
	_currZoomElementStyle,
	_mainScrollAnimating, // true, if animation after swipe gesture is running
	_midZoomPoint = _getEmptyPoint(),
	_currCenterPoint = _getEmptyPoint(),
	_direction,
	_isFirstMove,
	_opacityChanged,
	_bgOpacity,
	_wasOverInitialZoom,

	_isEqualPoints = function(p1, p2) {
		return p1.x === p2.x && p1.y === p2.y;
	},
	_isNearbyPoints = function(touch0, touch1) {
		return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
	},
	_calculatePointsDistance = function(p1, p2) {
		_tempPoint.x = Math.abs( p1.x - p2.x );
		_tempPoint.y = Math.abs( p1.y - p2.y );
		return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
	},
	_stopDragUpdateLoop = function() {
		if(_dragAnimFrame) {
			_cancelAF(_dragAnimFrame);
			_dragAnimFrame = null;
		}
	},
	_dragUpdateLoop = function() {
		if(_isDragging) {
			_dragAnimFrame = _requestAF(_dragUpdateLoop);
			_renderMovement();
		}
	},
	_canPan = function() {
		return !(_options.scaleMode === 'fit' && _currZoomLevel ===  self.currItem.initialZoomLevel);
	},
	
	// find the closest parent DOM element
	_closestElement = function(el, fn) {
	  	if(!el || el === document) {
	  		return false;
	  	}

	  	// don't search elements above pswp__scroll-wrap
	  	if(el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1 ) {
	  		return false;
	  	}

	  	if( fn(el) ) {
	  		return el;
	  	}

	  	return _closestElement(el.parentNode, fn);
	},

	_preventObj = {},
	_preventDefaultEventBehaviour = function(e, isDown) {
	    _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

		_shout('preventDragEvent', e, isDown, _preventObj);
		return _preventObj.prevent;

	},
	_convertTouchToPoint = function(touch, p) {
		p.x = touch.pageX;
		p.y = touch.pageY;
		p.id = touch.identifier;
		return p;
	},
	_findCenterOfPoints = function(p1, p2, pCenter) {
		pCenter.x = (p1.x + p2.x) * 0.5;
		pCenter.y = (p1.y + p2.y) * 0.5;
	},
	_pushPosPoint = function(time, x, y) {
		if(time - _gestureCheckSpeedTime > 50) {
			var o = _posPoints.length > 2 ? _posPoints.shift() : {};
			o.x = x;
			o.y = y; 
			_posPoints.push(o);
			_gestureCheckSpeedTime = time;
		}
	},

	_calculateVerticalDragOpacityRatio = function() {
		var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position
		return 1 -  Math.abs( yOffset / (_viewportSize.y / 2)  );
	},

	
	// points pool, reused during touch events
	_ePoint1 = {},
	_ePoint2 = {},
	_tempPointsArr = [],
	_tempCounter,
	_getTouchPoints = function(e) {
		// clean up previous points, without recreating array
		while(_tempPointsArr.length > 0) {
			_tempPointsArr.pop();
		}

		if(!_pointerEventEnabled) {
			if(e.type.indexOf('touch') > -1) {

				if(e.touches && e.touches.length > 0) {
					_tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
					if(e.touches.length > 1) {
						_tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
					}
				}
				
			} else {
				_ePoint1.x = e.pageX;
				_ePoint1.y = e.pageY;
				_ePoint1.id = '';
				_tempPointsArr[0] = _ePoint1;//_ePoint1;
			}
		} else {
			_tempCounter = 0;
			// we can use forEach, as pointer events are supported only in modern browsers
			_currPointers.forEach(function(p) {
				if(_tempCounter === 0) {
					_tempPointsArr[0] = p;
				} else if(_tempCounter === 1) {
					_tempPointsArr[1] = p;
				}
				_tempCounter++;

			});
		}
		return _tempPointsArr;
	},

	_panOrMoveMainScroll = function(axis, delta) {

		var panFriction,
			overDiff = 0,
			newOffset = _panOffset[axis] + delta[axis],
			startOverDiff,
			dir = delta[axis] > 0,
			newMainScrollPosition = _mainScrollPos.x + delta.x,
			mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
			newPanPos,
			newMainScrollPos;

		// calculate fdistance over the bounds and friction
		if(newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
			panFriction = _options.panEndFriction;
			// Linear increasing of friction, so at 1/4 of viewport it's at max value. 
			// Looks not as nice as was expected. Left for history.
			// panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
		} else {
			panFriction = 1;
		}
		
		newOffset = _panOffset[axis] + delta[axis] * panFriction;

		// move main scroll or start panning
		if(_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {


			if(!_currZoomElementStyle) {
				
				newMainScrollPos = newMainScrollPosition;

			} else if(_direction === 'h' && axis === 'x' && !_zoomStarted ) {
				
				if(dir) {
					if(newOffset > _currPanBounds.min[axis]) {
						panFriction = _options.panEndFriction;
						overDiff = _currPanBounds.min[axis] - newOffset;
						startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
					}
					
					// drag right
					if( (startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1 ) {
						newMainScrollPos = newMainScrollPosition;
						if(mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
							newMainScrollPos = _startMainScrollPos.x;
						}
					} else {
						if(_currPanBounds.min.x !== _currPanBounds.max.x) {
							newPanPos = newOffset;
						}
						
					}

				} else {

					if(newOffset < _currPanBounds.max[axis] ) {
						panFriction =_options.panEndFriction;
						overDiff = newOffset - _currPanBounds.max[axis];
						startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
					}

					if( (startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1 ) {
						newMainScrollPos = newMainScrollPosition;

						if(mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
							newMainScrollPos = _startMainScrollPos.x;
						}

					} else {
						if(_currPanBounds.min.x !== _currPanBounds.max.x) {
							newPanPos = newOffset;
						}
					}

				}


				//
			}

			if(axis === 'x') {

				if(newMainScrollPos !== undefined) {
					_moveMainScroll(newMainScrollPos, true);
					if(newMainScrollPos === _startMainScrollPos.x) {
						_mainScrollShifted = false;
					} else {
						_mainScrollShifted = true;
					}
				}

				if(_currPanBounds.min.x !== _currPanBounds.max.x) {
					if(newPanPos !== undefined) {
						_panOffset.x = newPanPos;
					} else if(!_mainScrollShifted) {
						_panOffset.x += delta.x * panFriction;
					}
				}

				return newMainScrollPos !== undefined;
			}

		}

		if(!_mainScrollAnimating) {
			
			if(!_mainScrollShifted) {
				if(_currZoomLevel > self.currItem.fitRatio) {
					_panOffset[axis] += delta[axis] * panFriction;
				
				}
			}

			
		}
		
	},

	// Pointerdown/touchstart/mousedown handler
	_onDragStart = function(e) {

		// Allow dragging only via left mouse button.
		// As this handler is not added in IE8 - we ignore e.which
		// 
		// http://www.quirksmode.org/js/events_properties.html
		// https://developer.mozilla.org/en-US/docs/Web/API/event.button
		if(e.type === 'mousedown' && e.button > 0  ) {
			return;
		}

		if(_initialZoomRunning) {
			e.preventDefault();
			return;
		}

		if(_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
			return;
		}

		if(_preventDefaultEventBehaviour(e, true)) {
			e.preventDefault();
		}



		_shout('pointerDown');

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			if(pointerIndex < 0) {
				pointerIndex = _currPointers.length;
			}
			_currPointers[pointerIndex] = {x:e.pageX, y:e.pageY, id: e.pointerId};
		}
		


		var startPointsList = _getTouchPoints(e),
			numPoints = startPointsList.length;

		_currentPoints = null;

		_stopAllAnimations();

		// init drag
		if(!_isDragging || numPoints === 1) {

			

			_isDragging = _isFirstMove = true;
			framework.bind(window, _upMoveEvents, self);

			_isZoomingIn = 
				_wasOverInitialZoom = 
				_opacityChanged = 
				_verticalDragInitiated = 
				_mainScrollShifted = 
				_moved = 
				_isMultitouch = 
				_zoomStarted = false;

			_direction = null;

			_shout('firstTouchStart', startPointsList);

			_equalizePoints(_startPanOffset, _panOffset);

			_currPanDist.x = _currPanDist.y = 0;
			_equalizePoints(_currPoint, startPointsList[0]);
			_equalizePoints(_startPoint, _currPoint);

			//_equalizePoints(_startMainScrollPos, _mainScrollPos);
			_startMainScrollPos.x = _slideSize.x * _currPositionIndex;

			_posPoints = [{
				x: _currPoint.x,
				y: _currPoint.y
			}];

			_gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();

			//_mainScrollAnimationEnd(true);
			_calculatePanBounds( _currZoomLevel, true );
			
			// Start rendering
			_stopDragUpdateLoop();
			_dragUpdateLoop();
			
		}

		// init zoom
		if(!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
			_startZoomLevel = _currZoomLevel;
			_zoomStarted = false; // true if zoom changed at least once

			_isZooming = _isMultitouch = true;
			_currPanDist.y = _currPanDist.x = 0;

			_equalizePoints(_startPanOffset, _panOffset);

			_equalizePoints(p, startPointsList[0]);
			_equalizePoints(p2, startPointsList[1]);

			_findCenterOfPoints(p, p2, _currCenterPoint);

			_midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
			_midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
			_currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
		}


	},

	// Pointermove/touchmove/mousemove handler
	_onDragMove = function(e) {

		e.preventDefault();

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			if(pointerIndex > -1) {
				var p = _currPointers[pointerIndex];
				p.x = e.pageX;
				p.y = e.pageY; 
			}
		}

		if(_isDragging) {
			var touchesList = _getTouchPoints(e);
			if(!_direction && !_moved && !_isZooming) {

				if(_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
					// if main scroll position is shifted – direction is always horizontal
					_direction = 'h';
				} else {
					var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
					// check the direction of movement
					if(Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
						_direction = diff > 0 ? 'h' : 'v';
						_currentPoints = touchesList;
					}
				}
				
			} else {
				_currentPoints = touchesList;
			}
		}	
	},
	// 
	_renderMovement =  function() {

		if(!_currentPoints) {
			return;
		}

		var numPoints = _currentPoints.length;

		if(numPoints === 0) {
			return;
		}

		_equalizePoints(p, _currentPoints[0]);

		delta.x = p.x - _currPoint.x;
		delta.y = p.y - _currPoint.y;

		if(_isZooming && numPoints > 1) {
			// Handle behaviour for more than 1 point

			_currPoint.x = p.x;
			_currPoint.y = p.y;
		
			// check if one of two points changed
			if( !delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2) ) {
				return;
			}

			_equalizePoints(p2, _currentPoints[1]);


			if(!_zoomStarted) {
				_zoomStarted = true;
				_shout('zoomGestureStarted');
			}
			
			// Distance between two points
			var pointsDistance = _calculatePointsDistance(p,p2);

			var zoomLevel = _calculateZoomLevel(pointsDistance);

			// slightly over the of initial zoom level
			if(zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
				_wasOverInitialZoom = true;
			}

			// Apply the friction if zoom level is out of the bounds
			var zoomFriction = 1,
				minZoomLevel = _getMinZoomLevel(),
				maxZoomLevel = _getMaxZoomLevel();

			if ( zoomLevel < minZoomLevel ) {
				
				if(_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
					// fade out background if zooming out
					var minusDiff = minZoomLevel - zoomLevel;
					var percent = 1 - minusDiff / (minZoomLevel / 1.2);

					_applyBgOpacity(percent);
					_shout('onPinchClose', percent);
					_opacityChanged = true;
				} else {
					zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
					if(zoomFriction > 1) {
						zoomFriction = 1;
					}
					zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
				}
				
			} else if ( zoomLevel > maxZoomLevel ) {
				// 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
				zoomFriction = (zoomLevel - maxZoomLevel) / ( minZoomLevel * 6 );
				if(zoomFriction > 1) {
					zoomFriction = 1;
				}
				zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
			}

			if(zoomFriction < 0) {
				zoomFriction = 0;
			}

			// distance between touch points after friction is applied
			_currPointsDistance = pointsDistance;

			// _centerPoint - The point in the middle of two pointers
			_findCenterOfPoints(p, p2, _centerPoint);
		
			// paning with two pointers pressed
			_currPanDist.x += _centerPoint.x - _currCenterPoint.x;
			_currPanDist.y += _centerPoint.y - _currCenterPoint.y;
			_equalizePoints(_currCenterPoint, _centerPoint);

			_panOffset.x = _calculatePanOffset('x', zoomLevel);
			_panOffset.y = _calculatePanOffset('y', zoomLevel);

			_isZoomingIn = zoomLevel > _currZoomLevel;
			_currZoomLevel = zoomLevel;
			_applyCurrentZoomPan();

		} else {

			// handle behaviour for one point (dragging or panning)

			if(!_direction) {
				return;
			}

			if(_isFirstMove) {
				_isFirstMove = false;

				// subtract drag distance that was used during the detection direction  

				if( Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
					delta.x -= _currentPoints[0].x - _startPoint.x;
				}
				
				if( Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
					delta.y -= _currentPoints[0].y - _startPoint.y;
				}
			}

			_currPoint.x = p.x;
			_currPoint.y = p.y;

			// do nothing if pointers position hasn't changed
			if(delta.x === 0 && delta.y === 0) {
				return;
			}

			if(_direction === 'v' && _options.closeOnVerticalDrag) {
				if(!_canPan()) {
					_currPanDist.y += delta.y;
					_panOffset.y += delta.y;

					var opacityRatio = _calculateVerticalDragOpacityRatio();

					_verticalDragInitiated = true;
					_shout('onVerticalDrag', opacityRatio);

					_applyBgOpacity(opacityRatio);
					_applyCurrentZoomPan();
					return ;
				}
			}

			_pushPosPoint(_getCurrentTime(), p.x, p.y);

			_moved = true;
			_currPanBounds = self.currItem.bounds;
			
			var mainScrollChanged = _panOrMoveMainScroll('x', delta);
			if(!mainScrollChanged) {
				_panOrMoveMainScroll('y', delta);

				_roundPoint(_panOffset);
				_applyCurrentZoomPan();
			}

		}

	},
	
	// Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
	_onDragRelease = function(e) {

		if(_features.isOldAndroid ) {

			if(_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
				return;
			}

			// on Android (v4.1, 4.2, 4.3 & possibly older) 
			// ghost mousedown/up event isn't preventable via e.preventDefault,
			// which causes fake mousedown event
			// so we block mousedown/up for 600ms
			if( e.type.indexOf('touch') > -1 ) {
				clearTimeout(_oldAndroidTouchEndTimeout);
				_oldAndroidTouchEndTimeout = setTimeout(function() {
					_oldAndroidTouchEndTimeout = 0;
				}, 600);
			}
			
		}

		_shout('pointerUp');

		if(_preventDefaultEventBehaviour(e, false)) {
			e.preventDefault();
		}

		var releasePoint;

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			
			if(pointerIndex > -1) {
				releasePoint = _currPointers.splice(pointerIndex, 1)[0];

				if(navigator.msPointerEnabled) {
					var MSPOINTER_TYPES = {
						4: 'mouse', // event.MSPOINTER_TYPE_MOUSE
						2: 'touch', // event.MSPOINTER_TYPE_TOUCH 
						3: 'pen' // event.MSPOINTER_TYPE_PEN
					};
					releasePoint.type = MSPOINTER_TYPES[e.pointerType];

					if(!releasePoint.type) {
						releasePoint.type = e.pointerType || 'mouse';
					}
				} else {
					releasePoint.type = e.pointerType || 'mouse';
				}

			}
		}

		var touchList = _getTouchPoints(e),
			gestureType,
			numPoints = touchList.length;

		if(e.type === 'mouseup') {
			numPoints = 0;
		}

		// Do nothing if there were 3 touch points or more
		if(numPoints === 2) {
			_currentPoints = null;
			return true;
		}

		// if second pointer released
		if(numPoints === 1) {
			_equalizePoints(_startPoint, touchList[0]);
		}				


		// pointer hasn't moved, send "tap release" point
		if(numPoints === 0 && !_direction && !_mainScrollAnimating) {
			if(!releasePoint) {
				if(e.type === 'mouseup') {
					releasePoint = {x: e.pageX, y: e.pageY, type:'mouse'};
				} else if(e.changedTouches && e.changedTouches[0]) {
					releasePoint = {x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type:'touch'};
				}		
			}

			_shout('touchRelease', e, releasePoint);
		}

		// Difference in time between releasing of two last touch points (zoom gesture)
		var releaseTimeDiff = -1;

		// Gesture completed, no pointers left
		if(numPoints === 0) {
			_isDragging = false;
			framework.unbind(window, _upMoveEvents, self);

			_stopDragUpdateLoop();

			if(_isZooming) {
				// Two points released at the same time
				releaseTimeDiff = 0;
			} else if(_lastReleaseTime !== -1) {
				releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
			}
		}
		_lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;
		
		if(releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
			gestureType = 'zoom';
		} else {
			gestureType = 'swipe';
		}

		if(_isZooming && numPoints < 2) {
			_isZooming = false;

			// Only second point released
			if(numPoints === 1) {
				gestureType = 'zoomPointerUp';
			}
			_shout('zoomGestureEnded');
		}

		_currentPoints = null;
		if(!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
			// nothing to animate
			return;
		}
	
		_stopAllAnimations();

		
		if(!_releaseAnimData) {
			_releaseAnimData = _initDragReleaseAnimationData();
		}
		
		_releaseAnimData.calculateSwipeSpeed('x');


		if(_verticalDragInitiated) {

			var opacityRatio = _calculateVerticalDragOpacityRatio();

			if(opacityRatio < _options.verticalDragRange) {
				self.close();
			} else {
				var initalPanY = _panOffset.y,
					initialBgOpacity = _bgOpacity;

				_animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function(now) {
					
					_panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

					_applyBgOpacity(  (1 - initialBgOpacity) * now + initialBgOpacity );
					_applyCurrentZoomPan();
				});

				_shout('onVerticalDrag', 1);
			}

			return;
		}


		// main scroll 
		if(  (_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
			var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
			if(itemChanged) {
				return;
			}
			gestureType = 'zoomPointerUp';
		}

		// prevent zoom/pan animation when main scroll animation runs
		if(_mainScrollAnimating) {
			return;
		}
		
		// Complete simple zoom gesture (reset zoom level if it's out of the bounds)  
		if(gestureType !== 'swipe') {
			_completeZoomGesture();
			return;
		}
	
		// Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
		if(!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
			_completePanGesture(_releaseAnimData);
		}
	},


	// Returns object with data about gesture
	// It's created only once and then reused
	_initDragReleaseAnimationData  = function() {
		// temp local vars
		var lastFlickDuration,
			tempReleasePos;

		// s = this
		var s = {
			lastFlickOffset: {},
			lastFlickDist: {},
			lastFlickSpeed: {},
			slowDownRatio:  {},
			slowDownRatioReverse:  {},
			speedDecelerationRatio:  {},
			speedDecelerationRatioAbs:  {},
			distanceOffset:  {},
			backAnimDestination: {},
			backAnimStarted: {},
			calculateSwipeSpeed: function(axis) {
				

				if( _posPoints.length > 1) {
					lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
					tempReleasePos = _posPoints[_posPoints.length-2][axis];
				} else {
					lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration
					tempReleasePos = _startPoint[axis];
				}
				s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
				s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
				if(s.lastFlickDist[axis] > 20) {
					s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
				} else {
					s.lastFlickSpeed[axis] = 0;
				}
				if( Math.abs(s.lastFlickSpeed[axis]) < 0.1 ) {
					s.lastFlickSpeed[axis] = 0;
				}
				
				s.slowDownRatio[axis] = 0.95;
				s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
				s.speedDecelerationRatio[axis] = 1;
			},

			calculateOverBoundsAnimOffset: function(axis, speed) {
				if(!s.backAnimStarted[axis]) {

					if(_panOffset[axis] > _currPanBounds.min[axis]) {
						s.backAnimDestination[axis] = _currPanBounds.min[axis];
						
					} else if(_panOffset[axis] < _currPanBounds.max[axis]) {
						s.backAnimDestination[axis] = _currPanBounds.max[axis];
					}

					if(s.backAnimDestination[axis] !== undefined) {
						s.slowDownRatio[axis] = 0.7;
						s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
						if(s.speedDecelerationRatioAbs[axis] < 0.05) {

							s.lastFlickSpeed[axis] = 0;
							s.backAnimStarted[axis] = true;

							_animateProp('bounceZoomPan'+axis,_panOffset[axis], 
								s.backAnimDestination[axis], 
								speed || 300, 
								framework.easing.sine.out, 
								function(pos) {
									_panOffset[axis] = pos;
									_applyCurrentZoomPan();
								}
							);

						}
					}
				}
			},

			// Reduces the speed by slowDownRatio (per 10ms)
			calculateAnimOffset: function(axis) {
				if(!s.backAnimStarted[axis]) {
					s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] + 
												s.slowDownRatioReverse[axis] - 
												s.slowDownRatioReverse[axis] * s.timeDiff / 10);

					s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
					s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
					_panOffset[axis] += s.distanceOffset[axis];

				}
			},

			panAnimLoop: function() {
				if ( _animations.zoomPan ) {
					_animations.zoomPan.raf = _requestAF(s.panAnimLoop);

					s.now = _getCurrentTime();
					s.timeDiff = s.now - s.lastNow;
					s.lastNow = s.now;
					
					s.calculateAnimOffset('x');
					s.calculateAnimOffset('y');

					_applyCurrentZoomPan();
					
					s.calculateOverBoundsAnimOffset('x');
					s.calculateOverBoundsAnimOffset('y');


					if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {

						// round pan position
						_panOffset.x = Math.round(_panOffset.x);
						_panOffset.y = Math.round(_panOffset.y);
						_applyCurrentZoomPan();
						
						_stopAnimation('zoomPan');
						return;
					}
				}

			}
		};
		return s;
	},

	_completePanGesture = function(animData) {
		// calculate swipe speed for Y axis (paanning)
		animData.calculateSwipeSpeed('y');

		_currPanBounds = self.currItem.bounds;
		
		animData.backAnimDestination = {};
		animData.backAnimStarted = {};

		// Avoid acceleration animation if speed is too low
		if(Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05 ) {
			animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;

			// Run pan drag release animation. E.g. if you drag image and release finger without momentum.
			animData.calculateOverBoundsAnimOffset('x');
			animData.calculateOverBoundsAnimOffset('y');
			return true;
		}

		// Animation loop that controls the acceleration after pan gesture ends
		_registerStartAnimation('zoomPan');
		animData.lastNow = _getCurrentTime();
		animData.panAnimLoop();
	},


	_finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData) {
		var itemChanged;
		if(!_mainScrollAnimating) {
			_currZoomedItemIndex = _currentItemIndex;
		}


		
		var itemsDiff;

		if(gestureType === 'swipe') {
			var totalShiftDist = _currPoint.x - _startPoint.x,
				isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;

			// if container is shifted for more than MIN_SWIPE_DISTANCE, 
			// and last flick gesture was in right direction
			if(totalShiftDist > MIN_SWIPE_DISTANCE && 
				(isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20) ) {
				// go to prev item
				itemsDiff = -1;
			} else if(totalShiftDist < -MIN_SWIPE_DISTANCE && 
				(isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20) ) {
				// go to next item
				itemsDiff = 1;
			}
		}

		var nextCircle;

		if(itemsDiff) {
			
			_currentItemIndex += itemsDiff;

			if(_currentItemIndex < 0) {
				_currentItemIndex = _options.loop ? _getNumItems()-1 : 0;
				nextCircle = true;
			} else if(_currentItemIndex >= _getNumItems()) {
				_currentItemIndex = _options.loop ? 0 : _getNumItems()-1;
				nextCircle = true;
			}

			if(!nextCircle || _options.loop) {
				_indexDiff += itemsDiff;
				_currPositionIndex -= itemsDiff;
				itemChanged = true;
			}
			

			
		}

		var animateToX = _slideSize.x * _currPositionIndex;
		var animateToDist = Math.abs( animateToX - _mainScrollPos.x );
		var finishAnimDuration;


		if(!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
			// "return to current" duration, e.g. when dragging from slide 0 to -1
			finishAnimDuration = 333; 
		} else {
			finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ? 
									animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) : 
									333;

			finishAnimDuration = Math.min(finishAnimDuration, 400);
			finishAnimDuration = Math.max(finishAnimDuration, 250);
		}

		if(_currZoomedItemIndex === _currentItemIndex) {
			itemChanged = false;
		}
		
		_mainScrollAnimating = true;
		
		_shout('mainScrollAnimStart');

		_animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out, 
			_moveMainScroll,
			function() {
				_stopAllAnimations();
				_mainScrollAnimating = false;
				_currZoomedItemIndex = -1;
				
				if(itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
					self.updateCurrItem();
				}
				
				_shout('mainScrollAnimComplete');
			}
		);

		if(itemChanged) {
			self.updateCurrItem(true);
		}

		return itemChanged;
	},

	_calculateZoomLevel = function(touchesDistance) {
		return  1 / _startPointsDistance * touchesDistance * _startZoomLevel;
	},

	// Resets zoom if it's out of bounds
	_completeZoomGesture = function() {
		var destZoomLevel = _currZoomLevel,
			minZoomLevel = _getMinZoomLevel(),
			maxZoomLevel = _getMaxZoomLevel();

		if ( _currZoomLevel < minZoomLevel ) {
			destZoomLevel = minZoomLevel;
		} else if ( _currZoomLevel > maxZoomLevel ) {
			destZoomLevel = maxZoomLevel;
		}

		var destOpacity = 1,
			onUpdate,
			initialOpacity = _bgOpacity;

		if(_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
			//_closedByScroll = true;
			self.close();
			return true;
		}

		if(_opacityChanged) {
			onUpdate = function(now) {
				_applyBgOpacity(  (destOpacity - initialOpacity) * now + initialOpacity );
			};
		}

		self.zoomTo(destZoomLevel, 0, 200,  framework.easing.cubic.out, onUpdate);
		return true;
	};


_registerModule('Gestures', {
	publicMethods: {

		initGestures: function() {

			// helper function that builds touch/pointer/mouse events
			var addEventNames = function(pref, down, move, up, cancel) {
				_dragStartEvent = pref + down;
				_dragMoveEvent = pref + move;
				_dragEndEvent = pref + up;
				if(cancel) {
					_dragCancelEvent = pref + cancel;
				} else {
					_dragCancelEvent = '';
				}
			};

			_pointerEventEnabled = _features.pointerEvent;
			if(_pointerEventEnabled && _features.touch) {
				// we don't need touch events, if browser supports pointer events
				_features.touch = false;
			}

			if(_pointerEventEnabled) {
				if(navigator.msPointerEnabled) {
					// IE10 pointer events are case-sensitive
					addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
				} else {
					addEventNames('pointer', 'down', 'move', 'up', 'cancel');
				}
			} else if(_features.touch) {
				addEventNames('touch', 'start', 'move', 'end', 'cancel');
				_likelyTouchDevice = true;
			} else {
				addEventNames('mouse', 'down', 'move', 'up');	
			}

			_upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent  + ' ' +  _dragCancelEvent;
			_downEvents = _dragStartEvent;

			if(_pointerEventEnabled && !_likelyTouchDevice) {
				_likelyTouchDevice = (navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
			}
			// make variable public
			self.likelyTouchDevice = _likelyTouchDevice; 
			
			_globalEventHandlers[_dragStartEvent] = _onDragStart;
			_globalEventHandlers[_dragMoveEvent] = _onDragMove;
			_globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

			if(_dragCancelEvent) {
				_globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
			}

			// Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
			if(_features.touch) {
				_downEvents += ' mousedown';
				_upMoveEvents += ' mousemove mouseup';
				_globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
				_globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
				_globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
			}

			if(!_likelyTouchDevice) {
				// don't allow pan to next slide from zoomed state on Desktop
				_options.allowPanToNext = false;
			}
		}

	}
});


/*>>gestures*/

/*>>show-hide-transition*/
/**
 * show-hide-transition.js:
 *
 * Manages initial opening or closing transition.
 *
 * If you're not planning to use transition for gallery at all,
 * you may set options hideAnimationDuration and showAnimationDuration to 0,
 * and just delete startAnimation function.
 * 
 */


var _showOrHideTimeout,
	_showOrHide = function(item, img, out, completeFn) {

		if(_showOrHideTimeout) {
			clearTimeout(_showOrHideTimeout);
		}

		_initialZoomRunning = true;
		_initialContentSet = true;
		
		// dimensions of small thumbnail {x:,y:,w:}.
		// Height is optional, as calculated based on large image.
		var thumbBounds; 
		if(item.initialLayout) {
			thumbBounds = item.initialLayout;
			item.initialLayout = null;
		} else {
			thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
		}

		var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

		var onComplete = function() {
			_stopAnimation('initialZoom');
			if(!out) {
				_applyBgOpacity(1);
				if(img) {
					img.style.display = 'block';
				}
				framework.addClass(template, 'pswp--animated-in');
				_shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
			} else {
				self.template.removeAttribute('style');
				self.bg.removeAttribute('style');
			}

			if(completeFn) {
				completeFn();
			}
			_initialZoomRunning = false;
		};

		// if bounds aren't provided, just open gallery without animation
		if(!duration || !thumbBounds || thumbBounds.x === undefined) {

			_shout('initialZoom' + (out ? 'Out' : 'In') );

			_currZoomLevel = item.initialZoomLevel;
			_equalizePoints(_panOffset,  item.initialPosition );
			_applyCurrentZoomPan();

			template.style.opacity = out ? 0 : 1;
			_applyBgOpacity(1);

			if(duration) {
				setTimeout(function() {
					onComplete();
				}, duration);
			} else {
				onComplete();
			}

			return;
		}

		var startAnimation = function() {
			var closeWithRaf = _closedByScroll,
				fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;
			
			// apply hw-acceleration to image
			if(item.miniImg) {
				item.miniImg.style.webkitBackfaceVisibility = 'hidden';
			}

			if(!out) {
				_currZoomLevel = thumbBounds.w / item.w;
				_panOffset.x = thumbBounds.x;
				_panOffset.y = thumbBounds.y - _initalWindowScrollY;

				self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
				_applyCurrentZoomPan();
			}

			_registerStartAnimation('initialZoom');
			
			if(out && !closeWithRaf) {
				framework.removeClass(template, 'pswp--animated-in');
			}

			if(fadeEverything) {
				if(out) {
					framework[ (closeWithRaf ? 'remove' : 'add') + 'Class' ](template, 'pswp--animate_opacity');
				} else {
					setTimeout(function() {
						framework.addClass(template, 'pswp--animate_opacity');
					}, 30);
				}
			}

			_showOrHideTimeout = setTimeout(function() {

				_shout('initialZoom' + (out ? 'Out' : 'In') );
				

				if(!out) {

					// "in" animation always uses CSS transitions (instead of rAF).
					// CSS transition work faster here, 
					// as developer may also want to animate other things, 
					// like ui on top of sliding area, which can be animated just via CSS
					
					_currZoomLevel = item.initialZoomLevel;
					_equalizePoints(_panOffset,  item.initialPosition );
					_applyCurrentZoomPan();
					_applyBgOpacity(1);

					if(fadeEverything) {
						template.style.opacity = 1;
					} else {
						_applyBgOpacity(1);
					}

					_showOrHideTimeout = setTimeout(onComplete, duration + 20);
				} else {

					// "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
					var destZoomLevel = thumbBounds.w / item.w,
						initialPanOffset = {
							x: _panOffset.x,
							y: _panOffset.y
						},
						initialZoomLevel = _currZoomLevel,
						initalBgOpacity = _bgOpacity,
						onUpdate = function(now) {
							
							if(now === 1) {
								_currZoomLevel = destZoomLevel;
								_panOffset.x = thumbBounds.x;
								_panOffset.y = thumbBounds.y  - _currentWindowScrollY;
							} else {
								_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
								_panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
								_panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
							}
							
							_applyCurrentZoomPan();
							if(fadeEverything) {
								template.style.opacity = 1 - now;
							} else {
								_applyBgOpacity( initalBgOpacity - now * initalBgOpacity );
							}
						};

					if(closeWithRaf) {
						_animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
					} else {
						onUpdate(1);
						_showOrHideTimeout = setTimeout(onComplete, duration + 20);
					}
				}
			
			}, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
					// create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
					// Which avoids lag at the beginning of scale transition.
		};
		startAnimation();

		
	};

/*>>show-hide-transition*/

/*>>items-controller*/
/**
*
* Controller manages gallery items, their dimensions, and their content.
* 
*/

var _items,
	_tempPanAreaSize = {},
	_imagesToAppendPool = [],
	_initialContentSet,
	_initialZoomRunning,
	_controllerDefaultOptions = {
		index: 0,
		errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
		forceProgressiveLoading: false, // TODO
		preload: [1,1],
		getNumItemsFn: function() {
			return _items.length;
		}
	};


var _getItemAt,
	_getNumItems,
	_initialIsLoop,
	_getZeroBounds = function() {
		return {
			center:{x:0,y:0}, 
			max:{x:0,y:0}, 
			min:{x:0,y:0}
		};
	},
	_calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH ) {
		var bounds = item.bounds;

		// position of element when it's centered
		bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
		bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;

		// maximum pan position
		bounds.max.x = (realPanElementW > _tempPanAreaSize.x) ? 
							Math.round(_tempPanAreaSize.x - realPanElementW) : 
							bounds.center.x;
		
		bounds.max.y = (realPanElementH > _tempPanAreaSize.y) ? 
							Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top : 
							bounds.center.y;
		
		// minimum pan position
		bounds.min.x = (realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
		bounds.min.y = (realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
	},
	_calculateItemSize = function(item, viewportSize, zoomLevel) {

		if (item.src && !item.loadError) {
			var isInitial = !zoomLevel;
			
			if(isInitial) {
				if(!item.vGap) {
					item.vGap = {top:0,bottom:0};
				}
				// allows overriding vertical margin for individual items
				_shout('parseVerticalMargin', item);
			}


			_tempPanAreaSize.x = viewportSize.x;
			_tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

			if (isInitial) {
				var hRatio = _tempPanAreaSize.x / item.w;
				var vRatio = _tempPanAreaSize.y / item.h;

				item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
				//item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

				var scaleMode = _options.scaleMode;

				if (scaleMode === 'orig') {
					zoomLevel = 1;
				} else if (scaleMode === 'fit') {
					zoomLevel = item.fitRatio;
				}

				if (zoomLevel > 1) {
					zoomLevel = 1;
				}

				item.initialZoomLevel = zoomLevel;
				
				if(!item.bounds) {
					// reuse bounds object
					item.bounds = _getZeroBounds(); 
				}
			}

			if(!zoomLevel) {
				return;
			}

			_calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

			if (isInitial && zoomLevel === item.initialZoomLevel) {
				item.initialPosition = item.bounds.center;
			}

			return item.bounds;
		} else {
			item.w = item.h = 0;
			item.initialZoomLevel = item.fitRatio = 1;
			item.bounds = _getZeroBounds();
			item.initialPosition = item.bounds.center;

			// if it's not image, we return zero bounds (content is not zoomable)
			return item.bounds;
		}
		
	},

	


	_appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
		

		if(item.loadError) {
			return;
		}

		if(img) {

			item.imageAppended = true;
			_setImageSize(item, img, (item === self.currItem && _renderMaxResolution) );
			
			baseDiv.appendChild(img);

			if(keepPlaceholder) {
				setTimeout(function() {
					if(item && item.loaded && item.placeholder) {
						item.placeholder.style.display = 'none';
						item.placeholder = null;
					}
				}, 500);
			}
		}
	},
	


	_preloadImage = function(item) {
		item.loading = true;
		item.loaded = false;
		var img = item.img = framework.createEl('pswp__img', 'img');
		var onComplete = function() {
			item.loading = false;
			item.loaded = true;

			if(item.loadComplete) {
				item.loadComplete(item);
			} else {
				item.img = null; // no need to store image object
			}
			img.onload = img.onerror = null;
			img = null;
		};
		img.onload = onComplete;
		img.onerror = function() {
			item.loadError = true;
			onComplete();
		};		

		img.src = item.src;// + '?a=' + Math.random();

		return img;
	},
	_checkForError = function(item, cleanUp) {
		if(item.src && item.loadError && item.container) {

			if(cleanUp) {
				item.container.innerHTML = '';
			}

			item.container.innerHTML = _options.errorMsg.replace('%url%',  item.src );
			return true;
			
		}
	},
	_setImageSize = function(item, img, maxRes) {
		if(!item.src) {
			return;
		}

		if(!img) {
			img = item.container.lastChild;
		}

		var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
			h = maxRes ? item.h : Math.round(item.h * item.fitRatio);
		
		if(item.placeholder && !item.loaded) {
			item.placeholder.style.width = w + 'px';
			item.placeholder.style.height = h + 'px';
		}

		img.style.width = w + 'px';
		img.style.height = h + 'px';
	},
	_appendImagesPool = function() {

		if(_imagesToAppendPool.length) {
			var poolItem;

			for(var i = 0; i < _imagesToAppendPool.length; i++) {
				poolItem = _imagesToAppendPool[i];
				if( poolItem.holder.index === poolItem.index ) {
					_appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
				}
			}
			_imagesToAppendPool = [];
		}
	};
	


_registerModule('Controller', {

	publicMethods: {

		lazyLoadItem: function(index) {
			index = _getLoopedId(index);
			var item = _getItemAt(index);

			if(!item || ((item.loaded || item.loading) && !_itemsNeedUpdate)) {
				return;
			}

			_shout('gettingData', index, item);

			if (!item.src) {
				return;
			}

			_preloadImage(item);
		},
		initController: function() {
			framework.extend(_options, _controllerDefaultOptions, true);
			self.items = _items = items;
			_getItemAt = self.getItemAt;
			_getNumItems = _options.getNumItemsFn; //self.getNumItems;



			_initialIsLoop = _options.loop;
			if(_getNumItems() < 3) {
				_options.loop = false; // disable loop if less then 3 items
			}

			_listen('beforeChange', function(diff) {

				var p = _options.preload,
					isNext = diff === null ? true : (diff >= 0),
					preloadBefore = Math.min(p[0], _getNumItems() ),
					preloadAfter = Math.min(p[1], _getNumItems() ),
					i;


				for(i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
					self.lazyLoadItem(_currentItemIndex+i);
				}
				for(i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
					self.lazyLoadItem(_currentItemIndex-i);
				}
			});

			_listen('initialLayout', function() {
				self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
			});

			_listen('mainScrollAnimComplete', _appendImagesPool);
			_listen('initialZoomInEnd', _appendImagesPool);



			_listen('destroy', function() {
				var item;
				for(var i = 0; i < _items.length; i++) {
					item = _items[i];
					// remove reference to DOM elements, for GC
					if(item.container) {
						item.container = null; 
					}
					if(item.placeholder) {
						item.placeholder = null;
					}
					if(item.img) {
						item.img = null;
					}
					if(item.preloader) {
						item.preloader = null;
					}
					if(item.loadError) {
						item.loaded = item.loadError = false;
					}
				}
				_imagesToAppendPool = null;
			});
		},


		getItemAt: function(index) {
			if (index >= 0) {
				return _items[index] !== undefined ? _items[index] : false;
			}
			return false;
		},

		allowProgressiveImg: function() {
			// 1. Progressive image loading isn't working on webkit/blink 
			//    when hw-acceleration (e.g. translateZ) is applied to IMG element.
			//    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
			//    
			// 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
			//    That's why it's disabled on touch devices (mainly because of swipe transition)
			//    
			// 3. Progressive image loading sometimes doesn't work in IE (up to 11).

			// Don't allow progressive loading on non-large touch devices
			return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200; 
			// 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
		},

		setContent: function(holder, index) {

			if(_options.loop) {
				index = _getLoopedId(index);
			}

			var prevItem = self.getItemAt(holder.index);
			if(prevItem) {
				prevItem.container = null;
			}
	
			var item = self.getItemAt(index),
				img;
			
			if(!item) {
				holder.el.innerHTML = '';
				return;
			}

			// allow to override data
			_shout('gettingData', index, item);

			holder.index = index;
			holder.item = item;

			// base container DIV is created only once for each of 3 holders
			var baseDiv = item.container = framework.createEl('pswp__zoom-wrap'); 

			

			if(!item.src && item.html) {
				if(item.html.tagName) {
					baseDiv.appendChild(item.html);
				} else {
					baseDiv.innerHTML = item.html;
				}
			}

			_checkForError(item);

			_calculateItemSize(item, _viewportSize);
			
			if(item.src && !item.loadError && !item.loaded) {

				item.loadComplete = function(item) {

					// gallery closed before image finished loading
					if(!_isOpen) {
						return;
					}

					// check if holder hasn't changed while image was loading
					if(holder && holder.index === index ) {
						if( _checkForError(item, true) ) {
							item.loadComplete = item.img = null;
							_calculateItemSize(item, _viewportSize);
							_applyZoomPanToItem(item);

							if(holder.index === _currentItemIndex) {
								// recalculate dimensions
								self.updateCurrZoomItem();
							}
							return;
						}
						if( !item.imageAppended ) {
							if(_features.transform && (_mainScrollAnimating || _initialZoomRunning) ) {
								_imagesToAppendPool.push({
									item:item,
									baseDiv:baseDiv,
									img:item.img,
									index:index,
									holder:holder,
									clearPlaceholder:true
								});
							} else {
								_appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
							}
						} else {
							// remove preloader & mini-img
							if(!_initialZoomRunning && item.placeholder) {
								item.placeholder.style.display = 'none';
								item.placeholder = null;
							}
						}
					}

					item.loadComplete = null;
					item.img = null; // no need to store image element after it's added

					_shout('imageLoadComplete', index, item);
				};

				if(framework.features.transform) {
					
					var placeholderClassName = 'pswp__img pswp__img--placeholder'; 
					placeholderClassName += (item.msrc ? '' : ' pswp__img--placeholder--blank');

					var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
					if(item.msrc) {
						placeholder.src = item.msrc;
					}
					
					_setImageSize(item, placeholder);

					baseDiv.appendChild(placeholder);
					item.placeholder = placeholder;

				}
				

				

				if(!item.loading) {
					_preloadImage(item);
				}


				if( self.allowProgressiveImg() ) {
					// just append image
					if(!_initialContentSet && _features.transform) {
						_imagesToAppendPool.push({
							item:item, 
							baseDiv:baseDiv, 
							img:item.img, 
							index:index, 
							holder:holder
						});
					} else {
						_appendImage(index, item, baseDiv, item.img, true, true);
					}
				}
				
			} else if(item.src && !item.loadError) {
				// image object is created every time, due to bugs of image loading & delay when switching images
				img = framework.createEl('pswp__img', 'img');
				img.style.opacity = 1;
				img.src = item.src;
				_setImageSize(item, img);
				_appendImage(index, item, baseDiv, img, true);
			}
			

			if(!_initialContentSet && index === _currentItemIndex) {
				_currZoomElementStyle = baseDiv.style;
				_showOrHide(item, (img ||item.img) );
			} else {
				_applyZoomPanToItem(item);
			}

			holder.el.innerHTML = '';
			holder.el.appendChild(baseDiv);
		},

		cleanSlide: function( item ) {
			if(item.img ) {
				item.img.onload = item.img.onerror = null;
			}
			item.loaded = item.loading = item.img = item.imageAppended = false;
		}

	}
});

/*>>items-controller*/

/*>>tap*/
/**
 * tap.js:
 *
 * Displatches tap and double-tap events.
 * 
 */

var tapTimer,
	tapReleasePoint = {},
	_dispatchTapEvent = function(origEvent, releasePoint, pointerType) {		
		var e = document.createEvent( 'CustomEvent' ),
			eDetail = {
				origEvent:origEvent, 
				target:origEvent.target, 
				releasePoint: releasePoint, 
				pointerType:pointerType || 'touch'
			};

		e.initCustomEvent( 'pswpTap', true, true, eDetail );
		origEvent.target.dispatchEvent(e);
	};

_registerModule('Tap', {
	publicMethods: {
		initTap: function() {
			_listen('firstTouchStart', self.onTapStart);
			_listen('touchRelease', self.onTapRelease);
			_listen('destroy', function() {
				tapReleasePoint = {};
				tapTimer = null;
			});
		},
		onTapStart: function(touchList) {
			if(touchList.length > 1) {
				clearTimeout(tapTimer);
				tapTimer = null;
			}
		},
		onTapRelease: function(e, releasePoint) {
			if(!releasePoint) {
				return;
			}

			if(!_moved && !_isMultitouch && !_numAnimations) {
				var p0 = releasePoint;
				if(tapTimer) {
					clearTimeout(tapTimer);
					tapTimer = null;

					// Check if taped on the same place
					if ( _isNearbyPoints(p0, tapReleasePoint) ) {
						_shout('doubleTap', p0);
						return;
					}
				}

				if(releasePoint.type === 'mouse') {
					_dispatchTapEvent(e, releasePoint, 'mouse');
					return;
				}

				var clickedTagName = e.target.tagName.toUpperCase();
				// avoid double tap delay on buttons and elements that have class pswp__single-tap
				if(clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap') ) {
					_dispatchTapEvent(e, releasePoint);
					return;
				}

				_equalizePoints(tapReleasePoint, p0);

				tapTimer = setTimeout(function() {
					_dispatchTapEvent(e, releasePoint);
					tapTimer = null;
				}, 300);
			}
		}
	}
});

/*>>tap*/

/*>>desktop-zoom*/
/**
 *
 * desktop-zoom.js:
 *
 * - Binds mousewheel event for paning zoomed image.
 * - Manages "dragging", "zoomed-in", "zoom-out" classes.
 *   (which are used for cursors and zoom icon)
 * - Adds toggleDesktopZoom function.
 * 
 */

var _wheelDelta;
	
_registerModule('DesktopZoom', {

	publicMethods: {

		initDesktopZoom: function() {

			if(_oldIE) {
				// no zoom for old IE (<=8)
				return;
			}

			if(_likelyTouchDevice) {
				// if detected hardware touch support, we wait until mouse is used,
				// and only then apply desktop-zoom features
				_listen('mouseUsed', function() {
					self.setupDesktopZoom();
				});
			} else {
				self.setupDesktopZoom(true);
			}

		},

		setupDesktopZoom: function(onInit) {

			_wheelDelta = {};

			var events = 'wheel mousewheel DOMMouseScroll';
			
			_listen('bindEvents', function() {
				framework.bind(template, events,  self.handleMouseWheel);
			});

			_listen('unbindEvents', function() {
				if(_wheelDelta) {
					framework.unbind(template, events, self.handleMouseWheel);
				}
			});

			self.mouseZoomedIn = false;

			var hasDraggingClass,
				updateZoomable = function() {
					if(self.mouseZoomedIn) {
						framework.removeClass(template, 'pswp--zoomed-in');
						self.mouseZoomedIn = false;
					}
					if(_currZoomLevel < 1) {
						framework.addClass(template, 'pswp--zoom-allowed');
					} else {
						framework.removeClass(template, 'pswp--zoom-allowed');
					}
					removeDraggingClass();
				},
				removeDraggingClass = function() {
					if(hasDraggingClass) {
						framework.removeClass(template, 'pswp--dragging');
						hasDraggingClass = false;
					}
				};

			_listen('resize' , updateZoomable);
			_listen('afterChange' , updateZoomable);
			_listen('pointerDown', function() {
				if(self.mouseZoomedIn) {
					hasDraggingClass = true;
					framework.addClass(template, 'pswp--dragging');
				}
			});
			_listen('pointerUp', removeDraggingClass);

			if(!onInit) {
				updateZoomable();
			}
			
		},

		handleMouseWheel: function(e) {

			if(_currZoomLevel <= self.currItem.fitRatio) {
				if( _options.modal ) {

					if (!_options.closeOnScroll || _numAnimations || _isDragging) {
						e.preventDefault();
					} else if(_transformKey && Math.abs(e.deltaY) > 2) {
						// close PhotoSwipe
						// if browser supports transforms & scroll changed enough
						_closedByScroll = true;
						self.close();
					}

				}
				return true;
			}

			// allow just one event to fire
			e.stopPropagation();

			// https://developer.mozilla.org/en-US/docs/Web/Events/wheel
			_wheelDelta.x = 0;

			if('deltaX' in e) {
				if(e.deltaMode === 1 /* DOM_DELTA_LINE */) {
					// 18 - average line height
					_wheelDelta.x = e.deltaX * 18;
					_wheelDelta.y = e.deltaY * 18;
				} else {
					_wheelDelta.x = e.deltaX;
					_wheelDelta.y = e.deltaY;
				}
			} else if('wheelDelta' in e) {
				if(e.wheelDeltaX) {
					_wheelDelta.x = -0.16 * e.wheelDeltaX;
				}
				if(e.wheelDeltaY) {
					_wheelDelta.y = -0.16 * e.wheelDeltaY;
				} else {
					_wheelDelta.y = -0.16 * e.wheelDelta;
				}
			} else if('detail' in e) {
				_wheelDelta.y = e.detail;
			} else {
				return;
			}

			_calculatePanBounds(_currZoomLevel, true);

			var newPanX = _panOffset.x - _wheelDelta.x,
				newPanY = _panOffset.y - _wheelDelta.y;

			// only prevent scrolling in nonmodal mode when not at edges
			if (_options.modal ||
				(
				newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x &&
				newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y
				) ) {
				e.preventDefault();
			}

			// TODO: use rAF instead of mousewheel?
			self.panTo(newPanX, newPanY);
		},

		toggleDesktopZoom: function(centerPoint) {
			centerPoint = centerPoint || {x:_viewportSize.x/2 + _offset.x, y:_viewportSize.y/2 + _offset.y };

			var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
			var zoomOut = _currZoomLevel === doubleTapZoomLevel;
			
			self.mouseZoomedIn = !zoomOut;

			self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
			framework[ (!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
		}

	}
});


/*>>desktop-zoom*/

/*>>history*/
/**
 *
 * history.js:
 *
 * - Back button to close gallery.
 * 
 * - Unique URL for each slide: example.com/&pid=1&gid=3
 *   (where PID is picture index, and GID and gallery index)
 *   
 * - Switch URL when slides change.
 * 
 */


var _historyDefaultOptions = {
	history: true,
	galleryUID: 1
};

var _historyUpdateTimeout,
	_hashChangeTimeout,
	_hashAnimCheckTimeout,
	_hashChangedByScript,
	_hashChangedByHistory,
	_hashReseted,
	_initialHash,
	_historyChanged,
	_closedFromURL,
	_urlChangedOnce,
	_windowLoc,

	_supportsPushState,

	_getHash = function() {
		return _windowLoc.hash.substring(1);
	},
	_cleanHistoryTimeouts = function() {

		if(_historyUpdateTimeout) {
			clearTimeout(_historyUpdateTimeout);
		}

		if(_hashAnimCheckTimeout) {
			clearTimeout(_hashAnimCheckTimeout);
		}
	},

	// pid - Picture index
	// gid - Gallery index
	_parseItemIndexFromURL = function() {
		var hash = _getHash(),
			params = {};

		if(hash.length < 5) { // pid=1
			return params;
		}

		var i, vars = hash.split('&');
		for (i = 0; i < vars.length; i++) {
			if(!vars[i]) {
				continue;
			}
			var pair = vars[i].split('=');	
			if(pair.length < 2) {
				continue;
			}
			params[pair[0]] = pair[1];
		}
		if(_options.galleryPIDs) {
			// detect custom pid in hash and search for it among the items collection
			var searchfor = params.pid;
			params.pid = 0; // if custom pid cannot be found, fallback to the first item
			for(i = 0; i < _items.length; i++) {
				if(_items[i].pid === searchfor) {
					params.pid = i;
					break;
				}
			}
		} else {
			params.pid = parseInt(params.pid,10)-1;
		}
		if( params.pid < 0 ) {
			params.pid = 0;
		}
		return params;
	},
	_updateHash = function() {

		if(_hashAnimCheckTimeout) {
			clearTimeout(_hashAnimCheckTimeout);
		}


		if(_numAnimations || _isDragging) {
			// changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
			// that's why we update hash only when no animations running
			_hashAnimCheckTimeout = setTimeout(_updateHash, 500);
			return;
		}
		
		if(_hashChangedByScript) {
			clearTimeout(_hashChangeTimeout);
		} else {
			_hashChangedByScript = true;
		}


		var pid = (_currentItemIndex + 1);
		var item = _getItemAt( _currentItemIndex );
		if(item.hasOwnProperty('pid')) {
			// carry forward any custom pid assigned to the item
			pid = item.pid;
		}
		var newHash = _initialHash + '&'  +  'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

		if(!_historyChanged) {
			if(_windowLoc.hash.indexOf(newHash) === -1) {
				_urlChangedOnce = true;
			}
			// first time - add new hisory record, then just replace
		}

		var newURL = _windowLoc.href.split('#')[0] + '#' +  newHash;

		if( _supportsPushState ) {

			if('#' + newHash !== window.location.hash) {
				history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
			}

		} else {
			if(_historyChanged) {
				_windowLoc.replace( newURL );
			} else {
				_windowLoc.hash = newHash;
			}
		}
		
		

		_historyChanged = true;
		_hashChangeTimeout = setTimeout(function() {
			_hashChangedByScript = false;
		}, 60);
	};



	

_registerModule('History', {

	

	publicMethods: {
		initHistory: function() {

			framework.extend(_options, _historyDefaultOptions, true);

			if( !_options.history ) {
				return;
			}


			_windowLoc = window.location;
			_urlChangedOnce = false;
			_closedFromURL = false;
			_historyChanged = false;
			_initialHash = _getHash();
			_supportsPushState = ('pushState' in history);


			if(_initialHash.indexOf('gid=') > -1) {
				_initialHash = _initialHash.split('&gid=')[0];
				_initialHash = _initialHash.split('?gid=')[0];
			}
			

			_listen('afterChange', self.updateURL);
			_listen('unbindEvents', function() {
				framework.unbind(window, 'hashchange', self.onHashChange);
			});


			var returnToOriginal = function() {
				_hashReseted = true;
				if(!_closedFromURL) {

					if(_urlChangedOnce) {
						history.back();
					} else {

						if(_initialHash) {
							_windowLoc.hash = _initialHash;
						} else {
							if (_supportsPushState) {

								// remove hash from url without refreshing it or scrolling to top
								history.pushState('', document.title,  _windowLoc.pathname + _windowLoc.search );
							} else {
								_windowLoc.hash = '';
							}
						}
					}
					
				}

				_cleanHistoryTimeouts();
			};


			_listen('unbindEvents', function() {
				if(_closedByScroll) {
					// if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
					// this is done to keep the scroll position
					returnToOriginal();
				}
			});
			_listen('destroy', function() {
				if(!_hashReseted) {
					returnToOriginal();
				}
			});
			_listen('firstUpdate', function() {
				_currentItemIndex = _parseItemIndexFromURL().pid;
			});

			

			
			var index = _initialHash.indexOf('pid=');
			if(index > -1) {
				_initialHash = _initialHash.substring(0, index);
				if(_initialHash.slice(-1) === '&') {
					_initialHash = _initialHash.slice(0, -1);
				}
			}
			

			setTimeout(function() {
				if(_isOpen) { // hasn't destroyed yet
					framework.bind(window, 'hashchange', self.onHashChange);
				}
			}, 40);
			
		},
		onHashChange: function() {

			if(_getHash() === _initialHash) {

				_closedFromURL = true;
				self.close();
				return;
			}
			if(!_hashChangedByScript) {

				_hashChangedByHistory = true;
				self.goTo( _parseItemIndexFromURL().pid );
				_hashChangedByHistory = false;
			}
			
		},
		updateURL: function() {

			// Delay the update of URL, to avoid lag during transition, 
			// and to not to trigger actions like "refresh page sound" or "blinking favicon" to often
			
			_cleanHistoryTimeouts();
			

			if(_hashChangedByHistory) {
				return;
			}

			if(!_historyChanged) {
				_updateHash(); // first time
			} else {
				_historyUpdateTimeout = setTimeout(_updateHash, 800);
			}
		}
	
	}
});


/*>>history*/
	framework.extend(self, publicMethods); };
	return PhotoSwipe;
});

/***/ }),

/***/ "./src/photoswipe.ts":
/*!***************************!*\
  !*** ./src/photoswipe.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createGallery; });
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! photoswipe */ "./node_modules/photoswipe/dist/photoswipe.js");
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(photoswipe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! photoswipe/dist/photoswipe-ui-default */ "./node_modules/photoswipe/dist/photoswipe-ui-default.js");
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1__);


var template = "\n<!--suppress CheckTagEmptyBody -->\n<div class=\"pswp\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"pswp__bg\"></div>\n    <div class=\"pswp__scroll-wrap\">\n        <div class=\"pswp__container\">\n            <div class=\"pswp__item\"></div>\n            <div class=\"pswp__item\"></div>\n            <div class=\"pswp__item\"></div>\n        </div>\n        <div class=\"pswp__ui pswp__ui--hidden\">\n            <div class=\"pswp__top-bar\">\n                <div class=\"pswp__counter\"></div>\n                <button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"></button>\n                <!--<button class=\"pswp__button pswp__button&#45;&#45;share\" title=\"Share\"></button>-->\n                <button class=\"pswp__button pswp__button--fs\" title=\"Toggle fullscreen\"></button>\n                <button class=\"pswp__button pswp__button--zoom\" title=\"Zoom in/out\"></button>\n                <div class=\"pswp__preloader\">\n                    <div class=\"pswp__preloader__icn\">\n                      <div class=\"pswp__preloader__cut\">\n                        <div class=\"pswp__preloader__donut\"></div>\n                      </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\">\n                <div class=\"pswp__share-tooltip\"></div>\n            </div>\n            <button class=\"pswp__button pswp__button--arrow--left\" title=\"Previous (arrow left)\"></button>\n            <button class=\"pswp__button pswp__button--arrow--right\" title=\"Next (arrow right)\"></button>\n            <div class=\"pswp__caption\">\n                <div class=\"pswp__caption__center\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n";
var div = document.createElement('div');
div.innerHTML = template;
var element = div.firstElementChild;
document.body.appendChild(element);
function createGallery(images, options) {
  return new photoswipe__WEBPACK_IMPORTED_MODULE_0___default.a(element, photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1___default.a, images, options);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUtdWktZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bob3Rvc3dpcGUudHMiXSwibmFtZXMiOlsidGVtcGxhdGUiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJlbGVtZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVHYWxsZXJ5IiwiaW1hZ2VzIiwib3B0aW9ucyIsIlBob3RvU3dpcGUiLCJQaG90b1N3aXBlVUlEZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCO0FBQ0EsS0FBSyxJQUEwQztBQUMvQyxFQUFFLG9DQUFPLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxvR0FBQztBQUNqQixFQUFFLE1BQU0sRUFJTjtBQUNGLENBQUM7O0FBRUQ7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLHNCQUFzQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSyw4RkFBOEYsS0FBSyxFQUFFO0FBQzFHLEtBQUssMEVBQTBFLE1BQU0sT0FBTyxLQUFLLEVBQUU7QUFDbkcsS0FBSztBQUNM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QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsaUU7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSwyQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLDRCO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0Esa0Q7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQzs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0EsRztBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsS0FBSztBQUNMLHFCQUFxQjtBQUNyQixLO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQiw0QkFBNEI7QUFDNUIsOEJBQThCO0FBQzlCLGlDQUFpQztBQUNqQyxzQkFBc0I7QUFDdEIsMEJBQTBCO0FBQzFCLHNCQUFzQjtBQUN0Qjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSw0QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSixpRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQzs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdEOztBQUV4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBLGtCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxpQkFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsUUFBUSxRQUFRO0FBQ2hCLFFBQVE7QUFDUjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFB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QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCLHFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsaUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGFBQWEsbUJBQW1CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7OztBQU1BOzs7O0FBSUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJOzs7OztBQUtKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsSUFBSTs7QUFFSixHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBLHVDQUF1QztBQUN2QztBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDcnBIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSw0eURBQWQ7QUFzQ0EsSUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUVBRixHQUFHLENBQUNHLFNBQUosR0FBZ0JKLFFBQWhCO0FBRUEsSUFBTUssT0FBTyxHQUFHSixHQUFHLENBQUNLLGlCQUFwQjtBQUVBSixRQUFRLENBQUNLLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkgsT0FBMUI7QUFFZSxTQUFTSSxhQUFULENBQXVCQyxNQUF2QixFQUFrREMsT0FBbEQsRUFBK0U7QUFDMUYsU0FBTyxJQUFJQyxpREFBSixDQUFlUCxPQUFmLEVBQXdCUSw0RUFBeEIsRUFBNkNILE1BQTdDLEVBQXFEQyxPQUFyRCxDQUFQO0FBQ0giLCJmaWxlIjoic3RhdGljL2NodW5rcy8wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIFBob3RvU3dpcGUgRGVmYXVsdCBVSSAtIDQuMS4zIC0gMjAxOS0wMS0wOFxuKiBodHRwOi8vcGhvdG9zd2lwZS5jb21cbiogQ29weXJpZ2h0IChjKSAyMDE5IERtaXRyeSBTZW1lbm92OyAqL1xuLyoqXG4qXG4qIFVJIG9uIHRvcCBvZiBtYWluIHNsaWRpbmcgYXJlYSAoY2FwdGlvbiwgYXJyb3dzLCBjbG9zZSBidXR0b24sIGV0Yy4pLlxuKiBCdWlsdCBqdXN0IHVzaW5nIHB1YmxpYyBtZXRob2RzL3Byb3BlcnRpZXMgb2YgUGhvdG9Td2lwZS5cbiogXG4qL1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7IFxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHR9IGVsc2Uge1xuXHRcdHJvb3QuUGhvdG9Td2lwZVVJX0RlZmF1bHQgPSBmYWN0b3J5KCk7XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblxuXG52YXIgUGhvdG9Td2lwZVVJX0RlZmF1bHQgPVxuIGZ1bmN0aW9uKHBzd3AsIGZyYW1ld29yaykge1xuXG5cdHZhciB1aSA9IHRoaXM7XG5cdHZhciBfb3ZlcmxheVVJVXBkYXRlZCA9IGZhbHNlLFxuXHRcdF9jb250cm9sc1Zpc2libGUgPSB0cnVlLFxuXHRcdF9mdWxsc2NyZW5BUEksXG5cdFx0X2NvbnRyb2xzLFxuXHRcdF9jYXB0aW9uQ29udGFpbmVyLFxuXHRcdF9mYWtlQ2FwdGlvbkNvbnRhaW5lcixcblx0XHRfaW5kZXhJbmRpY2F0b3IsXG5cdFx0X3NoYXJlQnV0dG9uLFxuXHRcdF9zaGFyZU1vZGFsLFxuXHRcdF9zaGFyZU1vZGFsSGlkZGVuID0gdHJ1ZSxcblx0XHRfaW5pdGFsQ2xvc2VPblNjcm9sbFZhbHVlLFxuXHRcdF9pc0lkbGUsXG5cdFx0X2xpc3RlbixcblxuXHRcdF9sb2FkaW5nSW5kaWNhdG9yLFxuXHRcdF9sb2FkaW5nSW5kaWNhdG9ySGlkZGVuLFxuXHRcdF9sb2FkaW5nSW5kaWNhdG9yVGltZW91dCxcblxuXHRcdF9nYWxsZXJ5SGFzT25lU2xpZGUsXG5cblx0XHRfb3B0aW9ucyxcblx0XHRfZGVmYXVsdFVJT3B0aW9ucyA9IHtcblx0XHRcdGJhcnNTaXplOiB7dG9wOjQ0LCBib3R0b206J2F1dG8nfSxcblx0XHRcdGNsb3NlRWxDbGFzc2VzOiBbJ2l0ZW0nLCAnY2FwdGlvbicsICd6b29tLXdyYXAnLCAndWknLCAndG9wLWJhciddLCBcblx0XHRcdHRpbWVUb0lkbGU6IDQwMDAsIFxuXHRcdFx0dGltZVRvSWRsZU91dHNpZGU6IDEwMDAsXG5cdFx0XHRsb2FkaW5nSW5kaWNhdG9yRGVsYXk6IDEwMDAsIC8vIDJzXG5cdFx0XHRcblx0XHRcdGFkZENhcHRpb25IVE1MRm46IGZ1bmN0aW9uKGl0ZW0sIGNhcHRpb25FbCAvKiwgaXNGYWtlICovKSB7XG5cdFx0XHRcdGlmKCFpdGVtLnRpdGxlKSB7XG5cdFx0XHRcdFx0Y2FwdGlvbkVsLmNoaWxkcmVuWzBdLmlubmVySFRNTCA9ICcnO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXB0aW9uRWwuY2hpbGRyZW5bMF0uaW5uZXJIVE1MID0gaXRlbS50aXRsZTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9LFxuXG5cdFx0XHRjbG9zZUVsOnRydWUsXG5cdFx0XHRjYXB0aW9uRWw6IHRydWUsXG5cdFx0XHRmdWxsc2NyZWVuRWw6IHRydWUsXG5cdFx0XHR6b29tRWw6IHRydWUsXG5cdFx0XHRzaGFyZUVsOiB0cnVlLFxuXHRcdFx0Y291bnRlckVsOiB0cnVlLFxuXHRcdFx0YXJyb3dFbDogdHJ1ZSxcblx0XHRcdHByZWxvYWRlckVsOiB0cnVlLFxuXG5cdFx0XHR0YXBUb0Nsb3NlOiBmYWxzZSxcblx0XHRcdHRhcFRvVG9nZ2xlQ29udHJvbHM6IHRydWUsXG5cblx0XHRcdGNsaWNrVG9DbG9zZU5vblpvb21hYmxlOiB0cnVlLFxuXG5cdFx0XHRzaGFyZUJ1dHRvbnM6IFtcblx0XHRcdFx0e2lkOidmYWNlYm9vaycsIGxhYmVsOidTaGFyZSBvbiBGYWNlYm9vaycsIHVybDonaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9e3t1cmx9fSd9LFxuXHRcdFx0XHR7aWQ6J3R3aXR0ZXInLCBsYWJlbDonVHdlZXQnLCB1cmw6J2h0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9e3t0ZXh0fX0mdXJsPXt7dXJsfX0nfSxcblx0XHRcdFx0e2lkOidwaW50ZXJlc3QnLCBsYWJlbDonUGluIGl0JywgdXJsOidodHRwOi8vd3d3LnBpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9idXR0b24vJytcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Jz91cmw9e3t1cmx9fSZtZWRpYT17e2ltYWdlX3VybH19JmRlc2NyaXB0aW9uPXt7dGV4dH19J30sXG5cdFx0XHRcdHtpZDonZG93bmxvYWQnLCBsYWJlbDonRG93bmxvYWQgaW1hZ2UnLCB1cmw6J3t7cmF3X2ltYWdlX3VybH19JywgZG93bmxvYWQ6dHJ1ZX1cblx0XHRcdF0sXG5cdFx0XHRnZXRJbWFnZVVSTEZvclNoYXJlOiBmdW5jdGlvbiggLyogc2hhcmVCdXR0b25EYXRhICovICkge1xuXHRcdFx0XHRyZXR1cm4gcHN3cC5jdXJySXRlbS5zcmMgfHwgJyc7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0UGFnZVVSTEZvclNoYXJlOiBmdW5jdGlvbiggLyogc2hhcmVCdXR0b25EYXRhICovICkge1xuXHRcdFx0XHRyZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0VGV4dEZvclNoYXJlOiBmdW5jdGlvbiggLyogc2hhcmVCdXR0b25EYXRhICovICkge1xuXHRcdFx0XHRyZXR1cm4gcHN3cC5jdXJySXRlbS50aXRsZSB8fCAnJztcblx0XHRcdH0sXG5cdFx0XHRcdFxuXHRcdFx0aW5kZXhJbmRpY2F0b3JTZXA6ICcgLyAnLFxuXHRcdFx0Zml0Q29udHJvbHNXaWR0aDogMTIwMFxuXG5cdFx0fSxcblx0XHRfYmxvY2tDb250cm9sc1RhcCxcblx0XHRfYmxvY2tDb250cm9sc1RhcFRpbWVvdXQ7XG5cblxuXG5cdHZhciBfb25Db250cm9sc1RhcCA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdGlmKF9ibG9ja0NvbnRyb2xzVGFwKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cblx0XHRcdGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcblxuXHRcdFx0aWYoX29wdGlvbnMudGltZVRvSWRsZSAmJiBfb3B0aW9ucy5tb3VzZVVzZWQgJiYgIV9pc0lkbGUpIHtcblx0XHRcdFx0Ly8gcmVzZXQgaWRsZSB0aW1lclxuXHRcdFx0XHRfb25JZGxlTW91c2VNb3ZlKCk7XG5cdFx0XHR9XG5cblxuXHRcdFx0dmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudCxcblx0XHRcdFx0dWlFbGVtZW50LFxuXHRcdFx0XHRjbGlja2VkQ2xhc3MgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnLFxuXHRcdFx0XHRmb3VuZDtcblxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IF91aUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHVpRWxlbWVudCA9IF91aUVsZW1lbnRzW2ldO1xuXHRcdFx0XHRpZih1aUVsZW1lbnQub25UYXAgJiYgY2xpY2tlZENsYXNzLmluZGV4T2YoJ3Bzd3BfXycgKyB1aUVsZW1lbnQubmFtZSApID4gLTEgKSB7XG5cdFx0XHRcdFx0dWlFbGVtZW50Lm9uVGFwKCk7XG5cdFx0XHRcdFx0Zm91bmQgPSB0cnVlO1xuXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYoZm91bmQpIHtcblx0XHRcdFx0aWYoZS5zdG9wUHJvcGFnYXRpb24pIHtcblx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9ibG9ja0NvbnRyb2xzVGFwID0gdHJ1ZTtcblxuXHRcdFx0XHQvLyBTb21lIHZlcnNpb25zIG9mIEFuZHJvaWQgZG9uJ3QgcHJldmVudCBnaG9zdCBjbGljayBldmVudCBcblx0XHRcdFx0Ly8gd2hlbiBwcmV2ZW50RGVmYXVsdCgpIHdhcyBjYWxsZWQgb24gdG91Y2hzdGFydCBhbmQvb3IgdG91Y2hlbmQuXG5cdFx0XHRcdC8vIFxuXHRcdFx0XHQvLyBUaGlzIGhhcHBlbnMgb24gdjQuMywgNC4yLCA0LjEsIFxuXHRcdFx0XHQvLyBvbGRlciB2ZXJzaW9ucyBzdHJhbmdlbHkgd29yayBjb3JyZWN0bHksIFxuXHRcdFx0XHQvLyBidXQganVzdCBpbiBjYXNlIHdlIGFkZCBkZWxheSBvbiBhbGwgb2YgdGhlbSlcdFxuXHRcdFx0XHR2YXIgdGFwRGVsYXkgPSBmcmFtZXdvcmsuZmVhdHVyZXMuaXNPbGRBbmRyb2lkID8gNjAwIDogMzA7XG5cdFx0XHRcdF9ibG9ja0NvbnRyb2xzVGFwVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0X2Jsb2NrQ29udHJvbHNUYXAgPSBmYWxzZTtcblx0XHRcdFx0fSwgdGFwRGVsYXkpO1xuXHRcdFx0fVxuXG5cdFx0fSxcblx0XHRfZml0Q29udHJvbHNJblZpZXdwb3J0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gIXBzd3AubGlrZWx5VG91Y2hEZXZpY2UgfHwgX29wdGlvbnMubW91c2VVc2VkIHx8IHNjcmVlbi53aWR0aCA+IF9vcHRpb25zLmZpdENvbnRyb2xzV2lkdGg7XG5cdFx0fSxcblx0XHRfdG9nZ2xlUHN3cENsYXNzID0gZnVuY3Rpb24oZWwsIGNOYW1lLCBhZGQpIHtcblx0XHRcdGZyYW1ld29ya1sgKGFkZCA/ICdhZGQnIDogJ3JlbW92ZScpICsgJ0NsYXNzJyBdKGVsLCAncHN3cF9fJyArIGNOYW1lKTtcblx0XHR9LFxuXG5cdFx0Ly8gYWRkIGNsYXNzIHdoZW4gdGhlcmUgaXMganVzdCBvbmUgaXRlbSBpbiB0aGUgZ2FsbGVyeVxuXHRcdC8vIChieSBkZWZhdWx0IGl0IGhpZGVzIGxlZnQvcmlnaHQgYXJyb3dzIGFuZCAxb2ZYIGNvdW50ZXIpXG5cdFx0X2NvdW50TnVtSXRlbXMgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBoYXNPbmVTbGlkZSA9IChfb3B0aW9ucy5nZXROdW1JdGVtc0ZuKCkgPT09IDEpO1xuXG5cdFx0XHRpZihoYXNPbmVTbGlkZSAhPT0gX2dhbGxlcnlIYXNPbmVTbGlkZSkge1xuXHRcdFx0XHRfdG9nZ2xlUHN3cENsYXNzKF9jb250cm9scywgJ3VpLS1vbmUtc2xpZGUnLCBoYXNPbmVTbGlkZSk7XG5cdFx0XHRcdF9nYWxsZXJ5SGFzT25lU2xpZGUgPSBoYXNPbmVTbGlkZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF90b2dnbGVTaGFyZU1vZGFsQ2xhc3MgPSBmdW5jdGlvbigpIHtcblx0XHRcdF90b2dnbGVQc3dwQ2xhc3MoX3NoYXJlTW9kYWwsICdzaGFyZS1tb2RhbC0taGlkZGVuJywgX3NoYXJlTW9kYWxIaWRkZW4pO1xuXHRcdH0sXG5cdFx0X3RvZ2dsZVNoYXJlTW9kYWwgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0X3NoYXJlTW9kYWxIaWRkZW4gPSAhX3NoYXJlTW9kYWxIaWRkZW47XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0aWYoIV9zaGFyZU1vZGFsSGlkZGVuKSB7XG5cdFx0XHRcdF90b2dnbGVTaGFyZU1vZGFsQ2xhc3MoKTtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZighX3NoYXJlTW9kYWxIaWRkZW4pIHtcblx0XHRcdFx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyhfc2hhcmVNb2RhbCwgJ3Bzd3BfX3NoYXJlLW1vZGFsLS1mYWRlLWluJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCAzMCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3MoX3NoYXJlTW9kYWwsICdwc3dwX19zaGFyZS1tb2RhbC0tZmFkZS1pbicpO1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKF9zaGFyZU1vZGFsSGlkZGVuKSB7XG5cdFx0XHRcdFx0XHRfdG9nZ2xlU2hhcmVNb2RhbENsYXNzKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCAzMDApO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZighX3NoYXJlTW9kYWxIaWRkZW4pIHtcblx0XHRcdFx0X3VwZGF0ZVNoYXJlVVJMcygpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cblx0XHRfb3BlbldpbmRvd1BvcHVwID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0ZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXHRcdFx0dmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcblxuXHRcdFx0cHN3cC5zaG91dCgnc2hhcmVMaW5rQ2xpY2snLCBlLCB0YXJnZXQpO1xuXG5cdFx0XHRpZighdGFyZ2V0LmhyZWYpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZG93bmxvYWQnKSApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdHdpbmRvdy5vcGVuKHRhcmdldC5ocmVmLCAncHN3cF9zaGFyZScsICdzY3JvbGxiYXJzPXllcyxyZXNpemFibGU9eWVzLHRvb2xiYXI9bm8sJytcblx0XHRcdFx0XHRcdFx0XHRcdFx0J2xvY2F0aW9uPXllcyx3aWR0aD01NTAsaGVpZ2h0PTQyMCx0b3A9MTAwLGxlZnQ9JyArIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQod2luZG93LnNjcmVlbiA/IE1hdGgucm91bmQoc2NyZWVuLndpZHRoIC8gMiAtIDI3NSkgOiAxMDApICApO1xuXG5cdFx0XHRpZighX3NoYXJlTW9kYWxIaWRkZW4pIHtcblx0XHRcdFx0X3RvZ2dsZVNoYXJlTW9kYWwoKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0X3VwZGF0ZVNoYXJlVVJMcyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNoYXJlQnV0dG9uT3V0ID0gJycsXG5cdFx0XHRcdHNoYXJlQnV0dG9uRGF0YSxcblx0XHRcdFx0c2hhcmVVUkwsXG5cdFx0XHRcdGltYWdlX3VybCxcblx0XHRcdFx0cGFnZV91cmwsXG5cdFx0XHRcdHNoYXJlX3RleHQ7XG5cblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBfb3B0aW9ucy5zaGFyZUJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0c2hhcmVCdXR0b25EYXRhID0gX29wdGlvbnMuc2hhcmVCdXR0b25zW2ldO1xuXG5cdFx0XHRcdGltYWdlX3VybCA9IF9vcHRpb25zLmdldEltYWdlVVJMRm9yU2hhcmUoc2hhcmVCdXR0b25EYXRhKTtcblx0XHRcdFx0cGFnZV91cmwgPSBfb3B0aW9ucy5nZXRQYWdlVVJMRm9yU2hhcmUoc2hhcmVCdXR0b25EYXRhKTtcblx0XHRcdFx0c2hhcmVfdGV4dCA9IF9vcHRpb25zLmdldFRleHRGb3JTaGFyZShzaGFyZUJ1dHRvbkRhdGEpO1xuXG5cdFx0XHRcdHNoYXJlVVJMID0gc2hhcmVCdXR0b25EYXRhLnVybC5yZXBsYWNlKCd7e3VybH19JywgZW5jb2RlVVJJQ29tcG9uZW50KHBhZ2VfdXJsKSApXG5cdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgne3tpbWFnZV91cmx9fScsIGVuY29kZVVSSUNvbXBvbmVudChpbWFnZV91cmwpIClcblx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKCd7e3Jhd19pbWFnZV91cmx9fScsIGltYWdlX3VybCApXG5cdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgne3t0ZXh0fX0nLCBlbmNvZGVVUklDb21wb25lbnQoc2hhcmVfdGV4dCkgKTtcblxuXHRcdFx0XHRzaGFyZUJ1dHRvbk91dCArPSAnPGEgaHJlZj1cIicgKyBzaGFyZVVSTCArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIiAnK1xuXHRcdFx0XHRcdFx0XHRcdFx0J2NsYXNzPVwicHN3cF9fc2hhcmUtLScgKyBzaGFyZUJ1dHRvbkRhdGEuaWQgKyAnXCInICtcblx0XHRcdFx0XHRcdFx0XHRcdChzaGFyZUJ1dHRvbkRhdGEuZG93bmxvYWQgPyAnZG93bmxvYWQnIDogJycpICsgJz4nICsgXG5cdFx0XHRcdFx0XHRcdFx0XHRzaGFyZUJ1dHRvbkRhdGEubGFiZWwgKyAnPC9hPic7XG5cblx0XHRcdFx0aWYoX29wdGlvbnMucGFyc2VTaGFyZUJ1dHRvbk91dCkge1xuXHRcdFx0XHRcdHNoYXJlQnV0dG9uT3V0ID0gX29wdGlvbnMucGFyc2VTaGFyZUJ1dHRvbk91dChzaGFyZUJ1dHRvbkRhdGEsIHNoYXJlQnV0dG9uT3V0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0X3NoYXJlTW9kYWwuY2hpbGRyZW5bMF0uaW5uZXJIVE1MID0gc2hhcmVCdXR0b25PdXQ7XG5cdFx0XHRfc2hhcmVNb2RhbC5jaGlsZHJlblswXS5vbmNsaWNrID0gX29wZW5XaW5kb3dQb3B1cDtcblxuXHRcdH0sXG5cdFx0X2hhc0Nsb3NlQ2xhc3MgPSBmdW5jdGlvbih0YXJnZXQpIHtcblx0XHRcdGZvcih2YXIgIGkgPSAwOyBpIDwgX29wdGlvbnMuY2xvc2VFbENsYXNzZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYoIGZyYW1ld29yay5oYXNDbGFzcyh0YXJnZXQsICdwc3dwX18nICsgX29wdGlvbnMuY2xvc2VFbENsYXNzZXNbaV0pICkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfaWRsZUludGVydmFsLFxuXHRcdF9pZGxlVGltZXIsXG5cdFx0X2lkbGVJbmNyZW1lbnQgPSAwLFxuXHRcdF9vbklkbGVNb3VzZU1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdGNsZWFyVGltZW91dChfaWRsZVRpbWVyKTtcblx0XHRcdF9pZGxlSW5jcmVtZW50ID0gMDtcblx0XHRcdGlmKF9pc0lkbGUpIHtcblx0XHRcdFx0dWkuc2V0SWRsZShmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfb25Nb3VzZUxlYXZlV2luZG93ID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0ZSA9IGUgPyBlIDogd2luZG93LmV2ZW50O1xuXHRcdFx0dmFyIGZyb20gPSBlLnJlbGF0ZWRUYXJnZXQgfHwgZS50b0VsZW1lbnQ7XG5cdFx0XHRpZiAoIWZyb20gfHwgZnJvbS5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dChfaWRsZVRpbWVyKTtcblx0XHRcdFx0X2lkbGVUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dWkuc2V0SWRsZSh0cnVlKTtcblx0XHRcdFx0fSwgX29wdGlvbnMudGltZVRvSWRsZU91dHNpZGUpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X3NldHVwRnVsbHNjcmVlbkFQSSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoX29wdGlvbnMuZnVsbHNjcmVlbkVsICYmICFmcmFtZXdvcmsuZmVhdHVyZXMuaXNPbGRBbmRyb2lkKSB7XG5cdFx0XHRcdGlmKCFfZnVsbHNjcmVuQVBJKSB7XG5cdFx0XHRcdFx0X2Z1bGxzY3JlbkFQSSA9IHVpLmdldEZ1bGxzY3JlZW5BUEkoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihfZnVsbHNjcmVuQVBJKSB7XG5cdFx0XHRcdFx0ZnJhbWV3b3JrLmJpbmQoZG9jdW1lbnQsIF9mdWxsc2NyZW5BUEkuZXZlbnRLLCB1aS51cGRhdGVGdWxsc2NyZWVuKTtcblx0XHRcdFx0XHR1aS51cGRhdGVGdWxsc2NyZWVuKCk7XG5cdFx0XHRcdFx0ZnJhbWV3b3JrLmFkZENsYXNzKHBzd3AudGVtcGxhdGUsICdwc3dwLS1zdXBwb3J0cy1mcycpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZyYW1ld29yay5yZW1vdmVDbGFzcyhwc3dwLnRlbXBsYXRlLCAncHN3cC0tc3VwcG9ydHMtZnMnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X3NldHVwTG9hZGluZ0luZGljYXRvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gU2V0dXAgbG9hZGluZyBpbmRpY2F0b3Jcblx0XHRcdGlmKF9vcHRpb25zLnByZWxvYWRlckVsKSB7XG5cdFx0XHRcblx0XHRcdFx0X3RvZ2dsZUxvYWRpbmdJbmRpY2F0b3IodHJ1ZSk7XG5cblx0XHRcdFx0X2xpc3RlbignYmVmb3JlQ2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRjbGVhclRpbWVvdXQoX2xvYWRpbmdJbmRpY2F0b3JUaW1lb3V0KTtcblxuXHRcdFx0XHRcdC8vIGRpc3BsYXkgbG9hZGluZyBpbmRpY2F0b3Igd2l0aCBkZWxheVxuXHRcdFx0XHRcdF9sb2FkaW5nSW5kaWNhdG9yVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRcdGlmKHBzd3AuY3Vyckl0ZW0gJiYgcHN3cC5jdXJySXRlbS5sb2FkaW5nKSB7XG5cblx0XHRcdFx0XHRcdFx0aWYoICFwc3dwLmFsbG93UHJvZ3Jlc3NpdmVJbWcoKSB8fCAocHN3cC5jdXJySXRlbS5pbWcgJiYgIXBzd3AuY3Vyckl0ZW0uaW1nLm5hdHVyYWxXaWR0aCkgICkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIHNob3cgcHJlbG9hZGVyIGlmIHByb2dyZXNzaXZlIGxvYWRpbmcgaXMgbm90IGVuYWJsZWQsIFxuXHRcdFx0XHRcdFx0XHRcdC8vIG9yIGltYWdlIHdpZHRoIGlzIG5vdCBkZWZpbmVkIHlldCAoYmVjYXVzZSBvZiBzbG93IGNvbm5lY3Rpb24pXG5cdFx0XHRcdFx0XHRcdFx0X3RvZ2dsZUxvYWRpbmdJbmRpY2F0b3IoZmFsc2UpOyBcblx0XHRcdFx0XHRcdFx0XHQvLyBpdGVtcy1jb250cm9sbGVyLmpzIGZ1bmN0aW9uIGFsbG93UHJvZ3Jlc3NpdmVJbWdcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdF90b2dnbGVMb2FkaW5nSW5kaWNhdG9yKHRydWUpOyAvLyBoaWRlIHByZWxvYWRlclxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fSwgX29wdGlvbnMubG9hZGluZ0luZGljYXRvckRlbGF5KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0fSk7XG5cdFx0XHRcdF9saXN0ZW4oJ2ltYWdlTG9hZENvbXBsZXRlJywgZnVuY3Rpb24oaW5kZXgsIGl0ZW0pIHtcblx0XHRcdFx0XHRpZihwc3dwLmN1cnJJdGVtID09PSBpdGVtKSB7XG5cdFx0XHRcdFx0XHRfdG9nZ2xlTG9hZGluZ0luZGljYXRvcih0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfdG9nZ2xlTG9hZGluZ0luZGljYXRvciA9IGZ1bmN0aW9uKGhpZGUpIHtcblx0XHRcdGlmKCBfbG9hZGluZ0luZGljYXRvckhpZGRlbiAhPT0gaGlkZSApIHtcblx0XHRcdFx0X3RvZ2dsZVBzd3BDbGFzcyhfbG9hZGluZ0luZGljYXRvciwgJ3ByZWxvYWRlci0tYWN0aXZlJywgIWhpZGUpO1xuXHRcdFx0XHRfbG9hZGluZ0luZGljYXRvckhpZGRlbiA9IGhpZGU7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfYXBwbHlOYXZCYXJHYXBzID0gZnVuY3Rpb24oaXRlbSkge1xuXHRcdFx0dmFyIGdhcCA9IGl0ZW0udkdhcDtcblxuXHRcdFx0aWYoIF9maXRDb250cm9sc0luVmlld3BvcnQoKSApIHtcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBiYXJzID0gX29wdGlvbnMuYmFyc1NpemU7IFxuXHRcdFx0XHRpZihfb3B0aW9ucy5jYXB0aW9uRWwgJiYgYmFycy5ib3R0b20gPT09ICdhdXRvJykge1xuXHRcdFx0XHRcdGlmKCFfZmFrZUNhcHRpb25Db250YWluZXIpIHtcblx0XHRcdFx0XHRcdF9mYWtlQ2FwdGlvbkNvbnRhaW5lciA9IGZyYW1ld29yay5jcmVhdGVFbCgncHN3cF9fY2FwdGlvbiBwc3dwX19jYXB0aW9uLS1mYWtlJyk7XG5cdFx0XHRcdFx0XHRfZmFrZUNhcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoIGZyYW1ld29yay5jcmVhdGVFbCgncHN3cF9fY2FwdGlvbl9fY2VudGVyJykgKTtcblx0XHRcdFx0XHRcdF9jb250cm9scy5pbnNlcnRCZWZvcmUoX2Zha2VDYXB0aW9uQ29udGFpbmVyLCBfY2FwdGlvbkNvbnRhaW5lcik7XG5cdFx0XHRcdFx0XHRmcmFtZXdvcmsuYWRkQ2xhc3MoX2NvbnRyb2xzLCAncHN3cF9fdWktLWZpdCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiggX29wdGlvbnMuYWRkQ2FwdGlvbkhUTUxGbihpdGVtLCBfZmFrZUNhcHRpb25Db250YWluZXIsIHRydWUpICkge1xuXG5cdFx0XHRcdFx0XHR2YXIgY2FwdGlvblNpemUgPSBfZmFrZUNhcHRpb25Db250YWluZXIuY2xpZW50SGVpZ2h0O1xuXHRcdFx0XHRcdFx0Z2FwLmJvdHRvbSA9IHBhcnNlSW50KGNhcHRpb25TaXplLDEwKSB8fCA0NDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Z2FwLmJvdHRvbSA9IGJhcnMudG9wOyAvLyBpZiBubyBjYXB0aW9uLCBzZXQgc2l6ZSBvZiBib3R0b20gZ2FwIHRvIHNpemUgb2YgdG9wXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGdhcC5ib3R0b20gPSBiYXJzLmJvdHRvbSA9PT0gJ2F1dG8nID8gMCA6IGJhcnMuYm90dG9tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyBoZWlnaHQgb2YgdG9wIGJhciBpcyBzdGF0aWMsIG5vIG5lZWQgdG8gY2FsY3VsYXRlIGl0XG5cdFx0XHRcdGdhcC50b3AgPSBiYXJzLnRvcDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGdhcC50b3AgPSBnYXAuYm90dG9tID0gMDtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9zZXR1cElkbGUgPSBmdW5jdGlvbigpIHtcblx0XHRcdC8vIEhpZGUgY29udHJvbHMgd2hlbiBtb3VzZSBpcyB1c2VkXG5cdFx0XHRpZihfb3B0aW9ucy50aW1lVG9JZGxlKSB7XG5cdFx0XHRcdF9saXN0ZW4oJ21vdXNlVXNlZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGZyYW1ld29yay5iaW5kKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgX29uSWRsZU1vdXNlTW92ZSk7XG5cdFx0XHRcdFx0ZnJhbWV3b3JrLmJpbmQoZG9jdW1lbnQsICdtb3VzZW91dCcsIF9vbk1vdXNlTGVhdmVXaW5kb3cpO1xuXG5cdFx0XHRcdFx0X2lkbGVJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0X2lkbGVJbmNyZW1lbnQrKztcblx0XHRcdFx0XHRcdGlmKF9pZGxlSW5jcmVtZW50ID09PSAyKSB7XG5cdFx0XHRcdFx0XHRcdHVpLnNldElkbGUodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgX29wdGlvbnMudGltZVRvSWRsZSAvIDIpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9zZXR1cEhpZGluZ0NvbnRyb2xzRHVyaW5nR2VzdHVyZXMgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gSGlkZSBjb250cm9scyBvbiB2ZXJ0aWNhbCBkcmFnXG5cdFx0XHRfbGlzdGVuKCdvblZlcnRpY2FsRHJhZycsIGZ1bmN0aW9uKG5vdykge1xuXHRcdFx0XHRpZihfY29udHJvbHNWaXNpYmxlICYmIG5vdyA8IDAuOTUpIHtcblx0XHRcdFx0XHR1aS5oaWRlQ29udHJvbHMoKTtcblx0XHRcdFx0fSBlbHNlIGlmKCFfY29udHJvbHNWaXNpYmxlICYmIG5vdyA+PSAwLjk1KSB7XG5cdFx0XHRcdFx0dWkuc2hvd0NvbnRyb2xzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBIaWRlIGNvbnRyb2xzIHdoZW4gcGluY2hpbmcgdG8gY2xvc2Vcblx0XHRcdHZhciBwaW5jaENvbnRyb2xzSGlkZGVuO1xuXHRcdFx0X2xpc3Rlbignb25QaW5jaENsb3NlJyAsIGZ1bmN0aW9uKG5vdykge1xuXHRcdFx0XHRpZihfY29udHJvbHNWaXNpYmxlICYmIG5vdyA8IDAuOSkge1xuXHRcdFx0XHRcdHVpLmhpZGVDb250cm9scygpO1xuXHRcdFx0XHRcdHBpbmNoQ29udHJvbHNIaWRkZW4gPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2UgaWYocGluY2hDb250cm9sc0hpZGRlbiAmJiAhX2NvbnRyb2xzVmlzaWJsZSAmJiBub3cgPiAwLjkpIHtcblx0XHRcdFx0XHR1aS5zaG93Q29udHJvbHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdF9saXN0ZW4oJ3pvb21HZXN0dXJlRW5kZWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0cGluY2hDb250cm9sc0hpZGRlbiA9IGZhbHNlO1xuXHRcdFx0XHRpZihwaW5jaENvbnRyb2xzSGlkZGVuICYmICFfY29udHJvbHNWaXNpYmxlKSB7XG5cdFx0XHRcdFx0dWkuc2hvd0NvbnRyb2xzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0fTtcblxuXG5cblx0dmFyIF91aUVsZW1lbnRzID0gW1xuXHRcdHsgXG5cdFx0XHRuYW1lOiAnY2FwdGlvbicsIFxuXHRcdFx0b3B0aW9uOiAnY2FwdGlvbkVsJyxcblx0XHRcdG9uSW5pdDogZnVuY3Rpb24oZWwpIHsgIFxuXHRcdFx0XHRfY2FwdGlvbkNvbnRhaW5lciA9IGVsOyBcblx0XHRcdH0gXG5cdFx0fSxcblx0XHR7IFxuXHRcdFx0bmFtZTogJ3NoYXJlLW1vZGFsJywgXG5cdFx0XHRvcHRpb246ICdzaGFyZUVsJyxcblx0XHRcdG9uSW5pdDogZnVuY3Rpb24oZWwpIHsgIFxuXHRcdFx0XHRfc2hhcmVNb2RhbCA9IGVsO1xuXHRcdFx0fSxcblx0XHRcdG9uVGFwOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0X3RvZ2dsZVNoYXJlTW9kYWwoKTtcblx0XHRcdH0gXG5cdFx0fSxcblx0XHR7IFxuXHRcdFx0bmFtZTogJ2J1dHRvbi0tc2hhcmUnLCBcblx0XHRcdG9wdGlvbjogJ3NoYXJlRWwnLFxuXHRcdFx0b25Jbml0OiBmdW5jdGlvbihlbCkgeyBcblx0XHRcdFx0X3NoYXJlQnV0dG9uID0gZWw7XG5cdFx0XHR9LFxuXHRcdFx0b25UYXA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfdG9nZ2xlU2hhcmVNb2RhbCgpO1xuXHRcdFx0fSBcblx0XHR9LFxuXHRcdHsgXG5cdFx0XHRuYW1lOiAnYnV0dG9uLS16b29tJywgXG5cdFx0XHRvcHRpb246ICd6b29tRWwnLFxuXHRcdFx0b25UYXA6IHBzd3AudG9nZ2xlRGVza3RvcFpvb21cblx0XHR9LFxuXHRcdHsgXG5cdFx0XHRuYW1lOiAnY291bnRlcicsIFxuXHRcdFx0b3B0aW9uOiAnY291bnRlckVsJyxcblx0XHRcdG9uSW5pdDogZnVuY3Rpb24oZWwpIHsgIFxuXHRcdFx0XHRfaW5kZXhJbmRpY2F0b3IgPSBlbDtcblx0XHRcdH0gXG5cdFx0fSxcblx0XHR7IFxuXHRcdFx0bmFtZTogJ2J1dHRvbi0tY2xvc2UnLCBcblx0XHRcdG9wdGlvbjogJ2Nsb3NlRWwnLFxuXHRcdFx0b25UYXA6IHBzd3AuY2xvc2Vcblx0XHR9LFxuXHRcdHsgXG5cdFx0XHRuYW1lOiAnYnV0dG9uLS1hcnJvdy0tbGVmdCcsIFxuXHRcdFx0b3B0aW9uOiAnYXJyb3dFbCcsXG5cdFx0XHRvblRhcDogcHN3cC5wcmV2XG5cdFx0fSxcblx0XHR7IFxuXHRcdFx0bmFtZTogJ2J1dHRvbi0tYXJyb3ctLXJpZ2h0JywgXG5cdFx0XHRvcHRpb246ICdhcnJvd0VsJyxcblx0XHRcdG9uVGFwOiBwc3dwLm5leHRcblx0XHR9LFxuXHRcdHsgXG5cdFx0XHRuYW1lOiAnYnV0dG9uLS1mcycsIFxuXHRcdFx0b3B0aW9uOiAnZnVsbHNjcmVlbkVsJyxcblx0XHRcdG9uVGFwOiBmdW5jdGlvbigpIHsgIFxuXHRcdFx0XHRpZihfZnVsbHNjcmVuQVBJLmlzRnVsbHNjcmVlbigpKSB7XG5cdFx0XHRcdFx0X2Z1bGxzY3JlbkFQSS5leGl0KCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0X2Z1bGxzY3JlbkFQSS5lbnRlcigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IFxuXHRcdH0sXG5cdFx0eyBcblx0XHRcdG5hbWU6ICdwcmVsb2FkZXInLCBcblx0XHRcdG9wdGlvbjogJ3ByZWxvYWRlckVsJyxcblx0XHRcdG9uSW5pdDogZnVuY3Rpb24oZWwpIHsgIFxuXHRcdFx0XHRfbG9hZGluZ0luZGljYXRvciA9IGVsO1xuXHRcdFx0fSBcblx0XHR9XG5cblx0XTtcblxuXHR2YXIgX3NldHVwVUlFbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpdGVtLFxuXHRcdFx0Y2xhc3NBdHRyLFxuXHRcdFx0dWlFbGVtZW50O1xuXG5cdFx0dmFyIGxvb3BUaHJvdWdoQ2hpbGRFbGVtZW50cyA9IGZ1bmN0aW9uKHNDaGlsZHJlbikge1xuXHRcdFx0aWYoIXNDaGlsZHJlbikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsID0gc0NoaWxkcmVuLmxlbmd0aDtcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0aXRlbSA9IHNDaGlsZHJlbltpXTtcblx0XHRcdFx0Y2xhc3NBdHRyID0gaXRlbS5jbGFzc05hbWU7XG5cblx0XHRcdFx0Zm9yKHZhciBhID0gMDsgYSA8IF91aUVsZW1lbnRzLmxlbmd0aDsgYSsrKSB7XG5cdFx0XHRcdFx0dWlFbGVtZW50ID0gX3VpRWxlbWVudHNbYV07XG5cblx0XHRcdFx0XHRpZihjbGFzc0F0dHIuaW5kZXhPZigncHN3cF9fJyArIHVpRWxlbWVudC5uYW1lKSA+IC0xICApIHtcblxuXHRcdFx0XHRcdFx0aWYoIF9vcHRpb25zW3VpRWxlbWVudC5vcHRpb25dICkgeyAvLyBpZiBlbGVtZW50IGlzIG5vdCBkaXNhYmxlZCBmcm9tIG9wdGlvbnNcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGZyYW1ld29yay5yZW1vdmVDbGFzcyhpdGVtLCAncHN3cF9fZWxlbWVudC0tZGlzYWJsZWQnKTtcblx0XHRcdFx0XHRcdFx0aWYodWlFbGVtZW50Lm9uSW5pdCkge1xuXHRcdFx0XHRcdFx0XHRcdHVpRWxlbWVudC5vbkluaXQoaXRlbSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdC8vaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyhpdGVtLCAncHN3cF9fZWxlbWVudC0tZGlzYWJsZWQnKTtcblx0XHRcdFx0XHRcdFx0Ly9pdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRsb29wVGhyb3VnaENoaWxkRWxlbWVudHMoX2NvbnRyb2xzLmNoaWxkcmVuKTtcblxuXHRcdHZhciB0b3BCYXIgPSAgZnJhbWV3b3JrLmdldENoaWxkQnlDbGFzcyhfY29udHJvbHMsICdwc3dwX190b3AtYmFyJyk7XG5cdFx0aWYodG9wQmFyKSB7XG5cdFx0XHRsb29wVGhyb3VnaENoaWxkRWxlbWVudHMoIHRvcEJhci5jaGlsZHJlbiApO1xuXHRcdH1cblx0fTtcblxuXG5cdFxuXG5cdHVpLmluaXQgPSBmdW5jdGlvbigpIHtcblxuXHRcdC8vIGV4dGVuZCBvcHRpb25zXG5cdFx0ZnJhbWV3b3JrLmV4dGVuZChwc3dwLm9wdGlvbnMsIF9kZWZhdWx0VUlPcHRpb25zLCB0cnVlKTtcblxuXHRcdC8vIGNyZWF0ZSBsb2NhbCBsaW5rIGZvciBmYXN0IGFjY2Vzc1xuXHRcdF9vcHRpb25zID0gcHN3cC5vcHRpb25zO1xuXG5cdFx0Ly8gZmluZCBwc3dwX191aSBlbGVtZW50XG5cdFx0X2NvbnRyb2xzID0gZnJhbWV3b3JrLmdldENoaWxkQnlDbGFzcyhwc3dwLnNjcm9sbFdyYXAsICdwc3dwX191aScpO1xuXG5cdFx0Ly8gY3JlYXRlIGxvY2FsIGxpbmtcblx0XHRfbGlzdGVuID0gcHN3cC5saXN0ZW47XG5cblxuXHRcdF9zZXR1cEhpZGluZ0NvbnRyb2xzRHVyaW5nR2VzdHVyZXMoKTtcblxuXHRcdC8vIHVwZGF0ZSBjb250cm9scyB3aGVuIHNsaWRlcyBjaGFuZ2Vcblx0XHRfbGlzdGVuKCdiZWZvcmVDaGFuZ2UnLCB1aS51cGRhdGUpO1xuXG5cdFx0Ly8gdG9nZ2xlIHpvb20gb24gZG91YmxlLXRhcFxuXHRcdF9saXN0ZW4oJ2RvdWJsZVRhcCcsIGZ1bmN0aW9uKHBvaW50KSB7XG5cdFx0XHR2YXIgaW5pdGlhbFpvb21MZXZlbCA9IHBzd3AuY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbDtcblx0XHRcdGlmKHBzd3AuZ2V0Wm9vbUxldmVsKCkgIT09IGluaXRpYWxab29tTGV2ZWwpIHtcblx0XHRcdFx0cHN3cC56b29tVG8oaW5pdGlhbFpvb21MZXZlbCwgcG9pbnQsIDMzMyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwc3dwLnpvb21Ubyhfb3B0aW9ucy5nZXREb3VibGVUYXBab29tKGZhbHNlLCBwc3dwLmN1cnJJdGVtKSwgcG9pbnQsIDMzMyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBBbGxvdyB0ZXh0IHNlbGVjdGlvbiBpbiBjYXB0aW9uXG5cdFx0X2xpc3RlbigncHJldmVudERyYWdFdmVudCcsIGZ1bmN0aW9uKGUsIGlzRG93biwgcHJldmVudE9iaikge1xuXHRcdFx0dmFyIHQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cdFx0XHRpZihcblx0XHRcdFx0dCAmJiBcblx0XHRcdFx0dC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgJiYgZS50eXBlLmluZGV4T2YoJ21vdXNlJykgPiAtMSAmJiBcblx0XHRcdFx0KCB0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5pbmRleE9mKCdfX2NhcHRpb24nKSA+IDAgfHwgKC8oU01BTEx8U1RST05HfEVNKS9pKS50ZXN0KHQudGFnTmFtZSkgKSBcblx0XHRcdCkge1xuXHRcdFx0XHRwcmV2ZW50T2JqLnByZXZlbnQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIGJpbmQgZXZlbnRzIGZvciBVSVxuXHRcdF9saXN0ZW4oJ2JpbmRFdmVudHMnLCBmdW5jdGlvbigpIHtcblx0XHRcdGZyYW1ld29yay5iaW5kKF9jb250cm9scywgJ3Bzd3BUYXAgY2xpY2snLCBfb25Db250cm9sc1RhcCk7XG5cdFx0XHRmcmFtZXdvcmsuYmluZChwc3dwLnNjcm9sbFdyYXAsICdwc3dwVGFwJywgdWkub25HbG9iYWxUYXApO1xuXG5cdFx0XHRpZighcHN3cC5saWtlbHlUb3VjaERldmljZSkge1xuXHRcdFx0XHRmcmFtZXdvcmsuYmluZChwc3dwLnNjcm9sbFdyYXAsICdtb3VzZW92ZXInLCB1aS5vbk1vdXNlT3Zlcik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyB1bmJpbmQgZXZlbnRzIGZvciBVSVxuXHRcdF9saXN0ZW4oJ3VuYmluZEV2ZW50cycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIV9zaGFyZU1vZGFsSGlkZGVuKSB7XG5cdFx0XHRcdF90b2dnbGVTaGFyZU1vZGFsKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKF9pZGxlSW50ZXJ2YWwpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChfaWRsZUludGVydmFsKTtcblx0XHRcdH1cblx0XHRcdGZyYW1ld29yay51bmJpbmQoZG9jdW1lbnQsICdtb3VzZW91dCcsIF9vbk1vdXNlTGVhdmVXaW5kb3cpO1xuXHRcdFx0ZnJhbWV3b3JrLnVuYmluZChkb2N1bWVudCwgJ21vdXNlbW92ZScsIF9vbklkbGVNb3VzZU1vdmUpO1xuXHRcdFx0ZnJhbWV3b3JrLnVuYmluZChfY29udHJvbHMsICdwc3dwVGFwIGNsaWNrJywgX29uQ29udHJvbHNUYXApO1xuXHRcdFx0ZnJhbWV3b3JrLnVuYmluZChwc3dwLnNjcm9sbFdyYXAsICdwc3dwVGFwJywgdWkub25HbG9iYWxUYXApO1xuXHRcdFx0ZnJhbWV3b3JrLnVuYmluZChwc3dwLnNjcm9sbFdyYXAsICdtb3VzZW92ZXInLCB1aS5vbk1vdXNlT3Zlcik7XG5cblx0XHRcdGlmKF9mdWxsc2NyZW5BUEkpIHtcblx0XHRcdFx0ZnJhbWV3b3JrLnVuYmluZChkb2N1bWVudCwgX2Z1bGxzY3JlbkFQSS5ldmVudEssIHVpLnVwZGF0ZUZ1bGxzY3JlZW4pO1xuXHRcdFx0XHRpZihfZnVsbHNjcmVuQVBJLmlzRnVsbHNjcmVlbigpKSB7XG5cdFx0XHRcdFx0X29wdGlvbnMuaGlkZUFuaW1hdGlvbkR1cmF0aW9uID0gMDtcblx0XHRcdFx0XHRfZnVsbHNjcmVuQVBJLmV4aXQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfZnVsbHNjcmVuQVBJID0gbnVsbDtcblx0XHRcdH1cblx0XHR9KTtcblxuXG5cdFx0Ly8gY2xlYW4gdXAgdGhpbmdzIHdoZW4gZ2FsbGVyeSBpcyBkZXN0cm95ZWRcblx0XHRfbGlzdGVuKCdkZXN0cm95JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZihfb3B0aW9ucy5jYXB0aW9uRWwpIHtcblx0XHRcdFx0aWYoX2Zha2VDYXB0aW9uQ29udGFpbmVyKSB7XG5cdFx0XHRcdFx0X2NvbnRyb2xzLnJlbW92ZUNoaWxkKF9mYWtlQ2FwdGlvbkNvbnRhaW5lcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZnJhbWV3b3JrLnJlbW92ZUNsYXNzKF9jYXB0aW9uQ29udGFpbmVyLCAncHN3cF9fY2FwdGlvbi0tZW1wdHknKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoX3NoYXJlTW9kYWwpIHtcblx0XHRcdFx0X3NoYXJlTW9kYWwuY2hpbGRyZW5bMF0ub25jbGljayA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3MoX2NvbnRyb2xzLCAncHN3cF9fdWktLW92ZXItY2xvc2UnKTtcblx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyggX2NvbnRyb2xzLCAncHN3cF9fdWktLWhpZGRlbicpO1xuXHRcdFx0dWkuc2V0SWRsZShmYWxzZSk7XG5cdFx0fSk7XG5cdFx0XG5cblx0XHRpZighX29wdGlvbnMuc2hvd0FuaW1hdGlvbkR1cmF0aW9uKSB7XG5cdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3MoIF9jb250cm9scywgJ3Bzd3BfX3VpLS1oaWRkZW4nKTtcblx0XHR9XG5cdFx0X2xpc3RlbignaW5pdGlhbFpvb21JbicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoX29wdGlvbnMuc2hvd0FuaW1hdGlvbkR1cmF0aW9uKSB7XG5cdFx0XHRcdGZyYW1ld29yay5yZW1vdmVDbGFzcyggX2NvbnRyb2xzLCAncHN3cF9fdWktLWhpZGRlbicpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdF9saXN0ZW4oJ2luaXRpYWxab29tT3V0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRmcmFtZXdvcmsuYWRkQ2xhc3MoIF9jb250cm9scywgJ3Bzd3BfX3VpLS1oaWRkZW4nKTtcblx0XHR9KTtcblxuXHRcdF9saXN0ZW4oJ3BhcnNlVmVydGljYWxNYXJnaW4nLCBfYXBwbHlOYXZCYXJHYXBzKTtcblx0XHRcblx0XHRfc2V0dXBVSUVsZW1lbnRzKCk7XG5cblx0XHRpZihfb3B0aW9ucy5zaGFyZUVsICYmIF9zaGFyZUJ1dHRvbiAmJiBfc2hhcmVNb2RhbCkge1xuXHRcdFx0X3NoYXJlTW9kYWxIaWRkZW4gPSB0cnVlO1xuXHRcdH1cblxuXHRcdF9jb3VudE51bUl0ZW1zKCk7XG5cblx0XHRfc2V0dXBJZGxlKCk7XG5cblx0XHRfc2V0dXBGdWxsc2NyZWVuQVBJKCk7XG5cblx0XHRfc2V0dXBMb2FkaW5nSW5kaWNhdG9yKCk7XG5cdH07XG5cblx0dWkuc2V0SWRsZSA9IGZ1bmN0aW9uKGlzSWRsZSkge1xuXHRcdF9pc0lkbGUgPSBpc0lkbGU7XG5cdFx0X3RvZ2dsZVBzd3BDbGFzcyhfY29udHJvbHMsICd1aS0taWRsZScsIGlzSWRsZSk7XG5cdH07XG5cblx0dWkudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0Ly8gRG9uJ3QgdXBkYXRlIFVJIGlmIGl0J3MgaGlkZGVuXG5cdFx0aWYoX2NvbnRyb2xzVmlzaWJsZSAmJiBwc3dwLmN1cnJJdGVtKSB7XG5cdFx0XHRcblx0XHRcdHVpLnVwZGF0ZUluZGV4SW5kaWNhdG9yKCk7XG5cblx0XHRcdGlmKF9vcHRpb25zLmNhcHRpb25FbCkge1xuXHRcdFx0XHRfb3B0aW9ucy5hZGRDYXB0aW9uSFRNTEZuKHBzd3AuY3Vyckl0ZW0sIF9jYXB0aW9uQ29udGFpbmVyKTtcblxuXHRcdFx0XHRfdG9nZ2xlUHN3cENsYXNzKF9jYXB0aW9uQ29udGFpbmVyLCAnY2FwdGlvbi0tZW1wdHknLCAhcHN3cC5jdXJySXRlbS50aXRsZSk7XG5cdFx0XHR9XG5cblx0XHRcdF9vdmVybGF5VUlVcGRhdGVkID0gdHJ1ZTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRfb3ZlcmxheVVJVXBkYXRlZCA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmKCFfc2hhcmVNb2RhbEhpZGRlbikge1xuXHRcdFx0X3RvZ2dsZVNoYXJlTW9kYWwoKTtcblx0XHR9XG5cblx0XHRfY291bnROdW1JdGVtcygpO1xuXHR9O1xuXG5cdHVpLnVwZGF0ZUZ1bGxzY3JlZW4gPSBmdW5jdGlvbihlKSB7XG5cblx0XHRpZihlKSB7XG5cdFx0XHQvLyBzb21lIGJyb3dzZXJzIGNoYW5nZSB3aW5kb3cgc2Nyb2xsIHBvc2l0aW9uIGR1cmluZyB0aGUgZnVsbHNjcmVlblxuXHRcdFx0Ly8gc28gUGhvdG9Td2lwZSB1cGRhdGVzIGl0IGp1c3QgaW4gY2FzZVxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0cHN3cC5zZXRTY3JvbGxPZmZzZXQoIDAsIGZyYW1ld29yay5nZXRTY3JvbGxZKCkgKTtcblx0XHRcdH0sIDUwKTtcblx0XHR9XG5cdFx0XG5cdFx0Ly8gdG9vZ2xlIHBzd3AtLWZzIGNsYXNzIG9uIHJvb3QgZWxlbWVudFxuXHRcdGZyYW1ld29ya1sgKF9mdWxsc2NyZW5BUEkuaXNGdWxsc2NyZWVuKCkgPyAnYWRkJyA6ICdyZW1vdmUnKSArICdDbGFzcycgXShwc3dwLnRlbXBsYXRlLCAncHN3cC0tZnMnKTtcblx0fTtcblxuXHR1aS51cGRhdGVJbmRleEluZGljYXRvciA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmKF9vcHRpb25zLmNvdW50ZXJFbCkge1xuXHRcdFx0X2luZGV4SW5kaWNhdG9yLmlubmVySFRNTCA9IChwc3dwLmdldEN1cnJlbnRJbmRleCgpKzEpICsgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9vcHRpb25zLmluZGV4SW5kaWNhdG9yU2VwICsgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9vcHRpb25zLmdldE51bUl0ZW1zRm4oKTtcblx0XHR9XG5cdH07XG5cdFxuXHR1aS5vbkdsb2JhbFRhcCA9IGZ1bmN0aW9uKGUpIHtcblx0XHRlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG5cdFx0dmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcblxuXHRcdGlmKF9ibG9ja0NvbnRyb2xzVGFwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoZS5kZXRhaWwgJiYgZS5kZXRhaWwucG9pbnRlclR5cGUgPT09ICdtb3VzZScpIHtcblxuXHRcdFx0Ly8gY2xvc2UgZ2FsbGVyeSBpZiBjbGlja2VkIG91dHNpZGUgb2YgdGhlIGltYWdlXG5cdFx0XHRpZihfaGFzQ2xvc2VDbGFzcyh0YXJnZXQpKSB7XG5cdFx0XHRcdHBzd3AuY2xvc2UoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihmcmFtZXdvcmsuaGFzQ2xhc3ModGFyZ2V0LCAncHN3cF9faW1nJykpIHtcblx0XHRcdFx0aWYocHN3cC5nZXRab29tTGV2ZWwoKSA9PT0gMSAmJiBwc3dwLmdldFpvb21MZXZlbCgpIDw9IHBzd3AuY3Vyckl0ZW0uZml0UmF0aW8pIHtcblx0XHRcdFx0XHRpZihfb3B0aW9ucy5jbGlja1RvQ2xvc2VOb25ab29tYWJsZSkge1xuXHRcdFx0XHRcdFx0cHN3cC5jbG9zZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwc3dwLnRvZ2dsZURlc2t0b3Bab29tKGUuZGV0YWlsLnJlbGVhc2VQb2ludCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIHRhcCBhbnl3aGVyZSAoZXhjZXB0IGJ1dHRvbnMpIHRvIHRvZ2dsZSB2aXNpYmlsaXR5IG9mIGNvbnRyb2xzXG5cdFx0XHRpZihfb3B0aW9ucy50YXBUb1RvZ2dsZUNvbnRyb2xzKSB7XG5cdFx0XHRcdGlmKF9jb250cm9sc1Zpc2libGUpIHtcblx0XHRcdFx0XHR1aS5oaWRlQ29udHJvbHMoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR1aS5zaG93Q29udHJvbHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyB0YXAgdG8gY2xvc2UgZ2FsbGVyeVxuXHRcdFx0aWYoX29wdGlvbnMudGFwVG9DbG9zZSAmJiAoZnJhbWV3b3JrLmhhc0NsYXNzKHRhcmdldCwgJ3Bzd3BfX2ltZycpIHx8IF9oYXNDbG9zZUNsYXNzKHRhcmdldCkpICkge1xuXHRcdFx0XHRwc3dwLmNsb3NlKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblx0fTtcblx0dWkub25Nb3VzZU92ZXIgPSBmdW5jdGlvbihlKSB7XG5cdFx0ZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXHRcdHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cblx0XHQvLyBhZGQgY2xhc3Mgd2hlbiBtb3VzZSBpcyBvdmVyIGFuIGVsZW1lbnQgdGhhdCBzaG91bGQgY2xvc2UgdGhlIGdhbGxlcnlcblx0XHRfdG9nZ2xlUHN3cENsYXNzKF9jb250cm9scywgJ3VpLS1vdmVyLWNsb3NlJywgX2hhc0Nsb3NlQ2xhc3ModGFyZ2V0KSk7XG5cdH07XG5cblx0dWkuaGlkZUNvbnRyb2xzID0gZnVuY3Rpb24oKSB7XG5cdFx0ZnJhbWV3b3JrLmFkZENsYXNzKF9jb250cm9scywncHN3cF9fdWktLWhpZGRlbicpO1xuXHRcdF9jb250cm9sc1Zpc2libGUgPSBmYWxzZTtcblx0fTtcblxuXHR1aS5zaG93Q29udHJvbHMgPSBmdW5jdGlvbigpIHtcblx0XHRfY29udHJvbHNWaXNpYmxlID0gdHJ1ZTtcblx0XHRpZighX292ZXJsYXlVSVVwZGF0ZWQpIHtcblx0XHRcdHVpLnVwZGF0ZSgpO1xuXHRcdH1cblx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3MoX2NvbnRyb2xzLCdwc3dwX191aS0taGlkZGVuJyk7XG5cdH07XG5cblx0dWkuc3VwcG9ydHNGdWxsc2NyZWVuID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGQgPSBkb2N1bWVudDtcblx0XHRyZXR1cm4gISEoZC5leGl0RnVsbHNjcmVlbiB8fCBkLm1vekNhbmNlbEZ1bGxTY3JlZW4gfHwgZC53ZWJraXRFeGl0RnVsbHNjcmVlbiB8fCBkLm1zRXhpdEZ1bGxzY3JlZW4pO1xuXHR9O1xuXG5cdHVpLmdldEZ1bGxzY3JlZW5BUEkgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgZEUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG5cdFx0XHRhcGksXG5cdFx0XHR0RiA9ICdmdWxsc2NyZWVuY2hhbmdlJztcblxuXHRcdGlmIChkRS5yZXF1ZXN0RnVsbHNjcmVlbikge1xuXHRcdFx0YXBpID0ge1xuXHRcdFx0XHRlbnRlcks6ICdyZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0XHRcdGV4aXRLOiAnZXhpdEZ1bGxzY3JlZW4nLFxuXHRcdFx0XHRlbGVtZW50SzogJ2Z1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHRcdFx0ZXZlbnRLOiB0RlxuXHRcdFx0fTtcblxuXHRcdH0gZWxzZSBpZihkRS5tb3pSZXF1ZXN0RnVsbFNjcmVlbiApIHtcblx0XHRcdGFwaSA9IHtcblx0XHRcdFx0ZW50ZXJLOiAnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxuXHRcdFx0XHRleGl0SzogJ21vekNhbmNlbEZ1bGxTY3JlZW4nLFxuXHRcdFx0XHRlbGVtZW50SzogJ21vekZ1bGxTY3JlZW5FbGVtZW50Jyxcblx0XHRcdFx0ZXZlbnRLOiAnbW96JyArIHRGXG5cdFx0XHR9O1xuXG5cdFx0XHRcblxuXHRcdH0gZWxzZSBpZihkRS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuXHRcdFx0YXBpID0ge1xuXHRcdFx0XHRlbnRlcks6ICd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0XHRcdGV4aXRLOiAnd2Via2l0RXhpdEZ1bGxzY3JlZW4nLFxuXHRcdFx0XHRlbGVtZW50SzogJ3dlYmtpdEZ1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHRcdFx0ZXZlbnRLOiAnd2Via2l0JyArIHRGXG5cdFx0XHR9O1xuXG5cdFx0fSBlbHNlIGlmKGRFLm1zUmVxdWVzdEZ1bGxzY3JlZW4pIHtcblx0XHRcdGFwaSA9IHtcblx0XHRcdFx0ZW50ZXJLOiAnbXNSZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0XHRcdGV4aXRLOiAnbXNFeGl0RnVsbHNjcmVlbicsXG5cdFx0XHRcdGVsZW1lbnRLOiAnbXNGdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0XHRcdGV2ZW50SzogJ01TRnVsbHNjcmVlbkNoYW5nZSdcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aWYoYXBpKSB7XG5cdFx0XHRhcGkuZW50ZXIgPSBmdW5jdGlvbigpIHsgXG5cdFx0XHRcdC8vIGRpc2FibGUgY2xvc2Utb24tc2Nyb2xsIGluIGZ1bGxzY3JlZW5cblx0XHRcdFx0X2luaXRhbENsb3NlT25TY3JvbGxWYWx1ZSA9IF9vcHRpb25zLmNsb3NlT25TY3JvbGw7IFxuXHRcdFx0XHRfb3B0aW9ucy5jbG9zZU9uU2Nyb2xsID0gZmFsc2U7IFxuXG5cdFx0XHRcdGlmKHRoaXMuZW50ZXJLID09PSAnd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4nKSB7XG5cdFx0XHRcdFx0cHN3cC50ZW1wbGF0ZVt0aGlzLmVudGVyS10oIEVsZW1lbnQuQUxMT1dfS0VZQk9BUkRfSU5QVVQgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gcHN3cC50ZW1wbGF0ZVt0aGlzLmVudGVyS10oKTsgXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRhcGkuZXhpdCA9IGZ1bmN0aW9uKCkgeyBcblx0XHRcdFx0X29wdGlvbnMuY2xvc2VPblNjcm9sbCA9IF9pbml0YWxDbG9zZU9uU2Nyb2xsVmFsdWU7XG5cblx0XHRcdFx0cmV0dXJuIGRvY3VtZW50W3RoaXMuZXhpdEtdKCk7IFxuXG5cdFx0XHR9O1xuXHRcdFx0YXBpLmlzRnVsbHNjcmVlbiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gZG9jdW1lbnRbdGhpcy5lbGVtZW50S107IH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFwaTtcblx0fTtcblxuXG5cbn07XG5yZXR1cm4gUGhvdG9Td2lwZVVJX0RlZmF1bHQ7XG5cblxufSk7XG4iLCIvKiEgUGhvdG9Td2lwZSAtIHY0LjEuMyAtIDIwMTktMDEtMDhcbiogaHR0cDovL3Bob3Rvc3dpcGUuY29tXG4qIENvcHlyaWdodCAoYykgMjAxOSBEbWl0cnkgU2VtZW5vdjsgKi9cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkgeyBcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmYWN0b3J5KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fSBlbHNlIHtcblx0XHRyb290LlBob3RvU3dpcGUgPSBmYWN0b3J5KCk7XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciBQaG90b1N3aXBlID0gZnVuY3Rpb24odGVtcGxhdGUsIFVpQ2xhc3MsIGl0ZW1zLCBvcHRpb25zKXtcblxuLyo+PmZyYW1ld29yay1icmlkZ2UqL1xuLyoqXG4gKlxuICogU2V0IG9mIGdlbmVyaWMgZnVuY3Rpb25zIHVzZWQgYnkgZ2FsbGVyeS5cbiAqIFxuICogWW91J3JlIGZyZWUgdG8gbW9kaWZ5IGFueXRoaW5nIGhlcmUgYXMgbG9uZyBhcyBmdW5jdGlvbmFsaXR5IGlzIGtlcHQuXG4gKiBcbiAqL1xudmFyIGZyYW1ld29yayA9IHtcblx0ZmVhdHVyZXM6IG51bGwsXG5cdGJpbmQ6IGZ1bmN0aW9uKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHVuYmluZCkge1xuXHRcdHZhciBtZXRob2ROYW1lID0gKHVuYmluZCA/ICdyZW1vdmUnIDogJ2FkZCcpICsgJ0V2ZW50TGlzdGVuZXInO1xuXHRcdHR5cGUgPSB0eXBlLnNwbGl0KCcgJyk7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHR5cGUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKHR5cGVbaV0pIHtcblx0XHRcdFx0dGFyZ2V0W21ldGhvZE5hbWVdKCB0eXBlW2ldLCBsaXN0ZW5lciwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0aXNBcnJheTogZnVuY3Rpb24ob2JqKSB7XG5cdFx0cmV0dXJuIChvYmogaW5zdGFuY2VvZiBBcnJheSk7XG5cdH0sXG5cdGNyZWF0ZUVsOiBmdW5jdGlvbihjbGFzc2VzLCB0YWcpIHtcblx0XHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyB8fCAnZGl2Jyk7XG5cdFx0aWYoY2xhc3Nlcykge1xuXHRcdFx0ZWwuY2xhc3NOYW1lID0gY2xhc3Nlcztcblx0XHR9XG5cdFx0cmV0dXJuIGVsO1xuXHR9LFxuXHRnZXRTY3JvbGxZOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgeU9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblx0XHRyZXR1cm4geU9mZnNldCAhPT0gdW5kZWZpbmVkID8geU9mZnNldCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cdH0sXG5cdHVuYmluZDogZnVuY3Rpb24odGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuXHRcdGZyYW1ld29yay5iaW5kKHRhcmdldCx0eXBlLGxpc3RlbmVyLHRydWUpO1xuXHR9LFxuXHRyZW1vdmVDbGFzczogZnVuY3Rpb24oZWwsIGNsYXNzTmFtZSkge1xuXHRcdHZhciByZWcgPSBuZXcgUmVnRXhwKCcoXFxcXHN8XiknICsgY2xhc3NOYW1lICsgJyhcXFxcc3wkKScpO1xuXHRcdGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKHJlZywgJyAnKS5yZXBsYWNlKC9eXFxzXFxzKi8sICcnKS5yZXBsYWNlKC9cXHNcXHMqJC8sICcnKTsgXG5cdH0sXG5cdGFkZENsYXNzOiBmdW5jdGlvbihlbCwgY2xhc3NOYW1lKSB7XG5cdFx0aWYoICFmcmFtZXdvcmsuaGFzQ2xhc3MoZWwsY2xhc3NOYW1lKSApIHtcblx0XHRcdGVsLmNsYXNzTmFtZSArPSAoZWwuY2xhc3NOYW1lID8gJyAnIDogJycpICsgY2xhc3NOYW1lO1xuXHRcdH1cblx0fSxcblx0aGFzQ2xhc3M6IGZ1bmN0aW9uKGVsLCBjbGFzc05hbWUpIHtcblx0XHRyZXR1cm4gZWwuY2xhc3NOYW1lICYmIG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjbGFzc05hbWUgKyAnKFxcXFxzfCQpJykudGVzdChlbC5jbGFzc05hbWUpO1xuXHR9LFxuXHRnZXRDaGlsZEJ5Q2xhc3M6IGZ1bmN0aW9uKHBhcmVudEVsLCBjaGlsZENsYXNzTmFtZSkge1xuXHRcdHZhciBub2RlID0gcGFyZW50RWwuZmlyc3RDaGlsZDtcblx0XHR3aGlsZShub2RlKSB7XG5cdFx0XHRpZiggZnJhbWV3b3JrLmhhc0NsYXNzKG5vZGUsIGNoaWxkQ2xhc3NOYW1lKSApIHtcblx0XHRcdFx0cmV0dXJuIG5vZGU7XG5cdFx0XHR9XG5cdFx0XHRub2RlID0gbm9kZS5uZXh0U2libGluZztcblx0XHR9XG5cdH0sXG5cdGFycmF5U2VhcmNoOiBmdW5jdGlvbihhcnJheSwgdmFsdWUsIGtleSkge1xuXHRcdHZhciBpID0gYXJyYXkubGVuZ3RoO1xuXHRcdHdoaWxlKGktLSkge1xuXHRcdFx0aWYoYXJyYXlbaV1ba2V5XSA9PT0gdmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9IFxuXHRcdH1cblx0XHRyZXR1cm4gLTE7XG5cdH0sXG5cdGV4dGVuZDogZnVuY3Rpb24obzEsIG8yLCBwcmV2ZW50T3ZlcndyaXRlKSB7XG5cdFx0Zm9yICh2YXIgcHJvcCBpbiBvMikge1xuXHRcdFx0aWYgKG8yLmhhc093blByb3BlcnR5KHByb3ApKSB7XG5cdFx0XHRcdGlmKHByZXZlbnRPdmVyd3JpdGUgJiYgbzEuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRvMVtwcm9wXSA9IG8yW3Byb3BdO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0ZWFzaW5nOiB7XG5cdFx0c2luZToge1xuXHRcdFx0b3V0OiBmdW5jdGlvbihrKSB7XG5cdFx0XHRcdHJldHVybiBNYXRoLnNpbihrICogKE1hdGguUEkgLyAyKSk7XG5cdFx0XHR9LFxuXHRcdFx0aW5PdXQ6IGZ1bmN0aW9uKGspIHtcblx0XHRcdFx0cmV0dXJuIC0gKE1hdGguY29zKE1hdGguUEkgKiBrKSAtIDEpIC8gMjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGN1YmljOiB7XG5cdFx0XHRvdXQ6IGZ1bmN0aW9uKGspIHtcblx0XHRcdFx0cmV0dXJuIC0tayAqIGsgKiBrICsgMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Lypcblx0XHRcdGVsYXN0aWM6IHtcblx0XHRcdFx0b3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdFx0XHR2YXIgcywgYSA9IDAuMSwgcCA9IDAuNDtcblx0XHRcdFx0XHRpZiAoIGsgPT09IDAgKSByZXR1cm4gMDtcblx0XHRcdFx0XHRpZiAoIGsgPT09IDEgKSByZXR1cm4gMTtcblx0XHRcdFx0XHRpZiAoICFhIHx8IGEgPCAxICkgeyBhID0gMTsgcyA9IHAgLyA0OyB9XG5cdFx0XHRcdFx0ZWxzZSBzID0gcCAqIE1hdGguYXNpbiggMSAvIGEgKSAvICggMiAqIE1hdGguUEkgKTtcblx0XHRcdFx0XHRyZXR1cm4gKCBhICogTWF0aC5wb3coIDIsIC0gMTAgKiBrKSAqIE1hdGguc2luKCAoIGsgLSBzICkgKiAoIDIgKiBNYXRoLlBJICkgLyBwICkgKyAxICk7XG5cblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRiYWNrOiB7XG5cdFx0XHRcdG91dDogZnVuY3Rpb24gKCBrICkge1xuXHRcdFx0XHRcdHZhciBzID0gMS43MDE1ODtcblx0XHRcdFx0XHRyZXR1cm4gLS1rICogayAqICggKCBzICsgMSApICogayArIHMgKSArIDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQqL1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBcblx0ICogQHJldHVybiB7b2JqZWN0fVxuXHQgKiBcblx0ICoge1xuXHQgKiAgcmFmIDogcmVxdWVzdCBhbmltYXRpb24gZnJhbWUgZnVuY3Rpb25cblx0ICogIGNhZiA6IGNhbmNlbCBhbmltYXRpb24gZnJhbWUgZnVuY3Rpb25cblx0ICogIHRyYW5zZnJvbSA6IHRyYW5zZm9ybSBwcm9wZXJ0eSBrZXkgKHdpdGggdmVuZG9yKSwgb3IgbnVsbCBpZiBub3Qgc3VwcG9ydGVkXG5cdCAqICBvbGRJRSA6IElFOCBvciBiZWxvd1xuXHQgKiB9XG5cdCAqIFxuXHQgKi9cblx0ZGV0ZWN0RmVhdHVyZXM6IGZ1bmN0aW9uKCkge1xuXHRcdGlmKGZyYW1ld29yay5mZWF0dXJlcykge1xuXHRcdFx0cmV0dXJuIGZyYW1ld29yay5mZWF0dXJlcztcblx0XHR9XG5cdFx0dmFyIGhlbHBlckVsID0gZnJhbWV3b3JrLmNyZWF0ZUVsKCksXG5cdFx0XHRoZWxwZXJTdHlsZSA9IGhlbHBlckVsLnN0eWxlLFxuXHRcdFx0dmVuZG9yID0gJycsXG5cdFx0XHRmZWF0dXJlcyA9IHt9O1xuXG5cdFx0Ly8gSUU4IGFuZCBiZWxvd1xuXHRcdGZlYXR1cmVzLm9sZElFID0gZG9jdW1lbnQuYWxsICYmICFkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyO1xuXG5cdFx0ZmVhdHVyZXMudG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3c7XG5cblx0XHRpZih3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0XHRmZWF0dXJlcy5yYWYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRcdFx0ZmVhdHVyZXMuY2FmID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lO1xuXHRcdH1cblxuXHRcdGZlYXR1cmVzLnBvaW50ZXJFdmVudCA9ICEhKHdpbmRvdy5Qb2ludGVyRXZlbnQpIHx8IG5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkO1xuXG5cdFx0Ly8gZml4IGZhbHNlLXBvc2l0aXZlIGRldGVjdGlvbiBvZiBvbGQgQW5kcm9pZCBpbiBuZXcgSUVcblx0XHQvLyAoSUUxMSB1YSBzdHJpbmcgY29udGFpbnMgXCJBbmRyb2lkIDQuMFwiKVxuXHRcdFxuXHRcdGlmKCFmZWF0dXJlcy5wb2ludGVyRXZlbnQpIHsgXG5cblx0XHRcdHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cblx0XHRcdC8vIERldGVjdCBpZiBkZXZpY2UgaXMgaVBob25lIG9yIGlQb2QgYW5kIGlmIGl0J3Mgb2xkZXIgdGhhbiBpT1MgOFxuXHRcdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTQyMjM5MjBcblx0XHRcdC8vIFxuXHRcdFx0Ly8gVGhpcyBkZXRlY3Rpb24gaXMgbWFkZSBiZWNhdXNlIG9mIGJ1Z2d5IHRvcC9ib3R0b20gdG9vbGJhcnNcblx0XHRcdC8vIHRoYXQgZG9uJ3QgdHJpZ2dlciB3aW5kb3cucmVzaXplIGV2ZW50LlxuXHRcdFx0Ly8gRm9yIG1vcmUgaW5mbyByZWZlciB0byBfaXNGaXhlZFBvc2l0aW9uIHZhcmlhYmxlIGluIGNvcmUuanNcblxuXHRcdFx0aWYgKC9pUChob25lfG9kKS8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pKSB7XG5cdFx0XHRcdHZhciB2ID0gKG5hdmlnYXRvci5hcHBWZXJzaW9uKS5tYXRjaCgvT1MgKFxcZCspXyhcXGQrKV8/KFxcZCspPy8pO1xuXHRcdFx0XHRpZih2ICYmIHYubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHYgPSBwYXJzZUludCh2WzFdLCAxMCk7XG5cdFx0XHRcdFx0aWYodiA+PSAxICYmIHYgPCA4ICkge1xuXHRcdFx0XHRcdFx0ZmVhdHVyZXMuaXNPbGRJT1NQaG9uZSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIERldGVjdCBvbGQgQW5kcm9pZCAoYmVmb3JlIEtpdEthdClcblx0XHRcdC8vIGR1ZSB0byBidWdzIHJlbGF0ZWQgdG8gcG9zaXRpb246Zml4ZWRcblx0XHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzE4NDU3My9waWNrLXVwLXRoZS1hbmRyb2lkLXZlcnNpb24taW4tdGhlLWJyb3dzZXItYnktamF2YXNjcmlwdFxuXHRcdFx0XG5cdFx0XHR2YXIgbWF0Y2ggPSB1YS5tYXRjaCgvQW5kcm9pZFxccyhbMC05XFwuXSopLyk7XG5cdFx0XHR2YXIgYW5kcm9pZHZlcnNpb24gPSAgbWF0Y2ggPyBtYXRjaFsxXSA6IDA7XG5cdFx0XHRhbmRyb2lkdmVyc2lvbiA9IHBhcnNlRmxvYXQoYW5kcm9pZHZlcnNpb24pO1xuXHRcdFx0aWYoYW5kcm9pZHZlcnNpb24gPj0gMSApIHtcblx0XHRcdFx0aWYoYW5kcm9pZHZlcnNpb24gPCA0LjQpIHtcblx0XHRcdFx0XHRmZWF0dXJlcy5pc09sZEFuZHJvaWQgPSB0cnVlOyAvLyBmb3IgZml4ZWQgcG9zaXRpb24gYnVnICYgcGVyZm9ybWFuY2Vcblx0XHRcdFx0fVxuXHRcdFx0XHRmZWF0dXJlcy5hbmRyb2lkVmVyc2lvbiA9IGFuZHJvaWR2ZXJzaW9uOyAvLyBmb3IgdG91Y2hlbmQgYnVnXG5cdFx0XHR9XHRcblx0XHRcdGZlYXR1cmVzLmlzTW9iaWxlT3BlcmEgPSAvb3BlcmEgbWluaXxvcGVyYSBtb2JpL2kudGVzdCh1YSk7XG5cblx0XHRcdC8vIHAucy4geWVzLCB5ZXMsIFVBIHNuaWZmaW5nIGlzIGJhZCwgcHJvcG9zZSB5b3VyIHNvbHV0aW9uIGZvciBhYm92ZSBidWdzLlxuXHRcdH1cblx0XHRcblx0XHR2YXIgc3R5bGVDaGVja3MgPSBbJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZScsICdhbmltYXRpb25OYW1lJ10sXG5cdFx0XHR2ZW5kb3JzID0gWycnLCAnd2Via2l0JywnTW96JywnbXMnLCdPJ10sXG5cdFx0XHRzdHlsZUNoZWNrSXRlbSxcblx0XHRcdHN0eWxlTmFtZTtcblxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdHZlbmRvciA9IHZlbmRvcnNbaV07XG5cblx0XHRcdGZvcih2YXIgYSA9IDA7IGEgPCAzOyBhKyspIHtcblx0XHRcdFx0c3R5bGVDaGVja0l0ZW0gPSBzdHlsZUNoZWNrc1thXTtcblxuXHRcdFx0XHQvLyB1cHBlcmNhc2UgZmlyc3QgbGV0dGVyIG9mIHByb3BlcnR5IG5hbWUsIGlmIHZlbmRvciBpcyBwcmVzZW50XG5cdFx0XHRcdHN0eWxlTmFtZSA9IHZlbmRvciArICh2ZW5kb3IgPyBcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGVDaGVja0l0ZW0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHlsZUNoZWNrSXRlbS5zbGljZSgxKSA6IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZUNoZWNrSXRlbSk7XG5cdFx0XHRcblx0XHRcdFx0aWYoIWZlYXR1cmVzW3N0eWxlQ2hlY2tJdGVtXSAmJiBzdHlsZU5hbWUgaW4gaGVscGVyU3R5bGUgKSB7XG5cdFx0XHRcdFx0ZmVhdHVyZXNbc3R5bGVDaGVja0l0ZW1dID0gc3R5bGVOYW1lO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKHZlbmRvciAmJiAhZmVhdHVyZXMucmFmKSB7XG5cdFx0XHRcdHZlbmRvciA9IHZlbmRvci50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRmZWF0dXJlcy5yYWYgPSB3aW5kb3dbdmVuZG9yKydSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcblx0XHRcdFx0aWYoZmVhdHVyZXMucmFmKSB7XG5cdFx0XHRcdFx0ZmVhdHVyZXMuY2FmID0gd2luZG93W3ZlbmRvcisnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fCBcblx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvd1t2ZW5kb3IrJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFx0XG5cdFx0aWYoIWZlYXR1cmVzLnJhZikge1xuXHRcdFx0dmFyIGxhc3RUaW1lID0gMDtcblx0XHRcdGZlYXR1cmVzLnJhZiA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0XHRcdHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdFx0XHR2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcblx0XHRcdFx0dmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGZuKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7IH0sIHRpbWVUb0NhbGwpO1xuXHRcdFx0XHRsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcblx0XHRcdFx0cmV0dXJuIGlkO1xuXHRcdFx0fTtcblx0XHRcdGZlYXR1cmVzLmNhZiA9IGZ1bmN0aW9uKGlkKSB7IGNsZWFyVGltZW91dChpZCk7IH07XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IFNWRyBzdXBwb3J0XG5cdFx0ZmVhdHVyZXMuc3ZnID0gISFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgJiYgXG5cdFx0XHRcdFx0XHQhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJykuY3JlYXRlU1ZHUmVjdDtcblxuXHRcdGZyYW1ld29yay5mZWF0dXJlcyA9IGZlYXR1cmVzO1xuXG5cdFx0cmV0dXJuIGZlYXR1cmVzO1xuXHR9XG59O1xuXG5mcmFtZXdvcmsuZGV0ZWN0RmVhdHVyZXMoKTtcblxuLy8gT3ZlcnJpZGUgYWRkRXZlbnRMaXN0ZW5lciBmb3Igb2xkIHZlcnNpb25zIG9mIElFXG5pZihmcmFtZXdvcmsuZmVhdHVyZXMub2xkSUUpIHtcblxuXHRmcmFtZXdvcmsuYmluZCA9IGZ1bmN0aW9uKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHVuYmluZCkge1xuXHRcdFxuXHRcdHR5cGUgPSB0eXBlLnNwbGl0KCcgJyk7XG5cblx0XHR2YXIgbWV0aG9kTmFtZSA9ICh1bmJpbmQgPyAnZGV0YWNoJyA6ICdhdHRhY2gnKSArICdFdmVudCcsXG5cdFx0XHRldk5hbWUsXG5cdFx0XHRfaGFuZGxlRXYgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGlzdGVuZXIuaGFuZGxlRXZlbnQuY2FsbChsaXN0ZW5lcik7XG5cdFx0XHR9O1xuXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHR5cGUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGV2TmFtZSA9IHR5cGVbaV07XG5cdFx0XHRpZihldk5hbWUpIHtcblxuXHRcdFx0XHRpZih0eXBlb2YgbGlzdGVuZXIgPT09ICdvYmplY3QnICYmIGxpc3RlbmVyLmhhbmRsZUV2ZW50KSB7XG5cdFx0XHRcdFx0aWYoIXVuYmluZCkge1xuXHRcdFx0XHRcdFx0bGlzdGVuZXJbJ29sZElFJyArIGV2TmFtZV0gPSBfaGFuZGxlRXY7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmKCFsaXN0ZW5lclsnb2xkSUUnICsgZXZOYW1lXSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGFyZ2V0W21ldGhvZE5hbWVdKCAnb24nICsgZXZOYW1lLCBsaXN0ZW5lclsnb2xkSUUnICsgZXZOYW1lXSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGFyZ2V0W21ldGhvZE5hbWVdKCAnb24nICsgZXZOYW1lLCBsaXN0ZW5lcik7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0XG59XG5cbi8qPj5mcmFtZXdvcmstYnJpZGdlKi9cblxuLyo+PmNvcmUqL1xuLy9mdW5jdGlvbih0ZW1wbGF0ZSwgVWlDbGFzcywgaXRlbXMsIG9wdGlvbnMpXG5cbnZhciBzZWxmID0gdGhpcztcblxuLyoqXG4gKiBTdGF0aWMgdmFycywgZG9uJ3QgY2hhbmdlIHVubGVzcyB5b3Uga25vdyB3aGF0IHlvdSdyZSBkb2luZy5cbiAqL1xudmFyIERPVUJMRV9UQVBfUkFESVVTID0gMjUsIFxuXHROVU1fSE9MREVSUyA9IDM7XG5cbi8qKlxuICogT3B0aW9uc1xuICovXG52YXIgX29wdGlvbnMgPSB7XG5cdGFsbG93UGFuVG9OZXh0OnRydWUsXG5cdHNwYWNpbmc6IDAuMTIsXG5cdGJnT3BhY2l0eTogMSxcblx0bW91c2VVc2VkOiBmYWxzZSxcblx0bG9vcDogdHJ1ZSxcblx0cGluY2hUb0Nsb3NlOiB0cnVlLFxuXHRjbG9zZU9uU2Nyb2xsOiB0cnVlLFxuXHRjbG9zZU9uVmVydGljYWxEcmFnOiB0cnVlLFxuXHR2ZXJ0aWNhbERyYWdSYW5nZTogMC43NSxcblx0aGlkZUFuaW1hdGlvbkR1cmF0aW9uOiAzMzMsXG5cdHNob3dBbmltYXRpb25EdXJhdGlvbjogMzMzLFxuXHRzaG93SGlkZU9wYWNpdHk6IGZhbHNlLFxuXHRmb2N1czogdHJ1ZSxcblx0ZXNjS2V5OiB0cnVlLFxuXHRhcnJvd0tleXM6IHRydWUsXG5cdG1haW5TY3JvbGxFbmRGcmljdGlvbjogMC4zNSxcblx0cGFuRW5kRnJpY3Rpb246IDAuMzUsXG5cdGlzQ2xpY2thYmxlRWxlbWVudDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgcmV0dXJuIGVsLnRhZ05hbWUgPT09ICdBJztcbiAgICB9LFxuICAgIGdldERvdWJsZVRhcFpvb206IGZ1bmN0aW9uKGlzTW91c2VDbGljaywgaXRlbSkge1xuICAgIFx0aWYoaXNNb3VzZUNsaWNrKSB7XG4gICAgXHRcdHJldHVybiAxO1xuICAgIFx0fSBlbHNlIHtcbiAgICBcdFx0cmV0dXJuIGl0ZW0uaW5pdGlhbFpvb21MZXZlbCA8IDAuNyA/IDEgOiAxLjMzO1xuICAgIFx0fVxuICAgIH0sXG4gICAgbWF4U3ByZWFkWm9vbTogMS4zMyxcblx0bW9kYWw6IHRydWUsXG5cblx0Ly8gbm90IGZ1bGx5IGltcGxlbWVudGVkIHlldFxuXHRzY2FsZU1vZGU6ICdmaXQnIC8vIFRPRE9cbn07XG5mcmFtZXdvcmsuZXh0ZW5kKF9vcHRpb25zLCBvcHRpb25zKTtcblxuXG4vKipcbiAqIFByaXZhdGUgaGVscGVyIHZhcmlhYmxlcyAmIGZ1bmN0aW9uc1xuICovXG5cbnZhciBfZ2V0RW1wdHlQb2ludCA9IGZ1bmN0aW9uKCkgeyBcblx0XHRyZXR1cm4ge3g6MCx5OjB9OyBcblx0fTtcblxudmFyIF9pc09wZW4sXG5cdF9pc0Rlc3Ryb3lpbmcsXG5cdF9jbG9zZWRCeVNjcm9sbCxcblx0X2N1cnJlbnRJdGVtSW5kZXgsXG5cdF9jb250YWluZXJTdHlsZSxcblx0X2NvbnRhaW5lclNoaWZ0SW5kZXgsXG5cdF9jdXJyUGFuRGlzdCA9IF9nZXRFbXB0eVBvaW50KCksXG5cdF9zdGFydFBhbk9mZnNldCA9IF9nZXRFbXB0eVBvaW50KCksXG5cdF9wYW5PZmZzZXQgPSBfZ2V0RW1wdHlQb2ludCgpLFxuXHRfdXBNb3ZlRXZlbnRzLCAvLyBkcmFnIG1vdmUsIGRyYWcgZW5kICYgZHJhZyBjYW5jZWwgZXZlbnRzIGFycmF5XG5cdF9kb3duRXZlbnRzLCAvLyBkcmFnIHN0YXJ0IGV2ZW50cyBhcnJheVxuXHRfZ2xvYmFsRXZlbnRIYW5kbGVycyxcblx0X3ZpZXdwb3J0U2l6ZSA9IHt9LFxuXHRfY3Vyclpvb21MZXZlbCxcblx0X3N0YXJ0Wm9vbUxldmVsLFxuXHRfdHJhbnNsYXRlUHJlZml4LFxuXHRfdHJhbnNsYXRlU3VmaXgsXG5cdF91cGRhdGVTaXplSW50ZXJ2YWwsXG5cdF9pdGVtc05lZWRVcGRhdGUsXG5cdF9jdXJyUG9zaXRpb25JbmRleCA9IDAsXG5cdF9vZmZzZXQgPSB7fSxcblx0X3NsaWRlU2l6ZSA9IF9nZXRFbXB0eVBvaW50KCksIC8vIHNpemUgb2Ygc2xpZGUgYXJlYSwgaW5jbHVkaW5nIHNwYWNpbmdcblx0X2l0ZW1Ib2xkZXJzLFxuXHRfcHJldkl0ZW1JbmRleCxcblx0X2luZGV4RGlmZiA9IDAsIC8vIGRpZmZlcmVuY2Ugb2YgaW5kZXhlcyBzaW5jZSBsYXN0IGNvbnRlbnQgdXBkYXRlXG5cdF9kcmFnU3RhcnRFdmVudCxcblx0X2RyYWdNb3ZlRXZlbnQsXG5cdF9kcmFnRW5kRXZlbnQsXG5cdF9kcmFnQ2FuY2VsRXZlbnQsXG5cdF90cmFuc2Zvcm1LZXksXG5cdF9wb2ludGVyRXZlbnRFbmFibGVkLFxuXHRfaXNGaXhlZFBvc2l0aW9uID0gdHJ1ZSxcblx0X2xpa2VseVRvdWNoRGV2aWNlLFxuXHRfbW9kdWxlcyA9IFtdLFxuXHRfcmVxdWVzdEFGLFxuXHRfY2FuY2VsQUYsXG5cdF9pbml0YWxDbGFzc05hbWUsXG5cdF9pbml0YWxXaW5kb3dTY3JvbGxZLFxuXHRfb2xkSUUsXG5cdF9jdXJyZW50V2luZG93U2Nyb2xsWSxcblx0X2ZlYXR1cmVzLFxuXHRfd2luZG93VmlzaWJsZVNpemUgPSB7fSxcblx0X3JlbmRlck1heFJlc29sdXRpb24gPSBmYWxzZSxcblx0X29yaWVudGF0aW9uQ2hhbmdlVGltZW91dCxcblxuXG5cdC8vIFJlZ2lzdGVycyBQaG90b1NXaXBlIG1vZHVsZSAoSGlzdG9yeSwgQ29udHJvbGxlciAuLi4pXG5cdF9yZWdpc3Rlck1vZHVsZSA9IGZ1bmN0aW9uKG5hbWUsIG1vZHVsZSkge1xuXHRcdGZyYW1ld29yay5leHRlbmQoc2VsZiwgbW9kdWxlLnB1YmxpY01ldGhvZHMpO1xuXHRcdF9tb2R1bGVzLnB1c2gobmFtZSk7XG5cdH0sXG5cblx0X2dldExvb3BlZElkID0gZnVuY3Rpb24oaW5kZXgpIHtcblx0XHR2YXIgbnVtU2xpZGVzID0gX2dldE51bUl0ZW1zKCk7XG5cdFx0aWYoaW5kZXggPiBudW1TbGlkZXMgLSAxKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXggLSBudW1TbGlkZXM7XG5cdFx0fSBlbHNlICBpZihpbmRleCA8IDApIHtcblx0XHRcdHJldHVybiBudW1TbGlkZXMgKyBpbmRleDtcblx0XHR9XG5cdFx0cmV0dXJuIGluZGV4O1xuXHR9LFxuXHRcblx0Ly8gTWljcm8gYmluZC90cmlnZ2VyXG5cdF9saXN0ZW5lcnMgPSB7fSxcblx0X2xpc3RlbiA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG5cdFx0aWYoIV9saXN0ZW5lcnNbbmFtZV0pIHtcblx0XHRcdF9saXN0ZW5lcnNbbmFtZV0gPSBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIF9saXN0ZW5lcnNbbmFtZV0ucHVzaChmbik7XG5cdH0sXG5cdF9zaG91dCA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0XHR2YXIgbGlzdGVuZXJzID0gX2xpc3RlbmVyc1tuYW1lXTtcblxuXHRcdGlmKGxpc3RlbmVycykge1xuXHRcdFx0dmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdFx0YXJncy5zaGlmdCgpO1xuXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxpc3RlbmVyc1tpXS5hcHBseShzZWxmLCBhcmdzKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0X2dldEN1cnJlbnRUaW1lID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHR9LFxuXHRfYXBwbHlCZ09wYWNpdHkgPSBmdW5jdGlvbihvcGFjaXR5KSB7XG5cdFx0X2JnT3BhY2l0eSA9IG9wYWNpdHk7XG5cdFx0c2VsZi5iZy5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eSAqIF9vcHRpb25zLmJnT3BhY2l0eTtcblx0fSxcblxuXHRfYXBwbHlab29tVHJhbnNmb3JtID0gZnVuY3Rpb24oc3R5bGVPYmoseCx5LHpvb20saXRlbSkge1xuXHRcdGlmKCFfcmVuZGVyTWF4UmVzb2x1dGlvbiB8fCAoaXRlbSAmJiBpdGVtICE9PSBzZWxmLmN1cnJJdGVtKSApIHtcblx0XHRcdHpvb20gPSB6b29tIC8gKGl0ZW0gPyBpdGVtLmZpdFJhdGlvIDogc2VsZi5jdXJySXRlbS5maXRSYXRpbyk7XHRcblx0XHR9XG5cdFx0XHRcblx0XHRzdHlsZU9ialtfdHJhbnNmb3JtS2V5XSA9IF90cmFuc2xhdGVQcmVmaXggKyB4ICsgJ3B4LCAnICsgeSArICdweCcgKyBfdHJhbnNsYXRlU3VmaXggKyAnIHNjYWxlKCcgKyB6b29tICsgJyknO1xuXHR9LFxuXHRfYXBwbHlDdXJyZW50Wm9vbVBhbiA9IGZ1bmN0aW9uKCBhbGxvd1JlbmRlclJlc29sdXRpb24gKSB7XG5cdFx0aWYoX2N1cnJab29tRWxlbWVudFN0eWxlKSB7XG5cblx0XHRcdGlmKGFsbG93UmVuZGVyUmVzb2x1dGlvbikge1xuXHRcdFx0XHRpZihfY3Vyclpvb21MZXZlbCA+IHNlbGYuY3Vyckl0ZW0uZml0UmF0aW8pIHtcblx0XHRcdFx0XHRpZighX3JlbmRlck1heFJlc29sdXRpb24pIHtcblx0XHRcdFx0XHRcdF9zZXRJbWFnZVNpemUoc2VsZi5jdXJySXRlbSwgZmFsc2UsIHRydWUpO1xuXHRcdFx0XHRcdFx0X3JlbmRlck1heFJlc29sdXRpb24gPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZihfcmVuZGVyTWF4UmVzb2x1dGlvbikge1xuXHRcdFx0XHRcdFx0X3NldEltYWdlU2l6ZShzZWxmLmN1cnJJdGVtKTtcblx0XHRcdFx0XHRcdF9yZW5kZXJNYXhSZXNvbHV0aW9uID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblxuXHRcdFx0X2FwcGx5Wm9vbVRyYW5zZm9ybShfY3Vyclpvb21FbGVtZW50U3R5bGUsIF9wYW5PZmZzZXQueCwgX3Bhbk9mZnNldC55LCBfY3Vyclpvb21MZXZlbCk7XG5cdFx0fVxuXHR9LFxuXHRfYXBwbHlab29tUGFuVG9JdGVtID0gZnVuY3Rpb24oaXRlbSkge1xuXHRcdGlmKGl0ZW0uY29udGFpbmVyKSB7XG5cblx0XHRcdF9hcHBseVpvb21UcmFuc2Zvcm0oaXRlbS5jb250YWluZXIuc3R5bGUsIFxuXHRcdFx0XHRcdFx0XHRcdGl0ZW0uaW5pdGlhbFBvc2l0aW9uLngsIFxuXHRcdFx0XHRcdFx0XHRcdGl0ZW0uaW5pdGlhbFBvc2l0aW9uLnksIFxuXHRcdFx0XHRcdFx0XHRcdGl0ZW0uaW5pdGlhbFpvb21MZXZlbCxcblx0XHRcdFx0XHRcdFx0XHRpdGVtKTtcblx0XHR9XG5cdH0sXG5cdF9zZXRUcmFuc2xhdGVYID0gZnVuY3Rpb24oeCwgZWxTdHlsZSkge1xuXHRcdGVsU3R5bGVbX3RyYW5zZm9ybUtleV0gPSBfdHJhbnNsYXRlUHJlZml4ICsgeCArICdweCwgMHB4JyArIF90cmFuc2xhdGVTdWZpeDtcblx0fSxcblx0X21vdmVNYWluU2Nyb2xsID0gZnVuY3Rpb24oeCwgZHJhZ2dpbmcpIHtcblxuXHRcdGlmKCFfb3B0aW9ucy5sb29wICYmIGRyYWdnaW5nKSB7XG5cdFx0XHR2YXIgbmV3U2xpZGVJbmRleE9mZnNldCA9IF9jdXJyZW50SXRlbUluZGV4ICsgKF9zbGlkZVNpemUueCAqIF9jdXJyUG9zaXRpb25JbmRleCAtIHgpIC8gX3NsaWRlU2l6ZS54LFxuXHRcdFx0XHRkZWx0YSA9IE1hdGgucm91bmQoeCAtIF9tYWluU2Nyb2xsUG9zLngpO1xuXG5cdFx0XHRpZiggKG5ld1NsaWRlSW5kZXhPZmZzZXQgPCAwICYmIGRlbHRhID4gMCkgfHwgXG5cdFx0XHRcdChuZXdTbGlkZUluZGV4T2Zmc2V0ID49IF9nZXROdW1JdGVtcygpIC0gMSAmJiBkZWx0YSA8IDApICkge1xuXHRcdFx0XHR4ID0gX21haW5TY3JvbGxQb3MueCArIGRlbHRhICogX29wdGlvbnMubWFpblNjcm9sbEVuZEZyaWN0aW9uO1xuXHRcdFx0fSBcblx0XHR9XG5cdFx0XG5cdFx0X21haW5TY3JvbGxQb3MueCA9IHg7XG5cdFx0X3NldFRyYW5zbGF0ZVgoeCwgX2NvbnRhaW5lclN0eWxlKTtcblx0fSxcblx0X2NhbGN1bGF0ZVBhbk9mZnNldCA9IGZ1bmN0aW9uKGF4aXMsIHpvb21MZXZlbCkge1xuXHRcdHZhciBtID0gX21pZFpvb21Qb2ludFtheGlzXSAtIF9vZmZzZXRbYXhpc107XG5cdFx0cmV0dXJuIF9zdGFydFBhbk9mZnNldFtheGlzXSArIF9jdXJyUGFuRGlzdFtheGlzXSArIG0gLSBtICogKCB6b29tTGV2ZWwgLyBfc3RhcnRab29tTGV2ZWwgKTtcblx0fSxcblx0XG5cdF9lcXVhbGl6ZVBvaW50cyA9IGZ1bmN0aW9uKHAxLCBwMikge1xuXHRcdHAxLnggPSBwMi54O1xuXHRcdHAxLnkgPSBwMi55O1xuXHRcdGlmKHAyLmlkKSB7XG5cdFx0XHRwMS5pZCA9IHAyLmlkO1xuXHRcdH1cblx0fSxcblx0X3JvdW5kUG9pbnQgPSBmdW5jdGlvbihwKSB7XG5cdFx0cC54ID0gTWF0aC5yb3VuZChwLngpO1xuXHRcdHAueSA9IE1hdGgucm91bmQocC55KTtcblx0fSxcblxuXHRfbW91c2VNb3ZlVGltZW91dCA9IG51bGwsXG5cdF9vbkZpcnN0TW91c2VNb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0Ly8gV2FpdCB1bnRpbCBtb3VzZSBtb3ZlIGV2ZW50IGlzIGZpcmVkIGF0IGxlYXN0IHR3aWNlIGR1cmluZyAxMDBtc1xuXHRcdC8vIFdlIGRvIHRoaXMsIGJlY2F1c2Ugc29tZSBtb2JpbGUgYnJvd3NlcnMgdHJpZ2dlciBpdCBvbiB0b3VjaHN0YXJ0XG5cdFx0aWYoX21vdXNlTW92ZVRpbWVvdXQgKSB7IFxuXHRcdFx0ZnJhbWV3b3JrLnVuYmluZChkb2N1bWVudCwgJ21vdXNlbW92ZScsIF9vbkZpcnN0TW91c2VNb3ZlKTtcblx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLWhhc19tb3VzZScpO1xuXHRcdFx0X29wdGlvbnMubW91c2VVc2VkID0gdHJ1ZTtcblx0XHRcdF9zaG91dCgnbW91c2VVc2VkJyk7XG5cdFx0fVxuXHRcdF9tb3VzZU1vdmVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdF9tb3VzZU1vdmVUaW1lb3V0ID0gbnVsbDtcblx0XHR9LCAxMDApO1xuXHR9LFxuXG5cdF9iaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0ZnJhbWV3b3JrLmJpbmQoZG9jdW1lbnQsICdrZXlkb3duJywgc2VsZik7XG5cblx0XHRpZihfZmVhdHVyZXMudHJhbnNmb3JtKSB7XG5cdFx0XHQvLyBkb24ndCBiaW5kIGNsaWNrIGV2ZW50IGluIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0cmFuc2Zvcm0gKG1vc3RseSBJRTgpXG5cdFx0XHRmcmFtZXdvcmsuYmluZChzZWxmLnNjcm9sbFdyYXAsICdjbGljaycsIHNlbGYpO1xuXHRcdH1cblx0XHRcblxuXHRcdGlmKCFfb3B0aW9ucy5tb3VzZVVzZWQpIHtcblx0XHRcdGZyYW1ld29yay5iaW5kKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgX29uRmlyc3RNb3VzZU1vdmUpO1xuXHRcdH1cblxuXHRcdGZyYW1ld29yay5iaW5kKHdpbmRvdywgJ3Jlc2l6ZSBzY3JvbGwgb3JpZW50YXRpb25jaGFuZ2UnLCBzZWxmKTtcblxuXHRcdF9zaG91dCgnYmluZEV2ZW50cycpO1xuXHR9LFxuXG5cdF91bmJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcblx0XHRmcmFtZXdvcmsudW5iaW5kKHdpbmRvdywgJ3Jlc2l6ZSBzY3JvbGwgb3JpZW50YXRpb25jaGFuZ2UnLCBzZWxmKTtcblx0XHRmcmFtZXdvcmsudW5iaW5kKHdpbmRvdywgJ3Njcm9sbCcsIF9nbG9iYWxFdmVudEhhbmRsZXJzLnNjcm9sbCk7XG5cdFx0ZnJhbWV3b3JrLnVuYmluZChkb2N1bWVudCwgJ2tleWRvd24nLCBzZWxmKTtcblx0XHRmcmFtZXdvcmsudW5iaW5kKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgX29uRmlyc3RNb3VzZU1vdmUpO1xuXG5cdFx0aWYoX2ZlYXR1cmVzLnRyYW5zZm9ybSkge1xuXHRcdFx0ZnJhbWV3b3JrLnVuYmluZChzZWxmLnNjcm9sbFdyYXAsICdjbGljaycsIHNlbGYpO1xuXHRcdH1cblxuXHRcdGlmKF9pc0RyYWdnaW5nKSB7XG5cdFx0XHRmcmFtZXdvcmsudW5iaW5kKHdpbmRvdywgX3VwTW92ZUV2ZW50cywgc2VsZik7XG5cdFx0fVxuXG5cdFx0Y2xlYXJUaW1lb3V0KF9vcmllbnRhdGlvbkNoYW5nZVRpbWVvdXQpO1xuXG5cdFx0X3Nob3V0KCd1bmJpbmRFdmVudHMnKTtcblx0fSxcblx0XG5cdF9jYWxjdWxhdGVQYW5Cb3VuZHMgPSBmdW5jdGlvbih6b29tTGV2ZWwsIHVwZGF0ZSkge1xuXHRcdHZhciBib3VuZHMgPSBfY2FsY3VsYXRlSXRlbVNpemUoIHNlbGYuY3Vyckl0ZW0sIF92aWV3cG9ydFNpemUsIHpvb21MZXZlbCApO1xuXHRcdGlmKHVwZGF0ZSkge1xuXHRcdFx0X2N1cnJQYW5Cb3VuZHMgPSBib3VuZHM7XG5cdFx0fVxuXHRcdHJldHVybiBib3VuZHM7XG5cdH0sXG5cdFxuXHRfZ2V0TWluWm9vbUxldmVsID0gZnVuY3Rpb24oaXRlbSkge1xuXHRcdGlmKCFpdGVtKSB7XG5cdFx0XHRpdGVtID0gc2VsZi5jdXJySXRlbTtcblx0XHR9XG5cdFx0cmV0dXJuIGl0ZW0uaW5pdGlhbFpvb21MZXZlbDtcblx0fSxcblx0X2dldE1heFpvb21MZXZlbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRpZighaXRlbSkge1xuXHRcdFx0aXRlbSA9IHNlbGYuY3Vyckl0ZW07XG5cdFx0fVxuXHRcdHJldHVybiBpdGVtLncgPiAwID8gX29wdGlvbnMubWF4U3ByZWFkWm9vbSA6IDE7XG5cdH0sXG5cblx0Ly8gUmV0dXJuIHRydWUgaWYgb2Zmc2V0IGlzIG91dCBvZiB0aGUgYm91bmRzXG5cdF9tb2RpZnlEZXN0UGFuT2Zmc2V0ID0gZnVuY3Rpb24oYXhpcywgZGVzdFBhbkJvdW5kcywgZGVzdFBhbk9mZnNldCwgZGVzdFpvb21MZXZlbCkge1xuXHRcdGlmKGRlc3Rab29tTGV2ZWwgPT09IHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbCkge1xuXHRcdFx0ZGVzdFBhbk9mZnNldFtheGlzXSA9IHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFBvc2l0aW9uW2F4aXNdO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRlc3RQYW5PZmZzZXRbYXhpc10gPSBfY2FsY3VsYXRlUGFuT2Zmc2V0KGF4aXMsIGRlc3Rab29tTGV2ZWwpOyBcblxuXHRcdFx0aWYoZGVzdFBhbk9mZnNldFtheGlzXSA+IGRlc3RQYW5Cb3VuZHMubWluW2F4aXNdKSB7XG5cdFx0XHRcdGRlc3RQYW5PZmZzZXRbYXhpc10gPSBkZXN0UGFuQm91bmRzLm1pbltheGlzXTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9IGVsc2UgaWYoZGVzdFBhbk9mZnNldFtheGlzXSA8IGRlc3RQYW5Cb3VuZHMubWF4W2F4aXNdICkge1xuXHRcdFx0XHRkZXN0UGFuT2Zmc2V0W2F4aXNdID0gZGVzdFBhbkJvdW5kcy5tYXhbYXhpc107XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cblx0X3NldHVwVHJhbnNmb3JtcyA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYoX3RyYW5zZm9ybUtleSkge1xuXHRcdFx0Ly8gc2V0dXAgM2QgdHJhbnNmb3Jtc1xuXHRcdFx0dmFyIGFsbG93M2RUcmFuc2Zvcm0gPSBfZmVhdHVyZXMucGVyc3BlY3RpdmUgJiYgIV9saWtlbHlUb3VjaERldmljZTtcblx0XHRcdF90cmFuc2xhdGVQcmVmaXggPSAndHJhbnNsYXRlJyArIChhbGxvdzNkVHJhbnNmb3JtID8gJzNkKCcgOiAnKCcpO1xuXHRcdFx0X3RyYW5zbGF0ZVN1Zml4ID0gX2ZlYXR1cmVzLnBlcnNwZWN0aXZlID8gJywgMHB4KScgOiAnKSc7XHRcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBPdmVycmlkZSB6b29tL3Bhbi9tb3ZlIGZ1bmN0aW9ucyBpbiBjYXNlIG9sZCBicm93c2VyIGlzIHVzZWQgKG1vc3QgbGlrZWx5IElFKVxuXHRcdC8vIChzbyB0aGV5IHVzZSBsZWZ0L3RvcC93aWR0aC9oZWlnaHQsIGluc3RlYWQgb2YgQ1NTIHRyYW5zZm9ybSlcblx0XG5cdFx0X3RyYW5zZm9ybUtleSA9ICdsZWZ0Jztcblx0XHRmcmFtZXdvcmsuYWRkQ2xhc3ModGVtcGxhdGUsICdwc3dwLS1pZScpO1xuXG5cdFx0X3NldFRyYW5zbGF0ZVggPSBmdW5jdGlvbih4LCBlbFN0eWxlKSB7XG5cdFx0XHRlbFN0eWxlLmxlZnQgPSB4ICsgJ3B4Jztcblx0XHR9O1xuXHRcdF9hcHBseVpvb21QYW5Ub0l0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG5cblx0XHRcdHZhciB6b29tUmF0aW8gPSBpdGVtLmZpdFJhdGlvID4gMSA/IDEgOiBpdGVtLmZpdFJhdGlvLFxuXHRcdFx0XHRzID0gaXRlbS5jb250YWluZXIuc3R5bGUsXG5cdFx0XHRcdHcgPSB6b29tUmF0aW8gKiBpdGVtLncsXG5cdFx0XHRcdGggPSB6b29tUmF0aW8gKiBpdGVtLmg7XG5cblx0XHRcdHMud2lkdGggPSB3ICsgJ3B4Jztcblx0XHRcdHMuaGVpZ2h0ID0gaCArICdweCc7XG5cdFx0XHRzLmxlZnQgPSBpdGVtLmluaXRpYWxQb3NpdGlvbi54ICsgJ3B4Jztcblx0XHRcdHMudG9wID0gaXRlbS5pbml0aWFsUG9zaXRpb24ueSArICdweCc7XG5cblx0XHR9O1xuXHRcdF9hcHBseUN1cnJlbnRab29tUGFuID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZihfY3Vyclpvb21FbGVtZW50U3R5bGUpIHtcblxuXHRcdFx0XHR2YXIgcyA9IF9jdXJyWm9vbUVsZW1lbnRTdHlsZSxcblx0XHRcdFx0XHRpdGVtID0gc2VsZi5jdXJySXRlbSxcblx0XHRcdFx0XHR6b29tUmF0aW8gPSBpdGVtLmZpdFJhdGlvID4gMSA/IDEgOiBpdGVtLmZpdFJhdGlvLFxuXHRcdFx0XHRcdHcgPSB6b29tUmF0aW8gKiBpdGVtLncsXG5cdFx0XHRcdFx0aCA9IHpvb21SYXRpbyAqIGl0ZW0uaDtcblxuXHRcdFx0XHRzLndpZHRoID0gdyArICdweCc7XG5cdFx0XHRcdHMuaGVpZ2h0ID0gaCArICdweCc7XG5cblxuXHRcdFx0XHRzLmxlZnQgPSBfcGFuT2Zmc2V0LnggKyAncHgnO1xuXHRcdFx0XHRzLnRvcCA9IF9wYW5PZmZzZXQueSArICdweCc7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9O1xuXHR9LFxuXG5cdF9vbktleURvd24gPSBmdW5jdGlvbihlKSB7XG5cdFx0dmFyIGtleWRvd25BY3Rpb24gPSAnJztcblx0XHRpZihfb3B0aW9ucy5lc2NLZXkgJiYgZS5rZXlDb2RlID09PSAyNykgeyBcblx0XHRcdGtleWRvd25BY3Rpb24gPSAnY2xvc2UnO1xuXHRcdH0gZWxzZSBpZihfb3B0aW9ucy5hcnJvd0tleXMpIHtcblx0XHRcdGlmKGUua2V5Q29kZSA9PT0gMzcpIHtcblx0XHRcdFx0a2V5ZG93bkFjdGlvbiA9ICdwcmV2Jztcblx0XHRcdH0gZWxzZSBpZihlLmtleUNvZGUgPT09IDM5KSB7IFxuXHRcdFx0XHRrZXlkb3duQWN0aW9uID0gJ25leHQnO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKGtleWRvd25BY3Rpb24pIHtcblx0XHRcdC8vIGRvbid0IGRvIGFueXRoaW5nIGlmIHNwZWNpYWwga2V5IHByZXNzZWQgdG8gcHJldmVudCBmcm9tIG92ZXJyaWRpbmcgZGVmYXVsdCBicm93c2VyIGFjdGlvbnNcblx0XHRcdC8vIGUuZy4gaW4gQ2hyb21lIG9uIE1hYyBjbWQrYXJyb3ctbGVmdCByZXR1cm5zIHRvIHByZXZpb3VzIHBhZ2Vcblx0XHRcdGlmKCAhZS5jdHJsS2V5ICYmICFlLmFsdEtleSAmJiAhZS5zaGlmdEtleSAmJiAhZS5tZXRhS2V5ICkge1xuXHRcdFx0XHRpZihlLnByZXZlbnREZWZhdWx0KSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcblx0XHRcdFx0fSBcblx0XHRcdFx0c2VsZltrZXlkb3duQWN0aW9uXSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRfb25HbG9iYWxDbGljayA9IGZ1bmN0aW9uKGUpIHtcblx0XHRpZighZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGRvbid0IGFsbG93IGNsaWNrIGV2ZW50IHRvIHBhc3MgdGhyb3VnaCB3aGVuIHRyaWdnZXJpbmcgYWZ0ZXIgZHJhZyBvciBzb21lIG90aGVyIGdlc3R1cmVcblx0XHRpZihfbW92ZWQgfHwgX3pvb21TdGFydGVkIHx8IF9tYWluU2Nyb2xsQW5pbWF0aW5nIHx8IF92ZXJ0aWNhbERyYWdJbml0aWF0ZWQpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fVxuXHR9LFxuXG5cdF91cGRhdGVQYWdlU2Nyb2xsT2Zmc2V0ID0gZnVuY3Rpb24oKSB7XG5cdFx0c2VsZi5zZXRTY3JvbGxPZmZzZXQoMCwgZnJhbWV3b3JrLmdldFNjcm9sbFkoKSk7XHRcdFxuXHR9O1xuXHRcblxuXG5cdFxuXG5cblxuLy8gTWljcm8gYW5pbWF0aW9uIGVuZ2luZVxudmFyIF9hbmltYXRpb25zID0ge30sXG5cdF9udW1BbmltYXRpb25zID0gMCxcblx0X3N0b3BBbmltYXRpb24gPSBmdW5jdGlvbihuYW1lKSB7XG5cdFx0aWYoX2FuaW1hdGlvbnNbbmFtZV0pIHtcblx0XHRcdGlmKF9hbmltYXRpb25zW25hbWVdLnJhZikge1xuXHRcdFx0XHRfY2FuY2VsQUYoIF9hbmltYXRpb25zW25hbWVdLnJhZiApO1xuXHRcdFx0fVxuXHRcdFx0X251bUFuaW1hdGlvbnMtLTtcblx0XHRcdGRlbGV0ZSBfYW5pbWF0aW9uc1tuYW1lXTtcblx0XHR9XG5cdH0sXG5cdF9yZWdpc3RlclN0YXJ0QW5pbWF0aW9uID0gZnVuY3Rpb24obmFtZSkge1xuXHRcdGlmKF9hbmltYXRpb25zW25hbWVdKSB7XG5cdFx0XHRfc3RvcEFuaW1hdGlvbihuYW1lKTtcblx0XHR9XG5cdFx0aWYoIV9hbmltYXRpb25zW25hbWVdKSB7XG5cdFx0XHRfbnVtQW5pbWF0aW9ucysrO1xuXHRcdFx0X2FuaW1hdGlvbnNbbmFtZV0gPSB7fTtcblx0XHR9XG5cdH0sXG5cdF9zdG9wQWxsQW5pbWF0aW9ucyA9IGZ1bmN0aW9uKCkge1xuXHRcdGZvciAodmFyIHByb3AgaW4gX2FuaW1hdGlvbnMpIHtcblxuXHRcdFx0aWYoIF9hbmltYXRpb25zLmhhc093blByb3BlcnR5KCBwcm9wICkgKSB7XG5cdFx0XHRcdF9zdG9wQW5pbWF0aW9uKHByb3ApO1xuXHRcdFx0fSBcblx0XHRcdFxuXHRcdH1cblx0fSxcblx0X2FuaW1hdGVQcm9wID0gZnVuY3Rpb24obmFtZSwgYiwgZW5kUHJvcCwgZCwgZWFzaW5nRm4sIG9uVXBkYXRlLCBvbkNvbXBsZXRlKSB7XG5cdFx0dmFyIHN0YXJ0QW5pbVRpbWUgPSBfZ2V0Q3VycmVudFRpbWUoKSwgdDtcblx0XHRfcmVnaXN0ZXJTdGFydEFuaW1hdGlvbihuYW1lKTtcblxuXHRcdHZhciBhbmltbG9vcCA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAoIF9hbmltYXRpb25zW25hbWVdICkge1xuXHRcdFx0XHRcblx0XHRcdFx0dCA9IF9nZXRDdXJyZW50VGltZSgpIC0gc3RhcnRBbmltVGltZTsgLy8gdGltZSBkaWZmXG5cdFx0XHRcdC8vYiAtIGJlZ2lubmluZyAoc3RhcnQgcHJvcClcblx0XHRcdFx0Ly9kIC0gYW5pbSBkdXJhdGlvblxuXG5cdFx0XHRcdGlmICggdCA+PSBkICkge1xuXHRcdFx0XHRcdF9zdG9wQW5pbWF0aW9uKG5hbWUpO1xuXHRcdFx0XHRcdG9uVXBkYXRlKGVuZFByb3ApO1xuXHRcdFx0XHRcdGlmKG9uQ29tcGxldGUpIHtcblx0XHRcdFx0XHRcdG9uQ29tcGxldGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG9uVXBkYXRlKCAoZW5kUHJvcCAtIGIpICogZWFzaW5nRm4odC9kKSArIGIgKTtcblxuXHRcdFx0XHRfYW5pbWF0aW9uc1tuYW1lXS5yYWYgPSBfcmVxdWVzdEFGKGFuaW1sb29wKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGFuaW1sb29wKCk7XG5cdH07XG5cdFxuXG5cbnZhciBwdWJsaWNNZXRob2RzID0ge1xuXG5cdC8vIG1ha2UgYSBmZXcgbG9jYWwgdmFyaWFibGVzIGFuZCBmdW5jdGlvbnMgcHVibGljXG5cdHNob3V0OiBfc2hvdXQsXG5cdGxpc3RlbjogX2xpc3Rlbixcblx0dmlld3BvcnRTaXplOiBfdmlld3BvcnRTaXplLFxuXHRvcHRpb25zOiBfb3B0aW9ucyxcblxuXHRpc01haW5TY3JvbGxBbmltYXRpbmc6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfbWFpblNjcm9sbEFuaW1hdGluZztcblx0fSxcblx0Z2V0Wm9vbUxldmVsOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2N1cnJab29tTGV2ZWw7XG5cdH0sXG5cdGdldEN1cnJlbnRJbmRleDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9jdXJyZW50SXRlbUluZGV4O1xuXHR9LFxuXHRpc0RyYWdnaW5nOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2lzRHJhZ2dpbmc7XG5cdH0sXHRcblx0aXNab29taW5nOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2lzWm9vbWluZztcblx0fSxcblx0c2V0U2Nyb2xsT2Zmc2V0OiBmdW5jdGlvbih4LHkpIHtcblx0XHRfb2Zmc2V0LnggPSB4O1xuXHRcdF9jdXJyZW50V2luZG93U2Nyb2xsWSA9IF9vZmZzZXQueSA9IHk7XG5cdFx0X3Nob3V0KCd1cGRhdGVTY3JvbGxPZmZzZXQnLCBfb2Zmc2V0KTtcblx0fSxcblx0YXBwbHlab29tUGFuOiBmdW5jdGlvbih6b29tTGV2ZWwscGFuWCxwYW5ZLGFsbG93UmVuZGVyUmVzb2x1dGlvbikge1xuXHRcdF9wYW5PZmZzZXQueCA9IHBhblg7XG5cdFx0X3Bhbk9mZnNldC55ID0gcGFuWTtcblx0XHRfY3Vyclpvb21MZXZlbCA9IHpvb21MZXZlbDtcblx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbiggYWxsb3dSZW5kZXJSZXNvbHV0aW9uICk7XG5cdH0sXG5cblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cblx0XHRpZihfaXNPcGVuIHx8IF9pc0Rlc3Ryb3lpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgaTtcblxuXHRcdHNlbGYuZnJhbWV3b3JrID0gZnJhbWV3b3JrOyAvLyBiYXNpYyBmdW5jdGlvbmFsaXR5XG5cdFx0c2VsZi50ZW1wbGF0ZSA9IHRlbXBsYXRlOyAvLyByb290IERPTSBlbGVtZW50IG9mIFBob3RvU3dpcGVcblx0XHRzZWxmLmJnID0gZnJhbWV3b3JrLmdldENoaWxkQnlDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3BfX2JnJyk7XG5cblx0XHRfaW5pdGFsQ2xhc3NOYW1lID0gdGVtcGxhdGUuY2xhc3NOYW1lO1xuXHRcdF9pc09wZW4gPSB0cnVlO1xuXHRcdFx0XHRcblx0XHRfZmVhdHVyZXMgPSBmcmFtZXdvcmsuZGV0ZWN0RmVhdHVyZXMoKTtcblx0XHRfcmVxdWVzdEFGID0gX2ZlYXR1cmVzLnJhZjtcblx0XHRfY2FuY2VsQUYgPSBfZmVhdHVyZXMuY2FmO1xuXHRcdF90cmFuc2Zvcm1LZXkgPSBfZmVhdHVyZXMudHJhbnNmb3JtO1xuXHRcdF9vbGRJRSA9IF9mZWF0dXJlcy5vbGRJRTtcblx0XHRcblx0XHRzZWxmLnNjcm9sbFdyYXAgPSBmcmFtZXdvcmsuZ2V0Q2hpbGRCeUNsYXNzKHRlbXBsYXRlLCAncHN3cF9fc2Nyb2xsLXdyYXAnKTtcblx0XHRzZWxmLmNvbnRhaW5lciA9IGZyYW1ld29yay5nZXRDaGlsZEJ5Q2xhc3Moc2VsZi5zY3JvbGxXcmFwLCAncHN3cF9fY29udGFpbmVyJyk7XG5cblx0XHRfY29udGFpbmVyU3R5bGUgPSBzZWxmLmNvbnRhaW5lci5zdHlsZTsgLy8gZm9yIGZhc3QgYWNjZXNzXG5cblx0XHQvLyBPYmplY3RzIHRoYXQgaG9sZCBzbGlkZXMgKHRoZXJlIGFyZSBvbmx5IDMgaW4gRE9NKVxuXHRcdHNlbGYuaXRlbUhvbGRlcnMgPSBfaXRlbUhvbGRlcnMgPSBbXG5cdFx0XHR7ZWw6c2VsZi5jb250YWluZXIuY2hpbGRyZW5bMF0gLCB3cmFwOjAsIGluZGV4OiAtMX0sXG5cdFx0XHR7ZWw6c2VsZi5jb250YWluZXIuY2hpbGRyZW5bMV0gLCB3cmFwOjAsIGluZGV4OiAtMX0sXG5cdFx0XHR7ZWw6c2VsZi5jb250YWluZXIuY2hpbGRyZW5bMl0gLCB3cmFwOjAsIGluZGV4OiAtMX1cblx0XHRdO1xuXG5cdFx0Ly8gaGlkZSBuZWFyYnkgaXRlbSBob2xkZXJzIHVudGlsIGluaXRpYWwgem9vbSBhbmltYXRpb24gZmluaXNoZXMgKHRvIGF2b2lkIGV4dHJhIFBhaW50cylcblx0XHRfaXRlbUhvbGRlcnNbMF0uZWwuc3R5bGUuZGlzcGxheSA9IF9pdGVtSG9sZGVyc1syXS5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG5cdFx0X3NldHVwVHJhbnNmb3JtcygpO1xuXG5cdFx0Ly8gU2V0dXAgZ2xvYmFsIGV2ZW50c1xuXHRcdF9nbG9iYWxFdmVudEhhbmRsZXJzID0ge1xuXHRcdFx0cmVzaXplOiBzZWxmLnVwZGF0ZVNpemUsXG5cblx0XHRcdC8vIEZpeGVzOiBpT1MgMTAuMyByZXNpemUgZXZlbnRcblx0XHRcdC8vIGRvZXMgbm90IHVwZGF0ZSBzY3JvbGxXcmFwLmNsaWVudFdpZHRoIGluc3RhbnRseSBhZnRlciByZXNpemVcblx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kaW1zZW1lbm92L1Bob3RvU3dpcGUvaXNzdWVzLzEzMTVcblx0XHRcdG9yaWVudGF0aW9uY2hhbmdlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KF9vcmllbnRhdGlvbkNoYW5nZVRpbWVvdXQpO1xuXHRcdFx0XHRfb3JpZW50YXRpb25DaGFuZ2VUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZihfdmlld3BvcnRTaXplLnggIT09IHNlbGYuc2Nyb2xsV3JhcC5jbGllbnRXaWR0aCkge1xuXHRcdFx0XHRcdFx0c2VsZi51cGRhdGVTaXplKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0fSxcblx0XHRcdHNjcm9sbDogX3VwZGF0ZVBhZ2VTY3JvbGxPZmZzZXQsXG5cdFx0XHRrZXlkb3duOiBfb25LZXlEb3duLFxuXHRcdFx0Y2xpY2s6IF9vbkdsb2JhbENsaWNrXG5cdFx0fTtcblxuXHRcdC8vIGRpc2FibGUgc2hvdy9oaWRlIGVmZmVjdHMgb24gb2xkIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBDU1MgYW5pbWF0aW9ucyBvciB0cmFuc2Zvcm1zLCBcblx0XHQvLyBvbGQgSU9TLCBBbmRyb2lkIGFuZCBPcGVyYSBtb2JpbGUuIEJsYWNrYmVycnkgc2VlbXMgdG8gd29yayBmaW5lLCBldmVuIG9sZGVyIG1vZGVscy5cblx0XHR2YXIgb2xkUGhvbmUgPSBfZmVhdHVyZXMuaXNPbGRJT1NQaG9uZSB8fCBfZmVhdHVyZXMuaXNPbGRBbmRyb2lkIHx8IF9mZWF0dXJlcy5pc01vYmlsZU9wZXJhO1xuXHRcdGlmKCFfZmVhdHVyZXMuYW5pbWF0aW9uTmFtZSB8fCAhX2ZlYXR1cmVzLnRyYW5zZm9ybSB8fCBvbGRQaG9uZSkge1xuXHRcdFx0X29wdGlvbnMuc2hvd0FuaW1hdGlvbkR1cmF0aW9uID0gX29wdGlvbnMuaGlkZUFuaW1hdGlvbkR1cmF0aW9uID0gMDtcblx0XHR9XG5cblx0XHQvLyBpbml0IG1vZHVsZXNcblx0XHRmb3IoaSA9IDA7IGkgPCBfbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0c2VsZlsnaW5pdCcgKyBfbW9kdWxlc1tpXV0oKTtcblx0XHR9XG5cdFx0XG5cdFx0Ly8gaW5pdFxuXHRcdGlmKFVpQ2xhc3MpIHtcblx0XHRcdHZhciB1aSA9IHNlbGYudWkgPSBuZXcgVWlDbGFzcyhzZWxmLCBmcmFtZXdvcmspO1xuXHRcdFx0dWkuaW5pdCgpO1xuXHRcdH1cblxuXHRcdF9zaG91dCgnZmlyc3RVcGRhdGUnKTtcblx0XHRfY3VycmVudEl0ZW1JbmRleCA9IF9jdXJyZW50SXRlbUluZGV4IHx8IF9vcHRpb25zLmluZGV4IHx8IDA7XG5cdFx0Ly8gdmFsaWRhdGUgaW5kZXhcblx0XHRpZiggaXNOYU4oX2N1cnJlbnRJdGVtSW5kZXgpIHx8IF9jdXJyZW50SXRlbUluZGV4IDwgMCB8fCBfY3VycmVudEl0ZW1JbmRleCA+PSBfZ2V0TnVtSXRlbXMoKSApIHtcblx0XHRcdF9jdXJyZW50SXRlbUluZGV4ID0gMDtcblx0XHR9XG5cdFx0c2VsZi5jdXJySXRlbSA9IF9nZXRJdGVtQXQoIF9jdXJyZW50SXRlbUluZGV4ICk7XG5cblx0XHRcblx0XHRpZihfZmVhdHVyZXMuaXNPbGRJT1NQaG9uZSB8fCBfZmVhdHVyZXMuaXNPbGRBbmRyb2lkKSB7XG5cdFx0XHRfaXNGaXhlZFBvc2l0aW9uID0gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdHRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblx0XHRpZihfb3B0aW9ucy5tb2RhbCkge1xuXHRcdFx0aWYoIV9pc0ZpeGVkUG9zaXRpb24pIHtcblx0XHRcdFx0dGVtcGxhdGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdFx0XHR0ZW1wbGF0ZS5zdHlsZS50b3AgPSBmcmFtZXdvcmsuZ2V0U2Nyb2xsWSgpICsgJ3B4Jztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRlbXBsYXRlLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZihfY3VycmVudFdpbmRvd1Njcm9sbFkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0X3Nob3V0KCdpbml0aWFsTGF5b3V0Jyk7XG5cdFx0XHRfY3VycmVudFdpbmRvd1Njcm9sbFkgPSBfaW5pdGFsV2luZG93U2Nyb2xsWSA9IGZyYW1ld29yay5nZXRTY3JvbGxZKCk7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIGFkZCBjbGFzc2VzIHRvIHJvb3QgZWxlbWVudCBvZiBQaG90b1N3aXBlXG5cdFx0dmFyIHJvb3RDbGFzc2VzID0gJ3Bzd3AtLW9wZW4gJztcblx0XHRpZihfb3B0aW9ucy5tYWluQ2xhc3MpIHtcblx0XHRcdHJvb3RDbGFzc2VzICs9IF9vcHRpb25zLm1haW5DbGFzcyArICcgJztcblx0XHR9XG5cdFx0aWYoX29wdGlvbnMuc2hvd0hpZGVPcGFjaXR5KSB7XG5cdFx0XHRyb290Q2xhc3NlcyArPSAncHN3cC0tYW5pbWF0ZV9vcGFjaXR5ICc7XG5cdFx0fVxuXHRcdHJvb3RDbGFzc2VzICs9IF9saWtlbHlUb3VjaERldmljZSA/ICdwc3dwLS10b3VjaCcgOiAncHN3cC0tbm90b3VjaCc7XG5cdFx0cm9vdENsYXNzZXMgKz0gX2ZlYXR1cmVzLmFuaW1hdGlvbk5hbWUgPyAnIHBzd3AtLWNzc19hbmltYXRpb24nIDogJyc7XG5cdFx0cm9vdENsYXNzZXMgKz0gX2ZlYXR1cmVzLnN2ZyA/ICcgcHN3cC0tc3ZnJyA6ICcnO1xuXHRcdGZyYW1ld29yay5hZGRDbGFzcyh0ZW1wbGF0ZSwgcm9vdENsYXNzZXMpO1xuXG5cdFx0c2VsZi51cGRhdGVTaXplKCk7XG5cblx0XHQvLyBpbml0aWFsIHVwZGF0ZVxuXHRcdF9jb250YWluZXJTaGlmdEluZGV4ID0gLTE7XG5cdFx0X2luZGV4RGlmZiA9IG51bGw7XG5cdFx0Zm9yKGkgPSAwOyBpIDwgTlVNX0hPTERFUlM7IGkrKykge1xuXHRcdFx0X3NldFRyYW5zbGF0ZVgoIChpK19jb250YWluZXJTaGlmdEluZGV4KSAqIF9zbGlkZVNpemUueCwgX2l0ZW1Ib2xkZXJzW2ldLmVsLnN0eWxlKTtcblx0XHR9XG5cblx0XHRpZighX29sZElFKSB7XG5cdFx0XHRmcmFtZXdvcmsuYmluZChzZWxmLnNjcm9sbFdyYXAsIF9kb3duRXZlbnRzLCBzZWxmKTsgLy8gbm8gZHJhZ2dpbmcgZm9yIG9sZCBJRVxuXHRcdH1cdFxuXG5cdFx0X2xpc3RlbignaW5pdGlhbFpvb21JbkVuZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0c2VsZi5zZXRDb250ZW50KF9pdGVtSG9sZGVyc1swXSwgX2N1cnJlbnRJdGVtSW5kZXgtMSk7XG5cdFx0XHRzZWxmLnNldENvbnRlbnQoX2l0ZW1Ib2xkZXJzWzJdLCBfY3VycmVudEl0ZW1JbmRleCsxKTtcblxuXHRcdFx0X2l0ZW1Ib2xkZXJzWzBdLmVsLnN0eWxlLmRpc3BsYXkgPSBfaXRlbUhvbGRlcnNbMl0uZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cblx0XHRcdGlmKF9vcHRpb25zLmZvY3VzKSB7XG5cdFx0XHRcdC8vIGZvY3VzIGNhdXNlcyBsYXlvdXQsIFxuXHRcdFx0XHQvLyB3aGljaCBjYXVzZXMgbGFnIGR1cmluZyB0aGUgYW5pbWF0aW9uLCBcblx0XHRcdFx0Ly8gdGhhdCdzIHdoeSB3ZSBkZWxheSBpdCB1bnRpbGwgdGhlIGluaXRpYWwgem9vbSB0cmFuc2l0aW9uIGVuZHNcblx0XHRcdFx0dGVtcGxhdGUuZm9jdXMoKTtcblx0XHRcdH1cblx0XHRcdCBcblxuXHRcdFx0X2JpbmRFdmVudHMoKTtcblx0XHR9KTtcblxuXHRcdC8vIHNldCBjb250ZW50IGZvciBjZW50ZXIgc2xpZGUgKGZpcnN0IHRpbWUpXG5cdFx0c2VsZi5zZXRDb250ZW50KF9pdGVtSG9sZGVyc1sxXSwgX2N1cnJlbnRJdGVtSW5kZXgpO1xuXHRcdFxuXHRcdHNlbGYudXBkYXRlQ3Vyckl0ZW0oKTtcblxuXHRcdF9zaG91dCgnYWZ0ZXJJbml0Jyk7XG5cblx0XHRpZighX2lzRml4ZWRQb3NpdGlvbikge1xuXG5cdFx0XHQvLyBPbiBhbGwgdmVyc2lvbnMgb2YgaU9TIGxvd2VyIHRoYW4gOC4wLCB3ZSBjaGVjayBzaXplIG9mIHZpZXdwb3J0IGV2ZXJ5IHNlY29uZC5cblx0XHRcdC8vIFxuXHRcdFx0Ly8gVGhpcyBpcyBkb25lIHRvIGRldGVjdCB3aGVuIFNhZmFyaSB0b3AgJiBib3R0b20gYmFycyBhcHBlYXIsIFxuXHRcdFx0Ly8gYXMgdGhpcyBhY3Rpb24gZG9lc24ndCB0cmlnZ2VyIGFueSBldmVudHMgKGxpa2UgcmVzaXplKS4gXG5cdFx0XHQvLyBcblx0XHRcdC8vIE9uIGlPUzggdGhleSBmaXhlZCB0aGlzLlxuXHRcdFx0Ly8gXG5cdFx0XHQvLyAxMCBOb3YgMjAxNDogaU9TIDcgdXNhZ2UgfjQwJS4gaU9TIDggdXNhZ2UgNTYlLlxuXHRcdFx0XG5cdFx0XHRfdXBkYXRlU2l6ZUludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKCFfbnVtQW5pbWF0aW9ucyAmJiAhX2lzRHJhZ2dpbmcgJiYgIV9pc1pvb21pbmcgJiYgKF9jdXJyWm9vbUxldmVsID09PSBzZWxmLmN1cnJJdGVtLmluaXRpYWxab29tTGV2ZWwpICApIHtcblx0XHRcdFx0XHRzZWxmLnVwZGF0ZVNpemUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgMTAwMCk7XG5cdFx0fVxuXG5cdFx0ZnJhbWV3b3JrLmFkZENsYXNzKHRlbXBsYXRlLCAncHN3cC0tdmlzaWJsZScpO1xuXHR9LFxuXG5cdC8vIENsb3NlIHRoZSBnYWxsZXJ5LCB0aGVuIGRlc3Ryb3kgaXRcblx0Y2xvc2U6IGZ1bmN0aW9uKCkge1xuXHRcdGlmKCFfaXNPcGVuKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0X2lzT3BlbiA9IGZhbHNlO1xuXHRcdF9pc0Rlc3Ryb3lpbmcgPSB0cnVlO1xuXHRcdF9zaG91dCgnY2xvc2UnKTtcblx0XHRfdW5iaW5kRXZlbnRzKCk7XG5cblx0XHRfc2hvd09ySGlkZShzZWxmLmN1cnJJdGVtLCBudWxsLCB0cnVlLCBzZWxmLmRlc3Ryb3kpO1xuXHR9LFxuXG5cdC8vIGRlc3Ryb3lzIHRoZSBnYWxsZXJ5ICh1bmJpbmRzIGV2ZW50cywgY2xlYW5zIHVwIGludGVydmFscyBhbmQgdGltZW91dHMgdG8gYXZvaWQgbWVtb3J5IGxlYWtzKVxuXHRkZXN0cm95OiBmdW5jdGlvbigpIHtcblx0XHRfc2hvdXQoJ2Rlc3Ryb3knKTtcblxuXHRcdGlmKF9zaG93T3JIaWRlVGltZW91dCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KF9zaG93T3JIaWRlVGltZW91dCk7XG5cdFx0fVxuXHRcdFxuXHRcdHRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXHRcdHRlbXBsYXRlLmNsYXNzTmFtZSA9IF9pbml0YWxDbGFzc05hbWU7XG5cblx0XHRpZihfdXBkYXRlU2l6ZUludGVydmFsKSB7XG5cdFx0XHRjbGVhckludGVydmFsKF91cGRhdGVTaXplSW50ZXJ2YWwpO1xuXHRcdH1cblxuXHRcdGZyYW1ld29yay51bmJpbmQoc2VsZi5zY3JvbGxXcmFwLCBfZG93bkV2ZW50cywgc2VsZik7XG5cblx0XHQvLyB3ZSB1bmJpbmQgc2Nyb2xsIGV2ZW50IGF0IHRoZSBlbmQsIGFzIGNsb3NpbmcgYW5pbWF0aW9uIG1heSBkZXBlbmQgb24gaXRcblx0XHRmcmFtZXdvcmsudW5iaW5kKHdpbmRvdywgJ3Njcm9sbCcsIHNlbGYpO1xuXG5cdFx0X3N0b3BEcmFnVXBkYXRlTG9vcCgpO1xuXG5cdFx0X3N0b3BBbGxBbmltYXRpb25zKCk7XG5cblx0XHRfbGlzdGVuZXJzID0gbnVsbDtcblx0fSxcblxuXHQvKipcblx0ICogUGFuIGltYWdlIHRvIHBvc2l0aW9uXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB4ICAgICBcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHkgICAgIFxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IGZvcmNlIFdpbGwgaWdub3JlIGJvdW5kcyBpZiBzZXQgdG8gdHJ1ZS5cblx0ICovXG5cdHBhblRvOiBmdW5jdGlvbih4LHksZm9yY2UpIHtcblx0XHRpZighZm9yY2UpIHtcblx0XHRcdGlmKHggPiBfY3VyclBhbkJvdW5kcy5taW4ueCkge1xuXHRcdFx0XHR4ID0gX2N1cnJQYW5Cb3VuZHMubWluLng7XG5cdFx0XHR9IGVsc2UgaWYoeCA8IF9jdXJyUGFuQm91bmRzLm1heC54KSB7XG5cdFx0XHRcdHggPSBfY3VyclBhbkJvdW5kcy5tYXgueDtcblx0XHRcdH1cblxuXHRcdFx0aWYoeSA+IF9jdXJyUGFuQm91bmRzLm1pbi55KSB7XG5cdFx0XHRcdHkgPSBfY3VyclBhbkJvdW5kcy5taW4ueTtcblx0XHRcdH0gZWxzZSBpZih5IDwgX2N1cnJQYW5Cb3VuZHMubWF4LnkpIHtcblx0XHRcdFx0eSA9IF9jdXJyUGFuQm91bmRzLm1heC55O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRfcGFuT2Zmc2V0LnggPSB4O1xuXHRcdF9wYW5PZmZzZXQueSA9IHk7XG5cdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblx0fSxcblx0XG5cdGhhbmRsZUV2ZW50OiBmdW5jdGlvbiAoZSkge1xuXHRcdGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcblx0XHRpZihfZ2xvYmFsRXZlbnRIYW5kbGVyc1tlLnR5cGVdKSB7XG5cdFx0XHRfZ2xvYmFsRXZlbnRIYW5kbGVyc1tlLnR5cGVdKGUpO1xuXHRcdH1cblx0fSxcblxuXG5cdGdvVG86IGZ1bmN0aW9uKGluZGV4KSB7XG5cblx0XHRpbmRleCA9IF9nZXRMb29wZWRJZChpbmRleCk7XG5cblx0XHR2YXIgZGlmZiA9IGluZGV4IC0gX2N1cnJlbnRJdGVtSW5kZXg7XG5cdFx0X2luZGV4RGlmZiA9IGRpZmY7XG5cblx0XHRfY3VycmVudEl0ZW1JbmRleCA9IGluZGV4O1xuXHRcdHNlbGYuY3Vyckl0ZW0gPSBfZ2V0SXRlbUF0KCBfY3VycmVudEl0ZW1JbmRleCApO1xuXHRcdF9jdXJyUG9zaXRpb25JbmRleCAtPSBkaWZmO1xuXHRcdFxuXHRcdF9tb3ZlTWFpblNjcm9sbChfc2xpZGVTaXplLnggKiBfY3VyclBvc2l0aW9uSW5kZXgpO1xuXHRcdFxuXG5cdFx0X3N0b3BBbGxBbmltYXRpb25zKCk7XG5cdFx0X21haW5TY3JvbGxBbmltYXRpbmcgPSBmYWxzZTtcblxuXHRcdHNlbGYudXBkYXRlQ3Vyckl0ZW0oKTtcblx0fSxcblx0bmV4dDogZnVuY3Rpb24oKSB7XG5cdFx0c2VsZi5nb1RvKCBfY3VycmVudEl0ZW1JbmRleCArIDEpO1xuXHR9LFxuXHRwcmV2OiBmdW5jdGlvbigpIHtcblx0XHRzZWxmLmdvVG8oIF9jdXJyZW50SXRlbUluZGV4IC0gMSk7XG5cdH0sXG5cblx0Ly8gdXBkYXRlIGN1cnJlbnQgem9vbS9wYW4gb2JqZWN0c1xuXHR1cGRhdGVDdXJyWm9vbUl0ZW06IGZ1bmN0aW9uKGVtdWxhdGVTZXRDb250ZW50KSB7XG5cdFx0aWYoZW11bGF0ZVNldENvbnRlbnQpIHtcblx0XHRcdF9zaG91dCgnYmVmb3JlQ2hhbmdlJywgMCk7XG5cdFx0fVxuXG5cdFx0Ly8gaXRlbUhvbGRlclsxXSBpcyBtaWRkbGUgKGN1cnJlbnQpIGl0ZW1cblx0XHRpZihfaXRlbUhvbGRlcnNbMV0uZWwuY2hpbGRyZW4ubGVuZ3RoKSB7XG5cdFx0XHR2YXIgem9vbUVsZW1lbnQgPSBfaXRlbUhvbGRlcnNbMV0uZWwuY2hpbGRyZW5bMF07XG5cdFx0XHRpZiggZnJhbWV3b3JrLmhhc0NsYXNzKHpvb21FbGVtZW50LCAncHN3cF9fem9vbS13cmFwJykgKSB7XG5cdFx0XHRcdF9jdXJyWm9vbUVsZW1lbnRTdHlsZSA9IHpvb21FbGVtZW50LnN0eWxlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X2N1cnJab29tRWxlbWVudFN0eWxlID0gbnVsbDtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0X2N1cnJab29tRWxlbWVudFN0eWxlID0gbnVsbDtcblx0XHR9XG5cdFx0XG5cdFx0X2N1cnJQYW5Cb3VuZHMgPSBzZWxmLmN1cnJJdGVtLmJvdW5kcztcdFxuXHRcdF9zdGFydFpvb21MZXZlbCA9IF9jdXJyWm9vbUxldmVsID0gc2VsZi5jdXJySXRlbS5pbml0aWFsWm9vbUxldmVsO1xuXG5cdFx0X3Bhbk9mZnNldC54ID0gX2N1cnJQYW5Cb3VuZHMuY2VudGVyLng7XG5cdFx0X3Bhbk9mZnNldC55ID0gX2N1cnJQYW5Cb3VuZHMuY2VudGVyLnk7XG5cblx0XHRpZihlbXVsYXRlU2V0Q29udGVudCkge1xuXHRcdFx0X3Nob3V0KCdhZnRlckNoYW5nZScpO1xuXHRcdH1cblx0fSxcblxuXG5cdGludmFsaWRhdGVDdXJySXRlbXM6IGZ1bmN0aW9uKCkge1xuXHRcdF9pdGVtc05lZWRVcGRhdGUgPSB0cnVlO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBOVU1fSE9MREVSUzsgaSsrKSB7XG5cdFx0XHRpZiggX2l0ZW1Ib2xkZXJzW2ldLml0ZW0gKSB7XG5cdFx0XHRcdF9pdGVtSG9sZGVyc1tpXS5pdGVtLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0dXBkYXRlQ3Vyckl0ZW06IGZ1bmN0aW9uKGJlZm9yZUFuaW1hdGlvbikge1xuXG5cdFx0aWYoX2luZGV4RGlmZiA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBkaWZmQWJzID0gTWF0aC5hYnMoX2luZGV4RGlmZiksXG5cdFx0XHR0ZW1wSG9sZGVyO1xuXG5cdFx0aWYoYmVmb3JlQW5pbWF0aW9uICYmIGRpZmZBYnMgPCAyKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cblx0XHRzZWxmLmN1cnJJdGVtID0gX2dldEl0ZW1BdCggX2N1cnJlbnRJdGVtSW5kZXggKTtcblx0XHRfcmVuZGVyTWF4UmVzb2x1dGlvbiA9IGZhbHNlO1xuXHRcdFxuXHRcdF9zaG91dCgnYmVmb3JlQ2hhbmdlJywgX2luZGV4RGlmZik7XG5cblx0XHRpZihkaWZmQWJzID49IE5VTV9IT0xERVJTKSB7XG5cdFx0XHRfY29udGFpbmVyU2hpZnRJbmRleCArPSBfaW5kZXhEaWZmICsgKF9pbmRleERpZmYgPiAwID8gLU5VTV9IT0xERVJTIDogTlVNX0hPTERFUlMpO1xuXHRcdFx0ZGlmZkFicyA9IE5VTV9IT0xERVJTO1xuXHRcdH1cblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGlmZkFiczsgaSsrKSB7XG5cdFx0XHRpZihfaW5kZXhEaWZmID4gMCkge1xuXHRcdFx0XHR0ZW1wSG9sZGVyID0gX2l0ZW1Ib2xkZXJzLnNoaWZ0KCk7XG5cdFx0XHRcdF9pdGVtSG9sZGVyc1tOVU1fSE9MREVSUy0xXSA9IHRlbXBIb2xkZXI7IC8vIG1vdmUgZmlyc3QgdG8gbGFzdFxuXG5cdFx0XHRcdF9jb250YWluZXJTaGlmdEluZGV4Kys7XG5cdFx0XHRcdF9zZXRUcmFuc2xhdGVYKCAoX2NvbnRhaW5lclNoaWZ0SW5kZXgrMikgKiBfc2xpZGVTaXplLngsIHRlbXBIb2xkZXIuZWwuc3R5bGUpO1xuXHRcdFx0XHRzZWxmLnNldENvbnRlbnQodGVtcEhvbGRlciwgX2N1cnJlbnRJdGVtSW5kZXggLSBkaWZmQWJzICsgaSArIDEgKyAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRlbXBIb2xkZXIgPSBfaXRlbUhvbGRlcnMucG9wKCk7XG5cdFx0XHRcdF9pdGVtSG9sZGVycy51bnNoaWZ0KCB0ZW1wSG9sZGVyICk7IC8vIG1vdmUgbGFzdCB0byBmaXJzdFxuXG5cdFx0XHRcdF9jb250YWluZXJTaGlmdEluZGV4LS07XG5cdFx0XHRcdF9zZXRUcmFuc2xhdGVYKCBfY29udGFpbmVyU2hpZnRJbmRleCAqIF9zbGlkZVNpemUueCwgdGVtcEhvbGRlci5lbC5zdHlsZSk7XG5cdFx0XHRcdHNlbGYuc2V0Q29udGVudCh0ZW1wSG9sZGVyLCBfY3VycmVudEl0ZW1JbmRleCArIGRpZmZBYnMgLSBpIC0gMSAtIDEpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fVxuXG5cdFx0Ly8gcmVzZXQgem9vbS9wYW4gb24gcHJldmlvdXMgaXRlbVxuXHRcdGlmKF9jdXJyWm9vbUVsZW1lbnRTdHlsZSAmJiBNYXRoLmFicyhfaW5kZXhEaWZmKSA9PT0gMSkge1xuXG5cdFx0XHR2YXIgcHJldkl0ZW0gPSBfZ2V0SXRlbUF0KF9wcmV2SXRlbUluZGV4KTtcblx0XHRcdGlmKHByZXZJdGVtLmluaXRpYWxab29tTGV2ZWwgIT09IF9jdXJyWm9vbUxldmVsKSB7XG5cdFx0XHRcdF9jYWxjdWxhdGVJdGVtU2l6ZShwcmV2SXRlbSAsIF92aWV3cG9ydFNpemUgKTtcblx0XHRcdFx0X3NldEltYWdlU2l6ZShwcmV2SXRlbSk7XG5cdFx0XHRcdF9hcHBseVpvb21QYW5Ub0l0ZW0oIHByZXZJdGVtICk7IFx0XHRcdFx0XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHQvLyByZXNldCBkaWZmIGFmdGVyIHVwZGF0ZVxuXHRcdF9pbmRleERpZmYgPSAwO1xuXG5cdFx0c2VsZi51cGRhdGVDdXJyWm9vbUl0ZW0oKTtcblxuXHRcdF9wcmV2SXRlbUluZGV4ID0gX2N1cnJlbnRJdGVtSW5kZXg7XG5cblx0XHRfc2hvdXQoJ2FmdGVyQ2hhbmdlJyk7XG5cdFx0XG5cdH0sXG5cblxuXG5cdHVwZGF0ZVNpemU6IGZ1bmN0aW9uKGZvcmNlKSB7XG5cdFx0XG5cdFx0aWYoIV9pc0ZpeGVkUG9zaXRpb24gJiYgX29wdGlvbnMubW9kYWwpIHtcblx0XHRcdHZhciB3aW5kb3dTY3JvbGxZID0gZnJhbWV3b3JrLmdldFNjcm9sbFkoKTtcblx0XHRcdGlmKF9jdXJyZW50V2luZG93U2Nyb2xsWSAhPT0gd2luZG93U2Nyb2xsWSkge1xuXHRcdFx0XHR0ZW1wbGF0ZS5zdHlsZS50b3AgPSB3aW5kb3dTY3JvbGxZICsgJ3B4Jztcblx0XHRcdFx0X2N1cnJlbnRXaW5kb3dTY3JvbGxZID0gd2luZG93U2Nyb2xsWTtcblx0XHRcdH1cblx0XHRcdGlmKCFmb3JjZSAmJiBfd2luZG93VmlzaWJsZVNpemUueCA9PT0gd2luZG93LmlubmVyV2lkdGggJiYgX3dpbmRvd1Zpc2libGVTaXplLnkgPT09IHdpbmRvdy5pbm5lckhlaWdodCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRfd2luZG93VmlzaWJsZVNpemUueCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdFx0X3dpbmRvd1Zpc2libGVTaXplLnkgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cblx0XHRcdC8vdGVtcGxhdGUuc3R5bGUud2lkdGggPSBfd2luZG93VmlzaWJsZVNpemUueCArICdweCc7XG5cdFx0XHR0ZW1wbGF0ZS5zdHlsZS5oZWlnaHQgPSBfd2luZG93VmlzaWJsZVNpemUueSArICdweCc7XG5cdFx0fVxuXG5cblxuXHRcdF92aWV3cG9ydFNpemUueCA9IHNlbGYuc2Nyb2xsV3JhcC5jbGllbnRXaWR0aDtcblx0XHRfdmlld3BvcnRTaXplLnkgPSBzZWxmLnNjcm9sbFdyYXAuY2xpZW50SGVpZ2h0O1xuXG5cdFx0X3VwZGF0ZVBhZ2VTY3JvbGxPZmZzZXQoKTtcblxuXHRcdF9zbGlkZVNpemUueCA9IF92aWV3cG9ydFNpemUueCArIE1hdGgucm91bmQoX3ZpZXdwb3J0U2l6ZS54ICogX29wdGlvbnMuc3BhY2luZyk7XG5cdFx0X3NsaWRlU2l6ZS55ID0gX3ZpZXdwb3J0U2l6ZS55O1xuXG5cdFx0X21vdmVNYWluU2Nyb2xsKF9zbGlkZVNpemUueCAqIF9jdXJyUG9zaXRpb25JbmRleCk7XG5cblx0XHRfc2hvdXQoJ2JlZm9yZVJlc2l6ZScpOyAvLyBldmVuIG1heSBiZSB1c2VkIGZvciBleGFtcGxlIHRvIHN3aXRjaCBpbWFnZSBzb3VyY2VzXG5cblxuXHRcdC8vIGRvbid0IHJlLWNhbGN1bGF0ZSBzaXplIG9uIGluaXRhbCBzaXplIHVwZGF0ZVxuXHRcdGlmKF9jb250YWluZXJTaGlmdEluZGV4ICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0dmFyIGhvbGRlcixcblx0XHRcdFx0aXRlbSxcblx0XHRcdFx0aEluZGV4O1xuXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgTlVNX0hPTERFUlM7IGkrKykge1xuXHRcdFx0XHRob2xkZXIgPSBfaXRlbUhvbGRlcnNbaV07XG5cdFx0XHRcdF9zZXRUcmFuc2xhdGVYKCAoaStfY29udGFpbmVyU2hpZnRJbmRleCkgKiBfc2xpZGVTaXplLngsIGhvbGRlci5lbC5zdHlsZSk7XG5cblx0XHRcdFx0aEluZGV4ID0gX2N1cnJlbnRJdGVtSW5kZXgraS0xO1xuXG5cdFx0XHRcdGlmKF9vcHRpb25zLmxvb3AgJiYgX2dldE51bUl0ZW1zKCkgPiAyKSB7XG5cdFx0XHRcdFx0aEluZGV4ID0gX2dldExvb3BlZElkKGhJbmRleCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyB1cGRhdGUgem9vbSBsZXZlbCBvbiBpdGVtcyBhbmQgcmVmcmVzaCBzb3VyY2UgKGlmIG5lZWRzVXBkYXRlKVxuXHRcdFx0XHRpdGVtID0gX2dldEl0ZW1BdCggaEluZGV4ICk7XG5cblx0XHRcdFx0Ly8gcmUtcmVuZGVyIGdhbGxlcnkgaXRlbSBpZiBgbmVlZHNVcGRhdGVgLFxuXHRcdFx0XHQvLyBvciBkb2Vzbid0IGhhdmUgYGJvdW5kc2AgKGVudGlyZWx5IG5ldyBzbGlkZSBvYmplY3QpXG5cdFx0XHRcdGlmKCBpdGVtICYmIChfaXRlbXNOZWVkVXBkYXRlIHx8IGl0ZW0ubmVlZHNVcGRhdGUgfHwgIWl0ZW0uYm91bmRzKSApIHtcblxuXHRcdFx0XHRcdHNlbGYuY2xlYW5TbGlkZSggaXRlbSApO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHNlbGYuc2V0Q29udGVudCggaG9sZGVyLCBoSW5kZXggKTtcblxuXHRcdFx0XHRcdC8vIGlmIFwiY2VudGVyXCIgc2xpZGVcblx0XHRcdFx0XHRpZihpID09PSAxKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmN1cnJJdGVtID0gaXRlbTtcblx0XHRcdFx0XHRcdHNlbGYudXBkYXRlQ3Vyclpvb21JdGVtKHRydWUpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGl0ZW0ubmVlZHNVcGRhdGUgPSBmYWxzZTtcblxuXHRcdFx0XHR9IGVsc2UgaWYoaG9sZGVyLmluZGV4ID09PSAtMSAmJiBoSW5kZXggPj0gMCkge1xuXHRcdFx0XHRcdC8vIGFkZCBjb250ZW50IGZpcnN0IHRpbWVcblx0XHRcdFx0XHRzZWxmLnNldENvbnRlbnQoIGhvbGRlciwgaEluZGV4ICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoaXRlbSAmJiBpdGVtLmNvbnRhaW5lcikge1xuXHRcdFx0XHRcdF9jYWxjdWxhdGVJdGVtU2l6ZShpdGVtLCBfdmlld3BvcnRTaXplKTtcblx0XHRcdFx0XHRfc2V0SW1hZ2VTaXplKGl0ZW0pO1xuXHRcdFx0XHRcdF9hcHBseVpvb21QYW5Ub0l0ZW0oIGl0ZW0gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdF9pdGVtc05lZWRVcGRhdGUgPSBmYWxzZTtcblx0XHR9XHRcblxuXHRcdF9zdGFydFpvb21MZXZlbCA9IF9jdXJyWm9vbUxldmVsID0gc2VsZi5jdXJySXRlbS5pbml0aWFsWm9vbUxldmVsO1xuXHRcdF9jdXJyUGFuQm91bmRzID0gc2VsZi5jdXJySXRlbS5ib3VuZHM7XG5cblx0XHRpZihfY3VyclBhbkJvdW5kcykge1xuXHRcdFx0X3Bhbk9mZnNldC54ID0gX2N1cnJQYW5Cb3VuZHMuY2VudGVyLng7XG5cdFx0XHRfcGFuT2Zmc2V0LnkgPSBfY3VyclBhbkJvdW5kcy5jZW50ZXIueTtcblx0XHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCB0cnVlICk7XG5cdFx0fVxuXHRcdFxuXHRcdF9zaG91dCgncmVzaXplJyk7XG5cdH0sXG5cdFxuXHQvLyBab29tIGN1cnJlbnQgaXRlbSB0b1xuXHR6b29tVG86IGZ1bmN0aW9uKGRlc3Rab29tTGV2ZWwsIGNlbnRlclBvaW50LCBzcGVlZCwgZWFzaW5nRm4sIHVwZGF0ZUZuKSB7XG5cdFx0Lypcblx0XHRcdGlmKGRlc3Rab29tTGV2ZWwgPT09ICdmaXQnKSB7XG5cdFx0XHRcdGRlc3Rab29tTGV2ZWwgPSBzZWxmLmN1cnJJdGVtLmZpdFJhdGlvO1xuXHRcdFx0fSBlbHNlIGlmKGRlc3Rab29tTGV2ZWwgPT09ICdmaWxsJykge1xuXHRcdFx0XHRkZXN0Wm9vbUxldmVsID0gc2VsZi5jdXJySXRlbS5maWxsUmF0aW87XG5cdFx0XHR9XG5cdFx0Ki9cblxuXHRcdGlmKGNlbnRlclBvaW50KSB7XG5cdFx0XHRfc3RhcnRab29tTGV2ZWwgPSBfY3Vyclpvb21MZXZlbDtcblx0XHRcdF9taWRab29tUG9pbnQueCA9IE1hdGguYWJzKGNlbnRlclBvaW50LngpIC0gX3Bhbk9mZnNldC54IDtcblx0XHRcdF9taWRab29tUG9pbnQueSA9IE1hdGguYWJzKGNlbnRlclBvaW50LnkpIC0gX3Bhbk9mZnNldC55IDtcblx0XHRcdF9lcXVhbGl6ZVBvaW50cyhfc3RhcnRQYW5PZmZzZXQsIF9wYW5PZmZzZXQpO1xuXHRcdH1cblxuXHRcdHZhciBkZXN0UGFuQm91bmRzID0gX2NhbGN1bGF0ZVBhbkJvdW5kcyhkZXN0Wm9vbUxldmVsLCBmYWxzZSksXG5cdFx0XHRkZXN0UGFuT2Zmc2V0ID0ge307XG5cblx0XHRfbW9kaWZ5RGVzdFBhbk9mZnNldCgneCcsIGRlc3RQYW5Cb3VuZHMsIGRlc3RQYW5PZmZzZXQsIGRlc3Rab29tTGV2ZWwpO1xuXHRcdF9tb2RpZnlEZXN0UGFuT2Zmc2V0KCd5JywgZGVzdFBhbkJvdW5kcywgZGVzdFBhbk9mZnNldCwgZGVzdFpvb21MZXZlbCk7XG5cblx0XHR2YXIgaW5pdGlhbFpvb21MZXZlbCA9IF9jdXJyWm9vbUxldmVsO1xuXHRcdHZhciBpbml0aWFsUGFuT2Zmc2V0ID0ge1xuXHRcdFx0eDogX3Bhbk9mZnNldC54LFxuXHRcdFx0eTogX3Bhbk9mZnNldC55XG5cdFx0fTtcblxuXHRcdF9yb3VuZFBvaW50KGRlc3RQYW5PZmZzZXQpO1xuXG5cdFx0dmFyIG9uVXBkYXRlID0gZnVuY3Rpb24obm93KSB7XG5cdFx0XHRpZihub3cgPT09IDEpIHtcblx0XHRcdFx0X2N1cnJab29tTGV2ZWwgPSBkZXN0Wm9vbUxldmVsO1xuXHRcdFx0XHRfcGFuT2Zmc2V0LnggPSBkZXN0UGFuT2Zmc2V0Lng7XG5cdFx0XHRcdF9wYW5PZmZzZXQueSA9IGRlc3RQYW5PZmZzZXQueTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9jdXJyWm9vbUxldmVsID0gKGRlc3Rab29tTGV2ZWwgLSBpbml0aWFsWm9vbUxldmVsKSAqIG5vdyArIGluaXRpYWxab29tTGV2ZWw7XG5cdFx0XHRcdF9wYW5PZmZzZXQueCA9IChkZXN0UGFuT2Zmc2V0LnggLSBpbml0aWFsUGFuT2Zmc2V0LngpICogbm93ICsgaW5pdGlhbFBhbk9mZnNldC54O1xuXHRcdFx0XHRfcGFuT2Zmc2V0LnkgPSAoZGVzdFBhbk9mZnNldC55IC0gaW5pdGlhbFBhbk9mZnNldC55KSAqIG5vdyArIGluaXRpYWxQYW5PZmZzZXQueTtcblx0XHRcdH1cblxuXHRcdFx0aWYodXBkYXRlRm4pIHtcblx0XHRcdFx0dXBkYXRlRm4obm93KTtcblx0XHRcdH1cblxuXHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oIG5vdyA9PT0gMSApO1xuXHRcdH07XG5cblx0XHRpZihzcGVlZCkge1xuXHRcdFx0X2FuaW1hdGVQcm9wKCdjdXN0b21ab29tVG8nLCAwLCAxLCBzcGVlZCwgZWFzaW5nRm4gfHwgZnJhbWV3b3JrLmVhc2luZy5zaW5lLmluT3V0LCBvblVwZGF0ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9uVXBkYXRlKDEpO1xuXHRcdH1cblx0fVxuXG5cbn07XG5cblxuLyo+PmNvcmUqL1xuXG4vKj4+Z2VzdHVyZXMqL1xuLyoqXG4gKiBNb3VzZS90b3VjaC9wb2ludGVyIGV2ZW50IGhhbmRsZXJzLlxuICogXG4gKiBzZXBhcmF0ZWQgZnJvbSBAY29yZS5qcyBmb3IgcmVhZGFiaWxpdHlcbiAqL1xuXG52YXIgTUlOX1NXSVBFX0RJU1RBTkNFID0gMzAsXG5cdERJUkVDVElPTl9DSEVDS19PRkZTRVQgPSAxMDsgLy8gYW1vdW50IG9mIHBpeGVscyB0byBkcmFnIHRvIGRldGVybWluZSBkaXJlY3Rpb24gb2Ygc3dpcGVcblxudmFyIF9nZXN0dXJlU3RhcnRUaW1lLFxuXHRfZ2VzdHVyZUNoZWNrU3BlZWRUaW1lLFxuXG5cdC8vIHBvb2wgb2Ygb2JqZWN0cyB0aGF0IGFyZSB1c2VkIGR1cmluZyBkcmFnZ2luZyBvZiB6b29taW5nXG5cdHAgPSB7fSwgLy8gZmlyc3QgcG9pbnRcblx0cDIgPSB7fSwgLy8gc2Vjb25kIHBvaW50IChmb3Igem9vbSBnZXN0dXJlKVxuXHRkZWx0YSA9IHt9LFxuXHRfY3VyclBvaW50ID0ge30sXG5cdF9zdGFydFBvaW50ID0ge30sXG5cdF9jdXJyUG9pbnRlcnMgPSBbXSxcblx0X3N0YXJ0TWFpblNjcm9sbFBvcyA9IHt9LFxuXHRfcmVsZWFzZUFuaW1EYXRhLFxuXHRfcG9zUG9pbnRzID0gW10sIC8vIGFycmF5IG9mIHBvaW50cyBkdXJpbmcgZHJhZ2dpbmcsIHVzZWQgdG8gZGV0ZXJtaW5lIHR5cGUgb2YgZ2VzdHVyZVxuXHRfdGVtcFBvaW50ID0ge30sXG5cblx0X2lzWm9vbWluZ0luLFxuXHRfdmVydGljYWxEcmFnSW5pdGlhdGVkLFxuXHRfb2xkQW5kcm9pZFRvdWNoRW5kVGltZW91dCxcblx0X2N1cnJab29tZWRJdGVtSW5kZXggPSAwLFxuXHRfY2VudGVyUG9pbnQgPSBfZ2V0RW1wdHlQb2ludCgpLFxuXHRfbGFzdFJlbGVhc2VUaW1lID0gMCxcblx0X2lzRHJhZ2dpbmcsIC8vIGF0IGxlYXN0IG9uZSBwb2ludGVyIGlzIGRvd25cblx0X2lzTXVsdGl0b3VjaCwgLy8gYXQgbGVhc3QgdHdvIF9wb2ludGVycyBhcmUgZG93blxuXHRfem9vbVN0YXJ0ZWQsIC8vIHpvb20gbGV2ZWwgY2hhbmdlZCBkdXJpbmcgem9vbSBnZXN0dXJlXG5cdF9tb3ZlZCxcblx0X2RyYWdBbmltRnJhbWUsXG5cdF9tYWluU2Nyb2xsU2hpZnRlZCxcblx0X2N1cnJlbnRQb2ludHMsIC8vIGFycmF5IG9mIGN1cnJlbnQgdG91Y2ggcG9pbnRzXG5cdF9pc1pvb21pbmcsXG5cdF9jdXJyUG9pbnRzRGlzdGFuY2UsXG5cdF9zdGFydFBvaW50c0Rpc3RhbmNlLFxuXHRfY3VyclBhbkJvdW5kcyxcblx0X21haW5TY3JvbGxQb3MgPSBfZ2V0RW1wdHlQb2ludCgpLFxuXHRfY3Vyclpvb21FbGVtZW50U3R5bGUsXG5cdF9tYWluU2Nyb2xsQW5pbWF0aW5nLCAvLyB0cnVlLCBpZiBhbmltYXRpb24gYWZ0ZXIgc3dpcGUgZ2VzdHVyZSBpcyBydW5uaW5nXG5cdF9taWRab29tUG9pbnQgPSBfZ2V0RW1wdHlQb2ludCgpLFxuXHRfY3VyckNlbnRlclBvaW50ID0gX2dldEVtcHR5UG9pbnQoKSxcblx0X2RpcmVjdGlvbixcblx0X2lzRmlyc3RNb3ZlLFxuXHRfb3BhY2l0eUNoYW5nZWQsXG5cdF9iZ09wYWNpdHksXG5cdF93YXNPdmVySW5pdGlhbFpvb20sXG5cblx0X2lzRXF1YWxQb2ludHMgPSBmdW5jdGlvbihwMSwgcDIpIHtcblx0XHRyZXR1cm4gcDEueCA9PT0gcDIueCAmJiBwMS55ID09PSBwMi55O1xuXHR9LFxuXHRfaXNOZWFyYnlQb2ludHMgPSBmdW5jdGlvbih0b3VjaDAsIHRvdWNoMSkge1xuXHRcdHJldHVybiBNYXRoLmFicyh0b3VjaDAueCAtIHRvdWNoMS54KSA8IERPVUJMRV9UQVBfUkFESVVTICYmIE1hdGguYWJzKHRvdWNoMC55IC0gdG91Y2gxLnkpIDwgRE9VQkxFX1RBUF9SQURJVVM7XG5cdH0sXG5cdF9jYWxjdWxhdGVQb2ludHNEaXN0YW5jZSA9IGZ1bmN0aW9uKHAxLCBwMikge1xuXHRcdF90ZW1wUG9pbnQueCA9IE1hdGguYWJzKCBwMS54IC0gcDIueCApO1xuXHRcdF90ZW1wUG9pbnQueSA9IE1hdGguYWJzKCBwMS55IC0gcDIueSApO1xuXHRcdHJldHVybiBNYXRoLnNxcnQoX3RlbXBQb2ludC54ICogX3RlbXBQb2ludC54ICsgX3RlbXBQb2ludC55ICogX3RlbXBQb2ludC55KTtcblx0fSxcblx0X3N0b3BEcmFnVXBkYXRlTG9vcCA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmKF9kcmFnQW5pbUZyYW1lKSB7XG5cdFx0XHRfY2FuY2VsQUYoX2RyYWdBbmltRnJhbWUpO1xuXHRcdFx0X2RyYWdBbmltRnJhbWUgPSBudWxsO1xuXHRcdH1cblx0fSxcblx0X2RyYWdVcGRhdGVMb29wID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoX2lzRHJhZ2dpbmcpIHtcblx0XHRcdF9kcmFnQW5pbUZyYW1lID0gX3JlcXVlc3RBRihfZHJhZ1VwZGF0ZUxvb3ApO1xuXHRcdFx0X3JlbmRlck1vdmVtZW50KCk7XG5cdFx0fVxuXHR9LFxuXHRfY2FuUGFuID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICEoX29wdGlvbnMuc2NhbGVNb2RlID09PSAnZml0JyAmJiBfY3Vyclpvb21MZXZlbCA9PT0gIHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbCk7XG5cdH0sXG5cdFxuXHQvLyBmaW5kIHRoZSBjbG9zZXN0IHBhcmVudCBET00gZWxlbWVudFxuXHRfY2xvc2VzdEVsZW1lbnQgPSBmdW5jdGlvbihlbCwgZm4pIHtcblx0ICBcdGlmKCFlbCB8fCBlbCA9PT0gZG9jdW1lbnQpIHtcblx0ICBcdFx0cmV0dXJuIGZhbHNlO1xuXHQgIFx0fVxuXG5cdCAgXHQvLyBkb24ndCBzZWFyY2ggZWxlbWVudHMgYWJvdmUgcHN3cF9fc2Nyb2xsLXdyYXBcblx0ICBcdGlmKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSAmJiBlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuaW5kZXhPZigncHN3cF9fc2Nyb2xsLXdyYXAnKSA+IC0xICkge1xuXHQgIFx0XHRyZXR1cm4gZmFsc2U7XG5cdCAgXHR9XG5cblx0ICBcdGlmKCBmbihlbCkgKSB7XG5cdCAgXHRcdHJldHVybiBlbDtcblx0ICBcdH1cblxuXHQgIFx0cmV0dXJuIF9jbG9zZXN0RWxlbWVudChlbC5wYXJlbnROb2RlLCBmbik7XG5cdH0sXG5cblx0X3ByZXZlbnRPYmogPSB7fSxcblx0X3ByZXZlbnREZWZhdWx0RXZlbnRCZWhhdmlvdXIgPSBmdW5jdGlvbihlLCBpc0Rvd24pIHtcblx0ICAgIF9wcmV2ZW50T2JqLnByZXZlbnQgPSAhX2Nsb3Nlc3RFbGVtZW50KGUudGFyZ2V0LCBfb3B0aW9ucy5pc0NsaWNrYWJsZUVsZW1lbnQpO1xuXG5cdFx0X3Nob3V0KCdwcmV2ZW50RHJhZ0V2ZW50JywgZSwgaXNEb3duLCBfcHJldmVudE9iaik7XG5cdFx0cmV0dXJuIF9wcmV2ZW50T2JqLnByZXZlbnQ7XG5cblx0fSxcblx0X2NvbnZlcnRUb3VjaFRvUG9pbnQgPSBmdW5jdGlvbih0b3VjaCwgcCkge1xuXHRcdHAueCA9IHRvdWNoLnBhZ2VYO1xuXHRcdHAueSA9IHRvdWNoLnBhZ2VZO1xuXHRcdHAuaWQgPSB0b3VjaC5pZGVudGlmaWVyO1xuXHRcdHJldHVybiBwO1xuXHR9LFxuXHRfZmluZENlbnRlck9mUG9pbnRzID0gZnVuY3Rpb24ocDEsIHAyLCBwQ2VudGVyKSB7XG5cdFx0cENlbnRlci54ID0gKHAxLnggKyBwMi54KSAqIDAuNTtcblx0XHRwQ2VudGVyLnkgPSAocDEueSArIHAyLnkpICogMC41O1xuXHR9LFxuXHRfcHVzaFBvc1BvaW50ID0gZnVuY3Rpb24odGltZSwgeCwgeSkge1xuXHRcdGlmKHRpbWUgLSBfZ2VzdHVyZUNoZWNrU3BlZWRUaW1lID4gNTApIHtcblx0XHRcdHZhciBvID0gX3Bvc1BvaW50cy5sZW5ndGggPiAyID8gX3Bvc1BvaW50cy5zaGlmdCgpIDoge307XG5cdFx0XHRvLnggPSB4O1xuXHRcdFx0by55ID0geTsgXG5cdFx0XHRfcG9zUG9pbnRzLnB1c2gobyk7XG5cdFx0XHRfZ2VzdHVyZUNoZWNrU3BlZWRUaW1lID0gdGltZTtcblx0XHR9XG5cdH0sXG5cblx0X2NhbGN1bGF0ZVZlcnRpY2FsRHJhZ09wYWNpdHlSYXRpbyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB5T2Zmc2V0ID0gX3Bhbk9mZnNldC55IC0gc2VsZi5jdXJySXRlbS5pbml0aWFsUG9zaXRpb24ueTsgLy8gZGlmZmVyZW5jZSBiZXR3ZWVuIGluaXRpYWwgYW5kIGN1cnJlbnQgcG9zaXRpb25cblx0XHRyZXR1cm4gMSAtICBNYXRoLmFicyggeU9mZnNldCAvIChfdmlld3BvcnRTaXplLnkgLyAyKSAgKTtcblx0fSxcblxuXHRcblx0Ly8gcG9pbnRzIHBvb2wsIHJldXNlZCBkdXJpbmcgdG91Y2ggZXZlbnRzXG5cdF9lUG9pbnQxID0ge30sXG5cdF9lUG9pbnQyID0ge30sXG5cdF90ZW1wUG9pbnRzQXJyID0gW10sXG5cdF90ZW1wQ291bnRlcixcblx0X2dldFRvdWNoUG9pbnRzID0gZnVuY3Rpb24oZSkge1xuXHRcdC8vIGNsZWFuIHVwIHByZXZpb3VzIHBvaW50cywgd2l0aG91dCByZWNyZWF0aW5nIGFycmF5XG5cdFx0d2hpbGUoX3RlbXBQb2ludHNBcnIubGVuZ3RoID4gMCkge1xuXHRcdFx0X3RlbXBQb2ludHNBcnIucG9wKCk7XG5cdFx0fVxuXG5cdFx0aWYoIV9wb2ludGVyRXZlbnRFbmFibGVkKSB7XG5cdFx0XHRpZihlLnR5cGUuaW5kZXhPZigndG91Y2gnKSA+IC0xKSB7XG5cblx0XHRcdFx0aWYoZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0X3RlbXBQb2ludHNBcnJbMF0gPSBfY29udmVydFRvdWNoVG9Qb2ludChlLnRvdWNoZXNbMF0sIF9lUG9pbnQxKTtcblx0XHRcdFx0XHRpZihlLnRvdWNoZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0X3RlbXBQb2ludHNBcnJbMV0gPSBfY29udmVydFRvdWNoVG9Qb2ludChlLnRvdWNoZXNbMV0sIF9lUG9pbnQyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfZVBvaW50MS54ID0gZS5wYWdlWDtcblx0XHRcdFx0X2VQb2ludDEueSA9IGUucGFnZVk7XG5cdFx0XHRcdF9lUG9pbnQxLmlkID0gJyc7XG5cdFx0XHRcdF90ZW1wUG9pbnRzQXJyWzBdID0gX2VQb2ludDE7Ly9fZVBvaW50MTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0X3RlbXBDb3VudGVyID0gMDtcblx0XHRcdC8vIHdlIGNhbiB1c2UgZm9yRWFjaCwgYXMgcG9pbnRlciBldmVudHMgYXJlIHN1cHBvcnRlZCBvbmx5IGluIG1vZGVybiBicm93c2Vyc1xuXHRcdFx0X2N1cnJQb2ludGVycy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0aWYoX3RlbXBDb3VudGVyID09PSAwKSB7XG5cdFx0XHRcdFx0X3RlbXBQb2ludHNBcnJbMF0gPSBwO1xuXHRcdFx0XHR9IGVsc2UgaWYoX3RlbXBDb3VudGVyID09PSAxKSB7XG5cdFx0XHRcdFx0X3RlbXBQb2ludHNBcnJbMV0gPSBwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF90ZW1wQ291bnRlcisrO1xuXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuIF90ZW1wUG9pbnRzQXJyO1xuXHR9LFxuXG5cdF9wYW5Pck1vdmVNYWluU2Nyb2xsID0gZnVuY3Rpb24oYXhpcywgZGVsdGEpIHtcblxuXHRcdHZhciBwYW5GcmljdGlvbixcblx0XHRcdG92ZXJEaWZmID0gMCxcblx0XHRcdG5ld09mZnNldCA9IF9wYW5PZmZzZXRbYXhpc10gKyBkZWx0YVtheGlzXSxcblx0XHRcdHN0YXJ0T3ZlckRpZmYsXG5cdFx0XHRkaXIgPSBkZWx0YVtheGlzXSA+IDAsXG5cdFx0XHRuZXdNYWluU2Nyb2xsUG9zaXRpb24gPSBfbWFpblNjcm9sbFBvcy54ICsgZGVsdGEueCxcblx0XHRcdG1haW5TY3JvbGxEaWZmID0gX21haW5TY3JvbGxQb3MueCAtIF9zdGFydE1haW5TY3JvbGxQb3MueCxcblx0XHRcdG5ld1BhblBvcyxcblx0XHRcdG5ld01haW5TY3JvbGxQb3M7XG5cblx0XHQvLyBjYWxjdWxhdGUgZmRpc3RhbmNlIG92ZXIgdGhlIGJvdW5kcyBhbmQgZnJpY3Rpb25cblx0XHRpZihuZXdPZmZzZXQgPiBfY3VyclBhbkJvdW5kcy5taW5bYXhpc10gfHwgbmV3T2Zmc2V0IDwgX2N1cnJQYW5Cb3VuZHMubWF4W2F4aXNdKSB7XG5cdFx0XHRwYW5GcmljdGlvbiA9IF9vcHRpb25zLnBhbkVuZEZyaWN0aW9uO1xuXHRcdFx0Ly8gTGluZWFyIGluY3JlYXNpbmcgb2YgZnJpY3Rpb24sIHNvIGF0IDEvNCBvZiB2aWV3cG9ydCBpdCdzIGF0IG1heCB2YWx1ZS4gXG5cdFx0XHQvLyBMb29rcyBub3QgYXMgbmljZSBhcyB3YXMgZXhwZWN0ZWQuIExlZnQgZm9yIGhpc3RvcnkuXG5cdFx0XHQvLyBwYW5GcmljdGlvbiA9ICgxIC0gKF9wYW5PZmZzZXRbYXhpc10gKyBkZWx0YVtheGlzXSArIHBhbkJvdW5kcy5taW5bYXhpc10pIC8gKF92aWV3cG9ydFNpemVbYXhpc10gLyA0KSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwYW5GcmljdGlvbiA9IDE7XG5cdFx0fVxuXHRcdFxuXHRcdG5ld09mZnNldCA9IF9wYW5PZmZzZXRbYXhpc10gKyBkZWx0YVtheGlzXSAqIHBhbkZyaWN0aW9uO1xuXG5cdFx0Ly8gbW92ZSBtYWluIHNjcm9sbCBvciBzdGFydCBwYW5uaW5nXG5cdFx0aWYoX29wdGlvbnMuYWxsb3dQYW5Ub05leHQgfHwgX2N1cnJab29tTGV2ZWwgPT09IHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbCkge1xuXG5cblx0XHRcdGlmKCFfY3Vyclpvb21FbGVtZW50U3R5bGUpIHtcblx0XHRcdFx0XG5cdFx0XHRcdG5ld01haW5TY3JvbGxQb3MgPSBuZXdNYWluU2Nyb2xsUG9zaXRpb247XG5cblx0XHRcdH0gZWxzZSBpZihfZGlyZWN0aW9uID09PSAnaCcgJiYgYXhpcyA9PT0gJ3gnICYmICFfem9vbVN0YXJ0ZWQgKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihkaXIpIHtcblx0XHRcdFx0XHRpZihuZXdPZmZzZXQgPiBfY3VyclBhbkJvdW5kcy5taW5bYXhpc10pIHtcblx0XHRcdFx0XHRcdHBhbkZyaWN0aW9uID0gX29wdGlvbnMucGFuRW5kRnJpY3Rpb247XG5cdFx0XHRcdFx0XHRvdmVyRGlmZiA9IF9jdXJyUGFuQm91bmRzLm1pbltheGlzXSAtIG5ld09mZnNldDtcblx0XHRcdFx0XHRcdHN0YXJ0T3ZlckRpZmYgPSBfY3VyclBhbkJvdW5kcy5taW5bYXhpc10gLSBfc3RhcnRQYW5PZmZzZXRbYXhpc107XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC8vIGRyYWcgcmlnaHRcblx0XHRcdFx0XHRpZiggKHN0YXJ0T3ZlckRpZmYgPD0gMCB8fCBtYWluU2Nyb2xsRGlmZiA8IDApICYmIF9nZXROdW1JdGVtcygpID4gMSApIHtcblx0XHRcdFx0XHRcdG5ld01haW5TY3JvbGxQb3MgPSBuZXdNYWluU2Nyb2xsUG9zaXRpb247XG5cdFx0XHRcdFx0XHRpZihtYWluU2Nyb2xsRGlmZiA8IDAgJiYgbmV3TWFpblNjcm9sbFBvc2l0aW9uID4gX3N0YXJ0TWFpblNjcm9sbFBvcy54KSB7XG5cdFx0XHRcdFx0XHRcdG5ld01haW5TY3JvbGxQb3MgPSBfc3RhcnRNYWluU2Nyb2xsUG9zLng7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmKF9jdXJyUGFuQm91bmRzLm1pbi54ICE9PSBfY3VyclBhbkJvdW5kcy5tYXgueCkge1xuXHRcdFx0XHRcdFx0XHRuZXdQYW5Qb3MgPSBuZXdPZmZzZXQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdGlmKG5ld09mZnNldCA8IF9jdXJyUGFuQm91bmRzLm1heFtheGlzXSApIHtcblx0XHRcdFx0XHRcdHBhbkZyaWN0aW9uID1fb3B0aW9ucy5wYW5FbmRGcmljdGlvbjtcblx0XHRcdFx0XHRcdG92ZXJEaWZmID0gbmV3T2Zmc2V0IC0gX2N1cnJQYW5Cb3VuZHMubWF4W2F4aXNdO1xuXHRcdFx0XHRcdFx0c3RhcnRPdmVyRGlmZiA9IF9zdGFydFBhbk9mZnNldFtheGlzXSAtIF9jdXJyUGFuQm91bmRzLm1heFtheGlzXTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiggKHN0YXJ0T3ZlckRpZmYgPD0gMCB8fCBtYWluU2Nyb2xsRGlmZiA+IDApICYmIF9nZXROdW1JdGVtcygpID4gMSApIHtcblx0XHRcdFx0XHRcdG5ld01haW5TY3JvbGxQb3MgPSBuZXdNYWluU2Nyb2xsUG9zaXRpb247XG5cblx0XHRcdFx0XHRcdGlmKG1haW5TY3JvbGxEaWZmID4gMCAmJiBuZXdNYWluU2Nyb2xsUG9zaXRpb24gPCBfc3RhcnRNYWluU2Nyb2xsUG9zLngpIHtcblx0XHRcdFx0XHRcdFx0bmV3TWFpblNjcm9sbFBvcyA9IF9zdGFydE1haW5TY3JvbGxQb3MueDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZihfY3VyclBhbkJvdW5kcy5taW4ueCAhPT0gX2N1cnJQYW5Cb3VuZHMubWF4LngpIHtcblx0XHRcdFx0XHRcdFx0bmV3UGFuUG9zID0gbmV3T2Zmc2V0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cblxuXHRcdFx0XHQvL1xuXHRcdFx0fVxuXG5cdFx0XHRpZihheGlzID09PSAneCcpIHtcblxuXHRcdFx0XHRpZihuZXdNYWluU2Nyb2xsUG9zICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRfbW92ZU1haW5TY3JvbGwobmV3TWFpblNjcm9sbFBvcywgdHJ1ZSk7XG5cdFx0XHRcdFx0aWYobmV3TWFpblNjcm9sbFBvcyA9PT0gX3N0YXJ0TWFpblNjcm9sbFBvcy54KSB7XG5cdFx0XHRcdFx0XHRfbWFpblNjcm9sbFNoaWZ0ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0X21haW5TY3JvbGxTaGlmdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihfY3VyclBhbkJvdW5kcy5taW4ueCAhPT0gX2N1cnJQYW5Cb3VuZHMubWF4LngpIHtcblx0XHRcdFx0XHRpZihuZXdQYW5Qb3MgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0X3Bhbk9mZnNldC54ID0gbmV3UGFuUG9zO1xuXHRcdFx0XHRcdH0gZWxzZSBpZighX21haW5TY3JvbGxTaGlmdGVkKSB7XG5cdFx0XHRcdFx0XHRfcGFuT2Zmc2V0LnggKz0gZGVsdGEueCAqIHBhbkZyaWN0aW9uO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBuZXdNYWluU2Nyb2xsUG9zICE9PSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZighX21haW5TY3JvbGxBbmltYXRpbmcpIHtcblx0XHRcdFxuXHRcdFx0aWYoIV9tYWluU2Nyb2xsU2hpZnRlZCkge1xuXHRcdFx0XHRpZihfY3Vyclpvb21MZXZlbCA+IHNlbGYuY3Vyckl0ZW0uZml0UmF0aW8pIHtcblx0XHRcdFx0XHRfcGFuT2Zmc2V0W2F4aXNdICs9IGRlbHRhW2F4aXNdICogcGFuRnJpY3Rpb247XG5cdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdFxuXHRcdH1cblx0XHRcblx0fSxcblxuXHQvLyBQb2ludGVyZG93bi90b3VjaHN0YXJ0L21vdXNlZG93biBoYW5kbGVyXG5cdF9vbkRyYWdTdGFydCA9IGZ1bmN0aW9uKGUpIHtcblxuXHRcdC8vIEFsbG93IGRyYWdnaW5nIG9ubHkgdmlhIGxlZnQgbW91c2UgYnV0dG9uLlxuXHRcdC8vIEFzIHRoaXMgaGFuZGxlciBpcyBub3QgYWRkZWQgaW4gSUU4IC0gd2UgaWdub3JlIGUud2hpY2hcblx0XHQvLyBcblx0XHQvLyBodHRwOi8vd3d3LnF1aXJrc21vZGUub3JnL2pzL2V2ZW50c19wcm9wZXJ0aWVzLmh0bWxcblx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvZXZlbnQuYnV0dG9uXG5cdFx0aWYoZS50eXBlID09PSAnbW91c2Vkb3duJyAmJiBlLmJ1dHRvbiA+IDAgICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKF9pbml0aWFsWm9vbVJ1bm5pbmcpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihfb2xkQW5kcm9pZFRvdWNoRW5kVGltZW91dCAmJiBlLnR5cGUgPT09ICdtb3VzZWRvd24nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoX3ByZXZlbnREZWZhdWx0RXZlbnRCZWhhdmlvdXIoZSwgdHJ1ZSkpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblxuXG5cdFx0X3Nob3V0KCdwb2ludGVyRG93bicpO1xuXG5cdFx0aWYoX3BvaW50ZXJFdmVudEVuYWJsZWQpIHtcblx0XHRcdHZhciBwb2ludGVySW5kZXggPSBmcmFtZXdvcmsuYXJyYXlTZWFyY2goX2N1cnJQb2ludGVycywgZS5wb2ludGVySWQsICdpZCcpO1xuXHRcdFx0aWYocG9pbnRlckluZGV4IDwgMCkge1xuXHRcdFx0XHRwb2ludGVySW5kZXggPSBfY3VyclBvaW50ZXJzLmxlbmd0aDtcblx0XHRcdH1cblx0XHRcdF9jdXJyUG9pbnRlcnNbcG9pbnRlckluZGV4XSA9IHt4OmUucGFnZVgsIHk6ZS5wYWdlWSwgaWQ6IGUucG9pbnRlcklkfTtcblx0XHR9XG5cdFx0XG5cblxuXHRcdHZhciBzdGFydFBvaW50c0xpc3QgPSBfZ2V0VG91Y2hQb2ludHMoZSksXG5cdFx0XHRudW1Qb2ludHMgPSBzdGFydFBvaW50c0xpc3QubGVuZ3RoO1xuXG5cdFx0X2N1cnJlbnRQb2ludHMgPSBudWxsO1xuXG5cdFx0X3N0b3BBbGxBbmltYXRpb25zKCk7XG5cblx0XHQvLyBpbml0IGRyYWdcblx0XHRpZighX2lzRHJhZ2dpbmcgfHwgbnVtUG9pbnRzID09PSAxKSB7XG5cblx0XHRcdFxuXG5cdFx0XHRfaXNEcmFnZ2luZyA9IF9pc0ZpcnN0TW92ZSA9IHRydWU7XG5cdFx0XHRmcmFtZXdvcmsuYmluZCh3aW5kb3csIF91cE1vdmVFdmVudHMsIHNlbGYpO1xuXG5cdFx0XHRfaXNab29taW5nSW4gPSBcblx0XHRcdFx0X3dhc092ZXJJbml0aWFsWm9vbSA9IFxuXHRcdFx0XHRfb3BhY2l0eUNoYW5nZWQgPSBcblx0XHRcdFx0X3ZlcnRpY2FsRHJhZ0luaXRpYXRlZCA9IFxuXHRcdFx0XHRfbWFpblNjcm9sbFNoaWZ0ZWQgPSBcblx0XHRcdFx0X21vdmVkID0gXG5cdFx0XHRcdF9pc011bHRpdG91Y2ggPSBcblx0XHRcdFx0X3pvb21TdGFydGVkID0gZmFsc2U7XG5cblx0XHRcdF9kaXJlY3Rpb24gPSBudWxsO1xuXG5cdFx0XHRfc2hvdXQoJ2ZpcnN0VG91Y2hTdGFydCcsIHN0YXJ0UG9pbnRzTGlzdCk7XG5cblx0XHRcdF9lcXVhbGl6ZVBvaW50cyhfc3RhcnRQYW5PZmZzZXQsIF9wYW5PZmZzZXQpO1xuXG5cdFx0XHRfY3VyclBhbkRpc3QueCA9IF9jdXJyUGFuRGlzdC55ID0gMDtcblx0XHRcdF9lcXVhbGl6ZVBvaW50cyhfY3VyclBvaW50LCBzdGFydFBvaW50c0xpc3RbMF0pO1xuXHRcdFx0X2VxdWFsaXplUG9pbnRzKF9zdGFydFBvaW50LCBfY3VyclBvaW50KTtcblxuXHRcdFx0Ly9fZXF1YWxpemVQb2ludHMoX3N0YXJ0TWFpblNjcm9sbFBvcywgX21haW5TY3JvbGxQb3MpO1xuXHRcdFx0X3N0YXJ0TWFpblNjcm9sbFBvcy54ID0gX3NsaWRlU2l6ZS54ICogX2N1cnJQb3NpdGlvbkluZGV4O1xuXG5cdFx0XHRfcG9zUG9pbnRzID0gW3tcblx0XHRcdFx0eDogX2N1cnJQb2ludC54LFxuXHRcdFx0XHR5OiBfY3VyclBvaW50Lnlcblx0XHRcdH1dO1xuXG5cdFx0XHRfZ2VzdHVyZUNoZWNrU3BlZWRUaW1lID0gX2dlc3R1cmVTdGFydFRpbWUgPSBfZ2V0Q3VycmVudFRpbWUoKTtcblxuXHRcdFx0Ly9fbWFpblNjcm9sbEFuaW1hdGlvbkVuZCh0cnVlKTtcblx0XHRcdF9jYWxjdWxhdGVQYW5Cb3VuZHMoIF9jdXJyWm9vbUxldmVsLCB0cnVlICk7XG5cdFx0XHRcblx0XHRcdC8vIFN0YXJ0IHJlbmRlcmluZ1xuXHRcdFx0X3N0b3BEcmFnVXBkYXRlTG9vcCgpO1xuXHRcdFx0X2RyYWdVcGRhdGVMb29wKCk7XG5cdFx0XHRcblx0XHR9XG5cblx0XHQvLyBpbml0IHpvb21cblx0XHRpZighX2lzWm9vbWluZyAmJiBudW1Qb2ludHMgPiAxICYmICFfbWFpblNjcm9sbEFuaW1hdGluZyAmJiAhX21haW5TY3JvbGxTaGlmdGVkKSB7XG5cdFx0XHRfc3RhcnRab29tTGV2ZWwgPSBfY3Vyclpvb21MZXZlbDtcblx0XHRcdF96b29tU3RhcnRlZCA9IGZhbHNlOyAvLyB0cnVlIGlmIHpvb20gY2hhbmdlZCBhdCBsZWFzdCBvbmNlXG5cblx0XHRcdF9pc1pvb21pbmcgPSBfaXNNdWx0aXRvdWNoID0gdHJ1ZTtcblx0XHRcdF9jdXJyUGFuRGlzdC55ID0gX2N1cnJQYW5EaXN0LnggPSAwO1xuXG5cdFx0XHRfZXF1YWxpemVQb2ludHMoX3N0YXJ0UGFuT2Zmc2V0LCBfcGFuT2Zmc2V0KTtcblxuXHRcdFx0X2VxdWFsaXplUG9pbnRzKHAsIHN0YXJ0UG9pbnRzTGlzdFswXSk7XG5cdFx0XHRfZXF1YWxpemVQb2ludHMocDIsIHN0YXJ0UG9pbnRzTGlzdFsxXSk7XG5cblx0XHRcdF9maW5kQ2VudGVyT2ZQb2ludHMocCwgcDIsIF9jdXJyQ2VudGVyUG9pbnQpO1xuXG5cdFx0XHRfbWlkWm9vbVBvaW50LnggPSBNYXRoLmFicyhfY3VyckNlbnRlclBvaW50LngpIC0gX3Bhbk9mZnNldC54O1xuXHRcdFx0X21pZFpvb21Qb2ludC55ID0gTWF0aC5hYnMoX2N1cnJDZW50ZXJQb2ludC55KSAtIF9wYW5PZmZzZXQueTtcblx0XHRcdF9jdXJyUG9pbnRzRGlzdGFuY2UgPSBfc3RhcnRQb2ludHNEaXN0YW5jZSA9IF9jYWxjdWxhdGVQb2ludHNEaXN0YW5jZShwLCBwMik7XG5cdFx0fVxuXG5cblx0fSxcblxuXHQvLyBQb2ludGVybW92ZS90b3VjaG1vdmUvbW91c2Vtb3ZlIGhhbmRsZXJcblx0X29uRHJhZ01vdmUgPSBmdW5jdGlvbihlKSB7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZihfcG9pbnRlckV2ZW50RW5hYmxlZCkge1xuXHRcdFx0dmFyIHBvaW50ZXJJbmRleCA9IGZyYW1ld29yay5hcnJheVNlYXJjaChfY3VyclBvaW50ZXJzLCBlLnBvaW50ZXJJZCwgJ2lkJyk7XG5cdFx0XHRpZihwb2ludGVySW5kZXggPiAtMSkge1xuXHRcdFx0XHR2YXIgcCA9IF9jdXJyUG9pbnRlcnNbcG9pbnRlckluZGV4XTtcblx0XHRcdFx0cC54ID0gZS5wYWdlWDtcblx0XHRcdFx0cC55ID0gZS5wYWdlWTsgXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoX2lzRHJhZ2dpbmcpIHtcblx0XHRcdHZhciB0b3VjaGVzTGlzdCA9IF9nZXRUb3VjaFBvaW50cyhlKTtcblx0XHRcdGlmKCFfZGlyZWN0aW9uICYmICFfbW92ZWQgJiYgIV9pc1pvb21pbmcpIHtcblxuXHRcdFx0XHRpZihfbWFpblNjcm9sbFBvcy54ICE9PSBfc2xpZGVTaXplLnggKiBfY3VyclBvc2l0aW9uSW5kZXgpIHtcblx0XHRcdFx0XHQvLyBpZiBtYWluIHNjcm9sbCBwb3NpdGlvbiBpcyBzaGlmdGVkIOKAkyBkaXJlY3Rpb24gaXMgYWx3YXlzIGhvcml6b250YWxcblx0XHRcdFx0XHRfZGlyZWN0aW9uID0gJ2gnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciBkaWZmID0gTWF0aC5hYnModG91Y2hlc0xpc3RbMF0ueCAtIF9jdXJyUG9pbnQueCkgLSBNYXRoLmFicyh0b3VjaGVzTGlzdFswXS55IC0gX2N1cnJQb2ludC55KTtcblx0XHRcdFx0XHQvLyBjaGVjayB0aGUgZGlyZWN0aW9uIG9mIG1vdmVtZW50XG5cdFx0XHRcdFx0aWYoTWF0aC5hYnMoZGlmZikgPj0gRElSRUNUSU9OX0NIRUNLX09GRlNFVCkge1xuXHRcdFx0XHRcdFx0X2RpcmVjdGlvbiA9IGRpZmYgPiAwID8gJ2gnIDogJ3YnO1xuXHRcdFx0XHRcdFx0X2N1cnJlbnRQb2ludHMgPSB0b3VjaGVzTGlzdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfY3VycmVudFBvaW50cyA9IHRvdWNoZXNMaXN0O1xuXHRcdFx0fVxuXHRcdH1cdFxuXHR9LFxuXHQvLyBcblx0X3JlbmRlck1vdmVtZW50ID0gIGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYoIV9jdXJyZW50UG9pbnRzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIG51bVBvaW50cyA9IF9jdXJyZW50UG9pbnRzLmxlbmd0aDtcblxuXHRcdGlmKG51bVBvaW50cyA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdF9lcXVhbGl6ZVBvaW50cyhwLCBfY3VycmVudFBvaW50c1swXSk7XG5cblx0XHRkZWx0YS54ID0gcC54IC0gX2N1cnJQb2ludC54O1xuXHRcdGRlbHRhLnkgPSBwLnkgLSBfY3VyclBvaW50Lnk7XG5cblx0XHRpZihfaXNab29taW5nICYmIG51bVBvaW50cyA+IDEpIHtcblx0XHRcdC8vIEhhbmRsZSBiZWhhdmlvdXIgZm9yIG1vcmUgdGhhbiAxIHBvaW50XG5cblx0XHRcdF9jdXJyUG9pbnQueCA9IHAueDtcblx0XHRcdF9jdXJyUG9pbnQueSA9IHAueTtcblx0XHRcblx0XHRcdC8vIGNoZWNrIGlmIG9uZSBvZiB0d28gcG9pbnRzIGNoYW5nZWRcblx0XHRcdGlmKCAhZGVsdGEueCAmJiAhZGVsdGEueSAmJiBfaXNFcXVhbFBvaW50cyhfY3VycmVudFBvaW50c1sxXSwgcDIpICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdF9lcXVhbGl6ZVBvaW50cyhwMiwgX2N1cnJlbnRQb2ludHNbMV0pO1xuXG5cblx0XHRcdGlmKCFfem9vbVN0YXJ0ZWQpIHtcblx0XHRcdFx0X3pvb21TdGFydGVkID0gdHJ1ZTtcblx0XHRcdFx0X3Nob3V0KCd6b29tR2VzdHVyZVN0YXJ0ZWQnKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8gRGlzdGFuY2UgYmV0d2VlbiB0d28gcG9pbnRzXG5cdFx0XHR2YXIgcG9pbnRzRGlzdGFuY2UgPSBfY2FsY3VsYXRlUG9pbnRzRGlzdGFuY2UocCxwMik7XG5cblx0XHRcdHZhciB6b29tTGV2ZWwgPSBfY2FsY3VsYXRlWm9vbUxldmVsKHBvaW50c0Rpc3RhbmNlKTtcblxuXHRcdFx0Ly8gc2xpZ2h0bHkgb3ZlciB0aGUgb2YgaW5pdGlhbCB6b29tIGxldmVsXG5cdFx0XHRpZih6b29tTGV2ZWwgPiBzZWxmLmN1cnJJdGVtLmluaXRpYWxab29tTGV2ZWwgKyBzZWxmLmN1cnJJdGVtLmluaXRpYWxab29tTGV2ZWwgLyAxNSkge1xuXHRcdFx0XHRfd2FzT3ZlckluaXRpYWxab29tID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQXBwbHkgdGhlIGZyaWN0aW9uIGlmIHpvb20gbGV2ZWwgaXMgb3V0IG9mIHRoZSBib3VuZHNcblx0XHRcdHZhciB6b29tRnJpY3Rpb24gPSAxLFxuXHRcdFx0XHRtaW5ab29tTGV2ZWwgPSBfZ2V0TWluWm9vbUxldmVsKCksXG5cdFx0XHRcdG1heFpvb21MZXZlbCA9IF9nZXRNYXhab29tTGV2ZWwoKTtcblxuXHRcdFx0aWYgKCB6b29tTGV2ZWwgPCBtaW5ab29tTGV2ZWwgKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihfb3B0aW9ucy5waW5jaFRvQ2xvc2UgJiYgIV93YXNPdmVySW5pdGlhbFpvb20gJiYgX3N0YXJ0Wm9vbUxldmVsIDw9IHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbCkge1xuXHRcdFx0XHRcdC8vIGZhZGUgb3V0IGJhY2tncm91bmQgaWYgem9vbWluZyBvdXRcblx0XHRcdFx0XHR2YXIgbWludXNEaWZmID0gbWluWm9vbUxldmVsIC0gem9vbUxldmVsO1xuXHRcdFx0XHRcdHZhciBwZXJjZW50ID0gMSAtIG1pbnVzRGlmZiAvIChtaW5ab29tTGV2ZWwgLyAxLjIpO1xuXG5cdFx0XHRcdFx0X2FwcGx5QmdPcGFjaXR5KHBlcmNlbnQpO1xuXHRcdFx0XHRcdF9zaG91dCgnb25QaW5jaENsb3NlJywgcGVyY2VudCk7XG5cdFx0XHRcdFx0X29wYWNpdHlDaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR6b29tRnJpY3Rpb24gPSAobWluWm9vbUxldmVsIC0gem9vbUxldmVsKSAvIG1pblpvb21MZXZlbDtcblx0XHRcdFx0XHRpZih6b29tRnJpY3Rpb24gPiAxKSB7XG5cdFx0XHRcdFx0XHR6b29tRnJpY3Rpb24gPSAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR6b29tTGV2ZWwgPSBtaW5ab29tTGV2ZWwgLSB6b29tRnJpY3Rpb24gKiAobWluWm9vbUxldmVsIC8gMyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9IGVsc2UgaWYgKCB6b29tTGV2ZWwgPiBtYXhab29tTGV2ZWwgKSB7XG5cdFx0XHRcdC8vIDEuNSAtIGV4dHJhIHpvb20gbGV2ZWwgYWJvdmUgdGhlIG1heC4gRS5nLiBpZiBtYXggaXMgeDYsIHJlYWwgbWF4IDYgKyAxLjUgPSA3LjVcblx0XHRcdFx0em9vbUZyaWN0aW9uID0gKHpvb21MZXZlbCAtIG1heFpvb21MZXZlbCkgLyAoIG1pblpvb21MZXZlbCAqIDYgKTtcblx0XHRcdFx0aWYoem9vbUZyaWN0aW9uID4gMSkge1xuXHRcdFx0XHRcdHpvb21GcmljdGlvbiA9IDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0em9vbUxldmVsID0gbWF4Wm9vbUxldmVsICsgem9vbUZyaWN0aW9uICogbWluWm9vbUxldmVsO1xuXHRcdFx0fVxuXG5cdFx0XHRpZih6b29tRnJpY3Rpb24gPCAwKSB7XG5cdFx0XHRcdHpvb21GcmljdGlvbiA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGRpc3RhbmNlIGJldHdlZW4gdG91Y2ggcG9pbnRzIGFmdGVyIGZyaWN0aW9uIGlzIGFwcGxpZWRcblx0XHRcdF9jdXJyUG9pbnRzRGlzdGFuY2UgPSBwb2ludHNEaXN0YW5jZTtcblxuXHRcdFx0Ly8gX2NlbnRlclBvaW50IC0gVGhlIHBvaW50IGluIHRoZSBtaWRkbGUgb2YgdHdvIHBvaW50ZXJzXG5cdFx0XHRfZmluZENlbnRlck9mUG9pbnRzKHAsIHAyLCBfY2VudGVyUG9pbnQpO1xuXHRcdFxuXHRcdFx0Ly8gcGFuaW5nIHdpdGggdHdvIHBvaW50ZXJzIHByZXNzZWRcblx0XHRcdF9jdXJyUGFuRGlzdC54ICs9IF9jZW50ZXJQb2ludC54IC0gX2N1cnJDZW50ZXJQb2ludC54O1xuXHRcdFx0X2N1cnJQYW5EaXN0LnkgKz0gX2NlbnRlclBvaW50LnkgLSBfY3VyckNlbnRlclBvaW50Lnk7XG5cdFx0XHRfZXF1YWxpemVQb2ludHMoX2N1cnJDZW50ZXJQb2ludCwgX2NlbnRlclBvaW50KTtcblxuXHRcdFx0X3Bhbk9mZnNldC54ID0gX2NhbGN1bGF0ZVBhbk9mZnNldCgneCcsIHpvb21MZXZlbCk7XG5cdFx0XHRfcGFuT2Zmc2V0LnkgPSBfY2FsY3VsYXRlUGFuT2Zmc2V0KCd5Jywgem9vbUxldmVsKTtcblxuXHRcdFx0X2lzWm9vbWluZ0luID0gem9vbUxldmVsID4gX2N1cnJab29tTGV2ZWw7XG5cdFx0XHRfY3Vyclpvb21MZXZlbCA9IHpvb21MZXZlbDtcblx0XHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBoYW5kbGUgYmVoYXZpb3VyIGZvciBvbmUgcG9pbnQgKGRyYWdnaW5nIG9yIHBhbm5pbmcpXG5cblx0XHRcdGlmKCFfZGlyZWN0aW9uKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYoX2lzRmlyc3RNb3ZlKSB7XG5cdFx0XHRcdF9pc0ZpcnN0TW92ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIHN1YnRyYWN0IGRyYWcgZGlzdGFuY2UgdGhhdCB3YXMgdXNlZCBkdXJpbmcgdGhlIGRldGVjdGlvbiBkaXJlY3Rpb24gIFxuXG5cdFx0XHRcdGlmKCBNYXRoLmFicyhkZWx0YS54KSA+PSBESVJFQ1RJT05fQ0hFQ0tfT0ZGU0VUKSB7XG5cdFx0XHRcdFx0ZGVsdGEueCAtPSBfY3VycmVudFBvaW50c1swXS54IC0gX3N0YXJ0UG9pbnQueDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0aWYoIE1hdGguYWJzKGRlbHRhLnkpID49IERJUkVDVElPTl9DSEVDS19PRkZTRVQpIHtcblx0XHRcdFx0XHRkZWx0YS55IC09IF9jdXJyZW50UG9pbnRzWzBdLnkgLSBfc3RhcnRQb2ludC55O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdF9jdXJyUG9pbnQueCA9IHAueDtcblx0XHRcdF9jdXJyUG9pbnQueSA9IHAueTtcblxuXHRcdFx0Ly8gZG8gbm90aGluZyBpZiBwb2ludGVycyBwb3NpdGlvbiBoYXNuJ3QgY2hhbmdlZFxuXHRcdFx0aWYoZGVsdGEueCA9PT0gMCAmJiBkZWx0YS55ID09PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYoX2RpcmVjdGlvbiA9PT0gJ3YnICYmIF9vcHRpb25zLmNsb3NlT25WZXJ0aWNhbERyYWcpIHtcblx0XHRcdFx0aWYoIV9jYW5QYW4oKSkge1xuXHRcdFx0XHRcdF9jdXJyUGFuRGlzdC55ICs9IGRlbHRhLnk7XG5cdFx0XHRcdFx0X3Bhbk9mZnNldC55ICs9IGRlbHRhLnk7XG5cblx0XHRcdFx0XHR2YXIgb3BhY2l0eVJhdGlvID0gX2NhbGN1bGF0ZVZlcnRpY2FsRHJhZ09wYWNpdHlSYXRpbygpO1xuXG5cdFx0XHRcdFx0X3ZlcnRpY2FsRHJhZ0luaXRpYXRlZCA9IHRydWU7XG5cdFx0XHRcdFx0X3Nob3V0KCdvblZlcnRpY2FsRHJhZycsIG9wYWNpdHlSYXRpbyk7XG5cblx0XHRcdFx0XHRfYXBwbHlCZ09wYWNpdHkob3BhY2l0eVJhdGlvKTtcblx0XHRcdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xuXHRcdFx0XHRcdHJldHVybiA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0X3B1c2hQb3NQb2ludChfZ2V0Q3VycmVudFRpbWUoKSwgcC54LCBwLnkpO1xuXG5cdFx0XHRfbW92ZWQgPSB0cnVlO1xuXHRcdFx0X2N1cnJQYW5Cb3VuZHMgPSBzZWxmLmN1cnJJdGVtLmJvdW5kcztcblx0XHRcdFxuXHRcdFx0dmFyIG1haW5TY3JvbGxDaGFuZ2VkID0gX3Bhbk9yTW92ZU1haW5TY3JvbGwoJ3gnLCBkZWx0YSk7XG5cdFx0XHRpZighbWFpblNjcm9sbENoYW5nZWQpIHtcblx0XHRcdFx0X3Bhbk9yTW92ZU1haW5TY3JvbGwoJ3knLCBkZWx0YSk7XG5cblx0XHRcdFx0X3JvdW5kUG9pbnQoX3Bhbk9mZnNldCk7XG5cdFx0XHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCk7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fSxcblx0XG5cdC8vIFBvaW50ZXJ1cC9wb2ludGVyY2FuY2VsL3RvdWNoZW5kL3RvdWNoY2FuY2VsL21vdXNldXAgZXZlbnQgaGFuZGxlclxuXHRfb25EcmFnUmVsZWFzZSA9IGZ1bmN0aW9uKGUpIHtcblxuXHRcdGlmKF9mZWF0dXJlcy5pc09sZEFuZHJvaWQgKSB7XG5cblx0XHRcdGlmKF9vbGRBbmRyb2lkVG91Y2hFbmRUaW1lb3V0ICYmIGUudHlwZSA9PT0gJ21vdXNldXAnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gb24gQW5kcm9pZCAodjQuMSwgNC4yLCA0LjMgJiBwb3NzaWJseSBvbGRlcikgXG5cdFx0XHQvLyBnaG9zdCBtb3VzZWRvd24vdXAgZXZlbnQgaXNuJ3QgcHJldmVudGFibGUgdmlhIGUucHJldmVudERlZmF1bHQsXG5cdFx0XHQvLyB3aGljaCBjYXVzZXMgZmFrZSBtb3VzZWRvd24gZXZlbnRcblx0XHRcdC8vIHNvIHdlIGJsb2NrIG1vdXNlZG93bi91cCBmb3IgNjAwbXNcblx0XHRcdGlmKCBlLnR5cGUuaW5kZXhPZigndG91Y2gnKSA+IC0xICkge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQoX29sZEFuZHJvaWRUb3VjaEVuZFRpbWVvdXQpO1xuXHRcdFx0XHRfb2xkQW5kcm9pZFRvdWNoRW5kVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0X29sZEFuZHJvaWRUb3VjaEVuZFRpbWVvdXQgPSAwO1xuXHRcdFx0XHR9LCA2MDApO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fVxuXG5cdFx0X3Nob3V0KCdwb2ludGVyVXAnKTtcblxuXHRcdGlmKF9wcmV2ZW50RGVmYXVsdEV2ZW50QmVoYXZpb3VyKGUsIGZhbHNlKSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblxuXHRcdHZhciByZWxlYXNlUG9pbnQ7XG5cblx0XHRpZihfcG9pbnRlckV2ZW50RW5hYmxlZCkge1xuXHRcdFx0dmFyIHBvaW50ZXJJbmRleCA9IGZyYW1ld29yay5hcnJheVNlYXJjaChfY3VyclBvaW50ZXJzLCBlLnBvaW50ZXJJZCwgJ2lkJyk7XG5cdFx0XHRcblx0XHRcdGlmKHBvaW50ZXJJbmRleCA+IC0xKSB7XG5cdFx0XHRcdHJlbGVhc2VQb2ludCA9IF9jdXJyUG9pbnRlcnMuc3BsaWNlKHBvaW50ZXJJbmRleCwgMSlbMF07XG5cblx0XHRcdFx0aWYobmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQpIHtcblx0XHRcdFx0XHR2YXIgTVNQT0lOVEVSX1RZUEVTID0ge1xuXHRcdFx0XHRcdFx0NDogJ21vdXNlJywgLy8gZXZlbnQuTVNQT0lOVEVSX1RZUEVfTU9VU0Vcblx0XHRcdFx0XHRcdDI6ICd0b3VjaCcsIC8vIGV2ZW50Lk1TUE9JTlRFUl9UWVBFX1RPVUNIIFxuXHRcdFx0XHRcdFx0MzogJ3BlbicgLy8gZXZlbnQuTVNQT0lOVEVSX1RZUEVfUEVOXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZWxlYXNlUG9pbnQudHlwZSA9IE1TUE9JTlRFUl9UWVBFU1tlLnBvaW50ZXJUeXBlXTtcblxuXHRcdFx0XHRcdGlmKCFyZWxlYXNlUG9pbnQudHlwZSkge1xuXHRcdFx0XHRcdFx0cmVsZWFzZVBvaW50LnR5cGUgPSBlLnBvaW50ZXJUeXBlIHx8ICdtb3VzZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlbGVhc2VQb2ludC50eXBlID0gZS5wb2ludGVyVHlwZSB8fCAnbW91c2UnO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgdG91Y2hMaXN0ID0gX2dldFRvdWNoUG9pbnRzKGUpLFxuXHRcdFx0Z2VzdHVyZVR5cGUsXG5cdFx0XHRudW1Qb2ludHMgPSB0b3VjaExpc3QubGVuZ3RoO1xuXG5cdFx0aWYoZS50eXBlID09PSAnbW91c2V1cCcpIHtcblx0XHRcdG51bVBvaW50cyA9IDA7XG5cdFx0fVxuXG5cdFx0Ly8gRG8gbm90aGluZyBpZiB0aGVyZSB3ZXJlIDMgdG91Y2ggcG9pbnRzIG9yIG1vcmVcblx0XHRpZihudW1Qb2ludHMgPT09IDIpIHtcblx0XHRcdF9jdXJyZW50UG9pbnRzID0gbnVsbDtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIGlmIHNlY29uZCBwb2ludGVyIHJlbGVhc2VkXG5cdFx0aWYobnVtUG9pbnRzID09PSAxKSB7XG5cdFx0XHRfZXF1YWxpemVQb2ludHMoX3N0YXJ0UG9pbnQsIHRvdWNoTGlzdFswXSk7XG5cdFx0fVx0XHRcdFx0XG5cblxuXHRcdC8vIHBvaW50ZXIgaGFzbid0IG1vdmVkLCBzZW5kIFwidGFwIHJlbGVhc2VcIiBwb2ludFxuXHRcdGlmKG51bVBvaW50cyA9PT0gMCAmJiAhX2RpcmVjdGlvbiAmJiAhX21haW5TY3JvbGxBbmltYXRpbmcpIHtcblx0XHRcdGlmKCFyZWxlYXNlUG9pbnQpIHtcblx0XHRcdFx0aWYoZS50eXBlID09PSAnbW91c2V1cCcpIHtcblx0XHRcdFx0XHRyZWxlYXNlUG9pbnQgPSB7eDogZS5wYWdlWCwgeTogZS5wYWdlWSwgdHlwZTonbW91c2UnfTtcblx0XHRcdFx0fSBlbHNlIGlmKGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlc1swXSkge1xuXHRcdFx0XHRcdHJlbGVhc2VQb2ludCA9IHt4OiBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYLCB5OiBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZLCB0eXBlOid0b3VjaCd9O1xuXHRcdFx0XHR9XHRcdFxuXHRcdFx0fVxuXG5cdFx0XHRfc2hvdXQoJ3RvdWNoUmVsZWFzZScsIGUsIHJlbGVhc2VQb2ludCk7XG5cdFx0fVxuXG5cdFx0Ly8gRGlmZmVyZW5jZSBpbiB0aW1lIGJldHdlZW4gcmVsZWFzaW5nIG9mIHR3byBsYXN0IHRvdWNoIHBvaW50cyAoem9vbSBnZXN0dXJlKVxuXHRcdHZhciByZWxlYXNlVGltZURpZmYgPSAtMTtcblxuXHRcdC8vIEdlc3R1cmUgY29tcGxldGVkLCBubyBwb2ludGVycyBsZWZ0XG5cdFx0aWYobnVtUG9pbnRzID09PSAwKSB7XG5cdFx0XHRfaXNEcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0ZnJhbWV3b3JrLnVuYmluZCh3aW5kb3csIF91cE1vdmVFdmVudHMsIHNlbGYpO1xuXG5cdFx0XHRfc3RvcERyYWdVcGRhdGVMb29wKCk7XG5cblx0XHRcdGlmKF9pc1pvb21pbmcpIHtcblx0XHRcdFx0Ly8gVHdvIHBvaW50cyByZWxlYXNlZCBhdCB0aGUgc2FtZSB0aW1lXG5cdFx0XHRcdHJlbGVhc2VUaW1lRGlmZiA9IDA7XG5cdFx0XHR9IGVsc2UgaWYoX2xhc3RSZWxlYXNlVGltZSAhPT0gLTEpIHtcblx0XHRcdFx0cmVsZWFzZVRpbWVEaWZmID0gX2dldEN1cnJlbnRUaW1lKCkgLSBfbGFzdFJlbGVhc2VUaW1lO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRfbGFzdFJlbGVhc2VUaW1lID0gbnVtUG9pbnRzID09PSAxID8gX2dldEN1cnJlbnRUaW1lKCkgOiAtMTtcblx0XHRcblx0XHRpZihyZWxlYXNlVGltZURpZmYgIT09IC0xICYmIHJlbGVhc2VUaW1lRGlmZiA8IDE1MCkge1xuXHRcdFx0Z2VzdHVyZVR5cGUgPSAnem9vbSc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGdlc3R1cmVUeXBlID0gJ3N3aXBlJztcblx0XHR9XG5cblx0XHRpZihfaXNab29taW5nICYmIG51bVBvaW50cyA8IDIpIHtcblx0XHRcdF9pc1pvb21pbmcgPSBmYWxzZTtcblxuXHRcdFx0Ly8gT25seSBzZWNvbmQgcG9pbnQgcmVsZWFzZWRcblx0XHRcdGlmKG51bVBvaW50cyA9PT0gMSkge1xuXHRcdFx0XHRnZXN0dXJlVHlwZSA9ICd6b29tUG9pbnRlclVwJztcblx0XHRcdH1cblx0XHRcdF9zaG91dCgnem9vbUdlc3R1cmVFbmRlZCcpO1xuXHRcdH1cblxuXHRcdF9jdXJyZW50UG9pbnRzID0gbnVsbDtcblx0XHRpZighX21vdmVkICYmICFfem9vbVN0YXJ0ZWQgJiYgIV9tYWluU2Nyb2xsQW5pbWF0aW5nICYmICFfdmVydGljYWxEcmFnSW5pdGlhdGVkKSB7XG5cdFx0XHQvLyBub3RoaW5nIHRvIGFuaW1hdGVcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFxuXHRcdF9zdG9wQWxsQW5pbWF0aW9ucygpO1xuXG5cdFx0XG5cdFx0aWYoIV9yZWxlYXNlQW5pbURhdGEpIHtcblx0XHRcdF9yZWxlYXNlQW5pbURhdGEgPSBfaW5pdERyYWdSZWxlYXNlQW5pbWF0aW9uRGF0YSgpO1xuXHRcdH1cblx0XHRcblx0XHRfcmVsZWFzZUFuaW1EYXRhLmNhbGN1bGF0ZVN3aXBlU3BlZWQoJ3gnKTtcblxuXG5cdFx0aWYoX3ZlcnRpY2FsRHJhZ0luaXRpYXRlZCkge1xuXG5cdFx0XHR2YXIgb3BhY2l0eVJhdGlvID0gX2NhbGN1bGF0ZVZlcnRpY2FsRHJhZ09wYWNpdHlSYXRpbygpO1xuXG5cdFx0XHRpZihvcGFjaXR5UmF0aW8gPCBfb3B0aW9ucy52ZXJ0aWNhbERyYWdSYW5nZSkge1xuXHRcdFx0XHRzZWxmLmNsb3NlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgaW5pdGFsUGFuWSA9IF9wYW5PZmZzZXQueSxcblx0XHRcdFx0XHRpbml0aWFsQmdPcGFjaXR5ID0gX2JnT3BhY2l0eTtcblxuXHRcdFx0XHRfYW5pbWF0ZVByb3AoJ3ZlcnRpY2FsRHJhZycsIDAsIDEsIDMwMCwgZnJhbWV3b3JrLmVhc2luZy5jdWJpYy5vdXQsIGZ1bmN0aW9uKG5vdykge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdF9wYW5PZmZzZXQueSA9IChzZWxmLmN1cnJJdGVtLmluaXRpYWxQb3NpdGlvbi55IC0gaW5pdGFsUGFuWSkgKiBub3cgKyBpbml0YWxQYW5ZO1xuXG5cdFx0XHRcdFx0X2FwcGx5QmdPcGFjaXR5KCAgKDEgLSBpbml0aWFsQmdPcGFjaXR5KSAqIG5vdyArIGluaXRpYWxCZ09wYWNpdHkgKTtcblx0XHRcdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRfc2hvdXQoJ29uVmVydGljYWxEcmFnJywgMSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblxuXHRcdC8vIG1haW4gc2Nyb2xsIFxuXHRcdGlmKCAgKF9tYWluU2Nyb2xsU2hpZnRlZCB8fCBfbWFpblNjcm9sbEFuaW1hdGluZykgJiYgbnVtUG9pbnRzID09PSAwKSB7XG5cdFx0XHR2YXIgaXRlbUNoYW5nZWQgPSBfZmluaXNoU3dpcGVNYWluU2Nyb2xsR2VzdHVyZShnZXN0dXJlVHlwZSwgX3JlbGVhc2VBbmltRGF0YSk7XG5cdFx0XHRpZihpdGVtQ2hhbmdlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRnZXN0dXJlVHlwZSA9ICd6b29tUG9pbnRlclVwJztcblx0XHR9XG5cblx0XHQvLyBwcmV2ZW50IHpvb20vcGFuIGFuaW1hdGlvbiB3aGVuIG1haW4gc2Nyb2xsIGFuaW1hdGlvbiBydW5zXG5cdFx0aWYoX21haW5TY3JvbGxBbmltYXRpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0Ly8gQ29tcGxldGUgc2ltcGxlIHpvb20gZ2VzdHVyZSAocmVzZXQgem9vbSBsZXZlbCBpZiBpdCdzIG91dCBvZiB0aGUgYm91bmRzKSAgXG5cdFx0aWYoZ2VzdHVyZVR5cGUgIT09ICdzd2lwZScpIHtcblx0XHRcdF9jb21wbGV0ZVpvb21HZXN0dXJlKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcblx0XHQvLyBDb21wbGV0ZSBwYW4gZ2VzdHVyZSBpZiBtYWluIHNjcm9sbCBpcyBub3Qgc2hpZnRlZCwgYW5kIGl0J3MgcG9zc2libGUgdG8gcGFuIGN1cnJlbnQgaW1hZ2Vcblx0XHRpZighX21haW5TY3JvbGxTaGlmdGVkICYmIF9jdXJyWm9vbUxldmVsID4gc2VsZi5jdXJySXRlbS5maXRSYXRpbykge1xuXHRcdFx0X2NvbXBsZXRlUGFuR2VzdHVyZShfcmVsZWFzZUFuaW1EYXRhKTtcblx0XHR9XG5cdH0sXG5cblxuXHQvLyBSZXR1cm5zIG9iamVjdCB3aXRoIGRhdGEgYWJvdXQgZ2VzdHVyZVxuXHQvLyBJdCdzIGNyZWF0ZWQgb25seSBvbmNlIGFuZCB0aGVuIHJldXNlZFxuXHRfaW5pdERyYWdSZWxlYXNlQW5pbWF0aW9uRGF0YSAgPSBmdW5jdGlvbigpIHtcblx0XHQvLyB0ZW1wIGxvY2FsIHZhcnNcblx0XHR2YXIgbGFzdEZsaWNrRHVyYXRpb24sXG5cdFx0XHR0ZW1wUmVsZWFzZVBvcztcblxuXHRcdC8vIHMgPSB0aGlzXG5cdFx0dmFyIHMgPSB7XG5cdFx0XHRsYXN0RmxpY2tPZmZzZXQ6IHt9LFxuXHRcdFx0bGFzdEZsaWNrRGlzdDoge30sXG5cdFx0XHRsYXN0RmxpY2tTcGVlZDoge30sXG5cdFx0XHRzbG93RG93blJhdGlvOiAge30sXG5cdFx0XHRzbG93RG93blJhdGlvUmV2ZXJzZTogIHt9LFxuXHRcdFx0c3BlZWREZWNlbGVyYXRpb25SYXRpbzogIHt9LFxuXHRcdFx0c3BlZWREZWNlbGVyYXRpb25SYXRpb0FiczogIHt9LFxuXHRcdFx0ZGlzdGFuY2VPZmZzZXQ6ICB7fSxcblx0XHRcdGJhY2tBbmltRGVzdGluYXRpb246IHt9LFxuXHRcdFx0YmFja0FuaW1TdGFydGVkOiB7fSxcblx0XHRcdGNhbGN1bGF0ZVN3aXBlU3BlZWQ6IGZ1bmN0aW9uKGF4aXMpIHtcblx0XHRcdFx0XG5cblx0XHRcdFx0aWYoIF9wb3NQb2ludHMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdGxhc3RGbGlja0R1cmF0aW9uID0gX2dldEN1cnJlbnRUaW1lKCkgLSBfZ2VzdHVyZUNoZWNrU3BlZWRUaW1lICsgNTA7XG5cdFx0XHRcdFx0dGVtcFJlbGVhc2VQb3MgPSBfcG9zUG9pbnRzW19wb3NQb2ludHMubGVuZ3RoLTJdW2F4aXNdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxhc3RGbGlja0R1cmF0aW9uID0gX2dldEN1cnJlbnRUaW1lKCkgLSBfZ2VzdHVyZVN0YXJ0VGltZTsgLy8gdG90YWwgZ2VzdHVyZSBkdXJhdGlvblxuXHRcdFx0XHRcdHRlbXBSZWxlYXNlUG9zID0gX3N0YXJ0UG9pbnRbYXhpc107XG5cdFx0XHRcdH1cblx0XHRcdFx0cy5sYXN0RmxpY2tPZmZzZXRbYXhpc10gPSBfY3VyclBvaW50W2F4aXNdIC0gdGVtcFJlbGVhc2VQb3M7XG5cdFx0XHRcdHMubGFzdEZsaWNrRGlzdFtheGlzXSA9IE1hdGguYWJzKHMubGFzdEZsaWNrT2Zmc2V0W2F4aXNdKTtcblx0XHRcdFx0aWYocy5sYXN0RmxpY2tEaXN0W2F4aXNdID4gMjApIHtcblx0XHRcdFx0XHRzLmxhc3RGbGlja1NwZWVkW2F4aXNdID0gcy5sYXN0RmxpY2tPZmZzZXRbYXhpc10gLyBsYXN0RmxpY2tEdXJhdGlvbjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzLmxhc3RGbGlja1NwZWVkW2F4aXNdID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiggTWF0aC5hYnMocy5sYXN0RmxpY2tTcGVlZFtheGlzXSkgPCAwLjEgKSB7XG5cdFx0XHRcdFx0cy5sYXN0RmxpY2tTcGVlZFtheGlzXSA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHMuc2xvd0Rvd25SYXRpb1theGlzXSA9IDAuOTU7XG5cdFx0XHRcdHMuc2xvd0Rvd25SYXRpb1JldmVyc2VbYXhpc10gPSAxIC0gcy5zbG93RG93blJhdGlvW2F4aXNdO1xuXHRcdFx0XHRzLnNwZWVkRGVjZWxlcmF0aW9uUmF0aW9bYXhpc10gPSAxO1xuXHRcdFx0fSxcblxuXHRcdFx0Y2FsY3VsYXRlT3ZlckJvdW5kc0FuaW1PZmZzZXQ6IGZ1bmN0aW9uKGF4aXMsIHNwZWVkKSB7XG5cdFx0XHRcdGlmKCFzLmJhY2tBbmltU3RhcnRlZFtheGlzXSkge1xuXG5cdFx0XHRcdFx0aWYoX3Bhbk9mZnNldFtheGlzXSA+IF9jdXJyUGFuQm91bmRzLm1pbltheGlzXSkge1xuXHRcdFx0XHRcdFx0cy5iYWNrQW5pbURlc3RpbmF0aW9uW2F4aXNdID0gX2N1cnJQYW5Cb3VuZHMubWluW2F4aXNdO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fSBlbHNlIGlmKF9wYW5PZmZzZXRbYXhpc10gPCBfY3VyclBhbkJvdW5kcy5tYXhbYXhpc10pIHtcblx0XHRcdFx0XHRcdHMuYmFja0FuaW1EZXN0aW5hdGlvbltheGlzXSA9IF9jdXJyUGFuQm91bmRzLm1heFtheGlzXTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZihzLmJhY2tBbmltRGVzdGluYXRpb25bYXhpc10gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0cy5zbG93RG93blJhdGlvW2F4aXNdID0gMC43O1xuXHRcdFx0XHRcdFx0cy5zbG93RG93blJhdGlvUmV2ZXJzZVtheGlzXSA9IDEgLSBzLnNsb3dEb3duUmF0aW9bYXhpc107XG5cdFx0XHRcdFx0XHRpZihzLnNwZWVkRGVjZWxlcmF0aW9uUmF0aW9BYnNbYXhpc10gPCAwLjA1KSB7XG5cblx0XHRcdFx0XHRcdFx0cy5sYXN0RmxpY2tTcGVlZFtheGlzXSA9IDA7XG5cdFx0XHRcdFx0XHRcdHMuYmFja0FuaW1TdGFydGVkW2F4aXNdID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0XHRfYW5pbWF0ZVByb3AoJ2JvdW5jZVpvb21QYW4nK2F4aXMsX3Bhbk9mZnNldFtheGlzXSwgXG5cdFx0XHRcdFx0XHRcdFx0cy5iYWNrQW5pbURlc3RpbmF0aW9uW2F4aXNdLCBcblx0XHRcdFx0XHRcdFx0XHRzcGVlZCB8fCAzMDAsIFxuXHRcdFx0XHRcdFx0XHRcdGZyYW1ld29yay5lYXNpbmcuc2luZS5vdXQsIFxuXHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uKHBvcykge1xuXHRcdFx0XHRcdFx0XHRcdFx0X3Bhbk9mZnNldFtheGlzXSA9IHBvcztcblx0XHRcdFx0XHRcdFx0XHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBSZWR1Y2VzIHRoZSBzcGVlZCBieSBzbG93RG93blJhdGlvIChwZXIgMTBtcylcblx0XHRcdGNhbGN1bGF0ZUFuaW1PZmZzZXQ6IGZ1bmN0aW9uKGF4aXMpIHtcblx0XHRcdFx0aWYoIXMuYmFja0FuaW1TdGFydGVkW2F4aXNdKSB7XG5cdFx0XHRcdFx0cy5zcGVlZERlY2VsZXJhdGlvblJhdGlvW2F4aXNdID0gcy5zcGVlZERlY2VsZXJhdGlvblJhdGlvW2F4aXNdICogKHMuc2xvd0Rvd25SYXRpb1theGlzXSArIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cy5zbG93RG93blJhdGlvUmV2ZXJzZVtheGlzXSAtIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cy5zbG93RG93blJhdGlvUmV2ZXJzZVtheGlzXSAqIHMudGltZURpZmYgLyAxMCk7XG5cblx0XHRcdFx0XHRzLnNwZWVkRGVjZWxlcmF0aW9uUmF0aW9BYnNbYXhpc10gPSBNYXRoLmFicyhzLmxhc3RGbGlja1NwZWVkW2F4aXNdICogcy5zcGVlZERlY2VsZXJhdGlvblJhdGlvW2F4aXNdKTtcblx0XHRcdFx0XHRzLmRpc3RhbmNlT2Zmc2V0W2F4aXNdID0gcy5sYXN0RmxpY2tTcGVlZFtheGlzXSAqIHMuc3BlZWREZWNlbGVyYXRpb25SYXRpb1theGlzXSAqIHMudGltZURpZmY7XG5cdFx0XHRcdFx0X3Bhbk9mZnNldFtheGlzXSArPSBzLmRpc3RhbmNlT2Zmc2V0W2F4aXNdO1xuXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdHBhbkFuaW1Mb29wOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBfYW5pbWF0aW9ucy56b29tUGFuICkge1xuXHRcdFx0XHRcdF9hbmltYXRpb25zLnpvb21QYW4ucmFmID0gX3JlcXVlc3RBRihzLnBhbkFuaW1Mb29wKTtcblxuXHRcdFx0XHRcdHMubm93ID0gX2dldEN1cnJlbnRUaW1lKCk7XG5cdFx0XHRcdFx0cy50aW1lRGlmZiA9IHMubm93IC0gcy5sYXN0Tm93O1xuXHRcdFx0XHRcdHMubGFzdE5vdyA9IHMubm93O1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHMuY2FsY3VsYXRlQW5pbU9mZnNldCgneCcpO1xuXHRcdFx0XHRcdHMuY2FsY3VsYXRlQW5pbU9mZnNldCgneScpO1xuXG5cdFx0XHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRzLmNhbGN1bGF0ZU92ZXJCb3VuZHNBbmltT2Zmc2V0KCd4Jyk7XG5cdFx0XHRcdFx0cy5jYWxjdWxhdGVPdmVyQm91bmRzQW5pbU9mZnNldCgneScpO1xuXG5cblx0XHRcdFx0XHRpZiAocy5zcGVlZERlY2VsZXJhdGlvblJhdGlvQWJzLnggPCAwLjA1ICYmIHMuc3BlZWREZWNlbGVyYXRpb25SYXRpb0Ficy55IDwgMC4wNSkge1xuXG5cdFx0XHRcdFx0XHQvLyByb3VuZCBwYW4gcG9zaXRpb25cblx0XHRcdFx0XHRcdF9wYW5PZmZzZXQueCA9IE1hdGgucm91bmQoX3Bhbk9mZnNldC54KTtcblx0XHRcdFx0XHRcdF9wYW5PZmZzZXQueSA9IE1hdGgucm91bmQoX3Bhbk9mZnNldC55KTtcblx0XHRcdFx0XHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdF9zdG9wQW5pbWF0aW9uKCd6b29tUGFuJyk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiBzO1xuXHR9LFxuXG5cdF9jb21wbGV0ZVBhbkdlc3R1cmUgPSBmdW5jdGlvbihhbmltRGF0YSkge1xuXHRcdC8vIGNhbGN1bGF0ZSBzd2lwZSBzcGVlZCBmb3IgWSBheGlzIChwYWFubmluZylcblx0XHRhbmltRGF0YS5jYWxjdWxhdGVTd2lwZVNwZWVkKCd5Jyk7XG5cblx0XHRfY3VyclBhbkJvdW5kcyA9IHNlbGYuY3Vyckl0ZW0uYm91bmRzO1xuXHRcdFxuXHRcdGFuaW1EYXRhLmJhY2tBbmltRGVzdGluYXRpb24gPSB7fTtcblx0XHRhbmltRGF0YS5iYWNrQW5pbVN0YXJ0ZWQgPSB7fTtcblxuXHRcdC8vIEF2b2lkIGFjY2VsZXJhdGlvbiBhbmltYXRpb24gaWYgc3BlZWQgaXMgdG9vIGxvd1xuXHRcdGlmKE1hdGguYWJzKGFuaW1EYXRhLmxhc3RGbGlja1NwZWVkLngpIDw9IDAuMDUgJiYgTWF0aC5hYnMoYW5pbURhdGEubGFzdEZsaWNrU3BlZWQueSkgPD0gMC4wNSApIHtcblx0XHRcdGFuaW1EYXRhLnNwZWVkRGVjZWxlcmF0aW9uUmF0aW9BYnMueCA9IGFuaW1EYXRhLnNwZWVkRGVjZWxlcmF0aW9uUmF0aW9BYnMueSA9IDA7XG5cblx0XHRcdC8vIFJ1biBwYW4gZHJhZyByZWxlYXNlIGFuaW1hdGlvbi4gRS5nLiBpZiB5b3UgZHJhZyBpbWFnZSBhbmQgcmVsZWFzZSBmaW5nZXIgd2l0aG91dCBtb21lbnR1bS5cblx0XHRcdGFuaW1EYXRhLmNhbGN1bGF0ZU92ZXJCb3VuZHNBbmltT2Zmc2V0KCd4Jyk7XG5cdFx0XHRhbmltRGF0YS5jYWxjdWxhdGVPdmVyQm91bmRzQW5pbU9mZnNldCgneScpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gQW5pbWF0aW9uIGxvb3AgdGhhdCBjb250cm9scyB0aGUgYWNjZWxlcmF0aW9uIGFmdGVyIHBhbiBnZXN0dXJlIGVuZHNcblx0XHRfcmVnaXN0ZXJTdGFydEFuaW1hdGlvbignem9vbVBhbicpO1xuXHRcdGFuaW1EYXRhLmxhc3ROb3cgPSBfZ2V0Q3VycmVudFRpbWUoKTtcblx0XHRhbmltRGF0YS5wYW5BbmltTG9vcCgpO1xuXHR9LFxuXG5cblx0X2ZpbmlzaFN3aXBlTWFpblNjcm9sbEdlc3R1cmUgPSBmdW5jdGlvbihnZXN0dXJlVHlwZSwgX3JlbGVhc2VBbmltRGF0YSkge1xuXHRcdHZhciBpdGVtQ2hhbmdlZDtcblx0XHRpZighX21haW5TY3JvbGxBbmltYXRpbmcpIHtcblx0XHRcdF9jdXJyWm9vbWVkSXRlbUluZGV4ID0gX2N1cnJlbnRJdGVtSW5kZXg7XG5cdFx0fVxuXG5cblx0XHRcblx0XHR2YXIgaXRlbXNEaWZmO1xuXG5cdFx0aWYoZ2VzdHVyZVR5cGUgPT09ICdzd2lwZScpIHtcblx0XHRcdHZhciB0b3RhbFNoaWZ0RGlzdCA9IF9jdXJyUG9pbnQueCAtIF9zdGFydFBvaW50LngsXG5cdFx0XHRcdGlzRmFzdExhc3RGbGljayA9IF9yZWxlYXNlQW5pbURhdGEubGFzdEZsaWNrRGlzdC54IDwgMTA7XG5cblx0XHRcdC8vIGlmIGNvbnRhaW5lciBpcyBzaGlmdGVkIGZvciBtb3JlIHRoYW4gTUlOX1NXSVBFX0RJU1RBTkNFLCBcblx0XHRcdC8vIGFuZCBsYXN0IGZsaWNrIGdlc3R1cmUgd2FzIGluIHJpZ2h0IGRpcmVjdGlvblxuXHRcdFx0aWYodG90YWxTaGlmdERpc3QgPiBNSU5fU1dJUEVfRElTVEFOQ0UgJiYgXG5cdFx0XHRcdChpc0Zhc3RMYXN0RmxpY2sgfHwgX3JlbGVhc2VBbmltRGF0YS5sYXN0RmxpY2tPZmZzZXQueCA+IDIwKSApIHtcblx0XHRcdFx0Ly8gZ28gdG8gcHJldiBpdGVtXG5cdFx0XHRcdGl0ZW1zRGlmZiA9IC0xO1xuXHRcdFx0fSBlbHNlIGlmKHRvdGFsU2hpZnREaXN0IDwgLU1JTl9TV0lQRV9ESVNUQU5DRSAmJiBcblx0XHRcdFx0KGlzRmFzdExhc3RGbGljayB8fCBfcmVsZWFzZUFuaW1EYXRhLmxhc3RGbGlja09mZnNldC54IDwgLTIwKSApIHtcblx0XHRcdFx0Ly8gZ28gdG8gbmV4dCBpdGVtXG5cdFx0XHRcdGl0ZW1zRGlmZiA9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIG5leHRDaXJjbGU7XG5cblx0XHRpZihpdGVtc0RpZmYpIHtcblx0XHRcdFxuXHRcdFx0X2N1cnJlbnRJdGVtSW5kZXggKz0gaXRlbXNEaWZmO1xuXG5cdFx0XHRpZihfY3VycmVudEl0ZW1JbmRleCA8IDApIHtcblx0XHRcdFx0X2N1cnJlbnRJdGVtSW5kZXggPSBfb3B0aW9ucy5sb29wID8gX2dldE51bUl0ZW1zKCktMSA6IDA7XG5cdFx0XHRcdG5leHRDaXJjbGUgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmKF9jdXJyZW50SXRlbUluZGV4ID49IF9nZXROdW1JdGVtcygpKSB7XG5cdFx0XHRcdF9jdXJyZW50SXRlbUluZGV4ID0gX29wdGlvbnMubG9vcCA/IDAgOiBfZ2V0TnVtSXRlbXMoKS0xO1xuXHRcdFx0XHRuZXh0Q2lyY2xlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIW5leHRDaXJjbGUgfHwgX29wdGlvbnMubG9vcCkge1xuXHRcdFx0XHRfaW5kZXhEaWZmICs9IGl0ZW1zRGlmZjtcblx0XHRcdFx0X2N1cnJQb3NpdGlvbkluZGV4IC09IGl0ZW1zRGlmZjtcblx0XHRcdFx0aXRlbUNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0XG5cblx0XHRcdFxuXHRcdH1cblxuXHRcdHZhciBhbmltYXRlVG9YID0gX3NsaWRlU2l6ZS54ICogX2N1cnJQb3NpdGlvbkluZGV4O1xuXHRcdHZhciBhbmltYXRlVG9EaXN0ID0gTWF0aC5hYnMoIGFuaW1hdGVUb1ggLSBfbWFpblNjcm9sbFBvcy54ICk7XG5cdFx0dmFyIGZpbmlzaEFuaW1EdXJhdGlvbjtcblxuXG5cdFx0aWYoIWl0ZW1DaGFuZ2VkICYmIGFuaW1hdGVUb1ggPiBfbWFpblNjcm9sbFBvcy54ICE9PSBfcmVsZWFzZUFuaW1EYXRhLmxhc3RGbGlja1NwZWVkLnggPiAwKSB7XG5cdFx0XHQvLyBcInJldHVybiB0byBjdXJyZW50XCIgZHVyYXRpb24sIGUuZy4gd2hlbiBkcmFnZ2luZyBmcm9tIHNsaWRlIDAgdG8gLTFcblx0XHRcdGZpbmlzaEFuaW1EdXJhdGlvbiA9IDMzMzsgXG5cdFx0fSBlbHNlIHtcblx0XHRcdGZpbmlzaEFuaW1EdXJhdGlvbiA9IE1hdGguYWJzKF9yZWxlYXNlQW5pbURhdGEubGFzdEZsaWNrU3BlZWQueCkgPiAwID8gXG5cdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlVG9EaXN0IC8gTWF0aC5hYnMoX3JlbGVhc2VBbmltRGF0YS5sYXN0RmxpY2tTcGVlZC54KSA6IFxuXHRcdFx0XHRcdFx0XHRcdFx0MzMzO1xuXG5cdFx0XHRmaW5pc2hBbmltRHVyYXRpb24gPSBNYXRoLm1pbihmaW5pc2hBbmltRHVyYXRpb24sIDQwMCk7XG5cdFx0XHRmaW5pc2hBbmltRHVyYXRpb24gPSBNYXRoLm1heChmaW5pc2hBbmltRHVyYXRpb24sIDI1MCk7XG5cdFx0fVxuXG5cdFx0aWYoX2N1cnJab29tZWRJdGVtSW5kZXggPT09IF9jdXJyZW50SXRlbUluZGV4KSB7XG5cdFx0XHRpdGVtQ2hhbmdlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRcblx0XHRfbWFpblNjcm9sbEFuaW1hdGluZyA9IHRydWU7XG5cdFx0XG5cdFx0X3Nob3V0KCdtYWluU2Nyb2xsQW5pbVN0YXJ0Jyk7XG5cblx0XHRfYW5pbWF0ZVByb3AoJ21haW5TY3JvbGwnLCBfbWFpblNjcm9sbFBvcy54LCBhbmltYXRlVG9YLCBmaW5pc2hBbmltRHVyYXRpb24sIGZyYW1ld29yay5lYXNpbmcuY3ViaWMub3V0LCBcblx0XHRcdF9tb3ZlTWFpblNjcm9sbCxcblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfc3RvcEFsbEFuaW1hdGlvbnMoKTtcblx0XHRcdFx0X21haW5TY3JvbGxBbmltYXRpbmcgPSBmYWxzZTtcblx0XHRcdFx0X2N1cnJab29tZWRJdGVtSW5kZXggPSAtMTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKGl0ZW1DaGFuZ2VkIHx8IF9jdXJyWm9vbWVkSXRlbUluZGV4ICE9PSBfY3VycmVudEl0ZW1JbmRleCkge1xuXHRcdFx0XHRcdHNlbGYudXBkYXRlQ3Vyckl0ZW0oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0X3Nob3V0KCdtYWluU2Nyb2xsQW5pbUNvbXBsZXRlJyk7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdGlmKGl0ZW1DaGFuZ2VkKSB7XG5cdFx0XHRzZWxmLnVwZGF0ZUN1cnJJdGVtKHRydWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpdGVtQ2hhbmdlZDtcblx0fSxcblxuXHRfY2FsY3VsYXRlWm9vbUxldmVsID0gZnVuY3Rpb24odG91Y2hlc0Rpc3RhbmNlKSB7XG5cdFx0cmV0dXJuICAxIC8gX3N0YXJ0UG9pbnRzRGlzdGFuY2UgKiB0b3VjaGVzRGlzdGFuY2UgKiBfc3RhcnRab29tTGV2ZWw7XG5cdH0sXG5cblx0Ly8gUmVzZXRzIHpvb20gaWYgaXQncyBvdXQgb2YgYm91bmRzXG5cdF9jb21wbGV0ZVpvb21HZXN0dXJlID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGRlc3Rab29tTGV2ZWwgPSBfY3Vyclpvb21MZXZlbCxcblx0XHRcdG1pblpvb21MZXZlbCA9IF9nZXRNaW5ab29tTGV2ZWwoKSxcblx0XHRcdG1heFpvb21MZXZlbCA9IF9nZXRNYXhab29tTGV2ZWwoKTtcblxuXHRcdGlmICggX2N1cnJab29tTGV2ZWwgPCBtaW5ab29tTGV2ZWwgKSB7XG5cdFx0XHRkZXN0Wm9vbUxldmVsID0gbWluWm9vbUxldmVsO1xuXHRcdH0gZWxzZSBpZiAoIF9jdXJyWm9vbUxldmVsID4gbWF4Wm9vbUxldmVsICkge1xuXHRcdFx0ZGVzdFpvb21MZXZlbCA9IG1heFpvb21MZXZlbDtcblx0XHR9XG5cblx0XHR2YXIgZGVzdE9wYWNpdHkgPSAxLFxuXHRcdFx0b25VcGRhdGUsXG5cdFx0XHRpbml0aWFsT3BhY2l0eSA9IF9iZ09wYWNpdHk7XG5cblx0XHRpZihfb3BhY2l0eUNoYW5nZWQgJiYgIV9pc1pvb21pbmdJbiAmJiAhX3dhc092ZXJJbml0aWFsWm9vbSAmJiBfY3Vyclpvb21MZXZlbCA8IG1pblpvb21MZXZlbCkge1xuXHRcdFx0Ly9fY2xvc2VkQnlTY3JvbGwgPSB0cnVlO1xuXHRcdFx0c2VsZi5jbG9zZSgpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYoX29wYWNpdHlDaGFuZ2VkKSB7XG5cdFx0XHRvblVwZGF0ZSA9IGZ1bmN0aW9uKG5vdykge1xuXHRcdFx0XHRfYXBwbHlCZ09wYWNpdHkoICAoZGVzdE9wYWNpdHkgLSBpbml0aWFsT3BhY2l0eSkgKiBub3cgKyBpbml0aWFsT3BhY2l0eSApO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRzZWxmLnpvb21UbyhkZXN0Wm9vbUxldmVsLCAwLCAyMDAsICBmcmFtZXdvcmsuZWFzaW5nLmN1YmljLm91dCwgb25VcGRhdGUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cbl9yZWdpc3Rlck1vZHVsZSgnR2VzdHVyZXMnLCB7XG5cdHB1YmxpY01ldGhvZHM6IHtcblxuXHRcdGluaXRHZXN0dXJlczogZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIGhlbHBlciBmdW5jdGlvbiB0aGF0IGJ1aWxkcyB0b3VjaC9wb2ludGVyL21vdXNlIGV2ZW50c1xuXHRcdFx0dmFyIGFkZEV2ZW50TmFtZXMgPSBmdW5jdGlvbihwcmVmLCBkb3duLCBtb3ZlLCB1cCwgY2FuY2VsKSB7XG5cdFx0XHRcdF9kcmFnU3RhcnRFdmVudCA9IHByZWYgKyBkb3duO1xuXHRcdFx0XHRfZHJhZ01vdmVFdmVudCA9IHByZWYgKyBtb3ZlO1xuXHRcdFx0XHRfZHJhZ0VuZEV2ZW50ID0gcHJlZiArIHVwO1xuXHRcdFx0XHRpZihjYW5jZWwpIHtcblx0XHRcdFx0XHRfZHJhZ0NhbmNlbEV2ZW50ID0gcHJlZiArIGNhbmNlbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfZHJhZ0NhbmNlbEV2ZW50ID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdF9wb2ludGVyRXZlbnRFbmFibGVkID0gX2ZlYXR1cmVzLnBvaW50ZXJFdmVudDtcblx0XHRcdGlmKF9wb2ludGVyRXZlbnRFbmFibGVkICYmIF9mZWF0dXJlcy50b3VjaCkge1xuXHRcdFx0XHQvLyB3ZSBkb24ndCBuZWVkIHRvdWNoIGV2ZW50cywgaWYgYnJvd3NlciBzdXBwb3J0cyBwb2ludGVyIGV2ZW50c1xuXHRcdFx0XHRfZmVhdHVyZXMudG91Y2ggPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoX3BvaW50ZXJFdmVudEVuYWJsZWQpIHtcblx0XHRcdFx0aWYobmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQpIHtcblx0XHRcdFx0XHQvLyBJRTEwIHBvaW50ZXIgZXZlbnRzIGFyZSBjYXNlLXNlbnNpdGl2ZVxuXHRcdFx0XHRcdGFkZEV2ZW50TmFtZXMoJ01TUG9pbnRlcicsICdEb3duJywgJ01vdmUnLCAnVXAnLCAnQ2FuY2VsJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWRkRXZlbnROYW1lcygncG9pbnRlcicsICdkb3duJywgJ21vdmUnLCAndXAnLCAnY2FuY2VsJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZihfZmVhdHVyZXMudG91Y2gpIHtcblx0XHRcdFx0YWRkRXZlbnROYW1lcygndG91Y2gnLCAnc3RhcnQnLCAnbW92ZScsICdlbmQnLCAnY2FuY2VsJyk7XG5cdFx0XHRcdF9saWtlbHlUb3VjaERldmljZSA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhZGRFdmVudE5hbWVzKCdtb3VzZScsICdkb3duJywgJ21vdmUnLCAndXAnKTtcdFxuXHRcdFx0fVxuXG5cdFx0XHRfdXBNb3ZlRXZlbnRzID0gX2RyYWdNb3ZlRXZlbnQgKyAnICcgKyBfZHJhZ0VuZEV2ZW50ICArICcgJyArICBfZHJhZ0NhbmNlbEV2ZW50O1xuXHRcdFx0X2Rvd25FdmVudHMgPSBfZHJhZ1N0YXJ0RXZlbnQ7XG5cblx0XHRcdGlmKF9wb2ludGVyRXZlbnRFbmFibGVkICYmICFfbGlrZWx5VG91Y2hEZXZpY2UpIHtcblx0XHRcdFx0X2xpa2VseVRvdWNoRGV2aWNlID0gKG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDEpIHx8IChuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyA+IDEpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gbWFrZSB2YXJpYWJsZSBwdWJsaWNcblx0XHRcdHNlbGYubGlrZWx5VG91Y2hEZXZpY2UgPSBfbGlrZWx5VG91Y2hEZXZpY2U7IFxuXHRcdFx0XG5cdFx0XHRfZ2xvYmFsRXZlbnRIYW5kbGVyc1tfZHJhZ1N0YXJ0RXZlbnRdID0gX29uRHJhZ1N0YXJ0O1xuXHRcdFx0X2dsb2JhbEV2ZW50SGFuZGxlcnNbX2RyYWdNb3ZlRXZlbnRdID0gX29uRHJhZ01vdmU7XG5cdFx0XHRfZ2xvYmFsRXZlbnRIYW5kbGVyc1tfZHJhZ0VuZEV2ZW50XSA9IF9vbkRyYWdSZWxlYXNlOyAvLyB0aGUgS3Jha2VuXG5cblx0XHRcdGlmKF9kcmFnQ2FuY2VsRXZlbnQpIHtcblx0XHRcdFx0X2dsb2JhbEV2ZW50SGFuZGxlcnNbX2RyYWdDYW5jZWxFdmVudF0gPSBfZ2xvYmFsRXZlbnRIYW5kbGVyc1tfZHJhZ0VuZEV2ZW50XTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQmluZCBtb3VzZSBldmVudHMgb24gZGV2aWNlIHdpdGggZGV0ZWN0ZWQgaGFyZHdhcmUgdG91Y2ggc3VwcG9ydCwgaW4gY2FzZSBpdCBzdXBwb3J0cyBtdWx0aXBsZSB0eXBlcyBvZiBpbnB1dC5cblx0XHRcdGlmKF9mZWF0dXJlcy50b3VjaCkge1xuXHRcdFx0XHRfZG93bkV2ZW50cyArPSAnIG1vdXNlZG93bic7XG5cdFx0XHRcdF91cE1vdmVFdmVudHMgKz0gJyBtb3VzZW1vdmUgbW91c2V1cCc7XG5cdFx0XHRcdF9nbG9iYWxFdmVudEhhbmRsZXJzLm1vdXNlZG93biA9IF9nbG9iYWxFdmVudEhhbmRsZXJzW19kcmFnU3RhcnRFdmVudF07XG5cdFx0XHRcdF9nbG9iYWxFdmVudEhhbmRsZXJzLm1vdXNlbW92ZSA9IF9nbG9iYWxFdmVudEhhbmRsZXJzW19kcmFnTW92ZUV2ZW50XTtcblx0XHRcdFx0X2dsb2JhbEV2ZW50SGFuZGxlcnMubW91c2V1cCA9IF9nbG9iYWxFdmVudEhhbmRsZXJzW19kcmFnRW5kRXZlbnRdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighX2xpa2VseVRvdWNoRGV2aWNlKSB7XG5cdFx0XHRcdC8vIGRvbid0IGFsbG93IHBhbiB0byBuZXh0IHNsaWRlIGZyb20gem9vbWVkIHN0YXRlIG9uIERlc2t0b3Bcblx0XHRcdFx0X29wdGlvbnMuYWxsb3dQYW5Ub05leHQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxufSk7XG5cblxuLyo+Pmdlc3R1cmVzKi9cblxuLyo+PnNob3ctaGlkZS10cmFuc2l0aW9uKi9cbi8qKlxuICogc2hvdy1oaWRlLXRyYW5zaXRpb24uanM6XG4gKlxuICogTWFuYWdlcyBpbml0aWFsIG9wZW5pbmcgb3IgY2xvc2luZyB0cmFuc2l0aW9uLlxuICpcbiAqIElmIHlvdSdyZSBub3QgcGxhbm5pbmcgdG8gdXNlIHRyYW5zaXRpb24gZm9yIGdhbGxlcnkgYXQgYWxsLFxuICogeW91IG1heSBzZXQgb3B0aW9ucyBoaWRlQW5pbWF0aW9uRHVyYXRpb24gYW5kIHNob3dBbmltYXRpb25EdXJhdGlvbiB0byAwLFxuICogYW5kIGp1c3QgZGVsZXRlIHN0YXJ0QW5pbWF0aW9uIGZ1bmN0aW9uLlxuICogXG4gKi9cblxuXG52YXIgX3Nob3dPckhpZGVUaW1lb3V0LFxuXHRfc2hvd09ySGlkZSA9IGZ1bmN0aW9uKGl0ZW0sIGltZywgb3V0LCBjb21wbGV0ZUZuKSB7XG5cblx0XHRpZihfc2hvd09ySGlkZVRpbWVvdXQpIHtcblx0XHRcdGNsZWFyVGltZW91dChfc2hvd09ySGlkZVRpbWVvdXQpO1xuXHRcdH1cblxuXHRcdF9pbml0aWFsWm9vbVJ1bm5pbmcgPSB0cnVlO1xuXHRcdF9pbml0aWFsQ29udGVudFNldCA9IHRydWU7XG5cdFx0XG5cdFx0Ly8gZGltZW5zaW9ucyBvZiBzbWFsbCB0aHVtYm5haWwge3g6LHk6LHc6fS5cblx0XHQvLyBIZWlnaHQgaXMgb3B0aW9uYWwsIGFzIGNhbGN1bGF0ZWQgYmFzZWQgb24gbGFyZ2UgaW1hZ2UuXG5cdFx0dmFyIHRodW1iQm91bmRzOyBcblx0XHRpZihpdGVtLmluaXRpYWxMYXlvdXQpIHtcblx0XHRcdHRodW1iQm91bmRzID0gaXRlbS5pbml0aWFsTGF5b3V0O1xuXHRcdFx0aXRlbS5pbml0aWFsTGF5b3V0ID0gbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGh1bWJCb3VuZHMgPSBfb3B0aW9ucy5nZXRUaHVtYkJvdW5kc0ZuICYmIF9vcHRpb25zLmdldFRodW1iQm91bmRzRm4oX2N1cnJlbnRJdGVtSW5kZXgpO1xuXHRcdH1cblxuXHRcdHZhciBkdXJhdGlvbiA9IG91dCA/IF9vcHRpb25zLmhpZGVBbmltYXRpb25EdXJhdGlvbiA6IF9vcHRpb25zLnNob3dBbmltYXRpb25EdXJhdGlvbjtcblxuXHRcdHZhciBvbkNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRfc3RvcEFuaW1hdGlvbignaW5pdGlhbFpvb20nKTtcblx0XHRcdGlmKCFvdXQpIHtcblx0XHRcdFx0X2FwcGx5QmdPcGFjaXR5KDEpO1xuXHRcdFx0XHRpZihpbWcpIHtcblx0XHRcdFx0XHRpbWcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZnJhbWV3b3JrLmFkZENsYXNzKHRlbXBsYXRlLCAncHN3cC0tYW5pbWF0ZWQtaW4nKTtcblx0XHRcdFx0X3Nob3V0KCdpbml0aWFsWm9vbScgKyAob3V0ID8gJ091dEVuZCcgOiAnSW5FbmQnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZWxmLnRlbXBsYXRlLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcblx0XHRcdFx0c2VsZi5iZy5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKGNvbXBsZXRlRm4pIHtcblx0XHRcdFx0Y29tcGxldGVGbigpO1xuXHRcdFx0fVxuXHRcdFx0X2luaXRpYWxab29tUnVubmluZyA9IGZhbHNlO1xuXHRcdH07XG5cblx0XHQvLyBpZiBib3VuZHMgYXJlbid0IHByb3ZpZGVkLCBqdXN0IG9wZW4gZ2FsbGVyeSB3aXRob3V0IGFuaW1hdGlvblxuXHRcdGlmKCFkdXJhdGlvbiB8fCAhdGh1bWJCb3VuZHMgfHwgdGh1bWJCb3VuZHMueCA9PT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdF9zaG91dCgnaW5pdGlhbFpvb20nICsgKG91dCA/ICdPdXQnIDogJ0luJykgKTtcblxuXHRcdFx0X2N1cnJab29tTGV2ZWwgPSBpdGVtLmluaXRpYWxab29tTGV2ZWw7XG5cdFx0XHRfZXF1YWxpemVQb2ludHMoX3Bhbk9mZnNldCwgIGl0ZW0uaW5pdGlhbFBvc2l0aW9uICk7XG5cdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xuXG5cdFx0XHR0ZW1wbGF0ZS5zdHlsZS5vcGFjaXR5ID0gb3V0ID8gMCA6IDE7XG5cdFx0XHRfYXBwbHlCZ09wYWNpdHkoMSk7XG5cblx0XHRcdGlmKGR1cmF0aW9uKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0b25Db21wbGV0ZSgpO1xuXHRcdFx0XHR9LCBkdXJhdGlvbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbkNvbXBsZXRlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgc3RhcnRBbmltYXRpb24gPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBjbG9zZVdpdGhSYWYgPSBfY2xvc2VkQnlTY3JvbGwsXG5cdFx0XHRcdGZhZGVFdmVyeXRoaW5nID0gIXNlbGYuY3Vyckl0ZW0uc3JjIHx8IHNlbGYuY3Vyckl0ZW0ubG9hZEVycm9yIHx8IF9vcHRpb25zLnNob3dIaWRlT3BhY2l0eTtcblx0XHRcdFxuXHRcdFx0Ly8gYXBwbHkgaHctYWNjZWxlcmF0aW9uIHRvIGltYWdlXG5cdFx0XHRpZihpdGVtLm1pbmlJbWcpIHtcblx0XHRcdFx0aXRlbS5taW5pSW1nLnN0eWxlLndlYmtpdEJhY2tmYWNlVmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighb3V0KSB7XG5cdFx0XHRcdF9jdXJyWm9vbUxldmVsID0gdGh1bWJCb3VuZHMudyAvIGl0ZW0udztcblx0XHRcdFx0X3Bhbk9mZnNldC54ID0gdGh1bWJCb3VuZHMueDtcblx0XHRcdFx0X3Bhbk9mZnNldC55ID0gdGh1bWJCb3VuZHMueSAtIF9pbml0YWxXaW5kb3dTY3JvbGxZO1xuXG5cdFx0XHRcdHNlbGZbZmFkZUV2ZXJ5dGhpbmcgPyAndGVtcGxhdGUnIDogJ2JnJ10uc3R5bGUub3BhY2l0eSA9IDAuMDAxO1xuXHRcdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xuXHRcdFx0fVxuXG5cdFx0XHRfcmVnaXN0ZXJTdGFydEFuaW1hdGlvbignaW5pdGlhbFpvb20nKTtcblx0XHRcdFxuXHRcdFx0aWYob3V0ICYmICFjbG9zZVdpdGhSYWYpIHtcblx0XHRcdFx0ZnJhbWV3b3JrLnJlbW92ZUNsYXNzKHRlbXBsYXRlLCAncHN3cC0tYW5pbWF0ZWQtaW4nKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoZmFkZUV2ZXJ5dGhpbmcpIHtcblx0XHRcdFx0aWYob3V0KSB7XG5cdFx0XHRcdFx0ZnJhbWV3b3JrWyAoY2xvc2VXaXRoUmFmID8gJ3JlbW92ZScgOiAnYWRkJykgKyAnQ2xhc3MnIF0odGVtcGxhdGUsICdwc3dwLS1hbmltYXRlX29wYWNpdHknKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0ZnJhbWV3b3JrLmFkZENsYXNzKHRlbXBsYXRlLCAncHN3cC0tYW5pbWF0ZV9vcGFjaXR5Jyk7XG5cdFx0XHRcdFx0fSwgMzApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdF9zaG93T3JIaWRlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0X3Nob3V0KCdpbml0aWFsWm9vbScgKyAob3V0ID8gJ091dCcgOiAnSW4nKSApO1xuXHRcdFx0XHRcblxuXHRcdFx0XHRpZighb3V0KSB7XG5cblx0XHRcdFx0XHQvLyBcImluXCIgYW5pbWF0aW9uIGFsd2F5cyB1c2VzIENTUyB0cmFuc2l0aW9ucyAoaW5zdGVhZCBvZiByQUYpLlxuXHRcdFx0XHRcdC8vIENTUyB0cmFuc2l0aW9uIHdvcmsgZmFzdGVyIGhlcmUsIFxuXHRcdFx0XHRcdC8vIGFzIGRldmVsb3BlciBtYXkgYWxzbyB3YW50IHRvIGFuaW1hdGUgb3RoZXIgdGhpbmdzLCBcblx0XHRcdFx0XHQvLyBsaWtlIHVpIG9uIHRvcCBvZiBzbGlkaW5nIGFyZWEsIHdoaWNoIGNhbiBiZSBhbmltYXRlZCBqdXN0IHZpYSBDU1Ncblx0XHRcdFx0XHRcblx0XHRcdFx0XHRfY3Vyclpvb21MZXZlbCA9IGl0ZW0uaW5pdGlhbFpvb21MZXZlbDtcblx0XHRcdFx0XHRfZXF1YWxpemVQb2ludHMoX3Bhbk9mZnNldCwgIGl0ZW0uaW5pdGlhbFBvc2l0aW9uICk7XG5cdFx0XHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblx0XHRcdFx0XHRfYXBwbHlCZ09wYWNpdHkoMSk7XG5cblx0XHRcdFx0XHRpZihmYWRlRXZlcnl0aGluZykge1xuXHRcdFx0XHRcdFx0dGVtcGxhdGUuc3R5bGUub3BhY2l0eSA9IDE7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdF9hcHBseUJnT3BhY2l0eSgxKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRfc2hvd09ySGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uQ29tcGxldGUsIGR1cmF0aW9uICsgMjApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Ly8gXCJvdXRcIiBhbmltYXRpb24gdXNlcyByQUYgb25seSB3aGVuIFBob3RvU3dpcGUgaXMgY2xvc2VkIGJ5IGJyb3dzZXIgc2Nyb2xsLCB0byByZWNhbGN1bGF0ZSBwb3NpdGlvblxuXHRcdFx0XHRcdHZhciBkZXN0Wm9vbUxldmVsID0gdGh1bWJCb3VuZHMudyAvIGl0ZW0udyxcblx0XHRcdFx0XHRcdGluaXRpYWxQYW5PZmZzZXQgPSB7XG5cdFx0XHRcdFx0XHRcdHg6IF9wYW5PZmZzZXQueCxcblx0XHRcdFx0XHRcdFx0eTogX3Bhbk9mZnNldC55XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0aW5pdGlhbFpvb21MZXZlbCA9IF9jdXJyWm9vbUxldmVsLFxuXHRcdFx0XHRcdFx0aW5pdGFsQmdPcGFjaXR5ID0gX2JnT3BhY2l0eSxcblx0XHRcdFx0XHRcdG9uVXBkYXRlID0gZnVuY3Rpb24obm93KSB7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRpZihub3cgPT09IDEpIHtcblx0XHRcdFx0XHRcdFx0XHRfY3Vyclpvb21MZXZlbCA9IGRlc3Rab29tTGV2ZWw7XG5cdFx0XHRcdFx0XHRcdFx0X3Bhbk9mZnNldC54ID0gdGh1bWJCb3VuZHMueDtcblx0XHRcdFx0XHRcdFx0XHRfcGFuT2Zmc2V0LnkgPSB0aHVtYkJvdW5kcy55ICAtIF9jdXJyZW50V2luZG93U2Nyb2xsWTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRfY3Vyclpvb21MZXZlbCA9IChkZXN0Wm9vbUxldmVsIC0gaW5pdGlhbFpvb21MZXZlbCkgKiBub3cgKyBpbml0aWFsWm9vbUxldmVsO1xuXHRcdFx0XHRcdFx0XHRcdF9wYW5PZmZzZXQueCA9ICh0aHVtYkJvdW5kcy54IC0gaW5pdGlhbFBhbk9mZnNldC54KSAqIG5vdyArIGluaXRpYWxQYW5PZmZzZXQueDtcblx0XHRcdFx0XHRcdFx0XHRfcGFuT2Zmc2V0LnkgPSAodGh1bWJCb3VuZHMueSAtIF9jdXJyZW50V2luZG93U2Nyb2xsWSAtIGluaXRpYWxQYW5PZmZzZXQueSkgKiBub3cgKyBpbml0aWFsUGFuT2Zmc2V0Lnk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCk7XG5cdFx0XHRcdFx0XHRcdGlmKGZhZGVFdmVyeXRoaW5nKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGUuc3R5bGUub3BhY2l0eSA9IDEgLSBub3c7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0X2FwcGx5QmdPcGFjaXR5KCBpbml0YWxCZ09wYWNpdHkgLSBub3cgKiBpbml0YWxCZ09wYWNpdHkgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdGlmKGNsb3NlV2l0aFJhZikge1xuXHRcdFx0XHRcdFx0X2FuaW1hdGVQcm9wKCdpbml0aWFsWm9vbScsIDAsIDEsIGR1cmF0aW9uLCBmcmFtZXdvcmsuZWFzaW5nLmN1YmljLm91dCwgb25VcGRhdGUsIG9uQ29tcGxldGUpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRvblVwZGF0ZSgxKTtcblx0XHRcdFx0XHRcdF9zaG93T3JIaWRlVGltZW91dCA9IHNldFRpbWVvdXQob25Db21wbGV0ZSwgZHVyYXRpb24gKyAyMCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcblx0XHRcdH0sIG91dCA/IDI1IDogOTApOyAvLyBNYWluIHB1cnBvc2Ugb2YgdGhpcyBkZWxheSBpcyB0byBnaXZlIGJyb3dzZXIgdGltZSB0byBwYWludCBhbmRcblx0XHRcdFx0XHQvLyBjcmVhdGUgY29tcG9zaXRlIGxheWVycyBvZiBQaG90b1N3aXBlIFVJIHBhcnRzIChiYWNrZ3JvdW5kLCBjb250cm9scywgY2FwdGlvbiwgYXJyb3dzKS5cblx0XHRcdFx0XHQvLyBXaGljaCBhdm9pZHMgbGFnIGF0IHRoZSBiZWdpbm5pbmcgb2Ygc2NhbGUgdHJhbnNpdGlvbi5cblx0XHR9O1xuXHRcdHN0YXJ0QW5pbWF0aW9uKCk7XG5cblx0XHRcblx0fTtcblxuLyo+PnNob3ctaGlkZS10cmFuc2l0aW9uKi9cblxuLyo+Pml0ZW1zLWNvbnRyb2xsZXIqL1xuLyoqXG4qXG4qIENvbnRyb2xsZXIgbWFuYWdlcyBnYWxsZXJ5IGl0ZW1zLCB0aGVpciBkaW1lbnNpb25zLCBhbmQgdGhlaXIgY29udGVudC5cbiogXG4qL1xuXG52YXIgX2l0ZW1zLFxuXHRfdGVtcFBhbkFyZWFTaXplID0ge30sXG5cdF9pbWFnZXNUb0FwcGVuZFBvb2wgPSBbXSxcblx0X2luaXRpYWxDb250ZW50U2V0LFxuXHRfaW5pdGlhbFpvb21SdW5uaW5nLFxuXHRfY29udHJvbGxlckRlZmF1bHRPcHRpb25zID0ge1xuXHRcdGluZGV4OiAwLFxuXHRcdGVycm9yTXNnOiAnPGRpdiBjbGFzcz1cInBzd3BfX2Vycm9yLW1zZ1wiPjxhIGhyZWY9XCIldXJsJVwiIHRhcmdldD1cIl9ibGFua1wiPlRoZSBpbWFnZTwvYT4gY291bGQgbm90IGJlIGxvYWRlZC48L2Rpdj4nLFxuXHRcdGZvcmNlUHJvZ3Jlc3NpdmVMb2FkaW5nOiBmYWxzZSwgLy8gVE9ET1xuXHRcdHByZWxvYWQ6IFsxLDFdLFxuXHRcdGdldE51bUl0ZW1zRm46IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIF9pdGVtcy5sZW5ndGg7XG5cdFx0fVxuXHR9O1xuXG5cbnZhciBfZ2V0SXRlbUF0LFxuXHRfZ2V0TnVtSXRlbXMsXG5cdF9pbml0aWFsSXNMb29wLFxuXHRfZ2V0WmVyb0JvdW5kcyA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjZW50ZXI6e3g6MCx5OjB9LCBcblx0XHRcdG1heDp7eDowLHk6MH0sIFxuXHRcdFx0bWluOnt4OjAseTowfVxuXHRcdH07XG5cdH0sXG5cdF9jYWxjdWxhdGVTaW5nbGVJdGVtUGFuQm91bmRzID0gZnVuY3Rpb24oaXRlbSwgcmVhbFBhbkVsZW1lbnRXLCByZWFsUGFuRWxlbWVudEggKSB7XG5cdFx0dmFyIGJvdW5kcyA9IGl0ZW0uYm91bmRzO1xuXG5cdFx0Ly8gcG9zaXRpb24gb2YgZWxlbWVudCB3aGVuIGl0J3MgY2VudGVyZWRcblx0XHRib3VuZHMuY2VudGVyLnggPSBNYXRoLnJvdW5kKChfdGVtcFBhbkFyZWFTaXplLnggLSByZWFsUGFuRWxlbWVudFcpIC8gMik7XG5cdFx0Ym91bmRzLmNlbnRlci55ID0gTWF0aC5yb3VuZCgoX3RlbXBQYW5BcmVhU2l6ZS55IC0gcmVhbFBhbkVsZW1lbnRIKSAvIDIpICsgaXRlbS52R2FwLnRvcDtcblxuXHRcdC8vIG1heGltdW0gcGFuIHBvc2l0aW9uXG5cdFx0Ym91bmRzLm1heC54ID0gKHJlYWxQYW5FbGVtZW50VyA+IF90ZW1wUGFuQXJlYVNpemUueCkgPyBcblx0XHRcdFx0XHRcdFx0TWF0aC5yb3VuZChfdGVtcFBhbkFyZWFTaXplLnggLSByZWFsUGFuRWxlbWVudFcpIDogXG5cdFx0XHRcdFx0XHRcdGJvdW5kcy5jZW50ZXIueDtcblx0XHRcblx0XHRib3VuZHMubWF4LnkgPSAocmVhbFBhbkVsZW1lbnRIID4gX3RlbXBQYW5BcmVhU2l6ZS55KSA/IFxuXHRcdFx0XHRcdFx0XHRNYXRoLnJvdW5kKF90ZW1wUGFuQXJlYVNpemUueSAtIHJlYWxQYW5FbGVtZW50SCkgKyBpdGVtLnZHYXAudG9wIDogXG5cdFx0XHRcdFx0XHRcdGJvdW5kcy5jZW50ZXIueTtcblx0XHRcblx0XHQvLyBtaW5pbXVtIHBhbiBwb3NpdGlvblxuXHRcdGJvdW5kcy5taW4ueCA9IChyZWFsUGFuRWxlbWVudFcgPiBfdGVtcFBhbkFyZWFTaXplLngpID8gMCA6IGJvdW5kcy5jZW50ZXIueDtcblx0XHRib3VuZHMubWluLnkgPSAocmVhbFBhbkVsZW1lbnRIID4gX3RlbXBQYW5BcmVhU2l6ZS55KSA/IGl0ZW0udkdhcC50b3AgOiBib3VuZHMuY2VudGVyLnk7XG5cdH0sXG5cdF9jYWxjdWxhdGVJdGVtU2l6ZSA9IGZ1bmN0aW9uKGl0ZW0sIHZpZXdwb3J0U2l6ZSwgem9vbUxldmVsKSB7XG5cblx0XHRpZiAoaXRlbS5zcmMgJiYgIWl0ZW0ubG9hZEVycm9yKSB7XG5cdFx0XHR2YXIgaXNJbml0aWFsID0gIXpvb21MZXZlbDtcblx0XHRcdFxuXHRcdFx0aWYoaXNJbml0aWFsKSB7XG5cdFx0XHRcdGlmKCFpdGVtLnZHYXApIHtcblx0XHRcdFx0XHRpdGVtLnZHYXAgPSB7dG9wOjAsYm90dG9tOjB9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGFsbG93cyBvdmVycmlkaW5nIHZlcnRpY2FsIG1hcmdpbiBmb3IgaW5kaXZpZHVhbCBpdGVtc1xuXHRcdFx0XHRfc2hvdXQoJ3BhcnNlVmVydGljYWxNYXJnaW4nLCBpdGVtKTtcblx0XHRcdH1cblxuXG5cdFx0XHRfdGVtcFBhbkFyZWFTaXplLnggPSB2aWV3cG9ydFNpemUueDtcblx0XHRcdF90ZW1wUGFuQXJlYVNpemUueSA9IHZpZXdwb3J0U2l6ZS55IC0gaXRlbS52R2FwLnRvcCAtIGl0ZW0udkdhcC5ib3R0b207XG5cblx0XHRcdGlmIChpc0luaXRpYWwpIHtcblx0XHRcdFx0dmFyIGhSYXRpbyA9IF90ZW1wUGFuQXJlYVNpemUueCAvIGl0ZW0udztcblx0XHRcdFx0dmFyIHZSYXRpbyA9IF90ZW1wUGFuQXJlYVNpemUueSAvIGl0ZW0uaDtcblxuXHRcdFx0XHRpdGVtLmZpdFJhdGlvID0gaFJhdGlvIDwgdlJhdGlvID8gaFJhdGlvIDogdlJhdGlvO1xuXHRcdFx0XHQvL2l0ZW0uZmlsbFJhdGlvID0gaFJhdGlvID4gdlJhdGlvID8gaFJhdGlvIDogdlJhdGlvO1xuXG5cdFx0XHRcdHZhciBzY2FsZU1vZGUgPSBfb3B0aW9ucy5zY2FsZU1vZGU7XG5cblx0XHRcdFx0aWYgKHNjYWxlTW9kZSA9PT0gJ29yaWcnKSB7XG5cdFx0XHRcdFx0em9vbUxldmVsID0gMTtcblx0XHRcdFx0fSBlbHNlIGlmIChzY2FsZU1vZGUgPT09ICdmaXQnKSB7XG5cdFx0XHRcdFx0em9vbUxldmVsID0gaXRlbS5maXRSYXRpbztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh6b29tTGV2ZWwgPiAxKSB7XG5cdFx0XHRcdFx0em9vbUxldmVsID0gMTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGl0ZW0uaW5pdGlhbFpvb21MZXZlbCA9IHpvb21MZXZlbDtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKCFpdGVtLmJvdW5kcykge1xuXHRcdFx0XHRcdC8vIHJldXNlIGJvdW5kcyBvYmplY3Rcblx0XHRcdFx0XHRpdGVtLmJvdW5kcyA9IF9nZXRaZXJvQm91bmRzKCk7IFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKCF6b29tTGV2ZWwpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRfY2FsY3VsYXRlU2luZ2xlSXRlbVBhbkJvdW5kcyhpdGVtLCBpdGVtLncgKiB6b29tTGV2ZWwsIGl0ZW0uaCAqIHpvb21MZXZlbCk7XG5cblx0XHRcdGlmIChpc0luaXRpYWwgJiYgem9vbUxldmVsID09PSBpdGVtLmluaXRpYWxab29tTGV2ZWwpIHtcblx0XHRcdFx0aXRlbS5pbml0aWFsUG9zaXRpb24gPSBpdGVtLmJvdW5kcy5jZW50ZXI7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBpdGVtLmJvdW5kcztcblx0XHR9IGVsc2Uge1xuXHRcdFx0aXRlbS53ID0gaXRlbS5oID0gMDtcblx0XHRcdGl0ZW0uaW5pdGlhbFpvb21MZXZlbCA9IGl0ZW0uZml0UmF0aW8gPSAxO1xuXHRcdFx0aXRlbS5ib3VuZHMgPSBfZ2V0WmVyb0JvdW5kcygpO1xuXHRcdFx0aXRlbS5pbml0aWFsUG9zaXRpb24gPSBpdGVtLmJvdW5kcy5jZW50ZXI7XG5cblx0XHRcdC8vIGlmIGl0J3Mgbm90IGltYWdlLCB3ZSByZXR1cm4gemVybyBib3VuZHMgKGNvbnRlbnQgaXMgbm90IHpvb21hYmxlKVxuXHRcdFx0cmV0dXJuIGl0ZW0uYm91bmRzO1xuXHRcdH1cblx0XHRcblx0fSxcblxuXHRcblxuXG5cdF9hcHBlbmRJbWFnZSA9IGZ1bmN0aW9uKGluZGV4LCBpdGVtLCBiYXNlRGl2LCBpbWcsIHByZXZlbnRBbmltYXRpb24sIGtlZXBQbGFjZWhvbGRlcikge1xuXHRcdFxuXG5cdFx0aWYoaXRlbS5sb2FkRXJyb3IpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihpbWcpIHtcblxuXHRcdFx0aXRlbS5pbWFnZUFwcGVuZGVkID0gdHJ1ZTtcblx0XHRcdF9zZXRJbWFnZVNpemUoaXRlbSwgaW1nLCAoaXRlbSA9PT0gc2VsZi5jdXJySXRlbSAmJiBfcmVuZGVyTWF4UmVzb2x1dGlvbikgKTtcblx0XHRcdFxuXHRcdFx0YmFzZURpdi5hcHBlbmRDaGlsZChpbWcpO1xuXG5cdFx0XHRpZihrZWVwUGxhY2Vob2xkZXIpIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZihpdGVtICYmIGl0ZW0ubG9hZGVkICYmIGl0ZW0ucGxhY2Vob2xkZXIpIHtcblx0XHRcdFx0XHRcdGl0ZW0ucGxhY2Vob2xkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHRcdGl0ZW0ucGxhY2Vob2xkZXIgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdFxuXG5cblx0X3ByZWxvYWRJbWFnZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRpdGVtLmxvYWRpbmcgPSB0cnVlO1xuXHRcdGl0ZW0ubG9hZGVkID0gZmFsc2U7XG5cdFx0dmFyIGltZyA9IGl0ZW0uaW1nID0gZnJhbWV3b3JrLmNyZWF0ZUVsKCdwc3dwX19pbWcnLCAnaW1nJyk7XG5cdFx0dmFyIG9uQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcblx0XHRcdGl0ZW0ubG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0aXRlbS5sb2FkZWQgPSB0cnVlO1xuXG5cdFx0XHRpZihpdGVtLmxvYWRDb21wbGV0ZSkge1xuXHRcdFx0XHRpdGVtLmxvYWRDb21wbGV0ZShpdGVtKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGl0ZW0uaW1nID0gbnVsbDsgLy8gbm8gbmVlZCB0byBzdG9yZSBpbWFnZSBvYmplY3Rcblx0XHRcdH1cblx0XHRcdGltZy5vbmxvYWQgPSBpbWcub25lcnJvciA9IG51bGw7XG5cdFx0XHRpbWcgPSBudWxsO1xuXHRcdH07XG5cdFx0aW1nLm9ubG9hZCA9IG9uQ29tcGxldGU7XG5cdFx0aW1nLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdGl0ZW0ubG9hZEVycm9yID0gdHJ1ZTtcblx0XHRcdG9uQ29tcGxldGUoKTtcblx0XHR9O1x0XHRcblxuXHRcdGltZy5zcmMgPSBpdGVtLnNyYzsvLyArICc/YT0nICsgTWF0aC5yYW5kb20oKTtcblxuXHRcdHJldHVybiBpbWc7XG5cdH0sXG5cdF9jaGVja0ZvckVycm9yID0gZnVuY3Rpb24oaXRlbSwgY2xlYW5VcCkge1xuXHRcdGlmKGl0ZW0uc3JjICYmIGl0ZW0ubG9hZEVycm9yICYmIGl0ZW0uY29udGFpbmVyKSB7XG5cblx0XHRcdGlmKGNsZWFuVXApIHtcblx0XHRcdFx0aXRlbS5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cdFx0XHR9XG5cblx0XHRcdGl0ZW0uY29udGFpbmVyLmlubmVySFRNTCA9IF9vcHRpb25zLmVycm9yTXNnLnJlcGxhY2UoJyV1cmwlJywgIGl0ZW0uc3JjICk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFxuXHRcdH1cblx0fSxcblx0X3NldEltYWdlU2l6ZSA9IGZ1bmN0aW9uKGl0ZW0sIGltZywgbWF4UmVzKSB7XG5cdFx0aWYoIWl0ZW0uc3JjKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoIWltZykge1xuXHRcdFx0aW1nID0gaXRlbS5jb250YWluZXIubGFzdENoaWxkO1xuXHRcdH1cblxuXHRcdHZhciB3ID0gbWF4UmVzID8gaXRlbS53IDogTWF0aC5yb3VuZChpdGVtLncgKiBpdGVtLmZpdFJhdGlvKSxcblx0XHRcdGggPSBtYXhSZXMgPyBpdGVtLmggOiBNYXRoLnJvdW5kKGl0ZW0uaCAqIGl0ZW0uZml0UmF0aW8pO1xuXHRcdFxuXHRcdGlmKGl0ZW0ucGxhY2Vob2xkZXIgJiYgIWl0ZW0ubG9hZGVkKSB7XG5cdFx0XHRpdGVtLnBsYWNlaG9sZGVyLnN0eWxlLndpZHRoID0gdyArICdweCc7XG5cdFx0XHRpdGVtLnBsYWNlaG9sZGVyLnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xuXHRcdH1cblxuXHRcdGltZy5zdHlsZS53aWR0aCA9IHcgKyAncHgnO1xuXHRcdGltZy5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4Jztcblx0fSxcblx0X2FwcGVuZEltYWdlc1Bvb2wgPSBmdW5jdGlvbigpIHtcblxuXHRcdGlmKF9pbWFnZXNUb0FwcGVuZFBvb2wubGVuZ3RoKSB7XG5cdFx0XHR2YXIgcG9vbEl0ZW07XG5cblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBfaW1hZ2VzVG9BcHBlbmRQb29sLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHBvb2xJdGVtID0gX2ltYWdlc1RvQXBwZW5kUG9vbFtpXTtcblx0XHRcdFx0aWYoIHBvb2xJdGVtLmhvbGRlci5pbmRleCA9PT0gcG9vbEl0ZW0uaW5kZXggKSB7XG5cdFx0XHRcdFx0X2FwcGVuZEltYWdlKHBvb2xJdGVtLmluZGV4LCBwb29sSXRlbS5pdGVtLCBwb29sSXRlbS5iYXNlRGl2LCBwb29sSXRlbS5pbWcsIGZhbHNlLCBwb29sSXRlbS5jbGVhclBsYWNlaG9sZGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0X2ltYWdlc1RvQXBwZW5kUG9vbCA9IFtdO1xuXHRcdH1cblx0fTtcblx0XG5cblxuX3JlZ2lzdGVyTW9kdWxlKCdDb250cm9sbGVyJywge1xuXG5cdHB1YmxpY01ldGhvZHM6IHtcblxuXHRcdGxhenlMb2FkSXRlbTogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdGluZGV4ID0gX2dldExvb3BlZElkKGluZGV4KTtcblx0XHRcdHZhciBpdGVtID0gX2dldEl0ZW1BdChpbmRleCk7XG5cblx0XHRcdGlmKCFpdGVtIHx8ICgoaXRlbS5sb2FkZWQgfHwgaXRlbS5sb2FkaW5nKSAmJiAhX2l0ZW1zTmVlZFVwZGF0ZSkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRfc2hvdXQoJ2dldHRpbmdEYXRhJywgaW5kZXgsIGl0ZW0pO1xuXG5cdFx0XHRpZiAoIWl0ZW0uc3JjKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0X3ByZWxvYWRJbWFnZShpdGVtKTtcblx0XHR9LFxuXHRcdGluaXRDb250cm9sbGVyOiBmdW5jdGlvbigpIHtcblx0XHRcdGZyYW1ld29yay5leHRlbmQoX29wdGlvbnMsIF9jb250cm9sbGVyRGVmYXVsdE9wdGlvbnMsIHRydWUpO1xuXHRcdFx0c2VsZi5pdGVtcyA9IF9pdGVtcyA9IGl0ZW1zO1xuXHRcdFx0X2dldEl0ZW1BdCA9IHNlbGYuZ2V0SXRlbUF0O1xuXHRcdFx0X2dldE51bUl0ZW1zID0gX29wdGlvbnMuZ2V0TnVtSXRlbXNGbjsgLy9zZWxmLmdldE51bUl0ZW1zO1xuXG5cblxuXHRcdFx0X2luaXRpYWxJc0xvb3AgPSBfb3B0aW9ucy5sb29wO1xuXHRcdFx0aWYoX2dldE51bUl0ZW1zKCkgPCAzKSB7XG5cdFx0XHRcdF9vcHRpb25zLmxvb3AgPSBmYWxzZTsgLy8gZGlzYWJsZSBsb29wIGlmIGxlc3MgdGhlbiAzIGl0ZW1zXG5cdFx0XHR9XG5cblx0XHRcdF9saXN0ZW4oJ2JlZm9yZUNoYW5nZScsIGZ1bmN0aW9uKGRpZmYpIHtcblxuXHRcdFx0XHR2YXIgcCA9IF9vcHRpb25zLnByZWxvYWQsXG5cdFx0XHRcdFx0aXNOZXh0ID0gZGlmZiA9PT0gbnVsbCA/IHRydWUgOiAoZGlmZiA+PSAwKSxcblx0XHRcdFx0XHRwcmVsb2FkQmVmb3JlID0gTWF0aC5taW4ocFswXSwgX2dldE51bUl0ZW1zKCkgKSxcblx0XHRcdFx0XHRwcmVsb2FkQWZ0ZXIgPSBNYXRoLm1pbihwWzFdLCBfZ2V0TnVtSXRlbXMoKSApLFxuXHRcdFx0XHRcdGk7XG5cblxuXHRcdFx0XHRmb3IoaSA9IDE7IGkgPD0gKGlzTmV4dCA/IHByZWxvYWRBZnRlciA6IHByZWxvYWRCZWZvcmUpOyBpKyspIHtcblx0XHRcdFx0XHRzZWxmLmxhenlMb2FkSXRlbShfY3VycmVudEl0ZW1JbmRleCtpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IoaSA9IDE7IGkgPD0gKGlzTmV4dCA/IHByZWxvYWRCZWZvcmUgOiBwcmVsb2FkQWZ0ZXIpOyBpKyspIHtcblx0XHRcdFx0XHRzZWxmLmxhenlMb2FkSXRlbShfY3VycmVudEl0ZW1JbmRleC1pKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdF9saXN0ZW4oJ2luaXRpYWxMYXlvdXQnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZi5jdXJySXRlbS5pbml0aWFsTGF5b3V0ID0gX29wdGlvbnMuZ2V0VGh1bWJCb3VuZHNGbiAmJiBfb3B0aW9ucy5nZXRUaHVtYkJvdW5kc0ZuKF9jdXJyZW50SXRlbUluZGV4KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRfbGlzdGVuKCdtYWluU2Nyb2xsQW5pbUNvbXBsZXRlJywgX2FwcGVuZEltYWdlc1Bvb2wpO1xuXHRcdFx0X2xpc3RlbignaW5pdGlhbFpvb21JbkVuZCcsIF9hcHBlbmRJbWFnZXNQb29sKTtcblxuXG5cblx0XHRcdF9saXN0ZW4oJ2Rlc3Ryb3knLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGl0ZW07XG5cdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBfaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpdGVtID0gX2l0ZW1zW2ldO1xuXHRcdFx0XHRcdC8vIHJlbW92ZSByZWZlcmVuY2UgdG8gRE9NIGVsZW1lbnRzLCBmb3IgR0Ncblx0XHRcdFx0XHRpZihpdGVtLmNvbnRhaW5lcikge1xuXHRcdFx0XHRcdFx0aXRlbS5jb250YWluZXIgPSBudWxsOyBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYoaXRlbS5wbGFjZWhvbGRlcikge1xuXHRcdFx0XHRcdFx0aXRlbS5wbGFjZWhvbGRlciA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKGl0ZW0uaW1nKSB7XG5cdFx0XHRcdFx0XHRpdGVtLmltZyA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKGl0ZW0ucHJlbG9hZGVyKSB7XG5cdFx0XHRcdFx0XHRpdGVtLnByZWxvYWRlciA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKGl0ZW0ubG9hZEVycm9yKSB7XG5cdFx0XHRcdFx0XHRpdGVtLmxvYWRlZCA9IGl0ZW0ubG9hZEVycm9yID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdF9pbWFnZXNUb0FwcGVuZFBvb2wgPSBudWxsO1xuXHRcdFx0fSk7XG5cdFx0fSxcblxuXG5cdFx0Z2V0SXRlbUF0OiBmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0aWYgKGluZGV4ID49IDApIHtcblx0XHRcdFx0cmV0dXJuIF9pdGVtc1tpbmRleF0gIT09IHVuZGVmaW5lZCA/IF9pdGVtc1tpbmRleF0gOiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0YWxsb3dQcm9ncmVzc2l2ZUltZzogZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyAxLiBQcm9ncmVzc2l2ZSBpbWFnZSBsb2FkaW5nIGlzbid0IHdvcmtpbmcgb24gd2Via2l0L2JsaW5rIFxuXHRcdFx0Ly8gICAgd2hlbiBody1hY2NlbGVyYXRpb24gKGUuZy4gdHJhbnNsYXRlWikgaXMgYXBwbGllZCB0byBJTUcgZWxlbWVudC5cblx0XHRcdC8vICAgIFRoYXQncyB3aHkgaW4gUGhvdG9Td2lwZSBwYXJlbnQgZWxlbWVudCBnZXRzIHpvb20gdHJhbnNmb3JtLCBub3QgaW1hZ2UgaXRzZWxmLlxuXHRcdFx0Ly8gICAgXG5cdFx0XHQvLyAyLiBQcm9ncmVzc2l2ZSBpbWFnZSBsb2FkaW5nIHNvbWV0aW1lcyBibGlua3MgaW4gd2Via2l0L2JsaW5rIHdoZW4gYXBwbHlpbmcgYW5pbWF0aW9uIHRvIHBhcmVudCBlbGVtZW50LlxuXHRcdFx0Ly8gICAgVGhhdCdzIHdoeSBpdCdzIGRpc2FibGVkIG9uIHRvdWNoIGRldmljZXMgKG1haW5seSBiZWNhdXNlIG9mIHN3aXBlIHRyYW5zaXRpb24pXG5cdFx0XHQvLyAgICBcblx0XHRcdC8vIDMuIFByb2dyZXNzaXZlIGltYWdlIGxvYWRpbmcgc29tZXRpbWVzIGRvZXNuJ3Qgd29yayBpbiBJRSAodXAgdG8gMTEpLlxuXG5cdFx0XHQvLyBEb24ndCBhbGxvdyBwcm9ncmVzc2l2ZSBsb2FkaW5nIG9uIG5vbi1sYXJnZSB0b3VjaCBkZXZpY2VzXG5cdFx0XHRyZXR1cm4gX29wdGlvbnMuZm9yY2VQcm9ncmVzc2l2ZUxvYWRpbmcgfHwgIV9saWtlbHlUb3VjaERldmljZSB8fCBfb3B0aW9ucy5tb3VzZVVzZWQgfHwgc2NyZWVuLndpZHRoID4gMTIwMDsgXG5cdFx0XHQvLyAxMjAwIC0gdG8gZWxpbWluYXRlIHRvdWNoIGRldmljZXMgd2l0aCBsYXJnZSBzY3JlZW4gKGxpa2UgQ2hyb21lYm9vayBQaXhlbClcblx0XHR9LFxuXG5cdFx0c2V0Q29udGVudDogZnVuY3Rpb24oaG9sZGVyLCBpbmRleCkge1xuXG5cdFx0XHRpZihfb3B0aW9ucy5sb29wKSB7XG5cdFx0XHRcdGluZGV4ID0gX2dldExvb3BlZElkKGluZGV4KTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHByZXZJdGVtID0gc2VsZi5nZXRJdGVtQXQoaG9sZGVyLmluZGV4KTtcblx0XHRcdGlmKHByZXZJdGVtKSB7XG5cdFx0XHRcdHByZXZJdGVtLmNvbnRhaW5lciA9IG51bGw7XG5cdFx0XHR9XG5cdFxuXHRcdFx0dmFyIGl0ZW0gPSBzZWxmLmdldEl0ZW1BdChpbmRleCksXG5cdFx0XHRcdGltZztcblx0XHRcdFxuXHRcdFx0aWYoIWl0ZW0pIHtcblx0XHRcdFx0aG9sZGVyLmVsLmlubmVySFRNTCA9ICcnO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIGFsbG93IHRvIG92ZXJyaWRlIGRhdGFcblx0XHRcdF9zaG91dCgnZ2V0dGluZ0RhdGEnLCBpbmRleCwgaXRlbSk7XG5cblx0XHRcdGhvbGRlci5pbmRleCA9IGluZGV4O1xuXHRcdFx0aG9sZGVyLml0ZW0gPSBpdGVtO1xuXG5cdFx0XHQvLyBiYXNlIGNvbnRhaW5lciBESVYgaXMgY3JlYXRlZCBvbmx5IG9uY2UgZm9yIGVhY2ggb2YgMyBob2xkZXJzXG5cdFx0XHR2YXIgYmFzZURpdiA9IGl0ZW0uY29udGFpbmVyID0gZnJhbWV3b3JrLmNyZWF0ZUVsKCdwc3dwX196b29tLXdyYXAnKTsgXG5cblx0XHRcdFxuXG5cdFx0XHRpZighaXRlbS5zcmMgJiYgaXRlbS5odG1sKSB7XG5cdFx0XHRcdGlmKGl0ZW0uaHRtbC50YWdOYW1lKSB7XG5cdFx0XHRcdFx0YmFzZURpdi5hcHBlbmRDaGlsZChpdGVtLmh0bWwpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGJhc2VEaXYuaW5uZXJIVE1MID0gaXRlbS5odG1sO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdF9jaGVja0ZvckVycm9yKGl0ZW0pO1xuXG5cdFx0XHRfY2FsY3VsYXRlSXRlbVNpemUoaXRlbSwgX3ZpZXdwb3J0U2l6ZSk7XG5cdFx0XHRcblx0XHRcdGlmKGl0ZW0uc3JjICYmICFpdGVtLmxvYWRFcnJvciAmJiAhaXRlbS5sb2FkZWQpIHtcblxuXHRcdFx0XHRpdGVtLmxvYWRDb21wbGV0ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcblxuXHRcdFx0XHRcdC8vIGdhbGxlcnkgY2xvc2VkIGJlZm9yZSBpbWFnZSBmaW5pc2hlZCBsb2FkaW5nXG5cdFx0XHRcdFx0aWYoIV9pc09wZW4pIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBjaGVjayBpZiBob2xkZXIgaGFzbid0IGNoYW5nZWQgd2hpbGUgaW1hZ2Ugd2FzIGxvYWRpbmdcblx0XHRcdFx0XHRpZihob2xkZXIgJiYgaG9sZGVyLmluZGV4ID09PSBpbmRleCApIHtcblx0XHRcdFx0XHRcdGlmKCBfY2hlY2tGb3JFcnJvcihpdGVtLCB0cnVlKSApIHtcblx0XHRcdFx0XHRcdFx0aXRlbS5sb2FkQ29tcGxldGUgPSBpdGVtLmltZyA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdF9jYWxjdWxhdGVJdGVtU2l6ZShpdGVtLCBfdmlld3BvcnRTaXplKTtcblx0XHRcdFx0XHRcdFx0X2FwcGx5Wm9vbVBhblRvSXRlbShpdGVtKTtcblxuXHRcdFx0XHRcdFx0XHRpZihob2xkZXIuaW5kZXggPT09IF9jdXJyZW50SXRlbUluZGV4KSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gcmVjYWxjdWxhdGUgZGltZW5zaW9uc1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYudXBkYXRlQ3Vyclpvb21JdGVtKCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYoICFpdGVtLmltYWdlQXBwZW5kZWQgKSB7XG5cdFx0XHRcdFx0XHRcdGlmKF9mZWF0dXJlcy50cmFuc2Zvcm0gJiYgKF9tYWluU2Nyb2xsQW5pbWF0aW5nIHx8IF9pbml0aWFsWm9vbVJ1bm5pbmcpICkge1xuXHRcdFx0XHRcdFx0XHRcdF9pbWFnZXNUb0FwcGVuZFBvb2wucHVzaCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtOml0ZW0sXG5cdFx0XHRcdFx0XHRcdFx0XHRiYXNlRGl2OmJhc2VEaXYsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWc6aXRlbS5pbWcsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbmRleDppbmRleCxcblx0XHRcdFx0XHRcdFx0XHRcdGhvbGRlcjpob2xkZXIsXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGVhclBsYWNlaG9sZGVyOnRydWVcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRfYXBwZW5kSW1hZ2UoaW5kZXgsIGl0ZW0sIGJhc2VEaXYsIGl0ZW0uaW1nLCBfbWFpblNjcm9sbEFuaW1hdGluZyB8fCBfaW5pdGlhbFpvb21SdW5uaW5nLCB0cnVlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gcmVtb3ZlIHByZWxvYWRlciAmIG1pbmktaW1nXG5cdFx0XHRcdFx0XHRcdGlmKCFfaW5pdGlhbFpvb21SdW5uaW5nICYmIGl0ZW0ucGxhY2Vob2xkZXIpIHtcblx0XHRcdFx0XHRcdFx0XHRpdGVtLnBsYWNlaG9sZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5wbGFjZWhvbGRlciA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpdGVtLmxvYWRDb21wbGV0ZSA9IG51bGw7XG5cdFx0XHRcdFx0aXRlbS5pbWcgPSBudWxsOyAvLyBubyBuZWVkIHRvIHN0b3JlIGltYWdlIGVsZW1lbnQgYWZ0ZXIgaXQncyBhZGRlZFxuXG5cdFx0XHRcdFx0X3Nob3V0KCdpbWFnZUxvYWRDb21wbGV0ZScsIGluZGV4LCBpdGVtKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRpZihmcmFtZXdvcmsuZmVhdHVyZXMudHJhbnNmb3JtKSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dmFyIHBsYWNlaG9sZGVyQ2xhc3NOYW1lID0gJ3Bzd3BfX2ltZyBwc3dwX19pbWctLXBsYWNlaG9sZGVyJzsgXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXJDbGFzc05hbWUgKz0gKGl0ZW0ubXNyYyA/ICcnIDogJyBwc3dwX19pbWctLXBsYWNlaG9sZGVyLS1ibGFuaycpO1xuXG5cdFx0XHRcdFx0dmFyIHBsYWNlaG9sZGVyID0gZnJhbWV3b3JrLmNyZWF0ZUVsKHBsYWNlaG9sZGVyQ2xhc3NOYW1lLCBpdGVtLm1zcmMgPyAnaW1nJyA6ICcnKTtcblx0XHRcdFx0XHRpZihpdGVtLm1zcmMpIHtcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyLnNyYyA9IGl0ZW0ubXNyYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0X3NldEltYWdlU2l6ZShpdGVtLCBwbGFjZWhvbGRlcik7XG5cblx0XHRcdFx0XHRiYXNlRGl2LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcblx0XHRcdFx0XHRpdGVtLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG5cblx0XHRcdFx0fVxuXHRcdFx0XHRcblxuXHRcdFx0XHRcblxuXHRcdFx0XHRpZighaXRlbS5sb2FkaW5nKSB7XG5cdFx0XHRcdFx0X3ByZWxvYWRJbWFnZShpdGVtKTtcblx0XHRcdFx0fVxuXG5cblx0XHRcdFx0aWYoIHNlbGYuYWxsb3dQcm9ncmVzc2l2ZUltZygpICkge1xuXHRcdFx0XHRcdC8vIGp1c3QgYXBwZW5kIGltYWdlXG5cdFx0XHRcdFx0aWYoIV9pbml0aWFsQ29udGVudFNldCAmJiBfZmVhdHVyZXMudHJhbnNmb3JtKSB7XG5cdFx0XHRcdFx0XHRfaW1hZ2VzVG9BcHBlbmRQb29sLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRpdGVtOml0ZW0sIFxuXHRcdFx0XHRcdFx0XHRiYXNlRGl2OmJhc2VEaXYsIFxuXHRcdFx0XHRcdFx0XHRpbWc6aXRlbS5pbWcsIFxuXHRcdFx0XHRcdFx0XHRpbmRleDppbmRleCwgXG5cdFx0XHRcdFx0XHRcdGhvbGRlcjpob2xkZXJcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRfYXBwZW5kSW1hZ2UoaW5kZXgsIGl0ZW0sIGJhc2VEaXYsIGl0ZW0uaW1nLCB0cnVlLCB0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9IGVsc2UgaWYoaXRlbS5zcmMgJiYgIWl0ZW0ubG9hZEVycm9yKSB7XG5cdFx0XHRcdC8vIGltYWdlIG9iamVjdCBpcyBjcmVhdGVkIGV2ZXJ5IHRpbWUsIGR1ZSB0byBidWdzIG9mIGltYWdlIGxvYWRpbmcgJiBkZWxheSB3aGVuIHN3aXRjaGluZyBpbWFnZXNcblx0XHRcdFx0aW1nID0gZnJhbWV3b3JrLmNyZWF0ZUVsKCdwc3dwX19pbWcnLCAnaW1nJyk7XG5cdFx0XHRcdGltZy5zdHlsZS5vcGFjaXR5ID0gMTtcblx0XHRcdFx0aW1nLnNyYyA9IGl0ZW0uc3JjO1xuXHRcdFx0XHRfc2V0SW1hZ2VTaXplKGl0ZW0sIGltZyk7XG5cdFx0XHRcdF9hcHBlbmRJbWFnZShpbmRleCwgaXRlbSwgYmFzZURpdiwgaW1nLCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdFxuXG5cdFx0XHRpZighX2luaXRpYWxDb250ZW50U2V0ICYmIGluZGV4ID09PSBfY3VycmVudEl0ZW1JbmRleCkge1xuXHRcdFx0XHRfY3Vyclpvb21FbGVtZW50U3R5bGUgPSBiYXNlRGl2LnN0eWxlO1xuXHRcdFx0XHRfc2hvd09ySGlkZShpdGVtLCAoaW1nIHx8aXRlbS5pbWcpICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfYXBwbHlab29tUGFuVG9JdGVtKGl0ZW0pO1xuXHRcdFx0fVxuXG5cdFx0XHRob2xkZXIuZWwuaW5uZXJIVE1MID0gJyc7XG5cdFx0XHRob2xkZXIuZWwuYXBwZW5kQ2hpbGQoYmFzZURpdik7XG5cdFx0fSxcblxuXHRcdGNsZWFuU2xpZGU6IGZ1bmN0aW9uKCBpdGVtICkge1xuXHRcdFx0aWYoaXRlbS5pbWcgKSB7XG5cdFx0XHRcdGl0ZW0uaW1nLm9ubG9hZCA9IGl0ZW0uaW1nLm9uZXJyb3IgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0aXRlbS5sb2FkZWQgPSBpdGVtLmxvYWRpbmcgPSBpdGVtLmltZyA9IGl0ZW0uaW1hZ2VBcHBlbmRlZCA9IGZhbHNlO1xuXHRcdH1cblxuXHR9XG59KTtcblxuLyo+Pml0ZW1zLWNvbnRyb2xsZXIqL1xuXG4vKj4+dGFwKi9cbi8qKlxuICogdGFwLmpzOlxuICpcbiAqIERpc3BsYXRjaGVzIHRhcCBhbmQgZG91YmxlLXRhcCBldmVudHMuXG4gKiBcbiAqL1xuXG52YXIgdGFwVGltZXIsXG5cdHRhcFJlbGVhc2VQb2ludCA9IHt9LFxuXHRfZGlzcGF0Y2hUYXBFdmVudCA9IGZ1bmN0aW9uKG9yaWdFdmVudCwgcmVsZWFzZVBvaW50LCBwb2ludGVyVHlwZSkge1x0XHRcblx0XHR2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCAnQ3VzdG9tRXZlbnQnICksXG5cdFx0XHRlRGV0YWlsID0ge1xuXHRcdFx0XHRvcmlnRXZlbnQ6b3JpZ0V2ZW50LCBcblx0XHRcdFx0dGFyZ2V0Om9yaWdFdmVudC50YXJnZXQsIFxuXHRcdFx0XHRyZWxlYXNlUG9pbnQ6IHJlbGVhc2VQb2ludCwgXG5cdFx0XHRcdHBvaW50ZXJUeXBlOnBvaW50ZXJUeXBlIHx8ICd0b3VjaCdcblx0XHRcdH07XG5cblx0XHRlLmluaXRDdXN0b21FdmVudCggJ3Bzd3BUYXAnLCB0cnVlLCB0cnVlLCBlRGV0YWlsICk7XG5cdFx0b3JpZ0V2ZW50LnRhcmdldC5kaXNwYXRjaEV2ZW50KGUpO1xuXHR9O1xuXG5fcmVnaXN0ZXJNb2R1bGUoJ1RhcCcsIHtcblx0cHVibGljTWV0aG9kczoge1xuXHRcdGluaXRUYXA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0X2xpc3RlbignZmlyc3RUb3VjaFN0YXJ0Jywgc2VsZi5vblRhcFN0YXJ0KTtcblx0XHRcdF9saXN0ZW4oJ3RvdWNoUmVsZWFzZScsIHNlbGYub25UYXBSZWxlYXNlKTtcblx0XHRcdF9saXN0ZW4oJ2Rlc3Ryb3knLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dGFwUmVsZWFzZVBvaW50ID0ge307XG5cdFx0XHRcdHRhcFRpbWVyID0gbnVsbDtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0b25UYXBTdGFydDogZnVuY3Rpb24odG91Y2hMaXN0KSB7XG5cdFx0XHRpZih0b3VjaExpc3QubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQodGFwVGltZXIpO1xuXHRcdFx0XHR0YXBUaW1lciA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvblRhcFJlbGVhc2U6IGZ1bmN0aW9uKGUsIHJlbGVhc2VQb2ludCkge1xuXHRcdFx0aWYoIXJlbGVhc2VQb2ludCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFfbW92ZWQgJiYgIV9pc011bHRpdG91Y2ggJiYgIV9udW1BbmltYXRpb25zKSB7XG5cdFx0XHRcdHZhciBwMCA9IHJlbGVhc2VQb2ludDtcblx0XHRcdFx0aWYodGFwVGltZXIpIHtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGFwVGltZXIpO1xuXHRcdFx0XHRcdHRhcFRpbWVyID0gbnVsbDtcblxuXHRcdFx0XHRcdC8vIENoZWNrIGlmIHRhcGVkIG9uIHRoZSBzYW1lIHBsYWNlXG5cdFx0XHRcdFx0aWYgKCBfaXNOZWFyYnlQb2ludHMocDAsIHRhcFJlbGVhc2VQb2ludCkgKSB7XG5cdFx0XHRcdFx0XHRfc2hvdXQoJ2RvdWJsZVRhcCcsIHAwKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihyZWxlYXNlUG9pbnQudHlwZSA9PT0gJ21vdXNlJykge1xuXHRcdFx0XHRcdF9kaXNwYXRjaFRhcEV2ZW50KGUsIHJlbGVhc2VQb2ludCwgJ21vdXNlJyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIGNsaWNrZWRUYWdOYW1lID0gZS50YXJnZXQudGFnTmFtZS50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHQvLyBhdm9pZCBkb3VibGUgdGFwIGRlbGF5IG9uIGJ1dHRvbnMgYW5kIGVsZW1lbnRzIHRoYXQgaGF2ZSBjbGFzcyBwc3dwX19zaW5nbGUtdGFwXG5cdFx0XHRcdGlmKGNsaWNrZWRUYWdOYW1lID09PSAnQlVUVE9OJyB8fCBmcmFtZXdvcmsuaGFzQ2xhc3MoZS50YXJnZXQsICdwc3dwX19zaW5nbGUtdGFwJykgKSB7XG5cdFx0XHRcdFx0X2Rpc3BhdGNoVGFwRXZlbnQoZSwgcmVsZWFzZVBvaW50KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRfZXF1YWxpemVQb2ludHModGFwUmVsZWFzZVBvaW50LCBwMCk7XG5cblx0XHRcdFx0dGFwVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdF9kaXNwYXRjaFRhcEV2ZW50KGUsIHJlbGVhc2VQb2ludCk7XG5cdFx0XHRcdFx0dGFwVGltZXIgPSBudWxsO1xuXHRcdFx0XHR9LCAzMDApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSk7XG5cbi8qPj50YXAqL1xuXG4vKj4+ZGVza3RvcC16b29tKi9cbi8qKlxuICpcbiAqIGRlc2t0b3Atem9vbS5qczpcbiAqXG4gKiAtIEJpbmRzIG1vdXNld2hlZWwgZXZlbnQgZm9yIHBhbmluZyB6b29tZWQgaW1hZ2UuXG4gKiAtIE1hbmFnZXMgXCJkcmFnZ2luZ1wiLCBcInpvb21lZC1pblwiLCBcInpvb20tb3V0XCIgY2xhc3Nlcy5cbiAqICAgKHdoaWNoIGFyZSB1c2VkIGZvciBjdXJzb3JzIGFuZCB6b29tIGljb24pXG4gKiAtIEFkZHMgdG9nZ2xlRGVza3RvcFpvb20gZnVuY3Rpb24uXG4gKiBcbiAqL1xuXG52YXIgX3doZWVsRGVsdGE7XG5cdFxuX3JlZ2lzdGVyTW9kdWxlKCdEZXNrdG9wWm9vbScsIHtcblxuXHRwdWJsaWNNZXRob2RzOiB7XG5cblx0XHRpbml0RGVza3RvcFpvb206IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRpZihfb2xkSUUpIHtcblx0XHRcdFx0Ly8gbm8gem9vbSBmb3Igb2xkIElFICg8PTgpXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYoX2xpa2VseVRvdWNoRGV2aWNlKSB7XG5cdFx0XHRcdC8vIGlmIGRldGVjdGVkIGhhcmR3YXJlIHRvdWNoIHN1cHBvcnQsIHdlIHdhaXQgdW50aWwgbW91c2UgaXMgdXNlZCxcblx0XHRcdFx0Ly8gYW5kIG9ubHkgdGhlbiBhcHBseSBkZXNrdG9wLXpvb20gZmVhdHVyZXNcblx0XHRcdFx0X2xpc3RlbignbW91c2VVc2VkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0c2VsZi5zZXR1cERlc2t0b3Bab29tKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZi5zZXR1cERlc2t0b3Bab29tKHRydWUpO1xuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdHNldHVwRGVza3RvcFpvb206IGZ1bmN0aW9uKG9uSW5pdCkge1xuXG5cdFx0XHRfd2hlZWxEZWx0YSA9IHt9O1xuXG5cdFx0XHR2YXIgZXZlbnRzID0gJ3doZWVsIG1vdXNld2hlZWwgRE9NTW91c2VTY3JvbGwnO1xuXHRcdFx0XG5cdFx0XHRfbGlzdGVuKCdiaW5kRXZlbnRzJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGZyYW1ld29yay5iaW5kKHRlbXBsYXRlLCBldmVudHMsICBzZWxmLmhhbmRsZU1vdXNlV2hlZWwpO1xuXHRcdFx0fSk7XG5cblx0XHRcdF9saXN0ZW4oJ3VuYmluZEV2ZW50cycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihfd2hlZWxEZWx0YSkge1xuXHRcdFx0XHRcdGZyYW1ld29yay51bmJpbmQodGVtcGxhdGUsIGV2ZW50cywgc2VsZi5oYW5kbGVNb3VzZVdoZWVsKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHNlbGYubW91c2Vab29tZWRJbiA9IGZhbHNlO1xuXG5cdFx0XHR2YXIgaGFzRHJhZ2dpbmdDbGFzcyxcblx0XHRcdFx0dXBkYXRlWm9vbWFibGUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZihzZWxmLm1vdXNlWm9vbWVkSW4pIHtcblx0XHRcdFx0XHRcdGZyYW1ld29yay5yZW1vdmVDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLXpvb21lZC1pbicpO1xuXHRcdFx0XHRcdFx0c2VsZi5tb3VzZVpvb21lZEluID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKF9jdXJyWm9vbUxldmVsIDwgMSkge1xuXHRcdFx0XHRcdFx0ZnJhbWV3b3JrLmFkZENsYXNzKHRlbXBsYXRlLCAncHN3cC0tem9vbS1hbGxvd2VkJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGZyYW1ld29yay5yZW1vdmVDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLXpvb20tYWxsb3dlZCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZW1vdmVEcmFnZ2luZ0NsYXNzKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHJlbW92ZURyYWdnaW5nQ2xhc3MgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZihoYXNEcmFnZ2luZ0NsYXNzKSB7XG5cdFx0XHRcdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3ModGVtcGxhdGUsICdwc3dwLS1kcmFnZ2luZycpO1xuXHRcdFx0XHRcdFx0aGFzRHJhZ2dpbmdDbGFzcyA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0X2xpc3RlbigncmVzaXplJyAsIHVwZGF0ZVpvb21hYmxlKTtcblx0XHRcdF9saXN0ZW4oJ2FmdGVyQ2hhbmdlJyAsIHVwZGF0ZVpvb21hYmxlKTtcblx0XHRcdF9saXN0ZW4oJ3BvaW50ZXJEb3duJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKHNlbGYubW91c2Vab29tZWRJbikge1xuXHRcdFx0XHRcdGhhc0RyYWdnaW5nQ2xhc3MgPSB0cnVlO1xuXHRcdFx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLWRyYWdnaW5nJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0X2xpc3RlbigncG9pbnRlclVwJywgcmVtb3ZlRHJhZ2dpbmdDbGFzcyk7XG5cblx0XHRcdGlmKCFvbkluaXQpIHtcblx0XHRcdFx0dXBkYXRlWm9vbWFibGUoKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH0sXG5cblx0XHRoYW5kbGVNb3VzZVdoZWVsOiBmdW5jdGlvbihlKSB7XG5cblx0XHRcdGlmKF9jdXJyWm9vbUxldmVsIDw9IHNlbGYuY3Vyckl0ZW0uZml0UmF0aW8pIHtcblx0XHRcdFx0aWYoIF9vcHRpb25zLm1vZGFsICkge1xuXG5cdFx0XHRcdFx0aWYgKCFfb3B0aW9ucy5jbG9zZU9uU2Nyb2xsIHx8IF9udW1BbmltYXRpb25zIHx8IF9pc0RyYWdnaW5nKSB7XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmKF90cmFuc2Zvcm1LZXkgJiYgTWF0aC5hYnMoZS5kZWx0YVkpID4gMikge1xuXHRcdFx0XHRcdFx0Ly8gY2xvc2UgUGhvdG9Td2lwZVxuXHRcdFx0XHRcdFx0Ly8gaWYgYnJvd3NlciBzdXBwb3J0cyB0cmFuc2Zvcm1zICYgc2Nyb2xsIGNoYW5nZWQgZW5vdWdoXG5cdFx0XHRcdFx0XHRfY2xvc2VkQnlTY3JvbGwgPSB0cnVlO1xuXHRcdFx0XHRcdFx0c2VsZi5jbG9zZSgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBhbGxvdyBqdXN0IG9uZSBldmVudCB0byBmaXJlXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvd2hlZWxcblx0XHRcdF93aGVlbERlbHRhLnggPSAwO1xuXG5cdFx0XHRpZignZGVsdGFYJyBpbiBlKSB7XG5cdFx0XHRcdGlmKGUuZGVsdGFNb2RlID09PSAxIC8qIERPTV9ERUxUQV9MSU5FICovKSB7XG5cdFx0XHRcdFx0Ly8gMTggLSBhdmVyYWdlIGxpbmUgaGVpZ2h0XG5cdFx0XHRcdFx0X3doZWVsRGVsdGEueCA9IGUuZGVsdGFYICogMTg7XG5cdFx0XHRcdFx0X3doZWVsRGVsdGEueSA9IGUuZGVsdGFZICogMTg7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0X3doZWVsRGVsdGEueCA9IGUuZGVsdGFYO1xuXHRcdFx0XHRcdF93aGVlbERlbHRhLnkgPSBlLmRlbHRhWTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKCd3aGVlbERlbHRhJyBpbiBlKSB7XG5cdFx0XHRcdGlmKGUud2hlZWxEZWx0YVgpIHtcblx0XHRcdFx0XHRfd2hlZWxEZWx0YS54ID0gLTAuMTYgKiBlLndoZWVsRGVsdGFYO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKGUud2hlZWxEZWx0YVkpIHtcblx0XHRcdFx0XHRfd2hlZWxEZWx0YS55ID0gLTAuMTYgKiBlLndoZWVsRGVsdGFZO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF93aGVlbERlbHRhLnkgPSAtMC4xNiAqIGUud2hlZWxEZWx0YTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKCdkZXRhaWwnIGluIGUpIHtcblx0XHRcdFx0X3doZWVsRGVsdGEueSA9IGUuZGV0YWlsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRfY2FsY3VsYXRlUGFuQm91bmRzKF9jdXJyWm9vbUxldmVsLCB0cnVlKTtcblxuXHRcdFx0dmFyIG5ld1BhblggPSBfcGFuT2Zmc2V0LnggLSBfd2hlZWxEZWx0YS54LFxuXHRcdFx0XHRuZXdQYW5ZID0gX3Bhbk9mZnNldC55IC0gX3doZWVsRGVsdGEueTtcblxuXHRcdFx0Ly8gb25seSBwcmV2ZW50IHNjcm9sbGluZyBpbiBub25tb2RhbCBtb2RlIHdoZW4gbm90IGF0IGVkZ2VzXG5cdFx0XHRpZiAoX29wdGlvbnMubW9kYWwgfHxcblx0XHRcdFx0KFxuXHRcdFx0XHRuZXdQYW5YIDw9IF9jdXJyUGFuQm91bmRzLm1pbi54ICYmIG5ld1BhblggPj0gX2N1cnJQYW5Cb3VuZHMubWF4LnggJiZcblx0XHRcdFx0bmV3UGFuWSA8PSBfY3VyclBhbkJvdW5kcy5taW4ueSAmJiBuZXdQYW5ZID49IF9jdXJyUGFuQm91bmRzLm1heC55XG5cdFx0XHRcdCkgKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVE9ETzogdXNlIHJBRiBpbnN0ZWFkIG9mIG1vdXNld2hlZWw/XG5cdFx0XHRzZWxmLnBhblRvKG5ld1BhblgsIG5ld1BhblkpO1xuXHRcdH0sXG5cblx0XHR0b2dnbGVEZXNrdG9wWm9vbTogZnVuY3Rpb24oY2VudGVyUG9pbnQpIHtcblx0XHRcdGNlbnRlclBvaW50ID0gY2VudGVyUG9pbnQgfHwge3g6X3ZpZXdwb3J0U2l6ZS54LzIgKyBfb2Zmc2V0LngsIHk6X3ZpZXdwb3J0U2l6ZS55LzIgKyBfb2Zmc2V0LnkgfTtcblxuXHRcdFx0dmFyIGRvdWJsZVRhcFpvb21MZXZlbCA9IF9vcHRpb25zLmdldERvdWJsZVRhcFpvb20odHJ1ZSwgc2VsZi5jdXJySXRlbSk7XG5cdFx0XHR2YXIgem9vbU91dCA9IF9jdXJyWm9vbUxldmVsID09PSBkb3VibGVUYXBab29tTGV2ZWw7XG5cdFx0XHRcblx0XHRcdHNlbGYubW91c2Vab29tZWRJbiA9ICF6b29tT3V0O1xuXG5cdFx0XHRzZWxmLnpvb21Ubyh6b29tT3V0ID8gc2VsZi5jdXJySXRlbS5pbml0aWFsWm9vbUxldmVsIDogZG91YmxlVGFwWm9vbUxldmVsLCBjZW50ZXJQb2ludCwgMzMzKTtcblx0XHRcdGZyYW1ld29ya1sgKCF6b29tT3V0ID8gJ2FkZCcgOiAncmVtb3ZlJykgKyAnQ2xhc3MnXSh0ZW1wbGF0ZSwgJ3Bzd3AtLXpvb21lZC1pbicpO1xuXHRcdH1cblxuXHR9XG59KTtcblxuXG4vKj4+ZGVza3RvcC16b29tKi9cblxuLyo+Pmhpc3RvcnkqL1xuLyoqXG4gKlxuICogaGlzdG9yeS5qczpcbiAqXG4gKiAtIEJhY2sgYnV0dG9uIHRvIGNsb3NlIGdhbGxlcnkuXG4gKiBcbiAqIC0gVW5pcXVlIFVSTCBmb3IgZWFjaCBzbGlkZTogZXhhbXBsZS5jb20vJnBpZD0xJmdpZD0zXG4gKiAgICh3aGVyZSBQSUQgaXMgcGljdHVyZSBpbmRleCwgYW5kIEdJRCBhbmQgZ2FsbGVyeSBpbmRleClcbiAqICAgXG4gKiAtIFN3aXRjaCBVUkwgd2hlbiBzbGlkZXMgY2hhbmdlLlxuICogXG4gKi9cblxuXG52YXIgX2hpc3RvcnlEZWZhdWx0T3B0aW9ucyA9IHtcblx0aGlzdG9yeTogdHJ1ZSxcblx0Z2FsbGVyeVVJRDogMVxufTtcblxudmFyIF9oaXN0b3J5VXBkYXRlVGltZW91dCxcblx0X2hhc2hDaGFuZ2VUaW1lb3V0LFxuXHRfaGFzaEFuaW1DaGVja1RpbWVvdXQsXG5cdF9oYXNoQ2hhbmdlZEJ5U2NyaXB0LFxuXHRfaGFzaENoYW5nZWRCeUhpc3RvcnksXG5cdF9oYXNoUmVzZXRlZCxcblx0X2luaXRpYWxIYXNoLFxuXHRfaGlzdG9yeUNoYW5nZWQsXG5cdF9jbG9zZWRGcm9tVVJMLFxuXHRfdXJsQ2hhbmdlZE9uY2UsXG5cdF93aW5kb3dMb2MsXG5cblx0X3N1cHBvcnRzUHVzaFN0YXRlLFxuXG5cdF9nZXRIYXNoID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF93aW5kb3dMb2MuaGFzaC5zdWJzdHJpbmcoMSk7XG5cdH0sXG5cdF9jbGVhbkhpc3RvcnlUaW1lb3V0cyA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYoX2hpc3RvcnlVcGRhdGVUaW1lb3V0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoX2hpc3RvcnlVcGRhdGVUaW1lb3V0KTtcblx0XHR9XG5cblx0XHRpZihfaGFzaEFuaW1DaGVja1RpbWVvdXQpIHtcblx0XHRcdGNsZWFyVGltZW91dChfaGFzaEFuaW1DaGVja1RpbWVvdXQpO1xuXHRcdH1cblx0fSxcblxuXHQvLyBwaWQgLSBQaWN0dXJlIGluZGV4XG5cdC8vIGdpZCAtIEdhbGxlcnkgaW5kZXhcblx0X3BhcnNlSXRlbUluZGV4RnJvbVVSTCA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoYXNoID0gX2dldEhhc2goKSxcblx0XHRcdHBhcmFtcyA9IHt9O1xuXG5cdFx0aWYoaGFzaC5sZW5ndGggPCA1KSB7IC8vIHBpZD0xXG5cdFx0XHRyZXR1cm4gcGFyYW1zO1xuXHRcdH1cblxuXHRcdHZhciBpLCB2YXJzID0gaGFzaC5zcGxpdCgnJicpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCB2YXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZighdmFyc1tpXSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHZhciBwYWlyID0gdmFyc1tpXS5zcGxpdCgnPScpO1x0XG5cdFx0XHRpZihwYWlyLmxlbmd0aCA8IDIpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRwYXJhbXNbcGFpclswXV0gPSBwYWlyWzFdO1xuXHRcdH1cblx0XHRpZihfb3B0aW9ucy5nYWxsZXJ5UElEcykge1xuXHRcdFx0Ly8gZGV0ZWN0IGN1c3RvbSBwaWQgaW4gaGFzaCBhbmQgc2VhcmNoIGZvciBpdCBhbW9uZyB0aGUgaXRlbXMgY29sbGVjdGlvblxuXHRcdFx0dmFyIHNlYXJjaGZvciA9IHBhcmFtcy5waWQ7XG5cdFx0XHRwYXJhbXMucGlkID0gMDsgLy8gaWYgY3VzdG9tIHBpZCBjYW5ub3QgYmUgZm91bmQsIGZhbGxiYWNrIHRvIHRoZSBmaXJzdCBpdGVtXG5cdFx0XHRmb3IoaSA9IDA7IGkgPCBfaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYoX2l0ZW1zW2ldLnBpZCA9PT0gc2VhcmNoZm9yKSB7XG5cdFx0XHRcdFx0cGFyYW1zLnBpZCA9IGk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cGFyYW1zLnBpZCA9IHBhcnNlSW50KHBhcmFtcy5waWQsMTApLTE7XG5cdFx0fVxuXHRcdGlmKCBwYXJhbXMucGlkIDwgMCApIHtcblx0XHRcdHBhcmFtcy5waWQgPSAwO1xuXHRcdH1cblx0XHRyZXR1cm4gcGFyYW1zO1xuXHR9LFxuXHRfdXBkYXRlSGFzaCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYoX2hhc2hBbmltQ2hlY2tUaW1lb3V0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoX2hhc2hBbmltQ2hlY2tUaW1lb3V0KTtcblx0XHR9XG5cblxuXHRcdGlmKF9udW1BbmltYXRpb25zIHx8IF9pc0RyYWdnaW5nKSB7XG5cdFx0XHQvLyBjaGFuZ2luZyBicm93c2VyIFVSTCBmb3JjZXMgbGF5b3V0L3BhaW50IGluIHNvbWUgYnJvd3NlcnMsIHdoaWNoIGNhdXNlcyBub3RpY2FibGUgbGFnIGR1cmluZyBhbmltYXRpb25cblx0XHRcdC8vIHRoYXQncyB3aHkgd2UgdXBkYXRlIGhhc2ggb25seSB3aGVuIG5vIGFuaW1hdGlvbnMgcnVubmluZ1xuXHRcdFx0X2hhc2hBbmltQ2hlY2tUaW1lb3V0ID0gc2V0VGltZW91dChfdXBkYXRlSGFzaCwgNTAwKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0aWYoX2hhc2hDaGFuZ2VkQnlTY3JpcHQpIHtcblx0XHRcdGNsZWFyVGltZW91dChfaGFzaENoYW5nZVRpbWVvdXQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfaGFzaENoYW5nZWRCeVNjcmlwdCA9IHRydWU7XG5cdFx0fVxuXG5cblx0XHR2YXIgcGlkID0gKF9jdXJyZW50SXRlbUluZGV4ICsgMSk7XG5cdFx0dmFyIGl0ZW0gPSBfZ2V0SXRlbUF0KCBfY3VycmVudEl0ZW1JbmRleCApO1xuXHRcdGlmKGl0ZW0uaGFzT3duUHJvcGVydHkoJ3BpZCcpKSB7XG5cdFx0XHQvLyBjYXJyeSBmb3J3YXJkIGFueSBjdXN0b20gcGlkIGFzc2lnbmVkIHRvIHRoZSBpdGVtXG5cdFx0XHRwaWQgPSBpdGVtLnBpZDtcblx0XHR9XG5cdFx0dmFyIG5ld0hhc2ggPSBfaW5pdGlhbEhhc2ggKyAnJicgICsgICdnaWQ9JyArIF9vcHRpb25zLmdhbGxlcnlVSUQgKyAnJicgKyAncGlkPScgKyBwaWQ7XG5cblx0XHRpZighX2hpc3RvcnlDaGFuZ2VkKSB7XG5cdFx0XHRpZihfd2luZG93TG9jLmhhc2guaW5kZXhPZihuZXdIYXNoKSA9PT0gLTEpIHtcblx0XHRcdFx0X3VybENoYW5nZWRPbmNlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdC8vIGZpcnN0IHRpbWUgLSBhZGQgbmV3IGhpc29yeSByZWNvcmQsIHRoZW4ganVzdCByZXBsYWNlXG5cdFx0fVxuXG5cdFx0dmFyIG5ld1VSTCA9IF93aW5kb3dMb2MuaHJlZi5zcGxpdCgnIycpWzBdICsgJyMnICsgIG5ld0hhc2g7XG5cblx0XHRpZiggX3N1cHBvcnRzUHVzaFN0YXRlICkge1xuXG5cdFx0XHRpZignIycgKyBuZXdIYXNoICE9PSB3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuXHRcdFx0XHRoaXN0b3J5W19oaXN0b3J5Q2hhbmdlZCA/ICdyZXBsYWNlU3RhdGUnIDogJ3B1c2hTdGF0ZSddKCcnLCBkb2N1bWVudC50aXRsZSwgbmV3VVJMKTtcblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZihfaGlzdG9yeUNoYW5nZWQpIHtcblx0XHRcdFx0X3dpbmRvd0xvYy5yZXBsYWNlKCBuZXdVUkwgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF93aW5kb3dMb2MuaGFzaCA9IG5ld0hhc2g7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdFxuXG5cdFx0X2hpc3RvcnlDaGFuZ2VkID0gdHJ1ZTtcblx0XHRfaGFzaENoYW5nZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0X2hhc2hDaGFuZ2VkQnlTY3JpcHQgPSBmYWxzZTtcblx0XHR9LCA2MCk7XG5cdH07XG5cblxuXG5cdFxuXG5fcmVnaXN0ZXJNb2R1bGUoJ0hpc3RvcnknLCB7XG5cblx0XG5cblx0cHVibGljTWV0aG9kczoge1xuXHRcdGluaXRIaXN0b3J5OiBmdW5jdGlvbigpIHtcblxuXHRcdFx0ZnJhbWV3b3JrLmV4dGVuZChfb3B0aW9ucywgX2hpc3RvcnlEZWZhdWx0T3B0aW9ucywgdHJ1ZSk7XG5cblx0XHRcdGlmKCAhX29wdGlvbnMuaGlzdG9yeSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cblx0XHRcdF93aW5kb3dMb2MgPSB3aW5kb3cubG9jYXRpb247XG5cdFx0XHRfdXJsQ2hhbmdlZE9uY2UgPSBmYWxzZTtcblx0XHRcdF9jbG9zZWRGcm9tVVJMID0gZmFsc2U7XG5cdFx0XHRfaGlzdG9yeUNoYW5nZWQgPSBmYWxzZTtcblx0XHRcdF9pbml0aWFsSGFzaCA9IF9nZXRIYXNoKCk7XG5cdFx0XHRfc3VwcG9ydHNQdXNoU3RhdGUgPSAoJ3B1c2hTdGF0ZScgaW4gaGlzdG9yeSk7XG5cblxuXHRcdFx0aWYoX2luaXRpYWxIYXNoLmluZGV4T2YoJ2dpZD0nKSA+IC0xKSB7XG5cdFx0XHRcdF9pbml0aWFsSGFzaCA9IF9pbml0aWFsSGFzaC5zcGxpdCgnJmdpZD0nKVswXTtcblx0XHRcdFx0X2luaXRpYWxIYXNoID0gX2luaXRpYWxIYXNoLnNwbGl0KCc/Z2lkPScpWzBdO1xuXHRcdFx0fVxuXHRcdFx0XG5cblx0XHRcdF9saXN0ZW4oJ2FmdGVyQ2hhbmdlJywgc2VsZi51cGRhdGVVUkwpO1xuXHRcdFx0X2xpc3RlbigndW5iaW5kRXZlbnRzJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGZyYW1ld29yay51bmJpbmQod2luZG93LCAnaGFzaGNoYW5nZScsIHNlbGYub25IYXNoQ2hhbmdlKTtcblx0XHRcdH0pO1xuXG5cblx0XHRcdHZhciByZXR1cm5Ub09yaWdpbmFsID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdF9oYXNoUmVzZXRlZCA9IHRydWU7XG5cdFx0XHRcdGlmKCFfY2xvc2VkRnJvbVVSTCkge1xuXG5cdFx0XHRcdFx0aWYoX3VybENoYW5nZWRPbmNlKSB7XG5cdFx0XHRcdFx0XHRoaXN0b3J5LmJhY2soKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRpZihfaW5pdGlhbEhhc2gpIHtcblx0XHRcdFx0XHRcdFx0X3dpbmRvd0xvYy5oYXNoID0gX2luaXRpYWxIYXNoO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKF9zdXBwb3J0c1B1c2hTdGF0ZSkge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gcmVtb3ZlIGhhc2ggZnJvbSB1cmwgd2l0aG91dCByZWZyZXNoaW5nIGl0IG9yIHNjcm9sbGluZyB0byB0b3Bcblx0XHRcdFx0XHRcdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZSgnJywgZG9jdW1lbnQudGl0bGUsICBfd2luZG93TG9jLnBhdGhuYW1lICsgX3dpbmRvd0xvYy5zZWFyY2ggKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRfd2luZG93TG9jLmhhc2ggPSAnJztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdF9jbGVhbkhpc3RvcnlUaW1lb3V0cygpO1xuXHRcdFx0fTtcblxuXG5cdFx0XHRfbGlzdGVuKCd1bmJpbmRFdmVudHMnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoX2Nsb3NlZEJ5U2Nyb2xsKSB7XG5cdFx0XHRcdFx0Ly8gaWYgUGhvdG9Td2lwZSBpcyBjbG9zZWQgYnkgc2Nyb2xsLCB3ZSBnbyBcImJhY2tcIiBiZWZvcmUgdGhlIGNsb3NpbmcgYW5pbWF0aW9uIHN0YXJ0c1xuXHRcdFx0XHRcdC8vIHRoaXMgaXMgZG9uZSB0byBrZWVwIHRoZSBzY3JvbGwgcG9zaXRpb25cblx0XHRcdFx0XHRyZXR1cm5Ub09yaWdpbmFsKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0X2xpc3RlbignZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZighX2hhc2hSZXNldGVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuVG9PcmlnaW5hbCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdF9saXN0ZW4oJ2ZpcnN0VXBkYXRlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdF9jdXJyZW50SXRlbUluZGV4ID0gX3BhcnNlSXRlbUluZGV4RnJvbVVSTCgpLnBpZDtcblx0XHRcdH0pO1xuXG5cdFx0XHRcblxuXHRcdFx0XG5cdFx0XHR2YXIgaW5kZXggPSBfaW5pdGlhbEhhc2guaW5kZXhPZigncGlkPScpO1xuXHRcdFx0aWYoaW5kZXggPiAtMSkge1xuXHRcdFx0XHRfaW5pdGlhbEhhc2ggPSBfaW5pdGlhbEhhc2guc3Vic3RyaW5nKDAsIGluZGV4KTtcblx0XHRcdFx0aWYoX2luaXRpYWxIYXNoLnNsaWNlKC0xKSA9PT0gJyYnKSB7XG5cdFx0XHRcdFx0X2luaXRpYWxIYXNoID0gX2luaXRpYWxIYXNoLnNsaWNlKDAsIC0xKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKF9pc09wZW4pIHsgLy8gaGFzbid0IGRlc3Ryb3llZCB5ZXRcblx0XHRcdFx0XHRmcmFtZXdvcmsuYmluZCh3aW5kb3csICdoYXNoY2hhbmdlJywgc2VsZi5vbkhhc2hDaGFuZ2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCA0MCk7XG5cdFx0XHRcblx0XHR9LFxuXHRcdG9uSGFzaENoYW5nZTogZnVuY3Rpb24oKSB7XG5cblx0XHRcdGlmKF9nZXRIYXNoKCkgPT09IF9pbml0aWFsSGFzaCkge1xuXG5cdFx0XHRcdF9jbG9zZWRGcm9tVVJMID0gdHJ1ZTtcblx0XHRcdFx0c2VsZi5jbG9zZSgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZighX2hhc2hDaGFuZ2VkQnlTY3JpcHQpIHtcblxuXHRcdFx0XHRfaGFzaENoYW5nZWRCeUhpc3RvcnkgPSB0cnVlO1xuXHRcdFx0XHRzZWxmLmdvVG8oIF9wYXJzZUl0ZW1JbmRleEZyb21VUkwoKS5waWQgKTtcblx0XHRcdFx0X2hhc2hDaGFuZ2VkQnlIaXN0b3J5ID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9LFxuXHRcdHVwZGF0ZVVSTDogZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIERlbGF5IHRoZSB1cGRhdGUgb2YgVVJMLCB0byBhdm9pZCBsYWcgZHVyaW5nIHRyYW5zaXRpb24sIFxuXHRcdFx0Ly8gYW5kIHRvIG5vdCB0byB0cmlnZ2VyIGFjdGlvbnMgbGlrZSBcInJlZnJlc2ggcGFnZSBzb3VuZFwiIG9yIFwiYmxpbmtpbmcgZmF2aWNvblwiIHRvIG9mdGVuXG5cdFx0XHRcblx0XHRcdF9jbGVhbkhpc3RvcnlUaW1lb3V0cygpO1xuXHRcdFx0XG5cblx0XHRcdGlmKF9oYXNoQ2hhbmdlZEJ5SGlzdG9yeSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFfaGlzdG9yeUNoYW5nZWQpIHtcblx0XHRcdFx0X3VwZGF0ZUhhc2goKTsgLy8gZmlyc3QgdGltZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X2hpc3RvcnlVcGRhdGVUaW1lb3V0ID0gc2V0VGltZW91dChfdXBkYXRlSGFzaCwgODAwKTtcblx0XHRcdH1cblx0XHR9XG5cdFxuXHR9XG59KTtcblxuXG4vKj4+aGlzdG9yeSovXG5cdGZyYW1ld29yay5leHRlbmQoc2VsZiwgcHVibGljTWV0aG9kcyk7IH07XG5cdHJldHVybiBQaG90b1N3aXBlO1xufSk7IiwiaW1wb3J0IFBob3RvU3dpcGUgZnJvbSAncGhvdG9zd2lwZSc7XG5pbXBvcnQgUGhvdG9Td2lwZVVJRGVmYXVsdCBmcm9tICdwaG90b3N3aXBlL2Rpc3QvcGhvdG9zd2lwZS11aS1kZWZhdWx0JztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48IS0tc3VwcHJlc3MgQ2hlY2tUYWdFbXB0eUJvZHkgLS0+XG48ZGl2IGNsYXNzPVwicHN3cFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgPGRpdiBjbGFzcz1cInBzd3BfX2JnXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBzd3BfX3Njcm9sbC13cmFwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19pdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9faXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2l0ZW1cIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX191aSBwc3dwX191aS0taGlkZGVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fdG9wLWJhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19jb3VudGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLWNsb3NlXCIgdGl0bGU9XCJDbG9zZSAoRXNjKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVwicHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbiYjNDU7JiM0NTtzaGFyZVwiIHRpdGxlPVwiU2hhcmVcIj48L2J1dHRvbj4tLT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbi0tZnNcIiB0aXRsZT1cIlRvZ2dsZSBmdWxsc2NyZWVuXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLXpvb21cIiB0aXRsZT1cIlpvb20gaW4vb3V0XCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3ByZWxvYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fcHJlbG9hZGVyX19pY25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fcHJlbG9hZGVyX19jdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19wcmVsb2FkZXJfX2RvbnV0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fc2hhcmUtbW9kYWwgcHN3cF9fc2hhcmUtbW9kYWwtLWhpZGRlbiBwc3dwX19zaW5nbGUtdGFwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3NoYXJlLXRvb2x0aXBcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLWFycm93LS1sZWZ0XCIgdGl0bGU9XCJQcmV2aW91cyAoYXJyb3cgbGVmdClcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHRcIiB0aXRsZT1cIk5leHQgKGFycm93IHJpZ2h0KVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2NhcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fY2FwdGlvbl9fY2VudGVyXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbmA7XG5cbmNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5kaXYuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG5cbmNvbnN0IGVsZW1lbnQgPSBkaXYuZmlyc3RFbGVtZW50Q2hpbGQhIGFzIEhUTUxFbGVtZW50O1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVHYWxsZXJ5KGltYWdlczogUGhvdG9Td2lwZS5JdGVtW10sIG9wdGlvbnM6IFBob3RvU3dpcGUuT3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUGhvdG9Td2lwZShlbGVtZW50LCBQaG90b1N3aXBlVUlEZWZhdWx0LCBpbWFnZXMsIG9wdGlvbnMpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==