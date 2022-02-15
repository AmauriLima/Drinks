import { Drink } from '@services/DrinksService/DTO';

import { InputObjectProps } from '@hooks/DTO/useFormsDTO';
import { useForms } from '@hooks/useForms';

import { PageLayout } from '@components/PageLayout';

import { Form } from './styles';

export function CreateDrink() {
  const { createInputs } = useForms<Drink>();

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

  return (
    <PageLayout>
      <Form>
        {createInputs(['name', 'description'], fieldsObject)}
      </Form>
    </PageLayout>
  );
}
