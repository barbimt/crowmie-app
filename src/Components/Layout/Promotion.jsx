import { Container } from "@mui/system";
import React from "react";
import { useData } from "../../hooks/useData";
import { useLanguage } from "../../hooks/useLanguage";
import Description from "../Description";
import Subtitle from "./../Subtitle";

function Promotion() {
  const { promoterData } = useData();
  const { language } = useLanguage();

  const text =
    language === "es"
      ? promoterData.description.es
      : promoterData.description.en;

  return (
    <Container sx={{ textAlign: "center" }}>
      <Subtitle text={
        promoterData.name} />
      <Description text={text} />
      
    </Container>
  );
}

export default Promotion;
