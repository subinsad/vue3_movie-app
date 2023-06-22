import { createRouter, createMemoryHistory } from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'
import Movie from './Movie.vue'

export default createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/movie',
            component: Movie
        },
        {
            path: '/about',
            component: About
        }
    ]
})