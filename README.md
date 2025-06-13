# SURIYA KANTHI Restaurant Website

A modern, responsive website for Suriya Kanthi Sri Lankan restaurant in Berlin. Built with vanilla HTML, CSS, and JavaScript for easy deployment on GitHub Pages.

## 🌟 Features

- **Modern Design**: Clean, contemporary design with Sri Lankan-inspired color palette
- **Responsive**: Fully mobile-friendly and works on all devices
- **Dynamic Menu**: Tab-based menu system with categories (Starters, Mains, Desserts, Beverages)
- **Special Offers**: Dedicated section for promotions and special packages
- **Booking Integration**: Direct phone booking and Lieferando delivery links
- **Google Maps**: Interactive map showing restaurant location
- **Contact Form**: Functional contact form with email integration
- **Animations**: Smooth scroll animations using AOS library
- **SEO Optimized**: Structured data and meta tags for better search visibility
- **Configuration-Driven**: Easy to customize via `config.js` file

## 🚀 Quick Start

### 1. Download/Clone the Files
```bash
git clone <your-repository-url>
cd suriya-kanthi-website
```

### 2. Serve the Website
Since the website uses ES modules, you need to serve it through a web server:

**Option A: Python (if you have Python installed)**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option B: Node.js (if you have Node.js installed)**
```bash
npx serve .
```

**Option C: VS Code Live Server Extension**
- Install the "Live Server" extension in VS Code
- Right-click on `index.html` and select "Open with Live Server"

### 3. View the Website
Open your browser and go to `http://localhost:8000`

## 🔧 Customization Guide

### Updating Restaurant Information

All restaurant information is stored in `config.js`. Here's what you can customize:

#### Basic Information
```javascript
name: "SURIYA KANTHI",
tagline: "Authentic Sri Lankan Cuisine in Berlin",
description: "Your restaurant description here...",
```

#### Contact Details
```javascript
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
```

#### Opening Hours
```javascript
openingHours: {
  monday: "Geschlossen",
  tuesday: "18:00 - 24:00",
  // ... update as needed
},
```

#### Menu Items
```javascript
menu: {
  starters: [
    { 
      name: "Vegetable Samosas", 
      price: "4.50", 
      description: "Crispy pastries filled with spiced vegetables and herbs" 
    },
    // Add more items...
  ],
  // Update other categories...
},
```

#### Special Offers
```javascript
offers: [
  {
    title: "Lunch Special",
    description: "Dienstag bis Sonntag, 11:00 - 15:00",
    details: "Rice & Curry mit Getränk für nur €11.90",
    validDays: "Dienstag - Sonntag",
    time: "11:00 - 15:00",
    icon: "fas fa-clock"
  },
  // Add more offers...
],
```

### Changing Images

#### Method 1: Update URLs in config.js
```javascript
images: {
  hero: "https://your-new-image-url.jpg",
  about: "https://your-new-image-url.jpg",
  // ... other images
},
```

#### Method 2: Use Local Images
1. Create an `images` folder in your project
2. Add your images to the folder
3. Update the URLs in `config.js`:
```javascript
images: {
  hero: "./images/hero-image.jpg",
  about: "./images/about-image.jpg",
  // ... other images
},
```

### Color Scheme

Update the color scheme in `styles.css`:
```css
:root {
  --primary: #E63946;        /* Main brand color */
  --secondary: #F77F00;      /* Secondary color */
  --accent: #FCBF49;         /* Accent color */
  --dark: #2A1810;           /* Dark text */
  --light: #FFF8F0;          /* Light background */
  /* ... other colors */
}
```

### Google Maps Setup

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the Maps JavaScript API
3. Replace `YOUR_GOOGLE_MAPS_API_KEY` in `index.html`:
```html
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY&callback=initMap"></script>
```
4. Update coordinates in `config.js`:
```javascript
map: {
  lat: 52.5482, // Your restaurant's latitude
  lng: 13.4147, // Your restaurant's longitude
  zoom: 16
},
```

### Booking & Delivery Links

Update the booking and delivery links in `config.js`:
```javascript
links: {
  booking: "tel:+493044253010", // Phone number for reservations
  lieferando: "https://www.lieferando.de/your-restaurant-url", // Your Lieferando page
  googleMaps: "https://maps.google.com/?q=Your+Address",
  // ... other links
},
```

## 🌐 Deploying to GitHub Pages

### 1. Create a GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `suriya-kanthi-website`
3. Make it public

### 2. Upload Your Files
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/suriya-kanthi-website.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

### 4. Access Your Website
Your website will be available at:
`https://yourusername.github.io/suriya-kanthi-website`

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Mobile-friendly navigation with hamburger menu
- Touch-optimized buttons and forms
- Responsive images and layouts
- Fast loading on mobile networks

## 🔍 SEO Features

- Structured data markup for restaurants
- Meta tags for social media sharing
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Modern JavaScript with modules
- **AOS**: Animate on Scroll library
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Playfair Display + Inter)
- **Google Maps API**: Interactive maps

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Performance
- Optimized images from Unsplash
- Minimal JavaScript bundle
- CSS animations for smooth interactions
- Lazy loading for images

## 📞 Support

If you need help customizing the website:

1. **Check the config.js file** - Most changes can be made there
2. **Review this README** - Common customizations are covered
3. **Test locally first** - Always test changes on localhost before deploying

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: Remember to replace placeholder content (like Google Maps API key, Lieferando URL, etc.) with your actual information before deploying to production. 