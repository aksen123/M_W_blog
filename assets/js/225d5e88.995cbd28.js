"use strict";(self.webpackChunkm_wblog=self.webpackChunkm_wblog||[]).push([[2018],{4095:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var l=s(5893),t=s(1151);const c={description:"5\uc77c\ucc28 - useEffect",title:"\uc720\ub370\ubbf8x\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac Next.js 3\uae30 - \uc0ac\uc804\uc9c1\ubb34\uad50\uc721 - 5\uc77c\ucc28(useEffect)",tags:["\uc720\ub370\ubbf8","udemy","\uc6c5\uc9c4\uc53d\ud06c\ube45","\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac","\uc778\uc0ac\uc774\ub4dc\uc544\uc6c3","\ubbf8\ub798\ub0b4\uc77c\uc77c\uacbd\ud5d8","\ud504\ub85c\uc81d\ud2b8\ucea0\ud504","\ubd80\ud2b8\ucea0\ud504","React","\ub9ac\uc561\ud2b8\ud504\ub85c\uc81d\ud2b8","\ud504\ub860\ud2b8\uc5d4\ub4dc\uac1c\ubc1c\uc790\uc591\uc131\uacfc\uc815","\uac1c\ubc1c\uc790\uad50\uc721\uacfc\uc815"]},i=void 0,r={id:"2/7",title:"\uc720\ub370\ubbf8x\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac Next.js 3\uae30 - \uc0ac\uc804\uc9c1\ubb34\uad50\uc721 - 5\uc77c\ucc28(useEffect)",description:"5\uc77c\ucc28 - useEffect",source:"@site/docs/2/7.md",sourceDirName:"2",slug:"/2/7",permalink:"/M_W_blog/docs/2/7",draft:!1,unlisted:!1,tags:[{label:"\uc720\ub370\ubbf8",permalink:"/M_W_blog/docs/tags/\uc720\ub370\ubbf8"},{label:"udemy",permalink:"/M_W_blog/docs/tags/udemy"},{label:"\uc6c5\uc9c4\uc53d\ud06c\ube45",permalink:"/M_W_blog/docs/tags/\uc6c5\uc9c4\uc53d\ud06c\ube45"},{label:"\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac",permalink:"/M_W_blog/docs/tags/\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac"},{label:"\uc778\uc0ac\uc774\ub4dc\uc544\uc6c3",permalink:"/M_W_blog/docs/tags/\uc778\uc0ac\uc774\ub4dc\uc544\uc6c3"},{label:"\ubbf8\ub798\ub0b4\uc77c\uc77c\uacbd\ud5d8",permalink:"/M_W_blog/docs/tags/\ubbf8\ub798\ub0b4\uc77c\uc77c\uacbd\ud5d8"},{label:"\ud504\ub85c\uc81d\ud2b8\ucea0\ud504",permalink:"/M_W_blog/docs/tags/\ud504\ub85c\uc81d\ud2b8\ucea0\ud504"},{label:"\ubd80\ud2b8\ucea0\ud504",permalink:"/M_W_blog/docs/tags/\ubd80\ud2b8\ucea0\ud504"},{label:"React",permalink:"/M_W_blog/docs/tags/react"},{label:"\ub9ac\uc561\ud2b8\ud504\ub85c\uc81d\ud2b8",permalink:"/M_W_blog/docs/tags/\ub9ac\uc561\ud2b8\ud504\ub85c\uc81d\ud2b8"},{label:"\ud504\ub860\ud2b8\uc5d4\ub4dc\uac1c\ubc1c\uc790\uc591\uc131\uacfc\uc815",permalink:"/M_W_blog/docs/tags/\ud504\ub860\ud2b8\uc5d4\ub4dc\uac1c\ubc1c\uc790\uc591\uc131\uacfc\uc815"},{label:"\uac1c\ubc1c\uc790\uad50\uc721\uacfc\uc815",permalink:"/M_W_blog/docs/tags/\uac1c\ubc1c\uc790\uad50\uc721\uacfc\uc815"}],version:"current",frontMatter:{description:"5\uc77c\ucc28 - useEffect",title:"\uc720\ub370\ubbf8x\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac Next.js 3\uae30 - \uc0ac\uc804\uc9c1\ubb34\uad50\uc721 - 5\uc77c\ucc28(useEffect)",tags:["\uc720\ub370\ubbf8","udemy","\uc6c5\uc9c4\uc53d\ud06c\ube45","\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac","\uc778\uc0ac\uc774\ub4dc\uc544\uc6c3","\ubbf8\ub798\ub0b4\uc77c\uc77c\uacbd\ud5d8","\ud504\ub85c\uc81d\ud2b8\ucea0\ud504","\ubd80\ud2b8\ucea0\ud504","React","\ub9ac\uc561\ud2b8\ud504\ub85c\uc81d\ud2b8","\ud504\ub860\ud2b8\uc5d4\ub4dc\uac1c\ubc1c\uc790\uc591\uc131\uacfc\uc815","\uac1c\ubc1c\uc790\uad50\uc721\uacfc\uc815"]},sidebar:"tutorialSidebar",previous:{title:"\uc720\ub370\ubbf8x\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac Next.js 3\uae30 - \uc0ac\uc804\uc9c1\ubb34\uad50\uc721 - 4\uc77c\ucc28(react hook)",permalink:"/M_W_blog/docs/2/6"},next:{title:"\uc720\ub370\ubbf8x\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac Next.js 3\uae30 - \uc0ac\uc804\uc9c1\ubb34\uad50\uc721 - 6\uc77c\ucc28(\ub370\uc774\ud130\ud1b5\uc2e0)",permalink:"/M_W_blog/docs/2/8"}},a={},o=[{value:"useEffect \uc0ac\uc6a9\ubc95",id:"useeffect-\uc0ac\uc6a9\ubc95",level:2},{value:"\uc758\uc874\uc131 \ubc30\uc5f4",id:"\uc758\uc874\uc131-\ubc30\uc5f4",level:3},{value:"useLayoutEffect",id:"uselayouteffect",level:2},{value:"\uc8fc\uc694 \ud2b9\uc9d5",id:"\uc8fc\uc694-\ud2b9\uc9d5",level:3},{value:"\uc8fc\ub85c \uc0ac\uc6a9\ub418\ub294 \uacbd\uc6b0",id:"\uc8fc\ub85c-\uc0ac\uc6a9\ub418\ub294-\uacbd\uc6b0",level:3},{value:"\uba54\ubaa8\uc774\uc81c\uc774\uc158",id:"\uba54\ubaa8\uc774\uc81c\uc774\uc158",level:2},{value:"React.memo() : \ucef4\ud3ec\ub10c\ud2b8",id:"reactmemo--\ucef4\ud3ec\ub10c\ud2b8",level:3},{value:"useCallback() : \ud568\uc218\uc7ac\uc0dd\uc131 \ubc29\uc9c0",id:"usecallback--\ud568\uc218\uc7ac\uc0dd\uc131-\ubc29\uc9c0",level:3},{value:"useMemo(): \ud2b9\uc815 \uac12",id:"usememo-\ud2b9\uc815-\uac12",level:3},{value:"context api",id:"context-api",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(6754).Z+"",width:"960",height:"540"})}),"\n",(0,l.jsx)(n.h2,{id:"useeffect-\uc0ac\uc6a9\ubc95",children:"useEffect \uc0ac\uc6a9\ubc95"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"useEffect(\n  () => {\n    //\uc2e4\ud589\ud560 \ud568\uc218\n  },\n  [] //\uc758\uc874\uc131 \ubc30\uc5f4\n);\n"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.h3,{id:"\uc758\uc874\uc131-\ubc30\uc5f4",children:"\uc758\uc874\uc131 \ubc30\uc5f4"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",metastring:"title='\uc758\uc874\uc131 \ubc30\uc5f4\uc774 \ube48\ubc30\uc5f4 \uc77c\ub54c : \ub9c8\uc6b4\ud2b8\uc2dc\uc5d0 \ud55c\ubc88\ub9cc \uc2e4\ud589'",children:"useEffect(\n  () => {\n    //\uc2e4\ud589\ud560 \ud568\uc218\n  },\n  [] //\uc758\uc874\uc131 \ubc30\uc5f4\n);\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",metastring:"title='\uc758\uc874\uc131 \ubc30\uc5f4\uc5d0 \uac12\uc774 \uc788\uc744\ub54c : \ud574\ub2f9\uac12\uc774 \uc5c5\ub370\uc774\ud2b8 \ub420 \ub54c \ub9c8\ub2e4 \uc2e4\ud589'",children:"useEffect(\n  () => {\n    //\uc2e4\ud589\ud560 \ud568\uc218\n  },\n  [state] //\uc758\uc874\uc131 \ubc30\uc5f4\n);\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",metastring:"title='\ucf5c\ubc31\ud568\uc218\uc5d0\uc11c \ud568\uc218\ub97c return\ud560 \ub54c : \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc5b8\ub9c8\uc6b4\ud2b8(\uc0ad\uc81c) \ub420 \ub54c return \ud568\uc218\ub97c \uc2e4\ud589'",children:"useEffect(() => {\n  //\uc2e4\ud589\ud560 \ud568\uc218\n  return () => {}; // \ud074\ub9b0\uc5c5 \ud568\uc218\n}, []);\n"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.h2,{id:"uselayouteffect",children:"useLayoutEffect"}),"\n",(0,l.jsx)(n.p,{children:"useEffect() \ud6c5\uacfc \ub611\uac19\uc740 \uac1c\ub150\uc774\uc9c0\ub9cc, \uc2e4\ud589\ub418\ub294 \ubc29\uc2dd\uc5d0\uc11c \ucc28\uc774\uac00 \uc788\ub2e4\nuseEffect() \ud6c5\uc740 \ud654\uba74\uc5d0 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1 \ub41c \ud6c4 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4. \uadf8\ub798\uc11c DOM\uc744 \uc870\uc791\ud558\ub294 \uacbd\uc6b0 \u2018\uae5c\ube61\uc784\u2019\uc744 \ubcfc \uc218 \uc788\uc744 \ud655\ub960\uc774 \ub192\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.p,{children:"useLayoutEffect()\ub294 \ud654\uba74\uc5d0 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uadf8\ub9ac\uae30 \ubc14\ub85c \uc9c1\uc804\uc5d0 \ub3d9\uae30\uc801\uc73c\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4. \uadf8\ub798\uc11c DOM\uc744 \uc870\uc791\ud558\ub294 \uacbd\uc6b0 \u2018\uae5c\ube61\uc784\u2019\uc744 \ubcfc \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.h3,{id:"\uc8fc\uc694-\ud2b9\uc9d5",children:"\uc8fc\uc694 \ud2b9\uc9d5"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\uc2e4\ud589 \uc2dc\uc810: useLayoutEffect\ub294 \ubaa8\ub4e0 DOM\uc774 \uc5c5\ub370\uc774\ud2b8\ub41c \ud6c4 \ube0c\ub77c\uc6b0\uc800\uac00 \ud654\uba74\uc5d0 \ub0b4\uc6a9\uc744 \uadf8\ub9ac\uae30 \uc804\uc5d0 \ub3d9\uae30\uc801\uc73c\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4. \ubc18\uba74, useEffect\ub294 \ub80c\ub354\ub9c1 \uc774\ud6c4 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c useLayoutEffect\ub294 \ub808\uc774\uc544\uc6c3\uc774 \uae68\uc9c0\uc9c0 \uc54a\ub3c4\ub85d DOM \uc870\uc791\uc774 \ud544\uc694\ud55c \uacbd\uc6b0 \uc801\ud569\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\ub3d9\uae30\uc801 \uc2e4\ud589: useEffect\ub294 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uae30 \ub54c\ubb38\uc5d0 \ud654\uba74\uc774 \uba3c\uc800 \uc5c5\ub370\uc774\ud2b8\ub418\uace0 \uadf8 \uc774\ud6c4\uc5d0 \uc2e4\ud589\ub429\ub2c8\ub2e4. \ud558\uc9c0\ub9cc useLayoutEffect\ub294 \ub3d9\uae30\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uc5b4, DOM \uc870\uc791\uc774 \ub05d\ub09c \ud6c4 \ubc14\ub85c \uc801\uc6a9\ub418\ubbc0\ub85c \uc0ac\uc6a9\uc790\uac00 DOM \ubcc0\uacbd\uc744 \ubcf4\uae30 \uc804\uc5d0 UI\uac00 \uc5c5\ub370\uc774\ud2b8\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\uc8fc\ub85c-\uc0ac\uc6a9\ub418\ub294-\uacbd\uc6b0",children:"\uc8fc\ub85c \uc0ac\uc6a9\ub418\ub294 \uacbd\uc6b0"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\ud654\uba74\uc5d0 \uadf8\ub824\uc9c0\uae30 \uc804\uc5d0 DOM\uc744 \uc9c1\uc811 \uc870\uc791\ud574\uc57c \ud560 \ub54c."}),"\n",(0,l.jsx)(n.li,{children:"\uc2a4\ud06c\ub864 \uc704\uce58\ub098 \uc0ac\uc774\uc988 \uacc4\uc0b0 \ud6c4 \uc774\ub97c \ubc14\ub85c \uc801\uc6a9\ud574\uc57c \ud560 \ub54c."}),"\n",(0,l.jsx)(n.li,{children:"CSS\ub098 \uc2a4\ud0c0\uc77c \ubcc0\uacbd \ud6c4 \ud654\uba74\uc5d0 \uc989\uc2dc \ubc18\uc601\ud574\uc57c \ud560 \ub54c."}),"\n"]}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.h2,{id:"\uba54\ubaa8\uc774\uc81c\uc774\uc158",children:"\uba54\ubaa8\uc774\uc81c\uc774\uc158"}),"\n",(0,l.jsx)(n.p,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc758 \uc131\ub2a5\uc744 \ucd5c\uc801\ud654\ud558\uae30 \uc704\ud574 \ubd88\ud544\uc694\ud55c \uc7ac\ub80c\ub354\ub9c1\uc744 \ubc29\uc9c0\ud558\ub294 \uae30\ubc95\uc73c\ub85c \uc0ac\uc6a9\ud55c\ub2e4. \ud2b9\uc815 \uac12\uc774\ub098 \ud568\uc218\uac00 \ubcc0\uacbd\ub418\uc790 \uc54a\ub294 \ud55c \ub2e4\uc2dc \uacc4\uc0b0\ub418\uc9c0 \uc54a\ub3c4\ub85d \ud574\uc8fc\ub294\uac83"}),"\n",(0,l.jsx)(n.h3,{id:"reactmemo--\ucef4\ud3ec\ub10c\ud2b8",children:"React.memo() : \ucef4\ud3ec\ub10c\ud2b8"}),"\n",(0,l.jsx)(n.p,{children:"\uc21c\uc218\ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uace0\ucc28\ucef4\ud3ec\ub10c\ud2b8\ub85c \ucef4\ud3ec\ub10c\ud2b8\uac00 \uac19\uc740 props\ub85c \ubc18\ubcf5\ud574\uc11c \ub80c\ub354\ub9c1\ub418\uc9c0 \uc54a\ub3c4\ub85d \ubc29\uc9c0\ud574\uc900\ub2e4."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc790\uc8fc \ub80c\ub354\ub9c1 \ub418\uc9c0\ub9cc \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc758 props\ub294 \ubcc0\ud558\uc9c0 \uc54a\uc744 \ub54c\uc0ac\uc6a9"}),"\n",(0,l.jsx)(n.li,{children:"props\uc5d0 \ub3d9\uc77c\ud55c \uac12\uc774 \uacc4\uc18d \uc804\ub2ec\ub418\uba74\uc11c \ubd88\ud544\uc694\ud55c \uc7ac\ub80c\ud130\ub9c1\uc744 \ub9c9\uace0 \uc2f6\uc744 \ub54c"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:'import React from "react";\n\nconst MyComponent = React.memo(({ name }) => {\n  console.log("\ucef4\ud3ec\ub10c\ud2b8 \ub80c\ub354\ub9c1");\n  return <div>{name}</div>;\n});\n\nfunction App() {\n  return (\n    <div>\n      <MyComponent name="John" />\n      <MyComponent name="John" />\n    </div>\n  );\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"usecallback--\ud568\uc218\uc7ac\uc0dd\uc131-\ubc29\uc9c0",children:"useCallback() : \ud568\uc218\uc7ac\uc0dd\uc131 \ubc29\uc9c0"}),"\n",(0,l.jsx)(n.p,{children:"React\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub2e4\uc2dc \ub80c\ub354\ub9c1 \ub420\ub54c\ub9c8\ub2e4 \ub0b4\ubd80\uc5d0\uc11c \uc815\uc758\ub41c \ud568\uc218\ub97c \uc0c8\ub85c \uc0dd\uc131\ud558\ub294\ub370, \ud568\uc218\uac00 props\ub85c \ub4e4\uc5b4\uac00\uac8c \ub420 \uacbd \uac12\uc774 \ubcc0\ud558\ub294\uac83\uc73c\ub85c \uc778\uc2dd\ud574 \ud574\ub2f9 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc7ac\ub80c\ub354\ub9c1 \ub418\uac8c \ub41c\ub2e4. useCallback\uc744 \uc0ac\uc6a9\ud558\uba74 \uc758\uc874\uc131 \ubc30\uc5f4\uc5d0 \ud3ec\ud568\ub41c \uac12\uc774 \ubcc0\uacbd\ub418\uc9c0 \uc54a\ub294 \ud55c \ub3d9\uc77c\ud55c \ud568\uc218 \uc778\uc2a4\ud134\uc2a4\ub97c \ubc18\ud658\ud55c\ub2e4."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1\ub420 \ub54c \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub3d9\uc77c\ud55c \ucf5c\ubc31 \ud568\uc218\uac00 \uc804\ub2ec\ub418\ub3c4\ub85d \ud558\uace0 \uc2f6\uc744\ub54c"}),"\n",(0,l.jsx)(n.li,{children:"\ucf5c\ubc31 \ud568\uc218\uac00 \uc790\uc2dd \ucef4\ud3ec\ub10c\uc73c\uc758 \uc758\uc874\uc131\uc73c\ub85c \uc791\ub3d9\ud560 \ub54c \ubd88\ud544\uc694\ud55c \uc7ac\ub80c\ub354\ub9c1\uc744 \ub9c9\uace0 \uc2f6\uc744 \ub54c"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"const callback = useCallback(() => {}, []);\n"})}),"\n",(0,l.jsx)(n.h3,{id:"usememo-\ud2b9\uc815-\uac12",children:"useMemo(): \ud2b9\uc815 \uac12"}),"\n",(0,l.jsx)(n.p,{children:"\ubcf5\uc7a1\ud55c \uacc4\uc0b0\uc744 \uc790\uc8fc \ud574\uc57c\ud558\ub294 \uacbd\uc6b0\uc5d0 \uc0ac\uc6a9, \uac12\uc774 \ubcc0\uacbd\ub418\uc9c0 \uc54a\ub294 \ud55c \uc774\uc804\uc5d0 \uacc4\uc0b0\ub41c \uacb0\uacfc\ub97c \ubc18\ud658\ud558\ubbc0\ub85c \ubd88\ud544\uc694\ud55c \uacc4\uc0b0\uc744 \ud53c\ud560 \uc218 \uc788\ub2e4. \uc758\uc874\uc131 \ubc30\uc5f4\uc758 \uac12\uc774 \ubcc0\uacbd \ub418\uba74 \uccab\ubc88\uc9f8 \uc778\uc790\ub85c \uc804\ub2ec\ub41c \ud568\uc218\uac00 \uc2e4\ud589 \ub2e4\uc2dc \uc2e4\ud589 \ub41c\ub2e4. \ub9cc\uc57d \ubc30\uc5f4\uc758 \uac12\uc774 \ubcc0\ud558\uc9c0 \uc54a\uc73c\uba74 \uc774\uc804 \uacc4\uc0b0\ub41c \uacb0\uacfc\ub97c \ubc18\ud658."}),"\n",(0,l.jsx)(n.p,{children:"\ucef4\ud3ec\ub10c\ud2b8\uac00 \uc7ac\ub80c\ub354\ub9c1 \ub420 \ub54c \ub9c8\ub2e4 \ub0b4\ubd80\uc5d0 \uc815\uc758\ub41c \ud568\uc218\ub4e4\uc774 \ub2e4\uc2dc \uc2e4\ud589\ub418\ub294\ub370 useMemo\ub97c \uc0ac\uc6a9\ud558\uba74 \uc7ac\ub80c\ub354\ub9c1 \ub420\ub54c \uc758\uc874\uc131 \ubc30\uc5f4\uc758 \uac12\uc774 \ubcc0\ud558\uc9c0 \uc54a\ub294\uc774\uc0c1 \ub2e4\uc2dc \uc2e4\ud589\ub418\uc9c0 \uc54a\uace0 \uc774\uc804\uc758 \uacc4\uc0b0 \uacb0\uacfc\uac12\uc744 \uac16\uace0 \uc788\ub294\uac83. \uadf8\ub798\uc11c \ubcf5\uc7a1\ud55c \uacc4\uc0b0\uc744 \ud574\uc57c\ud558\ub294\uacbd\uc6b0 useMemo\ub97c \uc0ac\uc6a9\ud574\uc8fc\ub294\uac8c \uc88b\ub2e4 \uc548\uadf8\ub7ec\uba74 \uc7ac\ub80c\ub354\ub9c1 \ub420\ub54c\ub9c8\ub2e4 \ubcf5\uc7a1\ud55c \uacc4\uc0b0\uc744 \ub2e4\uc2dc \ud574\uc57c\ud558\uae30 \ub54c\ubb38."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uacc4\uc0b0\uc5d0 \uc2dc\uac04\uc774 \ub9ce\uc774 \uac78\ub9ac\ub294 \uc791\uc5c5 (\ubcf5\uc7a1\ud55c \uc5f0\uc0b0, \ud544\ud130\ub9c1 \ub4f1)"}),"\n",(0,l.jsx)(n.li,{children:"\ub3d9\uc77c\ud55c \uc785\ub825\uc5d0 \ub300\ud574 \ubc18\ubcf5 \uacc4\uc0b0\uc744 \ubc29\uc9c0\ud558\uace0 \uc2f6\uc744 \ub54c"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"const memo = useMemo(() => {\n  // ~~\ubcf5\uc7a1\ud55c \uacc4\uc0b0 \uc2e4\ud589\n  return; // \ucf5c\ubc31\ud568\uc218\ub294 \uac12\uc744 \ubc18\ud658\ud574\uc57c\ud568\n}, []); // \uc758\uc874\uc131 \ubc30\uc5f4\uc774 \ube48\ubcbc\uc5f4\uc774\uba74 \ucd08\uae30 \ub80c\ub354\ub9c1\uc2dc \ud55c\ubc88\ub9cc \uc2e4\ud589\ub418\uace0 \uc774\ud6c4 \ub80c\ub354\ub9c1\uc774 \ubc1c\uc0dd\ud574\ub3c4 \uc7ac\uc2e4\ud589 \ub418\uc9c0 \uc54a\uc74c\n"})}),"\n",(0,l.jsx)(n.h2,{id:"context-api",children:"context api"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"createContext -> \uacf5\uae09\uc790\ub97c \uc0dd\uc131 ( provider \uc0dd\uc131 )"}),"\n",(0,l.jsx)(n.li,{children:"\uacf5\uae09 \ubc94\uc704\ub97c \uc9c0\uc815 -> \uc0dd\uc131\ub41c \uacf5\uae09\uc790\ub85c \uacf5\uae09\ud560 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uac10\uc2f8\uc900\ub2e4"}),"\n",(0,l.jsx)(n.li,{children:"\uacf5\uae09\ud55c \ub370\uc774\ud130\ub97c \uac00\uc838\uc640\uc11c \uc0ac\uc6a9\ud55c\ub2e4 -> useContext(context)"}),"\n"]}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.p,{children:"\ubcf8 \ud6c4\uae30\ub294 \ubcf8 \ud6c4\uae30\ub294 [\uc720\ub370\ubbf8x\uc2a4\ub098\uc774\ud37c\ud329\ud1a0\ub9ac] \ud504\ub85c\uc81d\ud2b8 \ucea0\ud504 : Next.js 3\uae30 \uacfc\uc815(B-log) \ub9ac\ubdf0\ub85c \uc791\uc131 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},6754:(e,n,s)=>{s.d(n,{Z:()=>l});const l=s.p+"assets/images/image-1-d48e17767a7f1de2c8184828e148f2f4.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>i});var l=s(7294);const t={},c=l.createContext(t);function i(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);