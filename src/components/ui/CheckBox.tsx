type InputProps = React.HTMLProps<HTMLInputElement> & {};

export function CheckBox(props: InputProps) {
  return (
    <input
      type="checkbox"
      className="bg-white w-[18px] h-[18px] border border-[#D0D0DA] rounded-md text-black focus:ring-black focus:ring-opacity-50 cursor-pointer"
      {...props}
    />
  );
}
