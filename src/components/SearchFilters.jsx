import { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import {
  Flex,
  Select,
  Box,
  Text,
  Spinner,
  Icon,
  Input,
  Button,
} from '@chakra-ui/react'
import { MdCancel } from 'react-icons/md'
import { filterData, getFilterValues } from '@utils/filterData'

export default function SearchFilters() {
  const router = useRouter()
  const [filters, setFilters] = useState(filterData)
  const searchProperties = filterValues => {
    const path = router.pathname
    const { query } = router

    const values = getFilterValues(filterValues)
    values.forEach(item => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })
    router.push({ pathname: path, query })
  }
  return (
    <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
      {filters.map(filter => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            w='fit-content'
            p='2'
            onChange={e =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter.items.map(item => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  )
}
