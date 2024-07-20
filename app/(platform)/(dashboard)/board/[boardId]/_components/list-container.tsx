'use client';

import { ListWithCards } from '@/types';
import { ListForm } from './list-form';

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}

export const ListContainer = ({ data, boardId }: ListContainerProps) => {
  return (
    <ol className="">
        <ListForm />
      <div className="flex-shrink-0" />
    </ol>
  );
};
