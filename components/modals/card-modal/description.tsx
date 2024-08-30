'use client';

import { FormSubmit } from '@/components/form/form-submit';
import { FormTextarea } from '@/components/form/form-textarea';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { CardWithList } from '@/types';
import { useQueryClient } from '@tanstack/react-query';
import { AlignLeft } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState, useRef, ElementRef } from 'react';
import { useEventListener, useOnClickOutside } from 'usehooks-ts';

interface DescriptionProps {
  data: CardWithList;
}

export const Description = ({ data }: DescriptionProps) => {
  const params = useParams();

  const queryClient = useQueryClient();

  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef<ElementRef<'textarea'>>(null);
  const formRef = useRef<ElementRef<'form'>>(null);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      textareaRef.current?.focus();
      textareaRef.current?.select();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      disableEditing();
    }
  };

  useEventListener('keydown', onKeyDown);
  useOnClickOutside(formRef, disableEditing);

  const handleSubmit = (formData: FormData) => {
    const description = formData.get('description') as string;
    const boardId = params.boardId as string;

    //     execute({
    //       title,
    //       id,
    //       boardId,
    //     });
  };

  return (
    <div className="flex items-start gap-x-3 w-full">
      <AlignLeft className="h-5 w-5 mt-0.5 text-neutral-700" />
      <div className="w-full">
        <p className="font-semibold text-neutral-700 mb-2">Описание</p>
        {isEditing ? (
          <form action=""
          ref={formRef}
          className='space-y-2'
          >
            <FormTextarea 
                id='description'
                className='w-full mt-2'
                placeholder='Есть что добавить - давай'
                defaultValue={data.description || undefined}
            />
            <div className="flex items-center gap-x-2">
                <FormSubmit>Сохранить</FormSubmit>
                <Button
                    type='button'
                    onClick={disableEditing}
                    size='sm'
                    variant='ghost'
                >Отменить</Button>
            </div>
          </form>
        ) : (
          <div
            onClick={enableEditing}
            role="button"
            className="min-h-[78px] bg-neutral-200 text-sm font-medium py-3 px-3.5 rounded-md"
          >
            {data.description || 'Есть что добавить ...'}
          </div>
        )}
      </div>
    </div>
  );
};

Description.Skeleton = function DescriptionSkeleton() {
  return (
    <div className="flex flex-start gap-x-3 w-full">
      <Skeleton className="h-6 w-6 bg-neutral-200" />
      <div className="w-full">
        <Skeleton className="h-6 w-24 mb-2 bg-neutral-200" />
        <Skeleton className="h-[78px] w-full bg-neutral-200" />
      </div>
    </div>
  );
};
