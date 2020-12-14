<template>
  <div>
    <ul id="home-app-bar" class="nav">
      <li><router-link :to="{ name: 'CameraStatus' }">สถานะกล้อง</router-link></li>
      <li><router-link :to="{ name: 'ScaleRoom' }">เครื่องชั่ง</router-link></li>
      <li><router-link :to="{ name: 'Dashboard' }">แดชบอร์ด</router-link></li>
      <li><router-link :to="{ name: 'Form' }">กรอกข้อมูลด้วยตนเอง</router-link></li>
      <li><router-link :to="{ name: 'ScaleList' }">รอการบันทึก</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeAppBar",
};
</script>
<style scoped>
.nav {
  display: flex;
  list-style: none;
  padding: 15px 0;
  margin: 0;
  justify-content: flex-end;
  background: #f5f8fa;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 24px;
}
.nav a {
  color: #636b6f;
  padding: 0 25px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-decoration: none;
  text-transform: uppercase;
}
</style>