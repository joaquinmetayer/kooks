import React, { useEffect, useState } from "react";
import { data } from "../../mock/FaceApi";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [detailProduct, setDetailProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    data
      .then((res) => setDetailProduct(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? <Loader /> : <ItemDetail detailProduct={detailProduct} />}
    </div>
  );
};

export default ItemDetailContainer;
