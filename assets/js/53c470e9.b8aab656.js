"use strict";(self.webpackChunkm_wblog=self.webpackChunkm_wblog||[]).push([[5735],{4214:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var s=t(5893),o=t(1151);const r={description:"4\uc77c\ucc28 - react hook",title:"\uc720\ub370\ubbf8x\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac Next.js 3\uae30 - \uc0ac\uc804\uc9c1\ubb34\uad50\uc721 - 4\uc77c\ucc28(react hook)",tags:["\uc720\ub370\ubbf8","udemy","\uc6c5\uc9c4\uc53d\ud06c\ube45","\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac","\uc778\uc0ac\uc774\ub4dc\uc544\uc6c3","\ubbf8\ub798\ub0b4\uc77c\uc77c\uacbd\ud5d8","\ud504\ub85c\uc81d\ud2b8\ucea0\ud504","\ubd80\ud2b8\ucea0\ud504","React","\ub9ac\uc561\ud2b8\ud504\ub85c\uc81d\ud2b8","\ud504\ub860\ud2b8\uc5d4\ub4dc\uac1c\ubc1c\uc790\uc591\uc131\uacfc\uc815","\uac1c\ubc1c\uc790\uad50\uc721\uacfc\uc815"]},c=void 0,a={id:"2/6",title:"\uc720\ub370\ubbf8x\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac Next.js 3\uae30 - \uc0ac\uc804\uc9c1\ubb34\uad50\uc721 - 4\uc77c\ucc28(react hook)",description:"4\uc77c\ucc28 - react hook",source:"@site/docs/2/6.md",sourceDirName:"2",slug:"/2/6",permalink:"/M_W_blog/docs/2/6",draft:!1,unlisted:!1,tags:[{label:"\uc720\ub370\ubbf8",permalink:"/M_W_blog/docs/tags/\uc720\ub370\ubbf8"},{label:"udemy",permalink:"/M_W_blog/docs/tags/udemy"},{label:"\uc6c5\uc9c4\uc53d\ud06c\ube45",permalink:"/M_W_blog/docs/tags/\uc6c5\uc9c4\uc53d\ud06c\ube45"},{label:"\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac",permalink:"/M_W_blog/docs/tags/\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac"},{label:"\uc778\uc0ac\uc774\ub4dc\uc544\uc6c3",permalink:"/M_W_blog/docs/tags/\uc778\uc0ac\uc774\ub4dc\uc544\uc6c3"},{label:"\ubbf8\ub798\ub0b4\uc77c\uc77c\uacbd\ud5d8",permalink:"/M_W_blog/docs/tags/\ubbf8\ub798\ub0b4\uc77c\uc77c\uacbd\ud5d8"},{label:"\ud504\ub85c\uc81d\ud2b8\ucea0\ud504",permalink:"/M_W_blog/docs/tags/\ud504\ub85c\uc81d\ud2b8\ucea0\ud504"},{label:"\ubd80\ud2b8\ucea0\ud504",permalink:"/M_W_blog/docs/tags/\ubd80\ud2b8\ucea0\ud504"},{label:"React",permalink:"/M_W_blog/docs/tags/react"},{label:"\ub9ac\uc561\ud2b8\ud504\ub85c\uc81d\ud2b8",permalink:"/M_W_blog/docs/tags/\ub9ac\uc561\ud2b8\ud504\ub85c\uc81d\ud2b8"},{label:"\ud504\ub860\ud2b8\uc5d4\ub4dc\uac1c\ubc1c\uc790\uc591\uc131\uacfc\uc815",permalink:"/M_W_blog/docs/tags/\ud504\ub860\ud2b8\uc5d4\ub4dc\uac1c\ubc1c\uc790\uc591\uc131\uacfc\uc815"},{label:"\uac1c\ubc1c\uc790\uad50\uc721\uacfc\uc815",permalink:"/M_W_blog/docs/tags/\uac1c\ubc1c\uc790\uad50\uc721\uacfc\uc815"}],version:"current",frontMatter:{description:"4\uc77c\ucc28 - react hook",title:"\uc720\ub370\ubbf8x\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac Next.js 3\uae30 - \uc0ac\uc804\uc9c1\ubb34\uad50\uc721 - 4\uc77c\ucc28(react hook)",tags:["\uc720\ub370\ubbf8","udemy","\uc6c5\uc9c4\uc53d\ud06c\ube45","\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac","\uc778\uc0ac\uc774\ub4dc\uc544\uc6c3","\ubbf8\ub798\ub0b4\uc77c\uc77c\uacbd\ud5d8","\ud504\ub85c\uc81d\ud2b8\ucea0\ud504","\ubd80\ud2b8\ucea0\ud504","React","\ub9ac\uc561\ud2b8\ud504\ub85c\uc81d\ud2b8","\ud504\ub860\ud2b8\uc5d4\ub4dc\uac1c\ubc1c\uc790\uc591\uc131\uacfc\uc815","\uac1c\ubc1c\uc790\uad50\uc721\uacfc\uc815"]},sidebar:"tutorialSidebar",previous:{title:"\uc720\ub370\ubbf8x\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac Next.js 3\uae30 - \uc0ac\uc804\uc9c1\ubb34\uad50\uc721 - 4\uc77c\ucc28",permalink:"/M_W_blog/docs/2/5"},next:{title:"\uc720\ub370\ubbf8x\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac Next.js 3\uae30 - \uc0ac\uc804\uc9c1\ubb34\uad50\uc721 - 5\uc77c\ucc28(useEffect)",permalink:"/M_W_blog/docs/2/7"}},l={},i=[{value:"\ub9ac\uc561\ud2b8 \ud6c5",id:"\ub9ac\uc561\ud2b8-\ud6c5",level:2},{value:"useState",id:"usestate",level:3},{value:"useRef",id:"useref",level:2},{value:"forwardRef",id:"forwardref",level:3}];function u(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(6754).Z+"",width:"960",height:"540"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"\ub9ac\uc561\ud2b8-\ud6c5",children:"\ub9ac\uc561\ud2b8 \ud6c5"}),"\n",(0,s.jsx)(n.p,{children:"\ud568\uc218\ud615 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0c1\ud0dc \uad00\ub9ac\ub098 \uc0dd\uba85\uc8fc\uae30 \uba54\uc11c\ub4dc\uc640 \uac19\uc740 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \ud568\uc218\ub2e4. React \ud6c5\uc740 \ud074\ub798\uc2a4\ud615 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub9cc \uac00\ub2a5\ud588\ub358 \uc0c1\ud0dc \uad00\ub9ac \ubc0f \uc5ec\ub7ec \uae30\ub2a5\ub4e4\uc744 \ud568\uc218\ud615 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub3c4 \uad6c\ud604\ud560 \uc218 \uc788\uac8c \ub9cc\ub4e4\uc5b4 \uc8fc\ub294\ub370. \ud6c5\uc740 React 16.8 \ubc84\uc804\uc5d0\uc11c \ucc98\uc74c \ub3c4\uc785\ub418\uc5c8\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"usestate",children:"useState"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useState"}),"\ub294 \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\uae30 \uc704\ud55c \ud6c5\uc774\ub2e4."]}),"\n",(0,s.jsx)(n.p,{children:"useState\uc758 setter\ud568\uc218\ub294 \ube44\ub3d9\uae30\ub85c \uc2e4\ud589\ub418\uae30 \ub54c\ubb38\uc5d0 \uc544\ub798 \ucf54\ub4dc\ucc98\ub7fc \uc99d\uac00 \ubc84\ud2bc\uc744 \ud55c\ubc88 \ub20c\ub800\uc744\ub54c 3\uc529 \uc99d\uac00\ud558\uac8c \ucf54\ub4dc\ub97c \uc9dc\uace0 \uc99d\uac00\ubc84\ud2bc\uc744 \ub20c\ub7ec\ub3c4 \uce74\uc6b4\ud2b8\ub294 1\uc529 \uc99d\uac00\ud558\uac8c \ub41c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:"title='\ube44\ub3d9\uae30 \uc2e4\ud589 : \uc0c1\ud0dc\uac12\uc744 \ucc38\uc870\ud558\uc9c0 \uc54a\ub294 \uc5c5\ub370\uc774\ud2b8'",children:'import { useState } from "react";\n\nexport default function App() {\n  const [count, setCount] = useState(0);\n  const increment = () => {\n    setCount(count + 1);\n    setCount(count + 1);\n    setCount(count + 1);\n  };\n  return (\n    <div className="h-screen flex items-center justify-center">\n      <h1>count : {count}</h1>\n      <button onClick={increment}>\uc99d\uac00</button>\n    </div>\n  );\n}\n'})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"\uc99d\uac00\ubc84\ud2bc\uc744 \ub20c\ub800\uc744\ub54c 3\uc529 \uc99d\uac00\ud558\uac8c \ud558\ub824\uba74 \uc544\ub798\ucc98\ub7fc \ucf5c\ubc31\ud615\uc2dd\uc73c\ub85c \ub123\uc5b4\uc918\uc57c \ub3d9\uae30\ubc29\uc2dd\uc73c\ub85c \uc2e4\ud589\ub418\uae30 \ub54c\ubb38\uc5d0 \ubc84\ud2bc\uc744 \ub204\ub974\uba74 3\uc529 \uc99d\uac00\ud558\uac8c \ub428"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:"title='\ub3d9\uae30 \uc2e4\ud589 : \uc0c1\ud0dc\uac12\uc744 \ucc38\uc870\ud558\ub294 \uc5c5\ub370\uc774\ud2b8'",children:'import { useState } from "react";\n\nexport default function App() {\n  const [count, setCount] = useState(0);\n  const increment = () => {\n    setCount((count) => count + 1);\n    setCount((count) => count + 1);\n    setCount((count) => count + 1);\n  };\n  return (\n    <div className="h-screen flex items-center justify-center">\n      <h1>count : {count}</h1>\n      <button onClick={increment}>\uc99d\uac00</button>\n    </div>\n  );\n}\n'})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"useref",children:"useRef"}),"\n",(0,s.jsx)(n.p,{children:"useRef\ub294 \ub9ac\uc561\ud2b8\uc5d0\uc11c HTML \uc694\uc18c\uc5d0 \uc811\uadfc\ud558\uac70\ub098 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ub80c\ub354\ub9c1\uc5d0 \uc601\ud5a5\uc5c6\uc774 \uac12\uc744 \uc720\uc9c0\ud558\uace0 \uc2f6\uc744 \ub54c \uc0ac\uc6a9\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"forwardref",children:"forwardRef"}),"\n",(0,s.jsxs)(n.p,{children:["\ucef4\ud3ec\ub10c\ud2b8\uc5d0 ref\ub97c \uc0ac\uc6a9\ud558\uae30\uc704\ud574 \uc4f0\ub294\uac83\n\uae30\uc874 \ud568\uc218\ub97c \ud654\uc0b4\ud45c \ud568\uc218\ub85c \ubc14\uafd4 \uc8fc\uace0 \ud574\ub2f9 \ud568\uc218\ub8f0 ",(0,s.jsx)(n.code,{children:"forwardRef"}),"\ub97c \uc0ac\uc6a9\ud574 \uac10\uc2f8\uc900\ub2e4"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'type Input = React.ComponentPropsWithRef<"input"> & {\n  type: "text" | "password" | "email";\n};\n\nconst RefTest = forwardRef<HTMLInputElement, Input>((props, ref) => {\n  return <input />;\n});\n'})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"\ubcf8 \ud6c4\uae30\ub294 \ubcf8 \ud6c4\uae30\ub294 [\uc720\ub370\ubbf8x\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac] \ud504\ub85c\uc81d\ud2b8 \ucea0\ud504 : Next.js 3\uae30 \uacfc\uc815(B-log) \ub9ac\ubdf0\ub85c \uc791\uc131 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},6754:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/image-1-d48e17767a7f1de2c8184828e148f2f4.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var s=t(7294);const o={},r=s.createContext(o);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);