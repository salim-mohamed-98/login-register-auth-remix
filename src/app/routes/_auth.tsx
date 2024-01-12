import { Tab } from "@headlessui/react";
import { NavLink, Outlet } from "@remix-run/react";
import { classNames } from "~/lib/utls";

const navigations = [
  { label: "Login", href: "/login" },
  { label: "Register", href: "/register" },
];

export default function AuthLayout() {
  return (
    <div className="flex min-h-full">
      <div className="hidden md:block flex-grow h-screen bg-tiger-image bg-no-repeat bg-cover bg-top sticky top-0">
        <span className="sr-only">
          Tiger image on the left side of the screen
        </span>
      </div>
      <div className="bg-slate-100 w-full md:w-[580px] lg:w-1/2 flex justify-center">
        <div className="pt-8 max-w-[485px] w-full mx-6 flex flex-col items-center">
          <div className="w-full flex mb-3">
            {navigations.map((nav, index) => (
              <NavLink key={index} to={nav.href} className="w-full" end>
                {({ isActive, isPending }) => (
                  <button
                    className={classNames(
                      isActive
                        ? "border-indigo-700 text-indigo-600 hover:border-indigo-500 hover:text-indigo-500"
                        : "border-0 text-slate-400",
                      "outline-none border-b-4 p-2 w-full font-medium text-lg"
                    )}
                  >
                    {nav.label}
                  </button>
                )}
              </NavLink>
            ))}
          </div>
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
