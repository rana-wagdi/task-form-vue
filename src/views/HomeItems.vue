<template>
 <header-items></header-items>
  <form action="/" novalidate>
    <component :is="this.stepsList[this.currentStep]"> </component>
    <div v-if="this.currentStep === 0" class="container">
      <button @click="next" class="next" type="button">التالى</button>
    </div>
    <div class="dot-icon">
      <font-awesome-icon class="icon" :class="{ isActive : currentStep== 0  }" @click="pervious" icon="fa-solid fa-circle" />
      <font-awesome-icon class="icon" :class="{ isActive :  currentStep== 1 }" @click="next" icon="fa-solid fa-circle" />
    </div>
  </form>
</template>
<script>
import HeaderItems from "@/components/HeaderItems.vue";
import StepOne from "@/components/StepOne.vue";
import StepTwo from "@/components/StepTwo.vue";

export default {
  components: {
  HeaderItems,
    StepOne,
    StepTwo,
  },
  data() {
    return {
      currentStep: 0,
      stepsList: ["StepOne", "StepTwo"],
    };
  },
  methods: {
    pervious() {
      if (this.currentStep > 0) {
        this.currentStep--;

      }
    },
    next() {
      if (this.currentStep < 1) {
        this.currentStep++;
        this.active = true
      }
    },
  },
};
</script>
<style>
* {
  direction: rtl;
  padding: 0;
  margin: 0;
}
@font-face {
  font-family: 'din-next';
  src: url();
}
.container {
  margin: 0 10rem;
}
.header {
  width: 100%;
  height: 50px;
  background-color: #0d2e75;
}
.stepOne,
.stepTwo {
  text-align: center;
}
.stepOne h1 {
  margin: 2rem auto;
  font-size: 3rem;
}

.stepOne h3,
.stepTwo h3 {
  color: #7dc7e5;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 2rem auto 1.5rem;
}
.stepOne__items,
.chooseOption,
.stepTwo__items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  width: 60%;
  margin: auto;
}
.stepOne__items label,
.chooseOption label,
.stepTwo__items label, .notes label {
  text-align: right;
  font-size: 1.4rem;
  opacity: 0.7;
}

.stepOne__items span,
.chooseOption span,
.stepTwo__items span, .notes span {
  color: red;
  font-size: 1rem;
  margin-right: 0.5rem;
}
.stepOne__items input,
.chooseOption input,
.stepTwo__items input, .notes textarea {
  width: 80%;
  padding: 0.5rem 0;
  margin: 0.5rem 0 2rem;
  border: 1px solid #dddd;
}
.stopOne_content,
.stopTwo_content, .notes {
  text-align: right;
}
.next,
.order {
  text-align: center;
  display: block;
  align-items: center;
  width: 50%;
  margin: auto;
  background-color: #7dc7e5;
  padding: 1rem 0;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #ffffff;
  font-weight: bolder;
}
.dot-icon {
color: #dddd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0.5rem;
}
.isActive{
  color: #7dc7e5 ; 
}
.icon{
margin-right: .5rem;
cursor: pointer;
}
.number{
  width: 15% !important;
  text-align: center;
}
.notes{
width: 60%;
margin: auto;}
@media (max-width: 1000px) {
  .stepOne__items,
.chooseOption,
.stepTwo__items {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  text-align: center;
  width: 100%;
  margin: auto;
}
.notes{
width: 100%;}
}
</style>
