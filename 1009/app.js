// 리덕스 미들웨어

// 리덕스는 state를 관리해주는 저장소
// 리덕스 플로우 차트
// UI -> Dispatch -> Action -> Store(Reducer)(state) -> UI
// 리덕스는 동기적으로 처리가되는데 변경값이 있으면 바로 동작해서
// API같은 데이터를 불러올 때 비동기 작업이 힘듬

// 미들웨어는 양 쪽을 연결해주고 데이터를 주고받을 수 있도록 중간에서
//  매개 역활을 담당하는 소프트웨어

//  리덕스 미들웨어 saga, thunk
// 우리가할껀 thunk
// npm i redux-thunk

// 리덕스 환경 만들어보자
// 1.리덕스 리액트 설치
// 2.저장소 js 만들기 createStore 저장소 만들기
// 3.리듀서 js 만들기 만든 저장소에 매개변수로 전달
// 4. 완성된 저장소를 index.js 가져와서 Provider컴포넌트를 사용해 App컴포넌트에 적용

// 리덕스를 사용할 때 유용한 툴 redux devtools 
// action으로 변경한 state값을 바로바로 볼 수 있다.
// npm 설치 명령어
// npm i  redux-devtools-extension
// import {composeWithDevTools} from 'redux-devtools-extension'
// 설치하고 미들웨어를 composeWithDevTools 함수로 감싸주면 된다.