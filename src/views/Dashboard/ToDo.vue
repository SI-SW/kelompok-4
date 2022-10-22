<script>
import { mapActions, mapState } from "pinia";
import d$todo from "@/stores/dashboard/todo";

export default {
  name: "ToDo",
  data: () => ({
    input: {
      id: "",
      name: "",
      description: "",
      status: "",
      category: "",
    },
  }),
  methods: {
    ...mapActions(d$todo, ["a$list", "a$add", "a$del", "a$edit"]),
    async getList() {
      try {
        await this.a$list();
      } catch (e) {
        console.error("methods getList error", e);
      }
    },
  },
  async created() {
    await this.getList();
  },
};
</script>

<template>
  <div class="card px-3 pb-3">
    <div class="card-header pb-0">
        <h6>To Do</h6>
      </div>
  </div>
</template>