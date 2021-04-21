"use strict";

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _EndMeetingControl = _interopRequireDefault(require("../EndMeetingControl"));

var _NavigationProvider = require("../../providers/NavigationProvider");

var _Styled = require("./Styled.js");

var MeetingControls = function MeetingControls() {
  var _useNavigation = (0, _NavigationProvider.useNavigation)(),
      toggleNavbar = _useNavigation.toggleNavbar,
      closeRoster = _useNavigation.closeRoster,
      showRoster = _useNavigation.showRoster;

  var _useUserActivityState = (0, _amazonChimeSdkComponentLibraryReact.useUserActivityState)(),
      isUserActive = _useUserActivityState.isUserActive;

  var handleToggle = function handleToggle() {
    if (showRoster) {
      closeRoster();
    }

    toggleNavbar();
  };

  return /*#__PURE__*/_react.default.createElement(_Styled.StyledControls, {
    className: "controls",
    active: !!isUserActive
  }, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ControlBar, {
    className: "controls-menu",
    layout: "undocked-horizontal",
    showLabels: true
  }, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ControlBarButton, {
    className: "mobile-toggle",
    icon: /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Dots, null),
    onClick: handleToggle,
    label: "Menu"
  }), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.AudioInputControl, null), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.VideoInputControl, null), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ContentShareControl, null), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.AudioOutputControl, null), /*#__PURE__*/_react.default.createElement(_EndMeetingControl.default, null)));
};

var _default = MeetingControls;
exports.default = _default;