import { z } from 'zod';

export const UpdateCard = z.object({
  boardId: z.string(),
  description: z.optional(
    z
      .string({
        required_error: 'Описание обязательно',
        invalid_type_error: 'Некорректное описание',
      })
      .min(3, { message: 'Слишком короткое описание' }),
  ),
  title: z
    .string({
      required_error: 'Название обязательно',
      invalid_type_error: 'Некорректное название',
    })
    .min(3, { message: 'Название слишком короткое' }),
  id: z.string(),
});
