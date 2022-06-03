<template>
    <v-app>
        <!--<div class="v-toolbar__content orange" 
            style="height: 64px;" >

            <v-btn icon @click="$router.push('/')" >
                <v-icon >mdi-arrow-left</v-icon>
            </v-btn>

            <div v-bind:style="styleObject" class="v-toolbar__title">Задание</div>
        </div>-->
        <v-container grid-list-xl v-bind:style="styleObject">
      <v-layout >
        <v-flex xs12 sm10 md8 offset-sm2 offset-md-4 offset-xs-6 >
          <v-card style="top:5%" max-width="750" class="mx-auto"  outlined>
        <!--<v-container fluid v-bind:style="styleObject">-->
           <v-row class="text-center" justify="center">
            <!--<div class="row " class="text-center">-->
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
                    
                    <h3>Ответ</h3>
                    <draggable class="list-group" :list="list2" group="people" @change="log">
                        <div style="background-color:#FFDEAD"
                            class="list-group-item"
                            v-for="(element) in list2"
                            :key="element.name">
                            {{ element.name }} {{ index }}
                        </div>
                    </draggable>
                </div>
            </v-row><v-divider/>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outlined color="primary" @click="$router.push('/')">Проверить</v-btn>
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
    name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
    data: () => ({
        dialog: false,
        styleObject: {

            fontSize: '20px'
        },
        selectedItem: 1,
        list1: [
        { name: 'мышка', id: 1},
        { name: 'краска', id: 2},
        { name: 'стена', id: 3},
        { name: 'воробей', id: 4},            
        { name: 'флаг', id: 5},
        { name: 'заря', id: 6},
        { name: 'свеча', id: 7},
        { name: 'банк', id: 8},
        { name: 'лесник', id: 9},
        { name: 'парус', id: 10}
        ],
        list2: [],
    }),
}
</script>
<style scoped></style>