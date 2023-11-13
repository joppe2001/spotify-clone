import * as dialog from '@radix-ui/react-dialog';
import { IoMdClose } from 'react-icons/io';

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return (
    <dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <dialog.Portal>
        <dialog.Overlay
          className="
        inset-0
        bg-neutral-900/90
        backdrop-blur-sm
        fixed
        "
        />
        <dialog.Content
          className="
            fixed
            drop-shadow-md
            border
            border-neutral-700
            top-[50%]
            left-[50%]
            max-h-full
            h-full
            md:h-auto
            md:max-h-[85vh]
            w-full
            md:w-[90vw]
            md:max-w-[450px]
            translate-x-[-50%]
            translate-y-[-50%]
            rounded-md
            bg-neutral-800
            p-[25px]
            focus:outline-none
          "
        >
          <dialog.Title
            className="
              text-xl
              text-center
              font-bold
              mb-4
            "
          >
            {title}
          </dialog.Title>
          <dialog.Description
            className="
              text-center
              text-sm
              mb-5
              leading-normal
            "
          >
            {description}
          </dialog.Description>
          <div>
            {children}
          </div>
          <dialog.Close asChild>
            <button>
              <IoMdClose 
              className="
                text-neutral-400
                hover:text-white
                absolute
                top-[10px]
                right-[10px]
                inline-flex
                h-[25px]
                w-[25px]
                appearance-none
                items-center
                justify-center
                rounded-full
                focus:outline-none
              " />
            </button>
          </dialog.Close>
        </dialog.Content>
      </dialog.Portal>
    </dialog.Root>
  );
};
