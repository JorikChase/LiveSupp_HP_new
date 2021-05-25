import clsx from "clsx";
import React from "react";
import "./Button.css";

export type ButtonProps = React.PropsWithChildren<{
  type: "primary" | "secondary";
  href: string;
}>;

export default function Button({ children, type, href }: ButtonProps) {
  return (
    <a href={href} className={clsx("Button", `Button__${type}`)}>
      {children}
    </a>
  );
}
