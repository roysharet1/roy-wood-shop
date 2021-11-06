<template>
  <div id="p_id">
    <v-menu style="" left bottom>
      <template v-slot:activator="{ on }">
        <v-app-bar-nav-icon
          class="gray--text text--darken-1"
          @click.stop="drawer = !drawer"
          v-on="on"
        ></v-app-bar-nav-icon>
      </template>
    </v-menu>
    <v-navigation-drawer width="20em" dark v-model="drawer" right app temporary>
      <v-list>
        <v-list-item>
          <v-list-item-title>{{ "more options" }}</v-list-item-title>
        </v-list-item>
        <v-divider />
        <router-link
          class="topicStyle"
          v-for="(n, index) in options"
          :key="index"
          tag="div"
          :to="'${n.path}'"
          active-class="active"
          replace
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>{{ n.meta.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title :id="n.meta.id">{{
              n.meta.title
            }}</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import text from "../../assets/text.js";
import { store } from "../../store/store";
import { mapGetters } from "vuex";

export default {
  props: {
    p_id: { type: String, default: "" },
  },
  data() {
    return {
      text,
      open: ["public"],
      drawer: false,
    };
  },
  computed: {
    // ...mapGetters([]),
    options() {
      return this.$router.options.routes.filter((o) => o.path != "/");
    },
  },
  methods: {},
  components: {},

  beforeCreate() {},
  created() {},
  methods: {},
};
</script>
<style scoped>
.topicStyle {
  cursor: pointer;
}

.active {
  background-color: rgba(100, 200, 200, 0.3);
  cursor: default;
}
</style>
