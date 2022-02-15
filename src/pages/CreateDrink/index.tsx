import { FormEvent, FormEventHandler } from 'react';

import { Drink } from '@services/DrinksService/DTO';

import { InputObjectProps } from '@hooks/DTO/useFormsDTO';
import { useForms } from '@hooks/useForms';

import { PageLayout } from '@components/PageLayout';

import { Form } from './styles';

export function CreateDrink() {
  const { createInputs, values } = useForms<Drink>();

  const fieldsObject = {
    name: {
      label: 'Título',
      validateField: true,
      errorMessage: 'Título é obrigatório!',
    },
    description: {
      label: 'Descrição',
      validateField: true,
      errorMessage: 'Descrição é obrigatória!',
    },
  } as InputObjectProps<Drink>;

  const onSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <PageLayout>
      <Form onSubmit={onSubmit}>
        {createInputs(['name', 'description'], fieldsObject)}
        <button type="submit">Salvar</button>
      </Form>
    </PageLayout>
  );
}
