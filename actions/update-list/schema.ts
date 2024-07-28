import { z } from 'zod';

export const UpdateList = z.object({
  title: z
    .string({
      required_error: 'Название обязательно',
      invalid_type_error: 'Некорректное название',
    })
    .min(3, { message: 'Название слишком короткое' }),
  id: z.string(),
  boardId: z.string(),
});
