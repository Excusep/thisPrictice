
<template>
  <div>
    {{real}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      props: {
        real: {
          type: String,
          default: 'dd'
        }
      }
    }
  }
}
</script>
