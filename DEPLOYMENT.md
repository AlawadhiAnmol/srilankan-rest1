# 🚀 Deployment Guide for GitHub Pages

This guide will help you deploy your Suriya Kanthi restaurant website to GitHub Pages for free hosting.

## 📋 Prerequisites

- A GitHub account (free)
- Basic knowledge of Git (or use GitHub Desktop)
- Your website files ready

## 🌐 Step-by-Step Deployment

### Step 1: Create a GitHub Repository

1. **Go to GitHub**: Visit [github.com](https://github.com) and sign in
2. **Create New Repository**: Click the "+" icon → "New repository"
3. **Repository Settings**:
   - **Name**: `suriya-kanthi-website` (or any name you prefer)
   - **Description**: "Modern website for Suriya Kanthi Sri Lankan Restaurant"
   - **Visibility**: Public (required for free GitHub Pages)
   - **Initialize**: Don't check any boxes (we'll upload our files)
4. **Create Repository**: Click "Create repository"

### Step 2: Upload Your Website Files

#### Option A: Using Git Command Line
```bash
# Navigate to your website folder
cd /path/to/your/website/files

# Initialize Git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial website deployment"

# Add GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/suriya-kanthi-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Option B: Using GitHub Web Interface
1. **Upload Files**: On your repository page, click "uploading an existing file"
2. **Drag and Drop**: Add all your website files:
   - `index.html`
   - `config.js`
   - `styles.css`
   - `scripts.js`
   - `README.md`
   - `serve.py`
3. **Commit**: Add commit message "Initial website deployment" and click "Commit changes"

### Step 3: Enable GitHub Pages

1. **Go to Settings**: In your repository, click the "Settings" tab
2. **Find Pages Section**: Scroll down to "Pages" in the left sidebar
3. **Configure Source**:
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select "main"
   - **Folder**: Select "/ (root)"
4. **Save**: Click "Save"

### Step 4: Wait for Deployment

- GitHub will build and deploy your site (takes 1-5 minutes)
- You'll see a green checkmark when it's ready
- Your website URL will be: `https://YOUR_USERNAME.github.io/suriya-kanthi-website`

## ⚙️ Pre-Deployment Checklist

Before deploying, make sure to update these items in your `config.js`:

### ✅ Essential Updates

- [ ] **Restaurant Name**: Update if different
- [ ] **Contact Information**: Phone, email, address
- [ ] **Opening Hours**: Correct hours for your restaurant
- [ ] **Menu Items**: Add your actual menu with correct prices
- [ ] **Special Offers**: Update with current promotions
- [ ] **Google Maps API Key**: Replace `YOUR_GOOGLE_MAPS_API_KEY` in `index.html`
- [ ] **Lieferando URL**: Update with your actual delivery page URL

### 🔧 Optional Customizations

- [ ] **Images**: Replace with your restaurant photos
- [ ] **Colors**: Adjust color scheme to match your branding
- [ ] **Content**: Update about section and descriptions
- [ ] **Social Media**: Add your social media links

## 🗺️ Google Maps Setup

1. **Get API Key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable "Maps JavaScript API"
   - Create credentials (API Key)
   - Restrict the key to your domain for security

2. **Update HTML**:
   ```html
   <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY&callback=initMap"></script>
   ```

3. **Update Coordinates** in `config.js`:
   ```javascript
   map: {
     lat: 52.5482, // Your restaurant's latitude
     lng: 13.4147, // Your restaurant's longitude
     zoom: 16
   }
   ```

## 🔗 Custom Domain (Optional)

If you want to use your own domain (e.g., `www.suriya-kanthi.de`):

1. **Buy Domain**: Purchase from any domain registrar
2. **DNS Settings**: Point your domain to GitHub Pages:
   - Add CNAME record: `www` → `YOUR_USERNAME.github.io`
   - Add A records for apex domain:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
3. **GitHub Settings**: In repository settings → Pages, add your custom domain
4. **HTTPS**: Enable "Enforce HTTPS" (recommended)

## 📊 Monitoring & Analytics

### Google Analytics (Optional)
Add Google Analytics to track visitors:

1. **Create Account**: Set up Google Analytics
2. **Get Tracking Code**: Copy the tracking script
3. **Add to HTML**: Insert before closing `</head>` tag in `index.html`

### Google Search Console (Recommended)
Help Google find and index your website:

1. **Add Property**: Add your website URL
2. **Verify Ownership**: Use HTML file method
3. **Submit Sitemap**: Create and submit a sitemap

## 🔄 Updating Your Website

To update your website after deployment:

### Method 1: GitHub Web Interface
1. Go to your repository on GitHub
2. Click on the file you want to edit
3. Click the pencil icon to edit
4. Make changes and commit

### Method 2: Git Command Line
```bash
# Make changes to your local files
# Then push updates:
git add .
git commit -m "Update menu prices"
git push origin main
```

Changes will automatically deploy within a few minutes.

## 🚨 Troubleshooting

### Common Issues:

**Website not loading:**
- Check if GitHub Pages is enabled in repository settings
- Ensure `index.html` is in the root directory
- Wait 5-10 minutes for initial deployment

**JavaScript not working:**
- ES modules require HTTPS (GitHub Pages provides this)
- Check browser console for errors
- Ensure all file paths are correct

**Google Maps not showing:**
- Verify API key is correct and has proper permissions
- Check browser console for API errors
- Ensure Maps JavaScript API is enabled

**Contact form not working:**
- The form uses `mailto:` links (opens email client)
- For advanced forms, consider services like Formspree or Netlify Forms

## 📞 Support

If you encounter issues:

1. **Check the README.md** for detailed customization instructions
2. **Review browser console** for JavaScript errors
3. **Test locally first** using `python3 serve.py`
4. **GitHub Pages Status**: Check [GitHub Status](https://www.githubstatus.com/) for service issues

## 🎉 Success!

Once deployed, your restaurant website will be:
- ✅ **Live 24/7** on the internet
- ✅ **Mobile-friendly** and responsive
- ✅ **SEO optimized** for search engines
- ✅ **Free to host** on GitHub Pages
- ✅ **Easy to update** anytime

Your customers can now find you online, view your menu, make reservations, and order delivery!

---

**🔗 Quick Links After Deployment:**
- Your Website: `https://YOUR_USERNAME.github.io/suriya-kanthi-website`
- Repository: `https://github.com/YOUR_USERNAME/suriya-kanthi-website`
- GitHub Pages Settings: Repository → Settings → Pages 