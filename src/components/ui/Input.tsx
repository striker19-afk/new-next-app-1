import PasswordInput from "./PasswordInput";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  inputWidth?: string;
  defaultText?: string;
};

export function Input({ type, inputWidth = "100%", ...rest }: InputProps) {
  switch (type) {
    case "password":
      return <PasswordInput {...rest} />;

    case "text":
      return (
        <input
          style={{
            width: inputWidth,
          }}
          className="bg-white px-2 h-10 border border-[#CCD2E5] text-gray-500 text-sm focus:ring-black focus:border-black block placeholder:text-gray-400 rounded-md transition ease-in-out duration-200 disabled:bg-[#F8F9FB] disabled:pointer-events-none"
          type="text"
          {...rest}
        />
      );
  }
}
