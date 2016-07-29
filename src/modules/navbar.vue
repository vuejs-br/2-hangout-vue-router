
<template>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <a class="navbar-brand" href="#">BIRL</a>
      <ul class="nav navbar-nav">
          <li>
              <a v-link="{ name: 'dashboard' }">Dashboard</a>
          </li>
          <li>
              <a v-link="{ name: 'users' }">Usuários</a>
          </li>
      </ul>
    </nav>
</template>