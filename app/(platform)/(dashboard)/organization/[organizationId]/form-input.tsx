"use client"

import { Input } from '@/components/ui/input';
import { useFormStatus } from 'react-dom';

interface FormInputProps {
    errors?:{
        title?: string[];
    }
}

export const FormInput = ({errors}: FormInputProps) => {
 const {pending} = useFormStatus();
 
  return (
    <div className="">
      <Input
        type="text"
        id="title"
        name="title"
        placeholder="Введите название"
        required
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className="text-rose-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};
