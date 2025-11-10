import { useState } from "react";

export const useForm = (initialValue) => {
  const [formState, setForm] = useState(initialValue);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm({ ...formState, [name]: value });
  };

  const handleReset = () => {
    console.log(initialValue);
    setForm(initialValue);
  };

  return {
    formState,
    handleChange,
    handleReset,
  };
};

//Empezar por event e ir mirando la consola para ver como funciona el objeto.
