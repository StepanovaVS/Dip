<template>
    <v-app>
        <div class="v-toolbar__content orange" 
            style="height: 64px;" >

            <v-btn icon @click="$router.push('/')" >
                <v-icon >mdi-arrow-left</v-icon>
            </v-btn>

            <div v-bind:style="styleObject" class="v-toolbar__title">Задание</div>
        </div>
        <v-card max-width="500"
            class="mx-auto" elevation="2">
            
            <v-system-bar></v-system-bar>
            
            <v-card-title v-bind:style="styleObject">ТЕСТ №1.  Лица</v-card-title>
            
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
        </v-sheet>
        
        <!--<v-row justify="center">-->
        <div class="text-center">
            <v-btn v-bind:style="styleObject"
                rounded class="ma-2"
                color="primary"
                dark @click="$router.push('/topicImg')">
                Начать
            </v-btn>
            <!--</div>-->        
     
            <v-dialog
                v-model="dialog"
                class="mx-auto" max-width="810">

                <template v-slot:activator="{ on, attrs }">
                    
                    <v-btn v-bind:style="styleObject"
                        rounded class="ma-2"
                        color="primary"
                        v-bind="attrs"
                        v-on="on">
                        Показать лица
                    </v-btn>
                </template>

                <v-card>
                    <!--<v-fade-transition mode="out-in">-->
                        <v-row dense>
                            <v-col>
                                <v-card class="mx-auto"
                                max-width="400">
                                    <v-img src="..\картинки\35367.jpg" aspect-ratio="1"
                                        class="grey lighten-2">
                                    </v-img>
                                    <v-card-title>
                                        Miss Brainne
                                    </v-card-title>
                            
                                </v-card>
                            </v-col>
                            <v-col>
                                <v-card class="mx-auto"
                                    max-width="400">
                                    <v-img src="..\картинки\35368.png" aspect-ratio="1"
                                        class="grey lighten-2"></v-img>
                                    <v-card-title>
                                        Mr. Shelby
                                    </v-card-title>
                                </v-card>
                            </v-col>
                        </v-row>
                    <!--</v-fade-transition>-->

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            text
                            @click="dialog = false">
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

            fontSize: '20px'
        },
        selectedItem: 1,
        items: 
        [
            { text: 'Посомтрите на портреты людей. Рассматривать их вы можете не более 4 минут. Затем будут даны теже портреты уже без фамилий. Посторайтесь запомнить имена изображенных людей.'}
        ],
    }),
}
</script>
<style scoped></style>