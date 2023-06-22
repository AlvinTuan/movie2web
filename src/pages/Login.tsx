import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

type FormData = {
  username: string;
  password: string;
};

const schema = yup.object({
  username: yup.string().required("Required"),
  password: yup.string().required("Required"),
});

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: yupResolver(schema), mode: "onChange" });
  const onSubmit = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
        navigate("/home");
      }, 1000);
    });
  };
  return (
    <div className="login-box w-[380px] mx-auto mt-36">
      <img
        src="/Layer_1.png"
        alt=""
        className="object-cover block mx-auto select-none"
      />
      <h2 className="my-9 text-center font-bold text-2xl select-none">
        Sign in
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="p-4 rounded-md border border-gray-100 text-black"
            {...register("username")}
          />
          {errors?.username && (
            <div className="text-red-500 text-sm">
              {errors.username?.message}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="p-4 rounded-md border border-gray-100 text-black"
            {...register("password")}
          />
          {errors?.username && (
            <div className="text-red-500 text-sm">
              {errors.username?.message}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "LOGIN"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
