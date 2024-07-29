<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div>
        <div>
          <h3>Login</h3>
          <hr />
        </div>
        <form @submit.prevent="onLogin()">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="email"
            />
            <div class="error" v-if="errors.email">{{ errors.email }}</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="password"
            />
            <div class="error" v-if="errors.password">{{ errors.password }}</div>
          </div>
          <div class="my-3">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SignupValidations from "@/services/SignupValidations";
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    onLogin() {
      let validations = new SignupValidations(this.email, this.password);
      this.errors = validations.checkValidations();
      if (this.errors.length) {
        return false;
      }
    },
  },
};
</script>
