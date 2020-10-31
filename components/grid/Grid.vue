<template>
  <v-container>
    <v-toolbar class="ma-3" flat>
      <v-toolbar-title v-if="title" class="text-h3 font-weight-thin" style="height: 1.5em;">
        {{ title }}
      </v-toolbar-title>

      <v-spacer/>

      <v-btn icon color="primary">
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <v-menu offset-y class="ml-1">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon color="primary" v-bind="attrs" v-on="on">
            <v-icon>mdi-arrow-down-bold-outline</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in formats" :key="index">

            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <span>{{ item.name }}</span>
            </v-list-item-content>

          </v-list-item>


        </v-list>
      </v-menu>

      <v-btn icon color="primary">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card class="elevation-3 ma-3">
      <v-data-table
          fixed-header
          height="calc(100vh - 325px)"
          hide-default-footer
          :headers="headers"
          :items="items"
          :options.sync="options"
          :items-per-page="itemsPerPage"
          :page.sync="page"
          @page-count="pageXX = $event"
      >

        <template
            v-for="header in headers "
            v-key="header.value"
            :slot="'header.' + header.value"
            slot-scope="{header}"
        >
          <slot :name="'header.' + header.value" v-bind:header="header">
            {{ header.text }}
          </slot>
        </template>

        <template
            v-for="header in headers "
            v-key="header.value"
            :slot="'item.' + header.value"
            slot-scope="{item}"
        >
          <slot :name="'item.' + header.value" v-bind:item="item" v-bind:header="header">
            {{ item[header.value] }}
          </slot>
        </template>

      </v-data-table>
      <div class="pa-2 text-center" v-if="pageXX > 1">
        <v-pagination
            class="ma-2"
            v-model="page"
            :length="pageXX"
            total-visible="6"
        ></v-pagination>
      </div>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: "grid",
  props: {
    title: {
      type: String
    },
    formats: {
      type: Array,
      default: () => [],
    },
    headers: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
    itemsPerPage: {
      type: Number,
      default: () => 10,
    }
  },
  data() {
    return {
      page: 1,
      pageXX: 0,
      options: {},
    }
  }
}
</script>

<style scoped>

</style>
