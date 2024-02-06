import React, { ReactNode } from "react";
import { TextProps as RNTextProps } from "react-native";

import { Text as RNText } from "./styles";

type Props = RNTextProps & {
  type:
    | "heading-0"
    | "heading-1"
    | "heading-2"
    | "heading-3"
    | "heading-4"
    | "body-0"
    | "body-1"
    | "body-2"
    | "body-3";
  fontWeight: "light" | "regular" | "medium" | "semiBold" | "bold";
  children: ReactNode;
};

export function Text({
  type = "body-0",
  fontWeight = "regular",
  children,
  ...rest
}: Props) {
  return (
    <RNText type={type} fontWeight={fontWeight} {...rest}>
      {children}
    </RNText>
  );
}
