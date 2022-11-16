import "./ItemsListContainer.css";
import ItemList from "../ItemList/ItemList";
import { data } from "../../mock/FaceApi";
import Loader from "../Loader/Loader";
import { useState, useEffect } from "react";

const ItemsListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    data
      .then((res) => setProductsList(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="itemsContainer">
      {loading ? <Loader /> : <ItemList productsList={productsList} />}
    </div>
  );
};

export default ItemsListContainer;
