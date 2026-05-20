# 🧠 AI Image Generator (MERN + Cloudflare AI Workers)

A full-stack AI Image Generation web application built using **MERN stack**, **Cloudflare AI Workers**, **Google OAuth authentication**, and **Upstash rate limiting**.

Users can securely log in, generate AI images from prompts, and enjoy protected, rate-limited API access.

---

## 🚀 Features

- 🎨 AI image generation using Cloudflare Workers AI  
- 🔐 Google OAuth authentication (`@react-oauth/google`)  
- 🧑‍💻 JWT-based secure backend auth  
- 🗄️ MongoDB database for user management  
- ⚡ Rate limiting with Upstash Redis  
- 🎯 Protected routes (frontend + backend)  
- 🎨 Modern responsive UI with Tailwind CSS  
- 🔄 Axios-based API communication  
- 🧾 Toast notifications (react-hot-toast)

---

## 🏗️ Tech Stack

### Frontend
- React 19
- React Router DOM
- Tailwind CSS
- Vite
- Axios
- React Hot Toast
- Google OAuth
- JWT Decode

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs
- CORS
- dotenv
- @upstash/redis
- @upstash/ratelimit

### Cloud & AI
- Cloudflare Workers AI (image generation)
- Upstash Redis (rate limiting)

---

## ⚙️ Environment Variables

Create a `.env` file in your backend root:

```
MONGO_URI=your_mongodb_connection_string
PORT=5001

JWT_SECRET=your_jwt_secret

UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token

VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id

CLOUDFLARE_AI_TOKEN=your_cloudflare_token

WORKER_URL = your_cloudflare-worker_url
```

---

## 🔐 Authentication Flow

1. User logs in using Google OAuth  
2. Frontend receives Google credential  
3. Backend verifies user and creates JWT  
4. JWT stored on client side  
5. Protected routes validate JWT  

---

## 🎨 AI Image Generation Flow

1. User enters prompt  
2. Frontend sends request to backend  
3. Backend checks:
   - JWT authentication  
   - Rate limiting (Upstash)  
4. Cloudflare AI generates image  
5. Image is returned to frontend  

---

## 🚦 Rate Limiting

- Powered by Upstash Redis  
- Limit: **5 requests per 60 seconds per user/IP**  
- Prevents abuse and ensures fair usage  

---

## 📁 Project Structure

```
AI_IMG_GEN/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── context/
│   │   └── utils/
│
├── workers/
│   └── cloudflare-ai-worker.js
│
└── README.md
```

---

## 🧪 Running Locally

### Clone the repo
```
git clone https://github.com/ItxHayd/ai-img-gen.git
cd ai-img-gen
```

### Install dependencies
```
npm install
cd backend && npm install
cd frontend && npm install
```

### Run backend
```
npm run dev2
```

### Run frontend
```
npm run dev
```

---

## 🌐 Deployment

- Frontend → Vercel / Netlify  
- Backend → Railway / Render / Cloudflare Workers  
- Database → MongoDB Atlas  
- Rate Limit → Upstash Redis  
- AI → Cloudflare Workers AI  

---

## 🧠 Key Learnings

- MERN full-stack architecture  
- OAuth authentication flow  
- JWT-based security  
- Cloudflare Workers AI integration  
- Redis-based rate limiting  
- Production-ready backend design  

---

## 📸 Screenshots
<img width="1351" height="1012" alt="img_gen" src="https://github.com/user-attachments/assets/204d3c5a-2225-4480-b941-1cecdb8a2374" />


---

## 📜 License

MIT License

---

## 💡 Author

Built with ❤️ by **Hayd**
