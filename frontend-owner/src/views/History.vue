<template>
  <div class="container">
    <!-- title and button -->
    <div class="row">
      <div class="col-12 text-left">
        <router-link to="/entrance-exit">
          <v-btn outlined rounded large>
            <v-icon dark left large>mdi-arrow-left-bold-circle</v-icon>
            <h4>ย้อนกลับ</h4>
          </v-btn>
        </router-link>
      </div>
    </div>

    <!-- title and button -->
    <div class="row">
      <div class="col-7 text-header">รายการรถห้องชั่ง</div>
      <div class="col-3 text-center">
        <v-text-field
          solo
          rounded
          label="ค้นหา.."
          append-icon="mdi-magnify"
        ></v-text-field>
      </div>
      <div class="col-2 text-center">
        <v-select solo rounded :items="items" label="รายวัน"></v-select>
      </div>
    </div>
    <!-- title and button -->

    <TableHistory></TableHistory>
  </div>
</template>
<script>
import TableHistory from "../components/้history/Table";
export default {
  name: "history",
  data: () => ({
    items: ["รายวัน", "รายสัปดาห์", "รายเดือน", "รายปี"],
  }),
  components: {
    TableHistory,
  },
};
</script>
<style scoped>
.text-header {
  color: var(--unnamed-color-707070);
  text-align: left;
  font-size: 35px;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
</style>
