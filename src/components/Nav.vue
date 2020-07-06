<template>
    <div class="nav">
        <router-link to="/bills">
            <Icon name="bills"></Icon>
            记账
        </router-link>
        |
        <router-link to="/labels">
            <Icon name="labels"></Icon>
            标签
        </router-link>
        |
        <router-link to="/statistics">
            <Icon name="statistics"></Icon>
            统计
        </router-link>
    </div>

</template>

<script lang="ts">
    export default {
        name: 'Nav'
    };
</script>

<style lang="scss" scoped>
    .nav {
        border: 1px solid red;
    }
</style>