import { phonesListService } from "../services/phones.services";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PhoneList() {
  const [phoneList, setPhoneList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await phonesListService();
      console.log("🚀 ~ file: PhoneList.jsx:11 ~ getData ~ response", response);
      setPhoneList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>PhoneList</h2>
      {phoneList.map((eachPhone) => {
        return <Link to={`/${eachPhone.id}`} key={eachPhone.id}><p>{eachPhone.name}</p></Link>;
      })}
    </div>
  );
}

export default PhoneList;
