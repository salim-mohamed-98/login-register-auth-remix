import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Form, Link, redirect, useNavigation } from "@remix-run/react";
import { useState } from "react";
import CompanyLogo from "~/components/CompanyLogo";
import { classNames } from "~/lib/utls";

export const action = async () => {
  // artificial delay
  await new Promise((f) => setTimeout(f, 3000));

  return "";
};

export default function Register() {
  const navigation = useNavigation();
  const isSubmitting = navigation.formAction === "/register";
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="text-center sm:mx-auto sm:w-full sm:max-w-sm">
        <CompanyLogo />

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register to create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form className="space-y-6" method="post">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                disabled={isSubmitting}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* password */}
          {/* <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>

                        <div className="mt-2">
                            <input
                                disabled={isSubmitting}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />

                        </div>
                    </div> */}

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>

            <div className="mt-2 flex w-full items-center gap-3 rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:text-sm sm:leading-6">
              <input
                disabled={isSubmitting}
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                className="w-max flex-1 border-none p-0 text-gray-900 outline-none placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6"
              />
              <button
                className=" h-5 w-5"
                onClick={() => toggleShowPassword()}
                type="button"
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password as plain text. Warning: this will display your password on the screen."
                }
              >
                {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
              </button>
            </div>
          </div>
          {/* repeat password */}
          {/* TODO:Don't double up inputs, increases abandonment rate */}
          <div>
            <label
              htmlFor="repeat-password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Repeat password
            </label>

            <div className="mt-2">
              <input
                disabled={isSubmitting}
                id="repeat-password"
                name="repeatPassword"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={classNames(
                isSubmitting
                  ? "bg-blue-400 hover:bg-blue-300 focus-visible:outline-blue-400"
                  : "bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600",
                "flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ",
              )}
            >
              {isSubmitting ? "Creating account..." : "Create account"}
            </button>
          </div>
        </Form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already registered?{" "}
          <Link
            to="/login"
            role="link"
            className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
