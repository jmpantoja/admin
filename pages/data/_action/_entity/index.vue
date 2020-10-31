<template>
  <component v-bind:is="admin.dataList"/>
</template>

<script>
import TagList from "~/components/admin/Tag/TagList";


export default {
  components: {
    TagList
  },

  validate({params}) {
    const action = params.action ?? null;
    return ['list', 'create'].includes(action)
  },
}
</script>
