# LegendVanara Travel Website - Complete Source Code

## 📂 Project Structure

```
legendvanara-source/
├── src/
│   ├── components/           # React components
│   │   ├── ui/              # shadcn UI components (pre-installed)
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section with Taj Mahal
│   │   ├── Services.jsx     # Premium services section
│   │   ├── Vehicles.jsx     # Vehicle fleet with pricing
│   │   ├── FeaturedPackages.jsx  # Tour packages
│   │   ├── CTA.jsx          # Call-to-action section
│   │   ├── Footer.jsx       # Footer with links
│   │   └── BookingForm.jsx  # WhatsApp booking form
│   │
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Home page
│   │   ├── Packages.jsx     # All packages page
│   │   └── BookNow.jsx      # Booking page
│   │
│   ├── hooks/               # Custom React hooks
│   │   └── use-toast.js     # Toast notification hook
│   │
│   ├── App.js               # Main app component with routes
│   ├── App.css              # Global styles
│   ├── index.js             # Entry point
│   └── index.css            # Tailwind CSS imports
│
├── public/                  # Static files
│   ├── index.html
│   └── favicon.ico
│
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── craco.config.js          # Create React App configuration
├── postcss.config.js        # PostCSS configuration
└── .env.example             # Environment variables template

```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- yarn package manager

### Installation

1. **Extract the zip file**
   ```bash
   unzip legendvanara-complete-source.zip
   cd legendvanara-source
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and update:
   ```
   REACT_APP_BACKEND_URL=http://localhost:8001
   ```

4. **Start development server**
   ```bash
   yarn start
   ```
   
   Open http://localhost:3000

## 🎨 How to Edit

### Change Colors

**File:** `src/index.css`

Find and modify the CSS variables:
```css
:root {
  --primary: 24 100% 60%;    /* Orange color */
  --secondary: 0 0% 96.1%;
  /* ... other colors */
}
```

Or directly in components using Tailwind:
```jsx
// Change orange buttons to blue
className="bg-orange-500"  →  className="bg-blue-500"
```

### Edit Vehicle Pricing

**File:** `src/components/Vehicles.jsx`

```javascript
const vehicles = [
  {
    name: 'Sedan',
    price: '12',  // ← Change price here
    capacity: '4 passengers',
    // ... rest
  },
  // Add more vehicles or edit existing ones
];
```

### Add/Edit Packages

**File:** `src/components/FeaturedPackages.jsx`

```javascript
const packages = [
  {
    id: 1,
    name: 'Kerala Backwaters Escape',
    price: 15999,  // ← Change price
    duration: '4N/5D',  // ← Change duration
    // ... edit other fields
  },
  // Add new packages here
];
```

### Change WhatsApp Number

**File:** `src/components/BookingForm.jsx`

Line ~50:
```javascript
const whatsappNumber = '919449449510';  // ← Change this
```

Also update in:
- `src/components/Navbar.jsx` (line ~35)
- `src/components/Footer.jsx` (line ~35)

### Edit Contact Information

**File:** `src/components/Footer.jsx`

```javascript
<a href="mailto:info@legendvanara.com">  // ← Email
  info@legendvanara.com
</a>

