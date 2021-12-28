<template>
  <div id="app">
    <div>
      <div class="wrapper">
        <div class="panel">
          <div class="lists">
            <div>
              <v-list
                v-for="(one, idx) of array"
                :array="one"
                :idx="idx"
                :key="idx"
              />
            </div>
          </div>
        </div>

        <div class="panel">
          <v-view-list
            v-for="(one, idx) of array"
            :array="one"
            :idx="idx"
            :key="idx"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vList from "@/components/vList";
import vViewList from "@/components/vViewList";
export default {
  name: "App",
  components: {
    vList,
    vViewList,
  },
  data() {
    return {};
  },
  computed: {
    array() {
      return this.$store.getters.array;
    },
  },
};
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16pt;
}

.wrapper {
  display: flex;
  flex-direction: row;
}

.list {
  border: solid 1px;
  margin: 10px;
  height: 420px;
}

.checkbox {
  transform: scale(2);
  opacity: 0.9;
  cursor: pointer;
  margin: 15px;
}

.panel {
  width: 50vh;
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
  border: solid 1px;
  margin: 10px;
}
.item__row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.item {
  width: 60px;
  height: 30px;
  background-color: #eee;
  vertical-align: top;
  outline: none;
  padding: 0;
  height: 40px;
  line-height: 40px;
  text-indent: 10px;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid #ddd;
  font-size: 16px;
  border-radius: 3px;
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
  margin: 10px;
  min-height: 70px;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
}

.colorBox {
  margin: 10px;
}

.input_color {
  border: black;
  background: #fff;
  width: 50px;
  height: 50px;
}

.v-view-list {
  min-height: 420px;
  border: solid 1px;
  margin: 10px;
}

.v-view-list__list {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}
</style>
