# 🥷 Venue Ninja — Frontend UI

A sleek React + Vite frontend built to showcase intelligent seat recommendations for legendary venues like Madison Square Garden and Yankee Stadium. Designed to be lightning-fast, mobile-friendly, and deeply integrated with our Spring Boot backend.

---

## 🎯 Live Project

🌐 **API:** [https://venue-ninja.onrender.com/swagger-ui/index.html](https://venue-ninja.onrender.com/swagger-ui/index.html)  
🚀 **Frontend:** [venueninja.netlify.app](https://venueninja.netlify.app)

---

## ⚙️ Tech Stack

- ⚡ **Vite** — Ultra-fast development server
- ⚛️ **React** — Component-based frontend
- 🎨 **Tailwind CSS** — Utility-first styling
- 🌐 **Axios** — RESTful API consumption
- 🧭 **React Router** — Page routing
- 💡 **Modular Component Design** — Reusable UI components

---

## 🧠 Key Features

- Venue grid with interactive cards
- Detailed seat recommendation pages
- Clean, responsive Tailwind UI
- Real API integration with CORS-safe backend
- 🔥 Fast build & reload via Vite

---

## 🚧 Project Structure

```

src/
│
├── assets/          # Static assets (logo, images)
├── components/      # Reusable components (VenueCard)
├── pages/           # Route-driven pages (VenuePage)
├── App.jsx          # Main component
├── main.jsx         # Entry point
└── index.css        # Tailwind imports & global styles

````

---

## 🛠️ Local Setup

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/venue-ninja-client.git
cd venue-ninja-client

# Install dependencies
npm install

# Run dev server
npm run dev
````

Visit [http://localhost:5173](http://localhost:5173)
(Or whatever port Vite assigns.)

---

## 🔗 API Integration

This client fetches from the Spring Boot backend at:

```
GET https://venue-ninja.onrender.com/venues
GET https://venue-ninja.onrender.com/venues/:id
```

Make sure CORS is enabled on the backend!

---

## 🧪 Next Steps

* [x] Deploy to Vercel or Netlify
* [x] Improve mobile responsiveness
* [ ] Add loading spinners and error boundaries
* [ ] Add Unsplash integration for venue imagery
* [ ] Animate cards on hover/tap

---

## 👨‍💻 Author

**Douglas MacKrell**
🔗 [linkedin.com/in/douglasmackrell](https://linkedin.com/in/douglasmackrell)

---

## 🥷 Final Word

A ninja frontend doesn’t just render fast—it moves fast, adapts gracefully, and delights users without being seen. Let’s gooooooo!
