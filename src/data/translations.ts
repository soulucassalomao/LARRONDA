import type { Language } from '../types/menu';

export const EXCHANGE_RATES = {
  usdPerArs: 1 / 1540,
  brlPerArs: 1 / 300,
  taxMultiplier: 1 / 1.21,
};

export function formatArs(amount: number, lang: Language): string {
  const locale = lang === 'en' ? 'en-US' : 'es-AR';
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

export function formatUsdEstimate(ars: number, lang: Language): string {
  const val = ars * EXCHANGE_RATES.usdPerArs;
  const formatted = val.toFixed(1);
  return lang === 'en' ? `US$ ${formatted}` : `US$ ${formatted.replace('.', ',')}`;
}

export function formatBrlEstimate(ars: number): string {
  const val = Math.round(ars * EXCHANGE_RATES.brlPerArs);
  return `R$ ${val}`;
}

export function formatTaxExcl(ars: number, lang: Language): string {
  const val = ars * EXCHANGE_RATES.taxMultiplier;
  const locale = lang === 'en' ? 'en-US' : 'es-AR';
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(val);
}

export const UI_COPY: Record<
  Language,
  {
    nav: {
      menu: string;
      oliveTree: string;
      specials: string;
      reviews: string;
    };
    hero: {
      tagline: string;
      headline: string;
      subcopy: string;
      exploreCta: string;
      installCta: string;
      cashPromo: string;
    };
    controls: {
      searchPlaceholder: string;
      allCategories: string;
      filterAll: string;
      filterGf: string;
      filterVegan: string;
      filterNew: string;
      filterFavorites: string;
      showRefCurrencies: string;
      clearFilters: string;
      noResults: string;
      noResultsHint: string;
    };
    tags: {
      gf: string;
      vegan: string;
      new: string;
      traditional: string;
      veganOption: string;
      askGf: string;
      estPrefix: string;
      exclTax: string;
    };
    dishModal: {
      addToRonda: string;
      added: string;
      chooseStyle: string;
      traditionalLabel: string;
      veganLabel: string;
      cashPriceLabel: string;
      taxExclLabel: string;
      close: string;
      favorite: string;
      favorited: string;
    };
    ronda: {
      title: string;
      subtitle: string;
      emptyTitle: string;
      emptyDesc: string;
      cashDiscountToggle: string;
      cashDiscountDesc: string;
      splitBill: string;
      peopleLabel: string;
      perPerson: string;
      subtotal: string;
      cashSavings: string;
      total: string;
      clear: string;
      itemsCount: string;
      noteServer: string;
    };
    specials: {
      sectionTitle: string;
      wednesdayTitle: string;
      wednesdayBody: string;
      day29Title: string;
      day29Body: string;
      petPrefix: string;
      petScript: string;
      petCert: string;
      petBody1: string;
      petBody2: string;
      petBody3: string;
      kombuchaTitle: string;
      kombuchaBody: string;
    };
    reviews: {
      eyebrow: string;
      title: string;
      body: string;
      cta: string;
      secondaryNote: string;
    };
    pwa: {
      installButton: string;
      iosButton: string;
      installedBadge: string;
      offlineBanner: string;
      modalTitle: string;
      modalSubtitle: string;
      welcomeTitle: string;
      welcomeBody: string;
      installNow: string;
      continueInBrowser: string;
      installFallbackHint: string;
      showIosGuideLink: string;
      iosSectionTitle: string;
      iosStep1: string;
      iosStep2: string;
      iosStep3: string;
      iosInAppTip: string;
      close: string;
    };
    footer: {
      allergyNotice: string;
      currencyNotice: string;
      bottomNavMenu: string;
      bottomNavSearch: string;
      bottomNavRonda: string;
      bottomNavApp: string;
    };
  }
> = {
  pt: {
    nav: {
      menu: 'Cardápio',
      oliveTree: 'Sob a Oliveira',
      specials: 'Especiais',
      reviews: 'Avaliações',
    },
    hero: {
      tagline: 'compartir alimenta',
      headline: 'Sabores frescos, feitos para compartilhar à mesa.',
      subcopy:
        'Explore nosso cardápio completo em três idiomas, filtre por opções sem glúten ou veganas, monte sua seleção da mesa e calcule o desconto de 10% em dinheiro.',
      exploreCta: 'Explorar Cardápio',
      installCta: 'Baixar App no Celular',
      cashPromo: '10% OFF PAGANDO EM DINHEIRO',
    },
    controls: {
      searchPlaceholder: 'Buscar prato, ingrediente ou vinho...',
      allCategories: 'Todo o Cardápio',
      filterAll: 'Todos',
      filterGf: 'Sem glúten',
      filterVegan: 'Vegano',
      filterNew: 'Novidade',
      filterFavorites: 'Favoritos',
      showRefCurrencies: 'Mostrar aprox. US$ · R$',
      clearFilters: 'Limpar filtros',
      noResults: 'Nenhum item encontrado com esses filtros.',
      noResultsHint: 'Tente buscar outro ingrediente ou limpar os filtros ativos.',
    },
    tags: {
      gf: 'Sem glúten',
      vegan: 'Vegano',
      new: 'Novidade',
      traditional: 'Tradicional',
      veganOption: 'Vegana',
      askGf: '* Consulte as opções sem glúten',
      estPrefix: 'aprox.',
      exclTax: 'SEM IMPOSTOS NACIONAIS',
    },
    dishModal: {
      addToRonda: 'Adicionar à Minha Ronda',
      added: 'Adicionado à Ronda',
      chooseStyle: 'Escolha a versão',
      traditionalLabel: 'Tradicional',
      veganLabel: 'Vegana',
      cashPriceLabel: 'Em dinheiro (-10%)',
      taxExclLabel: 'Sem impostos nacionais',
      close: 'Fechar',
      favorite: 'Salvar nos favoritos',
      favorited: 'Salvo nos favoritos',
    },
    ronda: {
      title: 'Minha Ronda',
      subtitle: 'Monte a seleção da mesa e divida a conta facilmente',
      emptyTitle: 'Sua ronda ainda está vazia',
      emptyDesc: 'Toque no botão + em qualquer prato ou bebida para montar o pedido da sua mesa.',
      cashDiscountToggle: 'Aplicar 10% OFF em dinheiro',
      cashDiscountDesc: 'Desconto válido para pagamentos em espécie',
      splitBill: 'Dividir entre pessoas',
      peopleLabel: 'pessoas',
      perPerson: 'Por pessoa',
      subtotal: 'Subtotal',
      cashSavings: 'Economia em dinheiro (10%)',
      total: 'Total estimado',
      clear: 'Limpar ronda',
      itemsCount: 'itens',
      noteServer: 'Apresente sua seleção ao atendente para confirmar o pedido na mesa.',
    },
    specials: {
      sectionTitle: 'Momentos LARRONDA',
      wednesdayTitle: 'Roda de Mulheres',
      wednesdayBody:
        'Toda quarta-feira esperamos você para compartilhar juntas uma Roda de Mulheres com descontos especiais.',
      day29Title: 'Todo dia 29',
      day29Body:
        'Todo dia 29, venha saborear nosso prato estrela “Vulcão de Raiz e Tomate” com 20% OFF em dinheiro.',
      petPrefix: 'Somos um lugar',
      petScript: 'Pet friendly',
      petCert: 'Certificação Comércio Pet Friendly',
      petBody1:
        'Na LARRONDA celebramos a vida em todas as suas formas, e isso inclui quem enche nossa alma com seu amor incondicional.',
      petBody2:
        'Por isso, oferecemos um mimo gostoso, por conta da casa, com muito carinho para nossos amigos de quatro patas.',
      petBody3: 'Porque cada momento compartilhado fica mais bonito quando eles estão por perto.',
      kombuchaTitle: 'Kombuchas em lata, sem adição de açúcar',
      kombuchaBody:
        'Consumida antes das refeições, facilita a digestão graças aos seus probióticos e ácidos, que ajudam a absorver melhor os nutrientes; regula o açúcar no sangue e facilita a queima de gordura.',
    },
    reviews: {
      eyebrow: 'Sua opinião alimenta nossa casa',
      title: 'Compartilhou um bom momento na LARRONDA?',
      body: 'Deixe sua avaliação no Google ou confira o que outros clientes contam sobre nossos pratos, vinhos e atendimento.',
      cta: 'Avaliar e ver resenhas no Google',
      secondaryNote: 'Abre diretamente no Google Maps / Google Avaliações',
    },
    pwa: {
      installButton: 'Instalar App',
      iosButton: 'Adicionar no iPhone',
      installedBadge: 'App instalado',
      offlineBanner: 'Modo offline — cardápio salvo disponível no aparelho',
      modalTitle: 'Leve a LARRONDA no seu celular',
      modalSubtitle: 'Acesse o cardápio instantaneamente da tela inicial, mesmo sem internet.',
      welcomeTitle: 'Instalar o cardápio da LARRONDA?',
      welcomeBody:
        'Adicione o aplicativo à sua tela inicial para abrir com um toque, ou continue navegando pelo navegador.',
      installNow: 'Instalar aplicativo',
      continueInBrowser: 'Continuar pelo navegador',
      installFallbackHint:
        'No Android (Chrome), abra este endereço diretamente no navegador fora de pré-visualizações para instalar automaticamente com 1 toque.',
      showIosGuideLink: 'Está usando iPhone? Ver guia do Safari',
      iosSectionTitle: 'Guia rápido para iPhone / iPad (Safari)',
      iosStep1: 'Toque no ícone Compartilhar (quadrado com seta para cima) na barra inferior do Safari.',
      iosStep2: 'Role a lista para baixo e toque em “Adicionar à Tela de Início”.',
      iosStep3: 'Confirme tocando em “Adicionar” no canto superior direito.',
      iosInAppTip:
        'Abriu pelo Instagram ou WhatsApp? Toque nos três pontinhos ou no ícone de bússola e escolha “Abrir no Safari” primeiro.',
      close: 'Fechar',
    },
    footer: {
      allergyNotice:
        'Se você tiver alguma alergia ou restrição alimentar, avise-nos para que possamos levar em conta.',
      currencyNotice:
        'Preços em pesos argentinos (ARS). Os valores em US$ e R$ são estimados, apenas como referência (câmbio de out/2026: US$ 1 ≈ ARS 1.540 · R$ 1 ≈ ARS 300).',
      bottomNavMenu: 'Cardápio',
      bottomNavSearch: 'Buscar',
      bottomNavRonda: 'Ronda',
      bottomNavApp: 'App / iOS',
    },
  },
  es: {
    nav: {
      menu: 'Menú',
      oliveTree: 'Bajo el Olivo',
      specials: 'Especiales',
      reviews: 'Reseñas',
    },
    hero: {
      tagline: 'compartir alimenta',
      headline: 'Sabores frescos, pensados para compartir en la mesa.',
      subcopy:
        'Explorá nuestra carta completa en tres idiomas, filtrá opciones sin TACC o veganas, armá la selección de tu mesa y calculá el 10% OFF en efectivo.',
      exploreCta: 'Explorar Menú',
      installCta: 'Descargar en el Celular',
      cashPromo: '10% OFF PAGANDO EN EFECTIVO',
    },
    controls: {
      searchPlaceholder: 'Buscar plato, ingrediente o vino...',
      allCategories: 'Toda la Carta',
      filterAll: 'Todos',
      filterGf: 'Sin Gluten',
      filterVegan: 'Vegano',
      filterNew: 'Nuevo',
      filterFavorites: 'Favoritos',
      showRefCurrencies: 'Mostrar aprox. US$ · R$',
      clearFilters: 'Limpiar filtros',
      noResults: 'No encontramos platos con esos filtros.',
      noResultsHint: 'Probá con otro ingrediente o limpiá los filtros activos.',
    },
    tags: {
      gf: 'Sin Gluten',
      vegan: 'Vegano',
      new: 'Nuevo',
      traditional: 'Tradicional',
      veganOption: 'Vegetal',
      askGf: '* Consultar opciones sin TACC',
      estPrefix: 'aprox.',
      exclTax: 'SIN IMPUESTOS NACIONALES',
    },
    dishModal: {
      addToRonda: 'Sumar a Mi Ronda',
      added: 'Sumado a la Ronda',
      chooseStyle: 'Elegí la versión',
      traditionalLabel: 'Tradicional',
      veganLabel: 'Vegetal / Vegana',
      cashPriceLabel: 'En efectivo (-10%)',
      taxExclLabel: 'Sin impuestos nacionales',
      close: 'Cerrar',
      favorite: 'Guardar en favoritos',
      favorited: 'Guardado en favoritos',
    },
    ronda: {
      title: 'Mi Ronda',
      subtitle: 'Armá la selección de la mesa y dividí la cuenta fácil',
      emptyTitle: 'Tu ronda todavía está vacía',
      emptyDesc: 'Tocá el botón + en cualquier plato o bebida para armar la selección de tu mesa.',
      cashDiscountToggle: 'Aplicar 10% OFF en efectivo',
      cashDiscountDesc: 'Beneficio pagando en efectivo en el local',
      splitBill: 'Dividir entre personas',
      peopleLabel: 'personas',
      perPerson: 'Por persona',
      subtotal: 'Subtotal',
      cashSavings: 'Ahorro en efectivo (10%)',
      total: 'Total estimado',
      clear: 'Vaciar ronda',
      itemsCount: 'ítems',
      noteServer: 'Mostrá esta selección al mozo para confirmar tu pedido en la mesa.',
    },
    specials: {
      sectionTitle: 'Momentos LARRONDA',
      wednesdayTitle: 'Ronda de Mujeres',
      wednesdayBody:
        'Los miércoles te esperamos para compartir juntas una Ronda de Mujeres con descuentos especiales.',
      day29Title: 'Todos los 29',
      day29Body:
        'Todos los 29 de cada mes vení a disfrutar de nuestro plato estrella “Volcán de Raíz y Tomate” con un 20% OFF en efectivo.',
      petPrefix: 'Somos un local',
      petScript: 'Pet friendly',
      petCert: 'Certificación Comercio Pet Friendly',
      petBody1:
        'En LARRONDA celebramos la vida en todas sus formas, y eso incluye a quienes nos llenan el alma con su amor incondicional.',
      petBody2:
        'Por eso, contamos con algo rico, sin costo, con mucho cariño para nuestros amigos de cuatro patas.',
      petBody3: 'Porque cada instante compartido se vuelve más lindo cuando ellos están cerca.',
      kombuchaTitle: 'Kombuchas en lata sin azúcar agregada',
      kombuchaBody:
        'Tomarla antes de las comidas facilita la digestión gracias a sus probióticos y ácidos que ayudan a absorber mejor los nutrientes; regula el azúcar en sangre y facilita la quema de grasas.',
    },
    reviews: {
      eyebrow: 'Tu opinión nos ayuda a seguir creciendo',
      title: '¿Compartiste un lindo momento en LARRONDA?',
      body: 'Dejá tu reseña en Google o leé lo que otros comensales cuentan sobre nuestros platos, vinos y atención.',
      cta: 'Dejar o ver reseñas en Google',
      secondaryNote: 'Se abre en Google Maps / Reseñas de Google',
    },
    pwa: {
      installButton: 'Instalar App',
      iosButton: 'Instalar en iPhone',
      installedBadge: 'App instalada',
      offlineBanner: 'Modo sin conexión — carta guardada en tu teléfono',
      modalTitle: 'Llevá LARRONDA en tu celular',
      modalSubtitle: 'Accedé a la carta al instante desde tu pantalla de inicio, incluso sin internet.',
      welcomeTitle: '¿Instalar la carta de LARRONDA?',
      welcomeBody:
        'Agregá la app a tu pantalla de inicio para abrirla con un toque, o continuá navegando desde el navegador.',
      installNow: 'Instalar aplicación',
      continueInBrowser: 'Continuar por el navegador',
      installFallbackHint:
        'En Android (Chrome), abrí este enlace directamente en el navegador fuera de vistas previas para instalar automáticamente con 1 toque.',
      showIosGuideLink: '¿Usás iPhone? Ver guía de Safari',
      iosSectionTitle: 'Guía rápida para iPhone / iPad (Safari)',
      iosStep1: 'Tocá el ícono Compartir (cuadrado con flecha hacia arriba) en la barra inferior de Safari.',
      iosStep2: 'Deslizá hacia abajo y elegí “Agregar a inicio”.',
      iosStep3: 'Confirmá tocando “Agregar” arriba a la derecha.',
      iosInAppTip:
        '¿Abriste el enlace desde Instagram o WhatsApp? Tocá los tres puntos o la brújula y elegí “Abrir en Safari” primero.',
      close: 'Cerrar',
    },
    footer: {
      allergyNotice:
        'Si tenés alguna alergia o restricción alimentaria, avisanos así lo tenemos en cuenta.',
      currencyNotice:
        'Precios en pesos argentinos (ARS). Los montos en US$ y R$ son estimados de referencia (oct/2026: US$ 1 ≈ ARS 1.540 · R$ 1 ≈ ARS 300).',
      bottomNavMenu: 'Menú',
      bottomNavSearch: 'Buscar',
      bottomNavRonda: 'Ronda',
      bottomNavApp: 'App / iOS',
    },
  },
  en: {
    nav: {
      menu: 'Menu',
      oliveTree: 'Olive Tree',
      specials: 'Specials',
      reviews: 'Reviews',
    },
    hero: {
      tagline: 'compartir alimenta',
      headline: 'Fresh, seasonal flavors crafted for sharing at the table.',
      subcopy:
        'Browse our full trilingual menu, filter gluten-free and vegan options, build your table selection, and preview the 10% cash discount.',
      exploreCta: 'Explore Menu',
      installCta: 'Save App to Phone',
      cashPromo: '10% OFF FOR CASH PAYMENTS',
    },
    controls: {
      searchPlaceholder: 'Search dish, ingredient, or wine...',
      allCategories: 'Full Menu',
      filterAll: 'All',
      filterGf: 'Gluten free',
      filterVegan: 'Vegan',
      filterNew: 'New',
      filterFavorites: 'Favorites',
      showRefCurrencies: 'Show est. US$ · R$',
      clearFilters: 'Clear filters',
      noResults: 'No items match your current filters.',
      noResultsHint: 'Try another ingredient or clear the active dietary filters.',
    },
    tags: {
      gf: 'Gluten free',
      vegan: 'Vegan',
      new: 'New',
      traditional: 'Regular',
      veganOption: 'Vegan',
      askGf: '* Ask about our gluten-free options',
      estPrefix: 'est.',
      exclTax: 'EXCL. NATIONAL TAXES',
    },
    dishModal: {
      addToRonda: 'Add to My Round',
      added: 'Added to Round',
      chooseStyle: 'Choose option',
      traditionalLabel: 'Regular',
      veganLabel: 'Vegan',
      cashPriceLabel: 'Cash price (-10%)',
      taxExclLabel: 'Excl. national taxes',
      close: 'Close',
      favorite: 'Save to favorites',
      favorited: 'Saved in favorites',
    },
    ronda: {
      title: 'My Round',
      subtitle: 'Build your table selection and split the bill effortlessly',
      emptyTitle: 'Your round is still empty',
      emptyDesc: 'Tap the + button on any dish or drink to start building your table order.',
      cashDiscountToggle: 'Apply 10% OFF cash discount',
      cashDiscountDesc: 'Available when paying in cash',
      splitBill: 'Split between guests',
      peopleLabel: 'guests',
      perPerson: 'Per person',
      subtotal: 'Subtotal',
      cashSavings: 'Cash savings (10%)',
      total: 'Estimated total',
      clear: 'Clear round',
      itemsCount: 'items',
      noteServer: 'Show this selection to your server when you are ready to order.',
    },
    specials: {
      sectionTitle: 'LARRONDA Highlights',
      wednesdayTitle: "Women's Round",
      wednesdayBody:
        "Every Wednesday, join us and share a Women's Round with special discounts.",
      day29Title: '29th of Every Month',
      day29Body:
        'On the 29th of every month, come enjoy our signature dish “Root & Tomato Volcano” with 20% OFF in cash.',
      petPrefix: 'We are',
      petScript: 'Pet friendly',
      petCert: 'Certified Pet Friendly Venue',
      petBody1:
        'At LARRONDA we celebrate life in all its forms, and that includes those who fill our souls with their unconditional love.',
      petBody2:
        "That's why we offer a little treat, free of charge, made with love for our four-legged friends.",
      petBody3: "Because every shared moment becomes sweeter when they're close by.",
      kombuchaTitle: 'Kombucha — Canned, no added sugar',
      kombuchaBody:
        'Drinking it before meals aids digestion thanks to its probiotics and acids, which help the body absorb nutrients better; it regulates blood sugar and helps burn fat.',
    },
    reviews: {
      eyebrow: 'Share your table experience',
      title: 'Enjoyed your time at LARRONDA?',
      body: 'Leave a review on Google or read what other guests say about our sharing plates, wines, and hospitality.',
      cta: 'Review & read ratings on Google',
      secondaryNote: 'Opens directly in Google Maps / Google Reviews',
    },
    pwa: {
      installButton: 'Install App',
      iosButton: 'Add on iPhone',
      installedBadge: 'App installed',
      offlineBanner: 'Offline mode — cached menu available',
      modalTitle: 'Keep LARRONDA on your phone',
      modalSubtitle: 'Open our digital menu straight from your home screen, even offline.',
      welcomeTitle: 'Install the LARRONDA Menu App?',
      welcomeBody:
        'Add the app to your home screen for one-tap access, or continue browsing directly in your browser.',
      installNow: 'Install app',
      continueInBrowser: 'Continue in browser',
      installFallbackHint:
        'On Android (Chrome), open this URL directly in your browser outside previews to enable 1-tap automatic installation.',
      showIosGuideLink: 'Using an iPhone? View Safari guide',
      iosSectionTitle: 'Quick Guide for iPhone / iPad (Safari)',
      iosStep1: 'Tap the Share icon (square with an upward arrow) in Safari’s bottom bar.',
      iosStep2: 'Scroll down and tap “Add to Home Screen”.',
      iosStep3: 'Confirm by tapping “Add” in the top-right corner.',
      iosInAppTip:
        'Opened from Instagram or WhatsApp? Tap the menu or compass icon and choose “Open in Safari” first.',
      close: 'Close',
    },
    footer: {
      allergyNotice:
        'If you have any allergies or dietary restrictions, let us know so we can take them into account.',
      currencyNotice:
        'Prices in Argentine pesos (ARS). US$ and R$ amounts are estimates for reference only (exchange rate as of Oct 2026: US$ 1 ≈ ARS 1,540 · R$ 1 ≈ ARS 300).',
      bottomNavMenu: 'Menu',
      bottomNavSearch: 'Search',
      bottomNavRonda: 'Round',
      bottomNavApp: 'App / iOS',
    },
  },
};
