<template>
            <div class="list">
              <div class="list__header" >
                <i class="material-icons" @click="this.isOpen = !this.isOpen" style="cursor: pointer">arrow_forward_ios</i>
                
                <div class="header__checkbox">
                  <div >
                    <input class="checkbox"  
                    v-model="checkedAll"
                    type="checkbox"
                    :indeterminate="isIncomplete"
                    @click="statusOfCheckedAll()"
                    >
                </div>
                   <div> 
                  </div>
                  
                  <p>List 1</p>
                </div>
              </div>
              
              <div v-if="this.isOpen" v-for="(item, index) of this.colors" class="list__content" :key="index">
                  <div class="list__content__item">
                    <div class="item__row">
                        <input class="checkbox" 
                        type="checkbox" 
                        v-model="checked" 
                        :value='item'
                        @change="this.$store.commit('changeCheckedStatus', index)"
                        >
                        <p>Item 1</p>
                    </div>

                    <div class="item__row">
                        <input class="item" type="number" @change="changeCount($event, index)" :value="item.count"> 
                        <div class="colorBox" > 
                          <input type="color" :value="item.color"  @change="changeColor($event.target.value, index)" >  
                        </div>
                    </div>
                    
                  </div>
              </div>
            </div>
</template>

<script>
export default {
    props: ['colors'],
    data() {
        return {
            isOpen: true,
            checkedAll: false,
            checked: [],
            isIncomplete: false,
            countOfChecked: 0
            } 
    },
    methods: {
      statusOfCheckedAll() {
        if (this.checked.length === this.colors.length) {
            this.$store.commit('isNotCheckedAll')
            this.checked = []
        }
        else if (this.checked.length === 0) {
          this.$store.commit('isCheckedAll')
          for (let key in this.colors) {
          this.checked.push(this.colors[key])
        }
          }
        
        else if (this.checked.length > 0 && this.checked.length < 4) {
          this.$store.commit('isNotCheckedAll')
          this.checked = []
          this.$store.commit('isCheckedAll')
          for (let key in this.colors) {
          this.checked.push(this.colors[key])
        }
        }
      },
      changeColor(event, index) {
          this.$store.commit('changeColor', { index: index, event: event } )
      },
      changeCount(event, index) {
           this.$store.commit('changeCount', { index: index, event: event } )
      }
    },
    computed: {
        mainCheckbox() {
          if (this.checked.length === this.colors.length) {
            this.checkedAll = true
          } else this.checkedAll = false
        },
    isIncompleteValue() {
        if (this.checked.length > 0 && this.checked.length < 4) {
          this.isIncomplete = true
        }
        else this.isIncomplete = false
    }   
    },
   
}
</script>

<style>

</style>