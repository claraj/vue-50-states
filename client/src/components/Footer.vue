<template>
  <div class="footer">
  
  <span class="p-2">
    <router-link to="/">Home</router-link>
  </span>
  
  <span class="p-2">
    <router-link to="/about">About this site</router-link>
  </span>
  
  <p class="text-right credit p-2">Header image by 
    <a href="https://unsplash.com/photos/KpBXAOs80YI">@chrislawton via Unsplash</a>
    <br>
    <a href="https://icons8.com/icon/43632/map">Map icon by Icons8</a>
  </p>

  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.credit {
  font-size: 0.1em;
  font-style: italic;
}
</style>
