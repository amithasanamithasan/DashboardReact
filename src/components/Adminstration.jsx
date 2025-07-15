import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const Adminstration = () => {
  const { theme } = useTheme();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const inputBaseStyle =
    "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500";
  const getInputStyle = () =>
    `${inputBaseStyle} ${theme === "dark" ? "text-white bg-gray-800" : "text-black bg-white"}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subjects,
      resume,
      about
    );
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setSelectedOption("");
    setAbout("");
  };

  return (
    <div className={`py-4 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className={`max-w-md mx-auto ${theme === "dark" ? "bg-gray-800" : "bg-white"} rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8`}>
        <h1 className={`text-2xl font-bold mb-6 text-center ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
          Form in React with Tailwind CSS
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium text-gray-500">
                First Name*
              </label>
              <input
                type="text"
                id="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={getInputStyle()}
                placeholder="Enter First Name"
                required
              />
            </div>

            <div>
              <label htmlFor="lastname" className="block text-sm font-medium text-gray-500">
                Last Name*
              </label>
              <input
                type="text"
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={getInputStyle()}
                placeholder="Enter Last Name"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-500">
              Email*
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={getInputStyle()}
              placeholder="Enter email"
              required
            />
          </div>

          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-500">
              Contact*
            </label>
            <input
              type="tel"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className={getInputStyle()}
              placeholder="Enter Mobile number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">Gender*</label>
            <div className="flex space-x-4">
              {["male", "female", "other"].map((option) => (
                <label key={option} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    checked={gender === option}
                    onChange={(e) => setGender(e.target.value)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <span className={`ml-2 ${theme === "dark" ? "text-white" : "text-gray-700"}`}>{option.charAt(0).toUpperCase() + option.slice(1)}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">Your best Subject</label>
            <div className="flex space-x-4">
              {Object.keys(subjects).map((sub) => (
                <label key={sub} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={subjects[sub]}
                    onChange={() => handleSubjectChange(sub)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span className={`ml-2 ${theme === "dark" ? "text-white" : "text-gray-700"}`}>
                    {sub.charAt(0).toUpperCase() + sub.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-500">
              Upload Resume*
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setResume(e.target.files[0])}
              className={`mt-1 block w-full text-sm ${theme === "dark" ? "text-white" : "text-gray-500"} file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100`}
              required
            />
          </div>

          <div>
            <label htmlFor="select" className="block text-sm font-medium text-gray-500">
              Select your choice
            </label>
            <select
              id="select"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className={`${theme === "dark" ? "text-white bg-gray-800" : "text-black bg-white"} mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md`}
            >
              <option value="" disabled>
                Select your Ans
              </option>
              <optgroup label="Beginers">
                <option value="1">HTML</option>
                <option value="2">CSS</option>
                <option value="3">JavaScript</option>
              </optgroup>
              <optgroup label="Advance">
                <option value="4">React</option>
                <option value="5">Node</option>
                <option value="6">Express</option>
                <option value="7">MongoDB</option>
              </optgroup>
            </select>
          </div>

          <div>
            <label htmlFor="about" className="block text-sm font-medium text-gray-500">
              About
            </label>
            <textarea
              id="about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              rows="4"
              className={getInputStyle()}
              placeholder="About yourself"
              required
            ></textarea>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adminstration;
