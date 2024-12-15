import React, { useState } from 'react';
import { createUser } from 'src/services/AdministrationService';

interface FormValues {
  userName: string;
  email: string;
  password: string;
  roleId: number;
}

const CreateUserForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    userName: '',
    email: '',
    password: '',
    roleId: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const parsedValue = name === "roleId" ? parseInt(value) : value;
    setFormValues({
      ...formValues,
      [name]: parsedValue,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await createUser(formValues);
      console.log('Created user:', data);
    } catch (error) {
     
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="username" className="form-label">
            Vartotojo vardas:
          </label>
          <input
            type="userName"
            id="userName"
            name="userName"
            value={formValues.userName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="roleId" className="form-label">
            Role:
          </label>
          <select
            id="roleId"
            name="roleId"
            value={formValues.roleId}
            onChange={handleChange}
            className="form-select"
            required
          >
            {[0, 1].map((role) => (
              <option key={role} value={role}>
                Role {role}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Sukurti
        </button>
      </form>
    </div>
  );
};

export default CreateUserForm;
