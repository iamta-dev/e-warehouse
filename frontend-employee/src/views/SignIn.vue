<template>
  <div id="SignIn">
    <div class="box mt-4">
      <div>
        <img class="center pt-12" src="../assets/logo.png" alt="" srcset="" width="188px">
        <div class="topic my-4">
          ลงชื่อเข้าใช้ด้วยบัญชีของคุณ
        </div>
        <div class="mx-auto mt-12 form-box">
          <v-text-field
            class="my-4"
            label="อีเมล"
            append-icon="mdi-email"
          ></v-text-field>
          <v-text-field
            class="mt-4"
            label="รหัสผ่าน"
            append-icon="mdi-lock"
          ></v-text-field>
          <router-link :to="{ name: 'forgot-password' }" class="forget-pass">ลืมรหัสผ่าน ?</router-link>
        </div>
        <v-btn
          color="#0062AB"
          elevation="3"
          large
          rounded
          x-large
          min-height="97px"
          min-width="407px"
          style="font: normal normal normal 37px/56px Prompt;border-radius: 49px;"
          class="center mt-12 text-white"
        >เข้าสู่ระบบ</v-btn>
      </div>
      
    </div>
    <div class="text-center text-white mt-4" style="font: normal normal normal 22px/33px Kanit;">@Copyright 2020 | iCreativeSystems Co. Ltd.</div>
  </div>
</template>

<script>
export default {
    name: 'SignIn',
}
</script>

<style scoped>
div.btn-submit {
  font: normal normal normal 37px/56px Prompt;
}
.form-box {
    position: relative;
    width: 80%;
    max-width: 600px;
}
.forget-pass {
    position: absolute;
    right: 10px;
  text-align: right;
  text-decoration: underline;
  font: normal normal normal 24px/35px Kanit;
  letter-spacing: 0px;
  color: #0062AB;
}
div.box {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  width: 80vw;
  max-width: 1000px;
  min-height: 80vh;

  background: #FAFAFA 0% 0% no-repeat padding-box;
  border-radius: 30px;
  opacity: 1;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
div.topic {
  text-align: center;
  font: normal normal normal 48px/48px Kanit;
  letter-spacing: 0px;
  color: #0062AB;
  opacity: 1;
  
}
</style>