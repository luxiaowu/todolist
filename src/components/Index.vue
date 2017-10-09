<template>
  <div>
    <h1>TODO</h1>
    <group title="你想干嘛">
      <x-input placeholder="What needs to be done?" v-model="msg" @on-enter="addNewItem"></x-input>
      <checklist :options="list" is-link></checklist>
      <!--<cell v-for="item in items" :title="item.label" is-link></cell>-->
    </group>
  </div>
</template>

<script>
  import {Group, Cell, XInput, Checklist} from 'vux'

  export default {
    components: {
      Group,
      Cell,
      XInput,
      Checklist
    },
    data() {
      return {
        items: [
          {
            label: '边城',
            isFinished: true
          },
          {
            label: '围城',
            isFinished: false
          }
        ],
        msg: '',
        list: ['边城', '围城']
      }
    },
    methods: {
      addNewItem: function () {
        if (this.msg) {
//          this.items.unshift({label: this.msg, isFinished: false})
          this.list.unshift(this.msg)
          this.msg = ''
        }
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
