<template>
    <v-app>
        <v-container fluid>
            <v-row justify="center">
                <v-col cols="12" sm="11" md="11" lg="10">
                     <v-card style="top:15%" max-width="600" class="mx-auto" outlined>
        
                        <v-card-title v-bind:style="styleObject" outlined color="primary" >
                            <v-row justify="center">
                                Лица
                            </v-row>
                        </v-card-title>
                        <v-list-item-content v-bind:style="styleObject">
                        <v-btn v-bind:style="styleObject" outlined color="primary" @click="$router.push({name: 'name'})">Имя</v-btn>
                        <v-divider/>

                        <v-btn v-bind:style="styleObject" outlined color="primary" >Имя–отчество</v-btn>
                        <v-divider/>

                        <v-btn v-bind:style="styleObject" outlined color="primary">ФИО</v-btn>

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