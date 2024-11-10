# 개인 프로젝트 : movieProject_sawing
##### TMDB 영화 API를 기반으로 반응형 웹사이트 구현

### 🌈 프로젝트 배포 링크(vercel)
###### <https://seoulw-pj.vercel.app/](https://movie-project-sawing.vercel.app>

### 💡 프로젝트소개
###### TMDB 영화 API에서 제공하는 영화 정보를 이용한 반응협 웹사이트로 검색 기능 및 디테일 확인 가능


### ⏱ 개발 기간
2024.09.13(금) - 2024.9.26(목) (약 1주일)


### ⚙ 개발 환경
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/nodedotjs-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white"> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"> <img src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=white">
<img src="https://img.shields.io/badge/firebase-DD2C00?style=for-the-badge&logo=firebase&logoColor=white">


### 📍 주요 기능
1) 오픈 API 활용
2) 로그인 , 회원가입(자체 회원가입, sns 간편)
3) 검색 기능
4) 모달 기능(디테일 페이지)
5) 다크 모드 구현(테마)


### 🎯 트러블 슈팅  (추후 수정 요망)
* 소셜로그인(간편로그인) 후 회원 수정 과정
> 1)소셜로 간편 로그인 후 마이페이지에 회원 수정 클릭하면 유저를 찾을 수 없습니다라는 에러 메세지 발생
>
> 2)간편 로그인으로 들어오는 유저도 firebase에 유저 정보가 없으면 자동 회원 가입시켜 DB를 쌓고 그 DB를 기반으로 회원 수정 페이지에 값을 불러올 수 있도록 수정
>
> 3)하지만 각 소셜별로 주는 데이터 값이 달라 회원 수정시 불러오는 데이터를 일관화 할 수 없는 이슈 발생, 꼭 필요한 이름 같은 경우 임의로 설정되게 설계
> 
> 5)이름이 임의로 설정된 유저는 추후 자신의 이름 및 데이터 값을 별도로 수정할 수 있도록 함

