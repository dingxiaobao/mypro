<template>
  <div id="app">
    <img src="./assets/logo.png" style="width:100px;height100px"/>
    <div>
      <span @click="changeModule(0)">未读({{$store.state.unread.length}})</span>
      <span @click="changeModule(1)">已读({{$store.state.read.length}})</span>
      <span @click="changeModule(2)">回收站({{$store.state.recycle.length}})</span>
    </div>
    <Unread v-if="current==0" />
    <Read v-if="current==1" />
    <Recycle v-if="current==2" />
  </div>
</template>
<script>
import Read from "./views/read";
import Unread from "./views/unread";
import Recycle from "./views/recycle";
export default {
  components: { Read, Unread, Recycle },
  data() {
    return {
      current: 0
    };
  },
  methods: {
    changeModule(index){
      this.current=index
    }
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
