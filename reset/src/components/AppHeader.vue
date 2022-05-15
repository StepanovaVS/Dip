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

          <!--<v-treeview
          v-model="tree"
          :open="initiallyOpen"
          :colors="colors"
          activatable
          color-key="name"
          open-on-click>
            <template v-slot:prepend="{ color, open }">
              <v-icon v-if="!color.file">
                {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
              </v-icon>
              <v-icon v-else>
                {{ files[color.file] }}
              </v-icon>
            </template>
          </v-treeview>-->
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

      
      <!--<button type="button" class="v-app-bar__nav-icon v-btn v-btn--icon v-btn--round theme--light v-size--default">
          <span aria-hidden="true" class="v-icon notranslate theme--light">
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true"
            class="v-icon__svg">
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z">
              </path>
            </svg>
        </span>
      </button>-->
      <div v-bind:style="styleObject" class="v-toolbar__title">Главное меню</div>
    </div>

   
    <!--<v-app-bar
      color="deep-purple"
      dark
      style="height: 14px"
    >
      <v-app-bar-nav-icon @click="drawer = true">

      </v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
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
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>-->

    <!--<div>
      <v-list-item-group  
        v-model="selectedItem"
        color="primary">
        <v-list-item 
          v-for="(item, i) in items"
          :key="i">
            <v-list-item-content >
              <v-list-item-title v-text="item.text" @click="$router.push('/topic4')">
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </div>-->
    
    <v-card
    class="mx-auto"
    max-width="400"
    elevation="0"
  >
    <v-list rounded >
      <v-subheader v-bind:style="styleObject">Упражнения</v-subheader>
      <v-list-item-group
        v-model="selectedItem">
        <v-list-item 
          v-for="(item, i) in items"
          :key="i">
          <v-list-item-content>
            <v-list-item-title v-bind:style="styleObject" v-text="item.text" @click="$router.push('/topic4')">
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

            fontSize: '23px'
        },
      selectedItem: 1,
      items: [
        
        { text: 'Запоминание 100 слов'},
        { text: 'Телефонные номера'},
        { text: 'Игральные карты'},
        { text: 'Лицо - ФИО'}
      ],
      
    }),
  }
</script>
<style scoped>
</style>
