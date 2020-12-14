<template>
  <v-app>
    <dashboard-core-app-bar />

    <dashboard-core-drawer />

    <dashboard-core-view />

  </v-app>
</template>

<script>
  export default {
    name: 'DashboardIndex',

    components: {
      DashboardCoreAppBar: () => import('./DashboardLayer/AppBar'),
      DashboardCoreDrawer: () => import('./DashboardLayer/Drawer'),
      DashboardCoreView: () => import('./DashboardLayer/View'),
    },

    data: () => ({
      expandOnHover: false,
    }),
  }
</script>
<style lang="scss" >
.v-btn:focus {
  background-color: none !important;
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}
</style>
