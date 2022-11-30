import Avatar from "../../images/JRS.jpg";
function ContactPage() {
  return (
    <div className="grid h-1 place-items-center">
    <div className="pt-2  w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
      <h3 className="mb-1 text-2xl font-bold text-gray-900 ">Creador</h3>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={Avatar}
          alt="foto Jorge Ruiz"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">
          Jorge Iván Ruiz Siancas
        </h5>
        <span className="text-sm text-gray-500">Developer Engineering</span>
        <p className="text-sm text-gray-500">Ingeniería Informática | Java | Python | Microservicios | Backend | Spring Boot | JavaServer Faces | Struts2 | Hibernate | Oracle DB | PostgreSQL | Microsoft SQL Server | Mongo DB | Selenium</p>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a
            href="https://www.linkedin.com/in/jorge-iván-ruiz-siancas"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/ivan.ruiz.s/"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 "
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
export default ContactPage;
