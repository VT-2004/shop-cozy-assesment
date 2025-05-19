// Product data
const productData = {
  mainProduct: {
    id: 'prod-001',
    name: 'Premium Wool Sweater',
    price: 129.00,
    comparePrice: 159.00,
    description: `Our Premium Wool Sweater is crafted from the finest merino wool for ultimate comfort and warmth. The classic design features a crew neckline and ribbed cuffs and hem for a timeless look that never goes out of style.`,
    images: [
      {
        id: 'img-001',
        src: 'https://content.backcountry.com/images/items/900/MKH/MKHZ00R/SUM.jpg',
        alt: 'Premium Wool Sweater - Clay'
      },
      {
        id: 'img-002',
        src: 'https://i.etsystatic.com/16592048/r/il/a59ffc/2705091585/il_fullxfull.2705091585_mk5z.jpg',
        alt: 'Premium Wool Sweater - Clay - Side View'
      },
      {
        id: 'img-003',
        src: 'https://images.pexels.com/photos/9594890/pexels-photo-9594890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Premium Wool Sweater - Clay - Back View'
      },
      {
        id: 'img-004',
        src: 'https://images.pexels.com/photos/9594925/pexels-photo-9594925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Premium Wool Sweater - Clay - Detail'
      },
      {
        id: 'img-005',
        src: 'https://images.pexels.com/photos/9594910/pexels-photo-9594910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Premium Wool Sweater - Clay - Fabric Detail'
      },
      {
        id: 'img-006',
        src: 'https://images.pexels.com/photos/9594935/pexels-photo-9594935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Premium Wool Sweater - Clay - Styling Example'
      }
    ],
    colors: [
      {
        id: 'color-001',
        name: 'Clay',
        value: '#c17a63',
        description: 'A warm earth tone',
        isAvailable: true,
        images: [
          'https://content.backcountry.com/images/items/900/MKH/MKHZ00R/SUM.jpg',
          'https://i.etsystatic.com/27972870/r/il/dad5ba/2984621483/il_fullxfull.2984621483_27qx.jpg',
          'https://assets.catawiki.com/image/cw_normal/plain/assets/catawiki/assets/2022/2/27/e/2/d/e2d8ccd3-a2eb-4952-973a-c7a365c0057f.jpg',
          'https://i.etsystatic.com/29592337/r/il/e0762f/4567052465/il_600x600.4567052465_tlgj.jpg',
          'https://fordays.com/cdn/shop/products/losano-drawstring-pant-baked-clay-1_2e59c2de-0fed-42d3-bf3b-b59023ae6776.webp?v=1697228989',
          'https://www.miomeraki.com/wp-content/uploads/2022/06/Crewneck-Sweater-Rustic-Clay-front.jpg'
        ]
      },
      {
        id: 'color-002',
        name: 'Oatmeal',
        value: '#e0d3c1',
        description: 'A neutral everyday tone',
        isAvailable: true,
        images: [
          'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/6311441/pexels-photo-6311441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://cdn2.jomashop.com/media/catalog/product/t/o/tommy-hilfiger-white-dial-white-silicone-strap-mens-watch-1791044.jpg',
          'https://cdna.lystit.com/photos/yoox/45324696SK-White-d5dfc6e1-.jpeg',
          'https://cdnc.lystit.com/photos/74f3-2014/04/05/ralph-lauren-white-lauren-edita-straight-leg-pants-straight-leg-pants-product-1-18947089-0-202687703-normal.jpeg',
          'https://images.pexels.com/photos/6311393/pexels-photo-6311393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      {
        id: 'color-003',
        name: 'Forest',
        value: '#2c4134',
        description: 'A deep green shade',
        isAvailable: true,
        images: [
          'https://images.pexels.com/photos/6311608/pexels-photo-6311608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/6311607/pexels-photo-6311607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/6311605/pexels-photo-6311605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/6311588/pexels-photo-6311588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/6311616/pexels-photo-6311616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/6311602/pexels-photo-6311602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      {
        id: 'color-004',
        name: 'Navy',
        value: '#1d3559',
        description: 'A deep blue classic',
        isAvailable: true,
        images: [
          'https://images.pexels.com/photos/6560746/pexels-photo-6560746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/6560715/pexels-photo-6560715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/6560727/pexels-photo-6560727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/6560744/pexels-photo-6560744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/6560756/pexels-photo-6560756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/6560713/pexels-photo-6560713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      {
        id: 'color-005',
        name: 'Charcoal',
        value: '#36454f',
        description: 'A dark neutral',
        isAvailable: true,
        images: [
          'https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/5693887/pexels-photo-5693887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/5693902/pexels-photo-5693902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/5693896/pexels-photo-5693896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/5693901/pexels-photo-5693901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/5693897/pexels-photo-5693897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      }
    ],
    sizes: [
      {
        id: 'size-001',
        name: 'XS',
        isAvailable: true
      },
      {
        id: 'size-002',
        name: 'S',
        isAvailable: true
      },
      {
        id: 'size-003',
        name: 'M',
        isAvailable: true
      },
      {
        id: 'size-004',
        name: 'L',
        isAvailable: true
      },
      {
        id: 'size-005',
        name: 'XL',
        isAvailable: true
      },
      {
        id: 'size-006',
        name: 'XXL',
        isAvailable: false
      }
    ]
  },
  
  relatedProducts: [
    {
      id: 'related-001',
      name: 'Wool Cardigan',
      price: 149.00,
      comparePrice: null,
      image: 'https://i.pinimg.com/originals/bf/af/b8/bfafb84bb24a5eead23517fac79fa533.jpg',
      badge: null
    },
    {
      id: 'related-002',
      name: 'Ribbed Turtleneck',
      price: 89.00,
      comparePrice: 110.00,
      image: 'https://www.centofashion.com/images/thumbs/0017713_-ribbed.jpg',
      badge: 'Sale'
    },
    {
      id: 'related-003',
      name: 'Cable Knit Sweater',
      price: 139.00,
      comparePrice: null,
      image: 'https://images.pexels.com/photos/6311682/pexels-photo-6311682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      badge: 'New'
    },
    {
      id: 'related-004',
      name: 'Cashmere V-Neck',
      price: 199.00,
      comparePrice: null,
      image: 'https://media.thereformation.com/image/upload/c_limit,q_auto,t_super_zoom/v1/prod/product_images/cashmere-relaxed-v-neck/camel/5f86be6536b50d219be44759/original.jpg',
      badge: null
    }
  ],
  
  pairsWellProducts: [
    {
      id: 'pairs-001',
      name: 'Slim Fit Jeans',
      price: 89.00,
      image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'pairs-002',
      name: 'Leather Belt',
      price: 59.00,
      image: 'https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'pairs-003',
      name: 'Wool Scarf',
      price: 49.00,
      image: 'https://i.etsystatic.com/13701693/r/il/914a8b/3038492131/il_1588xN.3038492131_qb6h.jpg'
    },
    {
      id: 'pairs-004',
      name: 'Leather Boots',
      price: 179.00,
      image: 'https://images.pexels.com/photos/718981/pexels-photo-718981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'pairs-005',
      name: 'Beanie Hat',
      price: 39.00,
      image: 'https://images.pexels.com/photos/844867/pexels-photo-844867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ],
  
  bundleProducts: [
    {
      id: 'bundle-001',
      name: 'Premium Wool Sweater',
      price: 129.00,
      image: 'https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isMainProduct: true
    },
    {
      id: 'bundle-002',
      name: 'Slim Fit Chinos',
      price: 89.00,
      image: 'https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isMainProduct: false
    },
    {
      id: 'bundle-003',
      name: 'Leather Oxford Shoes',
      price: 159.00,
      image: 'https://images.pexels.com/photos/1461048/pexels-photo-1461048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isMainProduct: false
    }
  ]
};