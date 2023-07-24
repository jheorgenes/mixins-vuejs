<template>
  <div>
    <lista-filmes />
    <lista-pessoas />
    <lista-videogames />
  </div>
</template>

<script>
import ListaFilmes from '@/components/ListaFilmes.vue'
import ListaPessoas from '@/components/ListaPessoas.vue'
import ListaVideogames from '@/components/ListaVideogames.vue'

export default {
  name: 'App',
  components: {
    ListaFilmes,
    ListaPessoas,
    ListaVideogames,
  }
}
</script>

<style>

</style>
