import React from "react";
import { Container, Current, Previous, Screen } from "./Styled";

export default function Calculator() {
  return (
    <Container>
      <Screen>
        <Previous>1</Previous>
        <Current>2</Current>
      </Screen>
    </Container>
  );
}
