import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    unread:[
      {
        id:1,
        name:"哒喝喝水"
      },
      {
        id:2,
        name:"孤鸿寡鹄"
      },
      {
        id:3,
        name:"铁观音妥"
      },
      {
        id:4,
        name:"斯顿法国"
      },
      {
        id:5,
        name:"诶瑞特人"
      },
      {
        id:6,
        name:"送入洞房"
      },
    ],
    read:[],
    recycle:[]
  },
  mutations: {
    //已读
    changeRead(state,id){
      var index=state.unread.findIndex(c=>c.id==id)
      var data=state.unread.splice(index,1)
      state.read.push(data[0])
    },
    //未读
    changeall(state,id){
      var index=state.read.findIndex(c=>c.id==id)
      var data=state.read.splice(index,1)
      state.unread.push(data[0])
    },
    //删除
    del(state,id){
      var index=state.read.findIndex(c=>c.id==id)
      var data=state.read.splice(index,1)
      state.recycle.push(data[0])
    },
    //还原
    restore(state,id){
      var index=state.recycle.findIndex(c=>c.id==id)
      var data=state.recycle.splice(index,1)
      state.read.push(data[0])
    },
    //全部删除
    delAll(state){
      var data=state.read.splice(0,state.read.length)
      state.recycle.push(...data)
    },
    //全部已读
    changeWd(state){
      var data=state.unread.splice(0,state.unread.length)
      state.read.push(...data)
    },
    //全部还原
    restoreAll(state){
      var data=state.recycle.splice(0,state.recycle.length)
      state.read.push(...data)
    }
  },
  actions: {
  },
  modules: {
  }
})
