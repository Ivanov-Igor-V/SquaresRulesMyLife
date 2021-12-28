<template>
  <div class="v-view-list">
    <div class="v-view-list__list">List {{ idx + 1 }}</div>
    <div class="squares_container" v-for="(item, index) in array" :key="index">
      <div v-if="item.checked" class="flex">
        <div
          v-for="num of item.count"
          :key="num"
          class="square"
          :style="{ background: item.color }"
          @click="squareDecrement(index)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["array", "idx"],
  methods: {
    squareDecrement(index) {
      this.$store.commit("squareDecrement", {
        idx: this.idx,
        index: index,
      });
    },
  },
};
</script>

<style>
</style>