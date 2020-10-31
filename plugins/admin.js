import Vue from 'vue'

import admin from '~/admin/admin'

function install(Vue, options) {
    Vue.mixin({
        computed: {
            entity(){
              return this.$route.params.entity
            },
            admin() {
                return {
                    dataList: admin[this.entity].dataList,
                    form: admin[this.entity].form
                }
            }
        }
    })
}

Vue.use({install})
