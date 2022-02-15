import { Drink } from '@services/DrinksService/DTO';

import { InputObjectProps } from '@hooks/DTO/useFormsDTO';
import { useForms } from '@hooks/useForms';

import { PageLayout } from '@components/PageLayout';

export function CreateDrink() {
  const { createInputs } = useForms<Drink>();

  const fieldsObject = {
    name: {
      label: 'Título',
      validateField: true,
      errorMessage: 'Título é obrigatório',
    },
    description: {
      label: 'Descrição',
      validateField: true,
      errorMessage: 'Título é obrigatório',
    },
  } as InputObjectProps<Drink>;

  return (
    <PageLayout>
      <form>
        {createInputs(['name', 'description'], fieldsObject)}
      </form>
    </PageLayout>
  );
}
