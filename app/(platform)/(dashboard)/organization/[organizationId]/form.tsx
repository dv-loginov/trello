'use client';

import { createBoard } from '@/actions/create-board';
import { useAction } from '@/hooks/use-action';
import { FormInput } from '@/components/form/form-input';
import { FormSubmit } from '@/components/form/form-submit';

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => console.log(data, 'Сделано'),
    onError: (error) => console.log(error, 'Ошибка'),
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput id="title" errors={fieldErrors} label="Название доски" />
      </div>
      <FormSubmit>Сохранить</FormSubmit>
    </form>
  );
};
