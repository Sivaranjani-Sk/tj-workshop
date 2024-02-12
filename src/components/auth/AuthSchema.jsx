import * as yup from "yup";

export const SignupSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email address is mandatory"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is  mandatory"),
  username: yup
    .string()
    .min(2, "First name should have at least 2 characters")
    .max(25, "The maximum character limit is 25")
    .required("First name is mandatory"),
  country: yup.string().required("Country is mandatory"),
  mobile: yup
    .string()
    .matches(/^[0-9]+$/, "Enter only numbers")
    .min(10, "Mobile number should have at least 10 characters")
    .max(10, "The maximum character limit is 10")
    .required("Mobile number is mandatory"),
  state: yup
    .string()
    .max(75, "The maximum character limit is 75")
    .required("State is mandatory"),
  city: yup
    .string()
    .max(75, "The maximum character limit is 75")
    .required("City is mandatory"),
  pincode: yup
    .string()
    .matches(/^[0-9]+$/, "Enter only numbers")
    .min(6, "pincode number should have at least 6 characters")
    .max(6, "The maximum character limit is 6")
    .required("pincode number is mandatory"),
});
