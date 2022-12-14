<template>
  <section class="common-top-title">
    <p class="big_text">Les projets</p>
  </section>

  <section class="common-section">
    <h1 class="common-section-title">Introduction</h1>
    <p class="common-section-paragraph">
      Voici une liste non exhaustive de mes <span style="color: #bb6565">projets personnels</span>, réalisés de manière autodidactes et mes <span style="color: #bb6565">projets professionnels</span> réalisés en stage.
      La plupart de ces projets ont été réalisé avec le langage <span style="color: #fa9e9e">Java</span> et <span style="color: #ff4242">Ruby</span>, mais il est également possible de retrouver des projets réalisés avec <span style="color: #fd9cf7">Kotlin</span>, <span style="color: #caf360">C#</span> et <span style="color: #75b1ff">PHP</span>.
    </p>
  </section>

  <!-- WATERMELON -->
  <section class="common-section-2">
    <p class="big_text">Projets personnels</p>
    <h3 class="common-section-low-title" style="text-decoration: underline;">WATERMELON BOT</h3>
    <div id="project-row">
      <section>
        <h4 class="common-section-low-title">INTRODUCTION</h4>
        <p class="common-section-paragraph" id="project-watermelon-paragraph">
          Watermelon Bot est un bot discord, développé en <span style="color: #fa9e9e">Java</span> avec la librairie <span style="color: #fa9e9e">JDA</span>. Il est actuellement encore en développement mais est déjà disponible via le site officiel <a href="https://watermelonbot.xyz" target="_blank"><span style="color: #75b1ff">https://watermelonbot.xyz</span></a>.
        </p>
        <h4 class="common-section-low-title">FONCTIONNALITÉ</h4>
        <p class="common-section-paragraph" id="project-watermelon-paragraph">
          Ce bot discord à pour but de faciliter la gestion d'un serveur discord, en proposant des commandes d'aide à la modération,
          des commandes propices au divertissement et un tout nouveau système de sécurité au dessus de celui proposé par discord qui
          permet d'avoir un contrôle accru sur tout les membres du serveur.
        </p>
      </section>
      <img src="../assets/myprojects/watermelon_m.png" alt="watermelon" id="illus-watermelon" class="unselectable" draggable="false">
    </div>

  <!-- MooN -->
    <h3 class="common-section-low-title" style="text-decoration: underline;">MOON</h3>
    <div id="project-row">
      <section>
        <h4 class="common-section-low-title">INTRODUCTION</h4>
        <p class="common-section-paragraph" >
          MooN API est une API développé en <span style="color: #fa9e9e">Java</span>, il s'agit d'un wrapper de l'API officiel de Call Of Duty. Elle est actuellement encore en développement mais est déjà exploitable, les sources se trouvent sur Github.
        </p>
        <h4 class="common-section-low-title">FUTUR</h4>
        <p class="common-section-paragraph">
          Cette API permet de récupérer et d'exploiter simplement des données récupéré depuis le site officiel de Call Of Duty. Elle a été développé dans le cadre d'une requête prononcé par le Youtubeur français <a href="https://www.youtube.com/c/otherGun/videos"><span style="color: #89a969">OtherGun</span></a>
          qui souhaitait exploiter les données de 50 000 000 de comptes. Aujourd'hui cette API est voué à évolué pour un plus gros projet nommé MooN.
        </p>
      </section>

      <img src="../assets/myprojects/MooN.png" alt="moon" id="illus-watermelon" class="unselectable" draggable="false">
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects-Page"
}
</script>

<style scoped src="../css/projects.css"/>