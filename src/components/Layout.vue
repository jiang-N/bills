<template>
    <div class="nav-wrapper">
        <div class="content">
            <slot></slot>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Layout'
    };
</script>

<style lang="scss" scoped>
    .nav-wrapper {
        display: flex;
        flex-direction: column;
        border: 1px solid green;
        height: 100vh;
    }

    .content {
        overflow: auto;
        border: 1px solid blue;
        flex-grow: 1;
    }
</style>