webpackJsonp([1],{

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(74);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(397);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page() {
        _classCallCheck(this, Page);

        return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
    }

    _createClass(Page, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "main-page" },
                _react2.default.createElement(
                    "div",
                    { className: "page-body" },
                    _react2.default.createElement(
                        "h1",
                        null,
                        "\u0421\u0430\u0439\u0442 \u043D\u0430 \u0440\u0435\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438"
                    )
                )
            );
        }
    }]);

    return Page;
}(_react2.default.Component);

exports.default = Page;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(137);

var _reduxThunk = __webpack_require__(531);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(530);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reducers = __webpack_require__(215);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by fazdev on 07.09.16.
 */

var loggerMiddleware = (0, _reduxLogger2.default)();

function configureStore() {
    return (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default, loggerMiddleware));
}

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(74);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(211);

var _reactRedux = __webpack_require__(212);

var _configureStore = __webpack_require__(208);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _Page = __webpack_require__(207);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)(); /**
                                              * Created by fazdev on 07.09.16.
                                              */


(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_Page2.default, { avatar: 'assets/avatar.jpg' })
), document.getElementById('app'));

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(137);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Created by fazdev on 08.09.16.
                                                                                                                                                           */


var RootReducer = function RootReducer() {
  _classCallCheck(this, RootReducer);
};

var rootReducer = (0, _redux.combineReducers)(new RootReducer());

exports.default = rootReducer;

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[214]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2VsZW1lbnRzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vL2FwcC9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vYXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vYXBwL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9lbGVtZW50cy9QYWdlLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgJy4vUGFnZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1wYWdlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoMT7QodCw0LnRgiDQvdCwINGA0LXQutC+0L3RgdGC0YDRg9C60YbQuNC4PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvZWxlbWVudHMvUGFnZS5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBmYXpkZXYgb24gMDcuMDkuMTYuXG4gKi9cblxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IGNyZWF0ZUxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcblxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9IGNyZWF0ZUxvZ2dlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZSgpIHtcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgICAgIHJvb3RSZWR1Y2VyLFxuICAgICAgICBhcHBseU1pZGRsZXdhcmUoXG4gICAgICAgICAgICB0aHVua01pZGRsZXdhcmUsXG4gICAgICAgICAgICBsb2dnZXJNaWRkbGV3YXJlXG4gICAgICAgIClcbiAgICApO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgZmF6ZGV2IG9uIDA3LjA5LjE2LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9lbGVtZW50cy9QYWdlJztcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuXG5yZW5kZXIoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxQYWdlIGF2YXRhcj17J2Fzc2V0cy9hdmF0YXIuanBnJ30vPlxuICAgIDwvUHJvdmlkZXI+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL0FwcC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBmYXpkZXYgb24gMDguMDkuMTYuXG4gKi9cbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuY2xhc3MgUm9vdFJlZHVjZXIge1xuXG59XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKG5ldyBSb290UmVkdWNlcigpKTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL3JlZHVjZXJzL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9lbGVtZW50cy9QYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDM5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFLQTs7OztBQVZBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7OztBQ09BO0FBQ0E7QUFSQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFSQTs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBOzs7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUpBOzs7OztBQUtBOzs7O0FBSUE7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==