# 🚀 Setup Guide: Google Maps & Email Functionality

This guide will help you enable Google Maps and email functionality for your Suriya Kanthi restaurant website.

## 🗺️ **Part 1: Enabling Google Maps**

### Step 1: Get Google Maps API Key

1. **Go to Google Cloud Console**
   - Visit: [console.cloud.google.com](https://console.cloud.google.com/)
   - Sign in with your Google account

2. **Create or Select Project**
   - Click "Select a project" → "New Project"
   - Name: `Suriya-Kanthi-Website`
   - Click "Create"

3. **Enable Required APIs**
   - Go to "APIs & Services" → "Library"
   - Search and enable these 3 APIs:
     - ✅ **Maps JavaScript API**
     - ✅ **Places API** 
     - ✅ **Geocoding API**

4. **Create API Key**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API key"
   - **Copy the generated key** (you'll need this!)

5. **Secure Your API Key** (Important!)
   - Click on your API key to edit it
   - Under "Application restrictions":
     - Choose "HTTP referrers (web sites)"
     - Add these domains:
       ```
       https://yourusername.github.io/*
       http://localhost:8000/*
       ```
   - Under "API restrictions":
     - Choose "Restrict key"
     - Select the 3 APIs you enabled above
   - Click "Save"

### Step 2: Add API Key to Your Website

1. **Open `index.html`**
2. **Find this line** (around line 200):
   ```html
   <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY_HERE&callback=initMap"></script>
   ```
3. **Replace `YOUR_ACTUAL_API_KEY_HERE`** with your real API key:
   ```html
   <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBvOkBwgyKGVfEP-PDLfzZ_TVHyYSN5yXs&callback=initMap"></script>
   ```

### Step 3: Update Restaurant Coordinates (Optional)

If your restaurant location is different, update the coordinates in `config.js`:

```javascript
map: {
  lat: 52.5482, // Your restaurant's latitude
  lng: 13.4147, // Your restaurant's longitude
  zoom: 16
},
```

**How to find your coordinates:**
1. Go to [Google Maps](https://maps.google.com)
2. Search for your restaurant address
3. Right-click on the location pin
4. Copy the coordinates (first number is latitude, second is longitude)

---

## 📧 **Part 2: Enabling Email Functionality**

You have **3 options** for email functionality:

### Option 1: Formspree (Recommended - Professional)

**Benefits:** ✅ Professional, ✅ No email client required, ✅ Spam protection, ✅ Free tier

#### Setup Steps:

1. **Create Formspree Account**
   - Go to: [formspree.io](https://formspree.io)
   - Sign up for free account
   - Free tier: 50 submissions/month

2. **Create New Form**
   - Click "New Form"
   - Name: `Suriya Kanthi Contact Form`
   - Email: `info@suriya-kanthi.de` (where you want to receive messages)
   - Click "Create Form"

3. **Get Form Endpoint**
   - Copy the endpoint URL (looks like: `https://formspree.io/f/xpznvqko`)

4. **Update Your Website**
   - Open `config.js`
   - Find the `formspree` section (around line 180)
   - Uncomment and update:
   ```javascript
   formspree: {
     endpoint: "https://formspree.io/f/YOUR_FORM_ID", // Replace with your actual endpoint
     enabled: true
   }
   ```

5. **Test Your Form**
   - Run your website: `python3 serve.py`
   - Fill out the contact form and submit
   - Check your email for the message!

### Option 2: Netlify Forms (If using Netlify)

If you deploy to Netlify instead of GitHub Pages:

1. **Add to your form in `index.html`:**
   ```html
   <form class="contact-form" netlify data-aos="fade-right">
   ```

2. **Deploy to Netlify** - forms work automatically!

### Option 3: Keep Current Mailto (Simple)

Your current setup opens the user's email client. No changes needed, but requires users to have email configured.

---

## 🧪 **Testing Your Setup**

### Test Google Maps:
1. Run: `python3 serve.py`
2. Go to: `http://localhost:8000`
3. Scroll to the map section
4. You should see an interactive map with your restaurant location

**If map doesn't show:**
- Check browser console for errors
- Verify API key is correct
- Ensure APIs are enabled in Google Cloud Console

### Test Email Form:
1. Fill out the contact form
2. Submit it
3. **With Formspree:** Check your email for the message
4. **With Mailto:** Your email client should open

---

## 🚨 **Troubleshooting**

### Google Maps Issues:

**"This page didn't load Google Maps correctly"**
- ✅ Check API key is correct
- ✅ Verify billing is enabled in Google Cloud
- ✅ Ensure Maps JavaScript API is enabled

**Map shows but is gray/blank**
- ✅ Check coordinates in `config.js`
- ✅ Verify API key restrictions allow your domain

**"RefererNotAllowedMapError"**
- ✅ Add your domain to API key restrictions
- ✅ Include both `http://localhost:8000/*` and your live domain

### Email Form Issues:

**Formspree form not working**
- ✅ Check endpoint URL is correct
- ✅ Verify form is enabled in Formspree dashboard
- ✅ Check browser console for errors

**Form validation errors**
- ✅ Ensure all required fields are filled
- ✅ Check email format is valid
- ✅ Message must be at least 10 characters

---

## 💰 **Cost Information**

### Google Maps:
- **Free tier:** 28,000 map loads per month
- **After free tier:** $7 per 1,000 additional loads
- **For most restaurants:** Free tier is sufficient

### Formspree:
- **Free tier:** 50 submissions per month
- **Paid plans:** Start at $10/month for 1,000 submissions
- **For most restaurants:** Free tier is sufficient

---

## 🔒 **Security Best Practices**

### Google Maps API Key:
- ✅ Always restrict your API key to specific domains
- ✅ Never commit API keys to public repositories
- ✅ Monitor usage in Google Cloud Console

### Contact Form:
- ✅ Honeypot field is included for spam protection
- ✅ Form validation prevents malicious input
- ✅ Formspree provides additional spam filtering

---

## 📞 **Need Help?**

If you encounter issues:

1. **Check the browser console** for error messages
2. **Verify all steps** were completed correctly
3. **Test locally first** before deploying
4. **Check service status:**
   - [Google Cloud Status](https://status.cloud.google.com/)
   - [Formspree Status](https://status.formspree.io/)

---

## ✅ **Quick Checklist**

### Google Maps:
- [ ] Google Cloud project created
- [ ] 3 APIs enabled (Maps JavaScript, Places, Geocoding)
- [ ] API key created and secured
- [ ] API key added to `index.html`
- [ ] Coordinates updated in `config.js` (if needed)
- [ ] Map displays correctly on website

### Email (Formspree):
- [ ] Formspree account created
- [ ] Form created with correct email
- [ ] Endpoint added to `config.js`
- [ ] Form tested and working
- [ ] Email notifications received

### Email (Alternative):
- [ ] Current mailto system working
- [ ] Email client opens when form submitted

---

**🎉 Once both are set up, your restaurant website will have:**
- ✅ Interactive Google Maps showing your location
- ✅ Professional contact form that sends emails directly to you
- ✅ Spam protection and form validation
- ✅ Mobile-friendly functionality

Your customers can now easily find you and get in touch! 