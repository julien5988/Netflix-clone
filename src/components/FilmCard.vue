  <script setup>
  import { defineProps, ref, computed } from 'vue';
  import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
  import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
  
  const props = defineProps({
    films: {
      type: Array,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 5 // Nombre de films à afficher par page
    }
  });
  
  const currentPage = ref(0);
  
  // Calcul du nombre total de pages
  const totalPages = computed(() => Math.ceil(props.films.length / props.itemsPerPage));
  
  // Calcul de la valeur de translation pour le carrousel
  const translateValue = computed(() => currentPage.value * (100 / totalPages.value));
  
  // Fonction pour obtenir l'URL complète de l'image du film
  const getImageUrl = (posterPath) => {
    if (!posterPath) {
      return 'https://via.placeholder.com/300x450?text=No+Image';
    }
    return `https://image.tmdb.org/t/p/w300${posterPath}`;
  };
  
  const displayedFilms = computed(() => {
    const startIndex = currentPage.value * props.itemsPerPage;
    const endIndex = startIndex + props.itemsPerPage;
    return props.films.slice(startIndex, endIndex);
  });
  
  const previousPage = () => {
    currentPage.value--;
  };
  
  const nextPage = () => {
    currentPage.value++;
  };
  </script>
<template>
    <div class="carousel relative z-10 flex   justify-center items-center">
        <div class="w-[]">

        </div>
      <ul class="flex overflow-x-auto pb-4  " :style="{ transform: `translateX(-${translateValue}%)` }">
        <li v-for="(film, index) in displayedFilms" :key="film.id" class="flex-none w-40 mr-4">
          <img :src="getImageUrl(film.poster_path)" alt="Poster" class="rounded-lg shadow-md" />
          <!-- Autres détails du film à afficher -->
        </li>
      </ul>
  
      <ChevronLeft v-if="currentPage > 0" @click="previousPage" class="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer text-blue-500" />
      <ChevronRight v-if="currentPage < totalPages - 1" @click="nextPage" class="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer p-4 bg-gray-700 rounded-xl" />
    </div>
  </template>
  
  
  <style scoped>
  /* .carousel-container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .carousel {
    position: relative;
    scroll-behavior: smooth;
  }
  
  .carousel ul {
    transition: transform 0.5s ease;
  }
  
  .carousel li {
    flex: none;
  }
  
  .carousel img {
    width: 100%;
    height: auto;
  } */
  </style>
  