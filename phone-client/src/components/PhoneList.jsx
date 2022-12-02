import { phonesListService } from "../services/phones.services";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import ListGroup from "react-bootstrap/ListGroup";

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
      setIsFetching(false);
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
    <div>
      <h2>Phone List</h2>
      {phoneList.map((eachPhone) => {
        return (
          <ListGroup as="ul" key={eachPhone.id}>
            <ListGroup.Item as="li">
              <Link to={`/${eachPhone.id}`}>
                <p>{eachPhone.name}</p>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        );
      })}
    </div>
  );
}

export default PhoneList;
