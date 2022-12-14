<template>
  <section id="typing_word">
    <p class="big_text">Je travaille avec,
    <vue-writer :array="['Java','Ruby','Kotlin','PHP','Intellij IDEA']" :typeSpeed="70" />
    </p>
  </section>


  <section class="common-section" id="introduction">
    <img src="../assets/back_img.png" alt="back_img" id="back-image" class="unselectable" draggable="false">
    <h1 class="common-section-title">Qui suis-je ?</h1>
    <p class="common-section-paragraph" id="index-common-section">
      Actuellement en <span style="color: #bb6565"> BTS SIO (Service informatique aux organisations) </span>, je suis depuis longtemps, passionné par l'informatique notamment dans le domaine du <span style="color: #89a969">développement d'application</span> / <span style="color: #89a969">jeux-vidéos</span>.
    </p>
    <img src="../assets/exp.png" alt="illus1" id = "illus1" class="unselectable" draggable="false">
    <p class="common-section-paragraph" id="index-common-section">
      J'ai découvert le monde du développement grâce au jeu-vidéo Minecraft. J'ai débuté avec de simples plugins puis au fils des années j'ai pu faire évoluer ma façon de coder et parfaire ma maîtrise du langage pour réaliser des programmes plus complexes comme des mini-jeux ou des API de gestion de réseau.
    </p>

    <p class="common-section-paragraph" id="index-common-section">
      Je travaille désormais essentiellement avec les langages <span style="color: #fa9e9e">Java</span>, <span style="color: #ff4242">Ruby</span>, <span style="color: #fd9cf7">Kotlin</span>, <span style="color: #caf360">C#</span> et <span style="color: #75b1ff">PHP</span>.
    </p>

    <h3 class="common-section-low-title">PROJETS</h3>
    <p class="common-section-paragraph" id="index-common-section">J'ai eu l'occasion de travailler sur divers projet, <span style="color: #6987a9">seul</span> ou en <span style="color: #6989a9">équipe</span>. Il est notamment possible de retrouver quelque uns de ces projets sur mon <span style="color: #ce6868">github</span>.</p>
    <div id="learn-more-div">
      <router-link to="/projects" id="router-link">En savoir plus</router-link>
    </div>
  </section>
</template>

<script>
import VueWriter from 'vue-writer'

export default {
  components: { VueWriter },
  name: "index_page"

}
</script>

<style scoped src="../css/index.css"/>