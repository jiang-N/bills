<template>
    <div class="tags">
        <div class="new">
            <button @click="createTag">新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in tagList" :key="tag.id" :class="{selected: selectTags.indexOf(tag.name) >= 0}"
                @click="toggle(tag.name)">{{tag.name}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component} from 'vue-property-decorator';
    import {mixins} from 'vue-class-component';
    import {TagHelper} from '@/mixins/TagHelper';

    @Component
    export default class Tags extends mixins(TagHelper) {
        selectTags: string[] = [];

        get tagList() {
            return this.$store.state.tagList;
        }

        created() {
            this.$store.commit('fetchTags');
        }

        toggle(tag: string) {
            const index = this.selectTags.indexOf(tag);
            if (index >= 0) {
                this.selectTags.splice(index, 1);
            } else {
                this.selectTags.push(tag);
            }
            this.$emit('update:value', this.selectTags);
        }
    }
</script>

<style lang="scss" scoped>
    .tags {
        background: white;
        font-size: 14px;
        padding: 16px;
        display: flex;
        flex-direction: column-reverse;
        flex-grow: 1;

        > .current {
            display: flex;
            flex-wrap: wrap;

            > li {
                $bg: #d9d9d9;
                background: $bg;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 16px;
                margin-right: 12px;
                margin-top: 4px;

                &.selected {
                    background: darken($bg, 50%);
                    color: white;
                }
            }
        }

        > .new {
            padding-top: 16px;

            button {
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
                padding: 0 4px;
            }
        }
    }
</style>