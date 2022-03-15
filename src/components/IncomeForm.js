import React from "react";
import { addincome } from '../Slices/Income'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function IncomeForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch=useDispatch()
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let onFormSubmit = (obj) => {
    let actionobj=addincome(obj);
    dispatch(actionobj);
  };
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add Income
        <FontAwesomeIcon
          icon={faPlus}
          className="ms-2 text-success bg-light rounded-circle p-1"
        />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-success ">
          <h5 className="mx-auto text-white">Record Income</h5>
        </Modal.Header>
        <Modal.Body>
          <form className="" onSubmit={handleSubmit(onFormSubmit)}>
            <p className="lead fs-6">Save a new Income record.</p>
            <label htmlFor="name" className="fs-5 lead">
              Title
            </label>
            <input
              type="text"
              id="name"
              className="form-control w-75"
              placeholder="Title"
              {...register("title", { required: true })}
            />
            {errors.title?.type === "required" && (
              <p className="text-danger">*Feild can't be empty</p>
            )}
            <label htmlFor="am" className="fs-5 lead">
              Amount
            </label>
            <div className="input-group w-75">
              <span className="input-group-text">$</span>
              <input
                type="number"
                id="am"
                className="form-control w-75"
                placeholder=""
                {...register("amount", { required: true })}
              />
              {errors.amount?.type === "required" && (
                <p className="text-danger">*Field can't be empty</p>
              )}
            </div>

            <label htmlFor="dt" className="fs-5 lead">
              Date
            </label>
            <input
              type="date"
              id="dt"
              className="form-control w-75"
              placeholder="$"
              {...register("date", { required: true })}
            />
            {errors.date?.type === "required" && (
              <p className="text-danger">*Field can't be empty</p>
            )}
            <button
              type="submit"
              className="btn btn-success mt-2"
              onClick={handleClose}
            >
              Save
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default IncomeForm;
