<template>
  <div class="header">
    <div class="container header_items">
      <select name="lang" id="lang" class="lang">
        <option>اللغة العربية</option>
        <option>English</option>
      </select>
      <font-awesome-icon class="social_icons" icon="fa-brands fa-whatsapp" />
      <font-awesome-icon class="social_icons" icon="fa-brands fa-twitter" />
    </div>
  </div>
  <nav>
    <div class="nav__items">
    <div class="nav_mobile">
      <div class="logo">
        <img
          src="https://w7.pngwing.com/pngs/303/549/png-transparent-sport-logo-football-sports-logos-text-sport-logo.png"
          width="100"
          height="50"
        />
      </div>
      <div>
            <font-awesome-icon @click="showItems" class="nav_icon" icon="fa-solid fa-bars" />
        </div>
    </div>
      <div >
        <ul :class="{active: isVisble}" class="nav__links">
          <li>الصفحة الرئيسية</li>
          <li>منتجاتنا</li>
          <li>مقياس الاستدامة المالية</li>
          <li>حول المقياس</li>
          <li>من نحن</li>
          <li>تواصل معنا</li>
          <li>الاسئله الشائعة</li>
        </ul>
      </div>
      <div class="search">
        <div>
          <font-awesome-icon
            class="search__icon"
            icon="fa-solid fa-magnifying-glass"
          />
        </div>
        <div class="second_img">
          <img
            src="https://w7.pngwing.com/pngs/303/549/png-transparent-sport-logo-football-sports-logos-text-sport-logo.png"
            width="100"
            height="50"
          />
        </div>
      </div>
      <div :class="{active: isVisble}" class="login">
        <p>تسجيل الدخول</p>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.header_items {
  direction: ltr !important;
  padding-top: 0.9rem;
}

.social_icons {
  color: #ffffff;
  margin-left: 1rem;
  cursor: pointer;
}
.lang {
  background-color: transparent;
  border: none;
  color: #ffffff;
}

.lang option {
  color: black;
}
.nav__links,
.search {
  display: flex;
}
.nav__items{
  width:100%;
  display: grid;
  grid-template-columns:10% 60% 15% 15%;
  border-bottom: 1px solid #ddd;
}
.nav__links {
  margin: 0 2rem;
}
.nav__links li {
  list-style: none;
  margin-left: 1rem;
  opacity: 0.4;
  font-size: 18px;
  cursor: pointer;
  margin-top: 1.5rem;
}
.nav__links li:hover {
  opacity: 0.9;
}
.logo {
  margin-right: 2rem;
  margin-top: 1rem;
}
.search__icon {
  border: 1px solid #dddddd;
  border-top: none;
  border-bottom: none;
  padding: 1.6rem;
  cursor: pointer;
  opacity: .4;
}
.second_img {
  margin: .5rem 1rem;
}
.login{
  display: flex;
  /* padding: 2rem  1rem; */
  align-items: center;
  justify-content: center;
  background-color:#7dc7e5;
  color: #ffffff;
  cursor: pointer;

}
.login:hover{
  background-color:#7da3e8;
}
.nav_icon{
  margin: 1.5rem;
  display: none;
}

@media(max-width: 1200px){
    .second_img, .login,.search,.nav__links {
    display: none;
    }
    .active{
        display: block;
    }
    .nav__items{
        display: block !important;
    }
    .nav__items li {
        border-bottom: 1px solid #ddd;
    }
    /* .nav__items div:nth-child(-n+2){
    display: flex !important;
    justify-content: space-between;
    } */
    .nav_mobile{
    display: flex;
    justify-content: space-between;
    }
    .nav_icon{
    display: block;
    padding-left: 1rem;
    cursor: pointer;}
    .login{
    margin: .5rem 0 0 0;
    padding: 1rem 1rem;
    }
}
</style>
<script>

    export default{
        data(){
            return{
                isVisble: false,
            }
        },
        methods:{
        showItems(){
            this.isVisble = !this.isVisble
        }
        }
    }
</script>
