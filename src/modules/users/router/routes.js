
import Users from '../main.vue'
import Form from '../form.vue'

export default {
    '/usuarios': {
        component: Users,
        name: 'users',
        subRoutes: {
            '/novo': {
                name: 'users.new',
                component: Form
            }
        }
    }
}