<span>Kanakapura, Karnataka, India</span>  // ← Address
```

### Change Hero Background Image

**File:** `src/components/Hero.jsx`

Line ~10:
```javascript
style={{
  backgroundImage: 'url(YOUR_NEW_IMAGE_URL)',
}}
```

### Add New Pages

1. Create new page in `src/pages/`:
   ```jsx
   // src/pages/About.jsx
   import React from 'react';
   
   const About = () => {
     return <div>About Us Content</div>;
   };
   
   export default About;
   ```

2. Add route in `src/App.js`:
   ```jsx
   import About from './pages/About';
   
   // In Routes:
   <Route path="/about" element={<About />} />
   ```

3. Add to navigation in `src/components/Navbar.jsx`

## 📦 Package Details

All 6 travel packages are in the booking dropdown:
1. Kerala Backwaters Escape - 4N/5D - ₹15,999
2. Rajasthan Royal Heritage - 5N/6D - ₹22,999
3. Goa Beach Paradise - 3N/4D - ₹12,499
4. Himachal Hill Station Tour - 6N/7D - ₹18,999
5. Golden Triangle Experience - 5N/6D - ₹19,999
6. Kashmir Valley Retreat - 6N/7D - ₹24,999

## 🚗 Vehicle Fleet

7 vehicles with per-kilometer pricing:
- Sedan: ₹12/km
- SUV Innova: ₹16/km
- SUV Crysta: ₹18/km
- Tempo Traveller (Non AC): ₹18/km
- Tempo Traveller (AC): ₹20/km
- Mini Bus: ₹25/km
- Bus: ₹35/km

## 💬 WhatsApp Integration

**File:** `src/components/BookingForm.jsx`

The form collects:
- Name
- Email
- Phone
- Package selection (dropdown)
- Travel date
- Number of people
- Additional information

On submit, it:
1. Creates a formatted message
2. Opens WhatsApp with pre-filled text
3. Redirects to: `https://wa.me/919449449510?text=...`

## 🎯 Build for Production

```bash
# Create production build
yarn build

# The build folder will contain deployable files
# Upload the 'build' folder to Netlify, Vercel, or any static host
```

## 🌐 Deploy to Netlify

### Method 1: Drag & Drop
1. Run `yarn build`
2. Go to https://app.netlify.com/drop
3. Drag the `build` folder
4. Done!

### Method 2: Git Integration
1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build command: `yarn build`
   - Publish directory: `build`

## 🔧 Available Scripts

```bash
yarn start        # Start development server
yarn build        # Create production build
yarn test         # Run tests (if any)
```

## 🎨 Styling

This project uses:
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Pre-built React components
- **Lucide React** - Icon library

### Tailwind Classes Examples

```jsx
// Spacing
className="p-4 m-2"           // padding: 1rem, margin: 0.5rem
className="px-8 py-4"         // horizontal & vertical padding

// Colors
className="bg-orange-500"     // background color
className="text-white"        // text color
className="hover:bg-blue-600" // hover state

// Layout
className="flex justify-center items-center"
className="grid grid-cols-3 gap-4"

// Responsive
className="hidden md:flex"    // hidden on mobile, flex on medium+
```

## 📱 Responsive Design

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: 1024px+

Example:
```jsx
className="text-sm md:text-lg lg:text-xl"
// Small text on mobile, large on tablet, extra-large on desktop
```

## 🐛 Common Issues & Solutions

### Issue: WhatsApp link not working
**Solution:** Make sure the phone number is in international format without + symbol:
```javascript
const whatsappNumber = '919449449510';  // Correct
const whatsappNumber = '+91 9449449510'; // Wrong
```

### Issue: Images not loading
**Solution:** Use full URLs from Unsplash or other CDNs:
```javascript
image: 'https://images.unsplash.com/photo-...'
```

### Issue: Build fails
**Solution:** 
```bash
# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
yarn build
```

### Issue: Routing not working on Netlify
**Solution:** Add `_redirects` file in `public/` folder:
```
/*    /index.html   200
```

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

## 🆘 Need Help?

Common files to edit:
- **Prices:** `src/components/Vehicles.jsx`, `src/components/FeaturedPackages.jsx`
- **Contact:** `src/components/Footer.jsx`, `src/components/Navbar.jsx`
- **WhatsApp:** `src/components/BookingForm.jsx`
- **Colors:** `src/index.css`, Tailwind classes in components
- **Content:** Any `.jsx` file in `src/components/` or `src/pages/`

## ✅ Quick Checklist

Before deploying:
- [ ] Updated WhatsApp number in all files
- [ ] Changed contact email and address
- [ ] Modified pricing if needed
- [ ] Tested locally with `yarn start`
- [ ] Created production build with `yarn build`
- [ ] Tested the build folder locally
- [ ] Ready to deploy!

---

**Built with React, Tailwind CSS, and ❤️**

*Happy coding! 🚀*
