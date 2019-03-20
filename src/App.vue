<template>
    <main id="products">
        <Product v-for="product in list" :key="product.id" :product="product" />
        <div id="loading" v-if="isLoading">
            Carregando...
        </div>

        <div class="lds-css ng-scope">
        <div class="lds-blocks" style="width:100%;height:100%"><div style="left:38px;top:38px;animation-delay:0s"></div><div style="left:80px;top:38px;animation-delay:0.125s"></div><div style="left:122px;top:38px;animation-delay:0.25s"></div><div style="left:38px;top:80px;animation-delay:0.875s"></div><div style="left:122px;top:80px;animation-delay:0.375s"></div><div style="left:38px;top:122px;animation-delay:0.75s"></div><div style="left:80px;top:122px;animation-delay:0.625s"></div><div style="left:122px;top:122px;animation-delay:0.5s"></div></div>

    </main>

</template>

<script>
import Product from '@/components/Product'
import axios from 'axios'

export default {
    components: {
        Product
    },
    data(){
        return {
            list: null,
            isLoading: true
        }
    },
    async mounted(){
        // Pegar produtos do servidor
        const { data } =  await axios.get('http://localhost:2811/products')
        this.list = data
        this.isLoading = false
    }
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,600');
        
    body {
        font-family: Roboto;
    }
</style>


<style lang="scss" scoped>
    #products {
        display: grid;
        padding: 1em;
        grid-gap: 1em;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    }

</style>

<style type="text/css">@keyframes lds-blocks {
  0% {
    background: #85a2b6;
  }
  12.5% {
    background: #85a2b6;
  }
  12.625% {
    background: #fdfdfd;
  }
  100% {
    background: #fdfdfd;
  }
}
@-webkit-keyframes lds-blocks {
  0% {
    background: #85a2b6;
  }
  12.5% {
    background: #85a2b6;
  }
  12.625% {
    background: #fdfdfd;
  }
  100% {
    background: #fdfdfd;
  }
}
.lds-blocks {
  position: relative;
}
.lds-blocks div {
  position: absolute;
  width: 40px;
  height: 40px;
  background: #fdfdfd;
  -webkit-animation: lds-blocks 1s linear infinite;
  animation: lds-blocks 1s linear infinite;
}
.lds-blocks {
  width: 200px !important;
  height: 200px !important;
  -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
  transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
}
</style></div>