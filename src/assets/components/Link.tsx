import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface CustomLinkProps {
  routerTo: string;
  linkColor: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  routerTo,
  linkColor,
  children,
}) => {
  return (
    <ChakraLink
      as={RouterLink}
      to={routerTo}
      color={linkColor}
      fontWeight="bold"
      m={1}
    >
      {children}
    </ChakraLink>
  );
};

export default CustomLink;
