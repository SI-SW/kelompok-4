import { defineStore } from "pinia";

import * as s$todo from '@/services/dashboard/todo';

const d$todo = defineStore({
    id: 'todo',
    state: () => ({
        list: [],
    }),
    actions: {
        async a$add(body) {
            try {
              await s$todo.add(body);
            } catch (e) {
              console.error('actions todo add error', e);
              throw e;
            }
        },
        async a$del(id) {
          try {
            await s$todo.del(id);
          } catch (e) {
            console.error('actions to do edit error', e);
            throw e;
          }
        },
    },
    getters: {
        
    },
});

export default d$todo;