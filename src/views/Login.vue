<template>
  <div>
    <div class="container1">
    <div class="logo">
      <img src="../assets/logo.png">
    </div>
    <div class="inputs">
      <div>
        <input placeholder="Username" class="userName" type="text">
      </div>
      <div>
        <input placeholder="Password" class="Password" type="text">
      </div>
    </div>
    <div class="Remember-Forgot">
      <div class="Remember">
        <input type="checkbox" id="checkbox1" class="custom-checkbox">
        <label for="checkbox1">Remember Me</label>
      </div>
      <div class="Forgot">
        <a href=""> Forgot Password?</a>
      </div>
    </div>
    <div class="Login-Button">
      <button  @click="goToPageTwo">LOGIN</button>
    </div>
    <div class="hr-and-or">
      <div class="hr-class">
        <hr class="Cizgi">
      </div>
      <div class="p-or-class">
        <p class="orYazisi">or</p>
      </div> 
    </div>
    <div class="Login-Google-Facebook">
      <button class="btn-Google">Log in with Google</button>
      <button class="btn-Facebook">Log in with Facebook</button>
    </div>
    <div class="Sign-in">
      <p>Don't have an account? <span><a href="">Sign in</a></span></p>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import '../assets/style.css'

export default defineComponent({
  name: 'PageOne',
  setup() {
    const router = useRouter();
    const goToPageTwo = () => {
      router.push({ name: 'Dashboard' });
    };
    return { goToPageTwo };
  }
});
</script>

<style scoped>
  body{
    background-color: rgb(73, 89, 105);
  }
</style>

