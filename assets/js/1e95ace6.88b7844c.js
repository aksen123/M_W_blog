"use strict";(self.webpackChunkm_wblog=self.webpackChunkm_wblog||[]).push([[4980],{9412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=n(5893),o=n(1151);const r={description:"4\uc77c\ucc28 - props types",title:"\uc720\ub370\ubbf8x\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac Next.js 3\uae30 - \uc0ac\uc804\uc9c1\ubb34\uad50\uc721 - 4\uc77c\ucc28",tags:["\uc720\ub370\ubbf8","udemy","\uc6c5\uc9c4\uc53d\ud06c\ube45","\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac","\uc778\uc0ac\uc774\ub4dc\uc544\uc6c3","\ubbf8\ub798\ub0b4\uc77c\uc77c\uacbd\ud5d8","\ud504\ub85c\uc81d\ud2b8\ucea0\ud504","\ubd80\ud2b8\ucea0\ud504","React","\ub9ac\uc561\ud2b8\ud504\ub85c\uc81d\ud2b8","\ud504\ub860\ud2b8\uc5d4\ub4dc\uac1c\ubc1c\uc790\uc591\uc131\uacfc\uc815","\uac1c\ubc1c\uc790\uad50\uc721\uacfc\uc815"]},l=void 0,i={id:"2/5",title:"\uc720\ub370\ubbf8x\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac Next.js 3\uae30 - \uc0ac\uc804\uc9c1\ubb34\uad50\uc721 - 4\uc77c\ucc28",description:"4\uc77c\ucc28 - props types",source:"@site/docs/2/5.md",sourceDirName:"2",slug:"/2/5",permalink:"/M_W_blog/docs/2/5",draft:!1,unlisted:!1,tags:[{label:"\uc720\ub370\ubbf8",permalink:"/M_W_blog/docs/tags/\uc720\ub370\ubbf8"},{label:"udemy",permalink:"/M_W_blog/docs/tags/udemy"},{label:"\uc6c5\uc9c4\uc53d\ud06c\ube45",permalink:"/M_W_blog/docs/tags/\uc6c5\uc9c4\uc53d\ud06c\ube45"},{label:"\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac",permalink:"/M_W_blog/docs/tags/\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac"},{label:"\uc778\uc0ac\uc774\ub4dc\uc544\uc6c3",permalink:"/M_W_blog/docs/tags/\uc778\uc0ac\uc774\ub4dc\uc544\uc6c3"},{label:"\ubbf8\ub798\ub0b4\uc77c\uc77c\uacbd\ud5d8",permalink:"/M_W_blog/docs/tags/\ubbf8\ub798\ub0b4\uc77c\uc77c\uacbd\ud5d8"},{label:"\ud504\ub85c\uc81d\ud2b8\ucea0\ud504",permalink:"/M_W_blog/docs/tags/\ud504\ub85c\uc81d\ud2b8\ucea0\ud504"},{label:"\ubd80\ud2b8\ucea0\ud504",permalink:"/M_W_blog/docs/tags/\ubd80\ud2b8\ucea0\ud504"},{label:"React",permalink:"/M_W_blog/docs/tags/react"},{label:"\ub9ac\uc561\ud2b8\ud504\ub85c\uc81d\ud2b8",permalink:"/M_W_blog/docs/tags/\ub9ac\uc561\ud2b8\ud504\ub85c\uc81d\ud2b8"},{label:"\ud504\ub860\ud2b8\uc5d4\ub4dc\uac1c\ubc1c\uc790\uc591\uc131\uacfc\uc815",permalink:"/M_W_blog/docs/tags/\ud504\ub860\ud2b8\uc5d4\ub4dc\uac1c\ubc1c\uc790\uc591\uc131\uacfc\uc815"},{label:"\uac1c\ubc1c\uc790\uad50\uc721\uacfc\uc815",permalink:"/M_W_blog/docs/tags/\uac1c\ubc1c\uc790\uad50\uc721\uacfc\uc815"}],version:"current",frontMatter:{description:"4\uc77c\ucc28 - props types",title:"\uc720\ub370\ubbf8x\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac Next.js 3\uae30 - \uc0ac\uc804\uc9c1\ubb34\uad50\uc721 - 4\uc77c\ucc28",tags:["\uc720\ub370\ubbf8","udemy","\uc6c5\uc9c4\uc53d\ud06c\ube45","\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac","\uc778\uc0ac\uc774\ub4dc\uc544\uc6c3","\ubbf8\ub798\ub0b4\uc77c\uc77c\uacbd\ud5d8","\ud504\ub85c\uc81d\ud2b8\ucea0\ud504","\ubd80\ud2b8\ucea0\ud504","React","\ub9ac\uc561\ud2b8\ud504\ub85c\uc81d\ud2b8","\ud504\ub860\ud2b8\uc5d4\ub4dc\uac1c\ubc1c\uc790\uc591\uc131\uacfc\uc815","\uac1c\ubc1c\uc790\uad50\uc721\uacfc\uc815"]},sidebar:"tutorialSidebar",previous:{title:"\uc720\ub370\ubbf8x\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac Next.js 3\uae30 - \uc0ac\uc804\uc9c1\ubb34\uad50\uc721 - 3\uc77c\ucc28(react,tailwind)",permalink:"/M_W_blog/docs/2/4"},next:{title:"\uc720\ub370\ubbf8x\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac Next.js 3\uae30 - \uc0ac\uc804\uc9c1\ubb34\uad50\uc721 - 4\uc77c\ucc28(react hook)",permalink:"/M_W_blog/docs/2/6"}},a={},c=[{value:"ComponentPropsWithoutRef",id:"componentpropswithoutref",level:2},{value:"\uc0ac\uc6a9\ubc95",id:"\uc0ac\uc6a9\ubc95",level:3},{value:"\uc774\uc804\uc5d0 \uc0ac\uc6a9\ud558\ub358 \ubc29\ubc95",id:"\uc774\uc804\uc5d0-\uc0ac\uc6a9\ud558\ub358-\ubc29\ubc95",level:3},{value:"Omit",id:"omit",level:2}];function p(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(6754).Z+"",width:"960",height:"540"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h2,{id:"componentpropswithoutref",children:"ComponentPropsWithoutRef"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ComponentPropsWithoutRef"}),"\ub294 typescript\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\uc758 props\ud0c0\uc785\uc5d0\uc11c ref\uc18d\uc131\uc744 \uc81c\uc678\ud55c \ud0c0\uc785\uc744 \ub9cc\ub4e4\uc5b4 \uc8fc\ub294 \uac83\uc73c\ub85c \ud568\uc218\ud615 \ucef4\ud3ec\ub10c\ud2b8\uc758 props\ub97c \uc815\uc758\ud560 \ub54c \uc0ac\uc6a9 \ub41c\ub2e4."]}),"\n",(0,s.jsx)(t.p,{children:"\uc608\ub97c \ub4e4\uc5b4 \ubc84\ud2bc \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e0\ub2e4\uace0 \uac00\uc815\ud558\uace0 props\ub97c \ubc1b\uc544\uc57c\ud558\ub294\ub370 \ud574\ub2f9 \ud0dc\uadf8\uc758 \uae30\ubcf8 \uc18d\uc131\ub4e4\uc744 \ubc1b\uace0 \uc2f6\uc744\ub54c \uc0ac\uc6a9 \ud558\uba74 \ub41c\ub2e4."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h3,{id:"\uc0ac\uc6a9\ubc95",children:"\uc0ac\uc6a9\ubc95"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'type TagProps = ComponentPropsWithoutRef<"tag name">;\n\ntype ButtonProps = React.ComponentPropsWithoutRef<"button">;\n\nexport default function Button(props: Button) {\n  const { title, children, className, ...rest } = props;\n  return (\n    <button {...rest} className={className}>\n      {children}\n    </button>\n  );\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:n(4065).Z+"",width:"625",height:"242"})}),"\n",(0,s.jsxs)(t.p,{children:["\uc694\ub807\uac8c \ub2f4\uc544\uc8fc\uba74 ",(0,s.jsx)(t.code,{children:"ButtonProps"}),"\uc5d0 ref\ub97c \uc81c\uc678\ud55c button\uc758 \uc18d\uc131\ub4e4\uc774 \ub2e4 \ub2f4\uae30\uac8c \ub41c\ub2e4! \uc774\uac78 \ube44\uad6c\uc870\ud654 \ud560\ub2f9\uc744 \uc0ac\uc6a9\ud574 \ud3b8\ud558\uac8c \uc0ac\uc6a9 \uac00\ub2a5\ud568!"]}),"\n",(0,s.jsx)(t.h3,{id:"\uc774\uc804\uc5d0-\uc0ac\uc6a9\ud558\ub358-\ubc29\ubc95",children:"\uc774\uc804\uc5d0 \uc0ac\uc6a9\ud558\ub358 \ubc29\ubc95"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"interface Button {\n  title: string;\n  [key: string]: any;\n}\n\nexport default function Button(props: Button) {\n  const { title, ...rest } = props;\n  return <button {...rest}>{title} </button>;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"\uc774\uc804\uc5d0 \uc0ac\uc6a9\ud558\ub358 \ubc29\ubc95\uc740 \uc774\ub7f0\uc2dd\uc774\uc600\ub294\ub370 \uc5c4\uccad\ub09c \uafc0\ud301\uc744 \ubc30\uc6b4\uac83 \uac19\ub2e4\ud83e\udee0"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h2,{id:"omit",children:"Omit"}),"\n",(0,s.jsx)(t.p,{children:"Type\uc5d0\uc11c \ubaa8\ub4e0 \ud504\ub85c\ud37c\ud2f0\ub97c \uc120\ud0dd\ud558\uace0 \ud0a4\ub97c \uc81c\uac70\ud55c \ud0c0\uc785\uc744 \uc0dd\uc131"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:'interface Todo {\n  title: string;\n  description: string;\n  completed: boolean;\n}\n\ntype TodoPreview = Omit<Todo, "description">;\n\nconst todo: TodoPreview = {\n  title: "Clean room",\n  completed: false,\n};\n'})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"\ubcf8 \ud6c4\uae30\ub294 \ubcf8 \ud6c4\uae30\ub294 [\uc720\ub370\ubbf8x\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac] \ud504\ub85c\uc81d\ud2b8 \ucea0\ud504 : Next.js 3\uae30 \uacfc\uc815(B-log) \ub9ac\ubdf0\ub85c \uc791\uc131 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},6754:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image-1-d48e17767a7f1de2c8184828e148f2f4.png"},4065:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image-2-bc546773cf61cda2e42903f039b78b16.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var s=n(7294);const o={},r=s.createContext(o);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);