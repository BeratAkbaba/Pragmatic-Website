<template>
  <div class="header">
    <div class="start">
      <i class="mdi mdi-magnify"></i>
      <input type="text" class="search" placeholder="Search...">
    </div>
    <div class="finish">
      <div class="language">
        <span @click="toggleProfile('.newwindow')"  :class="`circle-flags--${selectedFlag}`" style="width: 19.6px; height:19.6px"></span>
        <!-- ------------ -->
        <div class="newwindow" >
          <ul class="language-list">
            <li v-for="flag in flags" :key="flag.code" @click="selectFlag(flag.code)">
              <span :class="`circle-flags--${flag.code}`"></span>{{ flag.name }}
            </li>
          </ul>
        </div>
         <!-- ---------- -->
      </div>
      <div class="screenSettings" @click="changeIcon">
        <i :class="screenIconClass"></i>
        <div class="tooltip">Full Screen</div>
      </div>
      <div class="notification">
        <i @click="toggleNotificationTooltip" class="mdi mdi-bell"></i>
        <div class="tooltip" :class="{ 'show': notificationTooltipVisible }">
          <div v-for="notificationitem in notificationItems" :key="notificationitem.lefticon" class="notification-big">
            <div class="notification-on">
              <div class="notification-left">
                <i :class="`${notificationitem.lefticon}`"></i>
                <div>{{ notificationitem.lefttext }}</div>
              </div>
              <div class="notification-right">
                <div>{{ notificationitem.righttext }}</div>
                <i class="mdi mdi-clock-outline"></i>
              </div>
            </div>
            <div class="notification-under">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in diam sit amet felis ultricies ultricies vitae et tortor. Proin dapibus justo felis, ut imperdiet lacus accumsan quis.
            </div>
          </div>
          <div class="notification-small">See all notifications</div>
        </div>
        <div class="red"></div>
      </div>
      <div class="userName">
        <p class="userNameWrite">Aurora Shenton</p>
      </div>
        <div class="profile">
          <img @click="toogleProfileMenu" class="user-picture" src="https://pragmatic-linko.vercel.app/assets/avatar-e2224f85.jpg">
          <div class="newwindow2" :class="{'show': profileMenuVisible}">
            <ul class="profile-list">
              <li class="profile-option">
                <span class="mdi mdi-account-outline"></span>Profile
              </li>
              <li class="profile-option">
                <span class="mdi mdi-calendar"></span>Calendar
              </li>
              <li class="profile-option">
                <span class="mdi mdi-account-multiple-outline"></span>Contacts
              </li>
              <hr>
              <li class="profile-option" @click="goToLogin">
                <span class="mdi mdi-logout"></span>Logout
              </li>
            </ul>
          </div>
        </div>
        
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import "../assets/style/flags.css"
import "../assets/style/header.css"
import "../assets/style/language.css"
import "../assets/style/sidebar.css"
export default defineComponent({
  name: 'Header',
  setup() {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.newwindow2') && !target.closest('.user-picture') && !target.closest('.language span') && !target.closest('.notification i')&& !target.closest('.tooltip')&& !target.closest('.newwindow')) {
        profileMenuVisible.value = false;
        notificationTooltipVisible.value = false;
        const element = document.querySelector(".newwindow");
        if(element){
          element.classList.remove('active')
      }
    }
    };
    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });
    const isFullscreen = ref(false);
    const changeIcon = () => {
      isFullscreen.value = !isFullscreen.value;
    };
    const screenIconClass = computed(() => {
      return isFullscreen.value ? 'mdi mdi-fullscreen-exit' : 'mdi mdi-fullscreen';
    });

    const profileMenuVisible = ref(false);
    const notificationTooltipVisible = ref(false);
    const  toogleProfileMenu= () => {
      profileMenuVisible.value = !profileMenuVisible.value;
      if (profileMenuVisible.value) {
        notificationTooltipVisible.value = false;
        const element = document.querySelector(".newwindow");
        if(element){
          element.classList.remove('active')
      }
      }
    };
    const toggleProfile = (selector: string) => {
      const element = document.querySelector(selector);
      if(element){
        element.classList.toggle('active')
        notificationTooltipVisible.value = false;
        profileMenuVisible.value = false;
      }
    }
    
    const toggleNotificationTooltip = () => {
      notificationTooltipVisible.value = !notificationTooltipVisible.value;
      if (notificationTooltipVisible.value) {
        profileMenuVisible.value = false;
        const element = document.querySelector(".newwindow");
        if(element){
          element.classList.remove('active')
      }
      }
    }
    const flags = [
      {code: 'us', name: 'English'},
      {code: 'be', name: 'Italian'},
      {code: 'it', name: 'French'},
      {code: 'fr', name: 'German'},
      {code: 'es', name: 'Spanish'},
      {code: 'cn', name: 'Chinese'},
      {code: 'jp', name: 'Japanese'}
      ];

      const selectedFlag = ref('tr');

      const selectFlag = (code: string) => {
        selectedFlag.value = code;
        toggleProfile('.newwindow')
      };
      const notificationItems = [
        {lefticon: "mdi mdi-cart-outline", lefttext: 'New order', righttext: 'Just now!'},
        {lefticon: "mdi mdi-calendar", lefttext: 'New Schedule Realease', righttext: '2 Min Ago'},
        {lefticon: "mdi mdi-email-outline", lefttext: 'New message from David', righttext: '30 Min Ago'},
      ]

      const router = useRouter();
      const goToLogin = () => {
        router.push({ name: 'Login' });
      }
    return {changeIcon , screenIconClass,
      toogleProfileMenu, profileMenuVisible,
      toggleProfile, flags ,selectedFlag, 
      selectFlag, goToLogin,notificationItems,
      toggleNotificationTooltip, notificationTooltipVisible}
  }
})
</script>

<style>

</style>