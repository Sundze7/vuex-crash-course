<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">User list</p>
        <p class="fst-italics">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          incidunt commodi laboriosam alias hic recusandae sint placeat
          molestiae, provident eum architecto nihil fuga quis quae optio vitae
          reprehenderit quo at?
        </p>
      </div>
    </div>
  </div>

  <div v-if="userState.loading" class="container">
    <div class="row">
      <div class="col">
        <spinner />
      </div>
    </div>
  </div>

  <div v-if="!userState.loading && userState.errorMessage" class="container">
    <div class="row">
      <div class="col">
        <p class="fw-bold text">{{ userState.errorMessage }}</p>
      </div>
    </div>
  </div>

  <div
    v-if="!userState.loading && userState.users.length > 0"
    class="container"
  >
    <div class="row">
      <div class="col">
        <table class="table table-hover text-center table-striped">
          <thead class="bg-secondary text-white">
            <tr>
              <th>SNo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Webside</th>
              <th>Company</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in userState.users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.website }}</td>
              <td>{{ user.company.name }}</td>
              <td>{{ user.address.city }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import { mapGetters } from "vuex";

export default {
  name: "VuexUserList",
  components: { Spinner },
  created() {
    this.$store.dispatch("usersModule/getUsers");
  },
  computed: mapGetters({
    userState: "getUsersState",
  }),
};
</script>

<style scoped></style>
