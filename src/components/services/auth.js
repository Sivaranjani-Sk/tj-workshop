import axios from 'axios';
import { toast } from 'react-toastify';

export const registerApi = async (values) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/user/register',
      {
        email: values.email,
        password: values.password,
        username: values.username,
        mobile: values.mobile,
        city: values.city,
        state: values.state,
        pincode: values.pincode,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    toast(error.message);
  }
};

export const loginApi = async (values) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/user/login',
      {
        email: values.email,
        password: values.password,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    toast(error.message);
  }
};
export const forgotpasswordApi = async (values) => {
  try {
    if (values.password === values.confirmPassword) {
      const response = await axios.post(
        'http://localhost:3000/user/forgot-password',
        {
          email: values.email,
          password: values.password,
        }
      );
      console.log('response', response);
      if (response.status === 200) {
        toast(response.data.message);
      }
    } else {
      toast("Passwords don't match");
    }
  } catch (error) {
    console.error(error);
    toast(
      error.response
        ? error.response.data.message
        : 'An error occurred while changing the password'
    );
  }
};
