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
  async delTodo() {
    try {
      await this.a$del(this.input.id);
      await this.getList();
    } catch (e) {
      console.error("methods delTodo error", e);
    }
  },
};
</script>

<template>
  <div class="card px-3 pb-3">
    <div class="card-header pb-0">
        <h6>To Do</h6>
    </div>
    <form>
        <input class="form-control w-50 m-auto mb-2" v-model="input.id" type="text" name="" id="" placeholder="id"/>
        <input class="form-control w-50 m-auto mb-2" v-model="input.name" type="text" name="" id="" placeholder="name" />
        <input class="form-control w-50 m-auto mb-2" v-model="input.description" type="text" name="" id="" placeholder="description" />
        <input class="form-control w-50 m-auto mb-2" v-model="input.category" type="text" name="" id="" placeholder="category" />
        <input class="form-control w-50 m-auto mb-2" v-model="input.status" type="text" name="" id="" placeholder="status" />
        <div class="w-50 d-flex m-auto mt-3">  
          <input class="btn btn-success mx-2 px-5 ms-auto" type="button" value="Add">
          <input class="btn btn-primary mx-2 px-5" type="button" value="Edit">
          <input class="btn btn-danger mx-2 px-5 me-auto" type="button" value="Delete">
        </div>
        <p class="text-center text-xs">keterangan :
          <br/>Add memerlukan name, description, dan category
          <br/>Edit memerlukan id, name, description, dan status
          <br/>Delete memerlukan id
        </p>
      </form>
      <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Name</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Description</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Status</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Created at</th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          
        </table>
  </div>
</template>