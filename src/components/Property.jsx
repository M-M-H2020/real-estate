import Link from 'next/link'
import Image from 'next/image'
import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'
import defaultImage from '@assets/images/house.jpg'

export default function Property(property) {
  const {
    externalID,
    title,
    rentFrequency,
    baths,
    rooms,
    isVerified,
    area,
    price,
    coverPhoto,
    agency,
  } = property
  return (
    <Link href={`/property/${externalID}`}>
      <Flex
        flexWrap='wrap'
        w='420px'
        p='5'
        paddingTop='0'
        justifyContent='flex-start'
        cursor='pointer'
      >
        <Box>
          <Image
            src={coverPhoto ? coverPhoto.url : defaultImage}
            alt='house'
            width={400}
            height={260}
          ></Image>
        </Box>
        <Box w='full'>
          <Flex
            paddingTop='2'
            alignItems='center'
            justifyContent='space-between'
          >
            <Flex alignItems='center'>
              <Box paddingRight='3' color='green.400'>
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight='bold' fontSize='lg'>
                AED {millify(price)}
                {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
            <Box>
              <Avatar size='sm' src={agency?.logo?.url} />
            </Box>
          </Flex>
          <Flex
            alignItems='center'
            p='1'
            justifyContent='space-between'
            w='250px'
            color='blue.400'
          >
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{' '}
            <BsGridFill />
          </Flex>
          <Text fontSize='lg'>
            {30 < title.length ? `${title.substring(0, 30)}` : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  )
}
