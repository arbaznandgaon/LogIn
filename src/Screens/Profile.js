import React from "react";

function Profile() {
  return (
    <div>
      <div className="bg-gray-100 p-8">
        <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Fill Up the Deatils</h2>

          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                User Name
              </label>
              <input
                type="text"
                placeholder="Enter Here"
                className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Age
              </label>
              <input
                type="number"
                placeholder="Enter Here"
                className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Mobile Number
              </label>
              <input
                type="number"
                placeholder="Enter Here"
                className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Gender
              </label>
              <input
                type="date"
                className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                DOB
              </label>
              <input
                type="Date"
                className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Zip Code
              </label>
              <input
                type="zipCode"
                placeholder="Enter Here"
                className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                City
              </label>
              <input
                type="text"
                placeholder="Enter Here"
                className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Country
              </label>
              <input
                type="text"
                placeholder="Enter Here"
                className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
