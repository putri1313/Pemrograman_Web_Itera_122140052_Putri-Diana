import { useState } from "react";

const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const { title, author, status } = values;
    if (!title || !author || !status) {
      setError("Semua bidang harus diisi!");
      return false;
    }
    setError("");
    return true;
  };

  const resetForm = () => {
    setValues(initialValues);
    setError("");
  };

  return {
    values,
    error,
    setValues,
    handleChange,
    validate,
    resetForm,
  };
};

export default useForm;
