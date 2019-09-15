<template>
<div id="app">
    <router-view></router-view>
</div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
}
</script>

<style>

@font-face {
    font-family: 'Helvetica Neue';
    src: url('~@/assets/fonts/HelveticaNeue.eot');
    src: url('~@/assets/fonts/HelveticaNeue.eot?#iefix') format('embedded-opentype'),
        url('~@/assets/fonts/HelveticaNeue.woff2') format('woff2'),
        url('~@/assets/fonts/HelveticaNeue.woff') format('woff'),
        url('~@/assets/fonts/HelveticaNeue.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Helvetica Neue';
    src: url('~@/assets/fonts/HelveticaNeue-Bold.eot');
    src: url('~@/assets/fonts/HelveticaNeue-Bold.eot?#iefix') format('embedded-opentype'),
        url('~@/assets/fonts/HelveticaNeue-Bold.woff2') format('woff2'),
        url('~@/assets/fonts/HelveticaNeue-Bold.woff') format('woff'),
        url('~@/assets/fonts/HelveticaNeue-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}
</style>
