(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{469:function(t,a,s){"use strict";s.r(a);var e=s(23),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"移除訂閱提示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移除訂閱提示"}},[t._v("#")]),t._v(" 移除訂閱提示")]),t._v(" "),s("p",[t._v("由於 Proxmox VE 有提供官方的訂閱支援，每次登入的時候都會跳出視窗來提示，用不到，看久了也覺得煩躁，可以用以下的方式移除提示訊息。")]),t._v(" "),s("h2",{attrs:{id:"單行指令-快速執行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#單行指令-快速執行"}},[t._v("#")]),t._v(" 單行指令 (快速執行)")]),t._v(" "),s("p",[t._v("快速取代 & 重開服務")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i.backup "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"s/data.status !== 'Active'/false/g\"")]),t._v(" /usr/share/javascript/proxmox-widget-toolkit/proxmoxlib.js "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" systemctl restart pveproxy.service\n")])])]),s("h2",{attrs:{id:"完整修改步驟-一般方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完整修改步驟-一般方式"}},[t._v("#")]),t._v(" 完整修改步驟 (一般方式)")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("該訊息使用 javascript 控制，找到檔案位置即可進行備份")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cp /usr/share/javascript/proxmox-widget-toolkit/proxmoxlib.js  /usr/share/javascript/proxmox-widget-toolkit/proxmoxlib.js.bak\n")])])])]),t._v(" "),s("li",[s("p",[t._v("編輯該檔案")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("vi /usr/share/javascript/proxmox-widget-toolkit/proxmoxlib.js\n")])])])]),t._v(" "),s("li",[s("p",[t._v("按下 "),s("code",[t._v("/")]),t._v(" 找到 "),s("code",[t._v("data.status !== 'Active'")]),t._v(" 字串的位置，將其修改為 "),s("code",[t._v("false")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("原始程式碼:")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("if (data.status !== 'Active') {\n    Ext.Msg.show({\n        title: gettext('No valid subscription'),\n        icon: Ext.Msg.WARNING,\n        msg: PVE.Utils.noSubKeyHtml,\n        buttons: Ext.Msg.OK,\n        callback: function(btn) {\n            if (btn !== 'ok') {\n                return;\n            }\n            orig_cmd();\n        }\n    });\n} else {\n    orig_cmd();\n}\n")])])]),s("ul",[s("li",[t._v("修改後")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("if (false) {\n    Ext.Msg.show({\n        title: gettext('No valid subscription'),\n        icon: Ext.Msg.WARNING,\n        msg: PVE.Utils.noSubKeyHtml,\n        buttons: Ext.Msg.OK,\n        callback: function(btn) {\n            if (btn !== 'ok') {\n                return;\n            }\n            orig_cmd();\n        }\n    });\n} else {\n    orig_cmd();\n}\n")])])])]),t._v(" "),s("li",[s("p",[t._v("重啟服務後，訊息就不會出現了。")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("systemctl restart pveproxy.service\n")])])]),s("h3",{attrs:{id:"參考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#參考"}},[t._v("#")]),t._v(" 參考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://dannyda.com/2020/05/17/how-to-remove-you-do-not-have-a-valid-subscription-for-this-server-from-proxmox-virtual-environment-6-1-2-proxmox-ve-6-1-2-pve-6-1-2/?__cf_chl_captcha_tk__=b9ac102d18f9eb25299509bd1297e9feeb7c5a51-1597209998-0-AULlx62LT1AIpb4zmhfOiA3IoWEmxQvoOLTU4m57sSG3N0iF6zEfJ7pvU-V5_D_FZMl1von8dFscH8CF6cTH4pZvQL3tKHf39rAiYwhXAI77hBYhqJKSfUmNcaXuqwjIKZrp2pRJsyrXIRQqJ63Am1O6l_b6V3J4kUhURwGFW7T1M-2sjeMT-IYABXKQ8FMfrGTSZco737MmLspwx0_ApEy7AbMgReSnNT72B2zSeFRSIetFizyFOknuJkA85ZQB11XXnakj2VkqmrXZxwPUiGpJcMye0tnD3rDPQdlmoQD69vgLaCJV7DJhS4Lz5Ti3Ta1oEDV4lUv7cZR6pgIwGKYDXLgWh0ZVwRvoRkDFAl0I3yfihujF0d8H1UBmjeIvhICpwVatkSDbWfiwGrupdAGpPZY1XpB2U3X01AC68KbhrwcDnqSiuqms4Bu2idO5qAqucPwpooGrgjDFpS9vQj_hkBa2dFz_QqOUGqswl3Ed_5NQJMdDStkW2kwlo_rfAzflzhMdfHKXiOVCCJAGhahWnU19hNz3FScJ_TJgEmC7TZsMEDysQB9LIqE7pe7aX3-VjRgn6vp4LGCxifIJlgFRrYcOKZA02f_ztRrciSd8N-rGMrvHToaj09lg9wWXK_V4XylfjOEHeUGbnxciCjLtd9vx3uGeMWOVSVeV0Eva",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dannyda.com/2020/05/17/how-to-remove-you-do-not-have-a-valid-subscription-for-this-server-from-proxmox-virtual-environment-6-1-2-proxmox-ve-6-1-2-pve-6-1-2/"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);