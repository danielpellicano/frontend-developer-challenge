<template>
<div>
    <header>
        <div class="container">
            <h1>uma seleção de produtos</h1>
            <h2>especial para você</h2>
            <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
            <b-navbar toggleable="lg" type="dark">

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item href="#">Conheça a Linx</b-nav-item>
                        <b-nav-item href="#">Ajude o algorítimo</b-nav-item>
                        <b-nav-item href="#">Seus produtos</b-nav-item>
                        <b-nav-item href="#">Compartilhe</b-nav-item>
                    </b-navbar-nav>

                </b-collapse>
            </b-navbar>
        </div>
    </header>
    <section class="produtos">
        <h3>Sua Seleção Especial</h3>
        <div class="container">
            <div class="row" v-if="this.$store.state.product.products && this.$store.state.product.loader == false">
                
                <div class="col-md-3" v-for="product in this.$store.state.product.products" :key="product.id">
                    <product :id="(product.hash) ? product.hash : '' " class="product" v-bind:product="product" />
                </div>
                <div class="col-md-12">
                    <button @click="getProducts" class="maisProdutos">Ainda mais produtos aqui!</button>
                </div>
            </div>

            <div v-if="this.$store.state.product.loader" class="row">
                <div class="col-md-3 mt-2" v-for="product in this.$store.state.product.products" :key="product.id">
                    <loader></loader>
                </div>
                <div class="col-md-3 mt-2">
                    <div class="product card-laoder my-1">
                    </div>
                </div>
                <div class="col-md-3 mt-2">
                    <div class="product card-laoder my-1">
                    </div>
                </div>
                <div class="col-md-3 mt-2">
                    <div class="product card-laoder my-1">
                    </div>
                </div>
                <div class="col-md-3 mt-2">
                    <div class="product card-laoder my-1">
                    </div>
                </div>
                <div class="col-md-3 mt-2">
                    <div class="product card-laoder my-1">
                    </div>
                </div>
                <div class="col-md-3 mt-2">
                    <div class="product card-laoder my-1">
                    </div>
                </div>
                <div class="col-md-3 mt-2">
                    <div class="product card-laoder my-1">
                    </div>
                </div>
                <div class="col-md-3 mt-2">
                    <div class="product card-laoder my-1">
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="compartilheNovidade">
        <shared></shared>
    </section>

    <footerComponent></footerComponent>
</div>
</template>

<script>
import product from '@/components/product/product'
import shared from '@/components/shared/shared';
import loader from '@/components/loader/loader';
import footerComponent from '@/components/footer/footer';
export default {
    name: 'homePage',
    components: {
        product,
        shared,
        loader,
        footerComponent
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            name: ''
        }
    },
    mounted() {
        this.getProducts();
    },

    methods: {
        getProducts() {
            this.$store.commit('ALTER_STATE_LOADER', true)

            if (this.$store.state.product.next_page != null) {
                
                this.$store.dispatch('GET_WITH_PAGINATION')
            } else {
                this.$store.dispatch('GET') 
            }
        },
    }
}
</script>

<style scoped>

.compartilheNovidade {
    text-align:center!important;
    margin-bottom:142.36px;
}
.produtos {
    padding-top:48.67px;
    padding-bottom:164px;
}

.produtos h3 {
    text-align:center;
    color:#888888;
    font-size:18px;
    font-weight: bold;
    margin-bottom: 50px;
}

.produtos .row {
    padding: 0 100px;
}

.produtos .img-product {
    display: flex;
    height: 150px;
    border: 1px solid #707070;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.produtos .boxProduto {
    max-width: 200px;
    margin-bottom:39px;
}

.produtos .boxProduto h4 {
    font-size:14px;
    color:#888888;
    margin-top:14px;
}

.produtos .boxProduto p {
    font-size:12px;
    margin-bottom: 13px;
    color:#888888;
}

.produtos .boxProduto .preco p {
    margin-bottom: 2px;
}

.produtos .boxProduto .preco strong  {
    font-size:16px;
    color:#888888;
    margin-bottom: 3px;
    display: block;
}

.produtos .boxProduto .preco span {
    font-size:12px;
    display:block;
    margin-bottom: 10px;
}

.produtos .boxProduto .btnComprar a {
    border: 1px solid #707070;
    display: block;
    border-radius: 4px;
    padding: 2px;
    font-size: 16px;
    text-align: center;
    color: #888888;
    text-decoration: none;
}

.produtos .boxProduto .btnComprar a:hover {
    background: linear-gradient(110deg,#ff4427,#ffba00);
    color:#fff;
}

.maisProdutos {
    width: 260px;
    height: 39px;
    background: none;
    border: 1px solid #707070;
    border-radius: 4px;
    margin: 0 auto;
    display: block;
    font-size: 16px;
    color: #888888;
}

.maisProdutos:focus{
    outline: none;
    box-shadow: none;
}

.maisProdutos:hover {
    background:#48185b;
    color:#fff;
}

.produtos .boxProduto .img-product figure:hover::before {
    -webkit-animation: shine .75s;
    animation: shine .75s;
}

.produtos .boxProduto .img-product:hover img {
    transform: scale(1.1);

}

.produtos .boxProduto .img-product figure::before {
    position: absolute;
    top: 0;
    left: -75%;
    z-index: 2;
    display: block;
    content: '';
    width: 50%;
    height: 100%;
    background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
    background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
    -webkit-transform: skewX(-25deg);
    transform: skewX(-25deg);
}

.produtos .boxProduto .img-product figure {
    margin:0;
    transition: all .2s ease-in-out;
}

.produtos .boxProduto .img-product figure img {
    height:100px;
    transition: all .2s ease-in-out;
    cursor:pointer;
}

.card-laoder{
  height: 300px;
  width: 100%;
  background: linear-gradient(to right, #eee 30%, #ddd 50%, #eee 70%);
  background-color: #eee;
  background-size: 400% 400%;
  animation: 1s shimmer infinite forwards;
}


</style>
