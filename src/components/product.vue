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
            <p>De: R$ {{ product.oldPrice.toFixed(2) }}</p>
            <strong>Por: R$ {{product.price.toFixed(2)}}</strong>
            <span>ou 2 x de R$ {{divid_by(product.price)}}</span>
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

        }
    },
    formatReal( int ){
        var tmp = int+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
    }
}

</script>
<style>

</style>
