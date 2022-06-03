<template>
    <v-app>
        <!--<div class="v-toolbar__content orange" 
            style="height: 64px;" >

            <v-btn icon @click="$router.push('/')" >
                <v-icon >mdi-arrow-left</v-icon>
            </v-btn>

            <div v-bind:style="styleObject" class="v-toolbar__title">Задание</div>
        </div>-->
        <!--<v-card max-width="500" 
            class="mx-auto" elevation="2">
            
            <v-system-bar></v-system-bar>
            
            <v-card-title v-bind:style="styleObject">ТЕСТ №2.  Лица</v-card-title>
            
            <div>
                <v-card-text v-bind:style="styleObject"
                v-for="(item, i) in items"
                :key="i" v-text="item.text">
                </v-card-text>
            </div>
        </v-card>

        <v-sheet
            height="50"
            class="overflow-hidden">
        </v-sheet>-->
        
        <!--<v-row justify="center">-->

        <v-container grid-list-xl>
        <v-layout >
        <v-flex xs12 sm10 md8 offset-sm2 offset-md-4 offset-xs-6 >
          <v-card style="top:5%" max-width="750" class="mx-auto" outlined>
            
            
                          
            <v-card-title v-bind:style="styleObject">ТЕСТ №2.  Лица</v-card-title>
            
            <v-card-text v-bind:style="styleObject">Посмотрите на портреты людей. Рассматривать их вы можете не более 4 минут. Затем будут даны теже портреты уже без фамилий. Посторайтесь запомнить имена изображенных людей.</v-card-text>
            <v-divider/>
            <v-card-actions>
              <v-spacer></v-spacer>

                <v-dialog 
                v-model="dialog"
                class="mx-auto" max-width="300">

                <template v-slot:activator="{ on, attrs }" >

                <v-btn  v-bind="attrs" 
                        v-on="on" outlined color="primary" >Начать упражнение</v-btn>
                </template></v-dialog>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout></v-container>

        <div class="text-center">
            
            <!--</div>-->        
     
            <v-dialog
                v-model="dialog"
                class="mx-auto" max-width="810">

                

                <v-card>
                    <!--<v-fade-transition mode="out-in">-->
                        <v-row dense class="mx-auto">
                            <v-col>
                                <v-card>
                                    <v-img src="..\картинки\35367.jpg" aspect-ratio="1"
                                        class="grey lighten-2">
                                    </v-img>
                                    <v-card-title>
                                        Аврора
                                    </v-card-title>
                            
                                </v-card>
                            </v-col>
                            <v-col>
                                <v-card>
                                <!--<v-card class="mx-auto"
                                    max-width="400">-->
                                    <v-img src="..\картинки\35368.png" aspect-ratio="1"
                                        class="grey lighten-2"></v-img>
                                    <v-card-title>
                                        Владимир
                                    </v-card-title>
                                </v-card>
                            </v-col>
                        </v-row>
                    <!--</v-fade-transition>-->


                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            text
                            @click="$router.push({name: 'task4'})">
                            Запомнил(а)
                        </v-btn>
                    </v-card-actions>
                </v-card>
                
            </v-dialog>
        <!--</v-row>--></div> 
    </v-app>
</template>

<script>

export default {
    data: () => ({
        dialog: false,
        styleObject: {

            fontSize: '28px'
        },
        selectedItem: 1,
        
    }),
}
</script>
<style scoped></style>