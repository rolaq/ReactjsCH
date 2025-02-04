const listaProductos = [
    {
      id: 1,
      title: "Aspiradora Cyclone X5000",
      image: "https://www.suono.com.ar/media/catalog/product/cache/be277d79a8d024490fdf6d84a1464e00/h/o/hog0173_-_placas_aspiradora_de_hogar_mesa_de_trabajo_1.jpg",
      description: "Aspiradora potente para todo tipo de suelos. Ideal para hogares con mascotas, capaz de limpiar profundamente alfombras, pisos de madera, cerámica y más.",
      idCategory: "1",
    },
    {
      id: 2,
      title: "Licuadora ProBlend 2000",
      image: "https://smartlifear.vtexassets.com/arquivos/ids/155425/SL-BL1055PN-1.jpg?v=638127620800730000",
      description: "Licuadora de alta velocidad para jugos y batidos. Con un potente motor y cuchillas de acero inoxidable, es ideal para preparar bebidas y batidos en minutos.",
      idCategory: "1",
    },
    {
      id: 3,
      title: "Don Quijote De La Mancha",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrckP5QO40_Rciz-hcLiIHnl3NcpEqdANYvg&s",
      description: "Una obra literaria clásica escrita por Miguel de Cervantes. Sigue las aventuras de un caballero que se enfrenta a gigantes y vive muchas peripecias en su viaje por España",
      idCategory: "2",
    },
    {
      id: 4,
      title: "El diario de Ana Frank",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGdV0v-oS9gpar2PwOVqBc7Bv3bUeP_786g&s",
      description: "La narración personal de una niña judía que vivió escondida durante la ocupación nazi en Holanda. Un testimonio profundo y conmovedor sobre la Segunda Guerra Mundial.",
      idCategory: "2",
    },
    {
      id: 5,
      title: "vans",
      image: "https://dcdn.mitiendanube.com/stores/002/798/004/products/7d24cead-9eb4-41c4-bc69-6e66c516cf9f-2bfb97e13f4704b6a217038043861101-640-0.jpeg",
      description: "Zapatillas deportivas de estilo clásico, con una suela de goma resistente y un diseño cómodo y versátil para el uso diario. Perfectas para cualquier ocasión casual",
      idCategory: "3",
    },
    {
      id: 6,
      title: "Zapatillas Blancas Urbanas Air",
      image: "https://acdn.mitiendanube.com/stores/615/862/products/air-11-134475836ef1c877d516462637455607-1024-1024.jpg",
      description: "Zapatillas modernas y ligeras, diseñadas para quienes buscan comodidad y estilo. Suela cómoda para largas caminatas y un diseño elegante para el día a día.",
      idCategory: "3",
    },
  ];

export const getProducts = () =>{
  return new Promise((resolve) => { 
    setTimeout(() => {
      resolve(listaProductos)
    }, 500)
  })
}

export const getProductsById = (productId) =>{
  return new Promise((resolve) => {
    setTimeout(() =>{
      resolve(listaProductos.find(prod => prod.id === productId))
    }, 500)
  }) 
}