<template>
    <v-app>
        <navBar></navBar>
        <v-text-field
            name="name"
            label="label"
            id="id"
        ></v-text-field>
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