import { useState } from "react";
import { formProtoPersonalData } from "../../models/data_models";
import "./form.style.scss";
export function Form() {
  const formDataStructure: formProtoPersonalData = {
    name: " ",
    lastName: " ",
    birthDate: " ",
    gender: " ",
    email: " ",
    newsletter: false,
  };
  const [formData, setFormData] = useState(formDataStructure);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    console.log(value);
    console.log(name);
    setFormData({
      ...value,
      [name]: value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formData);
      }}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Birth Date:
        <input
          type="text"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
        />
      </label>
      <label>
        Gender:
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <fieldset>
        <legend>Do you want to subscribe to our newsletter:</legend>

        <div>
          <label>Yes</label>
          <input
            type="checkbox"
            name="enableNewsletter"
            checked={formData.newsletter}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>No</label>
          <input
            type="checkbox"
            name="disableNewsletter"
            checked={formData.newsletter}
            onChange={handleChange}
          />
        </div>
      </fieldset>
    </form>
  );
}
