"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Admin = () => {
  const router = useRouter();
  const [address, setAddress] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [role, setRole] = useState("");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!fullName || !email || !password) {
      return;
    }
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address,
          role
        }),
      });
      if (res.ok) {
        router.push("/");
        const form = e.target;
        form.reset();
      } else {
        console.log("User Registration failed.");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Admin
            </h2>
            <form onSubmit={handleSubmit} class="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="address"
                    class="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Address{" "}
                  </label>
                  <div class="mt-2">
                    <input
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Wallet Address"
                      id="address"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={toggleDropdown}
                    className="text-base font-medium text-gray-900 focus:outline-none"
                  >
                    Select Role
                  </button>
                  {showDropdown && (
                    <div className="mt-2">
                      <select
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        id="dropdown"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option value="Producer">Producer</option>
                        <option value="Transporter">Transporter</option>
                        <option value="Distributor">Distributor</option>
                      </select>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Assign Role{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
