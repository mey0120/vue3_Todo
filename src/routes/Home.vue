<template>
<header>
  <h2>vue 로 만든 프로젝트 입니다.</h2>
  <a href="https://github.com/mey0120">github</a>
</header>
<main>
  <ul>
    <li>
      <a href="http://localhost:8080/#/Room" target="_blank">
        <img src="" alt="">
        <p>부동산 소개 앱입니다.</p>
        <p></p>
      </a>
    </li>
    <li>
      <a href="http://localhost:8080/#/alldipe" target="_blank">
        <img src="" alt="">
        <p>올디프 쇼핑몰 웹사이트입니다.</p>
      </a>
    </li>
    <li>
      <a href="http://localhost:8080/#/board" target="_blank">
        <img src="" alt="">
        <p>게시판 사이트입니다.</p>
      </a>
    </li>
  </ul>
</main>
</template>

<style>
header {
  width: 100%;
  height: 50vh;
  z-index: 4;
  padding: 50px;
  box-sizing: border-box;
}

h2 {
  font-size: 3rem;
  line-height: 4.2rem;
  font-weight: 700;
}

header a {
  display: block;
  width: 200px;
  height: 20px;
  background: #000;
  color: #fff;
  text-decoration: none;
}

main {
  width: 100%;
  height: 50vh;
  box-sizing: border-box;
}

main ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

main ul li {
  background: pink;
  width: 100%;
  height: 100%;
  text-align: center;
}

main ul li:nth-child(2) {
  background: yellow;
}

main ul li:nth-child(3) {
  background: green;
}

</style>