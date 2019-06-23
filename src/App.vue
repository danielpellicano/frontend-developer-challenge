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
            <div class="row" v-if="products.length > 0 && loader == false">
                <div class="col-md-3" v-for="product in products" :key="product.id">
                    <product :id="(product.hash) ? product.hash : '' " class="product" v-bind:product="product" />
                </div>
                <div class="col-md-12">
                    <button @click="getProducts" class="maisProdutos">Ainda mais produtos aqui!</button>
                </div>
            </div>
      
            <div v-if="loader" class="row">
                <div class="col-md-3 mt-2" v-for="product in products" :key="product.id">
                    <div class="product card-laoder my-1">
                        <!-- <img :src="require('@/assets/img/loader.gif')"> -->
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
                <div class="col-md-3 mt-2">
                    <div class="product card-laoder my-1">
                    </div>
                </div>
                
                
            </div>
        </div>
        </section>

        <section class="compartilheNovidade">
             <div class="container">
                <h3>Compartilhe a novidade</h3>
                <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
                <form>
                <div class="row">
                    <div class="col-md-6">
                        <label>Nome do seu amigo:</label>
                        <input type="text"  v-model="name" required>
                    </div>
                    <div class="col-md-6">
                        <label>E-mail:</label>
                        <input type="text"  v-model="email" required>
                        <p class="red-text" v-if="validate">{{validate}}</p>
                        
                    </div>
                </div>
                 <div class="row">
                    <div class="col-md-12">
                        <input type="submit" value="Enviar agora">
                    </div>
                </div>
                </form>
            </div>
        </section>

    <footer>
        <p>Testando suas habilidades em HTML, CSS e JS. Linx Impulse 2019</p>
        <p>Linx Impulse</p>
        <p>2019</p>
    </footer>
</div>
</template>
<script>
import product from '@/components/product'


export default {
    name: 'homePagina',
    components:{
        product
    },
    data(){
        return {
            products: [],
            email:'',
            validate: '',
            base_url: 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products',
            next_page: null,
            loader: false,
            publicPath: process.env.BASE_URL,
            next_scroll: ''
        }
    },
    mounted(){
        this.getProducts();
    },
    watch:{
        email (){
            if(!this.validateEmail(this.email) && this.email.length > 3 ){
                this.validate = 'Digite um email válido'
            }else{
                this.validate = '';
            }
        }
    },
  
    methods:{
         validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        getProducts(){
            this.loader = true; 
            if(this.next_page != null){
                this.axios.get('https://'+ this.next_page).then((response) => {
                    this.next_page = response.data.nextPage;
                    let count = 0
                    response.data.products.forEach(element => {
                        if(count == 0){
                            var d = new Date();
                            element.hash = d.getTime()
                            element.hash = btoa(element.hash)
                            this.next_scroll = element.hash;
                        }else{
                            element.hash = '';
                        }
                        this.products.push(element);
                        
                        
                    });
                }).finally(()=>{
                    this.loader = false;
                    setTimeout(() => {
                        let element = document.getElementById(this.next_scroll);
                       
                        this.$scrollTo(element, 1000, {
                            offset: -140
                        })
                    }, 300);
                });
            }else{
                this.axios.get(this.base_url).then((response) => {
                    this.next_page = response.data.nextPage;
                    this.products = response.data.products;
                }).finally(()=>{
                    this.loader = false;
                });
            }
            
        },
    }
}
</script>
<style>


@font-face {
    font-family: 'Helvetica Neue';
    src: url('~@/assets/fonts/HelveticaNeue.eot');
    src: url('~@/assets/fonts/HelveticaNeue.eot?#iefix') format('embedded-opentype'),
        url('~@/assets/fonts/HelveticaNeue.woff2') format('woff2'),
        url('~@/assets/fonts/HelveticaNeue.woff') format('woff'),
        url('~@/assets/fonts/HelveticaNeue.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Helvetica Neue';
    src: url('~@/assets/fonts/HelveticaNeue-Bold.eot');
    src: url('~@/assets/fonts/HelveticaNeue-Bold.eot?#iefix') format('embedded-opentype'),
        url('~@/assets/fonts/HelveticaNeue-Bold.woff2') format('woff2'),
        url('~@/assets/fonts/HelveticaNeue-Bold.woff') format('woff'),
        url('~@/assets/fonts/HelveticaNeue-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

.card-laoder{
    height: 300px;
    width: 100%;

  background: linear-gradient(to right, #eee 30%, #ddd 50%, #eee 70%);
  background-color: #eee;
  background-size: 400% 400%;
  animation: 1s shimmer infinite forwards;
}

@keyframes shimmer {
  0% { background-position: 100% 0%; }
  100% { background-position: 0% 0%; }
}

</style>