type Colors = "red" | "navy" | "green" | "grey" | "lightgrey";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonBackgroundColor?: Colors;
  buttonStyle?: "solid" | "outline";
  borderColor?: Colors;
  buttonMinWidth?: string;
  buttonHeight?: string;
};
export function Button({
  children,
  buttonBackgroundColor,
  buttonStyle = "solid",
  borderColor,
  buttonMinWidth = "10px",
  buttonHeight = "40px",
  ...rest
}: ButtonProps) {
  const colorStyle: { [key: string]: string } = {
    red: "#C32446",
    navy: "#142573",
    green: "#1D856C",
    grey: "#7D7D85",
    lightgrey: "#F8F9FB",
  };

  const getBackgroundColor = () => {
    switch (buttonStyle) {
      case "solid":
        return buttonBackgroundColor
          ? colorStyle[buttonBackgroundColor]
          : "black";
      case "outline":
        return borderColor && buttonBackgroundColor
          ? colorStyle[buttonBackgroundColor]
          : "transparent";
    }
  };

  return (
    <button
      style={{
        backgroundColor: getBackgroundColor(),
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: borderColor
          ? colorStyle[borderColor]
          : buttonBackgroundColor
          ? colorStyle[buttonBackgroundColor]
          : "transparent",
        color:
          buttonStyle === "outline"
            ? borderColor
              ? colorStyle[borderColor]
              : "black"
            : "white",
        minWidth: buttonMinWidth,
        height: buttonHeight,
        textAlign: "center",
      }}
      {...rest}
      className="hover:opacity-70 px-4 transition ease-in-out duration-200 rounded-md disabled:pointer-events-none disabled:opacity-50 text-center"
    >
      {children}
    </button>
  );
}
