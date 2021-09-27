<template>
  <Header></Header>
    <TopMenu></TopMenu>
    <Footer></Footer>

</template>
<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import TopMenu from '../components/TopMenu.vue'

    export default {
        components: {
            Header,
            TopMenu,
            Footer


        }
    }
</script>