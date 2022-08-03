import ProductIndex from './components/products/index.vue';
import ProductCreate from './components/products/create.vue';
import ProductEdit from './components/products/edit.vue';
import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
    {
        path: '/products',
        component: ProductIndex,
        name: "ProductIndex"
    },
    {
        path: '/products/create',
        component: ProductCreate,
        name: "ProductCreate"
    },
    {
        path: '/products/edit/:productId',
        component: ProductEdit,
        name: "ProductEdit"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router