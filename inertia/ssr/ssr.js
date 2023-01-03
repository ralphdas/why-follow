/******/ var __webpack_modules__ = {
  /***/ './resources/pages/Home.tsx':
    /*!**********************************!*\
  !*** ./resources/pages/Home.tsx ***!
  \**********************************/
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      var jsx_runtime_1 = __webpack_require__(
        /*! react/jsx-runtime */ 'react/jsx-runtime'
      );
      function home() {
        return (0, jsx_runtime_1.jsx)('div', {
          children: 'Home',
        });
      }
      exports['default'] = home;

      /***/
    },

  /***/ './resources/pages/Profile.tsx':
    /*!*************************************!*\
  !*** ./resources/pages/Profile.tsx ***!
  \*************************************/
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule
            ? mod
            : {
                default: mod,
              };
        };
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      var jsx_runtime_1 = __webpack_require__(
        /*! react/jsx-runtime */ 'react/jsx-runtime'
      );
      var QuestionContainerComponent_1 = __importDefault(
        __webpack_require__(
          /*! ./components/QuestionContainerComponent */ './resources/pages/components/QuestionContainerComponent.tsx'
        )
      );
      function Profile(_ref) {
        var profileUser = _ref.profileUser,
          isOwnProfile = _ref.isOwnProfile;
        console.log('Profile', profileUser, isOwnProfile);
        return (0, jsx_runtime_1.jsx)(QuestionContainerComponent_1['default'], {
          profileUser: profileUser,
          isOwnProfile: isOwnProfile,
        });
      }
      exports['default'] = Profile;

      /***/
    },

  /***/ './resources/pages/components/IconComponent.tsx':
    /*!******************************************************!*\
  !*** ./resources/pages/components/IconComponent.tsx ***!
  \******************************************************/
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              var desc = Object.getOwnPropertyDescriptor(m, k);
              if (
                !desc ||
                ('get' in desc
                  ? !m.__esModule
                  : desc.writable || desc.configurable)
              ) {
                desc = {
                  enumerable: true,
                  get: function get() {
                    return m[k];
                  },
                };
              }
              Object.defineProperty(o, k2, desc);
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
            });
      var __setModuleDefault =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (o, v) {
              Object.defineProperty(o, 'default', {
                enumerable: true,
                value: v,
              });
            }
          : function (o, v) {
              o['default'] = v;
            });
      var __importStar =
        (this && this.__importStar) ||
        function (mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null)
            for (var k in mod) {
              if (
                k !== 'default' &&
                Object.prototype.hasOwnProperty.call(mod, k)
              )
                __createBinding(result, mod, k);
            }
          __setModuleDefault(result, mod);
          return result;
        };
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      var react_1 = __webpack_require__(/*! react */ 'react');
      var Icon = __importStar(
        __webpack_require__(/*! phosphor-react */ 'phosphor-react')
      );
      function IconComponent(_ref) {
        var iconName = _ref.iconName,
          _ref$size = _ref.size,
          size = _ref$size === void 0 ? 24 : _ref$size,
          _ref$className = _ref.className,
          className = _ref$className === void 0 ? '' : _ref$className;
        return (0, react_1.createElement)(Icon[iconName], {
          size: ''.concat(size, 'px'),
          className: className,
        });
      }
      exports['default'] = IconComponent;

      /***/
    },

  /***/ './resources/pages/components/QuestionBtnComponent.tsx':
    /*!*************************************************************!*\
  !*** ./resources/pages/components/QuestionBtnComponent.tsx ***!
  \*************************************************************/
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule
            ? mod
            : {
                default: mod,
              };
        };
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      var jsx_runtime_1 = __webpack_require__(
        /*! react/jsx-runtime */ 'react/jsx-runtime'
      );
      var IconComponent_1 = __importDefault(
        __webpack_require__(
          /*! ./IconComponent */ './resources/pages/components/IconComponent.tsx'
        )
      );
      function QuestionBtnComponent(_ref) {
        var iconName = _ref.iconName,
          label = _ref.label,
          onClick = _ref.onClick;
        function onClickHandler() {
          if (onClick) {
            onClick();
          }
        }
        return (0, jsx_runtime_1.jsxs)('button', {
          onClick: onClickHandler,
          className:
            'md:w-32 md:h-full flex-1 transition-colors md:flex-col justify-center items-center flex border-t md:border-t-0 md:border-l border-gray-300 hover:bg-gray-900 hover:text-gray-50 p-6 ',
          children: [
            (0, jsx_runtime_1.jsx)('span', {
              className: 'text-2xl mr-1 md:mr-0 md:mb-1',
              children: (0, jsx_runtime_1.jsx)(IconComponent_1['default'], {
                iconName: iconName,
              }),
            }),
            (0, jsx_runtime_1.jsx)('span', {
              children: label,
            }),
          ],
        });
      }
      exports['default'] = QuestionBtnComponent;

      /***/
    },

  /***/ './resources/pages/components/QuestionComponent.tsx':
    /*!**********************************************************!*\
  !*** ./resources/pages/components/QuestionComponent.tsx ***!
  \**********************************************************/
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      function _slicedToArray(arr, i) {
        return (
          _arrayWithHoles(arr) ||
          _iterableToArrayLimit(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          _nonIterableRest()
        );
      }
      function _nonIterableRest() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === 'Object' && o.constructor) n = o.constructor.name;
        if (n === 'Map' || n === 'Set') return Array.from(o);
        if (
          n === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      function _iterableToArrayLimit(arr, i) {
        var _i =
          null == arr
            ? null
            : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
              arr['@@iterator'];
        if (null != _i) {
          var _s,
            _e,
            _x,
            _r,
            _arr = [],
            _n = !0,
            _d = !1;
          try {
            if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
              if (Object(_i) !== _i) return;
              _n = !1;
            } else
              for (
                ;
                !(_n = (_s = _x.call(_i)).done) &&
                (_arr.push(_s.value), _arr.length !== i);
                _n = !0
              ) {}
          } catch (err) {
            (_d = !0), (_e = err);
          } finally {
            try {
              if (
                !_n &&
                null != _i['return'] &&
                ((_r = _i['return']()), Object(_r) !== _r)
              )
                return;
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              var desc = Object.getOwnPropertyDescriptor(m, k);
              if (
                !desc ||
                ('get' in desc
                  ? !m.__esModule
                  : desc.writable || desc.configurable)
              ) {
                desc = {
                  enumerable: true,
                  get: function get() {
                    return m[k];
                  },
                };
              }
              Object.defineProperty(o, k2, desc);
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
            });
      var __setModuleDefault =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (o, v) {
              Object.defineProperty(o, 'default', {
                enumerable: true,
                value: v,
              });
            }
          : function (o, v) {
              o['default'] = v;
            });
      var __importStar =
        (this && this.__importStar) ||
        function (mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null)
            for (var k in mod) {
              if (
                k !== 'default' &&
                Object.prototype.hasOwnProperty.call(mod, k)
              )
                __createBinding(result, mod, k);
            }
          __setModuleDefault(result, mod);
          return result;
        };
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule
            ? mod
            : {
                default: mod,
              };
        };
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      var jsx_runtime_1 = __webpack_require__(
        /*! react/jsx-runtime */ 'react/jsx-runtime'
      );
      var inertia_1 = __webpack_require__(
        /*! @inertiajs/inertia */ '@inertiajs/inertia'
      );
      var react_1 = __importStar(__webpack_require__(/*! react */ 'react'));
      var QuestionBtnComponent_1 = __importDefault(
        __webpack_require__(
          /*! ./QuestionBtnComponent */ './resources/pages/components/QuestionBtnComponent.tsx'
        )
      );
      var QuestionTextWrapperComponent_1 = __importDefault(
        __webpack_require__(
          /*! ./QuestionTextWrapperComponent */ './resources/pages/components/QuestionTextWrapperComponent.tsx'
        )
      );
      function QuestionComponent(_ref) {
        var index = _ref.index,
          question = _ref.question,
          _ref$editModeEnabledB = _ref.editModeEnabledByDefault,
          editModeEnabledByDefault =
            _ref$editModeEnabledB === void 0 ? false : _ref$editModeEnabledB,
          _ref$isOwnProfile = _ref.isOwnProfile,
          isOwnProfile =
            _ref$isOwnProfile === void 0 ? false : _ref$isOwnProfile,
          hideQuestion = _ref.hideQuestion;
        var titleRef = (0, react_1.useRef)(null);
        var descriptionRef = (0, react_1.useRef)(null);
        var initialTitle = question.content.title;
        var initialDescription = question.content.description;
        var _react_1$default$useS = react_1['default'].useState(false),
          _react_1$default$useS2 = _slicedToArray(_react_1$default$useS, 2),
          editMode = _react_1$default$useS2[0],
          setEditMode = _react_1$default$useS2[1];
        (0, react_1.useEffect)(
          function () {
            if (editModeEnabledByDefault) {
              setEditMode(true);
            }
          },
          [editModeEnabledByDefault]
        );
        (0, react_1.useEffect)(
          function () {
            if (editMode) {
              var selection = window.getSelection();
              if (selection) {
                selection.removeAllRanges();
                var range = document.createRange();
                range.selectNodeContents(titleRef.current);
                selection.addRange(range);
                titleRef.current.focus();
              }
            }
          },
          [editMode]
        );
        function onKeyDownHandler(e) {
          if (e.key === 'Enter') {
            e.preventDefault();
            save();
          }
          if (e.key === 'Escape') {
            reset();
          }
        }
        function save() {
          if (editModeEnabledByDefault) {
            var _titleRef$current, _descriptionRef$curre;
            inertia_1.Inertia.post('/api/questions', {
              title:
                (_titleRef$current = titleRef.current) === null ||
                _titleRef$current === void 0
                  ? void 0
                  : _titleRef$current.innerText,
              description:
                (_descriptionRef$curre = descriptionRef.current) === null ||
                _descriptionRef$curre === void 0
                  ? void 0
                  : _descriptionRef$curre.innerText,
              languageCode: 'en',
            });
            hideQuestion && hideQuestion();
          } else {
            var _titleRef$current2, _descriptionRef$curre2;
            inertia_1.Inertia.put('/api/questions/' + question.id, {
              title:
                (_titleRef$current2 = titleRef.current) === null ||
                _titleRef$current2 === void 0
                  ? void 0
                  : _titleRef$current2.innerText,
              description:
                (_descriptionRef$curre2 = descriptionRef.current) === null ||
                _descriptionRef$curre2 === void 0
                  ? void 0
                  : _descriptionRef$curre2.innerText,
            });
          }
          setEditMode(false);
        }
        function reset() {
          if (editModeEnabledByDefault) {
            hideQuestion && hideQuestion();
          } else {
            titleRef.current.innerText = initialTitle;
            descriptionRef.current.innerText = initialDescription;
            setEditMode(false);
          }
        }
        return (0, jsx_runtime_1.jsx)('li', {
          children: (0, jsx_runtime_1.jsxs)('div', {
            onKeyDown: onKeyDownHandler,
            className: 'flex flex-col mt-6 border border-gray-300 md:flex-row',
            children: [
              (0, jsx_runtime_1.jsx)(
                QuestionTextWrapperComponent_1['default'],
                {
                  content: question.content,
                  index: index,
                  editMode: editMode,
                  titleRef: titleRef,
                  descriptionRef: descriptionRef,
                }
              ),
              isOwnProfile &&
                (0, jsx_runtime_1.jsx)('div', {
                  className: 'flex-none flex',
                  children: !editMode
                    ? (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
                        children: [
                          (0, jsx_runtime_1.jsx)(
                            QuestionBtnComponent_1['default'],
                            {
                              iconName: 'Pencil',
                              label: 'edit',
                              onClick: function onClick() {
                                setEditMode(true);
                              },
                            }
                          ),
                          (0, jsx_runtime_1.jsx)(
                            QuestionBtnComponent_1['default'],
                            {
                              iconName: 'Trash',
                              label: 'delete',
                              onClick: function onClick() {
                                console.log('delete');
                                inertia_1.Inertia['delete'](
                                  '/api/questions/' + question.id
                                );
                              },
                            }
                          ),
                        ],
                      })
                    : (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
                        children: [
                          (0, jsx_runtime_1.jsx)(
                            QuestionBtnComponent_1['default'],
                            {
                              iconName: 'FloppyDisk',
                              label: 'save',
                              onClick: function onClick() {
                                save();
                              },
                            }
                          ),
                          (0, jsx_runtime_1.jsx)(
                            QuestionBtnComponent_1['default'],
                            {
                              iconName: 'X',
                              label: 'cancel',
                              onClick: function onClick() {
                                reset();
                              },
                            }
                          ),
                        ],
                      }),
                }),
            ],
          }),
        });
      }
      exports['default'] = QuestionComponent;

      /***/
    },

  /***/ './resources/pages/components/QuestionContainerComponent.tsx':
    /*!*******************************************************************!*\
  !*** ./resources/pages/components/QuestionContainerComponent.tsx ***!
  \*******************************************************************/
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      function _typeof(obj) {
        '@babel/helpers - typeof';
        return (
          (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    'function' == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, 'string');
        return _typeof(key) === 'symbol' ? key : String(key);
      }
      function _toPrimitive(input, hint) {
        if (_typeof(input) !== 'object' || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || 'default');
          if (_typeof(res) !== 'object') return res;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (hint === 'string' ? String : Number)(input);
      }
      function _slicedToArray(arr, i) {
        return (
          _arrayWithHoles(arr) ||
          _iterableToArrayLimit(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          _nonIterableRest()
        );
      }
      function _nonIterableRest() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === 'Object' && o.constructor) n = o.constructor.name;
        if (n === 'Map' || n === 'Set') return Array.from(o);
        if (
          n === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      function _iterableToArrayLimit(arr, i) {
        var _i =
          null == arr
            ? null
            : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
              arr['@@iterator'];
        if (null != _i) {
          var _s,
            _e,
            _x,
            _r,
            _arr = [],
            _n = !0,
            _d = !1;
          try {
            if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
              if (Object(_i) !== _i) return;
              _n = !1;
            } else
              for (
                ;
                !(_n = (_s = _x.call(_i)).done) &&
                (_arr.push(_s.value), _arr.length !== i);
                _n = !0
              ) {}
          } catch (err) {
            (_d = !0), (_e = err);
          } finally {
            try {
              if (
                !_n &&
                null != _i['return'] &&
                ((_r = _i['return']()), Object(_r) !== _r)
              )
                return;
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule
            ? mod
            : {
                default: mod,
              };
        };
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      var jsx_runtime_1 = __webpack_require__(
        /*! react/jsx-runtime */ 'react/jsx-runtime'
      );
      var _ddQuestionBtnComponent_1 = __importDefault(
        __webpack_require__(
          /*! ./ΑddQuestionBtnComponent */ './resources/pages/components/ΑddQuestionBtnComponent.tsx'
        )
      );
      var QuestionComponent_1 = __importDefault(
        __webpack_require__(
          /*! ./QuestionComponent */ './resources/pages/components/QuestionComponent.tsx'
        )
      );
      var react_1 = __webpack_require__(/*! react */ 'react');
      var react_2 = __webpack_require__(
        /*! @formkit/auto-animate/react */ '@formkit/auto-animate/react'
      );
      function QuestionContainerComponent(_ref) {
        var profileUser = _ref.profileUser,
          _ref$isOwnProfile = _ref.isOwnProfile,
          isOwnProfile =
            _ref$isOwnProfile === void 0 ? false : _ref$isOwnProfile;
        var questions = profileUser.questions;
        var _ref2 = (0, react_1.useState)(false),
          _ref3 = _slicedToArray(_ref2, 2),
          addNewQuestion = _ref3[0],
          setAddNewQuestion = _ref3[1];
        var _ref4 = (0, react_2.useAutoAnimate)(),
          _ref5 = _slicedToArray(_ref4, 1),
          parent = _ref5[0];
        return (0, jsx_runtime_1.jsxs)('ul', {
          ref: parent,
          children: [
            questions.map(function (question, index) {
              return (0, jsx_runtime_1.jsx)(
                QuestionComponent_1['default'],
                _objectSpread(
                  {
                    index: index + 1,
                  },
                  {
                    question: question,
                    isOwnProfile: isOwnProfile,
                    editModeEnabledByDefault: false,
                  }
                ),
                question.id
              );
            }),
            addNewQuestion &&
              (0, jsx_runtime_1.jsx)(
                QuestionComponent_1['default'],
                {
                  index: 0,
                  question: {
                    id: 0,
                    content: {
                      title: '',
                      description: '',
                    },
                    user: profileUser,
                  },
                  isOwnProfile: isOwnProfile,
                  editModeEnabledByDefault: true,
                  hideQuestion: function hideQuestion() {
                    setAddNewQuestion(false);
                  },
                },
                'new'
              ),
            isOwnProfile &&
              (0, jsx_runtime_1.jsx)('li', {
                className:
                  'flex transition-colors hover:bg-gray-100 border border-gray-300 -mt-px',
                children: (0, jsx_runtime_1.jsx)(
                  _ddQuestionBtnComponent_1['default'],
                  {
                    onClick: function onClick() {
                      setAddNewQuestion(true);
                    },
                  }
                ),
              }),
          ],
        });
      }
      exports['default'] = QuestionContainerComponent;

      /***/
    },

  /***/ './resources/pages/components/QuestionTextWrapperComponent.tsx':
    /*!*********************************************************************!*\
  !*** ./resources/pages/components/QuestionTextWrapperComponent.tsx ***!
  \*********************************************************************/
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      var jsx_runtime_1 = __webpack_require__(
        /*! react/jsx-runtime */ 'react/jsx-runtime'
      );
      function selectAllTextInElement(el) {
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel === null || sel === void 0 ? void 0 : sel.removeAllRanges();
        sel === null || sel === void 0 ? void 0 : sel.addRange(range);
      }
      function QuestionTextWrapperComponent(_ref) {
        var index = _ref.index,
          content = _ref.content,
          editMode = _ref.editMode,
          titleRef = _ref.titleRef,
          descriptionRef = _ref.descriptionRef;
        return (0, jsx_runtime_1.jsxs)('div', {
          className: 'flex-auto flex flex-col justify-center p-6',
          children: [
            index > 0 &&
              (0, jsx_runtime_1.jsxs)('span', {
                className:
                  'uppercase text-sm font-bold text-gray-500 mb-2 antialiased',
                children: ['question #', index],
              }),
            index === 0 &&
              (0, jsx_runtime_1.jsx)('span', {
                className:
                  'uppercase text-sm font-bold text-gray-500 mb-2 antialiased',
                children: 'new question',
              }),
            (0, jsx_runtime_1.jsx)('span', {
              id: 'question-'.concat(index, '-title'),
              ref: titleRef,
              contentEditable: editMode,
              suppressContentEditableWarning: true,
              onFocus: function onFocus(e) {
                editMode && selectAllTextInElement(e.target);
              },
              placeholder: 'Add a title',
              tabIndex: 0,
              className: !editMode
                ? 'block text-3xl font-bold mb-2 antialiased'
                : 'block text-3xl font-bold mb-2 antialiased p-1 bg-gray-200 border border-gray-400',
              children: content.title,
            }),
            (0, jsx_runtime_1.jsx)('span', {
              id: 'question-'.concat(index, '-description'),
              contentEditable: editMode,
              ref: descriptionRef,
              suppressContentEditableWarning: true,
              tabIndex: 0,
              placeholder: 'Add a description',
              onFocus: function onFocus(e) {
                editMode && selectAllTextInElement(e.target);
              },
              className: !editMode
                ? 'block text-lg mb-2 antialiased'
                : 'block text-lg mb-2 antialiased p-1 bg-gray-200 border border-gray-400',
              children: content.description,
            }),
          ],
        });
      }
      exports['default'] = QuestionTextWrapperComponent;

      /***/
    },

  /***/ './resources/pages/components/ΑddQuestionBtnComponent.tsx':
    /*!****************************************************************!*\
  !*** ./resources/pages/components/ΑddQuestionBtnComponent.tsx ***!
  \****************************************************************/
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule
            ? mod
            : {
                default: mod,
              };
        };
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      var jsx_runtime_1 = __webpack_require__(
        /*! react/jsx-runtime */ 'react/jsx-runtime'
      );
      var IconComponent_1 = __importDefault(
        __webpack_require__(
          /*! ./IconComponent */ './resources/pages/components/IconComponent.tsx'
        )
      );
      function AddQuestionBtnComponent(_ref) {
        var _onClick = _ref.onClick;
        return (0, jsx_runtime_1.jsxs)('button', {
          onClick: function onClick() {
            _onClick && _onClick();
          },
          className:
            'flex items-center justify-center p-6 flex-1 text-gray-600 border-gray-300 hover:bg-gray-900 hover:text-gray-50',
          children: [
            (0, jsx_runtime_1.jsx)('span', {
              className: 'text-2xl mr-1 md:mr-0 md:mb-1',
              children: (0, jsx_runtime_1.jsx)(IconComponent_1['default'], {
                iconName: 'Plus',
              }),
            }),
            (0, jsx_runtime_1.jsx)('span', {
              children: 'Add Question',
            }),
          ],
        });
      }
      exports['default'] = AddQuestionBtnComponent;

      /***/
    },

  /***/ './resources/ts/ssr.tsx':
    /*!******************************!*\
  !*** ./resources/ts/ssr.tsx ***!
  \******************************/
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      function _typeof(obj) {
        '@babel/helpers - typeof';
        return (
          (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    'function' == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, 'string');
        return _typeof(key) === 'symbol' ? key : String(key);
      }
      function _toPrimitive(input, hint) {
        if (_typeof(input) !== 'object' || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || 'default');
          if (_typeof(res) !== 'object') return res;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (hint === 'string' ? String : Number)(input);
      }
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule
            ? mod
            : {
                default: mod,
              };
        };
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      var jsx_runtime_1 = __webpack_require__(
        /*! react/jsx-runtime */ 'react/jsx-runtime'
      );
      __webpack_require__(/*! ../css/app.css */ './resources/css/app.css');
      var server_1 = __importDefault(
        __webpack_require__(/*! react-dom/server */ 'react-dom/server')
      );
      var inertia_react_1 = __webpack_require__(
        /*! @inertiajs/inertia-react */ '@inertiajs/inertia-react'
      );
      function render(page) {
        return (0, inertia_react_1.createInertiaApp)({
          page: page,
          render: server_1['default'].renderToString,
          resolve: function resolve(name) {
            return __webpack_require__(
              './resources/pages sync recursive ^\\.\\/.*$'
            )('./'.concat(name));
          },
          setup: function setup(_ref) {
            var App = _ref.App,
              props = _ref.props;
            return (0, jsx_runtime_1.jsx)(App, _objectSpread({}, props));
          },
        });
      }
      exports['default'] = render;

      /***/
    },

  /***/ './resources/css/app.css':
    /*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__);
      // extracted by mini-css-extract-plugin

      /***/
    },

  /***/ './resources/pages sync recursive ^\\.\\/.*$':
    /*!****************************************!*\
  !*** ./resources/pages/ sync ^\.\/.*$ ***!
  \****************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var map = {
        './Home': './resources/pages/Home.tsx',
        './Home.tsx': './resources/pages/Home.tsx',
        './Profile': './resources/pages/Profile.tsx',
        './Profile.tsx': './resources/pages/Profile.tsx',
        './components/IconComponent':
          './resources/pages/components/IconComponent.tsx',
        './components/IconComponent.tsx':
          './resources/pages/components/IconComponent.tsx',
        './components/QuestionBtnComponent':
          './resources/pages/components/QuestionBtnComponent.tsx',
        './components/QuestionBtnComponent.tsx':
          './resources/pages/components/QuestionBtnComponent.tsx',
        './components/QuestionComponent':
          './resources/pages/components/QuestionComponent.tsx',
        './components/QuestionComponent.tsx':
          './resources/pages/components/QuestionComponent.tsx',
        './components/QuestionContainerComponent':
          './resources/pages/components/QuestionContainerComponent.tsx',
        './components/QuestionContainerComponent.tsx':
          './resources/pages/components/QuestionContainerComponent.tsx',
        './components/QuestionTextWrapperComponent':
          './resources/pages/components/QuestionTextWrapperComponent.tsx',
        './components/QuestionTextWrapperComponent.tsx':
          './resources/pages/components/QuestionTextWrapperComponent.tsx',
        './components/ΑddQuestionBtnComponent':
          './resources/pages/components/ΑddQuestionBtnComponent.tsx',
        './components/ΑddQuestionBtnComponent.tsx':
          './resources/pages/components/ΑddQuestionBtnComponent.tsx',
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }
        return map[req];
      }
      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };
      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = './resources/pages sync recursive ^\\.\\/.*$';

      /***/
    },

  /***/ '@formkit/auto-animate/react':
    /*!**********************************************!*\
  !*** external "@formkit/auto-animate/react" ***!
  \**********************************************/
    /***/ (module) => {
      module.exports = require('@formkit/auto-animate/react');

      /***/
    },

  /***/ '@inertiajs/inertia':
    /*!*************************************!*\
  !*** external "@inertiajs/inertia" ***!
  \*************************************/
    /***/ (module) => {
      module.exports = require('@inertiajs/inertia');

      /***/
    },

  /***/ '@inertiajs/inertia-react':
    /*!*******************************************!*\
  !*** external "@inertiajs/inertia-react" ***!
  \*******************************************/
    /***/ (module) => {
      module.exports = require('@inertiajs/inertia-react');

      /***/
    },

  /***/ 'phosphor-react':
    /*!*********************************!*\
  !*** external "phosphor-react" ***!
  \*********************************/
    /***/ (module) => {
      module.exports = require('phosphor-react');

      /***/
    },

  /***/ 'react':
    /*!************************!*\
  !*** external "react" ***!
  \************************/
    /***/ (module) => {
      module.exports = require('react');

      /***/
    },

  /***/ 'react-dom/server':
    /*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
    /***/ (module) => {
      module.exports = require('react-dom/server');

      /***/
    },

  /***/ 'react/jsx-runtime':
    /*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
    /***/ (module) => {
      module.exports = require('react/jsx-runtime');

      /***/
    },

  /******/
};
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
  /******/ // Check if module is in cache
  /******/ var cachedModule = __webpack_module_cache__[moduleId];
  /******/ if (cachedModule !== undefined) {
    /******/ return cachedModule.exports;
    /******/
  }
  /******/ // Create a new module (and put it into the cache)
  /******/ var module = (__webpack_module_cache__[moduleId] = {
    /******/ // no module.id needed
    /******/ // no module.loaded needed
    /******/ exports: {},
    /******/
  });
  /******/
  /******/ // Execute the module function
  /******/ __webpack_modules__[moduleId].call(
    module.exports,
    module,
    module.exports,
    __webpack_require__
  );
  /******/
  /******/ // Return the exports of the module
  /******/ return module.exports;
  /******/
}
/******/
/************************************************************************/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
  /******/ __webpack_require__.o = (obj, prop) =>
    Object.prototype.hasOwnProperty.call(obj, prop);
  /******/
})();
/******/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = (exports) => {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
})();
/******/
/************************************************************************/
/******/
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module is referenced by other modules so it can't be inlined
/******/ var __webpack_exports__ = __webpack_require__(
  './resources/ts/ssr.tsx'
);
/******/ module.exports = __webpack_exports__;
/******/
