<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">Employees</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          voluptas suscipit maiores ipsa. Dolore sit, doloribus dolor tempore
          fuga ipsum ex, quam minima, totam inventore animi excepturi rem ullam
          deleniti?
        </p>
      </div>
    </div>
  </div>

  <!-- <pre>{{ employees }}</pre> -->
  <div class="container">
    <div class="row">
      <div class="col-md-6"></div>
      <ul class="list-group">
        <li
          v-for="employee of employeeState.employees"
          :key="employee.id"
          class="list-group-item list-group-item-success"
        >
          <input
            :checked="employee.isSelected"
            @change="updateSelected(employee.id)"
            type="checkbox"
            class="form-check-input"
          />
          {{ employee.name }}
        </li>
      </ul>
    </div>

    <div class="col-md-6">
      <div v-for="employee of employeeState.employees" :key="employee.id">
        <div v-if="employee.isSelected" class="card my-2">
          <div class="card-body list-group-item-success">
            <ul class="list-group">
              <li class="list-group-item">
                Id: <span class="fw-bold">{{ employee.id }}</span>
              </li>
              <li class="list-group-item">
                Name: <span class="fw-bold">{{ employee.name }}</span>
              </li>
              <li class="list-group-item">
                Email: <span class="fw-bold">{{ employee.email }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "VuexEmployees",
  methods: {
    updateSelected(empId) {
      this.$store.dispatch("employeeModule/changeSelected", { empId });
    },
  },
  computed: mapGetters({
    employeeState: "getEmployeeState",
  }),
};
</script>

<style scoped></style>
