<template>
  <section class="content-section">
    <h1>COD information retriever</h1>
    <p class="description">Il s'agit d'une application sous JavaFX qui permet de récupérer des données depuis les serveurs de Call Of Duty en temps réel.</p>

    <div class="card-container">

      <section class="card">
        <img src="../assets/api.png" width="100" class="card-caption">
        <h4>Appel de méthode API</h4>
        <p>L'application fait appel à des méthodes d'api non-officiel de manière sécurisé et rapide</p>
      </section>

      <section class="card">
        <img src="../assets/graphique.png" width="100" class="card-caption">
        <h4>Graphique de résultat</h4>
        <p>Il est possible d'obtenir un résultat par graphique des données recherchés par l'utilisateur</p>
      </section>

      <section class="card">
        <img src="../assets/csv.png" width="100" class="card-caption">
        <h4>Export en CSV ou PNG</h4>
        <p>L'export des données peut se faire en CSV pour une exploitation sous excel, ou alors par PNG pour les graphiques</p>
      </section>
    </div>
  </section>

  <section class="content-section">
    <h1>Lanceur Minecraft Electron/Java</h1>
    <p class="description">Il s'agit d'une petite application qui permet à l'utilisateur de se connecter sur un serveur de jeu en ayant toute les ressources nécéssaires pour le bon fonctionnement du jeu sans aucun effort à fournir de sa part. </p>

    <div class="card-container">

      <section class="card">
        <img src="../assets/electron.png" width="100" class="card-caption">
        <h4>Electron</h4>
        <p>Les lanceurs sous electrons permettent d'avoir une approche beaucoup orienté web et permettent une meilleurs flexibilité sur le design</p>
      </section>

      <section class="card">
        <img src="../assets/SceneBuilder.png" width="100" class="card-caption">
        <h4>Java</h4>
        <p>Les lanceurs sous Java permettent une approche beaucoup plus orienté application avec de meilleurs performance et un meilleurs contrôle</p>
      </section>

      <section class="card">
        <img src="../assets/compose.png" width="100" class="card-caption">
        <h4>Compose (Desktop/Android)</h4>
        <p>J'ai également réalisé des lanceurs sous Jetpack Compose qui est un framework graphique permettant le déploiement sous Android et PC</p>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects-Page"
}
</script>

<style scoped src="../css/projects.css">
</style>