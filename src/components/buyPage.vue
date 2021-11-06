<template>
    <v-app>
        <navBar></navBar>
        <router-view :key="$route.fullPath"></router-view>
    </v-app>
</template>


<script>

import navBar from "./components/general/navBar";


export default{
    components:{
        navBar
    },
    computed:{
        ...mapGetters()
    },
    beforeCreate() {
    
    }
}


 </script>