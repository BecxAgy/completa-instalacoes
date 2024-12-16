import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { Button } from "./ui/button";
import { sidebarLinks } from "@/constants";

const MobileNav = () => {
  return (
    <section className="w-full max-w-[264px] sm:hidden  ">
      <Sheet>
        <SheetTrigger asChild>
          <RiBarChartHorizontalLine className="cursor-pointer sm:hidden" />
        </SheetTrigger>
        <SheetContent side="right" className="border-none bg-white">
          <SheetTitle>
            <Image src="/assets/logo.svg" alt="logo" width={78} height={56} />
          </SheetTitle>

          <div className="flex h-[calc(100vh-72px)] hoverflow-y-visible flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className=" flex h-full flex-col gap-6 pt-16 ">
                {sidebarLinks.map((item: any) => {
                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        className="hover:text-red-primary flex gap-4 items-center p-4 rounded-lg w-full max-w-60 text-black"
                      >
                        <p className="font-semibold">{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>

            <Link href={'https://wa.link/lv1aol'} target="_blank">

            <Button className="bg-red-primary rounded-lg">Começar</Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
