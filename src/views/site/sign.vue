<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        로그인
      </v-card-title>
      <v-divider />
      <v-card-actions>
        <v-btn color="red" dark @click="signInWithGoogle">
          <v-icon left>mdi-google</v-icon>구글로그인
        </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn color="" dark @click="signOut">
          로그아웃
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>
<script>
export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    async signInWithGoogle() {
      const provider = new this.$firebase.auth.GoogleAuthProvider();
      this.$firebase.auth().languageCode = "ko";
      this.loading = true;
      try {
        const sn = await this.$firebase.auth().signInWithPopup(provider);
        console.log(sn.user);
      } finally {
        this.loading = false;
      }
    },
    signOut() {
      this.$firebase.auth().signOut();
    }
  }
};
</script>
