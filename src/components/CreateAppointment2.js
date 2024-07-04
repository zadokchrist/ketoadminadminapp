import * as React from "react";
import { useState } from "react";

const InputField = ({ label, type = "text", name, value, onChange }) => (
  <div className="flex flex-col">
    <label className="text-sm text-black">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="shrink-0 mt-2.5 bg-white rounded border border-solid border-neutral-400 h-[40px] px-3 text-sm"
      aria-label={label}
    />
  </div>
);

const SelectField = ({ label, options, value, onChange }) => (
  <div className="flex flex-col flex-1 text-sm text-black">
    <label>{label}</label>
    <select
      value={value}
      onChange={onChange}
      className="flex gap-4 justify-between px-3 py-2.5 mt-2.5 font-light bg-white rounded border border-solid border-neutral-400 text-sm"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);


const SuccessModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Booking Successful!</h2>
          <p className="mb-4">Your appointment has been booked successfully.</p>
          <button
            onClick={onClose}
            className="bg-sky-900 text-white px-4 py-2 rounded hover:bg-sky-800"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

function CreateAppointment2() {
    const [activeItem, setActiveItem] = useState("Appointments");
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    dateOfBirth: "",
    gender: "Female",
    whatsappNumber: "",
    email: "",
    address: "",
    natureOfAppointment: "First Time",
    startTime: "9:00",
    locationOfMeeting: "Online",
    appointmentDate: "",
    endTime: "10:00",
    additionalNotes: "",
  });

  const handleBookingClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="flex flex-col pt-4 pb-14 mx-7 mt-6 bg-white rounded-md border border-solid border-zinc-300 max-md:mr-2 max-md:max-w-full">
      <div className="flex flex-col px-8 max-md:px-4 max-md:max-w-full">
        <h1 className="justify-center py-3 text-lg font-medium text-black bg-white border-b border-solid border-neutral-400 max-md:max-w-full">
          Create an Appointment
        </h1>
        <form onSubmit={handleSubmit} className="mt-3">
          <fieldset>
            <legend className="text-sm font-medium text-black">Patient Details:</legend>
            <div className="flex gap-4 px-0.5 mt-3 text-sm text-black max-md:flex-wrap max-md:max-w-full">
              <InputField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <InputField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-2 self-end mt-5 max-md:flex-wrap">
              <div className="flex flex-col flex-1 text-sm">
                <label htmlFor="mobileNumber" className="text-black">
                  Mobile Number
                </label>
                <div className="flex mt-2.5 bg-white rounded border border-solid border-neutral-400">
                  <div className="px-2 py-3 bg-gray-400 bg-opacity-40">+256</div>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    className="flex-grow py-2 px-3 text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="dateOfBirth" className="text-sm text-black">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="flex flex-col justify-center items-end px-14 py-2.5 mt-2.5 bg-white rounded border border-solid border-neutral-400 max-md:pl-4 text-sm"
                />
              </div>
              <SelectField
                label="Gender"
                options={["Male", "Female"]}
                value={formData.gender}
                onChange={(e) =>
                  handleInputChange({ target: { name: "gender", value: e.target.value } })
                }
              />
            </div>
            <div className="flex gap-2 self-end mt-7 text-sm max-md:flex-wrap">
              <div className="flex flex-col flex-1">
                <label htmlFor="whatsappNumber" className="text-black">
                  Whatsapp Number
                </label>
                <div className="flex mt-2 bg-white rounded border border-solid border-neutral-400">
                  <div className="px-2 py-3 bg-gray-400 bg-opacity-40">+256</div>
                  <input
                    type="tel"
                    id="whatsappNumber"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleInputChange}
                    className="flex-grow py-2 px-3 text-sm"
                  />
                </div>
              </div>
              <InputField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <InputField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
          </fieldset>
        </form>
      </div>
      <div className="flex flex-col px-8 mt-3 max-md:px-4 max-md:max-w-full">
        <div className="shrink-0 h-5 bg-white border-b border-solid border-neutral-400 max-md:max-w-full" />
        <div className="mt-6 max-md:max-w-full">
          <div className="flex gap-4 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-sm text-black max-md:mt-8 max-md:max-w-full">
                <fieldset>
                  <legend className="font-medium">Appointment Details:</legend>
                  <div className="flex flex-col self-end mt-5 max-w-full w-[380px]">
                    <SelectField
                      label="Nature of Appointment"
                      options={["First Time", "Follow-up"]}
                      value={formData.natureOfAppointment}
                      onChange={(e) =>
                        handleInputChange({
                          target: { name: "natureOfAppointment", value: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className="flex flex-col self-end mt-5 max-w-full w-[380px]">
                    <SelectField
                      label="Start Time"
                      options={["9:00", "10:00", "11:00"]}
                      value={formData.startTime}
                      onChange={(e) =>
                        handleInputChange({
                          target: { name: "startTime", value: e.target.value },
                        })
                      }
                    />
                    <SelectField
                      label="Location of Meeting"
                      options={["Online", "In-person"]}
                      value={formData.locationOfMeeting}
                      onChange={(e) =>
                        handleInputChange({
                          target: { name: "locationOfMeeting", value: e.target.value },
                        })
                      }
                    />
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="flex flex-col ml-4 w-[50%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
                <label htmlFor="appointmentDate" className="text-sm text-black max-md:max-w-full">
                  Date of Appointment
                </label>
                <input
                  type="date"
                  id="appointmentDate"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleInputChange}
                  className="flex flex-col justify-center items-end px-14 py-2.5 mt-2 bg-white rounded border border-solid border-neutral-400 max-md:pl-4 max-md:max-w-full text-sm"
                />
                <SelectField
                  label="End Time"
                  options={["10:00", "11:00", "12:00"]}
                  value={formData.endTime}
                  onChange={(e) =>
                    handleInputChange({ target: { name: "endTime", value: e.target.value } })
                  }
                />
                <label htmlFor="additionalNotes" className="mt-5 text-sm text-black max-md:max-w-full">
                  Additional Notes
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  className="shrink-0 mt-2.5 bg-white rounded border border-solid border-neutral-400 h-[40px] max-md:max-w-full p-2 text-sm"
                  aria-label="Additional Notes"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-between self-end mt-10 max-w-full text-sm font-semibold text-white w-[820px] max-md:flex-wrap max-md:mt-8">
          <button
            type="button"
            onClick={() => console.log("Appointment cancelled")}
            className="justify-center items-center px-14 py-4 whitespace-nowrap bg-red-700 rounded-lg max-md:px-4"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleBookingClick}
            // onClick={handleSubmit}
            className="justify-center items-center px-14 py-4 bg-sky-900 rounded-lg max-md:px-4"
          >
            Submit
          </button>
        </div>
      </div>
      <SuccessModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
    
  );
}

export default CreateAppointment2;
