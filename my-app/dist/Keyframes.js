"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createKeyframesOut = exports.createKeyframesIn = void 0;
const createKeyframesIn = (startX, startY, endX, endY, animation, opacity, scale) => {
  const style = document.createElement('style');
  document.head.appendChild(style);
  const keyframes = `
        @keyframes ${animation} {
            0% {
                opacity: ${opacity[0]};
                transform: translate(${startX}px, ${startY}) scale(${scale[0]}) ;
            }
            50%{
                transform: translate(${(startX + endX) / 2}px, ${(startY + endY) / 2}px) scale(${(scale[0] + scale[1]) / 2}) rotateY(-0.25turn);
            }
            100% {
                opacity: ${opacity[1]};
                transform:  translate(${endX}px, ${endY}px) scale(${scale[1]});
            }
        }
    `;
  style.sheet.insertRule(keyframes, style.sheet.cssRules.length);
};
exports.createKeyframesIn = createKeyframesIn;
const createKeyframesOut = (startX, startY, endX, endY, animation, opacity, scale) => {
  const style = document.createElement('style');
  document.head.appendChild(style);
  const keyframes = `
        @keyframes ${animation} {
            0% {
                opacity: ${opacity[0]};
                transform: translate(${startX}px, ${startY}px) scale(${scale[0]}) ;
            }
            50%{
                transform: translate(${(startX + endX) / 2}px, ${(startY + endY) / 2}px) scale(${(scale[0] + scale[1]) / 2}) rotateY(-0.25turn);
            }
            100% {
                opacity: ${opacity[1]};
                transform:  translate(${endX}px, ${endY}) scale(${scale[1]});
            }
        }
    `;
  style.sheet.insertRule(keyframes, style.sheet.cssRules.length);
};
exports.createKeyframesOut = createKeyframesOut;
var _default = exports.default = null;