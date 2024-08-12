<template>
  <div class="container">
    <div class="row row-1">
      <div v-for="(smallBoxItem, index) in smallBoxItems" :key="index" :class="`box box-${index + 1}`">
        <div class="small-box">
          <div class="up">
            <div class="left">
              <i :class="smallBoxItem.bigicon"></i>
              <div class="badge">
                <i :class="smallBoxItem.smallicon"></i>
                <strong>{{ smallBoxItem.percent }}</strong>
              </div>
            </div>
            <div class="right">
              <div class="right-up">
                {{ smallBoxItem.title }}
              </div>
                <h2 class="right-down">{{ smallBoxItem.number }}</h2>
            </div>
          </div>
          <div class="down" v-html="smallBoxItem.image"></div>
        </div>
      </div>
    </div>
    <div class="row row-2">
      <div class="box box-5">
        <img src="../assets/canvas1.png">
      </div>
    </div>
    <div class="row row-3">
      <div class="box box-6">
         <!-- LONG BOX -->
         <div class="long-box">
            <div class="long-box-up">
              <long-up :title="title1" :date="date1" defaultSelected="Week"/>
            </div>
              <div class="long-box-down">
                <table>
                  <tr>
                      <th v-for="progressunderboxitem in progressunderboxitems" :key="progressunderboxitem.tabletitle">
                        {{ progressunderboxitem.tabletitle }}
                      </th> 
                  </tr>
                  <tr v-for="(progressunderboxitem, index) in progressunderboxitems" :key="progressunderboxitem.firstname">
                      <td class="td-left"><span :class="`${progressunderboxitem.animation}`" :style="{backgroundColor: pulseColor(index)}"></span></td>
                      <td>{{ progressunderboxitem.firstname }}</td>
                      <td>{{ progressunderboxitem.lastname }}</td>
                      <td class="svg-peity" v-html="progressunderboxitem.activity">
                      </td>
                      <td>
                        <div class="bar-and-svg">
                            <div class="el-progress-bar">
                              <div class="el-progress-bar__inner" :style="{width: progressunderboxitem.barwidth , backgroundColor: progressunderboxitem.barcolor}"></div>
                            </div>
                            <div class="el-progress__text"><span v-html="progressunderboxitem.progresstext"></span></div>
                        </div>
                      </td>
                  </tr>
                </table>
              </div>
          </div>
            <!-- ------- -->
      </div>
      <div class="box box-7">
        <img src="../assets/canvas2.png">
      </div>
    </div>
    <div class="row row-4">
      <div class="box box-8">
        <!-- -------8.DİV--------- -->
        <div class="xlong-box">
          <div class="xlong-box-up">
            <long-up :title="title2" :date="date2" defaultSelected="Week"/>
          </div>
          <div class="xlong-box-down">
            <div v-for="(reportunderboxitem, index) in reportunderboxitems" :key="reportunderboxitem.title">
              <h5> {{ reportunderboxitem.title }}</h5>
              <div style="width: 98%" class="bar-and-svg1">
                <div class="el-progress-bar">
                  <div class="el-progress-bar__inner" :style="{width: reportunderboxitem.width, backgroundColor: reportunderboxitem.background}"></div>
                </div>
                <div :class="`el-progress__text icon-${index}`" style="font-size: 14.4px;"><span>
                  <i class="el-icon" v-html="reportunderboxitem.baricon"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
            <!-- -------------------- -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref, onMounted, onUpdated } from 'vue';
import longUp from './longUp.vue';
import { smallBoxItems, reportunderboxitems, progressunderboxitems } from '../data/boxItems'; // Projeleri import edin
// import '../assets/grid-screen/styles.css'
import '../assets/grid-screen/row1.css'
import '../assets/grid-screen/row3.css'
import '../assets/grid-screen/row4.css'

export default defineComponent({
  name: 'ScreenField',
  components: {
    longUp,
  },
  setup() {
    const title1 = ref('Progress');
    const date1 = ref('This month');
    const title2 = ref('Report');
    const date2 = ref('This week');
    smallBoxItems ;
    reportunderboxitems;
    progressunderboxitems;

    const pulseColors = [
      '#3B82F6',
      '#FDE047',
      '#4ADE80',
      '#F97316',
      '#D1D5DB'
    ];

    function pulseColor(index: number): string {
      const colorIndex = index % pulseColors.length;
      return pulseColors[colorIndex];
    }

    function applyAfterStyles() {
      const spans = document.querySelectorAll('.td-left span');
      spans.forEach(span => {
        const htmlElement = span as HTMLElement; // Tip dönüşümü
        const backgroundColor = getComputedStyle(htmlElement).backgroundColor;
        htmlElement.style.setProperty('--after-bg-color', backgroundColor);
      });
    }

    onMounted(() => {
      applyAfterStyles();
    });

    onUpdated(() => {
      applyAfterStyles();
    });
    return {
      title1 ,
      date1 ,
      title2 ,
      date2 ,
      smallBoxItems,
      reportunderboxitems,
      progressunderboxitems,
      pulseColor
    };
  },
  
});

</script>

<style>
@media (max-width: 1200px) {
  .row-1 {
    flex-wrap: wrap;
    height: 430px; 
  }

  .row-1 .box{
    flex: 1 1 calc(50% - 30px); 
    box-sizing: border-box; 
  }
  .row-1 .box-1,.box-2{
    margin-bottom: 15px;
  }
}
@media (max-width: 768px) {
  .row-1 {
    flex-wrap: wrap;
    height: 430px; 
  }

  .row-1 .box{
    flex: 1 1 calc(50% - 30px); 
    box-sizing: border-box; 
  }
}
</style>