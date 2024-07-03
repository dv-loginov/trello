import { Hint } from '@/components/hint';
import { HelpCircle, User2 } from 'lucide-react';

export const BoardList = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <User2 className="h-6 w-6 mr-2" /> Твои доски
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          role="button"
          className="aspect-video relative h-full bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
        >
          <p className='text-sm'>Создать новую доску</p>
          <span className="text-xs"> осталось 5 </span>
          <Hint
            sideOffset={40}
            description={`На халяву можно создать 5 досок. Хочешь больше - спроси меня как.`}
          >
            <HelpCircle 
            className='absolute bottom-2 right-2 h-[14px] w-[14px]'/>
          </Hint>
        </div>
      </div>
    </div>
  );
};
