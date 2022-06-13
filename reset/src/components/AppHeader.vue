<template>
  <v-app>
    <v-toolbar flat color= "orange">
      <v-btn icon @click="$router.push('settings')" >
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>

      <v-toolbar-title v-bind:style="styleObject">СИРС: Мнемоничекская память</v-toolbar-title>
      <v-spacer/>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-switch v-model="$vuetify.theme.dark" hide-details v-on="on"/>
        </template>

        <span v-if="$vuetify.theme.dark">Использовать светлую тему
        </span>
        <span v-else>Использовать темную тему</span>
      </v-tooltip>
      <v-menu v-bind:disabled="!isAuth" bottom origin="center center" transition="slide-x-reverse-transition">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-account-circle-outline</v-icon>
          </v-btn>
        </template>
        <v-list dense rounded>
          <v-list-item @click="logout" color="like_color">
            <v-list-item-icon>
              <v-icon color="like_color">mdi-exit-to-app</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-menu>
      </v-toolbar>
      <v-divider/>
    <v-container grid-list-xl>
      <v-layout >
        <v-flex xs12 sm10 md8 offset-sm2 offset-md-4 offset-xs-6 >
          <v-card style="top:3%" max-width="750" class="mx-auto" outlined>                
            <v-img
            src="..\картинки\words2.jpg"
            height="194"/>
            <v-divider/>
            <v-card-title v-bind:style="styleObject">Слова</v-card-title>
            <v-card-subtitle v-bind:style="styleObject">Развитие памяти</v-card-subtitle>
            <v-card-text v-bind:style="styleObject">Это упражнение на запоминание последовательности не связанных между собой слов. Его выполнение основывается на методе ассоциаций.</v-card-text>
            <v-divider/>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outlined color="primary" @click="$router.push({name: 'instruction'})">Начать упражнение</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout >
        <v-flex xs12 sm10 md8 offset-sm2 offset-md-4 offset-xs-6 >
          <v-card style="top:5%" max-width="750" class="mx-auto" outlined >
                          
            <v-img
            src="..\картинки\fraud.webp"
            height="194"/>
            <v-divider/>
                          
            <v-card-title v-bind:style="styleObject">Лица</v-card-title>
            <v-card-subtitle v-bind:style="styleObject">Развитие памяти, внимания и воображения.</v-card-subtitle>
            <v-card-text v-bind:style="styleObject">Наблюдайте и анализируйте различия в той или иной черте лица. Фамилии преобразуйте в образы, методом наводящих ассоциаций.</v-card-text>
            <v-divider/>
            <v-card-actions>
              <v-btn outlined color="primary" @click="$router.push({name: 'statistics'})">Результаты </v-btn>

              <v-spacer></v-spacer>
              <v-btn outlined color="primary" @click="$router.push('/topicVar')">Начать упражнение</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
    export default {
    
    data: () => ({
      
      drawer: false,
      group: null,
      styleObject: {

            fontSize: '23px'
        },
    })
  }
</script>
<style scoped>
</style>
