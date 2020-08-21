(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{467:function(t,e,s){"use strict";s.r(e);var a=s(23),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"no-subscription-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#no-subscription-repository"}},[t._v("#")]),t._v(" No-Subscription Repository")]),t._v(" "),s("p",[t._v("在 Proxmox VE 中，預設的 Repository 是只有有訂閱的使用者才有權限進入更新，我們需要新增 No-Subscription Repository 以便進行 Proxmox VE 的安全性更新")]),t._v(" "),s("h2",{attrs:{id:"新增-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新增-repository"}},[t._v("#")]),t._v(" 新增 repository")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("使用以下指令新增 Proxmox VE 4.4 repository")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('root@pve:~# echo "deb http://download.proxmox.com/debian jessie pve-no-subscription" >> /etc/apt/sources.list\n')])])])]),t._v(" "),s("li",[s("p",[t._v("移除訂閱板 repository")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("root@pve:~# mv /etc/apt/sources.list.d/pve-enterprise.list /etc/apt/sources.list.d/pve-enterprise.list.bak\n")])])])]),t._v(" "),s("li",[s("p",[t._v("進行套件清單更新")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("root@pve:~# apt-get update \nIgn http://ftp.tw.debian.org jessie InRelease\nHit http://ftp.tw.debian.org jessie Release.gpg                             \nHit http://ftp.tw.debian.org jessie Release                                 \nHit http://ftp.tw.debian.org jessie/main amd64 Packages                                           \nHit http://ftp.tw.debian.org jessie/contrib amd64 Packages                                  \nHit http://ftp.tw.debian.org jessie/contrib Translation-en                                  \nHit http://ftp.tw.debian.org jessie/main Translation-en                                                    \nHit http://security.debian.org jessie/updates InRelease                                                    \nGet:1 http://download.proxmox.com jessie InRelease [2,413 B]                                               \nGet:2 http://download.proxmox.com jessie/pve-no-subscription amd64 Packages [270 kB]\nHit http://security.debian.org jessie/updates/main amd64 Packages            \nHit http://security.debian.org jessie/updates/contrib amd64 Packages\nHit http://security.debian.org jessie/updates/contrib Translation-en\nHit http://security.debian.org jessie/updates/main Translation-en\nIgn http://download.proxmox.com jessie/pve-no-subscription Translation-en_US\nIgn http://download.proxmox.com jessie/pve-no-subscription Translation-en\nFetched 272 kB in 5s (50.5 kB/s)\nReading package lists... Done\nroot@pve:~#\n")])])])]),t._v(" "),s("li",[s("p",[t._v("更新 Proxmox VE，依據網路速度決定完成時間")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("root@pve:~# apt-get dist-upgrade -y\n")])])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);