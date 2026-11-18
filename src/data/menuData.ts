import type { CategoryMeta, MenuItem } from '../types/menu';

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'starters',
    title: {
      pt: 'Entradas e Brunch',
      es: 'Entradas y Brunch',
      en: 'Starters & Brunch',
    },
    heroImage: '/images/menu/a-la-ronda.jpg',
  },
  {
    id: 'breakfast',
    title: {
      pt: 'Café da Manhã e Lanches',
      es: 'Desayunos y Meriendas',
      en: 'Breakfast & Tea Time',
    },
    heroImage: '/images/menu/toston-nutritivo.jpg',
  },
  {
    id: 'olive-tree',
    theme: 'olive',
    title: {
      pt: 'Sob a Oliveira',
      es: 'Bajo el Olivo',
      en: 'Under the Olive Tree',
    },
    subtitle: {
      pt: 'No coração da LARRONDA cresce uma oliveira',
      es: 'En el corazón de LARRONDA crece un olivo',
      en: 'At the heart of LARRONDA grows an olive tree',
    },
    intro: {
      pt: 'À sua sombra servimos os sabores do dia: comida fresca, da estação, feita para compartilhar. Chegue, escolha, aproveite.',
      es: 'Bajo su sombra servimos los sabores del día: comida fresca, de estación, hecha para compartir. Acercate, elegí, disfrutá.',
      en: 'In its shade we serve the flavors of the day: fresh, seasonal food, made for sharing. Come by, choose, enjoy.',
    },
    heroImage: '/images/menu/bajo-el-olivo.jpg',
  },
  {
    id: 'drinks',
    title: {
      pt: 'Bebidas',
      es: 'Bebidas',
      en: 'Drinks',
    },
    heroImage: '/images/menu/tropical-drink.jpg',
  },
  {
    id: 'mains',
    title: {
      pt: 'Pratos Principais',
      es: 'Platos Principales',
      en: 'Main Courses',
    },
    heroImage: '/images/menu/traditional-criollo.jpg',
  },
  {
    id: 'pizzas-salads',
    title: {
      pt: 'Pizzas e Saladas',
      es: 'Pizzas y Ensaladas',
      en: 'Pizzas & Salads',
    },
    heroImage: '/images/menu/artisan-pizzas.jpg',
  },
  {
    id: 'desserts',
    title: {
      pt: 'Sobremesas',
      es: 'Postres',
      en: 'Desserts',
    },
    heroImage: '/images/menu/capricho-chocolate.jpg',
  },
  {
    id: 'wines-bar',
    title: {
      pt: 'Vinhos, Drinks e Cervejas',
      es: 'Vinos, Tragos y Cervezas',
      en: 'Wines, Cocktails & Beers',
    },
    heroImage: '/images/menu/botanical-cocktail.jpg',
  },
  {
    id: 'togo',
    title: {
      pt: 'Para Levar',
      es: 'Para Llevar',
      en: 'To Go',
    },
    subtitle: {
      pt: 'Porque podemos continuar compartilhando de casa',
      es: 'Porque podemos seguir compartiendo desde casa',
      en: 'Because we can keep sharing from home',
    },
    heroImage: '/images/menu/lemon-loaf.jpg',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // ===================== STARTERS & BRUNCH =====================
  {
    id: 'garden-fritters',
    category: 'starters',
    name: {
      pt: 'Bolinhos do Jardim',
      es: 'Buñuelos del Jardín',
      en: 'Garden Fritters',
    },
    description: {
      pt: 'Bolinhos de espinafre sem glúten, molho quatro queijos, emulsão de beterraba, coleslaw e brotos',
      es: 'Buñuelos sin gluten de espinaca, salsa cuatro quesos, emulsión de remolacha, coleslaw y brotes',
      en: 'Gluten-free spinach fritters, four-cheese sauce, beet emulsion, coleslaw and sprouts',
    },
    priceArs: 16000,
    tags: ['gf'],
  },
  {
    id: 'levantine-crunch',
    category: 'starters',
    name: {
      pt: 'Crocante Levantino',
      es: 'Crocante Levantino',
      en: 'Levantine Crunch',
    },
    description: {
      pt: 'Falafel acompanhado de muhammara (creme de pimentão vermelho), folhas verdes e brotos',
      es: 'Falafel, acompañado de muhammara (crema de morrones o pimientos rojos), hojas verdes y brotes',
      en: 'Falafel served with muhammara (roasted red pepper spread), greens and sprouts',
    },
    portionNote: {
      pt: '5 unidades',
      es: '5 unidades',
      en: '5 pieces',
    },
    priceArs: 9500,
    tags: ['gf', 'vegan'],
  },
  {
    id: 'potato-wedges',
    category: 'starters',
    name: {
      pt: 'Batatas Rústicas',
      es: 'Papas Cuña',
      en: 'Potato Wedges',
    },
    description: {
      pt: 'Com creme de alho assado',
      es: 'Con crema de ajo asado',
      en: 'With roasted garlic cream',
    },
    priceArs: 7500,
    tags: ['gf'],
    image: '/images/menu/potato-wedges.jpg',
  },
  {
    id: 'oriental',
    category: 'starters',
    name: {
      pt: 'Oriental',
      es: 'Oriental',
      en: 'Oriental',
    },
    description: {
      pt: 'Dumplings (pastéis chineses) com redução de molho shoyu, folhas verdes e brotos',
      es: 'Empanaditas chinas con reducción de salsa de soja, hojas verdes y brotes',
      en: 'Chinese dumplings with soy sauce reduction, greens and sprouts',
    },
    portionNote: {
      pt: '4 unidades',
      es: '4 unidades',
      en: '4 pieces',
    },
    priceArs: 9500,
    tags: ['vegan'],
  },
  {
    id: 'faina',
    category: 'starters',
    name: {
      pt: 'Fainá',
      es: 'Fainá',
      en: 'Fainá',
    },
    description: {
      pt: 'Pão achatado de grão-de-bico gratinado com queijo cuartirolo, tomates assados, pesto e azeitonas pretas',
      es: 'Fainá gratinada con queso cuartirolo, tomates asados, pesto y aceitunas negras',
      en: 'Chickpea flatbread au gratin with cuartirolo cheese, roasted tomatoes, pesto and black olives',
    },
    priceArs: 9500,
    tags: ['gf'],
  },
  {
    id: 'a-la-ronda',
    category: 'starters',
    name: {
      pt: 'A la Ronda',
      es: 'A la Ronda',
      en: 'A la Ronda',
    },
    description: {
      pt: 'Tábua de queijo gouda marinado, queijo pategrás, queijo gruyère, queijo sardo, presunto cozido natural, cream cheese de girassol, torrada de sementes, emulsão de cenoura, homus, muhammara, azeitonas verdes marinadas, escabeche de grão-de-bico, mix de castanhas, tomates-cereja e batatas rústicas',
      es: 'Tabla de queso gouda marinado, queso pategrás, queso gruyere, queso sardo, jamón natural, queso crema de girasol, tostón de semillas, emulsión de zanahorias, hummus, muhammara, olivas verdes marinadas, escabeche de garbanzo, mix frutos secos, tomates cherry, papas cuña',
      en: 'Board of marinated gouda, pategrás, gruyère and sardo cheeses, natural cooked ham, sunflower cream cheese, seed toast, carrot emulsion, hummus, muhammara, marinated green olives, chickpea escabeche, mixed nuts, cherry tomatoes and potato wedges',
    },
    portionNote: {
      pt: 'Para 4 pessoas',
      es: 'Para 4 personas',
      en: 'For 4 people',
    },
    priceArs: 64000,
    image: '/images/menu/a-la-ronda.jpg',
  },
  {
    id: 'abrazo',
    category: 'starters',
    name: {
      pt: 'Abrazo',
      es: 'Abrazo',
      en: 'Abrazo',
    },
    description: {
      pt: 'Duas bebidas quentes (chá ou café com leite), um Tostón Nutritivo, uma porção dupla de bolo e uma jarra de suco de laranja de 750 ml',
      es: 'Dos infusiones (té o café con leche), un tostón nutritivo, una porción de budín doble y una jarra de jugo de naranja de 750 ml',
      en: 'Two hot drinks (tea or café con leche), one Tostón Nutritivo, a double slice of loaf cake and a 750 ml pitcher of orange juice',
    },
    portionNote: {
      pt: 'Para 2 pessoas',
      es: 'Para 2 personas',
      en: 'For 2 people',
    },
    priceArs: 31000,
  },
  {
    id: 'amor',
    category: 'starters',
    name: {
      pt: 'Amor',
      es: 'Amor',
      en: 'Amor',
    },
    description: {
      pt: 'Duas bebidas quentes (chá ou café com leite), um Waffle Querido, um Tostado y Punto, dois mini cookies, uma porção dupla de bolo e uma jarra de 750 ml de suco de laranja ou Pomelada del Sur (limonada de toranja)',
      es: 'Dos infusiones (té o café con leche), un waffle querido, un tostado y punto, dos mini cookies, una porción de budín doble y una jarra de jugo de naranja o pomelada del sur de 750 ml',
      en: 'Two hot drinks (tea or café con leche), one Waffle Querido, one Tostado y Punto, two mini cookies, a double slice of loaf cake and a 750 ml pitcher of orange juice or Pomelada del Sur (grapefruit lemonade)',
    },
    portionNote: {
      pt: 'Para 2 pessoas',
      es: 'Para 2 personas',
      en: 'For 2 people',
    },
    priceArs: 34000,
  },

  // ===================== BREAKFAST & TEA TIME =====================
  {
    id: 'french-toast',
    category: 'breakfast',
    name: {
      pt: 'Rabanada',
      es: 'Tostada Francesa',
      en: 'French Toast',
    },
    description: {
      pt: 'Pão brioche aromatizado com açúcar de confeiteiro, mel, banana, frutas vermelhas e hortelã fresca',
      es: 'Tostada de pan brioche saborizado con azúcar impalpable, miel, banana, frutos rojos y menta fresca',
      en: 'Flavored brioche toast with powdered sugar, honey, banana, berries and fresh mint',
    },
    priceArs: 8200,
  },
  {
    id: 'fruit-bowl',
    category: 'breakfast',
    name: {
      pt: 'Bowl de Frutas',
      es: 'Bowl de Frutas',
      en: 'Fruit Bowl',
    },
    description: {
      pt: 'Frutas da estação',
      es: 'Frutas de estación',
      en: 'Seasonal fruit',
    },
    priceArs: 8500,
  },
  {
    id: 'flavor-cup',
    category: 'breakfast',
    name: {
      pt: 'Taça de Sabores',
      es: 'Copa de Sabores',
      en: 'Flavor Cup',
    },
    description: {
      pt: 'Iogurte grego com granola (opção sem glúten), frutas da estação, lascas de coco e mel especiado',
      es: 'Yogur griego con granola (opción sin gluten), frutas de estación, escamas de coco y miel especiada',
      en: 'Greek yogurt with granola (gluten-free option), seasonal fruit, coconut flakes and spiced honey',
    },
    portionNote: {
      pt: 'Consulte as opções',
      es: 'Consultar opciones',
      en: 'Ask for options',
    },
    priceArs: 12500,
    tags: ['gf'],
  },
  {
    id: 'waffle-querido',
    category: 'breakfast',
    name: {
      pt: 'Waffle Querido',
      es: 'Waffle Querido',
      en: 'Waffle Querido',
    },
    description: {
      pt: 'Com ricota e mel especiado, acompanhado de frutas frescas e geleia da estação',
      es: 'Con ricota y miel especiada acompañado de frutas frescas y mermelada de estación',
      en: 'With ricotta and spiced honey, served with fresh fruit and seasonal jam',
    },
    priceArs: 11000,
  },
  {
    id: 'waffle-querido-ice',
    category: 'breakfast',
    name: {
      pt: 'Waffle Querido com Sorvete',
      es: 'Waffle Querido Helado',
      en: 'Waffle Querido with Ice Cream',
    },
    description: {
      pt: 'Sorvete de ganache de chocolate e frutas da estação',
      es: 'Helado ganache de chocolate y frutas de estación',
      en: 'Chocolate ganache ice cream and seasonal fruit',
    },
    priceArs: 12000,
  },
  {
    id: 'keto-waffle',
    category: 'breakfast',
    name: {
      pt: 'Waffle Keto',
      es: 'Waffle Keto',
      en: 'Keto Waffle',
    },
    description: {
      pt: 'Waffle de farinha de amêndoas com canela e ricota, acompanhado de morangos, amêndoas picadas e geleia da estação',
      es: 'Harina de almendras, canela, ricota acompañado de frutillas, almendras picadas y mermelada de estación',
      en: 'Almond-flour waffle with cinnamon and ricotta, served with strawberries, chopped almonds and seasonal jam',
    },
    priceArs: 14000,
  },
  {
    id: 'golden-scones',
    category: 'breakfast',
    name: {
      pt: 'Scones Dourados x 3',
      es: 'Scon Dorado x 3',
      en: 'Golden Scones x 3',
    },
    description: {
      pt: 'Scones de parmesão servidos com dips de cream cheese e geleia caseira da estação',
      es: 'Queso parmesano, dips de queso crema untable y mermelada casera de estación',
      en: 'Parmesan scones served with cream cheese and homemade seasonal jam dips',
    },
    priceArs: 11500,
  },
  {
    id: 'whole-wheat-scones',
    category: 'breakfast',
    name: {
      pt: 'Scones Integrais x 3',
      es: 'Scon Integral x 3',
      en: 'Whole-Wheat Scones x 3',
    },
    description: {
      pt: 'Feitos com farinha integral, farinha de linhaça e leite vegetal; servidos com dips de queijo vegetal e geleia caseira da estação',
      es: 'Harina integral, harina de lino, leche vegetal, dips de queso vegetal untable y mermelada casera de estación',
      en: 'Made with whole-wheat and flaxseed flour and plant-based milk; served with vegan cream cheese and homemade seasonal jam dips',
    },
    priceArs: 10500,
    tags: ['vegan'],
  },
  {
    id: 'toston-nutritivo',
    category: 'breakfast',
    name: {
      pt: 'Tostón Nutritivo',
      es: 'Tostón Nutritivo',
      en: 'Tostón Nutritivo',
    },
    description: {
      pt: 'Pão integral de sementes com nozes, abacate, tomates confitados, patê de girassol e ovos mexidos',
      es: 'Pan integral de semillas con nuez, palta, tomates confitados, paté de girasol y huevo revuelto',
      en: 'Whole-grain seed bread with walnuts, avocado, confit tomatoes, sunflower pâté and scrambled eggs',
    },
    priceArs: 14000,
    image: '/images/menu/toston-nutritivo.jpg',
  },
  {
    id: 'tostadas-en-ronda',
    category: 'breakfast',
    name: {
      pt: 'Tostadas en Ronda',
      es: 'Tostadas en Ronda',
      en: 'Tostadas en Ronda',
    },
    description: {
      pt: 'Torradas de pão branco ou integral, doce caseiro da estação e cream cheese (tradicional ou vegetal)',
      es: 'Tostadas de pan blanco o integral, dulce casero de estación y queso crema (tradicional o vegetal)',
      en: 'White or whole-wheat toast, homemade seasonal jam and cream cheese (regular or vegan)',
    },
    priceArs: 8000,
    tags: ['vegan'],
  },
  {
    id: 'tostadas-en-ronda-gf',
    category: 'breakfast',
    name: {
      pt: 'Tostadas en Ronda (Sem Glúten)',
      es: 'Tostadas en Ronda (Sin Gluten)',
      en: 'Tostadas en Ronda (Gluten-Free)',
    },
    description: {
      pt: 'Torradas de pão branco ou integral (opção sem glúten), doce caseiro da estação e cream cheese (tradicional ou vegetal)',
      es: 'Tostadas de pan blanco o integral (opción sin gluten), dulce casero de estación y queso crema (tradicional o vegetal)',
      en: 'White or whole-wheat toast (gluten-free option), homemade seasonal jam and cream cheese (regular or vegan)',
    },
    priceArs: 10000,
    tags: ['gf', 'vegan'],
  },
  {
    id: 'whole-wheat-tostado',
    category: 'breakfast',
    name: {
      pt: 'Tostado y Punto Integral',
      es: 'Tostado y Punto Integral',
      en: 'Whole-Wheat Tostado y Punto',
    },
    description: {
      pt: 'Pão integral com presunto e queijo',
      es: 'Pan integral con jamón natural y queso',
      en: 'Whole-wheat bread with ham and cheese',
    },
    priceArs: 15000,
  },
  {
    id: 'tostado-y-punto',
    category: 'breakfast',
    name: {
      pt: 'Tostado y Punto',
      es: 'Tostado y Punto',
      en: 'Tostado y Punto',
    },
    description: {
      pt: 'Pão artesanal com presunto e queijo',
      es: 'Pan artesanal con jamón natural y queso',
      en: 'Artisan bread with ham and cheese',
    },
    priceArs: 13500,
  },
  {
    id: 'medialuna',
    category: 'breakfast',
    name: {
      pt: 'Medialuna Doce / Salgada',
      es: 'Medialuna Dulce / Salada',
      en: 'Medialuna, Sweet / Savory',
    },
    description: {
      pt: 'Croissant argentino',
      es: 'Medialuna artesanal dulce o salada',
      en: 'Argentine-style croissant',
    },
    priceArs: 2400,
  },
  {
    id: 'chipa-larronda',
    category: 'breakfast',
    name: {
      pt: 'Chipa Larronda',
      es: 'Chipa Larronda',
      en: 'Chipa Larronda',
    },
    description: {
      pt: 'Pão de polvilho e queijo, parente do pão de queijo',
      es: 'Chipa de almidón y queso x 4',
      en: 'Cassava starch and cheese rolls',
    },
    portionNote: {
      pt: '4 unidades',
      es: '4 unidades',
      en: '4 pieces',
    },
    priceArs: 5000,
  },
  {
    id: 'classic-mbeju',
    category: 'breakfast',
    name: {
      pt: 'Mbejú Clássico',
      es: 'Mbejú Clásico',
      en: 'Classic Mbejú',
    },
    description: {
      pt: 'Tipo beiju, de polvilho e queijo',
      es: 'Tradicional de almidón de mandioca y queso',
      en: 'Traditional cassava starch and cheese flatbread',
    },
    priceArs: 9600,
  },
  {
    id: 'mbeju-herencia',
    category: 'breakfast',
    name: {
      pt: 'Mbejú Herencia',
      es: 'Mbejú Herencia',
      en: 'Mbejú Herencia',
    },
    description: {
      pt: 'Presunto e mozarela',
      es: 'Jamón natural y queso mozzarella',
      en: 'Ham and mozzarella',
    },
    priceArs: 12800,
  },
  {
    id: 'veggie-mbeju',
    category: 'breakfast',
    name: {
      pt: 'Mbejú Vegetal',
      es: 'Mbejú Vegetal',
      en: 'Veggie Mbejú',
    },
    description: {
      pt: 'Legumes em julienne e mozarela',
      es: 'Verduras en juliana y queso mozzarella',
      en: 'Julienned vegetables and mozzarella',
    },
    priceArs: 11500,
  },
  {
    id: 'mediterranean-mbeju',
    category: 'breakfast',
    name: {
      pt: 'Mbejú Mediterrâneo',
      es: 'Mbejú Mediterráneo',
      en: 'Mediterranean Mbejú',
    },
    description: {
      pt: 'Tomates confitados, manjericão e mozarela',
      es: 'Tomates confitados, albahaca y queso mozzarella',
      en: 'Confit tomatoes, basil and mozzarella',
    },
    priceArs: 12900,
  },
  {
    id: 'confit-croissant',
    category: 'breakfast',
    name: {
      pt: 'Croissant Confit',
      es: 'Croissant Confite',
      en: 'Confit Croissant',
    },
    description: {
      pt: 'Tomates confitados, manjericão e mozarela',
      es: 'Tomates confitados, albahaca y queso mozzarella',
      en: 'Confit tomatoes, basil and mozzarella',
    },
    priceArs: 11200,
  },
  {
    id: 'nourishing-croissant',
    category: 'breakfast',
    name: {
      pt: 'Croissant Nutritivo',
      es: 'Croissant Nutritivo',
      en: 'Nourishing Croissant',
    },
    description: {
      pt: 'Ovos mexidos, cebola caramelizada e abacate',
      es: 'Huevo revuelto, cebolla caramelizada y palta',
      en: 'Scrambled eggs, caramelized onion and avocado',
    },
    priceArs: 11200,
  },
  {
    id: 'croissant-y-punto',
    category: 'breakfast',
    name: {
      pt: 'Croissant y Punto',
      es: 'Croissant y Punto',
      en: 'Croissant y Punto',
    },
    description: {
      pt: 'Presunto e mozarela',
      es: 'Jamón natural y queso mozzarella',
      en: 'Ham and mozzarella',
    },
    priceArs: 11200,
  },
  // Breakfast Extras
  {
    id: 'extra-scrambled-eggs',
    category: 'breakfast',
    subcategory: { pt: 'Adicionais', es: 'Adicional', en: 'Extras' },
    name: {
      pt: 'Ovos Mexidos',
      es: 'Huevos Revueltos',
      en: 'Scrambled Eggs',
    },
    priceArs: 2000,
  },
  {
    id: 'extra-jam-dip',
    category: 'breakfast',
    subcategory: { pt: 'Adicionais', es: 'Adicional', en: 'Extras' },
    name: {
      pt: 'Dip de Geleia',
      es: 'Dip Mermelada',
      en: 'Jam Dip',
    },
    priceArs: 3000,
    tags: ['gf'],
  },
  {
    id: 'extra-cream-cheese-dip',
    category: 'breakfast',
    subcategory: { pt: 'Adicionais', es: 'Adicional', en: 'Extras' },
    name: {
      pt: 'Dip de Cream Cheese',
      es: 'Dip Queso Crema',
      en: 'Cream Cheese Dip',
    },
    priceArs: 3000,
    tags: ['vegan'],
  },

  // ===================== UNDER THE OLIVE TREE =====================
  {
    id: 'pumpkin-loaf-slice',
    category: 'olive-tree',
    name: {
      pt: 'Bolo de Abóbora',
      es: 'Budín de Calabaza',
      en: 'Pumpkin Loaf Cake',
    },
    description: {
      pt: 'Cobertura de laranja',
      es: 'Glaseado de naranja',
      en: 'Orange glaze',
    },
    priceArs: 5500,
    tags: ['vegan'],
  },
  {
    id: 'seasonal-loaf-slice',
    category: 'olive-tree',
    name: {
      pt: 'Bolo da Estação',
      es: 'Budín de Estación',
      en: 'Seasonal Loaf Cake',
    },
    portionNote: {
      pt: '3 fatias',
      es: 'x 3 porciones',
      en: '3 slices',
    },
    priceArs: 9900,
    tags: ['gf'],
  },
  {
    id: 'banana-bread-slice',
    category: 'olive-tree',
    name: {
      pt: 'Bolo de Banana',
      es: 'Budín de Banana',
      en: 'Banana Bread',
    },
    description: {
      pt: 'Banana, chocolate meio amargo e nozes',
      es: 'Banana, chocolate semiamargo y nueces',
      en: 'Banana, dark chocolate and walnuts',
    },
    priceArs: 7900,
    tags: ['vegan'],
  },
  {
    id: 'lemon-loaf-slice',
    category: 'olive-tree',
    name: {
      pt: 'Bolo de Limão',
      es: 'Budín de Limón',
      en: 'Lemon Loaf Cake',
    },
    description: {
      pt: 'Com cobertura',
      es: 'Con glaseado',
      en: 'Glazed',
    },
    priceArs: 7900,
  },
  {
    id: 'marble-muffin',
    category: 'olive-tree',
    name: {
      pt: 'Muffin Marmorizado',
      es: 'Muffin Marmolado',
      en: 'Marble Muffin',
    },
    description: {
      pt: 'De baunilha, laranja e chocolate duplo',
      es: 'De vainilla, naranja y doble chocolate',
      en: 'Vanilla, orange and double chocolate',
    },
    priceArs: 3800,
    tags: ['vegan'],
  },
  {
    id: 'cinnamon-roll',
    category: 'olive-tree',
    name: {
      pt: 'Rolinho de Canela',
      es: 'Roll de canela',
      en: 'Cinnamon Roll',
    },
    priceArs: 4300,
  },
  {
    id: 'walnut-alfajor',
    category: 'olive-tree',
    name: {
      pt: 'Alfajor de Nozes',
      es: 'Alfajor de Nuez',
      en: 'Walnut Alfajor',
    },
    description: {
      pt: 'Com doce de leite e cobertura de chocolate amargo',
      es: 'Con dulce de leche y baño de chocolate negro',
      en: 'With dulce de leche and dark chocolate coating',
    },
    priceArs: 4900,
    tags: ['vegan'],
    image: '/images/menu/bajo-el-olivo.jpg',
  },
  {
    id: 'almond-alfajor',
    category: 'olive-tree',
    name: {
      pt: 'Alfajor de Amêndoas',
      es: 'Alfajor de Almendras',
      en: 'Almond Alfajor',
    },
    description: {
      pt: 'Com doce de leite e cobertura de chocolate branco',
      es: 'Con dulce de leche y baño de chocolate blanco',
      en: 'With dulce de leche and white chocolate coating',
    },
    priceArs: 5900,
  },
  {
    id: 'cookie-bw',
    category: 'olive-tree',
    name: {
      pt: 'Cookie B&W',
      es: 'Cookie B&W',
      en: 'Cookie B&W',
    },
    description: {
      pt: 'Com gotas de chocolate branco e preto',
      es: 'Con chips de chocolate blanco y negro',
      en: 'With white and dark chocolate chips',
    },
    priceArs: 4500,
  },
  {
    id: 'double-choc-cookie',
    category: 'olive-tree',
    name: {
      pt: 'Cookie Chocolate Duplo',
      es: 'Cookie Doble Chocolate',
      en: 'Double Chocolate Cookie',
    },
    priceArs: 4500,
    tags: ['vegan'],
  },
  {
    id: 'red-velvet-cookie',
    category: 'olive-tree',
    name: {
      pt: 'Cookie Red Velvet',
      es: 'Cookie Red Velvet',
      en: 'Red Velvet Cookie',
    },
    description: {
      pt: 'Com gotas de chocolate branco',
      es: 'Con chips de chocolate blanco',
      en: 'With white chocolate chips',
    },
    priceArs: 4500,
  },

  // ===================== DRINKS =====================
  // Hot Coffee
  {
    id: 'hot-espresso',
    category: 'drinks',
    subcategory: { pt: 'Cafés Quentes', es: 'Cafés Calientes', en: 'Hot Coffee' },
    name: { pt: 'Espresso', es: 'Espresso', en: 'Espresso' },
    priceArs: 4500,
  },
  {
    id: 'hot-lungo',
    category: 'drinks',
    subcategory: { pt: 'Cafés Quentes', es: 'Cafés Calientes', en: 'Hot Coffee' },
    name: { pt: 'Lungo', es: 'Lungo', en: 'Lungo' },
    priceArs: 4500,
  },
  {
    id: 'hot-cappuccino',
    category: 'drinks',
    subcategory: { pt: 'Cafés Quentes', es: 'Cafés Calientes', en: 'Hot Coffee' },
    name: { pt: 'Cappuccino', es: 'Cappuccino', en: 'Cappuccino' },
    priceArs: 5900,
  },
  {
    id: 'hot-cafe-con-leche',
    category: 'drinks',
    subcategory: { pt: 'Cafés Quentes', es: 'Cafés Calientes', en: 'Hot Coffee' },
    name: { pt: 'Café com Leite', es: 'Café con leche', en: 'Café con Leche' },
    priceArs: 6000,
  },
  {
    id: 'hot-flat-white',
    category: 'drinks',
    subcategory: { pt: 'Cafés Quentes', es: 'Cafés Calientes', en: 'Hot Coffee' },
    name: { pt: 'Flat White', es: 'Flat White', en: 'Flat White' },
    priceArs: 6000,
  },
  {
    id: 'hot-latte',
    category: 'drinks',
    subcategory: { pt: 'Cafés Quentes', es: 'Cafés Calientes', en: 'Hot Coffee' },
    name: { pt: 'Latte', es: 'Latte', en: 'Latte' },
    priceArs: 6200,
  },
  {
    id: 'hot-caramel-latte',
    category: 'drinks',
    subcategory: { pt: 'Cafés Quentes', es: 'Cafés Calientes', en: 'Hot Coffee' },
    name: { pt: 'Latte de Caramelo', es: 'Latte Caramel', en: 'Caramel Latte' },
    priceArs: 7200,
  },
  {
    id: 'hot-hazelnut-latte',
    category: 'drinks',
    subcategory: { pt: 'Cafés Quentes', es: 'Cafés Calientes', en: 'Hot Coffee' },
    name: { pt: 'Latte de Avelã', es: 'Latte Avellana', en: 'Hazelnut Latte' },
    priceArs: 7200,
  },
  {
    id: 'hot-vanilla-latte',
    category: 'drinks',
    subcategory: { pt: 'Cafés Quentes', es: 'Cafés Calientes', en: 'Hot Coffee' },
    name: { pt: 'Latte de Baunilha', es: 'Latte Vainilla', en: 'Vanilla Latte' },
    priceArs: 7200,
  },
  {
    id: 'hot-almond-latte',
    category: 'drinks',
    subcategory: { pt: 'Cafés Quentes', es: 'Cafés Calientes', en: 'Hot Coffee' },
    name: { pt: 'Latte de Amêndoas', es: 'Latte Almendras', en: 'Almond Latte' },
    priceArs: 7200,
  },
  {
    id: 'hot-submarino',
    category: 'drinks',
    subcategory: { pt: 'Cafés Quentes', es: 'Cafés Calientes', en: 'Hot Coffee' },
    name: { pt: 'Submarino', es: 'Submarino', en: 'Submarino' },
    description: {
      pt: 'Leite quente com barra de chocolate para derreter',
      es: 'Leche caliente con barra de chocolate para derretir',
      en: 'Hot milk with a chocolate bar to melt in',
    },
    priceArs: 5400,
  },
  {
    id: 'hot-americano',
    category: 'drinks',
    subcategory: { pt: 'Cafés Quentes', es: 'Cafés Calientes', en: 'Hot Coffee' },
    name: { pt: 'Americano', es: 'Americano', en: 'Americano' },
    priceArs: 5000,
  },
  // Iced Coffee
  {
    id: 'iced-americano',
    category: 'drinks',
    subcategory: { pt: 'Cafés Gelados', es: 'Cafés Fríos', en: 'Iced Coffee' },
    name: { pt: 'Americano Gelado', es: 'Americano Frío', en: 'Iced Americano' },
    priceArs: 5000,
  },
  {
    id: 'iced-latte',
    category: 'drinks',
    subcategory: { pt: 'Cafés Gelados', es: 'Cafés Fríos', en: 'Iced Coffee' },
    name: { pt: 'Latte Gelado', es: 'Latte Frío', en: 'Iced Latte' },
    priceArs: 6200,
  },
  {
    id: 'iced-cappuccino',
    category: 'drinks',
    subcategory: { pt: 'Cafés Gelados', es: 'Cafés Fríos', en: 'Iced Coffee' },
    name: { pt: 'Cappuccino Gelado', es: 'Cappuccino Frío', en: 'Iced Cappuccino' },
    priceArs: 5900,
  },
  {
    id: 'iced-frappuccino',
    category: 'drinks',
    subcategory: { pt: 'Cafés Gelados', es: 'Cafés Fríos', en: 'Iced Coffee' },
    name: { pt: 'Frappuccino', es: 'Frappuccino', en: 'Frappuccino' },
    priceArs: 6200,
  },
  // Tea
  {
    id: 'tea-ilumine',
    category: 'drinks',
    subcategory: { pt: 'Chás', es: 'Té', en: 'Tea' },
    name: { pt: 'Iluminé', es: 'Iluminé', en: 'Iluminé' },
    description: {
      pt: 'Chá preto do Ceilão',
      es: 'Té negro de Ceylon',
      en: 'Ceylon black tea',
    },
    priceArs: 4200,
    tags: ['gf'],
  },
  {
    id: 'tea-golden-chai',
    category: 'drinks',
    subcategory: { pt: 'Chás', es: 'Té', en: 'Tea' },
    name: { pt: 'Golden Chai', es: 'Golden Chai', en: 'Golden Chai' },
    description: {
      pt: 'Chá preto, cúrcuma, gengibre, canela e cravo',
      es: 'Té negro, cúrcuma, jengibre, canela y clavo de olor',
      en: 'Black tea, turmeric, ginger, cinnamon and cloves',
    },
    priceArs: 4200,
    tags: ['gf'],
  },
  {
    id: 'tea-calma-andina',
    category: 'drinks',
    subcategory: { pt: 'Chás', es: 'Té', en: 'Tea' },
    name: { pt: 'Calma Andina', es: 'Calma Andina', en: 'Calma Andina' },
    description: {
      pt: 'Verbena andina ou cidrão com raspas de laranja',
      es: 'Verbena andina o Cedrón con cascaritas de naranja',
      en: 'Andean verbena or lemon verbena with orange peel',
    },
    priceArs: 4200,
    tags: ['gf'],
  },
  {
    id: 'tea-inti-matcha',
    category: 'drinks',
    subcategory: { pt: 'Chás', es: 'Té', en: 'Tea' },
    name: { pt: 'Inti Matcha', es: 'Inti Matcha', en: 'Inti Matcha' },
    description: {
      pt: 'Yuzu (cítrico japonês) e matcha',
      es: 'Yuzu (Cítrico japonés) y Matcha',
      en: 'Yuzu (Japanese citrus) and matcha',
    },
    priceArs: 4200,
    tags: ['gf'],
  },
  {
    id: 'tea-patagonia-rooibos',
    category: 'drinks',
    subcategory: { pt: 'Chás', es: 'Té', en: 'Tea' },
    name: { pt: 'Patagonia Rooibos', es: 'Patagonia Rooibos', en: 'Patagonia Rooibos' },
    description: {
      pt: 'Frutas vermelhas e notas de baunilha sobre base de rooibos',
      es: 'Frutos rojos, notas de vainilla sobre base de hierba Rooibos',
      en: 'Red berries and vanilla notes on a rooibos base',
    },
    priceArs: 4200,
    tags: ['gf'],
  },
  {
    id: 'tea-seasonal',
    category: 'drinks',
    subcategory: { pt: 'Chás', es: 'Té', en: 'Tea' },
    name: { pt: 'Chá da Estação', es: 'Té de Temporada', en: 'Seasonal Tea' },
    portionNote: {
      pt: 'Consulte as opções',
      es: 'Consultar opciones',
      en: 'Ask for options',
    },
    priceArs: 4200,
  },
  {
    id: 'tea-extra-milk',
    category: 'drinks',
    subcategory: { pt: 'Chás', es: 'Té', en: 'Tea' },
    name: { pt: 'Adicional de Leite', es: 'Adicional Leche', en: 'Extra Milk' },
    priceArs: 1000,
  },
  // Juices & Lemonades
  {
    id: 'juice-classic-lemonade',
    category: 'drinks',
    subcategory: {
      pt: 'Sucos e Limonadas (xarope orgânico ou estévia)',
      es: 'Jugos (almíbar orgánico o stevia)',
      en: 'Juices & Lemonades (organic syrup or stevia)',
    },
    name: {
      pt: 'Limonada Clássica',
      es: 'Clásica de Limón',
      en: 'Classic Lemonade',
    },
    description: {
      pt: 'Suco de limão, folhas de hortelã e água',
      es: 'Jugo de limón, hojas de menta y agua',
      en: 'Lemon juice, mint leaves and water',
    },
    priceArs: 5400,
  },
  {
    id: 'juice-classic-grapefruit',
    category: 'drinks',
    subcategory: {
      pt: 'Sucos e Limonadas (xarope orgânico ou estévia)',
      es: 'Jugos (almíbar orgánico o stevia)',
      en: 'Juices & Lemonades (organic syrup or stevia)',
    },
    name: {
      pt: 'Clássica de Toranja',
      es: 'Clásica de Pomelo',
      en: 'Classic Grapefruit',
    },
    description: {
      pt: 'Suco de toranja, folhas de hortelã e água',
      es: 'Jugo de pomelo, hojas de menta y agua',
      en: 'Grapefruit juice, mint leaves and water',
    },
    priceArs: 5400,
  },
  {
    id: 'juice-southern-special',
    category: 'drinks',
    subcategory: {
      pt: 'Sucos e Limonadas (xarope orgânico ou estévia)',
      es: 'Jugos (almíbar orgánico o stevia)',
      en: 'Juices & Lemonades (organic syrup or stevia)',
    },
    name: {
      pt: 'Especial do Sul',
      es: 'Especial del Sur',
      en: 'Southern Special',
    },
    description: {
      pt: 'Suco de limão ou de toranja, folhas de hortelã, frutas vermelhas e água',
      es: 'Jugo de limón o de pomelo, hojas de menta, frutos rojos y agua',
      en: 'Lemon or grapefruit juice, mint leaves, red berries and water',
    },
    priceArs: 6500,
  },
  {
    id: 'juice-northern-special',
    category: 'drinks',
    subcategory: {
      pt: 'Sucos e Limonadas (xarope orgânico ou estévia)',
      es: 'Jugos (almíbar orgánico o stevia)',
      en: 'Juices & Lemonades (organic syrup or stevia)',
    },
    name: {
      pt: 'Especial do Norte',
      es: 'Especial del Norte',
      en: 'Northern Special',
    },
    description: {
      pt: 'Suco de limão ou de toranja, folhas de hortelã, maracujá, manga e água',
      es: 'Jugo de limón o de pomelo, hojas de menta, maracuyá, mango y agua',
      en: 'Lemon or grapefruit juice, mint leaves, passion fruit, mango and water',
    },
    priceArs: 6500,
    image: '/images/menu/tropical-drink.jpg',
  },
  {
    id: 'juice-splash',
    category: 'drinks',
    subcategory: {
      pt: 'Sucos e Limonadas (xarope orgânico ou estévia)',
      es: 'Jugos (almíbar orgánico o stevia)',
      en: 'Juices & Lemonades (organic syrup or stevia)',
    },
    name: { pt: 'Splash', es: 'Splash', en: 'Splash' },
    description: {
      pt: 'Suco de limão, pepino e água com gás',
      es: 'Jugo de limón, pepino y agua gasificada',
      en: 'Lemon juice, cucumber and sparkling water',
    },
    priceArs: 6500,
  },
  {
    id: 'juice-orange-glass',
    category: 'drinks',
    subcategory: {
      pt: 'Sucos e Limonadas (xarope orgânico ou estévia)',
      es: 'Jugos (almíbar orgánico o stevia)',
      en: 'Juices & Lemonades (organic syrup or stevia)',
    },
    name: {
      pt: 'Copo de Suco de Laranja',
      es: 'Vaso Naranja Dulce',
      en: 'Glass of Sweet Orange Juice',
    },
    priceArs: 5400,
  },
  {
    id: 'juice-pitcher',
    category: 'drinks',
    subcategory: {
      pt: 'Sucos e Limonadas (xarope orgânico ou estévia)',
      es: 'Jugos (almíbar orgánico o stevia)',
      en: 'Juices & Lemonades (organic syrup or stevia)',
    },
    name: {
      pt: 'Jarra de Suco 750 ml',
      es: 'Jarrita de Jugo 750 ml',
      en: 'Juice Pitcher 750 ml',
    },
    description: {
      pt: 'Laranja, toranja ou limão',
      es: 'Naranja, pomelo o limón',
      en: 'Orange, grapefruit or lemon',
    },
    priceArs: 8500,
  },
  // Seasonal Smoothies
  {
    id: 'smoothie-strawberry-banana',
    category: 'drinks',
    subcategory: {
      pt: 'Smoothies da Estação',
      es: 'Smoothies de Estación',
      en: 'Seasonal Smoothies',
    },
    name: {
      pt: 'Morango + Banana',
      es: 'Frutilla + Banana',
      en: 'Strawberry + Banana',
    },
    description: {
      pt: 'Leite ou água, morango, banana e gelo',
      es: 'Leche o agua, frutilla, banana y hielo',
      en: 'Milk or water, strawberry, banana and ice',
    },
    priceArs: 8500,
  },
  {
    id: 'smoothie-mango-passion',
    category: 'drinks',
    subcategory: {
      pt: 'Smoothies da Estação',
      es: 'Smoothies de Estación',
      en: 'Seasonal Smoothies',
    },
    name: {
      pt: 'Manga + Maracujá',
      es: 'Mango + Maracuyá',
      en: 'Mango + Passion Fruit',
    },
    description: {
      pt: 'Leite ou água, manga, maracujá e gelo',
      es: 'Leche o agua, mango, maracuyá y hielo',
      en: 'Milk or water, mango, passion fruit and ice',
    },
    priceArs: 8500,
  },
  {
    id: 'smoothie-mango-strawberry',
    category: 'drinks',
    subcategory: {
      pt: 'Smoothies da Estação',
      es: 'Smoothies de Estación',
      en: 'Seasonal Smoothies',
    },
    name: {
      pt: 'Manga + Morango',
      es: 'Mango + Frutilla',
      en: 'Mango + Strawberry',
    },
    description: {
      pt: 'Leite ou água, manga, morango e gelo',
      es: 'Leche o agua, mango, frutilla y hielo',
      en: 'Milk or water, mango, strawberry and ice',
    },
    priceArs: 8500,
  },
  {
    id: 'smoothie-berries-banana',
    category: 'drinks',
    subcategory: {
      pt: 'Smoothies da Estação',
      es: 'Smoothies de Estación',
      en: 'Seasonal Smoothies',
    },
    name: {
      pt: 'Frutas Vermelhas + Banana',
      es: 'Frutos Rojos + Banana',
      en: 'Berries + Banana',
    },
    description: {
      pt: 'Leite ou água, frutas vermelhas, banana e gelo',
      es: 'Leche o agua, frutos rojos, banana y hielo',
      en: 'Milk or water, berries, banana and ice',
    },
    priceArs: 8500,
  },
  // Power, Energy & Detox
  {
    id: 'power-passion-energy',
    category: 'drinks',
    subcategory: {
      pt: 'Sucos Power, Energy & Detox',
      es: 'Jugos Power, Energy & Detox',
      en: 'Power, Energy & Detox Juices',
    },
    name: { pt: 'Passion Energy', es: 'Passion Energy', en: 'Passion Energy' },
    description: {
      pt: 'Suco de laranja, manga, maracujá, hortelã e maca',
      es: 'Jugo de naranja, mango, maracuyá, menta y maca',
      en: 'Orange juice, mango, passion fruit, mint and maca',
    },
    priceArs: 7500,
  },
  {
    id: 'power-chlorophyll-detox',
    category: 'drinks',
    subcategory: {
      pt: 'Sucos Power, Energy & Detox',
      es: 'Jugos Power, Energy & Detox',
      en: 'Power, Energy & Detox Juices',
    },
    name: { pt: 'Chlorophyll Detox', es: 'Chlorophyll Detox', en: 'Chlorophyll Detox' },
    description: {
      pt: 'Suco de mirtilo, suco de limão, gengibre e clorofila',
      es: 'Jugo de arándanos, jugo de limón, jengibre y clorofila',
      en: 'Blueberry juice, lemon juice, ginger and chlorophyll',
    },
    priceArs: 7500,
  },
  // Kombucha
  {
    id: 'kombucha-superberry',
    category: 'drinks',
    subcategory: {
      pt: 'Kombuchas (em lata, sem adição de açúcar)',
      es: 'Kombuchas (en lata sin azúcar agregada)',
      en: 'Kombucha (canned, no added sugar)',
    },
    name: {
      pt: 'KOMBUCHA SuperBerry',
      es: 'KOMBUCHA SuperBerry',
      en: 'KOMBUCHA SuperBerry',
    },
    priceArs: 7000,
    tags: ['gf'],
  },
  {
    id: 'kombucha-ginger-lemon',
    category: 'drinks',
    subcategory: {
      pt: 'Kombuchas (em lata, sem adição de açúcar)',
      es: 'Kombuchas (en lata sin azúcar agregada)',
      en: 'Kombucha (canned, no added sugar)',
    },
    name: {
      pt: 'KOMBUCHA Ginger Lemon',
      es: 'KOMBUCHA Ginger Lemon',
      en: 'KOMBUCHA Ginger Lemon',
    },
    priceArs: 7000,
    tags: ['gf'],
  },
  {
    id: 'kombucha-mango',
    category: 'drinks',
    subcategory: {
      pt: 'Kombuchas (em lata, sem adição de açúcar)',
      es: 'Kombuchas (en lata sin azúcar agregada)',
      en: 'Kombucha (canned, no added sugar)',
    },
    name: {
      pt: 'KOMBUCHA Mango',
      es: 'KOMBUCHA Mango',
      en: 'KOMBUCHA Mango',
    },
    priceArs: 7000,
    tags: ['gf'],
  },
  // Water
  {
    id: 'water',
    category: 'drinks',
    subcategory: { pt: 'Água', es: 'Agua', en: 'Water' },
    name: {
      pt: 'Água com / sem gás',
      es: 'Agua con/sin gas',
      en: 'Sparkling / Still Water',
    },
    priceArs: 4000,
  },

  // ===================== MAIN COURSES =====================
  {
    id: 'kids-gnocchi',
    category: 'mains',
    name: {
      pt: 'Nhoque Kids',
      es: 'Ñoquis Peques',
      en: "Kids' Gnocchi",
    },
    description: {
      pt: 'Menu infantil. Nhoque macio de mandioca com molho de creme de leite e queijo',
      es: 'Menú Infantil. Suaves ñoquis de mandioca con salsa de crema de leche y queso',
      en: "Kids' menu. Soft cassava gnocchi with cream and cheese sauce",
    },
    priceArs: 12000,
    glutenFreeOptionNote: true,
  },
  {
    id: 'green-power-crepe',
    category: 'mains',
    name: {
      pt: 'Crepe Força Verde',
      es: 'Crepe Fuerza Verde',
      en: 'Green Power Crêpe',
    },
    description: {
      pt: 'Crepe de beterraba recheado com espinafre e ricota, coberto com molho cremoso e acompanhado de mix de folhas e tomate',
      es: 'Crepe de remolacha con relleno de espinaca y ricota, bañado en salsa crema y acompañado de un mix de verdes y tomate',
      en: 'Beet crêpe filled with spinach and ricotta, topped with cream sauce and served with mixed greens and tomato',
    },
    priceArs: 16500,
    glutenFreeOptionNote: true,
  },
  {
    id: 'seasonal-filled-pasta',
    category: 'mains',
    name: {
      pt: 'Massa Recheada da Estação',
      es: 'Relleno de Estación',
      en: 'Seasonal Filled Pasta',
    },
    description: {
      pt: 'Sorrentinos de abóbora cabotiá assada, mozarela e nozes, com creme de cogumelos e cebolinha',
      es: 'Sorrentinos de zapallo cabutia asado, mozzarella y nueces, con crema de hongos y verdeo',
      en: 'Sorrentinos filled with roasted kabocha squash, mozzarella and walnuts, in a mushroom and scallion cream',
    },
    priceArs: 16000,
    glutenFreeOptionNote: true,
  },
  {
    id: 'root-and-tomato',
    category: 'mains',
    name: {
      pt: 'Raiz e Tomate',
      es: 'Raíz y Tomate',
      en: 'Root & Tomato',
    },
    description: {
      pt: 'Nhoque macio de mandioca com tomates-cereja assados, alho e manjericão, queijo ralado ou rawmesan (parmesão vegano)',
      es: 'Ñoquis suaves de mandioca con tomates cherrys asados, ajo y albahaca, queso rallado o rawmesan',
      en: 'Soft cassava gnocchi with roasted cherry tomatoes, garlic and basil, grated cheese or rawmesan (vegan parmesan)',
    },
    priceArs: 20000,
    highlight29th: true,
    glutenFreeOptionNote: true,
  },
  {
    id: 'seafood-tagliatelle',
    category: 'mains',
    name: {
      pt: 'Tagliatelle do Mar',
      es: 'Tagliatelle de Mar',
      en: 'Seafood Tagliatelle',
    },
    description: {
      pt: 'Massa artesanal cortada à faca, com suave molho de tomate, camarões e anéis de lula',
      es: 'Pasta artesanal cortada a cuchillo, con suave salsa de tomates, langostinos y aros de calamar',
      en: 'Hand-cut artisan pasta with a light tomato sauce, prawns and squid rings',
    },
    priceArs: 20000,
    glutenFreeOptionNote: true,
  },
  {
    id: 'tenderloin-wok',
    category: 'mains',
    name: {
      pt: 'Wok de Filé',
      es: 'Wok de Solomillo',
      en: 'Tenderloin Wok',
    },
    description: {
      pt: 'Filé macio com legumes, salteados no wok com alho e shoyu',
      es: 'Solomillo tierno con vegetales, salteados al wok con ajo y soja',
      en: 'Tenderloin strips and vegetables, wok-tossed with garlic and soy sauce',
    },
    priceArs: 19000,
    glutenFreeOptionNote: true,
  },
  {
    id: 'cremoso-del-norte',
    category: 'mains',
    name: {
      pt: 'Cremoso do Norte',
      es: 'Cremoso del Norte',
      en: 'Cremoso del Norte',
    },
    description: {
      pt: 'Risoto de quinoa, abóbora cabotiá e queijo azul defumado',
      es: 'Risotto de quinoa, zapallo cabutia y queso azul ahumado',
      en: 'Quinoa risotto with kabocha squash and smoked blue cheese',
    },
    priceArs: 19500,
    glutenFreeOptionNote: true,
  },
  {
    id: 'traditional-criollo',
    category: 'mains',
    name: {
      pt: 'Criollo Tradicional',
      es: 'Criollo Tradicional',
      en: 'Traditional Criollo',
    },
    description: {
      pt: 'Bife de chorizo (contrafilé) com molho criollo tropical, acompanhado de batatas rústicas ou salada',
      es: 'Bife de chorizo con salsa criolla tropical acompañado de papas cuña o ensalada',
      en: 'Strip steak (bife de chorizo) with tropical criolla salsa, served with potato wedges or salad',
    },
    priceArs: 26000,
    image: '/images/menu/traditional-criollo.jpg',
    glutenFreeOptionNote: true,
  },
  {
    id: 'nature-sandwich',
    category: 'mains',
    name: {
      pt: 'Sanduíche Natureza',
      es: 'Sándwich Naturaleza',
      en: 'Nature Sandwich',
    },
    description: {
      pt: 'Sanduíche tipo baguete, mozarela ou queijo vegetal ao curry, azeitonas pretas e rúcula, coberto com ovo pochê e acompanhado de batatas rústicas',
      es: 'Sándwich tipo baguette, queso mozzarella o vegetal al curry, aceitunas negras y rúcula, coronado con un huevo poché y acompañado con papas cuña',
      en: 'Baguette-style sandwich with mozzarella or curried vegan cheese, black olives and arugula, topped with a poached egg and served with potato wedges',
    },
    priceArs: 16500,
    glutenFreeOptionNote: true,
  },
  {
    id: 'citrus-herbs',
    category: 'mains',
    name: {
      pt: 'Cítrico e Ervas',
      es: 'Cítrico y Herbario',
      en: 'Citrus & Herbs',
    },
    description: {
      pt: 'Peito de frango grelhado com molho cítrico de ervas finas, acompanhado de batatas rústicas ou salada',
      es: 'Pechuga grillada con salsa cítrica a las finas hierbas, acompañada de papas cuña o ensalada',
      en: 'Grilled chicken breast with a citrus fine-herb sauce, served with potato wedges or salad',
    },
    priceArs: 16000,
    glutenFreeOptionNote: true,
  },

  // ===================== PIZZAS & SALADS =====================
  {
    id: 'larronda-salad',
    category: 'pizzas-salads',
    subcategory: { pt: 'Saladas', es: 'Ensaladas', en: 'Salads' },
    name: {
      pt: 'Salada Larronda',
      es: 'Ensalada Larronda',
      en: 'Larronda Salad',
    },
    description: {
      pt: 'Abacate, manga, arroz yamani, cenouras assadas, folhas verdes, picles de pepino, patê de girassol e vinagrete de laranja',
      es: 'Palta, mango, arroz yamaní, zanahorias asadas, hojas verdes, pickles de pepinillos, paté de girasol y vinagreta de naranja',
      en: 'Avocado, mango, yamani brown rice, roasted carrots, greens, pickled gherkins, sunflower pâté and orange vinaigrette',
    },
    priceArs: 16000,
    tags: ['vegan'],
  },
  {
    id: 'caesar-reimagined',
    category: 'pizzas-salads',
    subcategory: { pt: 'Saladas', es: 'Ensaladas', en: 'Salads' },
    name: {
      pt: 'Caesar Reimaginada',
      es: 'Ensalada César Reimaginada',
      en: 'Caesar Reimagined',
    },
    description: {
      pt: 'Versão sem glúten e à base de plantas, com tofu marinado, folhas frescas e molho cremoso',
      es: 'Versión sin gluten y basada en plantas, con tofu marinado, hojas frescas y aderezo cremoso',
      en: 'Gluten-free, plant-based version with marinated tofu, fresh greens and a creamy dressing',
    },
    priceArs: 19500,
    tags: ['gf', 'vegan'],
  },
  {
    id: 'living-protein-salad',
    category: 'pizzas-salads',
    subcategory: { pt: 'Saladas', es: 'Ensaladas', en: 'Salads' },
    name: {
      pt: 'Salada Proteína Viva',
      es: 'Ensalada Proteína Viva',
      en: 'Living Protein Salad',
    },
    description: {
      pt: 'Lentilhas, abóboras assadas, ervilhas, folhas verdes, sementes de girassol agridoces, tomates assados, milho amarelo e cebolas caramelizadas, com vinagrete de aceto balsâmico',
      es: 'Lentejas, calabazas asadas, arvejas, hojas verdes, girasol agridulce, tomates asados, maíz amarillo y cebollas caramelizadas, con vinagreta de aceto balsámico',
      en: 'Lentils, roasted squash, peas, greens, sweet-and-sour sunflower seeds, roasted tomatoes, yellow corn and caramelized onions, with balsamic vinaigrette',
    },
    priceArs: 16500,
    tags: ['vegan'],
  },
  {
    id: 'quinoa-salad',
    category: 'pizzas-salads',
    subcategory: { pt: 'Saladas', es: 'Ensaladas', en: 'Salads' },
    name: {
      pt: 'Salada de Quinoa',
      es: 'Ensalada de Quínoa',
      en: 'Quinoa Salad',
    },
    description: {
      pt: 'Mix de folhas verdes, quinoa vermelha, abóbora assada, croutons (opção sem glúten), molho de limão com iogurte natural e praliné de girassol',
      es: 'Mix de hojas verdes, quinoa roja, zapallo asado, crutones (opción sin gluten), limoneta de yogurt natural y garrapiñada de girasol',
      en: 'Mixed greens, red quinoa, roasted squash, croutons (gluten-free option), natural yogurt lemon dressing and candied sunflower seeds',
    },
    priceArs: 16500,
    tags: ['gf'],
  },
  // Pizzas
  {
    id: 'pizza-margherita',
    category: 'pizzas-salads',
    subcategory: { pt: 'Pizzas', es: 'Pizzas', en: 'Pizzas' },
    name: {
      pt: 'Pizza Margherita',
      es: 'Pizza Margarita',
      en: 'Pizza Margherita',
    },
    description: {
      pt: 'Tomates confitados, mozarela e manjericão',
      es: 'Tomates confitados, mozzarella y albahaca',
      en: 'Confit tomatoes, mozzarella and basil',
    },
    priceArs: 9800,
    hasVeganOption: true,
    veganSamePrice: true,
    image: '/images/menu/artisan-pizzas.jpg',
  },
  {
    id: 'pizza-funghi',
    category: 'pizzas-salads',
    subcategory: { pt: 'Pizzas', es: 'Pizzas', en: 'Pizzas' },
    name: {
      pt: 'Pizza Funghi',
      es: 'Pizza Fungi',
      en: 'Pizza Funghi',
    },
    description: {
      pt: 'Cebolas caramelizadas, cogumelos grelhados e mozarela',
      es: 'Cebollas caramelizadas, hongos grillados y mozzarella',
      en: 'Caramelized onions, grilled mushrooms and mozzarella',
    },
    priceArs: 10000,
    hasVeganOption: true,
    veganSamePrice: true,
  },
  {
    id: 'pizza-fort',
    category: 'pizzas-salads',
    subcategory: { pt: 'Pizzas', es: 'Pizzas', en: 'Pizzas' },
    name: {
      pt: 'Pizza Fort',
      es: 'Pizza Fort',
      en: 'Pizza Fort',
    },
    description: {
      pt: 'Queijo azul, rúcula e mozarela',
      es: 'Queso azul, rúcula y mozzarella',
      en: 'Blue cheese, arugula and mozzarella',
    },
    priceArs: 10500,
    hasVeganOption: true,
    veganSamePrice: true,
  },
  {
    id: 'pizza-mbeju',
    category: 'pizzas-salads',
    subcategory: { pt: 'Pizzas', es: 'Pizzas', en: 'Pizzas' },
    name: {
      pt: 'Pizza Mbejú',
      es: 'Pizza Mbejú',
      en: 'Pizza Mbejú',
    },
    description: {
      pt: 'Base de mbejú, rúcula, provençal e mozarela',
      es: 'Mbejú, rúcula, provenzal y mozzarella',
      en: 'Mbejú base, arugula, provenzal (garlic & parsley) and mozzarella',
    },
    priceArs: 10900,
  },

  // ===================== DESSERTS =====================
  {
    id: 'capricho-chocolate',
    category: 'desserts',
    name: {
      pt: 'Capricho de Chocolate',
      es: 'Capricho de Chocolate',
      en: 'Capricho de Chocolate',
    },
    description: {
      pt: 'Bolo vegano intensamente achocolatado da LARRONDA, com ganache de chocolate e frutas vermelhas',
      es: 'Torta vegetal chocolatosa LARRONDA con ganache de chocolate y frutos rojos',
      en: "LARRONDA's rich vegan chocolate cake with chocolate ganache and berries",
    },
    priceArs: 8000,
    tags: ['vegan'],
    image: '/images/menu/capricho-chocolate.jpg',
  },
  {
    id: 'berry-cheesecake',
    category: 'desserts',
    name: {
      pt: 'Cheesecake de Frutas Vermelhas',
      es: 'Cheesecake con Frutos Rojos',
      en: 'Berry Cheesecake',
    },
    description: {
      pt: 'Tradicional',
      es: 'Tradicional',
      en: 'Classic',
    },
    priceArs: 12000,
  },
  {
    id: 'berry-cheesecake-gf',
    category: 'desserts',
    name: {
      pt: 'Cheesecake de Frutas Vermelhas (Sem Glúten)',
      es: 'Cheesecake con Frutos Rojos (Sin Gluten)',
      en: 'Berry Cheesecake (Gluten-Free)',
    },
    description: {
      pt: 'Sem glúten',
      es: 'Sin gluten',
      en: 'Gluten-free',
    },
    priceArs: 14000,
    tags: ['gf'],
  },
  {
    id: 'chocotorta',
    category: 'desserts',
    name: {
      pt: 'Chocotorta',
      es: 'Chocotorta',
      en: 'Chocotorta',
    },
    description: {
      pt: 'Clássica torta argentina de biscoito de chocolate e doce de leite',
      es: 'Tradicional',
      en: 'Classic Argentine chocolate cookie and dulce de leche cake',
    },
    priceArs: 10000,
  },
  {
    id: 'chocotorta-gf',
    category: 'desserts',
    name: {
      pt: 'Chocotorta (Sem Glúten)',
      es: 'Chocotorta (Sin Gluten)',
      en: 'Chocotorta (Gluten-Free)',
    },
    description: {
      pt: 'Sem glúten',
      es: 'Sin gluten',
      en: 'Gluten-free',
    },
    priceArs: 14000,
    tags: ['gf'],
  },
  {
    id: 'ricotta-cake',
    category: 'desserts',
    name: {
      pt: 'Torta de Ricota',
      es: 'Torta de Ricota',
      en: 'Ricotta Cake',
    },
    priceArs: 8500,
  },
  {
    id: 'classic-ice-cream',
    category: 'desserts',
    name: {
      pt: 'Sorvetes Tradicionais',
      es: 'Helados Tradicionales',
      en: 'Classic Ice Cream',
    },
    description: {
      pt: 'Pistache / Creme americano',
      es: 'Pistacho / Crema Americana',
      en: 'Pistachio / Crema americana (vanilla cream)',
    },
    priceArs: 8000,
    tags: ['gf'],
  },
  {
    id: 'vegan-ice-cream',
    category: 'desserts',
    name: {
      pt: 'Sorvetes Veganos',
      es: 'Helados Vegetales',
      en: 'Vegan Ice Cream',
    },
    description: {
      pt: 'Chocolate / Framboesa',
      es: 'Chocolate / Frambuesa',
      en: 'Chocolate / Raspberry',
    },
    priceArs: 8000,
    tags: ['gf', 'vegan'],
  },
  {
    id: 'sugar-free-ice-cream',
    category: 'desserts',
    name: {
      pt: 'Sorvete sem Açúcar',
      es: 'Helado sin azúcar',
      en: 'Sugar-Free Ice Cream',
    },
    description: {
      pt: 'Mix de frutas da estação',
      es: 'Mix de frutas de estación',
      en: 'Seasonal fruit mix',
    },
    priceArs: 8000,
    tags: ['gf', 'vegan'],
  },
  {
    id: 'pear-tart',
    category: 'desserts',
    name: {
      pt: 'Torta de Pera',
      es: 'Tarta de Pera',
      en: 'Pear Tart',
    },
    priceArs: 8000,
  },
  {
    id: 'tiramisu',
    category: 'desserts',
    name: {
      pt: 'Tiramisù',
      es: 'Tiramisú',
      en: 'Tiramisu',
    },
    priceArs: 11000,
    tags: ['new'],
  },

  // ===================== WINES, COCKTAILS & BEERS =====================
  // Red Wines
  {
    id: 'wine-cecchin',
    category: 'wines-bar',
    subcategory: { pt: 'Carta de Vinhos · Tintos', es: 'Carta de Vinos · Tintos', en: 'Wine List · Red Wines' },
    name: {
      pt: 'Cecchin Orgánico Cabernet Sauvignon (750 ml)',
      es: 'Cecchin Orgánico Cabernet Sauvignon (750ML)',
      en: 'Cecchin Orgánico Cabernet Sauvignon (750 ml)',
    },
    description: {
      pt: 'Pimentões maduros e especiarias. Corpo consistente, taninos intensos e elegante persistência',
      es: 'Pimientos maduros y especias. Cuerpo consistente, taninos intensos y elegante persistencia',
      en: 'Ripe peppers and spices. Solid body, intense tannins and an elegant finish',
    },
    priceArs: 23000,
  },
  {
    id: 'wine-alambrado-malbec',
    category: 'wines-bar',
    subcategory: { pt: 'Carta de Vinhos · Tintos', es: 'Carta de Vinos · Tintos', en: 'Wine List · Red Wines' },
    name: {
      pt: 'Alambrado Malbec (750 ml)',
      es: 'Alambrado Malbec (750ML)',
      en: 'Alambrado Malbec (750 ml)',
    },
    description: {
      pt: 'Frutas vermelhas, ameixas e amoras, integradas com notas de baunilha, tabaco e chocolate',
      es: 'Frutos rojos, ciruelas y moras, integrados con notas de vainilla, tabaco y chocolate',
      en: 'Red berries, plums and blackberries, blended with notes of vanilla, tobacco and chocolate',
    },
    priceArs: 23000,
  },
  {
    id: 'wine-organico-franc',
    category: 'wines-bar',
    subcategory: { pt: 'Carta de Vinhos · Tintos', es: 'Carta de Vinos · Tintos', en: 'Wine List · Red Wines' },
    name: {
      pt: 'Orgánico Franc Roble (750 ml)',
      es: 'Orgánico Franc Roble (750ML)',
      en: 'Orgánico Franc Roble (750 ml)',
    },
    description: {
      pt: 'Frutas vermelhas e negras, especias doces e um sutil defumado do carvalho. Intenso e equilibrado',
      es: 'Frutos rojos y negros, especias dulces y un sutil ahumado del roble. Intenso y equilibrado',
      en: 'Red and black fruit, sweet spices and a subtle smokiness from the oak. Intense and balanced',
    },
    priceArs: 23000,
  },
  {
    id: 'wine-absuelto-malbec',
    category: 'wines-bar',
    subcategory: { pt: 'Carta de Vinhos · Tintos', es: 'Carta de Vinos · Tintos', en: 'Wine List · Red Wines' },
    name: {
      pt: 'Absuelto Malbec (750 ml)',
      es: 'Absuelto Malbec (750ML)',
      en: 'Absuelto Malbec (750 ml)',
    },
    description: {
      pt: 'Frutado e amável, de taninos macios. Edição limitada de Medrano e Luján de Cuyo, com 6 meses em carvalho francês',
      es: 'Frutado y amable, de taninos suaves. Edición limitada de Medrano y Luján de Cuyo, con 6 meses en roble francés',
      en: 'Fruity and approachable, with soft tannins. Limited edition from Medrano and Luján de Cuyo, aged 6 months in French oak',
    },
    priceArs: 25000,
    tags: ['new'],
  },
  {
    id: 'wine-absuelto-cf',
    category: 'wines-bar',
    subcategory: { pt: 'Carta de Vinhos · Tintos', es: 'Carta de Vinos · Tintos', en: 'Wine List · Red Wines' },
    name: {
      pt: 'Absuelto Cabernet Franc (750 ml)',
      es: 'Absuelto Cabernet Franc (750ML)',
      en: 'Absuelto Cabernet Franc (750 ml)',
    },
    description: {
      pt: 'Complexo e expressivo, com notas de carvalho francês. Edição limitada de Alto Agrelo',
      es: 'Complejo y expresivo, con notas de roble francés. Edición limitada de Alto Agrelo',
      en: 'Complex and expressive, with French oak notes. Limited edition from Alto Agrelo',
    },
    priceArs: 29000,
    tags: ['new'],
  },
  {
    id: 'wine-gran-sentenciado',
    category: 'wines-bar',
    subcategory: { pt: 'Carta de Vinhos · Tintos', es: 'Carta de Vinos · Tintos', en: 'Wine List · Red Wines' },
    name: {
      pt: 'Gran Sentenciado (750 ml)',
      es: 'Gran Sentenciado (750ML)',
      en: 'Gran Sentenciado (750 ml)',
    },
    description: {
      pt: 'Gran Reserva de Malbec e Cabernet Franc do Vale de Uco. Profundo, de taninos complexos, com 18 meses em barrica',
      es: 'Gran Reserva de Malbec y Cabernet Franc del Valle de Uco. Profundo, de taninos complejos, con 18 meses en barrica',
      en: 'Gran Reserva blend of Malbec and Cabernet Franc from the Uco Valley. Deep, with complex tannins and 18 months in barrel',
    },
    priceArs: 49500,
    tags: ['new'],
  },
  // White Wines
  {
    id: 'wine-alambrado-chardonnay',
    category: 'wines-bar',
    subcategory: { pt: 'Carta de Vinhos · Brancos', es: 'Carta de Vinos · Blancos', en: 'Wine List · White Wines' },
    name: {
      pt: 'Alambrado Chardonnay (750 ml)',
      es: 'Alambrado Chardonnay (750ML)',
      en: 'Alambrado Chardonnay (750 ml)',
    },
    description: {
      pt: 'Frutas brancas maduras, notas tropicais e delicado fundo de baunilha e mel. Complexo e de grande volume',
      es: 'Frutas blancas maduras, notas tropicales y delicado fondo de vainilla y miel. Complejo y de gran volumen',
      en: 'Ripe white fruit, tropical notes and a delicate background of vanilla and honey. Complex and full-bodied',
    },
    priceArs: 23000,
  },
  {
    id: 'wine-absuelto-sb',
    category: 'wines-bar',
    subcategory: { pt: 'Carta de Vinhos · Brancos', es: 'Carta de Vinos · Blancos', en: 'Wine List · White Wines' },
    name: {
      pt: 'Absuelto Sauvignon Blanc (750 ml)',
      es: 'Absuelto Sauvignon Blanc (750ML)',
      en: 'Absuelto Sauvignon Blanc (750 ml)',
    },
    description: {
      pt: 'Fresco e vibrante, com notas cítricas e herbais. Acidez viva e final limpo',
      es: 'Fresco y vibrante, con notas cítricas y herbales. Acidez viva y final limpio',
      en: 'Fresh and vibrant, with citrus and herbal notes. Lively acidity and a clean finish',
    },
    priceArs: 25000,
    tags: ['new'],
  },
  // Sparkling Wines
  {
    id: 'wine-organico-espumante',
    category: 'wines-bar',
    subcategory: { pt: 'Espumantes', es: 'Espumantes', en: 'Sparkling Wines' },
    name: {
      pt: 'Orgánico Espumante (750 ml)',
      es: 'Orgánico Espumante (750ML)',
      en: 'Orgánico Espumante (750 ml)',
    },
    description: {
      pt: 'Delicado, frutado e doce. Notas de pêssego, mel e toranja',
      es: 'Delicado, frutal y dulce. Notas de durazno, miel y pomelo',
      en: 'Delicate, fruity and sweet. Notes of peach, honey and grapefruit',
    },
    priceArs: 26000,
  },
  {
    id: 'wine-cruzat-ice',
    category: 'wines-bar',
    subcategory: { pt: 'Espumantes', es: 'Espumantes', en: 'Sparkling Wines' },
    name: {
      pt: 'Cruzat Ice Dulce (750 ml)',
      es: 'Cruzat Ice Dulce (750ML)',
      en: 'Cruzat Ice Dulce (750 ml)',
    },
    description: {
      pt: 'Espumante com acidez equilibrada, aromas frutados e final harmonioso',
      es: 'Espumoso con la acidez equilibrada, con aromas frutados y final armonioso',
      en: 'Sparkling wine with balanced acidity, fruity aromas and a harmonious finish',
    },
    priceArs: 29000,
  },
  // Beers
  {
    id: 'beer-gf',
    category: 'wines-bar',
    subcategory: { pt: 'Cervejas · Linha Antares', es: 'Cervezas · Línea Antares', en: 'Beers · Antares Line' },
    name: { pt: 'Cerveja Sem Glúten', es: 'Cerveza Gluten Free', en: 'Gluten Free Beer' },
    priceArs: 6000,
    tags: ['gf'],
  },
  {
    id: 'beer-kolsch',
    category: 'wines-bar',
    subcategory: { pt: 'Cervejas · Linha Antares', es: 'Cervezas · Línea Antares', en: 'Beers · Antares Line' },
    name: { pt: 'Kolsch', es: 'Kolsch', en: 'Kolsch' },
    description: {
      pt: 'Loira artesanal suave, levemente frutada, com baixo aroma de lúpulo',
      es: 'Rubia suave artesanal levemente afrutada con bajo aroma a lúpulo',
      en: 'Smooth craft blonde, lightly fruity with a low hop aroma',
    },
    priceArs: 6000,
  },
  {
    id: 'beer-scotch',
    category: 'wines-bar',
    subcategory: { pt: 'Cervejas · Linha Antares', es: 'Cervezas · Línea Antares', en: 'Beers · Antares Line' },
    name: { pt: 'Scotch', es: 'Scotch', en: 'Scotch' },
    description: {
      pt: 'Cor âmbar profunda, com sabor de toffee, doce e maltado; pouco lupulada',
      es: 'Color ámbar profundo, con un sabor toffee, dulce y maltoso, poco lupulada',
      en: 'Deep amber color with a sweet, malty toffee flavor; lightly hopped',
    },
    priceArs: 6000,
  },
  {
    id: 'beer-lager',
    category: 'wines-bar',
    subcategory: { pt: 'Cervejas · Linha Antares', es: 'Cervezas · Línea Antares', en: 'Beers · Antares Line' },
    name: { pt: 'Lager', es: 'Lager', en: 'Lager' },
    description: {
      pt: 'Dourada, brilhante e de corpo leve',
      es: 'Dorada, brillante y de cuerpo liviano',
      en: 'Golden, bright and light-bodied',
    },
    priceArs: 6000,
  },
  {
    id: 'beer-ipa',
    category: 'wines-bar',
    subcategory: { pt: 'Cervejas · Linha Antares', es: 'Cervezas · Línea Antares', en: 'Beers · Antares Line' },
    name: { pt: 'IPA', es: 'IPA', en: 'IPA' },
    description: {
      pt: 'Cor âmbar clara, amarga, com notas cítricas, florais e leve malte',
      es: 'Color ámbar claro, amarga con notas cítricas, florales y leve malta',
      en: 'Light amber, bitter, with citrus and floral notes and a hint of malt',
    },
    priceArs: 6500,
  },
  {
    id: 'beer-caravana',
    category: 'wines-bar',
    subcategory: { pt: 'Cervejas · Linha Antares', es: 'Cervezas · Línea Antares', en: 'Beers · Antares Line' },
    name: { pt: 'Caravana', es: 'Caravana', en: 'Caravana' },
    description: {
      pt: 'IPA de baixo teor alcoólico, leve e amarga, lupulada com notas cítricas e frutadas',
      es: 'IPA de baja graduación alcohólica, liviana y amarga, lupulada con notas cítricas y frutales',
      en: 'Low-ABV IPA, light and bitter, hoppy with citrus and fruity notes',
    },
    priceArs: 6500,
  },
  {
    id: 'beer-honey',
    category: 'wines-bar',
    subcategory: { pt: 'Cervejas · Linha Antares', es: 'Cervezas · Línea Antares', en: 'Beers · Antares Line' },
    name: { pt: 'Honey', es: 'Honey', en: 'Honey' },
    description: {
      pt: 'Cor âmbar moderada, com sabor doce e suave de mel',
      es: 'Color ámbar moderado, con un sabor dulce mieloso y suave',
      en: 'Medium amber with a smooth, sweet honey flavor',
    },
    priceArs: 6000,
  },
  {
    id: 'beer-playa-grande',
    category: 'wines-bar',
    subcategory: { pt: 'Cervejas · Linha Antares', es: 'Cervezas · Línea Antares', en: 'Beers · Antares Line' },
    name: { pt: 'Playa Grande', es: 'Playa Grande', en: 'Playa Grande' },
    description: {
      pt: 'Cor âmbar clara, cítrica e refrescante, feita à base de trigo com aveia, casca de laranja e gengibre',
      es: 'Color ámbar claro, cítrica y refrescante, elaborada a base de trigo con avena, cáscara de naranja y jengibre',
      en: 'Light amber, citrusy and refreshing, brewed with wheat and oats, orange peel and ginger',
    },
    priceArs: 6000,
  },
  {
    id: 'beer-non-alcoholic',
    category: 'wines-bar',
    subcategory: { pt: 'Cervejas · Linha Antares', es: 'Cervezas · Línea Antares', en: 'Beers · Antares Line' },
    name: {
      pt: 'Cerveja sem Álcool',
      es: 'Cerveza sin alcohol',
      en: 'Non-Alcoholic Beer',
    },
    priceArs: 6500,
  },
  {
    id: 'beer-otra-ronda',
    category: 'wines-bar',
    subcategory: { pt: 'Cervejas · Linha Antares', es: 'Cervezas · Línea Antares', en: 'Beers · Antares Line' },
    name: { pt: 'Otra Ronda', es: 'Otra Ronda', en: 'Otra Ronda' },
    priceArs: 4500,
    tags: ['new'],
  },
  // Cocktails
  {
    id: 'cocktail-sunset',
    category: 'wines-bar',
    subcategory: { pt: 'Drinks', es: 'Tragos', en: 'Cocktails' },
    name: {
      pt: 'Sunset LARRONDA',
      es: 'Sunset LARRONDA',
      en: 'Sunset LARRONDA',
    },
    description: {
      pt: 'Aperol, maracujá e suco de laranja',
      es: 'Aperol, maracuyá y jugo de naranja',
      en: 'Aperol, passion fruit and orange juice',
    },
    priceArs: 10000,
  },
  {
    id: 'cocktail-caipi',
    category: 'wines-bar',
    subcategory: { pt: 'Drinks', es: 'Tragos', en: 'Cocktails' },
    name: { pt: 'Caipi', es: 'Caipi', en: 'Caipi' },
    description: {
      pt: 'Limão fresco e açúcar com base de vodca ou cachaça',
      es: 'Lima fresca y azúcar con base de vodka o velho',
      en: 'Fresh lime and sugar with vodka or cachaça',
    },
    priceArs: 10000,
  },
  {
    id: 'cocktail-mojito',
    category: 'wines-bar',
    subcategory: { pt: 'Drinks', es: 'Tragos', en: 'Cocktails' },
    name: { pt: 'Mojito', es: 'Mojito', en: 'Mojito' },
    description: {
      pt: 'Rum dourado, limão, hortelã e soda',
      es: 'Ron dorado, limón, menta y soda',
      en: 'Gold rum, lemon, mint and soda',
    },
    priceArs: 10000,
  },
  {
    id: 'cocktail-seasonal-gin',
    category: 'wines-bar',
    subcategory: { pt: 'Drinks', es: 'Tragos', en: 'Cocktails' },
    name: {
      pt: 'Gin da Estação',
      es: 'Gin de Estación',
      en: 'Seasonal Gin',
    },
    description: {
      pt: 'Gin, água tônica e frutas da estação',
      es: 'Gin, agua tónica y frutas de estación',
      en: 'Gin, tonic water and seasonal fruit',
    },
    priceArs: 10000,
    image: '/images/menu/botanical-cocktail.jpg',
  },
  {
    id: 'cocktail-botanical-gin',
    category: 'wines-bar',
    subcategory: { pt: 'Drinks', es: 'Tragos', en: 'Cocktails' },
    name: {
      pt: 'Gin Botânico',
      es: 'Gin Botánico',
      en: 'Botanical Gin',
    },
    description: {
      pt: 'Gin, água tônica, eucalipto, camomila e chá verde',
      es: 'Gin, agua tónica, eucalipto, manzanilla y té verde',
      en: 'Gin, tonic water, eucalyptus, chamomile and green tea',
    },
    priceArs: 11000,
  },

  // ===================== TO GO =====================
  {
    id: 'togo-banana-bread',
    category: 'togo',
    name: {
      pt: 'Bolo de Banana',
      es: 'Budín de Banana',
      en: 'Banana Bread',
    },
    description: {
      pt: 'Banana, chocolate meio amargo e nozes',
      es: 'Banana, chocolate semiamargo y nueces',
      en: 'Banana, dark chocolate and walnuts',
    },
    portionNote: {
      pt: 'Peça inteira',
      es: 'Pieza completa',
      en: 'Whole loaf',
    },
    priceArs: 19000,
    tags: ['vegan'],
  },
  {
    id: 'togo-walnut-bread',
    category: 'togo',
    name: {
      pt: 'Pão de Nozes',
      es: 'Pan de Nuez',
      en: 'Walnut Bread',
    },
    description: {
      pt: 'Pão inteiro estilo artesanal de farinha integral, nozes e sementes',
      es: 'Pieza entera de pan estilo artesano de harina integral, nueces y semillas',
      en: 'Whole artisan-style loaf made with whole-wheat flour, walnuts and seeds',
    },
    portionNote: {
      pt: 'Peça inteira',
      es: 'Pieza completa',
      en: 'Whole loaf',
    },
    priceArs: 22000,
  },
  {
    id: 'togo-lemon-loaf',
    category: 'togo',
    name: {
      pt: 'Bolo de Limão',
      es: 'Budín de Limón',
      en: 'Lemon Loaf Cake',
    },
    description: {
      pt: 'Com cobertura',
      es: 'Con glaseado',
      en: 'Glazed',
    },
    portionNote: {
      pt: 'Peça inteira',
      es: 'Pieza completa',
      en: 'Whole loaf',
    },
    priceArs: 17000,
    image: '/images/menu/lemon-loaf.jpg',
  },
  {
    id: 'togo-pumpkin-loaf',
    category: 'togo',
    name: {
      pt: 'Bolo de Abóbora',
      es: 'Budín de Calabaza',
      en: 'Pumpkin Loaf Cake',
    },
    description: {
      pt: 'Cobertura de laranja',
      es: 'Glaseado de naranja',
      en: 'Orange glaze',
    },
    portionNote: {
      pt: 'Peça inteira',
      es: 'Pieza completa',
      en: 'Whole loaf',
    },
    priceArs: 17000,
    tags: ['vegan'],
  },
];
