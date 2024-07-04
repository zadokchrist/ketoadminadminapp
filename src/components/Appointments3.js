import * as React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Appointments3() {
    const location = useLocation();
    const navigate = useNavigate();
    const AppointmentRow = ({
        name,
        date,
        gender,
        age,
        contact,
        appointmentDate,
        nature,
        status,
        onStatusChange,
    }) => {
        const getStatusColor = (status) => {
            switch (status) {
                case "CONFIRMED":
                    return "bg-lime-700";
                case "ONGOING":
                    return "bg-lime-500";
                case "COMPLETED":
                    return "bg-cyan-500";
                case "REJECTED":
                    return "bg-red-700";
                case "NO SHOW":
                    return "bg-zinc-700";
                default:
                    return "bg-gray-500";
            }
        };

        return (
            <tr className="border-b border-zinc-300">
                <td className="py-4 pl-8">
                    <div className="flex gap-2.5 text-black">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b16804c30f081d51332b51b003edbe93b26b542b3085d08660b376611354987?apiKey=2b51dad425e04206847488420121dc35&"
                            className="shrink-0 w-12 aspect-square"
                            alt={`Profile picture of ${name}`}
                        />
                        <div className="flex flex-col my-auto">
                            <div className="text-base">{name}</div>
                            <div className="mt-3 text-xs">{date}</div>
                        </div>
                    </div>
                </td>
                <td className="py-4">{gender}</td>
                <td className="py-4">{age}</td>
                <td className="py-4">{contact}</td>
                <td className="py-4">{appointmentDate}</td>
                <td className="py-4">{nature}</td>
                <td className="py-4">
                    {status && (
                        <button
                            className={`px-4 py-2.5 text-xs text-white whitespace-nowrap rounded ${getStatusColor(
                                status
                            )}`}
                            onClick={() => onStatusChange(name)}
                        >
                            {status}
                        </button>
                    )}
                </td>
            </tr>
        );
    };

    const handleStatusChange = (name) => {
        setAppointments(
          appointments.map((appointment) =>
            appointment.name === name
              ? {
                  ...appointment,
                  status:
                    appointment.status === "CONFIRMED"
                      ? "ONGOING"
                      : appointment.status === "ONGOING"
                      ? "COMPLETED"
                      : "CONFIRMED",
                }
              : appointment
          )
        );
      };
    const [appointments, setAppointments] = useState([
        {
            name: "Patrick Mwebaze",
            date: "2/11/2023",
            gender: "Male",
            age: "45",
            contact: "0782750415",
            appointmentDate: "3/11/2023",
            nature: "First Time",
        },
        {
            name: "Mercy Tayebwa",
            date: "2/11/2023",
            gender: "Female",
            age: "28",
            contact: "0752750086",
            appointmentDate: "5/11/2023",
            nature: "First Time",
            status: "CONFIRMED",
        },
        {
            name: "Patricia Aber",
            date: "2/11/2023",
            gender: "Female",
            age: "32",
            contact: "0742751182",
            appointmentDate: "8/11/2023",
            nature: "First Time",
            status: "ONGOING",
        },
        {
            name: "Moreen Mbabazi",
            date: "2/11/2023",
            gender: "Female",
            age: "39",
            contact: "0782750415",
            appointmentDate: "3/11/2023",
            nature: "Follow-up",
            status: "CONFIRMED",
        },
        {
            name: "Marvin Kato Bulega",
            date: "2/11/2023",
            gender: "Male",
            age: "38",
            contact: "0752750086",
            appointmentDate: "3/11/2023",
            nature: "Follow-up",
            status: "COMPLETED",
        },
        {
            name: "Salim Mutesasira",
            date: "2/11/2023",
            gender: "Male",
            age: "49",
            contact: "0742751182",
            appointmentDate: "3/11/2023",
            nature: "First Time",
            status: "REJECTED",
        },
        {
            name: "Shilla Namaganda",
            date: "2/11/2023",
            gender: "Female",
            age: "39",
            contact: "0782750415",
            appointmentDate: "3/11/2023",
            nature: "First Time",
            status: "NO SHOW",
        },
    ]);

    const handleCreateAppointment = () => {
        
        const newAppointment = {
            name: "New Patient",
            date: new Date().toLocaleDateString(),
            gender: "Other",
            age: "30",
            contact: "0700000000",
            appointmentDate: new Date(Date.now() + 86400000).toLocaleDateString(),
            nature: "First Time",
            status: "CONFIRMED",
        };
        setAppointments([...appointments, newAppointment]);
        navigate("/layout", { state: { screen: "createappointment" } });
        
    };

    return (
        <section className="flex flex-col py-6 mx-8 mt-7 bg-white rounded-md border border-solid border-zinc-300 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 mr-9 ml-9 text-black max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                <h1 className="flex-auto self-start mt-4 text-xl font-medium">
                    All Appointments
                </h1>
                <div className="flex gap-2 text-sm max-md:flex-wrap">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1f35b8b-37b3-4e05-80ed-2956a328a779?apiKey=2b51dad425e04206847488420121dc35&"
                        className="shrink-0 border border-gray-400 border-solid aspect-[2.27] w-[90px]"
                        alt=""
                    />
                    <label htmlFor="fromDate" className="my-auto">
                        From
                    </label>
                    <input type="date" id="fromDate" className="sr-only" />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cc13cf8-8926-48c4-a039-fab20b9e797f?apiKey=2b51dad425e04206847488420121dc35&"
                        className="shrink-0 border border-gray-400 border-solid aspect-[2.27] w-[90px]"
                        alt=""
                    />
                    <label htmlFor="toDate" className="my-auto">
                        To
                    </label>
                    <input type="date" id="toDate" className="sr-only" />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/98082fe2-bb68-4f0d-9807-4a30e83a0e6d?apiKey=2b51dad425e04206847488420121dc35&"
                        className="shrink-0 border border-gray-400 border-solid aspect-[2.27] w-[90px]"
                        alt=""
                    />
                    <button className="flex gap-2 px-5 py-2 text-xs font-medium whitespace-nowrap bg-white rounded border border-gray-400 border-solid text-black text-opacity-60">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a7fcc5f43065c95a40b98548c557386801a35f5f486753cd625f5176e2b4898?apiKey=2b51dad425e04206847488420121dc35&"
                            className="shrink-0 w-6 aspect-square"
                            alt=""
                        />
                        <div className="flex-auto my-auto">Search</div>
                    </button>
                    <button
                        className="justify-center px-10 py-4 text-xs font-medium text-white bg-sky-900 rounded max-md:px-5"
                        onClick={handleCreateAppointment}
                    >
                        + Create Appointment
                    </button>
                </div>
            </div>
            <table className="w-full mt-6 text-base font-medium">
                <thead>
                    <tr className="bg-sky-900 text-white">
                        <th className="py-5 pl-9 text-left">Name</th>
                        <th className="py-5 text-left">Gender</th>
                        <th className="py-5 text-left">Age</th>
                        <th className="py-5 text-left">Contact</th>
                        <th className="py-5 text-left">Appointment Date</th>
                        <th className="py-5 text-left">Nature of Appointment</th>
                        <th className="py-5 pr-20 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, index) => (
                        <AppointmentRow
                            key={index}
                            {...appointment}
                            onStatusChange={handleStatusChange}
                        />
                    ))}
                </tbody>
            </table>
            <div className="flex gap-2.5 items-center self-end mt-7 mr-20 text-xs text-black text-opacity-50 max-md:mr-2.5">
                <div className="grow self-stretch my-auto">Rows per page:</div>
                <div className="flex gap-1 self-stretch text-black whitespace-nowrap">
                    <div className="my-auto">1</div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ab4eed838d3f40e71badd9969b84742f735d6ca2a8f4488104e9889b2c97e4b?apiKey=2b51dad425e04206847488420121dc35&"
                        className="shrink-0 w-6 aspect-square"
                        alt=""
                    />
                </div>
                <div className="flex gap-4 self-stretch my-auto">
                    <div className="my-auto">1-7 of 15</div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d7d2c67b0b0c9faf7325af43d69ced2a5cf12da4ee07a9879df1afecb6276c3?apiKey=2b51dad425e04206847488420121dc35&"
                        className="shrink-0 w-2 border-2 border-solid aspect-[0.57] border-black border-opacity-40 stroke-[2px] stroke-black stroke-opacity-40"
                        alt=""
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdf301db788ac9a2f50efe9304efc80c5ae1a80a27cd642341697a23a2ab8808?apiKey=2b51dad425e04206847488420121dc35&"
                        className="shrink-0 w-2 border-2 border-black border-solid aspect-[0.57] stroke-[2px] stroke-black"
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
}

export default Appointments3;