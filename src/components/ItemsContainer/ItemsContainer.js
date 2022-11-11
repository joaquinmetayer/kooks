import { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./ItemsContainer.css";

export default function ItemsContainer() {
  const [items, setItems] = useState([
    { id: 1, price: 1, date: 2020, img: "./products/01.png" },
    { id: 2, price: 2, date: 2020, img: "./products/02.png" },
    { id: 3, price: 3, date: 2020, img: "./products/03.png" },
    { id: 4, price: 4, date: 2020, img: "./products/04.png" },
    { id: 5, price: 5, date: 2020, img: "./products/030.png" },
    { id: 6, price: 6, date: 2020, img: "./products/06.png" },
    { id: 7, price: 7, date: 2020, img: "./products/07.png" },
    { id: 8, price: 8, date: 2020, img: "./products/08.png" },
    { id: 9, price: 9, date: 2020, img: "./products/09.png" },
    { id: 10, price: 10, date: 2020, img: "./products/010.png" },

    { id: 11, price: 11, date: 2021, img: "./products/011.png" },
    { id: 12, price: 12, date: 2021, img: "./products/012.png" },
    { id: 13, price: 13, date: 2021, img: "./products/013.png" },
    { id: 14, price: 14, date: 2021, img: "./products/014.png" },
    { id: 15, price: 15, date: 2021, img: "./products/015.png" },
    { id: 16, price: 16, date: 2021, img: "./products/016.png" },
    { id: 17, price: 17, date: 2021, img: "./products/017.png" },
    { id: 18, price: 18, date: 2021, img: "./products/018.png" },
    { id: 19, price: 19, date: 2021, img: "./products/019.png" },
    { id: 20, price: 20, date: 2021, img: "./products/020.png" },

    { id: 21, price: 21, date: 2022, img: "./products/021.png" },
    { id: 22, price: 22, date: 2022, img: "./products/022.png" },
    { id: 23, price: 23, date: 2022, img: "./products/023.png" },
    { id: 24, price: 24, date: 2022, img: "./products/024.png" },
    { id: 25, price: 25, date: 2022, img: "./products/025.png" },
    { id: 26, price: 26, date: 2022, img: "./products/026.png" },
    { id: 27, price: 27, date: 2022, img: "./products/027.png" },
    { id: 28, price: 28, date: 2022, img: "./products/028.png" },
    { id: 29, price: 29, date: 2022, img: "./products/029.png" },
    { id: 30, price: 30, date: 2022, img: "./products/030.png" },

    { id: 31, price: 31, date: 2023, img: "./products/031.png" },
    { id: 32, price: 32, date: 2023, img: "./products/032.png" },
    { id: 33, price: 33, date: 2023, img: "./products/033.png" },
    { id: 34, price: 34, date: 2023, img: "./products/034.png" },
    { id: 35, price: 35, date: 2023, img: "./products/035.png" },
    { id: 36, price: 36, date: 2023, img: "./products/036.png" },
    { id: 37, price: 37, date: 2023, img: "./products/037.png" },
    { id: 38, price: 38, date: 2023, img: "./products/038.png" },
    { id: 39, price: 39, date: 2023, img: "./products/01.png" },
    { id: 40, price: 40, date: 2023, img: "./products/02.png" },
  ]);

  return (
    <div className="itemsContainer">
      {items.map((i) => (
        <Item
          key={i.id}
          name={i.id}
          img={i.img}
          price={i.price}
          date={i.date}
        />
      ))}
    </div>
  );
}
