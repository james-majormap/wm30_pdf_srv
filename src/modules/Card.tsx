import React from "react";
import { View } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

interface CardProps {
  children: React.ReactNode;
  style?: Style;
}

const Card = (props: CardProps) => <View style={{
  padding: 15,
  border: "1px solid #D4D4D4",
  backgroundColor: "#FFF",
  fontSize: 9,
  ...(props.style ? props.style : {}),
}}>
  <React.Fragment>{props.children}</React.Fragment>
</View>;

export default Card;
