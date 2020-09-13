<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <site-title :title="title"></site-title>
      <v-spacer />
      <v-btn icon to="/about">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon to="/">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <site-menu></site-menu>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
    <site-footer :footer="footer"></site-footer>
  </v-app>
</template>

<script>
import SiteTitle from "@/views/site/title";
import SiteFooter from "@/views/site/footer";
import SiteMenu from "@/views/site/menu";

export default {
  components: { SiteTitle, SiteFooter, SiteMenu },
  name: "App",
  data() {
    return {
      drawer: false,
      items: [],
      title: "나의 타이틀입니다.",
      footer: "푸터입니다."
    };
  }
};
</script>
