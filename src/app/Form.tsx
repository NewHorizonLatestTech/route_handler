"use client";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formHandler = async (data: any) => {
    console.log(data);
    await fetch("/api/formHandler" ,{
        method:"POST",
        body: JSON.stringify(data)
    })
  };

  return (
    <>
      <div className="mx-10 my-10">
        <center>
          <form className="" onSubmit={handleSubmit(formHandler)}>
            <div className="">
              <br />
              <label htmlFor="">Email</label>
              <br />
              <input
                type="email"
                className="border h-10 w-72 rounded ring-1 ring-blue-500"
                {...register("email")}
                placeholder="Enter your email"
              />
            </div>

            <div className="">
              <br />
              <label htmlFor="">Password</label>
              <br />
              <input
                type="password"
                className="border h-10 w-72 rounded ring-1 ring-blue-500"
                {...register("password", {
                  required: true,
                })}
                placeholder="Enter your password"
              />

              {errors.password && errors.password.type === "required" && (
                <p className="errorMsg">Password is required.</p>
              )}
            </div>
            <br />
            <div className="">
              <button type="submit" className="border border-red-500 p-3 rounded hover:bg-red-400">
                Submit
              </button>
            </div>
          </form>
        </center>
      </div>
    </>
  );
};

export default Form;
