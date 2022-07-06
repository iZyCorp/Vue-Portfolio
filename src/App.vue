<template>
  <Header/>
  <component :is="currentView"/>
  <Footer/>
</template>

<script>
// Include
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Page components
import NotFound from "@/components/NotFound";
import Index from './components/Index.vue'
import Skills from './components/Skills.vue'
import Hobbies from "@/components/Hobbies";
import Formation from "@/components/Formation";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

// routes
const routes = {
  '/': Index,
  '/skills': Skills,
  '/hobbies': Hobbies,
  '/formation': Formation,
  '/contact': Contact,
  '/projects': Projects
}

export default {
  name: 'App',
  components: {
    Header,
    Footer,

    NotFound,
    Index,
    Skills
  },
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}
</script>

<style lang="css" src="./css/common.css">
</style>
