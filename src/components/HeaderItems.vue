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
      <div>
        <img
          src="https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
          width="70"
          height="70"
        />
      </div>
      <div>
        <ul class="nav__links">
          <li>الصفحة الرئيسية</li>
          <li>منتجاتنا</li>
          <li>مقياس الاستدامة المالية</li>
          <li>حول المقياس</li>
          <li>من نحن</li>
          <li>تواصل معنا</li>
          <li>الاسئله الشائعة</li>
        </ul>
      </div>
      <div>
        <div>
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
        <div>
        <img
          src="https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
          width="70"
          height="70"
        />
      </div>
      </div>
      <div>
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
}
.lang {
  background-color: transparent;
  border: none;
  color: #ffffff;
}

.lang option {
  color: black;
}
.nav__items{
  display: flex;
  justify-content: space-between;
}
.nav__links {
  display: flex;
  
}
.nav__links li{
  list-style: none;
}
</style>
