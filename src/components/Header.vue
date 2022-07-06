<template>
  <header>
    <section id="header_menu">
      <img src="../assets/logo.png" alt="iZyCorp" id = "header_logo">

      <nav id="dark_nav">
        <ul>
          <li><a href="#/">ACCUEIL</a></li>
          <li><a href="#/projects">PROJETS</a></li>
          <li><a href="#/contact">CONTACT</a></li>
          <li><a href="https://github.com/iZyCorp">GITHUB</a></li>
        </ul>
      </nav>
    </section>

    <section id="second_menu">
      <nav>
        <li><a href="#/formation">MA FORMATION</a></li>
        <li><a href="#/skills">MES COMPETENCES</a></li>
        <li><a href="#/hobbies">MES LOISIR</a></li>
      </nav>
    </section>
  </header>
</template>

<script>
export default {
  name: "Header-Include"
}
</script>

<style scoped src="../css/header.css">
</style>