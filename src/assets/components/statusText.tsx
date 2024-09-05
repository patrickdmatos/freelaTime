import { Flex, Text } from "@chakra-ui/react";

export const StatusText = ({ statusJob }: { statusJob: string }) => {
  // Definindo cores com base no status
  let bgColor = "";
  let textColor = "";

  switch (statusJob) {
    case "Na fila":
      bgColor = "blue.100";
      textColor = "blue.800";
      break;
    case "Encerrado":
      bgColor = "green.100";
      textColor = "green.800";
      break;
    case "Em Andamento":
      bgColor = "purple.100";
      textColor = "purple.800";
      break;
    default:
      bgColor = "gray.100"; // Cor padrão para status desconhecido
      textColor = "gray.800";
  }

  return (
    <Flex
      w={36}
      marginInline={2}
      rounded={"full"}
      textColor={textColor}
      justifyContent={"center"}
      p={2}
      bg={bgColor}
    >
      <Text>{statusJob}</Text>
    </Flex>
  );
};
