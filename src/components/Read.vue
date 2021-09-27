<template>
<div>
  <table>
    <tr>
      <td>글쓴이</td>
      <td>제목</td>
      <td>내용</td>
    </tr>
    <tr v-for="(data,i) in boarddata" :key="i">
      <td>{{data.writer}}</td>
      <td>{{data.title}}</td>
      <td>{{data.content}}</td>
    </tr>
  </table>
  <button @click="write">글쓰기</button>
</div>

</template>

<script>
import boarddata from '../routes/boarddata'
export default {
  name: 'Read',
  data(){
    return{
      boarddata : boarddata
    }
  },
  methods: {
    write() {
      this.$router.push({
        path: 'create'
      })
    }
  }
}
</script>
