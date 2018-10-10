webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/dist/antd.min.css */ "./node_modules/antd/dist/antd.min.css");
/* harmony import */ var antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var _jsxFileName = "/Users/peter/Desktop/hacked/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Search = antd__WEBPACK_IMPORTED_MODULE_6__["Input"].Search;
var Meta = antd__WEBPACK_IMPORTED_MODULE_6__["Card"].Meta;

var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getLogo", function (name, type) {
      return "https://haveibeenpwned.com/Content/Images/PwnedLogos/".concat(name, ".").concat(type);
    });

    _this.state = {
      results: [],
      loading: false
    };
    return _this;
  } // static async getInitialProps() {
  //   const res = await fetch('https://haveibeenpwned.com/api/v2/breachedaccount/cooglooop@gmail.com')
  //   const data = await res.json()
  //   return {
  //     results: data
  //   }
  // }


  _createClass(Home, [{
    key: "handleSearch",
    value: function () {
      var _handleSearch = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(query) {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  loading: true
                });
                _context.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://haveibeenpwned.com/api/v2/breachedaccount/".concat(query));

              case 3:
                res = _context.sent;

                if (!res) {
                  _context.next = 11;
                  break;
                }

                _context.next = 7;
                return res.json();

              case 7:
                data = _context.sent;
                this.setState({
                  results: data,
                  loading: false
                });
                _context.next = 12;
                break;

              case 11:
                this.setState({
                  results: [],
                  loading: false
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handleSearch(_x) {
        return _handleSearch.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-243749409",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: "Home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        type: "flex",
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-243749409" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Sombra"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-243749409" + " " + "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Hack the planet")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        type: "flex",
        justify: "center",
        style: {
          marginTop: '1em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: 20,
        sm: 20,
        md: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Search, {
        style: {
          textAlign: 'center'
        },
        placeholder: "Search an email or username",
        enterButton: true,
        size: "large",
        onSearch: function onSearch(value) {
          return _this2.handleSearch(value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        type: "flex",
        justify: "center",
        style: {
          marginTop: '2em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, this.state.loading ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 24,
        md: 16,
        style: {
          paddingLeft: '1em',
          paddingRight: '1em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        style: {
          marginTop: 16
        },
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Meta, {
        title: "Loading...",
        description: "Loading...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }))) : this.state.results.map(function (hack) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          key: hack.Name,
          sm: 24,
          md: 16,
          style: {
            paddingLeft: '1em',
            paddingRight: '1em'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Popover"], {
          content: hack.DataClasses.map(function (e) {
            return e + '\n';
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
          style: {
            marginTop: 16
          },
          loading: _this2.state.loading,
          hoverable: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Meta, {
          avatar: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
            src: _this2.getLogo(hack.Name, hack.LogoType),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          }),
          title: hack.Name,
          description: hack.Description,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }))));
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "243749409",
        css: ".hero.jsx-243749409{width:100%;color:#333;}.title.jsx-243749409{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-243749409,.description.jsx-243749409{text-align:center;}.row.jsx-243749409{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-243749409{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-243749409:hover{border-color:#067df7;}.card.jsx-243749409 h3.jsx-243749409{margin:0;color:#067df7;font-size:18px;}.card.jsx-243749409 p.jsx-243749409{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZXRlci9EZXNrdG9wL2hhY2tlZC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR29CLEFBR29CLEFBSUYsQUFRUyxBQUdGLEFBT08sQUFRRixBQUdaLEFBS0EsU0FqQ0UsQUE2QkcsQUFLRyxFQXRDTixLQWVXLEVBSHhCLEVBUG1CLENBeUJuQixDQTdCQSxDQXFCYyxBQVlHLEdBS0EsU0FoQkMsRUFqQkMsQ0FVSixBQW1CZixHQUthLFVBaEJVLENBaUJ2QixFQWxDaUIsZUFDakIsZ0NBaUJnQixXQVJLLEdBU00seUJBQzNCLHlDQVQrQiwySEFDL0IiLCJmaWxlIjoiL1VzZXJzL3BldGVyL0Rlc2t0b3AvaGFja2VkL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkJ1xuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5taW4uY3NzJ1xuaW1wb3J0IHsgUm93LCBDb2wsIElucHV0LCBDYXJkLCBBdmF0YXIsIFBvcG92ZXIgfSBmcm9tICdhbnRkJztcblxuY29uc3QgU2VhcmNoID0gSW5wdXQuU2VhcmNoO1xuY29uc3QgeyBNZXRhIH0gPSBDYXJkXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJlc3VsdHM6IFtdLFxuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9XG4gIH1cblxuICAvLyBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAvLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2hhdmVpYmVlbnB3bmVkLmNvbS9hcGkvdjIvYnJlYWNoZWRhY2NvdW50L2Nvb2dsb29vcEBnbWFpbC5jb20nKVxuICAvLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgcmVzdWx0czogZGF0YVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGFzeW5jIGhhbmRsZVNlYXJjaChxdWVyeSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaGF2ZWliZWVucHduZWQuY29tL2FwaS92Mi9icmVhY2hlZGFjY291bnQvJHtxdWVyeX1gKVxuXG4gICAgaWYgKHJlcykge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXN1bHRzOiBkYXRhLCBsb2FkaW5nOiBmYWxzZSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcmVzdWx0czogW10sIGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgfVxuICB9XG5cbiAgZ2V0TG9nbyA9IChuYW1lLCB0eXBlKSA9PiBgaHR0cHM6Ly9oYXZlaWJlZW5wd25lZC5jb20vQ29udGVudC9JbWFnZXMvUHduZWRMb2dvcy8ke25hbWV9LiR7dHlwZX1gXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZCB0aXRsZT1cIkhvbWVcIiAvPlxuXG4gICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U29tYnJhPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgSGFjayB0aGUgcGxhbmV0XG4gICAgICA8L3A+XG4gICAgICAgIDwvUm93PlxuXG4gICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMWVtJyB9fT5cbiAgICAgICAgICA8Q29sIHhzPXsyMH0gc209ezIwfSBtZD17MTZ9PlxuICAgICAgICAgICAgPFNlYXJjaFxuICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGFuIGVtYWlsIG9yIHVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgb25TZWFyY2g9e3ZhbHVlID0+IHRoaXMuaGFuZGxlU2VhcmNoKHZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuXG5cbiAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcyZW0nIH19PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubG9hZGluZ1xuICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgIDxDb2wgc209ezI0fSBtZD17MTZ9IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMWVtJywgcGFkZGluZ1JpZ2h0OiAnMWVtJyB9fT5cbiAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IDE2IH19IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+XG4gICAgICAgICAgICAgICAgICA8TWV0YVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkxvYWRpbmcuLi5cIlxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkxvYWRpbmcuLi5cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUucmVzdWx0cy5tYXAoaGFjayA9PiAoXG4gICAgICAgICAgICAgICAgPENvbCBrZXk9e2hhY2suTmFtZX0gc209ezI0fSBtZD17MTZ9IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMWVtJywgcGFkZGluZ1JpZ2h0OiAnMWVtJyB9fT5cbiAgICAgICAgICAgICAgICAgIDxQb3BvdmVyIGNvbnRlbnQ9e2hhY2suRGF0YUNsYXNzZXMubWFwKGUgPT4gZSArICdcXG4nKX0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogMTYgfX0gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSBob3ZlcmFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgPE1ldGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9e3RoaXMuZ2V0TG9nbyhoYWNrLk5hbWUsIGhhY2suTG9nb1R5cGUpfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtoYWNrLk5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aGFjay5EZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L1Jvdz5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAuaGVybyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgfVxuICAgICAgLnRpdGxlLFxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnJvdyB7XG4gICAgICAgIG1heC13aWR0aDogODgwcHg7XG4gICAgICAgIG1hcmdpbjogODBweCBhdXRvIDQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgfVxuICAgICAgLmNhcmQge1xuICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHggMjRweDtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5YjliO1xuICAgICAgfVxuICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICMwNjdkZjc7XG4gICAgICB9XG4gICAgICAuY2FyZCBoMyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICMwNjdkZjc7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICAgIC5jYXJkIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMCAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/peter/Desktop/hacked/pages/index.js */",
        __self: this
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.7477e1f6a5266fd5d66a.hot-update.js.map