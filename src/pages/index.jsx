import { Flex, Box } from '@chakra-ui/react'
import { baseUrl, fetchApi } from '@utils/fetchApi'
import Banner from '@components/Banner'
import Property from '@components/Property'

export default function Home({ propertiesForSale, propertyForRent }) {
  return (
    <Box>
      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose-for-rent'
        imgUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      <Flex flexWrap='wrap'>
        {propertyForRent.map(property => (
          <Property key={property.agency.id} {...property} />
        ))}
      </Flex>
      <Banner
        purpose='BUY A HOME'
        title1=' Find, Buy & Own Your'
        title2='Dream Home'
        desc1=' Explore from Apartments, land, builder floors,'
        desc2=' villas and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imgUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />
      {/* Fetch the props & map over them */}
      <Flex flexWrap='wrap'>
        {propertiesForSale.map(property => (
          <Property key={property.agency.id} {...property} />
        ))}
      </Flex>
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  )
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  )
  return {
    props: {
      propertiesForSale: propertyForSale.hits,
      propertyForRent: propertyForRent.hits,
    },
  }
}
