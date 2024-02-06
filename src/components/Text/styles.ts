import { Text as RNText } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface Props {
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
}

const typeSize = {
  "heading-0": 48,
  "heading-1": 32,
  "heading-2": 24,
  "heading-3": 20,
  "heading-4": 18,
  "body-0": 16,
  "body-1": 14,
  "body-2": 12,
  "body-3": 10,
};

export const Text = styled(RNText)<Props>`
  font-family: ${({ theme, fontWeight }) => theme.fonts[fontWeight]};
  font-size: ${({ type }) => RFValue(typeSize[type])}px;
  color: ${({ theme }) => theme.colors.white};
`;
