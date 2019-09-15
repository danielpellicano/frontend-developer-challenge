import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueScrollTo from 'vue-scrollto';

Vue.use(VueAxios, axios)
Vue.use(VueScrollTo)

export default{
    state:{
      products: '',
      loader: false,
      next_page: null,
      base_url: 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products',
      next_scroll: ''
    },

    mutations:{
        ALTER_STATE_LOADER (state, response) {
          state.loader = response
        },
        ALTER_STATE_PRODUCT (state, response) {
          state.products = response
        },
        ALTER_STATE_NEXT_PAGE (state, response){
            state.next_page = response
        },
        ALTER_STATE_NEXT_SCROLL (state, response) {
            state.next_scroll = response
        }
      },

      actions:{
        GET (context) {
        axios.get(this.state.product.base_url)
          .then((response) => {
            context.commit('ALTER_STATE_NEXT_PAGE',response.data.nextPage)
            context.commit('ALTER_STATE_PRODUCT',response.data.products)
            context.commit('ALTER_STATE_LOADER', false)
            
            }).finally(() => {
                context.commit('ALTER_STATE_LOADER', false)
            });
        },
        GET_WITH_PAGINATION(context) {
            
            axios.get('https://' + this.state.product.next_page)
            .then((response) => {
                context.commit('ALTER_STATE_NEXT_PAGE',response.data.nextPage)
                
                let count = 0;
                response.data.products.forEach(element => {
                    if (count == 0) {
                        var d = new Date();
                        element.hash = d.getTime()
                        element.hash = btoa(element.hash)

                        context.commit('ALTER_STATE_NEXT_SCROLL', element.hash)
                    
                    } else {
                        element.hash = '';
                    }
                    this.state.product.products.push(element);

                    context.commit('ALTER_STATE_PRODUCT', this.state.product.products)
                    count++;
                });
                
            }).finally(() => {
               context.commit('ALTER_STATE_LOADER', false)
                setTimeout(() => {
                    let element = document.getElementById(this.state.product.next_scroll)
                    
                    VueScrollTo.scrollTo(element, 1000, {
                        
                    })
                }, 300);
            });
      
          }
      },

}