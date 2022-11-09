import { debounce } from "lodash";
import React,{useEffect, useState, useCallback} from 'react'
import { Grid, GridItem, Box, Image } from '@chakra-ui/react'
import { galleryData } from '../../Service/Index'
import Pagination from '../../Components/Pagination/Pagination'
import FullPageLoading from '../../Components/Loading/FullPageLoading'
import SearchInput from "../../Components/FormElement/Input/SearchInput"
import './GalleryStyle.css'
interface IData{
  title: string,
  subTitle: string,
  image: string,
  id: number
}

const Gallery = (): JSX.Element => {

  const [collection,setCollection]=useState<IData[]>([])
  const [page, setPage] = useState<number>(1)
  const [perPage, setPerPage] = useState<number>(9)
  const [search, setSearch] = useState<string>("test")
  const [totalPages, setTotalPages] = useState<number>(0)
  const [spinner, setSpinner] = useState<boolean>(true)
  const [searchLoading, setSearchLoading] = useState<boolean>(false)
    
  useEffect(()=>{
    setSpinner(true)
    getGaleries(search)
  },[page])

  const getGaleries = async(searchTerm = search) => {
    const params = `?page=${page}&per_page=${perPage}&query=${searchTerm ? searchTerm : 't'}`
    const result = await galleryData(params)
    try{
      let list:IData[] = []
      result?.photos?.forEach((item:any)=>{
        list.push({
          id: item.id,
          title: item.photographer,
          subTitle: item.alt,
          image: item?.src?.small  
        })
      })
      const totalPage = Math.ceil(result.total_results/perPage)
      setCollection(list)
      setTotalPages(totalPage)
    }catch(error){
      console.log('error', error)
    }
    setSpinner(false)
    setSearchLoading(false)
  }

  const handler = useCallback(debounce((val:string)=>{
    setSearchLoading(true)
    getGaleries(val)
  }, 1500), []);

  const handleSearch = (event: React.FormEvent<HTMLInputElement>): void => {
    setSearch(event.currentTarget.value)
    handler(event.currentTarget.value)
  }

  return (
    <div>
      <SearchInput
        value={search}
        loading={searchLoading}
        onChange={handleSearch}
      />
      {
        spinner ?
        <FullPageLoading/> :
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          {collection?.map((item:IData, index: number)=>{
            return(
              <GridItem w='100%' key={index}>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' className="galleryCard">
                  <Image src={item?.image}  width={300} />
                    <Box
                      noOfLines={1}
                      pt="1.5"
                        as='p'
                      textAlign="left"
                    > 
                      {item?.id}
                    </Box>
                    <Box
                    fontWeight='semibold'
                      as='h4'
                      lineHeight='tight'
                      noOfLines={1}
                    >
                      {item.title}
                    </Box>
                </Box>
              </GridItem>
            )
          })}
        </Grid>
      }
      <Pagination
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>

  )
}

export default Gallery