<template>
    <div class="sidebars">
      <div class="one">
        <img src="https://pragmatic-linko.vercel.app/assets/logo-5e942556.svg">
        <div class="p">Pragmatic</div>
      </div>
      <div :class="['second', {'collapsed': isCollapsed}]">
        <div v-for="product in products" :key="product.title || product.bigTitle">
          <!-- bigTitle özelliğine sahip ürünler için -->
          <div v-if="product.bigTitle" :class="whereTitle">
            <span>{{ product.bigTitle }}</span>
          </div>

          <!-- titleChildren özelliğine sahip ürünler için -->
            <div  v-else-if="product.titleChildren" >
            <div :class="whereItemTitle">
              <div class="icon">
                <i :class="product.icon"></i>
              </div>
              <span v-if="!isCollapsed">{{ product.title }}</span>
              <i v-if="!isCollapsed" class="el-icon el-sub-menu__icon-arrow" @click="toggleRotationAndShowChildren(product, $event)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="16" height="16">
                  <path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path>
                </svg>
              </i>
            </div>
            <div v-if="!isCollapsed" class="dashboard-children">
              <ul v-if="selectedProduct === product" class="titleChildren">
                <li v-for="(child, index) in product.titleChildren" :key="index">
                  <div v-if="typeof child === 'object'">
                    <li v-for="(child1, index) in child" :key="index">
                      <div v-if="typeof child1 === 'object'">
                        <li v-for="(child2, index) in child1" :key="index">
                          <div v-if="typeof child2 === 'object'">
                            <li v-for="(child3, index) in child2" :key="index">
                              <div v-if="typeof child3 === 'object'">
                                <li v-for="(child4, index) in child3" :key="index">
                                  <div v-if="selectedProduct2 === product" class="cocuksuz">
                                    <span v-if="!isCollapsed">{{ child4 }}</span>
                                  </div>
                                </li>
                              </div>
                              <div v-else>
                                <div v-if="selectedProduct1 === product" class="cocuklu1">
                                  <span v-if="!isCollapsed">{{ child3 }}</span>
                                  <i v-if="!isCollapsed" class="el-icon el-sub-menu__icon-arrow" @click="toggleRotationAndShowChildren2(product, $event)">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="16" height="16">
                                      <path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path>
                                    </svg>
                                  </i>
                                </div>
                              </div>
                            </li>
                          </div>
                          <div v-else>
                            <div v-if="selectedProduct1 === product" class="cocuksuz">
                              <span v-if="!isCollapsed">{{ child2 }}</span>
                            </div>
                          </div>
                        </li>
                      </div>
                      <div v-else>
                        <div class="cocuklu">
                          <span v-if="!isCollapsed">{{ child1 }}</span>
                          <i v-if="!isCollapsed" class="el-icon el-sub-menu__icon-arrow" @click="toggleRotationAndShowChildren1(product, $event)">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="16" height="16">
                              <path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path>
                            </svg>
                          </i>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div v-else>
                    {{ child }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- Diğer ürünler için -->
          <div v-else>
            <li :class="whereItemTitle">
              <div class="icon">
                <i :class="product.icon"></i>
              </div>
              <span v-if="!isCollapsed">{{ product.title }}</span>
            </li>
          </div>
        </div>
        <div class="collapse" @click="toggleCollapse">
        <span>
          <i class="mdi" :class="isCollapsed ? 'mdi-unfold-more-vertical' : 'mdi-unfold-less-vertical'"></i>
          {{ isCollapsed ? '' : 'Collapse' }}
        </span>
      </div>
      </div>
      </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, Ref,computed  } from 'vue';
import { products } from '../data/products'; // Projeleri import edin
import "../assets/style/flags.css"
import "../assets/style/header.css"
import "../assets/style/language.css"
import "../assets/style/sidebar.css"

