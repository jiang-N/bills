<template>
    <Layout class-prefix="layout">
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
        <Types :value.sync="record.type"/>
        <div class="notes">
            <FormItem field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNotes"/>
        </div>
        <Tags/>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import NumberPad from '@/components/Bills/NumberPad.vue';
    import Types from '@/components/Bills/Types.vue';
    import FormItem from '@/components/Bills/FormItem.vue';
    import Tags from '@/components/Bills/Tags.vue';

    @Component({
        components: {Tags, FormItem, Types, NumberPad},
        computed: {
            recordList() {
                return this.$store.state.recordList;
            }
        }
    })
    export default class Bills extends Vue {
        record: RecordItem = {
            tags: [], notes: '', type: '-', amount: 0
        };

        created() {
            this.$store.commit('fetchRecords');
        }

        onUpdateNotes(value: string) {
            this.record.notes = value;
        }

        saveRecord() {
            this.$store.commit('createRecord', this.record);
        }
    }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;

        > .notes {
            padding: 12px 0;
        }
    }

</style>

