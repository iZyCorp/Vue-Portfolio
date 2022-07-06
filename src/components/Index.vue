<template>
  <section id="typing_word">
    <p id="big_text">Je travaille avec,
    <vue-writer :array="['Java','Ruby','Kotlin','Intellij IDEA']" :typeSpeed="70"></vue-writer>
    </p>
  </section>


  <section class="common-section" id="introduction">
    <h1 class="common-section-title">Qui suis-je ?</h1>
    <p class="common-section-paragraph">
      Actuellement en BTS SIO (Service informatique aux organisations), je suis depuis longtemps, passionné par l'informatique notamment dans le domaine du développement d'application / jeux-vidéos.
    </p>
    <img src="../assets/exp.png" alt="illus1" id = "illus1">
    <p class="common-section-paragraph">
      J'ai découvert le monde du développement grâce au jeu-vidéo Minecraft. J'ai débuter avec de simple plugin puis au fils des années j'ai pu faire évoluer ma façon de coder et parfaire ma maitrise du langage pour réaliser des programmes plus complexes comme des mini-jeux ou des API de gestion de réseau.
    </p>

    <p class="common-section-paragraph">
      Je travaille désormais essentiellement avec les langages Java, Ruby, Kotlin et C#.
    </p>

    <h3 class="common-section-low-title">PROJETS</h3>
    <p class="common-section-paragraph">J'ai eu l'occasion de travailler sur divers projet, seul ou en équipe. Il est notamment possible de retrouver quelque uns de ces projets sur mon github.</p>
    <a href="#/projects" class="learn-more">En savoir plus</a>
  </section>
</template>

<script>
import VueWriter from 'vue-writer'

export default {
  components: { VueWriter },
  name: "index_page"

}
</script>

<style lang="css" scoped src="../css/index.css"></style>