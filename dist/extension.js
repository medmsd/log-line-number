(()=>{"use strict";var e={496:e=>{e.exports=require("vscode")}},t={};function o(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,o),r.exports}var i={};(()=>{var e=i;Object.defineProperty(e,"__esModule",{value:!0}),e.deactivate=e.activate=void 0;const t=o(496);e.activate=function(e){let o=t.commands.registerCommand("extension.logLineNumber",(()=>{const e=t.window.activeTextEditor;if(e){const o=e.selection.active.line+1,i=`console.log('${o}');\n`,n=new t.Position(o-1,0);e.edit((e=>{e.insert(n,i)}))}}));e.subscriptions.push(o)},e.deactivate=function(){}})(),module.exports=i})();