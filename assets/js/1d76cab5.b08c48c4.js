"use strict";(self.webpackChunkm_wblog=self.webpackChunkm_wblog||[]).push([[6321],{4696:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=n(5893),t=n(1151);const l={title:"MariaDB \ubb38\ubc95 \uc815\ub9ac",tags:["MariaDB","MySQL"]},c=void 0,r={id:"MariaDB/2",title:"MariaDB \ubb38\ubc95 \uc815\ub9ac",description:"DATABASE \uc0dd\uc131,\uc0ac\uc6a9 \ud558\uae30 CREATE, use",source:"@site/docs/MariaDB/2.md",sourceDirName:"MariaDB",slug:"/MariaDB/2",permalink:"/M_W_blog/docs/MariaDB/2",draft:!1,unlisted:!1,tags:[{label:"MariaDB",permalink:"/M_W_blog/docs/tags/maria-db"},{label:"MySQL",permalink:"/M_W_blog/docs/tags/my-sql"}],version:"current",frontMatter:{title:"MariaDB \ubb38\ubc95 \uc815\ub9ac",tags:["MariaDB","MySQL"]},sidebar:"tutorialSidebar",previous:{title:"MariaDB \uc124\uce58\ud558\uae30",permalink:"/M_W_blog/docs/MariaDB/1"},next:{title:"MariaDB\uc5d0 \uc5d1\uc140\ud30c\uc77c \ub370\uc774\ud130 \ub123\uae30!",permalink:"/M_W_blog/docs/MariaDB/3"}},i={},d=[{value:"DATABASE \uc0dd\uc131,\uc0ac\uc6a9 \ud558\uae30 CREATE, use",id:"database-\uc0dd\uc131\uc0ac\uc6a9-\ud558\uae30-create-use",level:2},{value:"DATABASE \uc0ad\uc81c",id:"database-\uc0ad\uc81c",level:2},{value:"\ud14c\uc774\ube14 \uc0dd\uc131,\uc870\ud68c \ud558\uae30 CREATE, SHOW",id:"\ud14c\uc774\ube14-\uc0dd\uc131\uc870\ud68c-\ud558\uae30-create-show",level:2},{value:"\ud14c\uc774\ube14\uc5d0 \uac12 \ub123\uae30 INSERT",id:"\ud14c\uc774\ube14\uc5d0-\uac12-\ub123\uae30-insert",level:2},{value:"\ud14c\uc774\ube14 \uc870\ud68c SELECT",id:"\ud14c\uc774\ube14-\uc870\ud68c-select",level:2},{value:"\ud14c\uc774\ube14 \uc870\ud68c \uc81c\ud55c \uc124\uc815 SELECT, LIMIT",id:"\ud14c\uc774\ube14-\uc870\ud68c-\uc81c\ud55c-\uc124\uc815-select-limit",level:3},{value:"\ucd5c\ub300, \ucd5c\uc18c\uac12 \uc870\ud68c MAX, MIN",id:"\ucd5c\ub300-\ucd5c\uc18c\uac12-\uc870\ud68c-max-min",level:3},{value:"\uc870\ud68c\ub41c \ud14c\uc774\ube14\uc758 \ucd1d \ud589 COUNT",id:"\uc870\ud68c\ub41c-\ud14c\uc774\ube14\uc758-\ucd1d-\ud589-count",level:3}];function o(e){const s={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h2,{id:"database-\uc0dd\uc131\uc0ac\uc6a9-\ud558\uae30-create-use",children:"DATABASE \uc0dd\uc131,\uc0ac\uc6a9 \ud558\uae30 CREATE, use"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"CREATE DATABASE [\uc0dd\uc131\ud560 DB\uc774\ub984]\n-- DB\uc0dd\uc131\n\nuse [DB\uc774\ub984];\n-- \ud574\ub2f9 DB\uc0ac\uc6a9\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://github.com/user-attachments/assets/e5b1a06d-bc8a-48eb-bcc3-280916f68e0b",alt:"image"})}),"\n",(0,a.jsx)(s.h2,{id:"database-\uc0ad\uc81c",children:"DATABASE \uc0ad\uc81c"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"DROP DATABASE [\uc0ad\uc81c\ud560 DB\uc774\ub984]\n-- \ud574\ub2f9 DB \uc0ad\uc81c\n\n"})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h2,{id:"\ud14c\uc774\ube14-\uc0dd\uc131\uc870\ud68c-\ud558\uae30-create-show",children:"\ud14c\uc774\ube14 \uc0dd\uc131,\uc870\ud68c \ud558\uae30 CREATE, SHOW"}),"\n",(0,a.jsxs)(s.p,{children:["\ud14c\uc774\ube14\uc740 DB\uc548\uc5d0 \uc874\uc7ac\ud558\ub294 \ud589\uacfc \uc5f4\ub85c \uad6c\uc131\ub41c\ub2e4. \uac01\uc5f4\uc740 \ud2b9\uc815 \ub370\uc774\ud130 \uc720\ud615\uc744 \uac16\uace0, \ud589\uc740 \uc2e4\uc81c \ub370\uc774\ud130\ub97c \ud3ec\ud568\ud55c\ub2e4.\n\uc27d\uac8c \uc0dd\uac01\ud558\uba74 DB = \ud3f4\ub354, \ud14c\uc774\ube14 = \ud3f4\ub354\uc548\uc758 \uc5d1\uc140\ud30c\uc77c..?\n\uadf8\ub9ac\uace0 \ubaa8\ub4e0 \ud14c\uc774\ube14\uc740 ",(0,a.jsx)(s.code,{children:"PIRMARY KEY"}),"\ub77c\ub294 \uae30\ubcf8\ud0a4\ub97c \uc124\uc815 \ud574\uc918\uc57c \ud55c\ub2e4 \uc774\uac74 \ud14c\uc774\ube14\uc758 \uc2dd\ubcc4\uc790\ub85c \uc0ac\uc6a9\ub418\uace0 \uc911\ubcf5\uc774 \ud5c8\uc6a9 \ub418\uc9c0 \uc54a\uc74c."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE [\ud14c\uc774\ube14 \uc774\ub984] (\n  column1 [\ub370\uc774\ud130\ud0c0\uc785] PRIMARY KEY,\n  column2 [\ub370\uc774\ud130\ud0c0\uc785],\n  column3 [\ud14c\uc774\ud130\ud0c0\uc785],\n  ...\n);\n\nSHOW tables;\n-- \ud14c\uc774\ube14 \uc870\ud68c\n\nshow databases;\n-- \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc870\ud68c\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://github.com/user-attachments/assets/d322be03-b0c4-4c66-9a58-049088260fe0",alt:"image"})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h2,{id:"\ud14c\uc774\ube14\uc5d0-\uac12-\ub123\uae30-insert",children:"\ud14c\uc774\ube14\uc5d0 \uac12 \ub123\uae30 INSERT"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"INSERT INTO [\ud14c\uc774\ube14 \uc774\ub984] VALUES ( \uac121, \uac122, \uac123, ... );\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://github.com/user-attachments/assets/b67b2d28-2450-4ee5-8a9a-d0b21528b553",alt:"image"})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h2,{id:"\ud14c\uc774\ube14-\uc870\ud68c-select",children:"\ud14c\uc774\ube14 \uc870\ud68c SELECT"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"SELECT * from [\ud14c\uc774\ube14 \uc774\ub984];\n-- \ud14c\uc774\ube14\uc758 \ubaa8\ub4e0 \uac12\uc744 \uc870\ud68c\n\nSELECT column1, column2 from [\ud14c\uc774\ube14 \uc774\ub984]\n-- \ud14c\uc774\ube14\uc5d0\uc11c \uc6d0\ud558\ub294 \ud2b9\uc815\uac12(\uc5f4column)\ub9cc \uc870\ud68c\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://github.com/user-attachments/assets/be16754e-47a8-4ee7-a6ad-c6dd832dada8",alt:"image"})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h3,{id:"\ud14c\uc774\ube14-\uc870\ud68c-\uc81c\ud55c-\uc124\uc815-select-limit",children:"\ud14c\uc774\ube14 \uc870\ud68c \uc81c\ud55c \uc124\uc815 SELECT, LIMIT"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM [\ud14c\uc774\ube14] LIMIT 5;\n-- \ud14c\uc774\ube14\uc758 \uac12\uc911 \uc0c1\uc704 5\uac1c\ub9cc \uc870\ud68c\n\nSELECT * FROM [\ud14c\uc774\ube14] LIMIT 2,4;\n-- \ud14c\uc774\ube14\uc758 \uac12\uc911 3\ubc88\uc9f8 \ud589 \ubd80\ud130 4\uac1c\uc758 \ud589\uc744 \uc870\ud68c\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://github.com/user-attachments/assets/e5fbd0e3-a96b-40a3-8e76-64493d0e9d32",alt:"image"})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h3,{id:"\ucd5c\ub300-\ucd5c\uc18c\uac12-\uc870\ud68c-max-min",children:"\ucd5c\ub300, \ucd5c\uc18c\uac12 \uc870\ud68c MAX, MIN"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"SELECT MAX(\uc5f4\uc774\ub984) FROM [\ud14c\uc774\ube14];\n-- \ud574\ub2f9 \uc5f4\uc5d0\uc11c \ucd5c\ub300\uac12 \ucd9c\ub825\n-- \ud574\ub2f9\uc5f4\uc774 \ubb38\uc790\ud615 \uc774\ub77c\uba74 \uc54c\ud30c\ubcb3 \uc21c\uc73c\ub85c \uac00\uc7a5 \ub2a6\uc740\uac83\uc744 \ubc18\ud658, MIN\uc774\ub77c\uba74 \uac00\uc7a5 \ube60\ub978\uac83\uc744 \ubc18\ud658.\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://github.com/user-attachments/assets/a9a44852-455f-4d39-85f6-5e16de335a07",alt:"image"})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h3,{id:"\uc870\ud68c\ub41c-\ud14c\uc774\ube14\uc758-\ucd1d-\ud589-count",children:"\uc870\ud68c\ub41c \ud14c\uc774\ube14\uc758 \ucd1d \ud589 COUNT"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"SELECT COUNT(*) FROM [\ud14c\uc774\ube14]\n-- \ud14c\uc774\ube14\uc758 \ucd1d \ud589\uc218\ub97c \ubc18\ud658\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://github.com/user-attachments/assets/b031f6e0-4d9a-45e2-86fe-c19c85579cbf",alt:"image"})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>c});var a=n(7294);const t={},l=a.createContext(t);function c(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);