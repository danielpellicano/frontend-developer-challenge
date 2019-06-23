 <template>
    <div>
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
            
            <div class="row" v-else-if="products.length == 0 && loader == false">
                <div class="col-md-12">
                    <h2>Ainda não temos produtos</h2>
                    
                </div>
            </div>
            <div v-if="loader" class="row">
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
body{
  margin: 0;
  padding: 0;
  overflow : hidden;
}

.lod{
  display: flex;
	align-items: center;
	justify-content: center;
  height: 100vh;
  background:#FFF;
 
}
.lo{
   animation: anim  1s linear Infinite;
}
.line1{
    position: absolute;
    top:0;
    right:0;
    width: 100%;
    height: 1vh;
    background: linear-gradient(to right , #0c002b,#1779ff);
    animation: anim1 2s linear infinite;
    overflow: hidden;
}
.line2{
    position: absolute;
    bootom:0;
    right:0;
    width: 1vh;
    height: 100%;
    background: linear-gradient(to bottom , #0c002b,#1779ff);
    animation: anim2 2s linear infinite;
    overflow: hidden;
}
.line3{
      position: absolute;
    bottom:0;
    left:0;
    width: 100%;
    height: 1vh;
    background: linear-gradient(to left , #0c002b,#1779ff);
    animation: anim3 2s linear infinite;
    overflow: hidden;
}
.line4{
    position: absolute;
   bottom:0;
   left:0;
   width: 1vh;
    height: 100%;
    background: linear-gradient(to top , #0c002b,#1779ff);
    animation: anim4 2s linear infinite;
    overflow: hidden;
}
/*1*/
.load{
   display: flex;
   align-items: center;
   justify-content: center;
   width: 170px;
   height: 170px;

    border-radius: 50%;
   position: relative;
  animation: colors 1s linear Infinite;
  
}
.load:after , .load:before{
    content: " " ;
    width: 85px;
    height: 85px;
    background:#FFF;
    position: absolute;
    
}
.load:after{
    top:0px;
    left:0px;
   border-radius:80% 0   0  0;
}
.load:before{
  bottom:0px;
  right: 0px;
  border-radius: 0   0 80% 0 ;
}
.animat{
    width: 140px;
    height: 140px;
    background:#FFF;
    position: absolute;
    border-radius: 50%;
}
/*2*/
.load-mini{
  animation: colors  3s linear Infinite;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 130px;
   height: 130px;
  
   border-radius: 50%;
   position :absolute;
   z-index: 15;
   top:5px;
   left:5px;
   bottom:5px;
   right:5px;
    transform: rotate(90deg);
}
.load-mini:after , .load-mini:before{
    content: " " ;
    width: 65px;
    height: 65px;
    border-radius:0 0;
    background:#FFF;
    position: absolute;

}
.load-mini:after{
    top:0px;
     left:0px;
   z-index: 15;
   border-radius:80% 0   0  0;
}
.load-mini:before{
  bottom:0px;
  right: 0px;
   z-index: 15;
   border-radius: 0   0 80% 0 ;
}
.animat-mini{
    width: 100px;
    height: 100px;
    background:#FFF;
    position: absolute;
    border-radius: 50%;
}
/*3*/
.load-mini2{
  animation: colors  3s linear Infinite;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 90px;
   height: 90px;
   
   border-radius: 50%;
   position :absolute;
   z-index: 45;
   top:5px;
   left:5px;
   bottom:5px;
   right:5px;
    transform: rotate(90deg);
}
.load-mini2:after , .load-mini2:before{
    content: " " ;
    width: 45px;
    height: 45px;
    border-radius:0 0;
    background:#FFF;
    position: absolute;

}
.load-mini2:after{
    top:0px;
     left:0px;
   z-index: 45;
   border-radius:80% 0   0  0;
}
.load-mini2:before{
  bottom:0px;
  right: 0px;
   z-index: 45;
   border-radius: 0   0 80% 0 ;
}
.animat-mini2{
    width: 70px;
    height: 70px;
    background:#FFF;
    position: absolute;
    border-radius: 50%;
}
/*4*/

.load-mini3{
  animation: colors  3s linear Infinite;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 60px;
   height: 60px;
  
   border-radius: 50%;
   position :absolute;
   z-index: 65;
   top:5px;
   left:5px;
   bottom:5px;
   right:5px;
    transform: rotate(90deg);
}
.load-mini3:after , .load-mini3:before{
    content: " " ;
    width: 30px;
    height: 30px;
    border-radius:0 0;
    background:#FFF;
    position: absolute;

}
.load-mini3:after{
    top:0px;
     left:0px;
   z-index: 60;
   border-radius:80% 0   0  0;
}
.load-mini3:before{
  bottom:0px;
  right: 0px;
   z-index: 60;
   border-radius: 0   0 80% 0 ;
}
.animat-mini3{
    width: 40px;
    height: 40px;
    background:#FFF;
    position: absolute;
    border-radius: 50%;
}
/*5*/

.load-mini4{
  animation: colors  3s linear Infinite;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 30px;
   height: 30px;
   
   border-radius: 50%;
   position :absolute;
   z-index: 70;
   top:5px;
   left:5px;
   bottom:5px;
   right:5px;
   transform: rotate(90deg);
}
.load-mini4:after , .load-mini4:before{
    content: " " ;
    width: 15px;
    height: 15px;
    border-radius:0 0;
    background:#FFF;
    position: absolute;

}
.load-mini4:after{
   top:0px;
   left:0px;
   z-index: 70;
   border-radius:80% 0   0  0;
}
.load-mini4:before{
  bottom:0px;
  right: 0px;
   z-index: 70;
   border-radius: 0   0 80% 0 ;
}
.animat-mini4{
    width: 10px;
    height: 10px;
    background:#FFF;
    position: absolute;
    border-radius: 50%;
}
@keyframes anim {
  to{
     transform: rotate(360deg);
  }
}
@keyframes colors {
   0%{
      background-image: radial-gradient(circle, #5f0caa, #da0076, #ff372e, #ef9f00,       #a8eb12);
      
  }
   25%{
      background-image: linear-gradient(to right top, #5f0caa, #da0076, #ff372e,         #ef9f00, #a8eb12);
     
  }
   50%{
      background-image: linear-gradient(to right, #5f0caa, #da0076, #ff372e,             #ef9f00, #a8eb12);
     
  }
   75%{
      background-image: linear-gradient(to right bottom, #5f0caa, #da0076, #ff372e,       #ef9f00, #a8eb12);
      
  }
   100%{
     background-image: linear-gradient(to bottom, #5f0caa, #da0076, #ff372e,            #ef9f00, #a8eb12);
      
  }
}
@keyframes anim1 {
    0%{
        transform: translateX(-100%);
    }
    100%{
        transform: translateX(100%);
    }
}
@keyframes anim2 {
    0%{
        transform: translateY(-100%);
    }
    100%{
        transform: translateY(100%);
    }
}
@keyframes anim3 {
    0%{
        transform: translateX(100%);
    }
    100%{
        transform: translateX(-100%);
    }
}
@keyframes anim4 {
    0%{
        transform: translateY(100%);
    }
    100%{
        transform: translateY(-100%);
    }
}

</style>