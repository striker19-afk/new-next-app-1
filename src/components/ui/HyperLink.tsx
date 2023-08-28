import Link, { LinkProps } from "next/link";
type Props = { children?: React.ReactNode; fontSize?: string };
const HyperLink = ({
  children,
  fontSize = "15px",
  ...rest
}: LinkProps & Props) => {
  return (
    <Link
      style={{
        fontSize,
      }}
      className="hover:opacity-75"
      {...rest}
    >
      {children}
    </Link>
  );
};

export default HyperLink;
