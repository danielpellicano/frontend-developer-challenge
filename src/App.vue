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
                    <product class="product" v-bind:product="product" />
                </div>
                <div class="col-md-12">
                    <button @click="getProducts" class="maisProdutos">Ainda mais produtos aqui!</button>
                </div>
            </div>
      
            <div v-if="loader" class="row loading">
                <div class="line1">
  
</div>
<div class="line2">
  
</div>
<div class="line3">
  
</div>
<div class="line4">
    
</div>
<div class="lod">
<div class="lo">
<div class="load">
   <div class="animat">
       <div class="load-mini">
           <div class="animat-mini">
                <div class="load-mini2">
                     <div class="animat-mini2">
                          <div class="load-mini3">
                              <div class="animat-mini3">
                                  <div class="load-mini4">
                                      <div class="animat-mini4">
                                            
                                      </div>
                                  </div>
                              </div>
                          </div>                           
                    </div>
                </div>
          </div>
      </div>
  </div>
</div>
</div>
  </div>
            </div>
        </div>
        </section>

        <section class="compartilheNovidade">
             <div class="container">
                <h3>Compartilhe a novidade</h3>
                <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
                <div class="row">
                    <div class="col-md-6">
                        <label>Nome do seu amigo:</label>
                        <input type="text"  v-model="name">
                    </div>
                    <div class="col-md-6">
                        <label>E-mail:</label>
                        <input type="text"  v-model="email">
                        <p class="red-text" v-if="validate">{{validate}}</p>
                        
                    </div>
                </div>
                 <div class="row">
                    <div class="col-md-12">
                        <input type="submit" value="Enviar agora">
                    </div>
                </div>
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
            publicPath: process.env.BASE_URL
        }
    },
    mounted(){
        this.getProducts();
        event.preventDefault();
    },
  
    methods:{
        getProducts(){
            this.loader = true; 
            if(this.next_page != null){
                this.axios.get('https://'+ this.next_page).then((response) => {
                    this.next_page = response.data.nextPage;
                    response.data.products.forEach(element => {
                        this.products.push(element);
                    });
                }).finally(()=>{
                    this.loader = false;
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

</style>