// Product arayüzü tanımlaması
interface Product {
  icon?: string;
  title?: string;
  bigTitle?: string;
  titleChildren?: (string | {
    title: string;
    children: (string | {
      title: string;
      children: (string | {
        title: string;
        children: string[];
      })[];
    })[];
  })[];
}
export default {
  setup() {
    const isCollapsed = inject('isCollapsed') as Ref<boolean>;
    const productsRef = ref(products as Product[]);
    const selectedProductRef = ref(null as Product | null);
    const rotatedSvgRef = ref(null as SVGElement | null);
    const selectedProductRef1 = ref(null as Product | null);
    const rotatedSvgRef1 = ref(null as SVGElement | null);
    const selectedProductRef2 = ref(null as Product | null);
    const rotatedSvgRef2 = ref(null as SVGElement | null);
    // ------------------------
    const isCollapsedRef = ref(false);
    if (!isCollapsed) {
      console.error('`isCollapsed` not provided!');
    }
    // ------------------------
    
    const toggleRotationAndShowChildren = (product: Product, event: Event) => {
      // console.log(product.titleChildren?.includes('Analytical'));
      
      const target = event.currentTarget as HTMLElement;
      const svgElement = target.querySelector('svg') as SVGElement;

      if (rotatedSvgRef.value && rotatedSvgRef.value !== svgElement) {
        rotatedSvgRef.value.classList.remove('rotated');
      }

      if (svgElement) {
        svgElement.classList.toggle('rotated');
        rotatedSvgRef.value = svgElement.classList.contains('rotated') ? svgElement : null;
      }
      selectedProductRef.value = selectedProductRef.value === product ? null : product;
      
    };
    
    const toggleRotationAndShowChildren1 = (product: Product, event: Event) => {
      // console.log(product.titleChildren?.includes('Analytical'));
      
      const target = event.currentTarget as HTMLElement;
      const svgElement = target.querySelector('svg') as SVGElement;

      if (rotatedSvgRef1.value && rotatedSvgRef1.value !== svgElement) {
        rotatedSvgRef1.value.classList.remove('rotated');
      }

      if (svgElement) {
        svgElement.classList.toggle('rotated');
        rotatedSvgRef1.value = svgElement.classList.contains('rotated') ? svgElement : null;
      }
      selectedProductRef1.value = selectedProductRef1.value === product ? null : product;
      
    };
    const toggleRotationAndShowChildren2 = (product: Product, event: Event) => {
      // console.log(product.titleChildren?.includes('Analytical'));
      
      const target = event.currentTarget as HTMLElement;
      const svgElement = target.querySelector('svg') as SVGElement;

      if (rotatedSvgRef2.value && rotatedSvgRef2.value !== svgElement) {
        rotatedSvgRef2.value.classList.remove('rotated');
      }

      if (svgElement) {
        svgElement.classList.toggle('rotated');
        rotatedSvgRef2.value = svgElement.classList.contains('rotated') ? svgElement : null;
      }
      selectedProductRef2.value = selectedProductRef2.value === product ? null : product;
      
    };



    const toggleCollapse = () => {
      isCollapsedRef.value = !isCollapsedRef.value;
      if (isCollapsed) {
        isCollapsed.value = !isCollapsed.value;
        const oneElement = document.querySelector('.p');
        if (oneElement && isCollapsed.value) {
          oneElement.textContent = '';
        } else {
          (oneElement ?? ({} as Element)).textContent = 'Pragmatic';
        }
      }
    };
    const whereTitle = computed(() => isCollapsed.value ? 'title-collapsed' : 'title');
    const whereItemTitle = computed(() => isCollapsed.value ? 'ItemTitle-collapsed' : 'ItemTitle');
    return {
      products: productsRef,
      selectedProduct: selectedProductRef,
      rotatedSvg: rotatedSvgRef,
      selectedProduct1: selectedProductRef1,
      rotatedSvg1: rotatedSvgRef1,
      selectedProduct2: selectedProductRef2,
      rotatedSvg2: rotatedSvgRef2,
      isCollapsed: isCollapsedRef,
      toggleRotationAndShowChildren,
      toggleRotationAndShowChildren1,
      toggleRotationAndShowChildren2,
      toggleCollapse,
      whereTitle,
      whereItemTitle
    };
  },
};
</script>

<style scoped>
/* Stil tanımlamaları */
</style>
