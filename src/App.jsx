import { useState } from "react";
import "./App.css";
import Buttons from "./Components/Buttons";
import Fields from "./Components/Fields";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const Form = [
    {
      name: "username",
      type: "username",
      value: formData.username,
      placeholder: "Enter Username",
    },
    {
      name: "password",
      type: "password",
      value: formData.password,
      placeholder: "Enter Password",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = () => {
    return alert(
      `Submitted with ${formData.username} and ${formData.password}}`
    );
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <div className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          <p className="text-center text-lg font-medium">
            Sign in to your account
          </p>

          {Form &&
            Form.map((item) => {
              return (
                <Fields
                  name={item.name}
                  type={item.type}
                  value={item.value}
                  placeholder={item.placeholder}
                  handleChange={handleChange}
                ></Fields>
              );
            })}

          <Buttons HandleSubmit={HandleSubmit}></Buttons>
        </div>
      </div>
    </div>
  );
}

export default App;
