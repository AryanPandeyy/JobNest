import { FC } from "react";

interface footerProps {}

const Footer: FC<footerProps> = () => {
  return (
    <div className="border-t-inherit absolute inset-x-0 bottom-0 border px-10 py-6">
      <div className="flex items-center flex-row justify-between">
        <div>
          <p className="font-semibold">Job Portal</p>
          <p className="text-slate-900 ">Connecting talent with opportunites</p>
        </div>
        <ul className="flex flex-row gap-2">
          <li>About Us</li>
          <li>Contact</li>
          <li>Term Of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="flex text-slate-400 justify-center">
        <p>2024 Job Portal,Inc.All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
