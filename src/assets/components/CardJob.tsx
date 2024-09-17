import { Button, Card, Grid, GridItem, Text, Flex } from "@chakra-ui/react";
import { projects, planning } from "../../json/data.json";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { StatusText } from "./statusText";

// Calcula o tempo mensal considerando horas por dia e dias por semana
const monthlyTime = planning.hoursPerDay * planning.daysAWeek * (52 / 12); // Aproximadamente 4.33 semanas por mês

// Calcula o valor da hora de trabalho
const priceHour = parseFloat(planning.monthlyIncome) / monthlyTime;

console.log("preço", priceHour);

export const CardJob = () => {
  return (
    <>
      {projects.map((objJob) => (
        <Card
          key={objJob.id} // Melhor usar a ID única em vez do índice
          w={"100%"}
          minH={"6rem"}
          p={6}
          justifyContent={"center"}
          mb={4}
        >
          <Grid templateColumns="0.4fr 1fr 1.4fr 1fr 1.4fr 0.6fr" gap={4}>
            <GridItem gridArea={"0.3fr"}>
              <Text opacity={0.6}>{projects.indexOf(objJob) + 1}</Text>{" "}
              {/* Mostra a posição na lista */}
            </GridItem>
            <GridItem>
              <Text fontWeight={600}>{objJob.name}</Text>
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
                  {objJob.dailyHours > 0
                    ? objJob.totalHours / objJob.dailyHours
                    : "N/A"}{" "}
                  dias para entrega
                </Text>{" "}
                {/* Verifica se `dailyHours` é válido */}
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
                <Text fontWeight={600}>
                  R${" "}
                  {objJob.totalHours > 0
                    ? (priceHour * objJob.totalHours).toFixed(2)
                    : 0}
                </Text>{" "}
                {/* Verifica se `totalHours` é válido */}
              </Flex>
            </GridItem>
            <GridItem>
              <StatusText statusJob={"ENCERRADO"} />
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
