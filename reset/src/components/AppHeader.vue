<template>
  <v-app>
    
    <!--<div class="v-toolbar__content orange" style="height: 64px;" >-->
      <!--<v-app-bar-nav-icon @click="drawer = true">
      </v-app-bar-nav-icon>
      
      <v-navigation-drawer style="height: auto;"
        v-model="drawer"
        absolute
        temporary
      >-->
      
      <!--<v-list nav dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.path" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>-->

        <!--<v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
        <v-list-item>

            <v-list-item-icon>
              <v-icon>mdi-format-text-variant</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Размер шрифта</v-list-item-title>
          
          </v-list-item>

          <v-list-item>

            <v-list-item-icon>
              <v-icon>mdi-palette</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Стиль</v-list-item-title>

          </v-list-item>
          <v-list-item>
            <v-list-item-icon>

              <v-icon>mdi-cog-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Настройки</v-list-item-title>
          </v-list-item>
          
          
        </v-list-item-group>
      </v-list>
      

    </v-navigation-drawer color="teal">-->



      <!--<div class="v-toolbar__title" v-bind:style="styleObject">Мнемоничекская память</div>-->


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
              <v-btn outlined color="primary" @click="$router.push('/topic1')">Начать упражнение</v-btn>
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
              <v-spacer></v-spacer>
              <v-btn outlined color="primary" @click="$router.push('/topicVar')">Начать упражнение</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!--<div>-->
      <!--justify="center" -->

    <!--<v-card style="top:50%"
    class="mx-auto text-center"
    max-width="400"
    elevation="0"
    >
    
    
    <v-list rounded >
      <v-subheader v-bind:style="styleObject">Главное меню</v-subheader>
      <v-list-item-group>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-bind:style="styleObject" @click="$router.push('/topic1')">
            Слова
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-bind:style="styleObject" @click="$router.push('/topicVar')">
            Лица
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
  </div>-->

  </v-app>
  
</template>

<script>


    export default {
    
    data: () => ({
      
      drawer: false,
      group: null,
      styleObject: {
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily: 'Roboto, sans-serif'
        },
    })
  }
</script>
<style scoped>
</style>
