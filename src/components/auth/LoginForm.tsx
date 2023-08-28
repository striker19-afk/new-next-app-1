"use client";

import { Button } from "~/components/ui/Button";
import { CheckBox } from "~/components/ui/CheckBox";
import { Input } from "~/components/ui/Input";
import Label from "~/components/ui/Label";
import HyperLink from "~/components/ui/HyperLink";
import { useRouter } from "next/navigation";

type LoginFormProps = {
  onSubmit(event: React.FormEvent): void;
};

const inputFields = [
  {
    id: "email",
    label: "Email",
    type: "text",
    placeholder: "Enter your email",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter Password",
  },
];

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const router = useRouter();

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col space-y-6 min-w-[500px] m-auto bg-white p-8"
    >
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-black">
            Administrator Log In
          </h1>
          <p className="text-[#767676] mt-2">
            Helping businesses accomplish more.
          </p>
        </div>

        {inputFields.map((field, i) => {
          return (
            <div key={i} className="space-y-1">
              <Label htmlFor={field.id}>{field.label}</Label>
              <Input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
              />
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex space-x-2 items-center">
          <CheckBox id="remember-me" />
          <Label htmlFor="remember-me">Remember me</Label>
        </div>
        <HyperLink href="/reset-password">Forgot password?</HyperLink>
      </div>

      <Button
        onClick={() => router.push("/customers")}
        type="submit"
        buttonBackgroundColor="red"
      >
        Log In
      </Button>
    </form>
  );
};

export default LoginForm;
