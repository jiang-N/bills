<template>
    <nav>
        <router-link to="/bills" class="item" active-class="selected">
            <Icon name="bills"></Icon>
            记账
        </router-link>
        <router-link to="/labels" class="item" active-class="selected">
            <Icon name="labels"></Icon>
            标签
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
            <Icon name="statistics"></Icon>
            统计
        </router-link>
    </nav>

</template>

<script lang="ts">
    export default {
        name: 'Nav'
    };
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    nav {
        @extend %outerShadow;
        display: flex;
        flex-direction: row;
        font-size: 12px;

        > .item {
            padding: 2px 0;
            width: 33.33333%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .icon {
                width: 32px;
                height: 32px;
            }
        }

        > .item.selected {
            color: $color-highlight;
        }
    }
</style>