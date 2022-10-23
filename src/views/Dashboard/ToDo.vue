<script>
import { mapActions, mapState } from "pinia";
import d$todo from "@/stores/dashboard/todo";

export default {
  name: "ToDo",
  computed: {
    ...mapState(d$todo, ["g$list"]),
  },
  data: () => ({
    // Input
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
    async sendTodo() {
      try {
        await this.a$add({ name: this.input.name, description: this.input.description, category: this.input.category });
        await this.getList();
    } catch (e) {
        console.error("methods sendTodo error", e);
    }
    },
    async delTodo() {
      try {
        await this.a$del(this.input.id);
        await this.getList();
    } catch (e) {
        console.error("methods delTodo error", e);
    }
    },
    async editTodo() {
      try {
        await this.a$edit(this.input.id, { name: this.input.name, description: this.input.description, status: this.input.status });
        await this.getList();
    } catch (e) {
        console.error("methods editTodo error", e);
    }
    },
  },
  async created() {
    await this.getList();
  },
};
</script>

<template>
  <div>
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
          <input class="btn btn-success mx-2 px-5 ms-auto" type="button" value="Add" @click.prevent="sendTodo">
          <input class="btn btn-primary mx-2 px-5" type="button" value="Edit" @click.prevent="editTodo">
          <input class="btn btn-danger mx-2 px-5 me-auto" type="button" value="Delete" @click.prevent="delTodo">
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
          <tbody>
            <tr v-for="(item, index) in g$list" :keys="index">
              <td>
                <h6 class="mb-0 text-sm ps-3">{{ item.id }}</h6>
              </td>
              <td>
                <h6 class="mb-0 text-sm">{{ item.name }}</h6>
              </td>
              <td>
                <h6 class="mb-0 text-sm">{{ item.description }}</h6>
              </td>
              <td class="align-middle text-center text-sm">
                <span v-if="item.status == 'done'" class="badge badge-sm bg-gradient-success">{{ item.status }}</span>
                <span v-else class="badge badge-sm bg-gradient-secondary">{{ item.status }}</span>
              </td>
              <td>
                <h6 class="text-center mb-0 text-sm">{{ item.createdAt }}</h6>
              </td>
            </tr>
          </tbody>
      </table>
    </div>

  </div>
</template>