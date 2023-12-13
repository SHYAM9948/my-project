import { useState } from "react"


const DynamicForm =({fields})=>{
    const[formData, setFormData]=useState({});

    const handleChange = (e, fieldName)=>{
        const value = e.target.value;
        setFormData({
            ...formData,
            [fieldName]: value
        });
    };

    const handleSubmit =(e)=>{
        e.preventDefault();
        //Handle form submission with formdata
        console.log('FormData:', formData);
    };

    const renderField = (field) => {
        const { type, label, name, required, options } = field;
        switch (type) {
          case 'text':
            return (
              <div key={name}>
                <label>
                  {label} {required && '*'}
                  <input
                    type="text"
                    name={name}
                    value={formData[name] || ''}
                    onChange={(e) => handleChange(e, name)}
                    required={required}
                  />
                </label>
              </div>
            );
          case 'select':
            return (
              <div key={name}>
                <label>
                  {label} {required && '*'}
                  <select
                    name={name}
                    value={formData[name] || ''}
                    onChange={(e) => handleChange(e, name)}
                    required={required}
                  >
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            );
          // Add other cases for different field types like 'checkbox', 'radio', etc.
          default:
            return null;
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
          {fields.map((field) => renderField(field))}
          <button type="submit">Submit</button>
        </form>
      );
    };
    
    export default DynamicForm;
