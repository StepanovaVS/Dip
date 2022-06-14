<template>
<v-app>
    


        <router-view></router-view>

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
<!--<template>
    <div class="layout">
        <app-header/>
        <router-view></router-view>
    </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'

export default {
    components: {
        AppHeader
    },
}
</script>-->
