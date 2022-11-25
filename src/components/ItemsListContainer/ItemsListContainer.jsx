import "./ItemsListContainer.css";
import ItemList from "../ItemList/ItemList";
import { data } from "../../mock/FaceApi";
import Loader from "../Loader/Loader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemsListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    data
      .then(
        (res) =>
          setProductsList(
            categoryId
              ? res.filter((product) => product.category == categoryId)
              : res
          )
      )
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  },[categoryId]);

  return (
    <div className="itemsContainer">
      {loading ? <Loader /> : <ItemList productsList={productsList} />}
    </div>
  );
};

export default ItemsListContainer;
