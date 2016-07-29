
<script>
    export default {
        data () {
            return {
                users: [],
            }
        },
        ready () {
            this.$http.get('/data/MOCK_DATA.json').then(res => this.users = JSON.parse(res.body))
        },
    }
</script>

<template>
    <div>
        <h1>
            Users
            <button @click="$router.go({ name: 'users.new' })" class="btn btn-primary btn-xs pull-right">Novo Usuário</button>
        </h1>
        <h4><em>Monstrão saindo da jaula!</em></h4>
        <router-view></router-view>
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>IP Address</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users">
                    <td>{{ user.id }}</td>
                    <td>{{ user.first_name }} {{ user.last_name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.ip_address }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>