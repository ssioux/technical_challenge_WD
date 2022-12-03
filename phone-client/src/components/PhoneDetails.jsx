import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { phonesDetailsService } from "../services/phones.services";
import Spinner from "react-bootstrap/Spinner";
// import img0 from "../images/IPhone_7.png"
// import img1 from "../images/Galaxy_S7.png"
// import img2 from "../images/Honor_10.png"
// import img3 from "../images/P10_Lite.jpg"
// import img4 from "../images/Nokia_7.1.jpg"
// import img5 from "../images/ZenPhone_5.jpg"
// import img6 from "../images/Xiaomi_MI_A2.jpeg"
// import img7 from "../images/Moto_G6.png"
// const images = [img0, img1, img2, img3, img4, img5, img6, img7]

function PhoneDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("🚀 ~ file: PhoneDetails.jsx:5 ~ PhoneDetails ~ id", id);

  const [details, setdetails] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    try {
      const response = await phonesDetailsService(id);
      console.log(
        "🚀 ~ file: PhoneDetails.jsx:19 ~ getData ~ response",
        response
      );
      setIsFetching(false);
      setdetails(response.data);
      navigate(`/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (isFetching === true) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div id="box-details" className="center">
      <div className="block">
      <img src={`images/${details.imageFileName}`} alt="phone" width={200}/>
      </div>
      <div>
      <h2>{details.name}</h2>
      <p><b>Brand</b> {details.manufacturer}</p>
      <p><b>Screen:</b> {details.screen}</p>
      <p><b>Processor:</b> {details.processor} <b>Ram: </b>{details.ram}</p>
      <p><b>Color:</b> {details.color}</p>
      <p><b>Price:</b> {details.price} €</p>
      <p><b>Description:</b> {details.description}</p>
      </div>
     
      
    </div>
  );
}

export default PhoneDetails;
