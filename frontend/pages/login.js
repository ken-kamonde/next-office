import React, {useState} from 'react';
import Router from 'next/router';
import { useMachine } from '@xstate/react';
import { Machine } from 'xstate';
import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Link, Button, Heading, Text, useColorModeValue } from '@chakra-ui/react';

const toggleMachine = Machine({
  id: 'toggle',
  initial: 'loggedOut',
  states:{
    loggedOut: {
      on: { TOGGLE: 'loggedIn' }
    },
    loggedIn: {
      on: { TOGGLE: 'loggedOut' }
    }
  }
})

export const Login = () => {

  const [csrfToken, setscrf] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');
  const [state, send] = useMachine(toggleMachine);

  React.useEffect(() => {

    fetch("http://localhost:8000/account/csrf/", {
      credentials: "include",
    })
    .then((res) => {
      let csrfToken = res.headers.get("X-CSRFToken")
      setscrf(csrfToken);
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/account/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      credentials: "include",
      body: JSON.stringify({username: username, password: password}),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Connecting problem');
      }
    })
    .then((data) => {
      console.log(data);
      send('TOGGLE')
      // Router.push('/dashboard');
    })
    .catch((err) => {
      console.log(err);
      setError("Username or password Incorrect");
    });
    
  }
  console.log(state.value)

  return (
    <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <form onSubmit={handleSubmit} noValidate>
                  <FormControl id="email">
                    <FormLabel>User Name</FormLabel>
                    <Input type="text" 
                          id="username"
                          label="Username"
                          name="username"
                          autoComplete="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          autoFocus
                     />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input name="password"
                          label="Password"
                          type="password"
                          id="password"
                          value={password} 
                          onChange={(e) => setPassword(e.target.value)}
                          autoComplete="current-password"
                     />
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'start'}
                      justify={'space-between'}>
                      <Checkbox>Remember me</Checkbox>
                      <Link color={'blue.400'}>Forgot password?</Link>
                    </Stack>
                    <Button
                      type="submit"
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}>
                      Sign in
                    </Button>
                  </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  )
}

export default Login;