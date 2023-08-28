import Image from "next/image";
import React from "react";
import { AcmoPageBackgroundVector } from "~/components/assets/vectors";
import { CopyRight } from "~/components/ui/CopyRight";

type AuthLayoutProps = {
  children?: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen w-full bg-[#F1F2F3] p-10 flex flex-col relative overflow-clip">
      <AcmoPageBackgroundVector className="absolute -right-28 -top-28 z-0" />
      <div className="flex flex-col justify-center max-w-lg m-auto space-y-4 z-10">
        <Image
          src="/acmo_main_logo.png"
          alt="acmo main logo"
          width={160}
          height={74}
          className="mx-auto -mt-20"
        />
        {children}
      </div>
      <CopyRight />
    </div>
  );
};

export default AuthLayout;
