import React, { useState } from "react";

function BuyForm(props) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  function onInputChange(evt) {
    const inputName = evt.target.name;
    const value = evt.target.value;

    const newUserData = { ...userData }
    newUserData[inputName] = value;
    setUserData(newUserData);
  }

  function onSubmit(evt) {
    if(userData.email !=="" && userData.name !== ""){
      evt.preventDefault();
    props.onSubmit(userData);
    }
    
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Correo Electronico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={onInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@emeal.com"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Titular
        </label>
        <input
          type="text"
          id="password"
          name="name"
          value={userData.name}
          onChange={onInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={onSubmit}
      >
        Hacer perdido
      </button>
    </form>
  );
}
export default BuyForm;
