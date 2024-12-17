import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bell, MenuIcon, X } from "lucide-react";

import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { name: "Organizations", href: "/", current: true },
  { name: "Shop", href: "/shops", current: false },
  { name: "Tracking", href: "/trackings", current: false },
];

const dropDownLinks = [
  {
    name: "Login as officer",
    href: "/officer/login",
  },
  {
    name: "Login as elecom",
    href: "/e/login",
  },
  {
    name: "Login as admin",
    href: "/ad/login",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white border-b-2">
      <div className="px-2 py-5 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>

              <MenuIcon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <X
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>

          <div className="absolute right-0 flex items-center justify-between gap-10 flex-1 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden lg:flex flex-1 items-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img alt="USO Logo" src={logo} className="h-[75px]" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden sm:ml-6 sm:flex items-center">
                <div className="flex space-x-4">
                  {navigation.map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.href}
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "font-extrabold text-blue-900"
                            : "hover:text-blue-900",
                          "px-3 py-2 text-sm font-medium"
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex text-sm focus:outline-none font-bold">
                  Log in | Register
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                {dropDownLinks.map((link, index) => {
                  return (
                    <MenuItem key={index}>
                      <Link
                        to={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                      >
                        {link.name}
                      </Link>
                    </MenuItem>
                  );
                })}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
