import {
  Stack,
  TextField,
  Button,
  Form,
  Card,
  CardActionArea, // TO DO: take this out?
} from '@react-monorepo/web/design-system'; //TO DO: Create a Card component in design-system, Create a Form component in design-system,  Create a Stack component in design-system, Create a TextField component in design-system, Create a Button component in design-system, Create a CardActionArea component in design-system
import { useState } from 'react';
import { UserCreate, userCreateSchema } from '@react-monorepo/shared/types'; //TO DO: Create a UserCreate type in shared/types
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm, SubmitHandler, Controller } from 'react-hook-form'; // TO DO: research react-hook-form, and if you need this import
import { useRegister } from '../hooks';

export interface RegisterProps {
  onSubmit: (user: UserCreate) => void;
}

export const Register = () => {
  const { onCreateUser } = useRegister();
  return (
    <Card
      title="Register"
      sx={{
        padding: '1rem',
      }}
    >
      <Form
        schema={userCreateSchema}
        defaultValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          mobile: '',
        }}
        onSubmit={onCreateUser}
        questions={[
          {
            label: 'First Name',
            type: 'text',
            name: 'firstName',
            placeholder: 'First Name',
            required: true,
          },
          {
            label: 'Last Name',
            type: 'text',
            name: 'lastName',
            placeholder: 'Last Name',
            required: true,
          },
          {
            label: 'Email',
            type: 'email',
            name: 'email',
            placeholder: 'Email',
            required: true,
          },
          {
            label: 'Password',
            type: 'password',
            name: 'password',
            placeholder: 'Password',
            required: true,
          },
          {
            label: 'Mobile',
            type: 'tel',
            name: 'mobile',
            placeholder: 'Mobile',
            required: true,
          },
        ]}
      />
    </Card>
  );
};
