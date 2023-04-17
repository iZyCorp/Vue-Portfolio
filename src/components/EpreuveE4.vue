<template>

    <section class="common-top-title">
        <p class="big_text">Epreuve E4</p>
    </section>

    <section class="common-section">

        <div style="display: flex; flex-direction: row; justify-content: center;">
            <button class="button" @click="slide >= 6 ? slide = 6 : slide += 1">Suivant</button>
            <button class="button" @click="slide <= 1 ? slide = 1 : slide -= 1">Précédent</button>
        </div>


        <div class="skill-show">

            <div v-if="slide === 1">
                <h2 class="skill-title">Gérer le patrimoine informatique</h2>
                <ul>
                    <li class="skill-point">Recenser et identifier les ressources numériques</li>
                    <li class="skill-point">Exploiter des référentiels, normes et standards adoptés par le prestataire informatique</li>
                    <li class="skill-point">Mettre en place et vérifier les niveaux d'habilitation associés à un service</li>
                    <li class="skill-point">Vérifier les conditions de la continuité d'un service informatique</li>
                    <li class="skill-point">Gérer les sauvegardes</li>
                    <li class="skill-point">Vérifier le respect des règles d'utilisation des ressources numériques</li>
                </ul>

                <div class="card-container">
                    <div class="card">
                        <h2 class="card-title">VIRTUALISATION</h2>
                        <ul>
                            <li class="skill-point">Virtual box</li>
                            <li class="skill-point">Gestion utilisateurs</li>
                            <li class="skill-point">docker</li>
                        </ul>

                    </div>

                    <div class="card">
                        <h2 class="card-title">WINDOWS SERVER 2022</h2>
                        <ul>
                            <li class="skill-point">Active directory</li>
                            <li class="skill-point">DNS</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h2 class="card-title">SAUVEGARDE</h2>
                        <ul>
                            <li class="skill-point">Incrémentale</li>
                            <li class="skill-point">Différentielle</li>
                            <li class="skill-point">Totale</li>
                        </ul>
                    </div>
                </div>
            </div>



            <div v-if="slide === 2">
                <h2 class="skill-title">Répondre aux incidents et aux demandes d'assistance et d'évolution</h2>
                <ul>
                    <li class="skill-point">Collecter, suivre et orienter des demandes</li>
                    <li class="skill-point">Traiter des demandes concernant les services réseau et système, applicatifs</li>
                    <li class="skill-point">Traiter des demandes concernant les applications</li>
                </ul>

                <div class="card-container">

                    <div class="card">
                        <h2 class="card-title">SECURISATION DE POSTE CLIENT</h2>
                        <ul>
                            <li class="skill-point">Eset</li>
                            <li class="skill-point">Remote control</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h2 class="card-title">Projet C#</h2>
                        <ul>
                            <li class="skill-point">GLPI</li>
                            <li class="skill-point">TP 421</li>
                        </ul>
                    </div>
                </div>
            </div>



            <div v-if="slide === 3">
                <h2 class="skill-title">Développer la présence en ligne de l'organisation</h2>
                <ul>
                    <li class="skill-point">Participer à la valorisation de l'image de l'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques</li>
                    <li class="skill-point">Référencer les services en ligne de l'organisation et mesurer leur visibilité</li>
                    <li class="skill-point">Participer à l'évolution d'un site Web exploitant les données de l'organisation</li>
                </ul>

                <div class="card-container">
                    <div class="card">
                        <h2 class="card-title">PROJET WEB</h2>
                        <ul>
                            <li class="skill-point">Passerelle du Val-Ratier</li>
                            <li class="skill-point">Site wordpress pour ostéopathe</li>
                            <li class="skill-point">Site wordpress du Chalailler de Massier</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h2 class="card-title">CMS MINEWEB & LAUNCHER</h2>
                        <ul>
                            <li class="skill-point">SEO (Search Engine Optimization)</li>
                            <li class="skill-point">Image de marque</li>
                        </ul>
                    </div>
                </div>
            </div>



            <div v-if="slide === 4">
                <h2 class="skill-title">Travailler en mode projet</h2>
                <ul>
                    <li class="skill-point">Analyser les objectifs et les modalités d'organisation d'un projet</li>
                    <li class="skill-point">Planifier les activités</li>
                    <li class="skill-point">Evaluer les indicateurs de suivi d'un projet et analyser les écarts</li>
                </ul>

                <div class="card-container">

                    <div class="card">
                        <h2 class="card-title">PROJET EN FORMATION</h2>
                        <ul>
                            <li class="skill-point">Projet C# - PhP - Java</li>
                            <li class="skill-point">Outil de gestion de projet</li>
                            <li class="skill-point">Versioning</li>
                            <li class="skill-point">Chat intéractif</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h2 class="card-title">PROJETS PERSONNELS</h2>
                        <p>

                        </p>
                    </div>
                </div>

            </div>


            <div v-if="slide === 5">
                <h2 class="skill-title">Mettre à disposition des utilisateurs un service informatique</h2>
                <ul>
                    <li class="skill-point">Réaliser les tests d'intégration et d'acceptation d'un service</li>
                    <li class="skill-point">Déployer un service</li>
                    <li class="skill-point">Accompagner les utilisateurs dans la mise en place d'un service</li>
                </ul>

                <div class="card-container">
                    <div class="card">
                        <h2 class="card-title">DEPLOIEMENT DE SERVICE</h2>
                        <ul>
                            <li class="skill-point">Apache / Nginx</li>
                            <li class="skill-point">Websocket</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h2 class="card-title">TESTS D'INTEGRATION</h2>
                        <ul>
                            <li class="skill-point">Fiche de test</li>
                            <li class="skill-point">JUnit</li>
                        </ul>
                    </div>
                </div>
            </div>



            <div v-if="slide === 6">
                <h2 class="skill-title">Organiser son développement professionnel</h2>
                <ul>
                    <li class="skill-point">Mettre en place son environnement d'apprentissage personnel</li>
                    <li class="skill-point">Mettre en oeuvre des outils et stratégies de veille informationnelle</li>
                    <li class="skill-point">Gérer son identité professionnelle</li>
                    <li class="skill-point">Développer son projet professionnel</li>
                </ul>

                <div class="card-container">
                    <div class="card">
                        <h2 class="card-title">VEILLE INFORMATIQUE</h2>
                        <ul>
                            <li class="skill-point">Leo Techmaker</li>
                            <li class="skill-point">Grafikart</li>
                            <li class="skill-point">Graven</li>
                        </ul>
                    </div>

                    <div class="card">
                        <h2 class="card-title">PROJETS PERSONNELS</h2>
                        <ul>
                            <li class="skill-point">MoonAPI</li>
                            <li class="skill-point">WatermelonBot - IRC</li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    </section>

</template>

<script>
export default {
    name: "EpreuveE4-Page",
    data() {
        return {
            slide: 1
        }
    },
}
</script>

<style scoped src="../css/e4.css">

</style>