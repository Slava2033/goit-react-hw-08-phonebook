import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import FormContainer from '../components/FormComponents/FormContainer';
import Form from '../components/FormComponents/Form';
import Input from '../components/FormComponents/Input';
import PrimaryButton from '../components/FormComponents/PrimaryButton';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Input
          type="email"
          name="email"
          value={email}
          label="Email"
          onChange={handleChange}
        />

        <Input
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
        />
        <PrimaryButton type="submit" color="primary">
          Войти
        </PrimaryButton>
      </Form>
    </FormContainer>
  );
}
