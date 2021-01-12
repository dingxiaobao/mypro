<template>
  <div>
    <div v-for="item in $store.state.recycle" :key="item.id">
      <span>{{item.id}}</span>
      <span style="margin:0 30px ">{{item.name}}</span>
      <el-button type="primary" size="mini" @click="changehy(item.id)">还原</el-button>
    </div>

    <el-button type="primary" size="mini" @click="restoreAll">全部还原</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    //根据Id还原
    changehy(id) {
      this.$store.commit("restore", id);
    },
    restoreAll() {
      this.$store.commit("restoreAll");
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
  .el-button{
  margin-top: 5px;
}
</style>

