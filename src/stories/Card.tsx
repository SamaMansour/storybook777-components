import React from 'react';
import './card.css';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Stack, Box, StackDivider, Radio, RadioGroup, Divider, Link, Icon, Center, Button, ButtonGroup, CreateIcon} from '@chakra-ui/react';
import { createIcon } from '@chakra-ui/icons';
import { MdStarRate, MdEdit } from 'react-icons/md'

/* eslint-disable */
interface CardProps {
  
  borderColor?: string;
  size?: 'small' | 'medium' | 'large';
  language?: 'left' | 'right'
  label: string;
  description?: string;
  value?: string
  onClick?: () => void;
}

export const UpDownIcon = createIcon({
  displayName: 'UpDownIcon',
  viewBox: '0 0 200 200',
  path: (
    <path
      fill='red'
      d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
    />
  ),
})
export const ItemCard = ({
  size = 'medium',
  language = 'right',
  borderColor,
  label,
  description,
  value,
  onClick,
  ...props
}: CardProps) => {
  const [border, setBorder] = React.useState('white');
  const [buttonValue, setButtonValue] = React.useState('2')
  const controlBorder = ()=>{
    setButtonValue('1');
    console.log("hello");
    setBorder('grey.400')

  }

  return (

  <Card w ='100%' border='1px' borderColor= {border}>
  <CardHeader>
  <RadioGroup  onChange={controlBorder} value={buttonValue}>
  <Stack spacing={16} direction='row'>
    <Radio value='1' onClick = {()=> setBorder('grey')}>
    <Heading size='md' textAlign = {language}>{label}</Heading>
    </Radio>
    <ButtonGroup spacing='6'>
      <Button flex='1' colorScheme='whiteAlpha' leftIcon={ <Icon as={MdStarRate} w={8} h={8} color='blue.500' />}>
      </Button>
      <Button flex='1'colorScheme='whiteAlpha' leftIcon={ <Icon as={MdEdit} w={8} h={8} color='blue.500' />}>
      </Button>
</ButtonGroup>
  </Stack>
</RadioGroup>


</CardHeader>
  <Center>
  <Divider width = '80%' />
  </Center>
  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box p ={12} >
        <Text pt='2' fontSize='sm' textAlign = {language}>
          {description}
        </Text>
         <Text color='blue.400' fontSize='1xl'>
          {value}
         </Text>
        <Link color= 'blue'>Show Items</Link>
      </Box>
    </Stack>
  </CardBody>
</Card>
  );
};
