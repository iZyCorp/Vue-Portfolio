// Page components
import Index from "@/components/Index";
import Skills from '@/components/Skills';
import Hobbies from "@/components/Hobbies";
import Formation from "@/components/Formation";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

import EpreuveE4 from "@/components/e4/EpreuveE4.vue";

import NotFound from "@/components/NotFound";
import Maintenance from "@/components/Maintenance";

import {createRouter, createMemoryHistory } from "vue-router/dist/vue-router";

// create all route and the createRouter and make sure that when we try to get a wrong route it will redirect to NotFound

const routes = [
    { path: '/', name: 'Index', component: Index, },
    { path: '/skills', name: 'Skills', component: Skills, },
    { path: '/hobbies', name: 'Hobbies', component: Hobbies, },
    { path: '/formation', name: 'Formation', component: Formation, },
    { path: '/contact', name: 'Contact', component: Contact, },
    { path: '/projects', name: 'Projects', component: Projects, },
    { path: '/epreuve4', name: 'EpreuveE4', component: EpreuveE4 },

    { path: '/maintenance', name: 'Maintenance', component: Maintenance, },
    { path: '/NotFound', name: 'NotFound', component: NotFound, },
    { path: '/:pathMatch(.*)', component: NotFound },
    { path: '/:catchAll(.*)', component: NotFound },
]
// process.env.BASE_URL
const router = createRouter({
    history: createMemoryHistory(),
    routes
})


export default router