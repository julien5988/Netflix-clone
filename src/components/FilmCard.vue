<template>
  <div class="relative">
    <div class="grid grid-cols-[auto,1fr,auto] gap-4">
      <button @click="previousPage" class="h-full bg-black bg-opacity-20 text-white font-bold py-4 px-2 rounded-l transition-colors duration-300 ease-in-out">
        <ChevronLeft class="w-6 h-6" />
      </button>
      <ul class="flex flex-row space-x-4  col-span-1 ">
        <li v-for="(film, index) in displayedFilms" :key="film.id" class="w-40">
          <img :src="getImageUrl(film.poster_path)" alt="Poster" class="rounded-lg shadow-md " />
        </li>
      </ul>
      <button @click="nextPage" class="h-full bg-black bg-opacity-20 text-white font-bold py-4 px-2 rounded-r transition-colors duration-300 ease-in-out">
        <ChevronRight class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';

const props = defineProps({
  films: {
    type: Array,
    required: true
  },
  itemsPerPage: {
    type: Number,
    default: 7 // Toujours afficher 7 films par page
  }
});

const currentIndex = ref(0);

const getImageUrl = (posterPath) => {
  if (!posterPath) {
    return 'https://via.placeholder.com/300x450?text=No+Image';
  }
  return `https://image.tmdb.org/t/p/w300${posterPath}`;
};

const displayedFilms = computed(() => {
  const films = props.films;
  const start = currentIndex.value;
  const end = start + props.itemsPerPage;
  const slicedFilms = films.slice(start, end);
  if (slicedFilms.length < props.itemsPerPage) {
    const remaining = props.itemsPerPage - slicedFilms.length;
    return slicedFilms.concat(films.slice(0, remaining));
  }
  return slicedFilms;
});

const nextPage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.films.length;
};

const previousPage = () => {
  currentIndex.value = (currentIndex.value - 1 + props.films.length) % props.films.length;
};
</script>

<style scoped>
.transition-transform {
  transition-property: transform;
  transition-duration: 0.3s; /* Durée de la transition en secondes */
  /* Vous pouvez ajouter d'autres propriétés de transition selon vos besoins */
}

</style>
