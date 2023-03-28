<template>
  <section id="skills">

    <section class="common-top-title">
      <p class="big_text">Mes compétences</p>
    </section>

    <section class="common-section">

      <h2 class="common-section-intermediary-title" id="charts-title">EN RÉSUMÉ</h2>
      <div id="charts">
        <div id="left-side">
          <Bar id="lang" :data="
      {
        labels: ['Java', 'HTML', 'CSS', 'PHP', 'Kotlin', 'C#', 'JavaScript', 'Ruby', 'Python', 'Godot'],
        datasets: [
          {
            label: 'Langages',
            data: [98, 95, 95, 88, 84, 82, 76, 70, 65, 40],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(192,128,75,0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255,64,64,0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(128,75,192,0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgb(192,124,75)',
              'rgba(153, 102, 255, 1)',
              'rgb(255,64,64)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgb(135,75,192)',
            ],
            borderWidth: 1
          }
        ]
      }" :options="{
        maintainAspectRatio: true,
        responsive: true,
        scales: {
          r: {
            display: false,
            ticks: {
              callback: function(value, index, values) {
                return value + '%';
              }
            }
          }
        },
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Langages'
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.label + ': ' + context.dataset.data[context.dataIndex] + '%';
              }
            }
          }
        }
      }"/>
        </div>

        <div id="right-side">
          <Bar id="db" :data="
      {
        labels: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'SQLServer'],
        datasets: [
          {
            label: 'Bases de données',
            data: [80, 70, 65, 65, 40],
            backgroundColor: [
              'rgba(225,142,83,0.2)',
              'rgba(83,225,204,0.2)',
              'rgba(123,225,83,0.2)',
              'rgba(83,90,225,0.2)',
              'rgba(225,83,83,0.2)',
            ],
            borderColor: [
              'rgb(225,142,83)',
              'rgb(83,225,204)',
              'rgb(123,225,83)',
              'rgb(83,90,225)',
              'rgb(225,83,83)',
            ],
            borderWidth: 1
          }
        ]
      }" :options="{
        maintainAspectRatio: true,
        responsive: true,
        scales: {
          r: {
            display: false,
            ticks: {
              callback: function(value, index, values) {
                return value + '%';
              }
            }
          }
        },
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.label + ': ' + context.dataset.data[context.dataIndex] + '%';
              }
            }
          },
          title: {
            display: true,
            text: 'Bases de données'
          }
        }
      }"/>
        </div>
      </div>
    </section>
    <section class="common-section-2" id="languages">
      <h2 class="common-section-intermediary-title">EN DÉTAIL</h2>

      <!-- JAVA -->
      <section id="lang-section">
        <img src="../assets/technologies/java.png" id="lang-img" alt="Java">
        <div>
          <h2 class="common-section-low-title">Java</h2>
          <p class="common-section-paragraph">
            <span style="color: #fa9e9e">Java</span> est le premier langage de programmation que j'ai manipulé.
            J'ai commencé à l'utiliser à 12 ans afin de tenter de modifier des éléments dans
            <span style="color: rgb(134,225,59)">Minecraft</span>. J'ai ainsi pu réaliser beaucoup de plugins avec
            des fonctionnalités diverses et variées tel que des systèmes de modération, de mini-jeux ou encore
            de configuration de serveur.
          </p>

          <p class="common-section-paragraph">
            J'ai ensuite commencé à utiliser <span style="color: #fa9e9e">Java</span> pour réaliser des applications
            de bureau notamment grâce aux bibliothèques graphiques <span style="color: #fa9e9e">JavaFX</span> et
            <span style="color: #fa9e9e">Swing</span>. J'ai pu aboutir à la réalisation
            d'application tel que des lanceurs de jeux (launcher Minecraft) ou encore des applications plus
            poussées comme un IDE (Integrated Development Environment).
          </p>
        </div>
      </section>

      <!-- C# -->
      <section id="lang-section">
        <img src="../assets/technologies/cs.png" id="lang-img" alt="C#">
        <div>
          <h2 class="common-section-low-title">C#</h2>
          <p class="common-section-paragraph">
            J'ai commencé à utilisé <span style="color: #ff6464">C#</span> dans un contexte de création de jeux-vidéos.
            En effet étant adepte de jeux-vidéos et de développement et ayant comme aspiration professionnelle de
            devenir développeur de jeux-vidéos, j'ai décidé de me lancer dans la création de jeux-vidéos.
            J'ai eu l'occasion de travailler avec les moteurs de jeux-vidéos <a href="https://unity.com/fr"> <span style="color: #6df6f1">Unity</span></a> et
            <a href="https://godotengine.org/"><span style="color: #6495ff">Godot</span></a>.
          </p>

          <p class="common-section-paragraph">
            J'ai ensuite commencé à utiliser <span style="color: #ff6464">C#</span> pour réaliser des applications
            de bureau simple avec <span style="color: #ff6464">WPF</span> et <span style="color: #ff6464">WinForms</span>.
          </p>
        </div>
      </section>

      <!-- PHP -->
      <section id="lang-section">
        <img src="../assets/technologies/php.png" id="lang-img" alt="PHP">
        <div>
          <h2 class="common-section-low-title">PHP</h2>
          <p class="common-section-paragraph">
            <span style="color: #899fff">PHP</span> est le premier langage web back-end que j'ai appris.
            Je l'utilise pour réaliser des site web avec le framework <span style="color: #c56f6f">Laravel</span>.
            Mon site web pour le bot Discord <span style="color: #ff6464">Watermelon</span> est réalisé avec.
          </p>
        </div>
        </section>

      <!-- JAVASCRIPT -->
      <section id="lang-section">
        <img src="../assets/technologies/js.png" id="lang-img" alt="JavaScript">
        <div>
          <h2 class="common-section-low-title">JavaScript</h2>
          <p class="common-section-paragraph">
            <span style="color: #f7e05e">JavaScript</span> est le langage que j'utilise le plus souvent côté front-end.
            Je l'utilise notamment avec le Framework <span style="color: #f7e05e">Vue.js</span> pour réaliser des
            interfaces web dynamiques (comme ce site web :p).
          </p>
        </div>
      </section>

    </section>
  </section>
</template>

<script>
import {Bar} from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  ArcElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, RadialLinearScale, ArcElement)
export default {
  name: "Skills-Page",
  components: {
    Bar
  },
}
</script>

<style scoped src="../css/skills.css"/>