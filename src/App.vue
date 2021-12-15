<template>
  <div id="app">
      <div>
      <div class="wrapper">
        <div class="panel">
          <div class="lists">
            
            <v-list  :colors="colors1" />
           
          </div>
        </div>
     
        <div class="panel">
          <div class="colors-view">
            <v-view-list :colors="this.colors1"/>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vList from '@/components/vList'
import vViewList from '@/components/vViewList'
export default {
  name: 'App',
  components: {
    vList,
     vViewList
  },
  data() {
    return {
      
    }
  },
  computed: {
    colors1() {
      return this.$store.state.colors1
    },
 
  }
}
</script>

<style >
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; 
  color: #2c3e50;
  margin-top: 60px;
  font-size: 16pt; } 

.wrapper {
  display: flex;
  flex-direction: row;
}

.list {
  border: solid 1px;
  margin: 10px;
}

.checkbox {
  transform: scale(2);
  opacity: 0.9;
  cursor: pointer;
  margin: 15px;
}

.panel {
  width: 50%;
  border: solid 1px;
  padding: 20px;
  margin: 20px;
  min-height: 500px;
}

.list__header {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

 .header__checkbox {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
 }

.list__content__item {
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.item__row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.item {
  width: 60px;
}

.colors-view {
  border: solid 1px ;
  padding: 5px;
}

.square {
  height: 20px;
  width: 20px;
  margin: 5px;
}

.squares_container {
  border: solid 1px;
  display: flex;
  flex-direction: row;
  margin: 5px;
  height: 40px;
  align-items: center;
  justify-content: start;
}

.colorBox {
  margin: 10px;
}
</style>
