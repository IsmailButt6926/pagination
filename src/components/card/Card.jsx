import React,{useState,useEffect} from 'react'
import { fetchApi } from '../../services/api'
import Paginate from '../paginate/Paginate'

const Card = () => {

  const [items, setItems] = useState([])

  const [pageCount, setPageCount]= useState()

  const [pageDetails, setPageDetails]= useState({
    pageNumber:1,
    pageSize:12
  })

  const getApi = async () => {
    try {
      //argument ma pura object send kr rhy hain
      const response = await fetchApi(pageDetails)
      setItems(response?.data)
      //total number of data
      const totalCount = parseInt(response.headers['x-total-count'])
      setPageCount(totalCount/12)
    } catch (error) {
      console.log(error)
    }
  }
 
  useEffect(() => {
    getApi()
  },[pageDetails])

  const handleChange = (data) => {
    setPageDetails({
      ...pageDetails,
      pageNumber:data
    })

  }
  return (
<>
    <div className='flex flex-wrap m-5 gap-5'>
      {
        items.map((element,index) => {
          return (
            <div key={index}>
            <a href="#" class="block max-w-sm p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h1 className="flex justify-center">{element?.id}</h1>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{element?.email}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">{element?.body}</p>
          </a>
          </div>
          )
        })
      }
     
    </div>

    <Paginate onPageChange={handleChange} totalPages={pageCount}/>
    </>
  )
}

export default Card