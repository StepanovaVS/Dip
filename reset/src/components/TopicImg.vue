<template >
    <v-app >
        <div class="v-toolbar__content orange" 
            style="height: 64px" >
            <v-btn icon @click="$router.push('/')">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>

            <div class="v-toolbar__title" v-bind:style="styleObject">Лицо-ФИО</div>
        </div>

        <v-container fluid v-bind:style="styleObject" >
           
            <div class="row ">
                <div class="col-3">
                    <h3>Варианты</h3>
                    <draggable class="list-group" :list="list1" group="people" @change="log">
                        <div style="background-color:#FFDEAD" 
                            class="list-group-item"
                            v-for="(element) in list1" 
                            :key="element.name"> <!--(element, index)-->
                            {{ element.name }} {{ index }}
                        </div>
                    </draggable>
                </div>
                <div class="col-3">
                    <h3>Колонка ответов</h3>
                    <draggable class="list-group" :list="list2" group="people" @change="log">
                        <div style="background-color:#FFDEAD"
                            class="list-group-item"
                            v-for="(element) in list2"
                            :key="element.name">
                            {{ element.name }} {{ index }}
                        </div>
                    </draggable>
                </div>
                
            </div>
            
            <v-row justify="center">
                <v-col class="d-flex child-flex"
                cols="3" >
                    <v-card>
                        
                        <v-img src="..\картинки\35367.jpg" aspect-ratio="1"
                        class="grey lighten-2"></v-img>
                        
                    </v-card>
                </v-col>
                <v-col class="d-flex child-flex "
                cols="3">
                    <v-card >
                        <v-img src="..\картинки\35368.png" aspect-ratio="1"
                        class="grey lighten-2"></v-img>
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    > 
           
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          далее
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
            <span class="text-h5">Результаты тренинга</span>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-row>
                    <v-list-item>
                        
                        <v-list-item-title>Время выполнения</v-list-item-title>
                    </v-list-item>
                    <v-btn>Time</v-btn>
                    <v-btn
                    color="primary"
                    text
                    @click="dialog = false">
                    Далее
                    </v-btn>         

                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
      </v-dialog></v-row>
            
        </v-container>
    </v-app>
</template>

<script>
import draggable from "vuedraggable";// без @
export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
    methods: {
        add: function() {
      this.list.push({ name: "Nina" });
    },
    replace: function() {
      this.list = [{ name: "Reyana" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    
    log: function(evt) {
      window.console.log(evt);
    },

      getImage () {
        const min = 550
        const max = 560

        return Math.floor(Math.random() * (max - min + 1)) + min
      },
    },
    data: () => ({
        dialog: false,
        styleObject: {

            fontSize: '23px'
        },
      
        list1: [
        { name: "Mr. Sirl", id: 1},
        { name: "Mrs. Woolridge", id: 2 },
        { name: "Mr. Shelby", id: 3 },
        { name: "Miss Finch", id: 4 },
        { name: "Miss Brainne", id: 5 }
        ],
        list2: [],
    }),
}
</script>
<style scoped></style>
