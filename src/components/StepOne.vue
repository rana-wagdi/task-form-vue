<template>
  <div class="container stepOne">
    <h1>نموذج طلب المنتج"هندسة الموسم"</h1>
    <h3>بيانات المنظمة</h3>
    <div class="stepOne__items">
      <div class="stopOne_content">
        <label for="nameOfOrgnization"> اسم المنظمة<span>*</span></label
        ><br />
        <input
          type="text"
          name="nameOfOrgnization"
          id="nameOfOrgnization"
          v-model="nameOfOrgnization"
        /><br />
      </div>
      <div class="stopOne_content">
        <label for="activeOfOrgnization"> نشاط المنظمة<span>*</span></label
        ><br />
        <input
          type="text"
          name="acriveOfOrgnization"
          id="activeOfOrgnization"
          v-model="activeOfOrgnization"
        /><br />
      </div>
      <div class="stopOne_content">
        <label for="city"> المدينة<span>*</span></label
        ><br />
        <input type="text" name="city" id="city" v-model="city" />
      </div>
      <div class="stopOne_content">
        <label for="government">المركز/المحافظه<span>*</span></label
        ><br />
        <input
          type="text"
          name="government"
          id="government"
          v-model="government"
        />
      </div>
    </div>
    <h3>الباقة المطلوبة</h3>
    <div class="chooseOption">
      <label for="chooseOption">اختر الباقة<span>*</span></label
      ><br />
      <input
        type="number"
        name="chooseOption"
        id="chooseOption"
        v-model="chooseOption"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
  computed: {
    nameOfOrgnization: {
      get() {
        return this.$store.state.user.nameOfOrgnization;
      },
      set(value) {
        this.$store.commit("updateNameOfOrgnization", value);
      },
    },
    activeOfOrgnization: {
      get() {
        return this.$store.state.user.activeOfOrgnization;
      },
      set(value) {
        this.$store.commit("updateActiveOfOrgnization", value);
      },
    },
    city: {
      get() {
        return this.$store.state.user.city;
      },
      set(value) {
        this.$store.commit("updateCity", value);
      },
    },
    government: {
      get() {
        return this.$store.state.user.government;
      },
      set(value) {
        this.$store.commit("updateGovernment", value);
      },
    },
    chooseOption: {
      get() {
        return this.$store.state.user.chooseOption;
      },
      set(value) {
        this.$store.commit("updateChooseOption", value);
      },
    },
  },
};
</script>
<style scoped>

/* .chooseOption {
  text-align: right;
  width: 60%;
  margin: auto;
} */
</style>
