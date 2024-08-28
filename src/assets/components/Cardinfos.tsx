import { Flex, Button, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import ArrayJobs from "../../json/data.json";
import { ButtonAddJob } from "./addJob";

interface NavbarInfoProps {
  value: number;
  description: string;
}

const NavbarInfo = ({ value, description }: NavbarInfoProps) => {
  return (
    <Flex w={"100%"} justifyContent={"space-between"} mb={4}>
      <Flex w={"80%"}>
        <Flex
          mt={2}
          w={"100%"}
          bgColor={"transparent"}
          color={"gray.100"}
          gap={2}
          flexDir={"column"}
        >
          <Text fontWeight={700} fontSize={"large"}>
            {value}
          </Text>
          <Text fontWeight={400} fontSize={"small"} opacity={0.7}>
            {description}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export const ResumoJobInfos = () => {
  const totalProjects = ArrayJobs.length;
  const ongoingProjects = ArrayJobs.filter(
    (job) => job.status === "Em Andamento"
  ).length;
  const closedProjects = ArrayJobs.filter(
    (job) => job.status === "Encerrado"
  ).length;

  return (
    <Flex w={"100%"} justifyContent={"space-between"} mb={4}>
      <Flex w={"40%"} flexDirection="row" gap={4}>
        <NavbarInfo value={totalProjects} description="Projetos ao total" />
        <NavbarInfo value={ongoingProjects} description="Em Andamento" />
        <NavbarInfo value={closedProjects} description="Encerrados" />
      </Flex>
      <Flex>
        <ButtonAddJob />
      </Flex>
    </Flex>
  );
};
