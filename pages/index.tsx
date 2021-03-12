// import Head from 'next/head'

import { Button, Flex, Text } from '@chakra-ui/core';
import { Image } from "@chakra-ui/react";
import { FormEvent, useState } from 'react';
import Input from '../components/Input';
import axios from 'axios';


export default function Home() {
  const [email, setEmail] = useState('');

  function handleSignUpToNewsletter(event: FormEvent) {
    event.preventDefault();

    axios.post('/api/subscribe', { email })
  }

  return (
    <Flex
      as="main"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        as="form"
        onSubmit={handleSignUpToNewsletter}
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%"
        maxW="400px"
      >
        <Image objectFit="cover" marginBottom={8} src="/coffee.svg" alt="Hot Coffee" />

        <Text textAlign="center" fontSize="sm" color="gray.400" marginBottom={2}>
          Assine a newsletter da Coffe Co. e receba os melhores conteúdos sobre café!
        </Text>

        <Input
          placeholder="Seu melhor e-mail"
          marginTop={2}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Button
          type="submit"
          backgroundColor="gray.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: 'gray.400' }}
        >
          INSCREVER
        </Button>
      </Flex>
    </Flex>
  )
}