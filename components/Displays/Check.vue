<template>
  <b-icon
    class="cursor-pointer"
    :class="{
      'text-primary': checked,
      'text-disabled hover:text-primary': !checked
    }"
    :icon="getIcon(checked)"
    size="is-dashboard"
  />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { getIcon } from '../../composables/Task'

export default defineComponent({
  props: {
    checked: {
      type: Boolean,
      required: true
    }
  },
  setup () {
    return {
      getIcon
    }
  }
})
</script>
