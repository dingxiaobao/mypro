<template>
  <div>
    <div v-for="item in $store.state.unread" :key="item.id">
      <span>{{item.id}}</span>
      <span style="margin:0 30px ">{{item.name}}</span>
      <el-button type="success" size="mini" @click="changeId(item.id)">已读</el-button>
    </div>
    <el-button type="danger" size="mini" @click="changWd">全部已读</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    changeId(id) {
      this.$store.commit("changeRead", id);
    },
    changWd() {
      this.$store.commit("changeWd");
    }
  }
};
</script>
<style lang="scss" scoped>
  .el-button{
  margin-top: 5px;
}
</style>
