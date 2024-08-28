import { Box, Button, Card, Flex, Text } from "@chakra-ui/react";
import ArrayJobs from "../../json/data.json";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

export const CardJob = () => {
  return ArrayJobs.map((objJob, index) => (
    <Card
      w={"100%"}
      minH={"6rem"}
      p={6}
      justifyContent={"center"}
      marginBlock={2}
    >
      <Flex key={index} justifyContent={"space-between"}>
        <Text opacity={0.6}>{index + 1}</Text>
        <Text fontWeight={600}>{objJob.jobTitle}</Text>
        <Box>
          <Text>PRAZO</Text>
          <Text fontWeight={600}>{objJob.timeToFinish}</Text>
        </Box>
        <Box>
          <Text>VALOR</Text>
          <Text fontWeight={600}>R${objJob.price}</Text>
        </Box>
        <Text>{objJob.status}</Text>
        <Button>
          <EditIcon />
        </Button>
        <Button>
          <DeleteIcon />
        </Button>
      </Flex>
    </Card>
  ));
};
