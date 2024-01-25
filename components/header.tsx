import { FC } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

interface headerProps {}

const Header: FC<headerProps> = () => {
  return (
    <div className="border-b-inherit border py-6 px-64">
      <div className="flex items-center gap-4 justify-between">
        <p className="font-semibold text-xl">Job Portal</p>
        <Link href="/" className={cn(buttonVariants())}>
          Post a job
        </Link>
      </div>
    </div>
  );
};

export default Header;
