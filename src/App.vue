    <script setup>
    import { ref, onMounted } from 'vue';
    import FilmCard from './components/FilmCard.vue';
    import DiscoverFilm from './components/CallApi.js';
    import Sidemenu from './components/Sidemenu.vue';
    
    const films = ref([]);
    const isLoading = ref(true);
    
    onMounted(async () => {
      try {
        films.value = await DiscoverFilm();
      } catch (error) {
        console.error(error);
      } finally {
        isLoading.value = false;
      }
    });
    </script>
<template>
  <div class="bg-[url('/src/assets/Dune.jpg')] bg-cover bg-center h-screen ">
    <Sidemenu/>

    <div v-if="isLoading">
      Chargement...
    </div>
    <div v-else>
      <FilmCard :films="films" :maxFilms="6" />
    </div>
  </div>
</template>

