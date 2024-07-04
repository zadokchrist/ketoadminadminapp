import * as React from "react";
import { useState } from "react";


const InputField = ({ label, type = "text", value, onChange }) => (
  <div className="flex flex-col flex-1">
    <label className="text-base text-black">{label}</label>
    <input
      type={type}
      className="shrink-0 mt-3.5 bg-white rounded border border-solid border-neutral-400 h-[45px] px-2"
      aria-label={label}
      value={value}
      onChange={onChange}
    />
  </div>
);

const TextAreaField = ({ label, value, onChange }) => (
  <div className="flex flex-col flex-1 text-base text-black whitespace-nowrap">
    <label>{label}</label>
    <textarea
      className="shrink-0 mt-3.5 bg-white rounded border border-solid border-neutral-400 h-[90px] p-2"
      aria-label={label}
      value={value}
      onChange={onChange}
    />
  </div>
);

const SelectField = ({ label, options, value, onChange }) => (
  <div className="flex flex-col flex-1">
    <label className="text-base text-black">{label}</label>
    <select
      className="flex gap-5 justify-between px-4 py-3 mt-3.5 font-light bg-white rounded border border-solid border-neutral-400"
      value={value}
      onChange={onChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

function CreatePatient() {
  const [activeItem, setActiveItem] = useState("My Patients");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    dateOfBirth: "",
    gender: "Female",
    whatsappNumber: "",
    email: "",
    address: "",
    initialBodyWeight: "",
    currentBodyWeight: "",
    weightGoal: "",
    allergies: "",
    observations: "",
    medication: "",
    plan: "Bronze",
    planStartDate: "",
    planEndDate: "",
    attachmentName: "",
  });

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
    <section className="flex flex-col pt-3.5 pb-14 mx-8 mt-9 bg-white rounded-md border border-solid border-zinc-300 max-md:mr-2.5 max-md:max-w-full">
              <div className="flex flex-col items-end px-9 max-md:px-5 max-md:max-w-full">
                <h1 className="justify-center self-stretch py-5 text-xl font-medium text-black bg-white border-b border-solid border-neutral-400 max-md:max-w-full">
                  Create a Patient
                </h1>
                <form onSubmit={handleSubmit} className="w-full">
                  <div className="flex gap-5 justify-between self-start mt-6 max-w-full text-base text-black w-[723px] max-md:flex-wrap">
                    <div className="flex gap-5">
                      <div className="flex-auto font-medium">Patient Details:</div>
                      <InputField
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <InputField
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex gap-2 mt-6 max-md:flex-wrap">
                    <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                      <div className="flex gap-5 max-w-full text-base text-black w-[396px]">
                        <InputField
                          label="Mobile Number"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                        />
                        <InputField
                          label="Date of Birth"
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <SelectField
                      label="Gender"
                      options={["Female", "Male", "Other"]}
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex gap-2 mt-8 text-base max-md:flex-wrap">
                    <InputField
                      label="Whatsapp Number"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                    />
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
                  <div className="mt-7 border-b border-solid border-neutral-400"></div>
                  <div className="flex gap-5 mt-8 max-md:flex-wrap max-md:max-w-full">
                    <div className="grow self-start text-base font-medium text-black">Health Status:</div>
                    <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                      <div className="flex gap-2 px-px text-base text-black max-md:flex-wrap">
                        <InputField
                          label="Initial Body Weight"
                          name="initialBodyWeight"
                          value={formData.initialBodyWeight}
                          onChange={handleInputChange}
                        />
                        <InputField
                          label="Current Body weight"
                          name="currentBodyWeight"
                          value={formData.currentBodyWeight}
                          onChange={handleInputChange}
                        />
                        <InputField
                          label="Weight Goal"
                          name="weightGoal"
                          value={formData.weightGoal}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="px-px mt-8 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <TextAreaField
                            label="Allergies"
                            name="allergies"
                            value={formData.allergies}
                            onChange={handleInputChange}
                          />
                          <TextAreaField
                            label="Observations"
                            name="observations"
                            value={formData.observations}
                            onChange={handleInputChange}
                          />
                          <TextAreaField
                            label="Medication"
                            name="medication"
                            value={formData.medication}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 self-end mt-7 max-md:flex-wrap">
                    <SelectField
                      label="Plan"
                      options={["Bronze", "Silver", "Gold"]}
                      name="plan"
                      value={formData.plan}
                      onChange={handleInputChange}
                    />
                    <InputField
                      label="Plan Start Date"
                      type="date"
                      name="planStartDate"
                      value={formData.planStartDate}
                      onChange={handleInputChange}
                    />
                    <InputField
                      label="Plan End Date"
                      type="date"
                      name="planEndDate"
                      value={formData.planEndDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col px-9 mt-9 text-base max-md:px-5 max-md:max-w-full">
                    <div className="mt-8 border-b border-solid border-neutral-400"></div>
                    <div className="flex gap-5 mt-8 max-w-full text-black w-[687px] max-md:flex-wrap">
                      <div className="flex gap-5 self-start">
                        <div className="font-medium">Attachments:</div>
                        <InputField
                          label="Attachment Name"
                          name="attachmentName"
                          value={formData.attachmentName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="flex-auto">
                        <label htmlFor="fileUpload" className="text-base text-black">
                          Select Attachment to upload
                        </label>
                        <input type="file" id="fileUpload" className="mt-2.5" accept=".pdf,.doc,.xls" />
                      </div>
                    </div>
                    <p className="self-center mt-3.5 ml-16 text-xs font-light text-red-700">
                      Files should be in the format of <span className="font-bold">.pdf</span>,{" "}
                      <span className="font-bold">.doc</span>, <span className="font-bold">.xls</span>
                    </p>
                    <div className="flex gap-5 justify-between self-end max-w-full w-[916px] max-md:flex-wrap">
                      <button
                        type="button"
                        className="justify-center items-center self-end px-16 py-5 mt-20 font-semibold text-white whitespace-nowrap bg-red-700 rounded-lg max-md:px-5 max-md:mt-10"
                      >
                        Cancel
                      </button>
                      <div className="flex flex-col">
                        <button
                          type="button"
                          className="justify-center items-center px-16 py-4 font-medium text-sky-900 bg-white rounded border border-sky-900 border-solid max-md:px-5"
                        >
                          + Add Attachment
                        </button>
                        <button
                          type="submit"
                          className="justify-center items-center px-16 py-5 mt-9 font-semibold text-white bg-sky-900 rounded-lg max-md:px-5"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </section>
  );
}

export default CreatePatient;