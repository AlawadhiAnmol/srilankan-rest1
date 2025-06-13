// Restaurant Configuration File
// Update this file to customize your restaurant website

export const restaurantConfig = {
  // Basic Restaurant Information
  name: "SURIYA KANTHI",
  tagline: "Authentic Sri Lankan Cuisine in Berlin",
  description: "Bei uns essen Sie vom Feinsten: Original Sri Lanka-Küche mit Lebensmitteln aus überwiegend ökologischem Anbau – und das zu verträglichen Preisen!",
  
  // Contact Information
  contact: {
    phone: "+49 30 4425301",
    email: "info@suriya-kanthi.de",
    address: {
      street: "Knaackstr. 4",
      city: "Berlin",
      district: "Prenzlauer Berg",
      postalCode: "10405",
      country: "Germany"
    }
  },

  // Opening Hours
  openingHours: {
    monday: "Geschlossen",
    tuesday: "18:00 - 24:00",
    wednesday: "18:00 - 24:00", 
    thursday: "18:00 - 24:00",
    friday: "18:00 - 24:00",
    saturday: "18:00 - 24:00",
    sunday: "11:00 - 24:00"
  },

  // Color Theme - Modern Sri Lankan inspired colors
  colors: {
    primary: "#E63946",        // Vibrant red (Sri Lankan flag inspired)
    secondary: "#F77F00",      // Warm orange
    accent: "#FCBF49",         // Golden yellow
    dark: "#2A1810",           // Dark brown
    light: "#FFF8F0",          // Warm cream
    white: "#FFFFFF",
    text: "#2D3436",
    textLight: "#636E72",
    success: "#00B894",
    gradient: "linear-gradient(135deg, #E63946, #F77F00)"
  },

  // Images (using generic Sri Lankan food images)
  images: {
    hero: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    about: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    spices: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    curry: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
  },

  // Menu Items (based on typical Sri Lankan dishes)
  menu: {
    starters: [
      { name: "Vegetable Samosas", price: "4.50", description: "Crispy pastries filled with spiced vegetables and herbs" },
      { name: "Fish Cutlets", price: "5.50", description: "Traditional Sri Lankan fish cakes with aromatic spices" },
      { name: "Prawn Crackers", price: "3.50", description: "Light and crispy prawn-flavored crackers" },
      { name: "Pol Roti", price: "4.00", description: "Coconut flatbread served with spicy sambol" },
      { name: "Isso Vadai", price: "6.00", description: "Spiced prawn fritters with curry leaves" }
    ],
    mains: [
      { name: "Rice & Curry (Vegetarian)", price: "12.90", description: "Traditional rice with mixed vegetable curries, dhal, and coconut sambol" },
      { name: "Rice & Curry (Chicken)", price: "14.90", description: "Aromatic rice with chicken curry, vegetables, and traditional sides" },
      { name: "Rice & Curry (Fish)", price: "15.90", description: "Fresh fish curry with coconut milk, served with rice and vegetables" },
      { name: "Kottu Roti", price: "13.50", description: "Chopped roti stir-fried with vegetables and your choice of meat" },
      { name: "Hoppers (Appa)", price: "11.90", description: "Bowl-shaped pancakes served with curry and coconut sambol" },
      { name: "Lamprais", price: "16.90", description: "Dutch Burgher dish with rice, curry, and accompaniments wrapped in banana leaf" },
      { name: "String Hoppers", price: "10.90", description: "Steamed rice noodles served with curry and coconut milk" },
      { name: "Deviled Chicken", price: "15.50", description: "Spicy stir-fried chicken with bell peppers and onions" }
    ],
    desserts: [
      { name: "Wattalappam", price: "4.50", description: "Traditional Sri Lankan pudding with jaggery and coconut milk" },
      { name: "Curd & Treacle", price: "4.00", description: "Fresh buffalo curd with palm treacle" },
      { name: "Coconut Ice Cream", price: "3.50", description: "Homemade coconut ice cream with tropical flavors" },
      { name: "Kiribath", price: "3.00", description: "Milk rice served with jaggery or lunu miris" }
    ],
    beverages: [
      { name: "Ceylon Tea", price: "2.50", description: "Authentic Sri Lankan black tea" },
      { name: "King Coconut Water", price: "3.50", description: "Fresh king coconut water" },
      { name: "Faluda", price: "4.50", description: "Rose-flavored drink with basil seeds and ice cream" },
      { name: "Ginger Beer", price: "3.00", description: "Homemade spicy ginger beer" }
    ]
  },

  // Special Offers
  offers: [
    {
      title: "Lunch Special",
      description: "Dienstag bis Sonntag, 11:00 - 15:00",
      details: "Rice & Curry mit Getränk für nur €11.90",
      validDays: "Dienstag - Sonntag",
      time: "11:00 - 15:00",
      icon: "fas fa-clock"
    },
    {
      title: "Familien-Paket",
      description: "Perfekt für 4 Personen",
      details: "4x Rice & Curry + 2 Vorspeisen + Dessert für €49.90",
      validDays: "Alle Tage",
      time: "Ganztägig verfügbar",
      icon: "fas fa-users"
    },
    {
      title: "Ayurveda Menü",
      description: "Gesunde Gewürzmischungen",
      details: "Speziell zusammengestelltes Menü mit heilenden Gewürzen",
      validDays: "Alle Tage",
      time: "Nach Voranmeldung",
      icon: "fas fa-leaf"
    }
  ],

  // External Links
  links: {
    // Table Booking
    booking: "tel:+493044253010", // Direct phone booking
    
    // Lieferando Delivery
    lieferando: "https://www.lieferando.de/speisekarte/suriya-kanthi", // Update with actual link
    
    // Google Maps
    googleMaps: "https://maps.google.com/?q=Knaackstr.+4,+10405+Berlin",
    
    // Directions
    directions: "https://www.google.com/maps/dir//Knaackstr.+4,+10405+Berlin",
    
    // Social Media (add if available)
    facebook: "#", // Update with actual links
    instagram: "#",
  },

  // Google Maps Configuration
  map: {
    lat: 52.5482, // Approximate coordinates for Knaackstr. 4, Berlin
    lng: 13.4147,
    zoom: 16
  },

  // About Us Content
  about: {
    title: "Willkommen im Restaurant SURIYA KANTHI",
    content: [
      "Bei uns essen Sie vom Feinsten: Original Sri Lanka-Küche mit Lebensmitteln aus überwiegend ökologischem Anbau – und das zu verträglichen Preisen!",
      "Köche aus Sri Lanka kochen Reis und Curry-Gerichte wie zu Hause – nur unserem europäischen Geschmack entsprechend etwas milder.",
      "Hinter 'Reis und Curry' verbergen sich unzählige Gerichte: Denn Curries sind unterschiedlichste Gerichte mit Fisch, Fleisch oder Gemüse, gewürzt mit jeweils anderen Curry-Gewürzmischen.",
      "Typisch nach Sri Lanka-Art werden viele Speisen mit Kokosmilch oder -raspeln zubereitet. Alle Gewürze haben zugleich eine Heilwirkung auf den Körper und werden in der ayurvedischen Medizin gezielt eingesetzt."
    ]
  },

  // Spice Information
  spices: [
    {
      name: "Chilli",
      description: "macht das Essen scharf. Das Wort Chilli ist abgeleitet von 'Chile', wo die Pflanze schon im Altertum gedieh.",
      benefits: "Chilli ist reich an Vitamin A, C und E, ist anregend für die Speichel- und Magensaftbildung und fördert die Verdauung."
    },
    {
      name: "Kurkuma",
      description: "verleiht den Gerichten die goldgelbe Farbe und hat einen milden, erdigen Geschmack.",
      benefits: "Wirkt entzündungshemmend und unterstützt die Verdauung."
    },
    {
      name: "Kardamom",
      description: "das 'Königin der Gewürze' mit süßlichem, intensivem Aroma.",
      benefits: "Hilft bei Verdauungsproblemen und erfrischt den Atem."
    },
    {
      name: "Zimt",
      description: "verleiht süße Wärme und ist besonders in Desserts beliebt.",
      benefits: "Reguliert den Blutzucker und wirkt antibakteriell."
    }
  ],

  // Business Hours for structured data
  businessHours: [
    "Mo: Geschlossen",
    "Di-Sa: 18:00-24:00",
    "So: 11:00-24:00"
  ],

  // Email Configuration (Formspree)
  // To enable Formspree: 
  // 1. Sign up at https://formspree.io
  // 2. Create a new form and get your endpoint URL
  // 3. Uncomment and update the endpoint below
  formspree: {
    // endpoint: "https://formspree.io/f/YOUR_FORM_ID", // Replace with your actual Formspree endpoint
    // enabled: true
  }
}; 