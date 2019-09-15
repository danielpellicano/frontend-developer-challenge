<template>
<div class="container">
    <h3>Compartilhe a novidade</h3>
    <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
    <form>
        <div class="row">
            <div class="col-md-6">
                <label>Nome do seu amigo:</label>
                <input type="text" v-model="name" required>
            </div>
            <div class="col-md-6">
                <label>E-mail:</label>
                <input type="text" v-model="email" required>
                <p class="red-text" v-if="validate">{{validate}}</p>

            </div>
        </div>
        <div class="row">
            <div class="col-md-12" v-if="enableSubmit">
                <input class="enviarForm" type="submit" value="Enviar agora">
            </div>
           <div v-else class="col-md-12" >
               <input class="enviarForm"  value="Enviar agora">
           </div>
        </div>
    </form>
</div>
</template>

<script>

export default {
    data() {
        return {
            email: '',
            name: '',
            validate: '',
            enableSubmit: false,
        }
    },
    watch: {
        email() {
            if (!this.validateEmail(this.email) ) {
                this.validate = 'Digite um email válido'
            } else {
                this.validate = '';
                this.enableSubmit = true
            }
        }
    },
    methods: {
        validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
    },
}

</script>

<style  scoped>

.compartilheNovidade h3 {
    margin-bottom: 44px;
    font-size: 18px;
    color: #888888;
    font-weight: bold;
    text-align: center
}

.compartilheNovidade p {
    font-size:14px;
    color:#888888;
    text-align: center
}

.compartilheNovidade label {
    display:block;
    font-size: 12px;
    color: #888888;
}

.compartilheNovidade .col-md-6 {
    max-width: 340px;
    text-align: left;
    margin-bottom:50px;
}

.compartilheNovidade .col-md-6 input {
    width:100%;
    border: 1px solid #707070;
}

.compartilheNovidade .row {
    justify-content:center;
}

.compartilheNovidade .enviarForm {
    width:260px;
    height:39px;
    border:1px solid #707070;
    border-radius:4px;
    color:#888888;
    font-size:16px;
    background:none;
    margin: 0 auto;
    display: block;
    text-align: center;
}

.compartilheNovidade .enviarForm:hover{
    background: linear-gradient(110deg,#ff4427,#ffba00);
    color:#fff;
}
</style>