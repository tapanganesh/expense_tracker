import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiOutlineLogin } from "react-icons/ai";
import axios  from "axios";
function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (userObj) => {
    console.log(userObj)
    axios
      .post("http://localhost:4000/user/createUser", userObj)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        console.log("error-",error);
      });
  };
  return (
    <div className="mt-5 container w-50 p-3">
      <div className="w-50 mx-auto border p-3">
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              {...register("username", { required: true })}
            />
            {errors.username && <p className="text-danger">*Field mandatory</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && <p className="text-danger">*Field mandatory</p>}
          </Form.Group>
          <Button variant="primary" type="submit">
            Signup <AiOutlineLogin />
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
