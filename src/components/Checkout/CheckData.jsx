function CheckData({ order }) {
  return (
    <div className="mt-10">
      <div className="w-full p-4  rounded-lg grid place-items-center">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Tu pedido es correcto
        </h5>
        
        <svg
          className="object-none h-48 w-96 text-col text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
    
        <h5 className="ml-1 text-xl font-normal text-gray-500">
          Ticket de pedido: {order.id}
        </h5>
      </div>
    </div>
  );
}
export default CheckData;
