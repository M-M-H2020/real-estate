import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

const Banner = props => {
  return (
    <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
      <Image src={props.imgUrl} width={500} height={300} alt='banner' />
      <Box p='5'>
        <Text color='gray.500' fontSize='sm' fontWeight='medium'>
          {props.purpose}
        </Text>
        <Text fontSize='3xl' fontWeight='bold'>
          {props.title1}
          <br />
          {props.title2}
        </Text>
        <Text fontSize='lg' paddingY='3' color='gray.700' fontWeight='medium'>
          {props.desc1}
          <br />
          {props.desc2}
        </Text>
        <Button fontSize='xl'>
          <Link href={props.linkName}>{props.buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  )
}
export default Banner
