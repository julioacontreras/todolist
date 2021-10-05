<template>
  <div>
    <page-header />
    <section>
      <nuxt v-if="!isMobile" />
      <no-mobile v-if="isMobile" />
    </section>
    <page-footer />
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue'
import PageFooter from '../components/PageFooter.vue'
import NoMobile from '../components/NoMobile.vue'

const MobileDetect = require('mobile-detect')

export default {
  components: {
    PageHeader,
    PageFooter,
    NoMobile
  },
  data () {
    return {
      isMobile: false
    }
  },
  created () {
    // eslint-disable-next-line nuxt/no-globals-in-created
    const md = new MobileDetect(window.navigator.userAgent)
    this.isMobile = (md.mobile() !== null)
  }
}
</script>
