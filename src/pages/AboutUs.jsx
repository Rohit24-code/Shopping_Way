import {
  background,
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../component/Navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "teal",
        }}
      >
        <Heading size="md">About us</Heading>

        <Card mt="50px">
          <CardHeader>
            <Heading size="md">Client Report</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Summary
                </Heading>
                <Text pt="2" fontSize="sm">
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Rohit Singh
                </Heading>
                <Text pt="2" fontSize="sm">
                  Had Good experience shopping from this website
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Prashant singh
                </Heading>
                <Text pt="2" fontSize="sm">
                  Good collection of products at this website
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  akash
                </Heading>
                <Text pt="2" fontSize="sm">
                  Quit impressive work
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Vivek agrawal
                </Heading>
                <Text pt="2" fontSize="sm">
                  Check out the overview of your clients
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Sonali
                </Heading>
                <Text pt="2" fontSize="sm">
                  Good ui like it.
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Analysis
                </Heading>
                <Text pt="2" fontSize="sm">
                  See a detailed analysis of all your business clients.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
