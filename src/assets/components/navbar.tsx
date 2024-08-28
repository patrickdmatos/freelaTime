import { TimeIcon } from "@chakra-ui/icons";
import { Card, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { CardJob } from "./CardJob";
import { ResumoJobInfos } from "./Cardinfos";

export const Navbar = () => {
  return (
    <Card
      bgColor={"#41414C"}
      w={"100vw"}
      h={"10vh"}
      rounded={"none"}
      top={0}
    ></Card>
  );
};

export const HomeNavbar = () => {
  const FreeHours = 4;
  return (
    <Flex
      paddingInline={"4rem"}
      paddingBlock={"1.1rem"}
      bgColor={"#41414C"}
      color={"gray.100"}
      flexDir={"column"}
      rounded={"none"}
      w={"100vw"}
      h={"18rem"}
      top={0}
    >
      <Flex justifyContent={"space-between"}>
        <Image
          h={"4rem"}
          rounded={"100%"}
          border={"1px solid purple"}
          src="../../../../public/vite.svg"
        ></Image>
        <Flex
          alignItems={"center"}
          textAlign={"center"}
          justifyContent={"center"}
          w={"100%"}
          gap={2}
        >
          <TimeIcon color={"yellow.400"} w={6} h={6} />
          <Text>Você tem {FreeHours} horas livres no seu dia</Text>
        </Flex>

        <Flex gap={4}>
          <Flex
            flexDir={"column"}
            alignItems={"start"}
            w={"6.5rem"}
            h={"0.6rem"}
          >
            <Text fontWeight={600} fontSize={"large"}>
              Patrick
            </Text>
            <Text fontWeight={400} fontSize={"medium"}>
              Ver Perfil
            </Text>
          </Flex>
          <Image
            h={"4rem"}
            rounded={"100%"}
            border={"1px solid purple"}
            src="../../../../public/vite.svg"
          ></Image>
        </Flex>
      </Flex>
      <Divider marginBlock={6} />
      <ResumoJobInfos />
      <CardJob />
    </Flex>
  );
};
