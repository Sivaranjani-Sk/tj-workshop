import axios from "axios";
import { toast } from "react-toastify";

export const registerApi = async (values) => {
  try {
    const response = await axios.post("http://localhost:3000/user/register", {
      email: values.email,
      password: values.password,
      username: values.username,
      mobile: values.mobile,
      city: values.city,
      state: values.state,
      pincode: values.pincode,
    });
    return response;
  } catch (error) {
    console.log(error);
    toast(error);
  }
};

export const loginApi = async (values) => {
  try {
    const response = await axios.post("http://localhost:3000/user/login", {
      email: values.email,
      password: values.password,
    });
    return response;
  } catch (error) {
    console.log(error);
    toast(error);
  }
};
