"use strict";

var _interopRequireWildcard = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocalAudioOutput = exports.LocalAudioOutputProvider = void 0;

var _regenerator = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _AudioVideoProvider = require("./AudioVideoProvider");

var Context = /*#__PURE__*/(0, _react.createContext)(null);

var LocalAudioOutputProvider = function LocalAudioOutputProvider(_ref) {
  var children = _ref.children;
  var audioVideo = (0, _AudioVideoProvider.useAudioVideo)();

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isAudioOn = _useState2[0],
      setIsAudioOn = _useState2[1];

  var audioRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (!audioVideo) {
      return;
    }

    if (audioRef.current) {
      (function () {
        var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(element) {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return audioVideo.bindAudioElement(element);

                case 3:
                  _context.next = 8;
                  break;

                case 5:
                  _context.prev = 5;
                  _context.t0 = _context["catch"](0);
                  console.error("Failed to bind audio element.", _context.t0);

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 5]]);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      })()(audioRef.current);
    }

    return function () {
      audioVideo.unbindAudioElement();
      setIsAudioOn(true);
    };
  }, [audioVideo]);
  var toggleAudio = (0, _react.useCallback)(function () {
    if (!audioRef.current) {
      return;
    }

    setIsAudioOn(!isAudioOn);

    if (isAudioOn) {
      audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.unbindAudioElement();
    } else {
      (function () {
        var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(element) {
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.bindAudioElement(element);

                case 3:
                  _context2.next = 8;
                  break;

                case 5:
                  _context2.prev = 5;
                  _context2.t0 = _context2["catch"](0);
                  console.error("Failed to bind audio element.", _context2.t0);

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[0, 5]]);
        }));

        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      })()(audioRef.current);
    }
  }, [audioRef, audioVideo, isAudioOn]);
  var value = (0, _react.useMemo)(function () {
    return {
      isAudioOn: isAudioOn,
      toggleAudio: toggleAudio
    };
  }, [isAudioOn, toggleAudio]);
  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: value
  }, children, /*#__PURE__*/_react.default.createElement("audio", {
    ref: audioRef,
    style: {
      display: "none"
    }
  }));
};

exports.LocalAudioOutputProvider = LocalAudioOutputProvider;

var useLocalAudioOutput = function useLocalAudioOutput() {
  var context = (0, _react.useContext)(Context);

  if (!context) {
    throw new Error("useLocalAudioOutput must be used within LocalAudioOutputProvider");
  }

  return context;
};

exports.useLocalAudioOutput = useLocalAudioOutput;