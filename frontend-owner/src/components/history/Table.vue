<template>
  <div class="container">
    <v-data-table
      :headers="dataHeaders"
      :items="datas"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="id"
      show-expand
      class="elevation-1"
    >
      <template v-slot:[`item.campanyDetail`]="{ item }">
        <td>
          <v-spacer>{{ item.campanyDetail }} </v-spacer>
          <v-spacer>{{ item.campanyName }} </v-spacer>
          <v-spacer>{{ item.campanyContrack }} </v-spacer>
        </td>
      </template>

      <template v-slot:[`item.truckDetail`]="{ item }">
        <td>
          <v-spacer>{{ item.licensePlate }} </v-spacer>
          <v-spacer>{{ item.driverName }} </v-spacer>
          <v-spacer>{{ item.driverPhone }} </v-spacer>
        </td>
      </template>

      <template v-slot:[`item.time`]="{ item }">
        <td>
          <v-spacer>{{ item.timeIn }} </v-spacer>
          <v-spacer>{{ item.timeOut }} </v-spacer>
        </td>
      </template>

      <template v-slot:[`item.weightTruck`]="{ item }">
        <td>
          <v-spacer>{{ item.weightTruckIn }} </v-spacer>
          <v-spacer>{{ item.weightTruckOut }} </v-spacer>
        </td>
      </template>

      <template v-slot:[`item.weightGoodsOrder`]="{ item }">
        <td>
          <v-spacer>{{ item.weightGoodsOrder }} </v-spacer>
          <v-spacer>{{ item.weightGoodsOut }} </v-spacer>
          <v-spacer>{{ item.errorWeight }} </v-spacer>
        </td>
      </template>

      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <v-row align-content="center">
            <v-col cols="6">
              <p>{{ item.id }}</p>
              <!-- <v-img
                :src="require('../assets/mockupPhoto1.png')"
                class="my-3"
                contain
                height="300"
              /> -->
            </v-col>
            <v-col cols="6">
              <!-- <v-img
                :src="require('../assets/mockupPhoto2.png')"
                class="my-3"
                contain
                height="300"
              /> -->
            </v-col>
          </v-row>
        </td>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  name: "TableHistory",
  data() {
    return {
      search: "",
      expanded: [],
      singleExpand: false,
      dataHeaders: [
        {
          text: "ข้อมูลบริษัท",
          value: "campanyDetail",
          align: "start",
          sortable: false,
        },
        { text: "ข้อมูลรถ", value: "truckDetail" },
        { text: "เวลา", value: "time" },
        { text: "น้ำหนักรถ", value: "weightTruck" },
        { text: "น้ำหนักของสินค้าที่สั่ง", value: "weightGoodsOrder" },
        { text: "", value: "data-table-expand" },
      ],
      datas: [
        {
          id: 1,
          campanyDetail: "เลขที่ใบสั่งซื้อ : 000001",
          campanyName: "ชื่อบริษัท : บริษัท เพิ่มพูน จำกัด",
          campanyContrack: "เบอร์โทรศัพท์ : 099-9999999",
          licensePlate: "ป้ายทะเบียนรถ : 70-7457 นนทบุรี",
          driverName: "ชื่อคนขับ : กิตตนันท์ สดใสมานะ",
          driverPhone: "เบอร์โทรศัพท์ : 088-8888888",
          timeIn: "เวลาขาเข้า : 8:30:25",
          timeOut: "เวลาขาเข้า : 8:30:25",
          weightTruckIn: "น้ำหนักรถขาเข้า : 10,000 กก.",
          weightTruckOut: "น้ำหนักรถขาออก : 10,000 กก.",
          weightGoodsOrder: "น้ำหนักสินค้าที่สั่ง : 10,000 กก.",
          weightGoodsOut: "น้ำหนักสินค้าขาออก : 10,100 กก.",
          errorWeight: "ความคลาดเคลื่อน : +1 %",
        },

        {
          id: 2,
          campanyDetail: "เลขที่ใบสั่งซื้อ : 000002",
          campanyName: "ชื่อบริษัท : บริษัท เพิ่มพูน จำกัด",
          campanyContrack: "เบอร์โทรศัพท์ : 099-9999999",
          licensePlate: "ป้ายทะเบียนรถ : 70-7457 นนทบุรี",
          driverName: "ชื่อคนขับ : กิตตนันท์ สดใสมานะ",
          driverPhone: "เบอร์โทรศัพท์ : 088-8888888",
          timeIn: "เวลาขาเข้า : 8:30:25",
          timeOut: "เวลาขาเข้า : 8:30:25",
          weightTruckIn: "น้ำหนักรถขาเข้า : 10,000 กก.",
          weightTruckOut: "น้ำหนักรถขาออก : 10,000 กก.",
          weightGoodsOrder: "น้ำหนักสินค้าที่สั่ง : 10,000 กก.",
          weightGoodsOut: "น้ำหนักสินค้าขาออก : 10,100 กก.",
          errorWeight: "ความคลาดเคลื่อน : +1 %",
        },
        {
          id: 3,
          campanyDetail: "เลขที่ใบสั่งซื้อ : 000002",
          campanyName: "ชื่อบริษัท : บริษัท เพิ่มพูน จำกัด",
          campanyContrack: "เบอร์โทรศัพท์ : 099-9999999",
          licensePlate: "ป้ายทะเบียนรถ : 70-7457 นนทบุรี",
          driverName: "ชื่อคนขับ : กิตตนันท์ สดใสมานะ",
          driverPhone: "เบอร์โทรศัพท์ : 088-8888888",
          timeIn: "เวลาขาเข้า : 8:30:25",
          timeOut: "เวลาขาเข้า : 8:30:25",
          weightTruckIn: "น้ำหนักรถขาเข้า : 10,000 กก.",
          weightTruckOut: "น้ำหนักรถขาออก : 10,000 กก.",
          weightGoodsOrder: "น้ำหนักสินค้าที่สั่ง : 10,000 กก.",
          weightGoodsOut: "น้ำหนักสินค้าขาออก : 10,100 กก.",
          errorWeight: "ความคลาดเคลื่อน : +1 %",
        },
      ],
    };
  },
};
</script>