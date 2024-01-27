import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import Carrito from "./Carrito";

function Productos() {
  const [products, setProducts] = useState([]);
  const [elements, setElements] = useState([]);
  const [categorias, setCategoria] = useState([]);
  const [valueSelect, setValue] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const urlConst= "https://fakestoreapi.com/products"
      let url = "";
      switch (valueSelect) {
        case "electronics":
          url = `${urlConst}/category/${valueSelect}`;
          break;
        case "jewelery":
          url = `${urlConst}/category/${valueSelect}`;
          break
        case "men's clothing":
          url = `${urlConst}/category/${valueSelect}`;
        break
        case "women's clothing":
          url = `${urlConst}/category/${valueSelect}`;
          break
        default:
          url = urlConst;
          break;
      }
      try {
        const response = await fetch(url);
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.log(error);
      }
    };
    const fechCategoria = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const result = await response.json();
        setCategoria(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    fechCategoria();
  }, [valueSelect]);

  const addElements = (element) => {
    const updatedElements = [...elements, element];
    setElements(updatedElements);
  };
  const buyElements = () => {
    setElements([]);
  };
  const selectionCategory = (e) => {
    const value = e.target.value;
    setValue(value);
  };
  return (
    <div id="Productos" className="flex flex-col items-center">
      <div className="flex  items-center gap-11 w-full justify-center m-6 flex-wrap">
        <h1 className=" text-6xl text-blue-950 mb-4">Productos</h1>
        <select
          id="selector"
          value={valueSelect}
          onChange={selectionCategory}
          className="border rounded-2xl outline-none h-10 pl-5"
        >
          <option value="" disabled>
            Categorias
          </option>
          <option value="All">All</option>
          {categorias.map((element, index) => {
            return (
              <option key={index} value={element}>
                {element.toUpperCase()}
              </option>
            );
          })}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {products.map((element) => {
          return (
            <CardProduct
              key={element.id}
              name={element.title}
              price={element.price}
              url={element.image}
              addElement={addElements}
            />
          );
        })}
      </div>
      <Carrito elements={elements} buy={buyElements} />
    </div>
  );
}

export default Productos;
