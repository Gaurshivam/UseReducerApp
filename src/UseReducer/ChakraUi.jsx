import React, { useState } from 'react';
import { Center, Container } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Checkbox,Button } from '@chakra-ui/react'

const ChakraUi = () => {
    const [data, setdata] = useState({
        username:"",
        password:"",
        gender:"",
        textarea:"",
        city:"",
        caurse:[]
        
    })

    const changedata = () =>{
        console.log(data)
    }

    const handleform = (event) =>{
        setdata({
            ...data,
            [event.taraget.name]:event.target.value,
            
        })
    }
    return (
        <div>
            <Container mt={5}  boxShadow={"dark-lg"} height="550px" padding="10px">
                <Box my={5}>
                    <Input variant='outline' 
                    name='username' 
                    placeholder='User Name'  
                    onChange={handleform}/>
                </Box>
                <Box Box my={5}>
                    <Input variant='outline' 
                     type='password' 
                     placeholder='Create password' 
                     name='password' 
                     onChange={handleform}/>
                </Box>
                <Center>
                <Box Box my={5}>
                    <RadioGroup >
                        <Stack direction='row'>
                            <Radio name="gender" value='1' onChange={handleform}>Male</Radio>
                            <Radio name="gender" value='2' onChange={handleform}>Female</Radio>
                            <Radio name="gender" value='3' onChange={handleform}>Other</Radio>
                        </Stack>
                    </RadioGroup>
                </Box>
                </Center>
                <Box Box my={5}>
                    <Textarea name='textarea' placeholder='Add anything for help' />
                </Box>
                <Box Box my={5}>
                    <Select placeholder='Select option' name='city' onChange={handleform}>
                        <option value='Noida'>Noida</option>
                        <option value='Delhi'>Delhi</option>
                        <option value='Gurugram'>Gurugram</option>
                    </Select>
                </Box>
                <Center>
                <Box Box my={5}>
                    <Stack spacing={5} direction='row'>
                        <Checkbox  name='caurse' >HTML </Checkbox>
                        <Checkbox  name='caurse'>CSS</Checkbox>
                        <Checkbox name='caurse'  >JS</Checkbox>
                        <Checkbox  name='caurse'>REACT</Checkbox>
                    </Stack>
                </Box>
                </Center>
                
                <Center>
                <Box  Box my={5}>
                <Button onClick={changedata} colorScheme='blue'>Register</Button>
                </Box>
                </Center>
                
            </Container>
        </div>
    );
}

export default ChakraUi;
