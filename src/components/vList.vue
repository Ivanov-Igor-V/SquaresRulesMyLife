<template>
  <div class="list">
    <div class="list__header">
      <i
        class="material-icons"
        @click="this.isOpen = !this.isOpen"
        style="cursor: pointer"
        >arrow_forward_ios</i
      >
      <div class="header__checkbox">
        <div>
          <input
            class="checkbox"
            v-model="checkedAll"
            type="checkbox"
            :indeterminate="isIncomplete"
            @click="statusOfCheckedAll"
          />
        </div>
        <div></div>

        <p>List {{ idx + 1 }}</p>
      </div>
    </div>

    <div v-if="this.isOpen">
      <div v-for="(item, index) of array" class="list__content" :key="index">
        <div class="list__content__item">
          <div class="item__row">
            <input
              class="checkbox"
              type="checkbox"
              v-model="checked"
              :value="item"
              @change="changeCheckedStatus(index)"
            />
            <p>Item {{ index + 1 }}</p>
          </div>

          <div class="item__row">
            <input
              class="item"
              type="number"
              min="0"
              @change="changeCount($event, index)"
              :value="item.count"
            />
            <div class="colorBox">
              <input
                type="color"
                class="input_color"
                @change="changeColor($event, index)"
                :value="item.color"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["array", "idx"],
  data() {
    return {
      isOpen: true,
      checkedAll: false,
      checked: [],
      isIncomplete: false,
      countOfChecked: 0,
    };
  },
  methods: {
    statusOfCheckedAll() {
      if (this.checked.length === this.array.length) {
        this.$store.commit("isNotCheckedAll", this.idx);
        this.checked = [];
      } else if (this.checked.length === 0) {
        this.$store.commit("isCheckedAll", this.idx);
        for (let key in this.array) {
          this.checked.push(this.array[key]);
        }
      } else if (this.checked.length > 0 && this.checked.length < 4) {
        this.$store.commit("isNotCheckedAll", this.idx);
        this.checked = [];
        for (let key in this.array) {
          this.checked.push(this.array[key]);
        }
        this.$store.commit("isCheckedAll", this.idx);
      }
    },
    changeColor(event, index) {
      this.$store.commit("changeColor", {
        index: index,
        event: event,
        idx: this.idx,
      });
    },
    changeCount(event, index) {
      this.$store.commit("changeCount", {
        index: index,
        event: event,
        idx: this.idx,
      });
    },
    changeCheckedStatus(index) {
      this.$store.commit("changeCheckedStatus", {
        index: index,
        idx: this.idx,
      });
    },
  },
  computed: {
    mainCheckbox() {
      if (this.checked.length === this.array.length) {
        this.checkedAll = true;
      } else this.checkedAll = false;
    },
  },
  watch: {
    checked() {
      if (this.checked.length > 0 && this.checked.length < this.array.length) {
        this.isIncomplete = true;
      } else if (this.checked.length === this.array.length) {
        this.isIncomplete = false;
        this.checkedAll = true;
      } else this.isIncomplete = false;
    },
  },
};
</script>

<style>
</style>