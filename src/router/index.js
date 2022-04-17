import { createRouter, createWebHistory } from 'vue-router'
import Contacts from '../view/Contact.vue'
import AddContact from '../view/AddContact.vue'
import EditContact from '../view/EditContact.vue'
import Login from '../view/Login.vue'

//const routerHistory = createWebHistory()
const routes = [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/:catchAll(.*)',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: Contacts,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/addcontact',
            name: 'AddContact',
            component: AddContact,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/editcontact/:contactId',
            name: 'EditContact',
            component: EditContact,
            meta: {
                requiresAuth: true
            }
        }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
