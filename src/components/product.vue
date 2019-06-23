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
<style>

</style>
