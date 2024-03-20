<template>
  <Sidemenu/>
   <div class="bg-[url('/src/assets/Dune.jpg')] bg-cover bg-center h-screen flex justify-center items-end">
    <FilmCard  class="mb-4  ml-14" :films="films" :itemsPerPage="7" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DiscoverFilm from './components/CallApi.js';
import Sidemenu from './components/Sidemenu.vue';
import CustomCarrousel from './components/CustomCarrousel.vue';
import FilmCard from './components/FilmCard.vue';

const films = ref([]);

onMounted(async () => {
  try {
    films.value = await DiscoverFilm();
  } catch (error) {
    console.error(error);
  }
});
</script>
