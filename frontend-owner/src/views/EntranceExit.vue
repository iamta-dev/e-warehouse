<template>
  <div class="container">
  <!-- title and button -->
    <div class="row">
      <div class="col-10 text-header">ทางเข้า - ออก</div>
      <div class="col-2 text-center">
        <router-link to="/history">
        <v-btn 
        block 
        rounded 
        large 
        color="#0062AB">
          <v-icon dark left large>mdi-file-document</v-icon>
          <h4 >ประวัติ</h4>
        </v-btn>
        </router-link>
      </div>
    </div>
    <!-- title and button -->

    <!-- card -->
    <div class="row">
      <div class="col card mb-3 info" style="" >
        <div class="row no-gutters" >
          <div class="col-md-7" >
            <div >
              <h5 class="card-title card-text-number">35</h5>
              <p class="card-text">รถที่จะมาวันนี้</p>
            </div>
          </div>
          <div class="col-md-5" >
            <v-icon size="112"> fas fa-truck-moving </v-icon>
          </div>
        </div>
      </div>
      <div class="col card mb-3 red" >
        <div class="row no-gutters">
          <div class="col-md-7" >
            <div >
              <h5 class="card-title card-text-number">35</h5>
              <p class="card-text">รถในโรงงาน</p>
            </div>
          </div>
          <div class="col-md-5" >
            <v-icon size="110"> fas fa-truck </v-icon>
          </div>
        </div>
      </div>
      <div class="col card mb-3 success" >
        <div class="row no-gutters">
          <div class="col-md-7" >
            <div >
              <h5 class="card-title card-text-number">35</h5>
              <p class="card-text">รับของแล้ว</p>
            </div>
          </div>
          <div class="col-md-5" >
            <v-icon size="105"> fas fa-people-carry </v-icon>
          </div>
        </div>
      </div>
      
    </div>
    <!-- card -->

    <!-- title and button -->
    <div class="row">
      <div class="col-9 text-header">รายการรถห้องชั่ง</div>
      <div class="col-3 text-center">
        <v-text-field
          solo
          rounded
          label="ค้นหา.."
          append-icon="mdi-magnify"
        ></v-text-field>
      </div>
    </div>
    <!-- title and button -->

    <!-- tabel -->
    <TableHistory>
    </TableHistory>
    <!-- tabel -->

  </div>
</template>
<script>
import TableHistory from "../components/้history/Table";
export default {
  name: "entrace-exit",
  data() {
    return {

    };
  },
  components:{
    TableHistory,
  },
  methods: {
    onClickHistoryButton(){
      console.log('check')
    }
  },
};
</script>
<style scoped>
/* card  style*/
.text-header {
  color: var(--unnamed-color-707070);
  text-align: left;
  font-size: 35px;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.card {
  width: 700px;
  height: 252px;
  background: var(--unnamed-color-2980b9) 0% 0% no-repeat padding-box;
  background: #2980b9 0% 0% no-repeat padding-box;
  opacity: 1;
  margin: 10px 10px 10px 10px;
}
.card-title {
  text-align: center;
  font-size: 100px;
  color: #ffffff;
}
.card-text {
  text-align: center;
  font-size: 30px;
  color: #ffffff;
}
/* button style */
.button-hitory {
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  color: #ffffff;
  opacity: 1;
}

/* table style */
.table-header {
  text-align: center;
  top: 574px;
  left: 377px;
  height: 82px;
  background: var(--unnamed-color-2980b9) 0% 0% no-repeat padding-box;
  background: #2980b9 0% 0% no-repeat padding-box;
  opacity: 1;
}
.table-header-content {
  text-align: center;
}
.expanded-item {
  height: 30px;
}
table {
  width: 100%;
}
tbody {
  font-family: Helvetica Neue, Arial, sans-serif;
  height: 100px;
  font-size: 15px;
  color: black;
}
td {
  padding: 20px !important;
  max-height: 50 !important;
}
th {
  background-color: #4caf50 !important;
}
</style>
