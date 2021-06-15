<template>
  <div class="section">
    <b-field label="username">
      <b-input
      model="username"
      type="text"
      />
      <!-- :value="user.username" -->
      <!-- @input="updateUser({ key: 'username', value: $event })" -->
    </b-field>
    <b-field label="email">
      <b-input
      model="email"
      type="text"
      />
    </b-field>
    <b-field label="password">
      <b-input 
      model="password"
      type="password"
      />
      <!-- :value="user.password" -->
    </b-field>
    <b-field label="password_confirmation">
      <b-input 
      model="password_confirmation"
      type="password"
      />
      <!-- :value="user.password" -->
    </b-field>
    <div class="container">
      <b-button>
        Log in
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
    }
  },
  methods: {
    login: function () {
      let username = this.username
      let password = this.password
      this.$store.dispatch('login', { username, password })
      .then(() => this.$router.push('/'))
      .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>