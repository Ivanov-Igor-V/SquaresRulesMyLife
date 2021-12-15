<template>
    
          <div>
              <p>List 1</p>
            <div class="squares_container" v-for="(item,index) in colors" :key="index"> 
              <div v-for="num of item.count" 
              :key="num" class="square" 
              :style="{ background: item.color}"
              v-if="item.checked"
              @click="squareDecrement(index)"
              ></div>
            </div>

          </div>
            
        
</template>

<script>
export default {
props: ['colors'],
methods: {
    squareDecrement(index) {
        this.$store.commit('squareDecrement', index)
    }
},
}
</script>

<style>

</style>