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
            
            <v-card-title v-bind:style="styleObject">ТЕСТ №1.  Слова</v-card-title>
            
            <div>
                <v-card-text v-bind:style="styleObject">
                Прочитайте список слов и изучите его в течении полутора минут. Попытайтесь произнести слова по порядку. Вслучае ошибок пересчитайте все слова, которые удалось запомнить точно.
                </v-card-text>
            </div>
        </v-card>

        <v-sheet
            height="50"
            class="overflow-hidden">
        </v-sheet>
        
        <!--<v-row justify="center">-->
        <div class="text-center">
            <!--<v-btn v-bind:style="styleObject"
                rounded class="ma-2"
                color="primary"
                dark @click="$router.push('/topicImg')">
                Начать
            </v-btn>-->
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
                        Начать
                    </v-btn>
                </template>
                <v-card>
                    <!--<v-fade-transition mode="out-in">-->
                        <v-row dense class="mx-auto">
                            <v-list-item-group v-model="selectedItem">
                                <v-list-item v-for="(item, i) in items"
                                :key="i">
                                    <v-list-item-content>
                                        
                                        <v-list-item-title v-bind:style="styleObject" v-text="item.text">
                                        </v-list-item-title>
                                        
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-row>
                    <!--</v-fade-transition>-->

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            text
                            @click="$router.push('/topicWord')">
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

            fontSize: '30px'
        },
        selectedItem: 1,
        items: 
        [
            { text: 'a'},
            { text: 'b'},
            { text: 'c'},
        ],
    }),
}
</script>
<style scoped></style>