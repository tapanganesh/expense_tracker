import {useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiOutlineLogin } from "react-icons/ai";
import {userLogin} from "../Slices/User";
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from "react-router-dom"
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let dispatch=useDispatch();
  let {userObj,isError, isLoading, isSuccess, errMsg }=useSelector((state) => state.user);
  let navigate=useNavigate();
  const onFormSubmit = (userCredObj) => {
    dispatch(userLogin(userCredObj));
  };
   useEffect(() => {
     if (isSuccess) {
       navigate("/home");
     }
   }, [isSuccess, isError]);
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
            Login <AiOutlineLogin />
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
