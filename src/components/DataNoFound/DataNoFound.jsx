function DataNoFound(){
    return(<div className="mt-10">
    <div className="w-full p-4  rounded-lg grid place-items-center">
      <h5 className="mb-4 text-xl font-medium text-gray-500 ">
        Error no se encontro la data
      </h5>

      <svg
        className="object-none h-48 w-96 text-red-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <h5 className="ml-1 text-xl font-normal text-gray-500">Algo sucedió no se encuentra data</h5>
    </div>
  </div>)
}
export default DataNoFound