exports.ids = [0];
exports.modules = {

/***/ "./src/photoswipe.ts":
/*!***************************!*\
  !*** ./src/photoswipe.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createGallery; });
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! photoswipe */ "photoswipe");
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(photoswipe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! photoswipe/dist/photoswipe-ui-default */ "photoswipe/dist/photoswipe-ui-default");
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1__);


const template = `
<!--suppress CheckTagEmptyBody -->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
                <div class="pswp__counter"></div>
                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                <!--<button class="pswp__button pswp__button&#45;&#45;share" title="Share"></button>-->
                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div>
            </div>
            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>
        </div>
    </div>
</div>
`;
const div = document.createElement('div');
div.innerHTML = template;
const element = div.firstElementChild;
document.body.appendChild(element);
function createGallery(images, options) {
  return new photoswipe__WEBPACK_IMPORTED_MODULE_0___default.a(element, photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1___default.a, images, options);
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGhvdG9zd2lwZS50cyJdLCJuYW1lcyI6WyJ0ZW1wbGF0ZSIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImVsZW1lbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUdhbGxlcnkiLCJpbWFnZXMiLCJvcHRpb25zIiwiUGhvdG9Td2lwZSIsIlBob3RvU3dpcGVVSURlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLFFBQVEsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQWxCO0FBc0NBLE1BQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFFQUYsR0FBRyxDQUFDRyxTQUFKLEdBQWdCSixRQUFoQjtBQUVBLE1BQU1LLE9BQU8sR0FBR0osR0FBRyxDQUFDSyxpQkFBcEI7QUFFQUosUUFBUSxDQUFDSyxJQUFULENBQWNDLFdBQWQsQ0FBMEJILE9BQTFCO0FBRWUsU0FBU0ksYUFBVCxDQUF1QkMsTUFBdkIsRUFBa0RDLE9BQWxELEVBQStFO0FBQzFGLFNBQU8sSUFBSUMsaURBQUosQ0FBZVAsT0FBZixFQUF3QlEsNEVBQXhCLEVBQTZDSCxNQUE3QyxFQUFxREMsT0FBckQsQ0FBUDtBQUNILEMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQaG90b1N3aXBlIGZyb20gJ3Bob3Rvc3dpcGUnO1xuaW1wb3J0IFBob3RvU3dpcGVVSURlZmF1bHQgZnJvbSAncGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUtdWktZGVmYXVsdCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPCEtLXN1cHByZXNzIENoZWNrVGFnRW1wdHlCb2R5IC0tPlxuPGRpdiBjbGFzcz1cInBzd3BcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwc3dwX19iZ1wiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwc3dwX19zY3JvbGwtd3JhcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9faXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2l0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19pdGVtXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fdWkgcHN3cF9fdWktLWhpZGRlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3RvcC1iYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fY291bnRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1jbG9zZVwiIHRpdGxlPVwiQ2xvc2UgKEVzYylcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8IS0tPGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24mIzQ1OyYjNDU7c2hhcmVcIiB0aXRsZT1cIlNoYXJlXCI+PC9idXR0b24+LS0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLWZzXCIgdGl0bGU9XCJUb2dnbGUgZnVsbHNjcmVlblwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS16b29tXCIgdGl0bGU9XCJab29tIGluL291dFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19wcmVsb2FkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3ByZWxvYWRlcl9faWNuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3ByZWxvYWRlcl9fY3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fcHJlbG9hZGVyX19kb251dFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3NoYXJlLW1vZGFsIHBzd3BfX3NoYXJlLW1vZGFsLS1oaWRkZW4gcHN3cF9fc2luZ2xlLXRhcFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19zaGFyZS10b29sdGlwXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdFwiIHRpdGxlPVwiUHJldmlvdXMgKGFycm93IGxlZnQpXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0XCIgdGl0bGU9XCJOZXh0IChhcnJvdyByaWdodClcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19jYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2NhcHRpb25fX2NlbnRlclwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5gO1xuXG5jb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuZGl2LmlubmVySFRNTCA9IHRlbXBsYXRlO1xuXG5jb25zdCBlbGVtZW50ID0gZGl2LmZpcnN0RWxlbWVudENoaWxkISBhcyBIVE1MRWxlbWVudDtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlR2FsbGVyeShpbWFnZXM6IFBob3RvU3dpcGUuSXRlbVtdLCBvcHRpb25zOiBQaG90b1N3aXBlLk9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFBob3RvU3dpcGUoZWxlbWVudCwgUGhvdG9Td2lwZVVJRGVmYXVsdCwgaW1hZ2VzLCBvcHRpb25zKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=