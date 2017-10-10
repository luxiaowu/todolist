<template>
  <div>
    <h1>TODO</h1>
    <group title="你想干嘛">
      <x-input placeholder="What needs to be done?" v-model="msg" @on-enter="addNewItem"></x-input>
      <checklist :options="list" v-model="checklist" @on-change="change"></checklist>
      <!--<cell v-for="item in items" :title="item.label" is-link></cell>-->
    </group>
  </div>
</template>

<script>
  import {Group, Cell, XInput, Checklist} from 'vux'
  import utils from '../utils'

  export default {
    components: {
      Group,
      Cell,
      XInput,
      Checklist
    },
    data() {
      return {
        msg: '',
        list: utils.read('list'),
        checklist: utils.read('checklist')
      }
    },
    methods: {
      addNewItem() {
        if (this.msg) {
          this.list.unshift(this.msg)
          this.msg = ''
          utils.write('list', this.list)
        }
      },
      change(label) {
        console.log(this.checklist)
        utils.write('checklist', this.checklist)
      }
    }
  }
</script>

<style>
  h1 {
    margin: 30px 0;
    font-weight: 400;
    font-size: 34px;
    color: #3cc51f;
    text-align: center;
  }
</style>
