import { z } from 'zod';

export const CreateBoard = z.object({
  title: z
    .string({
      required_error: 'Название обязательно',
      invalid_type_error: 'Некорректное название',
    })
    .min(3, { message: 'Название слишком короткое' }),
  image: z.string({
    required_error: 'Изображение обязательно',
    invalid_type_error: 'Некорректное изображение',
  }),
});
