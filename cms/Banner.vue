<template>
  <SfBanner
    :title="title"
    :subtitle="subtitle"
    :description="description"
    :button-text="button_text"
    :link="button_link"
    :image="image.url"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { SfBanner } from '@storefront-ui/vue';

export default Vue.extend({
  name: 'Banner',
  components: {
    SfBanner
  },
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    description: {
      type: String,
    },
    button_text: {
      type: String,
    },
    button_link: {
      type: String,
    },
    image: {
      type: Object,
    },
    background: {
      type: String,
    },
  },
  mounted(){
      console.log('Content =>', this.background);
  }
})
</script>
