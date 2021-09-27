<template>
    <div class="header">
        <div class="bn_header">
            <a href="#">지금 무료 회원가입하고 <span>"할인클럽"</span> 상품 알뜰하게 쇼핑하세요 !</a>
        </div>
        <div class="section_1">
            <ul class="top_btn_left">
                <li><a href="#">파트너센터</a></li>
                <li><a href="#">입점신청</a></li>
            </ul>
            <ul class="top_btn_right">
                <li><a href="#">로그아웃</a></li>
                <li><a href="#">맴버쉽</a></li>
                <li><a href="#">즐겨찾기</a></li>
                <li>
                    <a href="#">마이페이지</a>
                    <div class="inner">
                        <a href="#">나의쿠폰</a>
                        <a href="#">1:1 문의</a>
                        <a href="#">정보수정</a>
                        <a href="#">주문/배송조회</a>
                    </div>
                </li>
                <li><a href="#">고객센터</a></li>
                <li><a href="#">장바구니</a></li>
            </ul>
        </div>
        <div class="section_2">
            <div class="top_logo">
                <a href="#"><img src="../assets/giflog.gif" alt=""></a>
            </div>
            <div class="serch">
                <form>
                    <fieldset>
                        <div class="top_text_cont">
                            <input type="text" id="search_form" name="keyword" class="top_srarch_text" title="검색어 입력"
                                placeholder="올디프에서 검색하세요!" autocomplete="off">
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="card">
                <a href="#"><img src="../assets/alldipeHeaderimg2.png" alt=""></a>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
.header{font-size: 10px;}
 .section_1 a:hover {
        color: #396ef3;
    }
    ul {
        color: #000;
    }
    .bn_header{
        background: #396ef3;
    padding: 10px 0;
    text-align: center;
    color: #fff;
    }
    .bn_header span{font-weight: bold;
    font-size: 15px;}
    .section_1 {
        width: 1100px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .section_1 ul {
        display: flex;
        justify-content: space-between;
        height: 37px;
        line-height: 35px;
    }

    .section_1 ul li a {
        padding: 0 10px 0 10px;
    }

    .section_1 ul li .inner {
        display: none;
        position: absolute;
        width: 150%;height: 100px;
        z-index: 10;
            padding: 3px 9px;
    border: 1px solid #ddd;
    background-color: #fff;
    }
     .section_1 ul li .inner a {
         padding: 3px 10px 0px 10px;
     }

    .section_1 ul li {
        position: relative;
    }

    .section_1 ul li:nth-child(4):hover .inner {
        display: block;
        display: flex;
        flex-direction: column;
        line-height: 20px;
        padding: 0;
        background: #fff;
    }

    .section_2 {
        height: 80px;
        width: 1100px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
    }
    .section_2 .top_logo{
        height: 90px;
    }
      .section_2 .top_logo img{height: 100%;}
    .section_2 .card{
            margin-bottom: 20px;
    }
    .top_text_cont {
        width: 450px;
        padding-top: 10px;
    }

    input {
        outline: none;
        display: block;
        width: 400px;
        height: 16px;
        font-size: 15px;
        line-height: 16px;
        color: #666;
        padding: 11px 0 9px 16px;
        margin: 4px 0 0 4px;
        border: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        border: 1px solid #396ef3;
    }
</style>