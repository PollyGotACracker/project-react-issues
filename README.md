# Project React Issues

- 2023.07.11 ~ 2023.07.13
- :bulb: 07.14 FIXED: Layout Shift, Grid Overflow issues
- [facebook-react](https://github.com/facebook/react/issues?q=is%3Aissue+is%3Aopen+sort%3Acomments-desc)
- [github docs: REST API-List repository issues](https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#list-repository-issues)
- [github docs: REST API-Get an issue](https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#get-an-issue)

## 배포 주소

- [https://pollygotacracker.github.io/project-react-issues/](https://pollygotacracker.github.io/project-react-issues/)

## 실행 방법

1. git bash 에서 아래 명령어 실행

```bash
git clone https://github.com/PollyGotACracker/project-react-issues.git
```

2. VSCode 에서 프로젝트를 열고 터미널에서 `npm install`, `npm start` 실행

## 실행 화면

![infinite-scroll](https://github.com/PollyGotACracker/project-react-issues/assets/92136750/3e22d406-6109-4ec6-9c7b-27807ee5809d)
![detail](https://github.com/PollyGotACracker/project-react-issues/assets/92136750/94b12cf3-44f3-4df5-9bc4-d6d42f56866e)

## 사용한 라이브러리

- TypeScript, axios, styled-components
- react-markdown, remark-gfm, react-syntax-highlighter : Markdown to HTML, Code highlighter
- gh-pages: Deploy

## 구현 사항

- 필수 요구 사항

  - 이슈 목록 및 상세 화면 기능 구현
  - Context API를 활용한 API 연동
  - 데이터 요청 중 로딩 표시
  - 에러 화면 구현
  - 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시
  - 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’ 표시
  - 다섯 번째 셀마다 광고 이미지 출력
  - 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

- 선택 사항
  - CSS-in-JS 적용
