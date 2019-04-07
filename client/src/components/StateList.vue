<template>
  <div id="state-list">

    <Summary 
      v-bind:total="totalVisited"
      v-bind:visitedAll="visitedAll">
        <template name="allMessage">
          You have visited all 50 states and the District of Columbia!
        </template>
    </Summary>

    <div class="d-flex flex-wrap justify-content-around"> 
      <div class="p-2" v-for="state in states" v-bind:key="state.name">
        <State
          v-bind:state="state" 
          v-on:isVisited="updateVisited"></State>
      </div>
    </div> 

  <div id="icon-credit" class="text-right m-2"><a href="https://icons8.com/icon/43632/map">Map icon by Icons8</a></div>

  </div>
</template>

<script>

import State from '@/components/State'
import Summary from '@/components/Summary'

export default {
  name: 'StateList',
  components: {
    State, Summary
  },
  data() {
    return {
      states: [], 
    }
  },
  mounted() {
    this.getAll()
  },
  methods: {
    getAll() {
      this.$stateService.getAll().then(data => {
       this.states = data 
      })
    },
    updateVisited(stateName, stateVisited) {   
      this.$stateService.setVisited(stateName, stateVisited).then(data => {
        this.getAll()
      })
    }
  },
  computed: {
    totalVisited() {
      let visited = this.states.filter(function(state) {
        return state.visited 
      })
      return visited.length
    },
    visitedAll() {
      let visited = this.states.filter(function(state) {
        return state.visited 
      })
      return visited.length == this.states.length
    }
  }
}
</script>

<style>

#icon-credit {
  font-style: italic;
  font-size: 0.7rem;

}

</style>
