const items = [
    {
      id: "0",
      text: "Divis and the Black Mountain",
      subText: "Belfast, County Antrim",
      description : "Divis and the Black Mountain offers a spectacular viewpoint for walkers seeking panoramic views over Belfast and beyond",
      location: {
      latitude: 54.60074000,
      longitude: -6.04165100,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431915684674-ntdivismartyfennell-mfphotography061221.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " Open today",
      address : "Divis Road, Hannahstown, near Belfast, County Antrim, BT17 0NG"


    },
    {
      id: "1",
      text: "Crook Hall Gardens",
      subText: "Durham",
      description : "Characterful gardens on the edge of Durham city, set against the backdrop of a medieval hall.",
      location:{
      latitude: 54.78258300,
      longitude: -1.57515800,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431924656837-crookhallgardensoctober20222katedevlinoraclewebresized.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " Closed today",
      address : "Frankland Lane, Sidegate, Durham, DH1 5SZ"
    },
    {
      id: "2",
      text: "Castlefield Viaduct",
      subText: "Manchester, Greater Manchester",
      description : "Striking Victorian-era steel viaduct, on the way to becoming a green ‘sky park’ in the heart of historic Manchester.",
      location:{
      latitude: 53.47517760,
      longitude: -2.25475940,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431923554159-castlefieldviaduct.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " Open today",
      address : "Castlefield Viaduct, Manchester, Greater Manchester, M3 4LG"
    },
    {
      id: "3",
      text: "Staunton Harold",
      subText: "Melbourne, Derbyshire",
      description : "Countryside space with wildflower meadows, woodland walks and open water.",
      location:{
      latitude: 52.81089000,
      longitude: -1.43062000,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431918431507-shtowermillseverntrent.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " Open today",
      address : "Staunton Harold, Calke Road, Melbourne, Derbyshire, DE73 8DL"
    },
    {
      id: "4",
      text: "A la Ronde",
      subText: "Exmouth, Devon",
      description : "Quirky 18th-century, 16 sided house with fascinating interior decoration and collections.",
      location:{
      latitude: 50.64171800,
      longitude: -3.40879800,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431782871786-dsc0421.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " Closed today",
      address : "Summer Lane, Exmouth, Devon, EX8 5BD"
    },
    {
      id: "5",
      text: "Aberconwy House",
      subText: "Conwy",
      description : "14th-century merchant's house.",
      location:{ 
      latitude: 53.28210100,
      longitude: -3.82732000,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431737802588-aberc-ext-closeup-web.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " Closed today",
      address : "Castle Street, Conwy, LL32 8AY"
    },
    {
      id: "6",
      text: "Aberdulais",
      subText: "Neath, Neath Port Talbot",
      description : "An Industrial Revolution, powered by water since 1584!",
      location:{ 
      latitude: 51.68069800,
      longitude: -3.77791000,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431767659249-aberdulais-in-winter.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " Closed today",
      address : "Aberdulais, Neath, Neath Port Talbot, SA10 8EU"
    },
    {
      id: "7",
      text: "Acorn Bank",
      subText: "Penrith, Cumbria",
      description : "Delightful garden renowned for its herbs and fruit orchards.",
      location:{ 
      latitude: 54.64630100,
      longitude: -2.59228000,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431924387102-beechtree.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " Closed today",
      address : "Temple Sowerby, near Penrith, Cumbria, CA10 1SP"
    },
    {
      id: "8",
      text: "Alfriston Clergy House",
      subText: "Polegate, East Sussex",
      description : "The first building saved forever for the nation by the National Trust.",
      location:{ 
      latitude: 50.80329900,
      longitude: 0.16206000,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431767407720-website-photo-dec-16.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " Closed today",
      address : "The Tye, Alfriston, Polegate, East Sussex, BN26 5TL"
    },
    {
      id: "9",
      text: "Allen Banks and Staward Gorge",
      subText: "Hexham, Northumberland",
      description : "Gorge of the River Allen with ornamental and ancient woodland",
      location:{ 
      latitude: 54.96400100,
      longitude: -2.31392000,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431847604430-nationaltrustimagesdavidsellman.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " Open today",
      address : "Ridley Hall, Bardon Mill, Hexham, Northumberland, NE47 7BP"
    },
    {
      id: "10",
      text: "Anglesey Abbey, Gardens and Lode Mill",
      subText: "Cambridge, Cambridgeshire",
      description : "Jacobean-style house with gardens and a working watermill",
      location:{ 
      latitude: 52.23591500,
      longitude: 0.24480000,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431735497253-autumn-house.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " Partially open today",
      address : "Quy Road, Lode, Cambridge, Cambridgeshire, CB25 9EJ"
    },
    {
      id: "11",
      text: "Morston Quay",
      subText: "Morston, Norfolk",
      description : "Explore the Norfolk Coast from Morston Quay.",
      location:{ 
      latitude: 52.95674100,
      longitude: 0.98656000,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431874213215-12064441.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " Open today",
      address : "Morston Quay, Quay Lane, Morston, Norfolk, NR25 7BH"
    },
    {
      id: "12",
      text: "Sandilands",
      subText: "Sutton-on-Sea, Lincolnshire",
      description : "A new haven for nature on Lincolnshire's wild coast.",
      location:{ 
      latitude: 53.29812700,
      longitude: 0.29436900,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431890450818-sandilandscoastdroneweb-11resizedstraightenedweb.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " N/A",
      address : "Huttoft Bank, nr Sutton-on-Sea, Lincolnshire, LN12 2SE"
    },
    {
      id: "13",
      text: "Pentire",
      subText: "Wadebridge, Cornwall",
      description : "Pentire is an exceptionally beautiful headland with far reaching views and managed for wildlife.",
      location:{ 
      latitude: 50.58100000,
      longitude: -4.90500000,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431923871273-15920241400x788.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " Partially open today",
      address : "Pentire, near Wadebridge, Cornwall, PL27 6QY"
    },
    {
      id: "14",
      text: "The Textile Conservation Studio",
      subText: "Norfolk",
      description : "The Studio provides a complete conservation service for historic textiles conserving and protecting the National Trust's precious and often unique textile collections.",
      location:{ 
      latitude: 52.80089000,
      longitude: 1.19152300,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431870119679-textileconservationstudioview1.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " N/A",
      address : "Malthouse Barn, Oulton Street, Norfolk, NR11 6AF"
    },
    {
      id: "15",
      text: "Duffield Castle",
      subText: "Duffield, Derbyshire",
      description : "The remains of one of England's largest castles.",
      location:{ 
      latitude:52.99250000,
      longitude: -1.48920000,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431791825004-duffieldcastle39resizesummer.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " Open today",
      address : "Milford Road, Duffield, Derbyshire, DE56 4DW"
    },
    {
      id: "16",
      text: "Kinder, Edale and the High Peak",
      subText: "Derbyshire",
      description : "Heather-clad moors of Kinder, to the gritstone tors of Derwent Edge.",
      location:{ 
      latitude: 53.34580000,
      longitude: -1.81560000,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431918986387-1427156.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " Open today",
      address : "Hope Valley, Derbyshire, S33 8WA"
    },
    {
      id: "17",
      text: "575 Wandsworth Road",
      subText: "London",
      description : "An extraordinary home and an intriguing work of art.",
      location:{ 
      latitude: 51.46979000,
      longitude: -0.14062800,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431733754332-575wandsworthroadkd010sittingroommantelpiecedonotuse.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " Closed today",
      address : "575 Wandsworth Road, Lambeth, London, SW8 3JD"
    },
    {
      id: "18",
      text: "Penrose",
      subText: "Helston, Cornwall",
      description : "Wooded country around Cornwall's largest natural lake. Penrose features woodland tracks, stretches of coastline and open parkland, the perfect backdrop for a day out.",
      location:{ 
      latitude: 50.08619600,
      longitude: -5.30187300,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431742872367-penrose-cycling-2-lacey-for-web.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " N/A",
      address : "Penrose, Helston, Cornwall, TR13 0RD"
    },
    {
      id: "19",
      text: "Heelis",
      subText: "Swindon, Wiltshire",
      description : "Central office for the National Trust.",
      location:{ 
      latitude: 51.56376700,
      longitude: -1.79707000,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431733576616-774710.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " N/A",
      address : "Kemble Drive, Swindon, Wiltshire, SN2 2NA"
    },
    {
      id: "20",
      text: "Sutton House and Breaker's Yard",
      subText: "Hackney, London",
      description : "A fascinating Tudor house at the heart of a vibrant community.",
      location:{ 
      latitude: 51.54800000,
      longitude: -0.04921000,
      },
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      imageUrl: "https://nt.global.ssl.fastly.net/images/1431731830419-771158sutton-house-little-chamber.jpg",
      activityTagsAsCsv : "Dog walking, Running, Walking",
      cmsRegion : "RegionNorthernIreland",
      time : " Closed today",
      address : "2 and 4 Homerton High Street, Hackney, London, E9 6JQ"
    },
  ];
  
  
  const LocationData = () => {
    return items;
  };
  
  export default LocationData;