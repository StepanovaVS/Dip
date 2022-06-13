<template>
    <v-app>
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
            <!--<v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outlined color="primary" @click="$router.push('/')">Проверить</v-btn>
            </v-card-actions>-->
            <v-card-actions><v-spacer></v-spacer><v-dialog
      v-model="dialog"
      persistent class="mx-auto"
      max-width="600px"> 
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on">
          проверить
        </v-btn>
      </template>
      <v-card><div class="text-center">
        <v-card-title class="text-h5 grey lighten-2">
            <span class="text-h5">Результаты тренинга</span>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-row>
                    <v-list-item>
                      <v-col >
                        <v-list-item>
                          <v-list-item-title>Время выполнения</v-list-item-title>
                          <v-list-item-title>00:12</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title>Верных ответов</v-list-item-title>
                          <v-list-item-title>0/10</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title>Ваша оценка</v-list-item-title>
                          <v-list-item-title>2</v-list-item-title>
                        </v-list-item>
                        </v-col>
                        
                    </v-list-item>
                    <v-row justify="center">
                    <v-btn 
                    color="primary"
                    text
                    @click="$router.push('/')">
                    Назад
                    </v-btn> </v-row>
                    </v-row>
                </v-container>
            </v-card-text></div>
        </v-card>
      </v-dialog></v-card-actions>
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
        { name: 'губка', id: 1},
        { name: 'ласты', id: 2},
        { name: 'стена', id: 3},
        { name: 'краска', id: 4},
        { name: 'стена', id: 5},
        { name: 'ключ', id: 6},
        { name: 'мышка', id: 7},          
        { name: 'банк', id: 8},
        { name: 'заря', id: 9},
        { name: 'желе', id: 10},
        { name: 'свеча', id: 11},
        { name: 'флаг', id: 12},
        { name: 'лесник', id: 13},
        { name: 'воробей', id: 14},
        { name: 'парус', id: 15}
        ],
        list2: [],
    }),
}
</script>
<style scoped></style>