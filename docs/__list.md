### 공부, 정리 해야할 것들

- CORS(더 자세히)
- 리액트 훅 폼
- axios 인스턴스
- formData 관련 (request 받을때 등)
- firebase 사용법
- Restful api (더 자세히)
  - 쿼리스트링 파람스

## error

- yarn berry : git clone 이후 install 했을때 타입스크립트 적용 안될때

1.  .vscode 폴더에 `settings.json`파일 만든뒤 안에

```js
{
"search.exclude": {
  "**/.yarn": true,
  "**/.pnp.*": true
},
"eslint.nodePath": ".yarn/sdks",
"typescript.tsdk": ".yarn/sdks/typescript/lib",
"typescript.enablePromptUseWorkspaceTsdk": true
}
```

2. ctrl + shift + p > select TypeScrip version > use workspace version
3. ctrl + shift + p > TypeScript: restart ts server
