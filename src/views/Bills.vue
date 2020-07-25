<template>
    <Layout class-prefix="layout">
        <NumberPad/>
        <Types/>
        <Notes/>
        <Tags :data-source="tags"/>

    </Layout>
</template>

<script>
    import NumberPad from '@/components/Bills/NumberPad.vue'
    import Types from '@/components/Bills/Types.vue'
    import Notes from '@/components/Bills/Notes.vue'
    import Tags from '@/components/Bills/Tags.vue'

    export default {
        name: 'Bills',
        components: {Tags, Notes, Types, NumberPad},
        data() {
            return {
                tags: ['衣', '食', '住', '行', '玩']
            }
        }
    }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>

