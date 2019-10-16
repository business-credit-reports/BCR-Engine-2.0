<template>
  <div class="dash__grid min-h-screen bg-blue-100">
    <NavBar />
    <Sidebar />
    <Content>
      <nuxt />
    </Content>
  </div>
</template>

<script>
import NavBar from '../components/layouts/dash/NavBar'
import Sidebar from '../components/layouts/dash/sidebar/Sidebar'
import Content from '../components/layouts/dash/Content'

export default {
  components: {
    NavBar,
    Sidebar,
    Content
  }
}
</script>

<style>
.dash__grid {
  display: grid;
  grid: 70px 1fr / auto repeat(11, 1fr);
}
</style>
