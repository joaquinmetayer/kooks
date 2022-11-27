import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../mock/FaceApi";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    data
      .then((resp) =>
        setProductDetails(resp.find((item) => item.id == productId))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [productId]);

  return (
    <div>
      {loading ? <Loader /> : <ItemDetail productDetails={productDetails} />}
    </div>
  );
};

export default ItemDetailContainer;
