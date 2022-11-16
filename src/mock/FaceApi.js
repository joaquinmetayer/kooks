const products = [
  { id: 1, price: 1, stock: 10, date: 2020, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/01.png" },
  { id: 2, price: 2, stock: 10, date: 2020, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/02.png" },
  { id: 3, price: 3, stock: 10, date: 2020, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/03.png" },
  { id: 4, price: 4, stock: 10, date: 2020, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/04.png" },
  { id: 5, price: 5, stock: 10, date: 2020, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/030.png" },
  { id: 6, price: 6, stock: 10, date: 2020, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/06.png" },
  { id: 7, price: 7, stock: 10, date: 2020, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/07.png" },
  { id: 8, price: 8, stock: 10, date: 2020, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/08.png" },
  { id: 9, price: 9, stock: 10, date: 2020, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/09.png" },
  { id: 10, price: 10, stock: 10, date: 2020, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/010.png" },
  { id: 11, price: 11, stock: 10, date: 2021, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/011.png" },
  { id: 12, price: 12, stock: 10, date: 2021, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/012.png" },
  { id: 13, price: 13, stock: 10, date: 2021, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/013.png" },
  { id: 14, price: 14, stock: 10, date: 2021, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/014.png" },
  { id: 15, price: 15, stock: 10, date: 2021, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/015.png" },
  { id: 16, price: 16, stock: 10, date: 2021, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/016.png" },
  { id: 17, price: 17, stock: 10, date: 2021, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/017.png" },
  { id: 18, price: 18, stock: 10, date: 2021, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/018.png" },
  { id: 19, price: 19, stock: 10, date: 2021, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/019.png" },
  { id: 20, price: 20, stock: 10, date: 2021, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/020.png" },
  { id: 21, price: 21, stock: 10, date: 2022, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/021.png" },
  { id: 22, price: 22, stock: 10, date: 2022, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/022.png" },
  { id: 23, price: 23, stock: 10, date: 2022, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/023.png" },
  { id: 24, price: 24, stock: 10, date: 2022, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/024.png" },
  { id: 25, price: 25, stock: 10, date: 2022, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/025.png" },
  { id: 26, price: 26, stock: 10, date: 2022, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/026.png" },
  { id: 27, price: 27, stock: 10, date: 2022, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/027.png" },
  { id: 28, price: 28, stock: 10, date: 2022, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/028.png" },
  { id: 29, price: 29, stock: 10, date: 2022, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/029.png" },
  { id: 30, price: 30, stock: 10, date: 2022, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/030.png" },
  { id: 31, price: 31, stock: 10, date: 2023, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/031.png" },
  { id: 32, price: 32, stock: 10, date: 2023, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/032.png" },
  { id: 33, price: 33, stock: 10, date: 2023, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/033.png" },
  { id: 34, price: 34, stock: 10, date: 2023, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/034.png" },
  { id: 35, price: 35, stock: 10, date: 2023, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/035.png" },
  { id: 36, price: 36, stock: 10, date: 2023, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/036.png" },
  { id: 37, price: 37, stock: 10, date: 2023, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/037.png" },
  { id: 38, price: 38, stock: 10, date: 2023, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/038.png" },
  { id: 39, price: 39, stock: 10, date: 2023, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/01.png" },
  { id: 40, price: 40, stock: 10, date: 2023, contract: "0x06b6553B18d9137CFfc481C48251c4B07579a70c", img: "./products/02.png" },
];

export const data = new Promise((resolve, reject) => {
  let condition = true;
  setTimeout(() => {
    if (condition) {
      resolve(products);
    } else {
      reject("Error to get data products");
    }
  }, 3000);
});
