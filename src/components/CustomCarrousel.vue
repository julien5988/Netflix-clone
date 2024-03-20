<template>
    <div>
      <h2>Custom Carrousel</h2>
      <div class="carrousel">
        <div v-for="film in films" :key="film.id" class="film-card">
          <FilmCard :film="film" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, defineProps } from 'vue';
  import FilmCard from './FilmCard.vue';
  
  const props = defineProps({
    films: {
      type: Array,
      required: true,
    },
  });
  
  </script>
  