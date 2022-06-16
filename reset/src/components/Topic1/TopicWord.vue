<template>
    <v-app>
        <v-container grid-list-xl v-bind:style="styleObject">
      <v-layout >
        <v-flex xs12 sm10 md8 offset-sm2 offset-md-4 offset-xs-6 >
          <v-card style="top:5%" max-width="750" class="mx-auto"  outlined>

           <v-row class="text-center" justify="center">
                <div class="col-3">
                    <h3>Варианты</h3>
                    <draggable class="list-group" :list="list1" group="people" @change="log">
                      <div style="border-radius: 10px; background:#FFDEAD; text-align: center; margin-top: 5px"
                           class="list-group-item"
                           v-for="(element) in list1"
                           :key="element.name">
                        <strong style="font-size: 30px; ">{{ element.name }}</strong>
                      </div>
                    </draggable>
                </div>
                <div class="col-3">
                    
                    <h3>Ответ</h3>
                    <draggable class="list-group" :list="list2" group="people" @change="log">
                      <div style="border-radius: 10px; background:#FFDEAD; text-align: center; margin-top: 5px"
                           class="list-group-item"
                           v-for="(element) in list2"
                           :key="element.name">
                        <strong style="font-size: 30px; ">{{ element.name }}</strong>
                      </div>
                    </draggable>
                </div>
            </v-row><v-divider/>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outlined color="primary" @click="ComparingArrays()">Проверить</v-btn>
            </v-card-actions>
           </v-card>
           
           </v-flex>
           </v-layout>
           </v-container>
    </v-app>
</template>

<script>
import draggable from "vuedraggable";
export default {
  data: () => ({
    dialog: false,
    styleObject: {
      fontSize: '20px'
    },
    selectedItem: 1,
    TrueAnswer: [],
    list1: [],
    list2: [],
    shuffleList: [],
    result: 0,
  }),
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
  mounted() {
    this.ShuffleWords();
    this.TrueAnswer = this.getArrayForWord;
  },

  computed: {
    getArrayForWord(){
      return this.$store.getters.getArrayForWord;
    },
  },
  methods: {
    ShuffleWords(){
      this.shuffleList = this.getArrayForWord;
      this.shuffleList.sort(() => Math.random() - 0.5)
      this.list1 = this.shuffleList;
      },
    ComparingArrays(){
      for(let i = 0; i < this.getArrayForWord.length; i++){
        if(this.getArrayForWord[i] === this.list2[i]){
          this.result++;
        }
      }
    },
    log: function(evt) {
      window.console.log(evt);
    },
  },
}
</script>
<style scoped></style>