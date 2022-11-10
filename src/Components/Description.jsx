import { Box, Button, Collapse, Typography } from "@mui/material";
import { Divider } from "@mui/material";

import React, { useState } from "react";

function Description({ text }) {
  const [seeMore, setSeeMore] = useState(false);

  function createDescription() {
    return { __html: text };
  }

  const handleChange = () => {
    setSeeMore((prev) => !prev);
  };

  const buttonSeeMore = (
    <Button
      onClick={handleChange}
      sx={{ fontWeight: "700", color: "secondary.main" }}
    >
      {!seeMore ? "Ver más" : "Ver menos"}
    </Button>
  );

  return (
    <>
      <Collapse in={seeMore} collapsedSize={85} orientation="vertical">
        <Typography
        className="text"
          variantMapping={"p"}
          dangerouslySetInnerHTML={createDescription()}
          align="justify"
          sx={{ textAlign: "justify", textJustify: "inter-word" }}
        />
      </Collapse>
      <Divider sx={{ mb: 2 }}>
        <Box sx={{ textAlign: "center" }}>{buttonSeeMore}</Box>
      </Divider>
    </>
  );
}

export default Description;
