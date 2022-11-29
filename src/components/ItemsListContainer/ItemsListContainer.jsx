import "./ItemsListContainer.css";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemsListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    getDocs(itemsCollection)
      .then((snapshot) => {
        setProductsList(
          categoryId
            ? snapshot.docs
                .map((doc) => ({ id: doc.id, ...doc.data() }))
                .filter((product) => product.category == categoryId)
            : snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryId]);
  // when category id change, reload and set a new products list on the app

  return (
    <div className="itemsContainer">
      {loading ? <Loader /> : <ItemList productsList={productsList} />}
    </div>
  );
};

export default ItemsListContainer;
