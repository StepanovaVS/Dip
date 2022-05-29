<template>
    <v-app>
        <div class="v-toolbar__content orange" 
            style="height: 64px;" >

            <v-btn icon @click="$router.push('/')" >
                <v-icon >mdi-arrow-left</v-icon>
            </v-btn>

            <div v-bind:style="styleObject" class="v-toolbar__title">Задание</div>
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
                
            </div></v-container>
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
        { name: "a", id: 1},
        { name: "c", id: 2 },
        { name: "n", id: 3 },
        { name: "b", id: 4 },
        { name: "s", id: 5 }
        ],
        list2: [],
    }),
}
</script>
<style scoped></style>