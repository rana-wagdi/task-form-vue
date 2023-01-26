<template>
<div class="container stepTwo">
    <h3>بيانات المسؤلين</h3>

  <div class="stepTwo__items">
    <div class="stopTwo_content">
      <label for="name"> اسم المسؤول<span>*</span></label
      ><br />
      <input type="text" name="name" id="name" v-model="name" /><br />
    </div>
    <div class="stopTwo_content">
      <label for="position">منصبه<span>*</span></label
      ><br />
      <input
        type="text"
        name="position"
        id="position"
        v-model="position"
      /><br />
    </div>
    <div class="stopTwo_content">
      <label for="phoneNumber">رقم الجوال<span>*</span></label
      ><br />
      <input placeholder="966+" disabled class="number" />
      <input
        type="number"
        name="phoneNumber"
        id="phoneNumber"
        v-model="phoneNumber"
      /><br />
    </div> <div class="stopTwo_content"></div>
    <div class="stopTwo_content">
      <label for="secondName">اسم المفوض بالتواصل <span>*</span></label
      ><br />
      <input
        type="text"
        name="secondName"
        id="secondName"
        v-model="secondName"
      /><br />
    </div>
    <div class="stopTwo_content">
      <label for="secondPosition">منصبه <span>*</span></label
      ><br />
      <input
        type="text"
        name="secondPosition"
        id="secondPosition"
        v-model="secondPosition"
      /><br />
    </div>
    <div class="stopTwo_content">
      <label for="secondPhoneNumber">رقم الجوال<span>*</span></label
      ><br />
      <input placeholder="966+" disabled class="number" />
      <input
        type="number"
        name="secondPhoneNumber"
        id="secondPhoneNumber"
        v-model="secondPhoneNumber"
      /><br />
    </div>
    <div class="stopTwo_content">
      <label for="email">البريد الالكترونى <span>*</span></label
      ><br />
      <input type="email" name="email" id="email" v-model="email" /><br />
    </div>

  </div>
  <div class="notes">
      <label for="notes"> ملاحظات <span>*</span></label
      ><br />
      <textarea name="notes" id="notes" v-model="notes" rows="5" cols="60"></textarea><br />
    </div>
  <button class="order">طلب المنتج</button>
  </div>
</template>
<script>
export default {
  computed: {
    name: {
      get() {
        return this.$store.state.user.name;
      },
      set(value) {
        this.$store.commit("updateName", value);
      },
    },
    position: {
      get() {
        return this.$store.state.user.position;
      },
      set(value) {
        this.$store.commit("updatePosition", value);
      },
    },
    phoneNumber: {
      get() {
        return this.$store.state.user.phoneNumber;
      },
      set(value) {
        this.$store.commit("updatePhoneNumber", value);
      },
    },
    secondName: {
      get() {
        return this.$store.state.user.secondName;
      },
      set(value) {
        this.$store.commit("updateSecondName", value);
      },
    },
    secondPosition: {
      get() {
        return this.$store.state.user.secondPosition;
      },
      set(value) {
        this.$store.commit("updateSecondPosition", value);
      },
    },
    secondPhoneNumber: {
      get() {
        return this.$store.state.user.secondPhoneNumber;
      },
      set(value) {
        this.$store.commit("updateSecondPhoneNumber", value);
      },
    },
    email: {
      get() {
        return this.$store.state.user.email;
      },
      set(value) {
        this.$store.commit("updateEmail", value);
      },
    },
    notes: {
      get() {
        return this.$store.state.user.notes;
      },
      set(value) {
        this.$store.commit("updateNotes", value);
      },
    },
  },
};
</script>
