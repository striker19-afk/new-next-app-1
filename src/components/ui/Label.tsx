import { LabelHTMLAttributes } from "react";

type Props = { minWidth?: string };
const Label = ({
  children,
  minWidth,
  ...rest
}: LabelHTMLAttributes<HTMLLabelElement> & Props) => {
  return (
    <label
      style={{ minWidth }}
      {...rest}
      className="text-black text-[15px] whitespace-nowrap shrink-0"
    >
      {children}
    </label>
  );
};

export default Label;
