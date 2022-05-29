<template>
    <v-app>
        <div class="v-toolbar__content orange" style="height: 64px;" >
            <v-btn icon @click="$router.push('/')" >
                <v-icon >mdi-arrow-left</v-icon>
            </v-btn>
            <div v-bind:style="styleObject" class="v-toolbar__title">Мнемоничекская память</div>
        </div>
        <v-card
        class="mx-auto"
        max-width="400"
        elevation="0">
            <v-list rounded >
                <v-subheader v-bind:style="styleObject">Уровень сложности</v-subheader>
                <v-list-item-group>
                    <v-list-item>
                        <v-list-item-content>
                            
                            <v-list-item-title v-bind:style="styleObject" @click="$router.push('/topic4')">
                            Легко
                            </v-list-item-title>
                            
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            
                            <v-list-item-title v-bind:style="styleObject" @click="$router.push('/topic4')">
                            Средне
                            </v-list-item-title>
                            
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            
                            <v-list-item-title v-bind:style="styleObject" @click="$router.push('/topic4')">
                            Сложно
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
      styleObject: {
            fontSize: '23px'
        },
    }),
  }
</script>
<style scoped>
</style>