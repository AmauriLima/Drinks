import { FormEvent, FormEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectDrinks } from 'src/redux/slices/drinkSlice';

import { Drink } from '@services/DrinksService/DTO';
import { createDrink } from '@services/DrinksService/redux';

import { InputObjectProps } from '@hooks/DTO/useFormsDTO';
import { useForms } from '@hooks/useForms';

import { PageLayout } from '@components/PageLayout';

import { Form } from './styles';

export function CreateDrink() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { createInputs, values, errors } = useForms<Drink>();
  const drinks = useSelector(selectDrinks);
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

  const isFormValid = errors.length === 0 && values.name && values.description;
  const onSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent) => {
    event.preventDefault();
    try {
      dispatch(createDrink({ prevState: drinks, drinkData: values }));
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PageLayout>
      <Form onSubmit={onSubmit}>
        {createInputs(['name', 'description'], fieldsObject)}
        <button disabled={!isFormValid} type="submit">Salvar</button>
      </Form>
    </PageLayout>
  );
}
