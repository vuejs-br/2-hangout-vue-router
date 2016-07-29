
<template>
    <form action="#" class="well">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="" class="control-label">First Name</label>
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="" class="control-label">Last Name</label>
                    <input type="text" class="form-control">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="" class="control-label">E-mail</label>
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="" class="control-label">IP</label>
                    <input type="text" class="form-control">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <button class="btn btn-xs btn-primary">Salvar</button>
            </div>
            <div class="col-md-6 text-right">
                <button type="button" @click="$router.go({ name: 'users' })" class="btn btn-xs btn-default">Cancelar</button>
            </div>
        </div>
    </form>
</template>

<style scoped>
    form {
        margin-bottom: 20px;
    }
</style>