export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Arroz Branco",
    price: 25.9,
    image:
      "https://m.media-amazon.com/images/I/81Prxd1w6dL.__AC_SX300_SY300_QL70_ML2_.jpg",
    description: "Arroz branco tipo 1, pacote de 5kg",
  },
  {
    id: 2,
    name: "Feijão Carioca",
    price: 8.99,
    image:
      "https://m.media-amazon.com/images/I/81J59dmdaCL.__AC_SX300_SY300_QL70_ML2_.jpg",
    description: "Feijão carioca, pacote de 1kg",
  },
  {
    id: 3,
    name: "Óleo de Soja",
    price: 7.5,
    image:
      "https://m.media-amazon.com/images/I/411vLliiAPL.__AC_SX300_SY300_QL70_ML2_.jpg",
    description: "Óleo de soja, garrafa de 900ml",
  },
  {
    id: 4,
    name: "Açúcar Refinado",
    price: 4.99,
    image:
      "https://m.media-amazon.com/images/I/811HPMq-KjL.__AC_SX300_SY300_QL70_ML2_.jpg",
    description: "Açúcar refinado, pacote de 1kg",
  },
  {
    id: 5,
    name: "Café em Pó",
    price: 15.9,
    image:
      "https://m.media-amazon.com/images/I/61cjsci53VL.__AC_SX300_SY300_QL70_ML2_.jpg",
    description: "Café em pó torrado e moído, 500g",
  },
  {
    id: 6,
    name: "Leite Integral",
    price: 4.5,
    image: "https://m.media-amazon.com/images/I/71frlSIAUDL._AC_SY879_.jpg",
    description: "Leite integral, caixa de 1L",
  },
  {
    id: 7,
    name: "Pão de Forma",
    price: 8.99,
    image:
      "https://m.media-amazon.com/images/I/61gEqn5cArL.__AC_SX300_SY300_QL70_ML2_.jpg",
    description: "Pão de forma integral, pacote com 500g",
  },
  {
    id: 8,
    name: "Manteiga",
    price: 12.9,
    image:
      "https://m.media-amazon.com/images/I/71qcu9qYSjL.__AC_SX300_SY300_QL70_ML2_.jpg",
    description: "Manteiga sem sal, tablete de 200g",
  },
  {
    id: 9,
    name: "Queijo Mussarela",
    price: 18.9,
    image:
      "https://m.media-amazon.com/images/I/51u4GFVcXiL.__AC_SX300_SY300_QL70_ML2_.jpg",
    description: "Queijo mussarela fatiado, 300g",
  },
  {
    id: 10,
    name: "Presunto",
    price: 15.9,
    image: "https://m.media-amazon.com/images/I/71c1UNwUmBL._AC_SX679_.jpg",
    description: "Presunto fatiado, 300g",
  },
];
