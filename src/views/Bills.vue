<template>
    <Layout class-prefix="layout">
        <NumberPad/>
        <Types xxx="hi"/>
        <Notes/>
        <Tags/>

    </Layout>
</template>

<script lang="ts">
    import NumberPad from '@/components/Bills/NumberPad.vue';
    import Types from '@/components/Bills/Types.vue';
    import Notes from '@/components/Bills/Notes.vue';
    import Tags from '@/components/Bills/Tags.vue';

    export default {
        name: 'Bills',
        components: {Tags, Notes, Types, NumberPad}
    };
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>

