<template>
  <div class="long-box-up-under">
    <div class="long-box-up-left">
      <h2> {{ title }}</h2>
      <h4> {{ date }}</h4>
    </div>
    <div class="long-box-up-right">
      <div class="radio-group">
        <label v-for="(option, index) in options" :key="index" class="radio-button-label" :class="{ 'selected': selectedValue === option.value }">
          <input @click="btn(option.value)" class="radio-button" type="radio" name="radio" :value="option.value" :checked="selectedValue === option.value">
          <span :class="`radio-button-span radio-${index}`" :style="{ borderRight: option.border ? '1px solid rgba(128, 128, 128, 0.4)' : 'none' }">{{ option.label }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, PropType, ref, watch } from 'vue';
import '../assets/grid-screen/styles.css'
import '../assets/grid-screen/row1.css'
import '../assets/grid-screen/row3.css'
import '../assets/grid-screen/row4.css'

export default defineComponent({
  name: 'LongBox',
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
    date: {
      type: String as PropType<string>,
      required: true,
    },
    defaultSelected: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const selectedValue = ref<string | null>(props.defaultSelected);

    watch(() => props.defaultSelected, (newVal) => {
      selectedValue.value = newVal;
    });

    const btn = (value: string) => {
      selectedValue.value = value;
    };

    const options = [
      { value: 'Day', label: 'Day', border: true },
      { value: 'Week', label: 'Week', border: true },
      { value: 'Month', label: 'Month', border: false }
    ];

    return { selectedValue, btn, options };
  }
});
</script>

<style>

</style>