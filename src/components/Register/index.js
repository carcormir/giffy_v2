import { useState } from "react";
import registerService from "services/register";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "./Register.css";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [registered, setRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (values) => {
    setIsSubmitting(true);
    registerService(values).then(() => {
      setRegistered(true);
      setIsSubmitting(false);
    });
  };

  if (registered) {
    return <h4>Congratulations ✅! You've been successfully registered!</h4>;
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", { required: true })}
          className={errors.username ? "error" : ""}
          placeholder="Enter the username"
        />
        {errors.name && errors.name.type === "required" && (
          <span>This is required</span>
        )}

        <input
          id="password"
          {...register("password", {
            required: true,
            minLength: 3,
          })}
          className={errors.password ? "error" : ""}
          type="password"
          placeholder="Enter the password"
        />

        {errors.name && errors.name.type === "minLength" && (
          <span>The password is too short</span>
        )}

        <button className="btn" disabled={isSubmitting}>
          Register
        </button>
      </form>
    </>
  );
}
