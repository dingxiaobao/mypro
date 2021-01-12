<template>
  <div>
    <div v-for="item in $store.state.read" :key="item.id">
      <span>{{item.id}}</span>
      <span style="margin:0 30px ">{{item.name}}</span>
      <el-button type="danger" size="mini" @click="del(item.id)">删除</el-button>
      <el-button type="info" size="mini" @click="changeall(item.id)">未读</el-button>
    </div>
    <el-button type="danger" size="mini" @click="all">全部删除</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    del(id) {
      this.$store.commit("del", id);
    },
    changeall(id){
      this.$store.commit("changeall",id)
    },
    all() {
      this.$store.commit("delAll");
    }
  }
};
</script>
<style lang="scss" scoped>
  .el-button{
  margin-top: 5px;
}
</style>
