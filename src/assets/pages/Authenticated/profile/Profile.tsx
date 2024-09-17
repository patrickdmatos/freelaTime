import { Button, Card, Flex, Image, Text } from "@chakra-ui/react";
import { planning } from "../../../../json/data.json";
import { Navbar } from "../../../components/navbar";

export const Profile = () => {
  const monthlyTime = planning.hoursPerDay * (planning.daysAWeek * (52 / 12));

  const priceHour = parseFloat(planning.monthlyIncome) / monthlyTime;

  return (
    <>
      <Navbar />
      <Flex h={"100%"} w={"100%"} paddingInline={"12%"} paddingBlock={"5%"}>
        <Card minH={"65vh"} p={16}>
          <Flex
            flexDir={"column"}
            textAlign={"center"}
            w={"100%"}
            h={"100%"}
            gap={8}
          >
            <Image
              rounded={"100%"}
              border={"2px solid"}
              borderColor={"#F1972C"}
              src="../../../../public/vite.svg"
            />
            <Text fontSize={"x-large"} fontWeight={700}>
              Patrick
            </Text>
          </Flex>
          <Flex flexDir={"column"} textAlign={"center"}>
            <Text>O valor da sua hora é:</Text>
            <Text fontWeight={700} fontSize={"x-large"}>
              R$ {priceHour.toFixed(2)}
            </Text>
          </Flex>
          <Button w={48} mt={8} p={4}>
            Salvar dados
          </Button>
        </Card>
      </Flex>
    </>
  );
};
