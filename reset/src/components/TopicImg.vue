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
            <!--<v-row>
                <v-col 
                class="d-flex child-flex"
                cols="3">
                
                
                <v-card>
                    <div>
                        <v-card-text 
                        v-for="(item, i) in items"
                        :key="i"
                        v-text="item.number + item.text">
                        </v-card-text>
                    </div>
                </v-card>
                </v-col>-->
                
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
                <!-- <rawDisplayer class="col-3" :value="list1" title="List 1" />-->
                <!--<rawDisplayer class="col-3" :value="list2" title="List 2" />-->
            </div>
            <!--<v-col v-for="n in 2"
            :key="n"
            class="d-flex child-flex"
            cols="3">-->
            <v-row justify="center">
                <v-col class="d-flex child-flex"
                cols="3" >
                    <v-card>
                        <!--<v-img
                        :src="`https://picsum.photos/200/300?image=${getImage()}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                        aspect-ratio="1"
                        class="grey lighten-2">
                        </v-img>-->

                        <v-img src="..\картинки\35367.jpg" aspect-ratio="1"
                        class="grey lighten-2"></v-img>
                        <!--<v-card-actions>
                            <v-col>
                                <v-text-field
                                label="Номер ответа"
                                required>
                                </v-text-field> 
                            </v-col>
                        </v-card-actions>-->
                    </v-card>
                </v-col>
                <v-col class="d-flex child-flex "
                cols="3">
                    <v-card >
                        <v-img src="..\картинки\35368.png" aspect-ratio="1"
                        class="grey lighten-2"></v-img>
                    </v-card>
                </v-col>
            </v-row><v-row justify="center">
            <div >
                <v-btn v-bind:style="styleObject"
                rounded color="primary" dark elevation="9">
                далее </v-btn>
            </div></v-row>
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
        styleObject: {

            fontSize: '23px'
        },
        //selectedItem: 1,
        //items: 
        //[
        //{ number:'1)', text: 'Mr. Sirl'},
        //{ number:'2)', text: 'Mrs. Woolridge'},
        //{ number:'3)', text: 'Mr. Hawkins'},
        //{ number:'4)', text: 'Miss Finch'},
        //{ number:'5)', text: 'Miss Alisha'}
        //],
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
