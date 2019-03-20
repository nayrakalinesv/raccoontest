<template>
    <div class="product">
        <div class="category">
            <div class="title">Categoria</div>
            <div class="value">
                {{ product.category }}
            </div>
        </div>
        <div class="image-container">
            <img :src="product.image_url" alt="">
        </div>
        <div class="info-container">
            <div class="name-quantity">
                <div class="name">
                    {{ product.name }}
                </div>
                <div class="quantity">
                    x{{ product.quantity }}
                </div>
            </div>
            <div class="price">
                R${{ product.price }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
            default: null
        }
    }
}
</script>

<style lang="scss" scoped>
    .product {
        padding: 1em;
        box-shadow: 0 10px 10px #eeeeee99;
        .category {
            text-align: right;
            .title {
                font-weight: 600;
                color: #888;
            }
            .value {
                font-size: 11pt;
                color: #AAA;
            }
        }
        .image-container {
            text-align: center;
            img {
                width: 300px;
            }
        }
        .info-container {
            display: grid;
            margin-top: 2em;
            grid-template-columns: 1fr 200px;
            .name-quantity{
                .name {
                    font-weight: 600;
                    color: #333;
                }
                .quantity {
                    font-size: 16pt;
                    color: #666;
                }
            }   
            .price {
                text-align: center;
                font-size: 18pt;
            }
        }
    }
</style>
