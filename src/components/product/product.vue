<template>
    <div v-if="product">
        <div class="boxProduto">
            <div class="img-product">
                <figure>
                    <img class="img-fluid" :src="product.image">
                </figure>
            </div>
        <h4>{{product.name}}</h4>
        <p>{{product.description}}</p>
        <div class="preco">
            <p>De: R$ {{ converteFloatMoeda(product.oldPrice.toFixed(2)) }}</p>
            <strong>Por: R$ {{converteFloatMoeda(product.price.toFixed(2))}}</strong>
            <span>ou 2 x de R$ {{converteFloatMoeda(divid_by(product.price))}}</span>
        </div>
        <div class="btnComprar">
            <a href="#">Comprar</a>
        </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'product',
    props: [
        'product'
    ],
    methods:{
      divid_by(a){
            var price = a / 2;
            return price.toFixed(2);

        },
         converteFloatMoeda(valor){
            var inteiro = null, decimal = null, c = null, j = null;
            var aux = new Array();
            valor = ""+valor;
            c = valor.indexOf(".",0);
            //encontrou o ponto na string
            if(c > 0){
                //separa as partes em inteiro e decimal
                inteiro = valor.substring(0,c);
                decimal = valor.substring(c+1,valor.length);
            }else{
                inteiro = valor;
            }
            
            //pega a parte inteiro de 3 em 3 partes
            for (j = inteiro.length, c = 0; j > 0; j-=3, c++){
                aux[c]=inteiro.substring(j-3,j);
            }
            
            //percorre a string acrescentando os pontos
            inteiro = "";
            for(c = aux.length-1; c >= 0; c--){
                inteiro += aux[c]+'.';
            }
            //retirando o ultimo ponto e finalizando a parte inteiro
            
            inteiro = inteiro.substring(0,inteiro.length-1);
            
            decimal = parseInt(decimal);
            if(isNaN(decimal)){
                decimal = "00";
            }else{
                decimal = ""+decimal;
                if(decimal.length === 1){
                    decimal = decimal+"0";
                }
            }
            valor = "R$ "+inteiro+","+decimal;
            return valor;

        }
    },
   
}

</script>
<style scoped>
 
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

</style>
