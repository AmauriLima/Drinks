import { ChangeEvent, useState } from 'react';

import { FieldName } from './DTO/useFormsDTO';

type Error<T> = {
  field: FieldName<T>;
  message: string;
}

export function useErrors<T>() {
  const [errors, setErrors] = useState<Error<T>[]>([]);

  function setError({ field, message }: Error<T>) {
    const errorAlreadyExists = errors.find((error) => error.field === field);

    if (errorAlreadyExists) return;

    setErrors((prevState) => [...prevState, { field, message }]);
  }

  function removeError(fieldName: FieldName<T>) {
    setErrors((prevState) => prevState.filter((error) => error.field !== fieldName));
  }

  function getErrorMessageByFieldName(fieldName: FieldName<T>) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  function handleRequiredFieldChange(
    name: FieldName<T>,
    errorMessage: string,
    event: ChangeEvent<HTMLInputElement>,
  ) {
    if (!event.target.value) {
      setError({ field: name, message: errorMessage });
    } else {
      removeError(name);
    }
  }

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
    handleRequiredFieldChange,
  };
}
