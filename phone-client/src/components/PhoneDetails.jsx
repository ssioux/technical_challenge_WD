import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import { phonesDetailsService } from "../services/phones.services"

function PhoneDetails() {

const {id} = useParams()
const navigate = useNavigate()
console.log("🚀 ~ file: PhoneDetails.jsx:5 ~ PhoneDetails ~ id", id)

const [details, setdetails] = useState(null)
const [isFetching, setIsFetching] = useState(true)

useEffect(() => {

  getData()

}, [id])

const getData = async () => {

  try {
    const response = await phonesDetailsService(id)
    console.log("🚀 ~ file: PhoneDetails.jsx:19 ~ getData ~ response", response)
    setIsFetching(false)
    setdetails(response.data)
    navigate(`/${id}`)
  } catch (error) {
    console.log(error)
  }
}

if (isFetching === true) {
  return (
    <h3>...Loading</h3> 
    )
}

  return (
    <div>
        
        <img src={details.imageFileName} alt="phone" />
        <h2>{details.name}</h2>
        <p>{details.description}</p>
        <h3>{details.manufacturer}</h3>
        <p>Price: {details.price}</p>
        


        




    </div>
  )
}

export default PhoneDetails