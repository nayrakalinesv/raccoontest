<template>
    <main id="products">
        <Product v-for="product in list" :key="product.id" :product="product" />
        <div id="loading" v-if="isLoading">
            Carregando...
        </div>
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
