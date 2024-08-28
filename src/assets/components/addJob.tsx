import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";

export const ButtonAddJob = () => {
  return (
    <Button
      p={8}
      justifyContent={"center"}
      alignItems={"center"}
      w={"18rem"}
      gap={6}
    >
      <Flex
        _hover={{ bgColor: "brand.200" }}
        bgColor={"brand.200"}
        rounded={"5px"}
        p={3}
      >
        <AddIcon />
      </Flex>
      Adicionar novo trampo
    </Button>
  );
};
