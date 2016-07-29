

<script>
    import VedNavbar from './navbar.vue'
    export default {
        components: { VedNavbar },
    }
</script>

<template>
    <div>
        <ved-navbar></ved-navbar>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
