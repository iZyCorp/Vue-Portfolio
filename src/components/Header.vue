<template>
    <header>
        <section id="header_menu">
            <img src="../assets/logo.png" alt="iZyCorp" id="header_logo" class="unselectable">

            <nav id="dark_nav">
                <ul>
                    <router-link to="/" id="router-link">ACCUEIL</router-link>
                    <router-link to="/projects" id="router-link">PROJETS</router-link>
                    <router-link to="/contact" id="router-link">CONTACT</router-link>
                    <a href="https://github.com/iZyCorp" id="router-link">GITHUB</a>
                </ul>
            </nav>
        </section>

        <section id="second_menu">
            <nav v-if="$route.path === '/' || $route.path === '/formation' || $route.path === '/skills' || $route.path === '/hobbies' || $route.path === '/contact'">
                <router-link to="/formation" id="router-link">MA FORMATION</router-link>
                <router-link to="/skills" id="router-link">MES COMPETENCES</router-link>
                <router-link to="/hobbies" id="router-link">MES LOISIRS</router-link>
            </nav>

            <nav v-else-if="$route.path === '/projects'">
                <a @click="scrollToSection('personal')" id="router-link">REALISATION PERSONNEL</a>
                <!--<a @click="scrollToSection('stage')" id="router-link">REALISATION EN STAGE</a>-->
                <a @click="scrollToSection('stage-report')" id="router-link">RAPPORTS</a>
            </nav>

        </section>
    </header>
</template>

<script>
export default {
    name: "Header-Include",
    methods: {
        scrollToSection(section) {
            document.getElementById(section).scrollIntoView({behavior: "smooth"});
        },
    }
}
</script>

<style scoped src="../css/header.css"/>