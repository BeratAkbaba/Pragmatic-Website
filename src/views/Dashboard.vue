<template>
  <div :class="bodyClass">
    <Sidebar class="sidebar" />
    <div class="header-and-screen">
      <Header />
      <ScreenField />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, computed, ref  } from 'vue';
import Header from '../components/header.vue';
import Sidebar from '../components/sidebar.vue';
import ScreenField from '../components/screenField.vue';
import '../assets/grid-screen/styles.css'

export default defineComponent({
  components: { Sidebar, Header, ScreenField },
  setup() {
    const isCollapsed = ref(false);

    // Provide the `isCollapsed` state to child components
    provide('isCollapsed', isCollapsed);

    const bodyClass = computed(() => isCollapsed.value ? 'body-collapsed' : 'body');
    
    return {
      bodyClass,
      isCollapsed
    };
  }
});
</script>

<style>
.body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #4a596a;
  display: grid;
  grid-template-columns: 270px 1fr;
  background-color: #f3f7fa;
  align-items: center;
  transition: grid-template-columns 0.8s ease;
}
.body-collapsed{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #4a596a;
  display: grid;
  grid-template-columns: 130px 1fr;
  background-color: #f3f7fa;
  align-items: center;
  transition: grid-template-columns 0.8s ease;
}

@media (max-width: 800px) {
  .sidebar {
    display: none;
  }
  .body{
    grid-template-columns: 1fr;
  }
}

@media (max-width: 800px) {
  .row-1 .icon {
    display: none; 
  }
}
</style>
