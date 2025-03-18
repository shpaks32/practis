const STATIC_IMAGES_PATH = '/college-practice/img/'

export default {
  STATIC_IMAGES_PATH: '/college-practice/img/',
  MENU_ITEMS: [
    { label: 'Home', to: '/' },
    { label: 'Company', to: '/company' },
    { label: 'Profile', to: '/profile' },
    { label: 'Products', to: '/products' },
    { label: 'Services', to: '/services' },
    { label: 'R & D', to: '/r-and-d' },
    { label: 'Contact', to: '/contact' }
  ],
  FOOTER_ITEMS: [
    { label: 'PROFILE', to: '/profile' },
    { label: 'MANAGEMENT', to: '/managment' },
    { label: 'PRODUCTS', to: '/products' },
    { label: 'R & D', to: '/r-and-d' },
    { label: 'LINKS', to: '/links' },
    { label: 'SITEMAP', to: '/sitemap' },
    { label: 'CONTACT', to: '/contact' }
  ],
  CROPS: [
    { name: 'Wheat', img: `${STATIC_IMAGES_PATH}wheat.png` },
    {
      name: 'Confection Watermelon',
      img: `${STATIC_IMAGES_PATH}watermelon.png`
    },
    { name: 'Clover', img: `${STATIC_IMAGES_PATH}clover.png` },
    { name: 'Confection Sunflower', img: `${STATIC_IMAGES_PATH}sunflower.png` },
    { name: 'Tomato', img: `${STATIC_IMAGES_PATH}tomato.png` },
    { name: 'Eggplant P/O', img: `${STATIC_IMAGES_PATH}eggplant.png` },
    {
      name: 'Ornamental Sunflower',
      img: `${STATIC_IMAGES_PATH}ornamental-sunflower.png`
    }
  ],
  HOME_SECTIONS: [
    {
      title: 'Vision',
      description:
        'We believe in long-term growth with an emphasis on the potential of emerging markets. We also support the global need of feeding the growing population.',
      img: `${STATIC_IMAGES_PATH}vision.png`
    },
    {
      title: 'Mission',
      description:
        'Breeding and marketing seeds for advanced field crops and vegetable varieties that provide an added value to all supply chain partners.',
      img: `${STATIC_IMAGES_PATH}mission.png`
    }
  ],
  SEED_CATEGORIES: [
    {
      image: `${STATIC_IMAGES_PATH}active-cotton.png`,
      title: 'Open field crop seeds',
      description: 'wheat, cotton, legumes, hybrid confection sunflower'
    },
    {
      image: `${STATIC_IMAGES_PATH}active-tomato.png`,
      title: 'Vegetable seeds',
      description: 'hybrid open field tomatoes, eggplant, onion, paprika, etc.'
    },
    {
      image: `${STATIC_IMAGES_PATH}active-sunflower.png`,
      title: 'Ornamental seeds',
      description:
        'hybrid cut sunflowers, hybrid patio tomatoes, Bells of Irland, etc.'
    }
  ]
}
