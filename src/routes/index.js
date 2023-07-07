import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)
import about from '../components/about-us'
import products from '../components/our-products'
import CountTile from '../components/count-tile'
import RepairTile from '../components/repair-tile'
import TmcTile from '../components/tmc-tile'
import Prices from '../components/prices-tile'
import Contact from '../components/contact-tile'
import Docs from '../components/docs-tile'
const routes = [
    {
        path: '/',
        name: 'home',
        component: about,
    },
    {
        path: '/products',
        name: 'products',
        component: products,
        children: [
            {
                path: 'count',
                name: 'count',
                component: CountTile,
                meta: {
                    name: 'Учёт численности',
                    description: 'Автоматизация учёта контингента в образовательных учреждениях',
                    icon: require('../assets/product-numb-big.svg'),
                    path: 'https://count.cross-d.ru',
                }
            },
            {
                path: 'repair',
                name: 'repair',
                component: RepairTile,
                meta: {
                    name: 'Учёт содержания недвижимости',
                    description: 'Автоматизация учёта объектов недвижимого имущества (ОНИ), планового и капитального ремонта',
                    icon: require('../assets/product-build-big.svg'),
                    path: 'https://repair.cross-d.ru',
                }
            },
            {
                path: 'tmc',
                name: 'tmc',
                component: TmcTile,
                meta: {
                    name: 'Учёт товарно-материальных ценностей',
                    description: 'Автоматизация учёта ТМЦ учреждения образования',
                    icon: require('../assets/product-tmc-big.svg'),
                    path: 'https://material.cross-d.ru'
                }
            }
        ]
    },
    {
        path: '/prices',
        name: 'prices',
        component: Prices
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/docs',
        name: 'docs',
        component: Docs
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;