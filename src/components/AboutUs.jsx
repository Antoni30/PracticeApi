function AboutUs() {
  return (
    <section id="AboutUs" className="my-0 flex flex-col lg:flex-row lg:h-[850px]">
      <div className="p-10 lg:w-[80%] lg:h-[500px] lg:self-center">
        <h1 className="text-sky-600 dark:text-sky-300 text-2xl font-bold tracking-widest leading-10">
          Bienvenidos, somos
        </h1>
        <p className="py-2 text-3xl font-bold text-slate-600 dark:text-slate-300">
          C.A.C SHOP
        </p>
        <p className="text-3xl font-bold text-slate-500 dark:text-slate-600">
          Una tienda de ropa online
        </p>
        <p className="text-sky-600 mt-5 text-lg">
          Creemos que la ropa no solo es una forma de cubrir el cuerpo, sino una
          expresión única de tu estilo y personalidad. Nuestra tienda en línea
          es un destino donde la moda se fusiona con la facilidad de la compra
          online, ofreciéndote una experiencia de compra sin complicaciones y
          artículos de alta calidad que se adaptan a tu vida cotidiana.
        </p>
      </div>
      <div className="my-10 w-full">
        <div
          className="w-[300px] h-[320px] m-auto bg-cover rounded-lg lg:w-[100%] lg:h-[100%] lg:bg-center lg:bg-no-repeat lg:bg-[length:450px_576px] imgClass"
        ></div>
      </div>
    </section>
  );
}

export default AboutUs;