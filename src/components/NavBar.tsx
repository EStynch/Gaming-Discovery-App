import { Box, Flex, Img } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <Flex gap="135">
      <Box marginX="3">
        <Img src={logo} boxSize="60px" />
      </Box>
      <Box padding="10px" flexGrow="1">
        <SearchInput onSearch={onSearch} />
      </Box>
      <Box padding="15px">
        <ColorModeSwitch />
      </Box>
    </Flex>
  );
};

export default NavBar;
