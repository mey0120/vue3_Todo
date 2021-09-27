<template>
  <input v-model="writer" type="text" placeholder="글쓴이" />
  <input v-model="title" type="text" placeholder="제목" />
  <textarea v-model="content" type="text" placeholder="내용" />
  <button @click="write">작성</button>
</template>

<script>
import boarddata from '../routes/boarddata'

export default {
  name: 'Create',
  data(){
    return {
      boarddata:boarddata,
      writer:"",
      title:"",
      content:""
    }
  },
  methods: {
    write(){
      this.boarddata.push({
        writer: this.writer,
        title: this.title,
        content: this.content,
      }),
      // this.data.push 이 컴포넌트에 들어오는 데이터를 넣음 
      this.$router.push({
        path: 'board'
      })
      // board 페이지로 이동함 
    }
    
  }
}
</script>