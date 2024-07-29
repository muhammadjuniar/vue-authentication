import { SIGNUP_ACTION } from "@/store/storeconstants";
import axios from "axios";

export default {
  async [SIGNUP_ACTION](_, payload) {
    let postData = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };
    let response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCDWoKgpwVkJziN6qFe0xGeDpFVMzMwzmM`,
      postData
    );

    console.log(response);
  },
};
