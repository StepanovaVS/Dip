<template>
  <v-app>
    <div class="v-toolbar__content orange" style="height: 64px;" >
      <v-app-bar-nav-icon @click="drawer = true">
      </v-app-bar-nav-icon>
      <v-navigation-drawer style="height: auto;"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
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

    </v-navigation-drawer>

      <div v-bind:style="styleObject" class="v-toolbar__title">Мнемоничекская память</div>
    </div>

    
    <v-card
    class="mx-auto"
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

  </v-app>
  
</template>

<script>

    export default {
    data: () => ({
      drawer: false,
      group: null,
      styleObject: {

            fontSize: '45px'
        },
    }),
  }
</script>
<style scoped>
</style>
