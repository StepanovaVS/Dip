<template>
    <v-app>
        <!--<div class="v-toolbar__content orange" style="height: 64px;" >
            <v-btn icon @click="$router.push('/')" >
                <v-icon >mdi-arrow-left</v-icon>
            </v-btn>
            <div v-bind:style="styleObject" class="v-toolbar__title">Мнемоничекская память</div>
        </div>-->
       <!-- <v-card style="top:15%" 
        class="mx-auto text-center"
        max-width="400"
        elevation="0">
            <v-list rounded >
                <v-list-item-group>
                    <v-list-item>
                        <v-list-item-content>
                            
                            <v-list-item-title v-bind:style="styleObject" @click="$router.push({name: 'name'})">
                            Имя
                            </v-list-item-title>
                            
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            
                            <v-list-item-title v-bind:style="styleObject" @click="$router.push('/topic4')">
                            Имя–отчество
                            </v-list-item-title>
                            
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            
                            <v-list-item-title v-bind:style="styleObject" @click="$router.push('/topic4')">
                            ФИО
                            </v-list-item-title>
                            
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>-->
        <v-container fluid>
            <v-row justify="center">
                <v-col cols="12" sm="11" md="11" lg="10">
                     <v-card style="top:15%" max-width="750" class="mx-auto" outlined>
        
                        <v-card-title v-bind:style="styleObject" outlined color="primary" >
                            <v-row justify="center">
                                Лица
                            </v-row>
                        </v-card-title>
                        <v-list-item-content v-bind:style="styleObject">
                        <v-btn v-bind:style="styleObject" outlined color="primary" @click="$router.push({name: 'name'})">Имя</v-btn>
                        <v-divider/>

                        <v-btn v-bind:style="styleObject" outlined color="primary" @click="$router.push({name: '/topic4'})">Имя–отчество</v-btn>
                        <v-divider/>

                        <v-btn v-bind:style="styleObject" outlined color="primary" @click="$router.push({name: '/topic4'})">ФИО</v-btn>

                        </v-list-item-content>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>

    export default {
    data: () => ({
      styleObject: {
            fontSize: '23px'
        },
    }),
  }
</script>
<style scoped>
</style>