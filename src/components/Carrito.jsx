import { useState } from "react";

function Carrito({ elements ,buy}) {
  const [closeCarrito, setClosetCarrito] = useState(false);
  const OnCloser = (e) => {
    e.preventDefault();
    setClosetCarrito(!closeCarrito);
  };
  const onBuy = (e)=>{
      e.preventDefault();
      buy()
  }

  return (
    <div
      className={`rounded-xl top-5 right-0 fixed mt-12 w-screen max-w-sm border z-10 border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 overflow-hidden ${
        closeCarrito ? null : "h-1"
      }`}
      aria-modal="true"
      role="dialog"
      tabIndex="-1"
    >
      <strong className="absolute top-5">Productos A Comprar</strong>
      <button 
        onClick={OnCloser}
        className="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
      >
       <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </button>

      <div className="mt-4 space-y-6 pt-4">
        <ul className="space-y-4  h-56 overflow-y-scroll">
          {elements.map((item, index) => {
            return (
              <li className="flex items-center gap-4" key={item.id}>
                <img
                  key={item.id}
                  className="h-16 w-16 rounded object-cover"
                  src={item.url}
                  alt="img-A"
                />
                <div key={item.id}>
                  <h3 className="text-sm text-gray-900">Producto {index}</h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Price:</dt>
                      <dd className="inline">${item.price}</dd>
                    </div>
                  </dl>
                </div>
              </li>
            );
          })}
        </ul>
        <strong>
          Total:$
          {elements.reduce(
            (acum, element) => acum + parseFloat(element.price),
            0
          )}
        </strong>

        <div className="space-y-4 text-center">
          <button
            onClick={onBuy}
            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
