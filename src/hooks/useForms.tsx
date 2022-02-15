import { ChangeEvent, useState } from 'react';

import FormGroup from '@components/FormGroup';
import { Input } from '@components/Input';

import { FieldName, InputObjectProps } from './DTO/useFormsDTO';
import { useErrors } from './useErrors';

export function useForms<T>() {
  const [values, setValues] = useState<T>({} as T);

  const { getErrorMessageByFieldName, handleRequiredFieldChange } = useErrors<T>();

  function handleFieldsChange(errorMessage: string, validateField: boolean) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      if (validateField) {
        handleRequiredFieldChange(name as any, errorMessage, event);
      }
    };
  }

  function createInputs(fields: FieldName<T>[], fieldsObject: InputObjectProps<T>) {
    return fields.map((field) => {
      const {
        label,
        type,
        errorMessage = '',
        validateField = false,
      } = fieldsObject[field];

      return (
        <FormGroup key={field as string} error={getErrorMessageByFieldName(field)}>
          {label && <label htmlFor={field as string}>{label}</label>}
          <Input
            type={type || 'text'}
            name={field as string}
            value={values[field] as any}
            error={getErrorMessageByFieldName(field)}
            onChange={handleFieldsChange(errorMessage, validateField)}
          />
        </FormGroup>
      );
    });
  }

  return {
    values,
    handleFieldsChange,
    createInputs,
  };
}
