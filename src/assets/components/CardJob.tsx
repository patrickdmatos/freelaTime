import { Button, Card, Grid, GridItem, Text, Flex } from "@chakra-ui/react";
import ArrayJobs from "../../json/data.json";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { StatusText } from "./statusText";

export const CardJob = () => {
  return (
    <>
      {ArrayJobs.map((objJob, index) => (
        <Card
          key={index}
          w={"100%"}
          minH={"6rem"}
          p={6}
          justifyContent={"center"}
          mb={4}
        >
          <Grid templateColumns="0.4fr 1fr 1.4fr 1fr 1.4fr 0.6fr" gap={4}>
            <GridItem gridArea={"0.3fr"}>
              <Text opacity={0.6}>{index + 1}</Text>
            </GridItem>
            <GridItem>
              <Text fontWeight={600}>{objJob.jobTitle}</Text>
            </GridItem>
            <GridItem>
              <Flex
                flexDir={"column"}
                textAlign={"start"}
                alignItems={"flex-start"}
              >
                <Text opacity={0.5} fontWeight={600}>
                  PRAZO
                </Text>
                <Text fontWeight={600}>
                  {objJob.timeToFinish} dias para entrega
                </Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex
                flexDir={"column"}
                textAlign={"start"}
                alignItems={"flex-start"}
              >
                <Text opacity={0.5} fontWeight={600}>
                  VALOR
                </Text>
                <Text fontWeight={600}>R$ {objJob.price},00</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <StatusText statusJob={objJob.status} />
            </GridItem>
            <GridItem>
              <Flex gap={2}>
                <Button
                  bg={"gray.500"}
                  _hover={{ bg: "gray.400" }}
                  _active={{ bg: "gray.300" }}
                  aria-label="Editar trabalho"
                >
                  <EditIcon />
                </Button>
                <Button
                  bg={"gray.500"}
                  _hover={{ bg: "gray.400" }}
                  _active={{ bg: "gray.300" }}
                  aria-label="Excluir trabalho"
                >
                  <DeleteIcon />
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </Card>
      ))}
    </>
  );
};
