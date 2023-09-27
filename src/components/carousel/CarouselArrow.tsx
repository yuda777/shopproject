import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils";

type Props = {
  arah: "left" | "right"
  canSlide: boolean,
  fnClick: () => void,
};

const CarouselArrow = ({ arah, canSlide, fnClick }: Props) => {
  return (
    <Button
      className={cn(
        "top-[50%] absolute cursor-pointer bg-transparent touch-manipulation tw-8 h-8 justify-center items-center p-0 border-0",
        (arah == "left") ? "left-2.5 " : "right-2.5 "
      )}
      disabled={!canSlide}
      onClick={fnClick}
      variant={'carousel'}
    >
      <Icons.chevron
        arah={arah}
        className="h-10 w-10 drop-shadow text-cotem"
        aria-hidden="true"
      />
      <span className="sr-only">Next slide</span>
    </Button >

  );
};
export default CarouselArrow;
