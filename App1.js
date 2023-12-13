import React from 'react';
import DynamicForm from './DynamicForm';

const formConfig = [
  {
    type: 'text',
    label: 'Full Name',
    name: 'fullName',
    required: true,
  },
  {
    type: 'select',
    label: 'Select Option',
    name: 'selectOption',
    required: false,
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
  // Add more fields as needed
];

const App1 = () => {
  return (
    <div>
      <h1>Dynamic Form Example</h1>
      <DynamicForm fields={formConfig} />
    </div>
  );
};

export default App1;
