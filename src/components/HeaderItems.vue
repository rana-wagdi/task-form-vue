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
</template>
<style scoped>
.header_items{
    direction: ltr !important;
    padding-top: .9rem;
}

.social_icons{
    color: #ffffff;
    margin-left: 1rem;
}
.lang{
    background-color: transparent;
    border: none;
    color: #ffffff;
}

.lang option{
    color: black;
}
</style>