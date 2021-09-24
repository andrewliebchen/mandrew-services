import { Box, Flex, Divider } from "theme-ui";
import Faux from "./Faux";

const Post = props => (
  <Flex sx={{ flexDirection: "column", gap: 3, flex: 1, p: 3 }}>
    <Flex sx={{ alignItems: "center", gap: 3, flex: 1 }}>
      <Faux.Avatar />
      <Faux.Text lines={2} />
    </Flex>
    <Faux.Image height={300} />
    <Faux.Text lines={4} />
  </Flex>
);

const App = props => {
  return (
    <Box>
      <Post />
      <Divider />
      <Post />
    </Box>
  );
};

export default App;
