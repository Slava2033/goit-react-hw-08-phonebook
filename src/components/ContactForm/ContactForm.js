import FormContainer from '../FormComponents/FormContainer';
import { useState } from 'react';
import Form from '../FormComponents/Form';
import Input from '../FormComponents/Input';
import PrimaryButton from '../FormComponents/PrimaryButton';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { contactsSelectors } from 'redux/contacts';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import NumberFormat from 'react-number-format';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Name should not contain numbers')
    .required('First name is a required field'),
  number: yup
    .string()
    // .min(19)
    // .matches(/^([0-9]*)$/, 'Phone number should contain only numbers')
    .required('Phone number is a required field'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setNumber(value);
  };

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data, e) => {
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    dispatch(contactsOperations.addContact(data.name, data.number));
    e.target.reset();
    setNumber('');
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          type="text"
          name="name"
          label="Name"
          error={!!errors.name}
          helperText={errors?.name?.message}
          ref={register}
        />
        <NumberFormat
          type="tel"
          name="number"
          label="Phone number 0XX XXX XX XX"
          inputMode="numeric"
          autoComplete="tel"
          error={!!errors.number}
          helperText={errors?.number?.message}
          inputRef={register}
          customInput={Input}
          format="+38 (###) ### ## ##"
          mask="_"
          value={number}
          onChange={handleChange}
        />
        <PrimaryButton
          startIcon={<PersonAddIcon />}
          type="submit"
          color="primary"
          reset
        >
          Add contact
        </PrimaryButton>
      </Form>
    </FormContainer>
  );
}
