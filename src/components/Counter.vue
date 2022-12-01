<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">Counter</p>
        <p class="fst-italic">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
          corrupti unde! Libero amet quibusdam nobis quo nesciunt alias est
          omnis. Consequatur vel corrupti, magni dolores vero fuga voluptatibus.
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <p class="h3 display-3">{{ count }}</p>
            <button class="btn btn-success m-1" @click="increment">
              Increment
            </button>
            <button class="btn btn-warning m-1" @click="decrement">
              Decrement
            </button>
            <button class="btn btn-danger m-1" @click="incrementBy(5)">
              Increment By
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count = this.count + 1;
    },
    decrement() {
      this.count = this.count - 1;
    },
    incrementBy(value) {
      this.count = this.count + value;
    },
  },
};
</script>

<style scoped></style>
