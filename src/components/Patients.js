import * as React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";



function Patients() {
  const [activeSidebarItem, setActiveSidebarItem] = useState("My Patients");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
    const navigate = useNavigate();


  const patients = [
    {
      name: "Patricia Mutooni",
      date: "2/11/2023",
      contact: "0782750415",
      age: "38",
      plan: "Silver",
      startDate: "3/11/2023",
      endDate: "3/12/2023",
      status: "ACTIVE",
    },
    {
      name: "Bernard Ssenono",
      date: "2/11/2023",
      contact: "0782750415",
      age: "42",
      plan: "Gold",
      startDate: "3/11/2023",
      endDate: "3/12/2023",
      status: "ACTIVE",
    },
    {
      name: "Christian Manzi",
      date: "2/11/2023",
      contact: "0782750415",
      age: "37",
      plan: "Gold",
      startDate: "3/11/2023",
      endDate: "3/12/2023",
      status: "ACTIVE",
    },
    {
      name: "Agnes Tinka",
      date: "2/11/2023",
      contact: "0782750415",
      age: "34",
      plan: "Gold Plus",
      startDate: "3/8/2023",
      endDate: "3/10/2023",
      status: "INACTIVE",
    },
    {
      name: "Ronald Agaba",
      date: "2/11/2023",
      contact: "0782750415",
      age: "44",
      plan: "Bronze",
      startDate: "3/11/2023",
      endDate: "3/12/2023",
      status: "ACTIVE",
    },
    {
      name: "Esther Nabwiso",
      date: "2/11/2023",
      contact: "0782750415",
      age: "47",
      plan: "Gold",
      startDate: "3/11/2023",
      endDate: "3/12/2023",
      status: "INACTIVE",
    },
    {
      name: "Nancy Magyezi",
      date: "2/11/2023",
      contact: "0782750415",
      age: "52",
      plan: "Platinum",
      startDate: "3/11/2023",
      endDate: "3/12/2023",
      status: "ACTIVE",
    },
  ];

  const handleSidebarItemClick = (text) => {
    setActiveSidebarItem(text);
  };

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCreatePatient = () => {
    navigate("/layout", { state: { screen: "Create Patient" } });
  };

  return (
    <>
    <section className="flex flex-col py-5 mx-7 mt-6 bg-white rounded-md border border-solid border-zinc-300 max-md:mr-2 max-md:max-w-full">
              <div className="flex gap-4 mr-8 ml-8 text-black max-md:flex-wrap max-md:mr-2 max-md:max-w-full">
                <h1 className="flex-auto my-auto text-lg font-medium">All Patients</h1>
                <div className="flex gap-2 text-xs max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/682b6342-c1b3-4104-bc49-d38e94f4d3bc?apiKey=2b51dad425e04206847488420121dc35&"
                    alt=""
                    className="shrink-0 border border-gray-400 border-solid aspect-[2.27] w-[80px]"
                  />
                  <label htmlFor="fromDate" className="my-auto">
                    From
                  </label>
                  <input
                    type="date"
                    id="fromDate"
                    className="shrink-0 border border-gray-400 border-solid aspect-[2.27] w-[80px]"
                    value={fromDate}
                    onChange={handleFromDateChange}
                  />
                  <label htmlFor="toDate" className="my-auto">
                    To
                  </label>
                  <input
                    type="date"
                    id="toDate"
                    className="shrink-0 border border-gray-400 border-solid aspect-[2.27] w-[80px]"
                    value={toDate}
                    onChange={handleToDateChange}
                  />
                  <div className="flex gap-2 px-4 py-1.5 text-xs font-medium whitespace-nowrap bg-white rounded border border-gray-400 border-solid text-black text-opacity-60">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b1562477584b5936cbb0fc7dd02c1b631e705a404e27f682fda1f54feeaf435?apiKey=2b51dad425e04206847488420121dc35&"
                      alt=""
                      className="shrink-0 w-5 aspect-square"
                    />
                    <input
                      type="text"
                      placeholder="Search"
                      className="flex-auto my-auto bg-transparent border-none outline-none"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                  </div>
                  <button
                    className="justify-center px-12 py-3 text-xs font-medium text-white bg-sky-900 rounded max-md:px-4"
                    onClick={handleCreatePatient}
                  >
                    + Create Patient
                  </button>
                </div>
              </div>
              <table className="w-full mt-5 text-sm">
                <thead>
                  <tr className="bg-sky-900 text-white">
                    <th className="py-4 px-4 text-left">Name</th>
                    <th className="py-4 px-4 text-left">Contact</th>
                    <th className="py-4 px-4 text-left">Age</th>
                    <th className="py-4 px-4 text-left">Plan</th>
                    <th className="py-4 px-4 text-left">Plan Start date</th>
                    <th className="py-4 px-4 text-left">Plan End Date</th>
                    <th className="py-4 px-4 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient, index) => (
                    <tr key={index} className="border-b border-zinc-300">
                      <td className="py-4 px-4">
                        <div className="flex gap-2 items-center">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b16804c30f081d51332b51b003edbe93b26b542b3085d08660b376611354987?apiKey=2b51dad425e04206847488420121dc35&"
                            alt=""
                            className="shrink-0 w-10 aspect-square" 
                            onClick={() =>{navigate("/layout", { state: { screen: "ViewPatient" } });}}
                          />
                          <div>
                            <div>{patient.name}</div>
                            <div className="text-xs mt-1">{patient.date}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">{patient.contact}</td>
                      <td className="py-4 px-4">{patient.age}</td>
                      <td className="py-4 px-4">{patient.plan}</td>
                      <td className="py-4 px-4">{patient.startDate}</td>
                      <td className="py-4 px-4">{patient.endDate}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 text-xs text-white rounded ${
                            patient.status === "ACTIVE" ? "bg-lime-700" : "bg-red-700"
                          }`}
                        >
                          {patient.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex gap-2 items-center self-end mt-7 mr-16 text-xs text-black text-opacity-50 max-md:mr-2">
                <div className="grow self-stretch my-auto">Rows per page:</div>
                <div className="flex gap-1 self-stretch text-black whitespace-nowrap">
                  <div className="my-auto">1</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ab4eed838d3f40e71badd9969b84742f735d6ca2a8f4488104e9889b2c97e4b?apiKey=2b51dad425e04206847488420121dc35&"
                    alt=""
                    className="shrink-0 w-5 aspect-square"
                  />
                </div>
                <div className="flex gap-3 self-stretch my-auto">
                  <div className="my-auto">1-7 of 15</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d7d2c67b0b0c9faf7325af43d69ced2a5cf12da4ee07a9879df1afecb6276c3?apiKey=2b51dad425e04206847488420121dc35&"
                    alt=""
                    className="shrink-0 w-1.5 border-2 border-solid aspect-[0.57] border-black border-opacity-40 stroke-[2px] stroke-black stroke-opacity-40"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdf301db788ac9a2f50efe9304efc80c5ae1a80a27cd642341697a23a2ab8808?apiKey=2b51dad425e04206847488420121dc35&"
                    alt=""
                    className="shrink-0 w-1.5 border-2 border-black border-solid aspect-[0.57] stroke-[2px] stroke-black"
                  />
                </div>
              </div>
            </section>
    </>
  );
}

export default Patients;