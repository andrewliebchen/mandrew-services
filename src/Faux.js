import { Flex, Box, Text } from "theme-ui";
import theme from "./theme";
import random from "lodash.random";

let Faux = {};

Faux.Text = props => {
  let lines = [];
  for (let step = 0; step < props.lines; step++) {
    lines.push(
      <Flex
        key={step}
        sx={{
          height: "1.5em",
          alignItems: "center",
          justifyContent: props.justify
        }}
      >
        <Box
          sx={{
            bg: "faux",
            height: "0.8em",
            width: `${
              step === props.lines - 1 ? random(25, 100) : random(95, 100)
            }%`
          }}
        />
      </Flex>
    );
  }

  return <Box sx={{ flex: 1 }}>{lines}</Box>;
};

Faux.Text.defaultProps = {
  lines: 5,
  justify: "start"
};

Faux.Avatar = props => {
  const size = theme.space[props.size];
  return (
    <Box sx={{ width: size, height: size, bg: "faux", borderRadius: size }} />
  );
};

Faux.Avatar.defaultProps = {
  size: 5
};

Faux.Image = props => (
  <Flex
    sx={{
      ...props,
      bg: "faux",
      flex: "1 1 auto",
      alignItems: "center",
      justifyContent: "center"
    }}
  />
);

export default Faux;
