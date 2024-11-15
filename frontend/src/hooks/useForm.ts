import { useState } from 'react';

interface FormValues {
    [key: string]: string;
}
const useForm = (initialValues: FormValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return { values, handleChange, setValues };
};

export default useForm;