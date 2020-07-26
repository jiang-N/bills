<template>
    <Layout class-prefix="layout">
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
        <Types :value.sync="record.type"/>
        <Notes @update:value="onUpdateNotes"/>
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Watch} from 'vue-property-decorator';
    import NumberPad from '@/components/Bills/NumberPad.vue';
    import Types from '@/components/Bills/Types.vue';
    import Notes from '@/components/Bills/Notes.vue';
    import Tags from '@/components/Bills/Tags.vue';

    const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    type Record = {
        tags: string[];
        notes: string;
        type: string;
        amount: number;
        createdAt?: Date;
    }

    @Component({
        components: {Tags, Notes, Types, NumberPad}
    })
    export default class Bills extends Vue {
        tags = ['衣', '食', '住', '行', '玩'];
        recordList: Record[] = recordList;
        record: Record = {
            tags: [], notes: '', type: '-', amount: 0
        };

        onUpdateTags(value: string[]) {
            this.record.tags = value;
        }

        onUpdateNotes(value: string) {
            this.record.notes = value;
        }

        saveRecord() {
            const record2: Record = JSON.parse(JSON.stringify(this.record));
            record2.createdAt = new Date();
            this.recordList.push(record2);
        }

        @Watch('recordList')
        onRecordChange() {
            window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
        }
    }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>

