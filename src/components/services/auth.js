import axios from "axios";
import { toast } from "react-toastify";

export const registerApi = async (values) => {
  await axios
    .post("http://localhost:8000/api/v1/user/register", {
      email: values.email,
      password: values.password,
      username: values.username,
      mobile: values.mobile,
      city: values.city,
      state: values.state,
      pincode: values.pincode,
    })
    .then((response) => {
      console.log("response", response);
      if (response.status == 200) {
        return response.data;
      }
    })
    .catch((error) => {
      console.log(error);
      toast(error);
    });
};

export const loginApi = async (values) => {
  await axios
    .post("http://localhost:8000/api/v1/user/login", {
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      console.log("response", response);
      if (response.status == 200) {
        return response.data;
      }
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
