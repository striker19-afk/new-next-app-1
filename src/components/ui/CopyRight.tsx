import { HTMLAttributes } from "react";

export const CopyRight = (props: HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className="text-[#767676] mx-auto" {...props}>
      &#169; All rights reserved by ACMO
    </p>
  );
};
