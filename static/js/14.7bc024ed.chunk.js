(this.webpackJsonpcourse=this.webpackJsonpcourse||[]).push([[14],{120:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(0),r=a.isValidElement;function o(e,t){return function(e,t,n){return r(e)?a.cloneElement(e,"function"===typeof n?n(e.props||{}):n):t}(e,e,t)}},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(5),r=n(0);function o(e,t){var n=t||{},o=n.defaultValue,c=n.value,i=n.onChange,l=n.postState,s=r.useState((function(){return void 0!==c?c:void 0!==o?"function"===typeof o?o():o:"function"===typeof e?e():e})),u=Object(a.a)(s,2),f=u[0],p=u[1],d=void 0!==c?c:f;l&&(d=l(d));var m=r.useRef(!0);return r.useEffect((function(){m.current?m.current=!1:void 0===c&&p(c)}),[c]),[d,function(e){p(e),d!==e&&i&&i(e,d)}]}},129:function(e,t,n){"use strict";var a={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=a.F1&&t<=a.F12)return!1;switch(t){case a.ALT:case a.CAPS_LOCK:case a.CONTEXT_MENU:case a.CTRL:case a.DOWN:case a.END:case a.ESC:case a.HOME:case a.INSERT:case a.LEFT:case a.MAC_FF_META:case a.META:case a.NUMLOCK:case a.NUM_CENTER:case a.PAGE_DOWN:case a.PAGE_UP:case a.PAUSE:case a.PRINT_SCREEN:case a.RIGHT:case a.SHIFT:case a.UP:case a.WIN_KEY:case a.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=a.ZERO&&e<=a.NINE)return!0;if(e>=a.NUM_ZERO&&e<=a.NUM_MULTIPLY)return!0;if(e>=a.A&&e<=a.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case a.SPACE:case a.QUESTION_MARK:case a.NUM_PLUS:case a.NUM_MINUS:case a.NUM_PERIOD:case a.NUM_DIVISION:case a.SEMICOLON:case a.DASH:case a.EQUALS:case a.COMMA:case a.PERIOD:case a.SLASH:case a.APOSTROPHE:case a.SINGLE_QUOTE:case a.OPEN_SQUARE_BRACKET:case a.BACKSLASH:case a.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};t.a=a},130:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=function(){return{height:0,opacity:0}},r=function(e){return{height:e.scrollHeight,opacity:1}},o=function(e,t){return!0===(null===t||void 0===t?void 0:t.deadline)||"height"===t.propertyName},c={motionName:"ant-motion-collapse",onAppearStart:a,onEnterStart:a,onAppearActive:r,onEnterActive:r,onLeaveStart:function(e){return{height:e?e.offsetHeight:0}},onLeaveActive:a,onAppearEnd:o,onEnterEnd:o,onLeaveEnd:o,motionDeadline:500},i=function(e,t,n){return void 0!==n?n:"".concat(e,"-").concat(t)};t.a=c},143:function(e,t,n){"use strict";var a=n(1),r=n(0),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},c=n(8),i=function(e,t){return r.createElement(c.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:o}))};i.displayName="RightOutlined";t.a=r.forwardRef(i)},158:function(e,t,n){"use strict";var a=n(4),r=n(5),o=n(2),c=n(0),i=n(9),l=n(1),s=n(15),u=n(142),f={adjustX:1,adjustY:1},p=[0,0],d={left:{points:["cr","cl"],overflow:f,offset:[-4,0],targetOffset:p},right:{points:["cl","cr"],overflow:f,offset:[4,0],targetOffset:p},top:{points:["bc","tc"],overflow:f,offset:[0,-4],targetOffset:p},bottom:{points:["tc","bc"],overflow:f,offset:[0,4],targetOffset:p},topLeft:{points:["bl","tl"],overflow:f,offset:[0,-4],targetOffset:p},leftTop:{points:["tr","tl"],overflow:f,offset:[-4,0],targetOffset:p},topRight:{points:["br","tr"],overflow:f,offset:[0,-4],targetOffset:p},rightTop:{points:["tl","tr"],overflow:f,offset:[4,0],targetOffset:p},bottomRight:{points:["tr","br"],overflow:f,offset:[0,4],targetOffset:p},rightBottom:{points:["bl","br"],overflow:f,offset:[4,0],targetOffset:p},bottomLeft:{points:["tl","bl"],overflow:f,offset:[0,4],targetOffset:p},leftBottom:{points:["br","bl"],overflow:f,offset:[-4,0],targetOffset:p}},m=function(e){var t=e.overlay,n=e.prefixCls,a=e.id,r=e.overlayInnerStyle;return c.createElement("div",{className:"".concat(n,"-inner"),id:a,role:"tooltip",style:r},"function"===typeof t?t():t)},b=function(e,t){var n=e.overlayClassName,a=e.trigger,r=void 0===a?["hover"]:a,f=e.mouseEnterDelay,p=void 0===f?0:f,b=e.mouseLeaveDelay,v=void 0===b?.1:b,O=e.overlayStyle,h=e.prefixCls,j=void 0===h?"rc-tooltip":h,y=e.children,E=e.onVisibleChange,g=e.afterVisibleChange,N=e.transitionName,C=e.animation,x=e.motion,S=e.placement,w=void 0===S?"right":S,I=e.align,A=void 0===I?{}:I,P=e.destroyTooltipOnHide,T=void 0!==P&&P,M=e.defaultVisible,_=e.getTooltipContainer,L=e.overlayInnerStyle,R=Object(s.a)(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle"]),U=Object(c.useRef)(null);Object(c.useImperativeHandle)(t,(function(){return U.current}));var k=Object(l.a)({},R);"visible"in e&&(k.popupVisible=e.visible);var H=!1,V=!1;if("boolean"===typeof T)H=T;else if(T&&"object"===Object(i.a)(T)){var z=T.keepParent;H=!0===z,V=!1===z}return c.createElement(u.a,Object(o.a)({popupClassName:n,prefixCls:j,popup:function(){var t=e.arrowContent,n=void 0===t?null:t,a=e.overlay,r=e.id;return[c.createElement("div",{className:"".concat(j,"-arrow"),key:"arrow"},n),c.createElement(m,{key:"content",prefixCls:j,id:r,overlay:a,overlayInnerStyle:L})]},action:r,builtinPlacements:d,popupPlacement:w,ref:U,popupAlign:A,getPopupContainer:_,onPopupVisibleChange:E,afterPopupVisibleChange:g,popupTransitionName:N,popupAnimation:C,popupMotion:x,defaultPopupVisible:M,destroyPopupOnHide:H,autoDestroy:V,mouseLeaveDelay:v,popupStyle:O,mouseEnterDelay:p},k),y)},v=Object(c.forwardRef)(b),O=n(122),h=n(12),j=n.n(h),y={adjustX:1,adjustY:1},E={adjustX:0,adjustY:0},g=[0,0];function N(e){return"boolean"===typeof e?e?y:E:Object(o.a)(Object(o.a)({},E),e)}var C=n(120),x=n(26),S=n(135),w=(Object(S.a)("success","processing","error","default","warning"),Object(S.a)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")),I=n(130),A=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},P=new RegExp("^(".concat(w.join("|"),")(-inverse)?$"));function T(e,t){var n=e.type;if((!0===n.__ANT_BUTTON||!0===n.__ANT_SWITCH||!0===n.__ANT_CHECKBOX||"button"===e.type)&&e.props.disabled){var a=function(e,t){var n={},a=Object(o.a)({},e);return t.forEach((function(t){e&&t in e&&(n[t]=e[t],delete a[t])})),{picked:n,omitted:a}}(e.props.style,["position","left","right","top","bottom","float","display","zIndex"]),r=a.picked,i=a.omitted,l=Object(o.a)(Object(o.a)({display:"inline-block"},r),{cursor:"not-allowed",width:e.props.block?"100%":null}),s=Object(o.a)(Object(o.a)({},i),{pointerEvents:"none"}),u=Object(C.a)(e,{style:s,className:null});return c.createElement("span",{style:l,className:j()(e.props.className,"".concat(t,"-disabled-compatible-wrapper"))},u)}return e}var M=c.forwardRef((function(e,t){var n,i=c.useContext(x.b),l=i.getPopupContainer,s=i.getPrefixCls,u=i.direction,f=Object(O.a)(!1,{value:e.visible,defaultValue:e.defaultVisible}),p=Object(r.a)(f,2),m=p[0],b=p[1],h=function(){var t=e.title,n=e.overlay;return!t&&!n&&0!==t},y=function(){var t=e.builtinPlacements,n=e.arrowPointAtCenter,a=e.autoAdjustOverflow;return t||function(e){var t=e.arrowWidth,n=void 0===t?4:t,a=e.horizontalArrowShift,r=void 0===a?16:a,c=e.verticalArrowShift,i=void 0===c?8:c,l=e.autoAdjustOverflow,s={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(r+n),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(i+n)]},topRight:{points:["br","tc"],offset:[r+n,-4]},rightTop:{points:["tl","cr"],offset:[4,-(i+n)]},bottomRight:{points:["tr","bc"],offset:[r+n,4]},rightBottom:{points:["bl","cr"],offset:[4,i+n]},bottomLeft:{points:["tl","bc"],offset:[-(r+n),4]},leftBottom:{points:["br","cl"],offset:[-4,i+n]}};return Object.keys(s).forEach((function(t){s[t]=e.arrowPointAtCenter?Object(o.a)(Object(o.a)({},s[t]),{overflow:N(l),targetOffset:g}):Object(o.a)(Object(o.a)({},d[t]),{overflow:N(l)}),s[t].ignoreShake=!0})),s}({arrowPointAtCenter:n,autoAdjustOverflow:a})},E=e.getPopupContainer,S=A(e,["getPopupContainer"]),w=e.prefixCls,M=e.openClassName,_=e.getTooltipContainer,L=e.overlayClassName,R=e.color,U=e.overlayInnerStyle,k=e.children,H=s("tooltip",w),V=s(),z=m;!("visible"in e)&&h()&&(z=!1);var F,B=T(Object(C.b)(k)?k:c.createElement("span",null,k),H),D=B.props,K=j()(D.className,Object(a.a)({},M||"".concat(H,"-open"),!0)),W=j()(L,(n={},Object(a.a)(n,"".concat(H,"-rtl"),"rtl"===u),Object(a.a)(n,"".concat(H,"-").concat(R),R&&P.test(R)),n)),G=U;return R&&!P.test(R)&&(G=Object(o.a)(Object(o.a)({},U),{background:R}),F={background:R}),c.createElement(v,Object(o.a)({},S,{prefixCls:H,overlayClassName:W,getTooltipContainer:E||_||l,ref:t,builtinPlacements:y(),overlay:function(){var t=e.title,n=e.overlay;return 0===t?t:n||t||""}(),visible:z,onVisibleChange:function(t){var n;b(!h()&&t),h()||null===(n=e.onVisibleChange)||void 0===n||n.call(e,t)},onPopupAlign:function(e,t){var n=y(),a=Object.keys(n).filter((function(e){return n[e].points[0]===t.points[0]&&n[e].points[1]===t.points[1]}))[0];if(a){var r=e.getBoundingClientRect(),o={top:"50%",left:"50%"};a.indexOf("top")>=0||a.indexOf("Bottom")>=0?o.top="".concat(r.height-t.offset[1],"px"):(a.indexOf("Top")>=0||a.indexOf("bottom")>=0)&&(o.top="".concat(-t.offset[1],"px")),a.indexOf("left")>=0||a.indexOf("Right")>=0?o.left="".concat(r.width-t.offset[0],"px"):(a.indexOf("right")>=0||a.indexOf("Left")>=0)&&(o.left="".concat(-t.offset[0],"px")),e.style.transformOrigin="".concat(o.left," ").concat(o.top)}},overlayInnerStyle:G,arrowContent:c.createElement("span",{className:"".concat(H,"-arrow-content"),style:F}),motion:{motionName:Object(I.b)(V,"zoom-big-fast",e.transitionName),motionDeadline:1e3}}),z?Object(C.a)(B,{className:K}):B)}));M.displayName="Tooltip",M.defaultProps={placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0};t.a=M},159:function(e,t,n){"use strict";var a=n(1),r=n(0),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},c=n(8),i=function(e,t){return r.createElement(c.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:o}))};i.displayName="LeftOutlined";t.a=r.forwardRef(i)},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(22),r=n.n(a);function o(e,t,n,a){var o=r.a.unstable_batchedUpdates?function(e){r.a.unstable_batchedUpdates(n,e)}:n;return e.addEventListener&&e.addEventListener(t,o,a),{remove:function(){e.removeEventListener&&e.removeEventListener(t,o)}}}},174:function(e,t,n){"use strict";var a=n(2),r=n(10),o=n(13),c=n(16),i=n(17),l=n(0),s=n(133),u=n(12),f=n.n(u),p=n(118),d=n(150),m=Object(l.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),b=n(120);var v=function(e){var t,n,r=e.popupClassName,o=e.icon,c=e.title,i=l.useContext(m),u=i.prefixCls,d=i.inlineCollapsed,v=i.antdMenuTheme,O=Object(s.g)();if(o){var h=Object(b.b)(c)&&"span"===c.type;n=l.createElement(l.Fragment,null,Object(b.a)(o,{className:f()(Object(b.b)(o)?null===(t=o.props)||void 0===t?void 0:t.className:"","".concat(u,"-item-icon"))}),h?c:l.createElement("span",{className:"".concat(u,"-title-content")},c))}else n=d&&!O.length&&c&&"string"===typeof c?l.createElement("div",{className:"".concat(u,"-inline-collapsed-noicon")},c.charAt(0)):l.createElement("span",{className:"".concat(u,"-title-content")},c);return l.createElement(m.Provider,{value:Object(a.a)(Object(a.a)({},i),{firstLevel:!1})},l.createElement(s.e,Object(a.a)({},Object(p.a)(e,["icon"]),{title:n,popupClassName:f()(u,"".concat(u,"-").concat(v),r)})))},O=n(4),h=n(59),j=n(158),y=n(5),E=n(1),g={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},N=n(8),C=function(e,t){return l.createElement(N.a,Object(E.a)(Object(E.a)({},e),{},{ref:t,icon:g}))};C.displayName="BarsOutlined";var x=l.forwardRef(C),S=n(143),w=n(159),I=n(3),A=n(26),P=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},T=l.createContext({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function M(e){var t=e.suffixCls,n=e.tagName,r=e.displayName;return function(e){var o=function(r){var o=l.useContext(A.b).getPrefixCls,c=r.prefixCls,i=o(t,c);return l.createElement(e,Object(a.a)({prefixCls:i,tagName:n},r))};return o.displayName=r,o}}var _=function(e){var t=e.prefixCls,n=e.className,r=e.children,o=e.tagName,c=P(e,["prefixCls","className","children","tagName"]),i=f()(t,n);return l.createElement(o,Object(a.a)({className:i},c),r)},L=(M({suffixCls:"layout",tagName:"section",displayName:"Layout"})((function(e){var t,n=l.useContext(A.b).direction,r=l.useState([]),o=Object(y.a)(r,2),c=o[0],i=o[1],s=e.prefixCls,u=e.className,p=e.children,d=e.hasSider,m=e.tagName,b=P(e,["prefixCls","className","children","hasSider","tagName"]),v=f()(s,(t={},Object(O.a)(t,"".concat(s,"-has-sider"),"boolean"===typeof d?d:c.length>0),Object(O.a)(t,"".concat(s,"-rtl"),"rtl"===n),t),u);return l.createElement(T.Provider,{value:{siderHook:{addSider:function(e){i((function(t){return[].concat(Object(I.a)(t),[e])}))},removeSider:function(e){i((function(t){return t.filter((function(t){return t!==e}))}))}}}},l.createElement(m,Object(a.a)({className:v},b),p))})),M({suffixCls:"layout-header",tagName:"header",displayName:"Header"})(_),M({suffixCls:"layout-footer",tagName:"footer",displayName:"Footer"})(_),M({suffixCls:"layout-content",tagName:"main",displayName:"Content"})(_),function(e){return!isNaN(parseFloat(e))&&isFinite(e)}),R=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},U={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},k=l.createContext({}),H=function(){var e=0;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(t).concat(e)}}(),V=l.forwardRef((function(e,t){var n=e.prefixCls,r=e.className,o=e.trigger,c=e.children,i=e.defaultCollapsed,s=void 0!==i&&i,u=e.theme,d=void 0===u?"dark":u,m=e.style,b=void 0===m?{}:m,v=e.collapsible,h=void 0!==v&&v,j=e.reverseArrow,E=void 0!==j&&j,g=e.width,N=void 0===g?200:g,C=e.collapsedWidth,I=void 0===C?80:C,P=e.zeroWidthTriggerStyle,M=e.breakpoint,_=e.onCollapse,V=e.onBreakpoint,z=R(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),F=Object(l.useContext)(T).siderHook,B=Object(l.useState)("collapsed"in z?z.collapsed:s),D=Object(y.a)(B,2),K=D[0],W=D[1],G=Object(l.useState)(!1),Q=Object(y.a)(G,2),Y=Q[0],X=Q[1];Object(l.useEffect)((function(){"collapsed"in z&&W(z.collapsed)}),[z.collapsed]);var Z=function(e,t){"collapsed"in z||W(e),null===_||void 0===_||_(e,t)},J=Object(l.useRef)();J.current=function(e){X(e.matches),null===V||void 0===V||V(e.matches),K!==e.matches&&Z(e.matches,"responsive")},Object(l.useEffect)((function(){function e(e){return J.current(e)}var t;if("undefined"!==typeof window){var n=window.matchMedia;if(n&&M&&M in U){t=n("(max-width: ".concat(U[M],")"));try{t.addEventListener("change",e)}catch(a){t.addListener(e)}e(t)}}return function(){try{null===t||void 0===t||t.removeEventListener("change",e)}catch(a){null===t||void 0===t||t.removeListener(e)}}}),[]),Object(l.useEffect)((function(){var e=H("ant-sider-");return F.addSider(e),function(){return F.removeSider(e)}}),[]);var q=function(){Z(!K,"clickTrigger")},$=Object(l.useContext)(A.b).getPrefixCls;return l.createElement(k.Provider,{value:{siderCollapsed:K}},function(){var e,i=$("layout-sider",n),s=Object(p.a)(z,["collapsed"]),u=K?I:N,m=L(u)?"".concat(u,"px"):String(u),v=0===parseFloat(String(I||0))?l.createElement("span",{onClick:q,className:f()("".concat(i,"-zero-width-trigger"),"".concat(i,"-zero-width-trigger-").concat(E?"right":"left")),style:P},o||l.createElement(x,null)):null,j={expanded:E?l.createElement(S.a,null):l.createElement(w.a,null),collapsed:E?l.createElement(w.a,null):l.createElement(S.a,null)}[K?"collapsed":"expanded"],y=null!==o?v||l.createElement("div",{className:"".concat(i,"-trigger"),onClick:q,style:{width:m}},o||j):null,g=Object(a.a)(Object(a.a)({},b),{flex:"0 0 ".concat(m),maxWidth:m,minWidth:m,width:m}),C=f()(i,"".concat(i,"-").concat(d),(e={},Object(O.a)(e,"".concat(i,"-collapsed"),!!K),Object(O.a)(e,"".concat(i,"-has-trigger"),h&&null!==o&&!v),Object(O.a)(e,"".concat(i,"-below"),!!Y),Object(O.a)(e,"".concat(i,"-zero-width"),0===parseFloat(m)),e),r);return l.createElement("aside",Object(a.a)({className:C},s,{style:g,ref:t}),l.createElement("div",{className:"".concat(i,"-children")},c),h||Y&&v?y:null)}())}));V.displayName="Sider";var z=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},F=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).renderItem=function(t){var n,r,o=t.siderCollapsed,c=e.context,i=c.prefixCls,u=c.firstLevel,p=c.inlineCollapsed,d=c.direction,m=e.props,v=m.className,y=m.children,E=e.props,g=E.title,N=E.icon,C=E.danger,x=z(E,["title","icon","danger"]),S=g;"undefined"===typeof g?S=u?y:"":!1===g&&(S="");var w={title:S};o||p||(w.title=null,w.visible=!1);var I=Object(h.a)(y).length;return l.createElement(j.a,Object(a.a)({},w,{placement:"rtl"===d?"left":"right",overlayClassName:"".concat(i,"-inline-collapsed-tooltip")}),l.createElement(s.b,Object(a.a)({},x,{className:f()((n={},Object(O.a)(n,"".concat(i,"-item-danger"),C),Object(O.a)(n,"".concat(i,"-item-only-child"),1===(N?I+1:I)),n),v),title:"string"===typeof g?g:void 0}),Object(b.a)(N,{className:f()(Object(b.b)(N)?null===(r=N.props)||void 0===r?void 0:r.className:"","".concat(i,"-item-icon"))}),e.renderItemChildren(p)))},e}return Object(o.a)(n,[{key:"renderItemChildren",value:function(e){var t=this.context,n=t.prefixCls,a=t.firstLevel,r=this.props,o=r.icon,c=r.children,i=l.createElement("span",{className:"".concat(n,"-title-content")},c);return(!o||Object(b.b)(c)&&"span"===c.type)&&c&&e&&a&&"string"===typeof c?l.createElement("div",{className:"".concat(n,"-inline-collapsed-noicon")},c.charAt(0)):i}},{key:"render",value:function(){return l.createElement(k.Consumer,null,this.renderItem)}}]),n}(l.Component);F.contextType=m;var B=n(58),D=n(130),K=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},W=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).renderMenu=function(e){var t=e.getPopupContainer,n=e.getPrefixCls,r=e.direction,c=n(),i=o.props,u=i.prefixCls,v=i.className,O=i.theme,h=i.expandIcon,j=K(i,["prefixCls","className","theme","expandIcon"]),y=Object(p.a)(j,["siderCollapsed","collapsedWidth"]),E=o.getInlineCollapsed(),g={horizontal:{motionName:"".concat(c,"-slide-up")},inline:D.a,other:{motionName:"".concat(c,"-zoom-big")}},N=n("menu",u),C=f()("".concat(N,"-").concat(O),v);return l.createElement(m.Provider,{value:{prefixCls:N,inlineCollapsed:E||!1,antdMenuTheme:O,direction:r,firstLevel:!0}},l.createElement(s.f,Object(a.a)({getPopupContainer:t,overflowedIndicator:l.createElement(d.a,null),overflowedIndicatorPopupClassName:"".concat(N,"-").concat(O)},y,{inlineCollapsed:E,className:C,prefixCls:N,direction:r,defaultMotions:g,expandIcon:Object(b.a)(h,{className:"".concat(N,"-submenu-expand-icon")})})))},Object(B.a)(!("inlineCollapsed"in e&&"inline"!==e.mode),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),Object(B.a)(!(void 0!==e.siderCollapsed&&"inlineCollapsed"in e),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead."),o}return Object(o.a)(n,[{key:"getInlineCollapsed",value:function(){var e=this.props,t=e.inlineCollapsed,n=e.siderCollapsed;return void 0!==n?n:t}},{key:"render",value:function(){return l.createElement(A.a,null,this.renderMenu)}}]),n}(l.Component);W.defaultProps={theme:"light"};var G=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return l.createElement(k.Consumer,null,(function(t){return l.createElement(W,Object(a.a)({},e.props,t))}))}}]),n}(l.Component);G.Divider=s.a,G.Item=F,G.SubMenu=v,G.ItemGroup=s.c;t.a=G},190:function(e,t,n){"use strict";n(117),n(191)},191:function(e,t,n){},242:function(e,t,n){"use strict";function a(e,t){return!!e&&e.contains(t)}n.d(t,"a",(function(){return a}))},247:function(e,t,n){"use strict";var a=n(0),r=n(22),o=n.n(r),c=n(24),i=Object(a.forwardRef)((function(e,t){var n=e.didUpdate,r=e.getContainer,i=e.children,l=Object(a.useRef)();Object(a.useImperativeHandle)(t,(function(){return{}}));var s=Object(a.useRef)(!1);return!s.current&&Object(c.a)()&&(l.current=r(),s.current=!0),Object(a.useEffect)((function(){null===n||void 0===n||n(e)})),Object(a.useEffect)((function(){return function(){var e,t;null===(e=l.current)||void 0===e||null===(t=e.parentNode)||void 0===t||t.removeChild(l.current)}}),[]),l.current?o.a.createPortal(i,l.current):null}));t.a=i},290:function(e,t,n){"use strict";n(117),n(291),n(190)},291:function(e,t,n){},412:function(e,t,n){e.exports={leftNav:"leftNav--2Zmqb",leftNav_menu:"leftNav_menu--1eTJ-"}},413:function(e,t,n){e.exports={team:"team--3C49i"}},439:function(e,t,n){"use strict";n.r(t);var a=n(39),r=n(40),o=n(42),c=n(41),i=n(0),l=n(7),s=n(64),u=(n(290),n(174)),f=n(1),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"}}]},name:"appstore",theme:"outlined"},d=n(8),m=function(e,t){return i.createElement(d.a,Object(f.a)(Object(f.a)({},e),{},{ref:t,icon:p}))};m.displayName="AppstoreOutlined";var b=i.forwardRef(m),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zM402.9 528.8l-77.5 77.5a8.03 8.03 0 000 11.3l34 34c3.1 3.1 8.2 3.1 11.3 0l77.5-77.5c55.7 35.1 130.1 28.4 178.6-20.1 56.3-56.3 56.3-147.5 0-203.8-56.3-56.3-147.5-56.3-203.8 0-48.5 48.5-55.2 123-20.1 178.6zm65.4-133.3c31.3-31.3 82-31.3 113.2 0 31.3 31.3 31.3 82 0 113.2-31.3 31.3-82 31.3-113.2 0s-31.3-81.9 0-113.2z"}}]},name:"security-scan",theme:"outlined"},O=function(e,t){return i.createElement(d.a,Object(f.a)(Object(f.a)({},e),{},{ref:t,icon:v}))};O.displayName="SecurityScanOutlined";var h=i.forwardRef(O),j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zm220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0022.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z"}}]},name:"book",theme:"outlined"},y=function(e,t){return i.createElement(d.a,Object(f.a)(Object(f.a)({},e),{},{ref:t,icon:j}))};y.displayName="BookOutlined";var E=i.forwardRef(y),g=n(412),N=n.n(g),C=n(6),x=u.a.SubMenu,S=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={collapsed:!1,color:!0},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(C.jsx)("div",{style:{background:"#000B18"},className:N.a.leftNav,children:Object(C.jsxs)(u.a,{className:N.a.leftNav_menu,defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",theme:"dark",children:[Object(C.jsx)(u.a.Item,{icon:Object(C.jsx)(b,{}),onClick:function(){e.props.history.push("/team/briefIntro")},children:"\u7b80\u8981\u4ecb\u7ecd"},"1"),Object(C.jsxs)(x,{icon:Object(C.jsx)(h,{}),title:"\u7814\u7a76\u5185\u5bb9",children:[Object(C.jsx)(u.a.Item,{onClick:function(){e.props.history.push("/team/analyse")},children:"\u667a\u80fd\u4fe1\u53f7\u5206\u6790"},"2"),Object(C.jsx)(u.a.Item,{onClick:function(){e.props.history.push("/team/feature")},children:"\u4fe1\u53f7\u6df1\u5ea6\u7279\u5f81\u5b66\u4e60"},"3"),Object(C.jsx)(u.a.Item,{onClick:function(){e.props.history.push("/team/modulate")},children:"\u4fe1\u53f7\u8c03\u5236\u7c7b\u578b\u8bc6\u522b"},"4"),Object(C.jsx)(u.a.Item,{onClick:function(){e.props.history.push("/team/encode")},children:"\u4fe1\u53f7\u7f16\u7801\u7c7b\u578b\u8bc6\u522b"},"5"),Object(C.jsx)(u.a.Item,{onClick:function(){e.props.history.push("/team/modulateEncode")},children:"\u8c03\u5236\u7f16\u7801\u8054\u5408\u8bc6\u522b"},"6"),Object(C.jsx)(u.a.Item,{onClick:function(){e.props.history.push("/team/radiation")},children:"\u8f90\u5c04\u6e90\u4e2a\u4f53\u8bc6\u522b"},"7"),Object(C.jsx)(u.a.Item,{onClick:function(){e.props.history.push("/team/identify")},children:"\u5f00\u96c6\u8bc6\u522b"},"8"),Object(C.jsx)(u.a.Item,{onClick:function(){e.props.history.push("/team/generate")},children:"\u4fe1\u53f7\u751f\u6210"},"9"),Object(C.jsx)(u.a.Item,{onClick:function(){e.props.history.push("/team/process")},children:"AI+\u4fe1\u53f7\u5904\u7406"},"10"),Object(C.jsx)(u.a.Item,{onClick:function(){e.props.history.push("/team/design")},children:"AI\u667a\u80fd\u8f6f\u786c\u4ef6\u8bbe\u8ba1"},"11")]},"sub1"),Object(C.jsx)(u.a.Item,{icon:Object(C.jsx)(E,{}),onClick:function(){e.props.history.push("/team/learning")},children:"\u77e5\u8bc6\u5b66\u4e60"},"13")]})})}}]),n}(i.Component),w=Object(s.b)()(Object(l.g)(S)),I=n(413),A=n.n(I),P=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("div",{className:A.a.team,children:[Object(C.jsx)("div",{className:A.a.left,children:Object(C.jsx)(w,{})}),Object(C.jsx)("div",{className:A.a.content,children:this.props.children})]})}}]),n}(i.Component);t.default=Object(s.b)()(Object(l.g)(P))}}]);
//# sourceMappingURL=14.7bc024ed.chunk.js.map