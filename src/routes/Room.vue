
<template>
  <!-- 모달창 -->
  <!-- v-if 값이 참일때만 나타남  -->
  <div class="wrap">
    <div class="black_bg" v-if="modal_open">
      <div class="white_bg">
        <h4>상세페이지</h4>
        <p>상세페이지 내용</p>
        <button @click="modal_open=false">닫기</button>
      </div>
    </div>
    <div class="menu">
      <a v-for="(menu,i) in menu" :key="i" href="#">{{menu}}</a>
    </div>
    <ul>
      <li v-for="(room,i) in room" :key="i" @click="modal_open=true">
        <img :src="room.image" alt="">
        <h4 @click="modal_open=true">{{room.title}}</h4>
        <p>{{room.price}} 원</p>
      </li>
    </ul>

  </div>

</template>


<script>
import room from './data.js'

export default {
  name: 'App',
  data(){
    return {
      modal_open:false,
      menu:['Home','Shop','About'],
      room:room
    }
  },
  components: {
  }
}
</script>

<style scoped>
.wrap {
  width: 50%;
  margin: 0 auto;
  text-align: center;
}

div {
  box-sizing: border-box;
}

h4 {
  cursor: pointer;
  margin: 20px 0 10px;
  font-weight: 700;
  font-size: 15px;
}

p{
  font-size: 15px;
}

.menu {
  background: rgb(121, 119, 119);
  font-size: 20px;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  text-decoration: none;
  padding: 10px;
  color: #fff;
}

ul {
  list-style: none;
  padding: 0px 0 20px;
  margin: 0;
}

ul li img {
  width: 100%;
  margin-top: 40px;
  cursor: pointer;
}

.black_bg {
  width: 50%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white_bg {
  width: 100%;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
}

.white_bg p {
  margin-bottom: 20px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>