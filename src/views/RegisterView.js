import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useForm } from 'react-hook-form';
import FormContainer from '../components/FormComponents/FormContainer';
import Form from '../components/FormComponents/Form';
import Input from '../components/FormComponents/Input';
import PrimaryButton from '../components/FormComponents/PrimaryButton';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('First name is a required field'),
  email: yup
    .string()
    .email('Email should have correct format')
    .required('Email is a required field'),
  password: yup.string().required('Password is a required field'),
});

export default function RegisterView() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = data => {
    dispatch(authOperations.register(data));
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(handleFormSubmit)} autoComplete="off">
        <Input
          type="text"
          name="name"
          label="Name"
          ref={register}
          error={!!errors.name}
          helperText={errors?.name?.message}
        />

        <Input
          type="email"
          name="email"
          label="Email"
          ref={register}
          error={!!errors.email}
          helperText={errors?.email?.message}
        />

        <Input
          type="password"
          name="password"
          label="Password"
          ref={register}
          error={!!errors.password}
          helperText={errors?.password?.message}
        />

        <PrimaryButton type="submit" color="primary">
          Зарегистрироваться
        </PrimaryButton>
      </Form>
    </FormContainer>
  );
}
