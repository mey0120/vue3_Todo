<template>
    <div class="TopMenu">
        <div class="inner">
            <div class="AllMenu">
                <a @click="open"
                href="#" class="btn_all_menu_open">
                    <img src="../assets/cateporyimg.png">전체 카테고리
                </a>
                <div class="AllMenuBox" >
                    <ul class="lnb" onmouseout="onMouseOut()">
                        <li><a href="#" >패션·패션잡화</a></li>
                        <li><a href="#" >뷰티</a></li>
                        <li><a href="#">유아동·출산</a></li>
                        <li><a href="#">식품</a></li>
                        <li><a href="#">가구·인테리어</a></li>
                        <li><a href="#">가전·디지털</a></li>
                        <li><a href="#">주방·생활용품</a></li>
                        <li><a href="#">스포츠·자동차·공구</a></li>
                        <li><a href="#">문구·취미·도서·반려</a></li>
                    </ul>

                </div>
            </div>
            <ul class="MainMenu">
                <li><a href="#">오늘의 추천</a></li>
                <li><a href="#">플렉스위크</a></li>
                <li><a href="#">할인클럽</a></li>
                <li><a href="#">신상</a></li>
                <li><a href="#">베스트</a></li>
                <li><a href="#">무료배송</a></li>
                <li><a href="#">기획전</a></li>
                <li><a href="#">쿠폰</a></li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        methods: {
            open() {
                document.querySelector('.AllMenuBox').className += 'on';
            },
            close(){
                document.querySelector('.AllMenuBox').classList.remove('on');
            },
            onMouseOut() {
                document.querySelector('.AllMenuBox').classList.remove('on');
            },

        }
    };
</script>

<style scoped>
a {font-size: 16px;
        font-weight: 500;
        color: #000000;
}
    a:hover {
        color: #396ef3;
    }

    .TopMenu {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;}

    .inner {
        margin: 0 auto;
        position: relative;
        width: 1100px;
        height: 36px;
        display: flex;
        align-items: center;
    }

    .AllMenu {
        height: 36px;
        text-align: start;
        width: 196px;
        border-right: 1px solid #ddd;
        border-left: 1px solid #ddd;
        display: flex;
        align-items: center;

    }

    .AllMenu a {
        display: block;
        font-size: 16px;
    }
        .btn_all_menu_open {
            font-weight: bold;
        }
    
        .btn_all_menu_open img {
            position: relative;
            height: 15px;
        }

    .AllMenu a img {
        margin: 0px 3px 3px 3px;

    }
        

    .MainMenu {
        display: flex;
        justify-content: space-between;
        width: 904px;
    }

    .MainMenu li {
        height: 35px;
        line-height: 36px;
        text-align: center;
    }

    .MainMenu li a {
        width: 100%;
        padding: 0 15px;
        font-weight: bold;
    }
    .AllMenuBox{
        display: none;
        
        
    }
    .lnb{
        border: 1px solid #eaeaea;
        height: 500px;
         width: 195px;
        background-color: #fff;
        position: absolute;
        top: 36px;
        left: 0;
        z-index: 3;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }

    .lnb li:nth-child(1) {
        border: none;
    }

    .lnb  li {

        border-top: 1px solid #eaeaea;
        display: flex;
        align-items: center;
        height: 100%;

    }

    .lnb li a {
        padding: 0 0 0 20px;
        font-size: 14px;
        width: 100%;
    }
</style>