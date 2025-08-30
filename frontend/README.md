# 📹 Zoom Clone – Video Call App (MERN + WebRTC)

## 📝 Overview
A **Zoom-like video call application** built using **MERN stack** + **WebRTC**, featuring authentication, real-time signaling, chat, screen sharing, and more.

---

## 📦 Libraries & Tools

### 🎨 Frontend (React + Vite)
- ⚛️ **react**, **react-dom** → Core React  
- 🧭 **react-router-dom** → Routing  
- 🌐 **axios** → API calls  
- 📊 **@reduxjs/toolkit**, **react-redux** (or Context API) → State management  
- 🔌 **socket.io-client** → Real-time signaling  
- 🎥 **WebRTC APIs** → Video/audio streaming, screen sharing  
- 🎨 **tailwindcss** → Styling  
- 🎭 **classnames** *(optional)* → Conditional classes  
- 🎨 **lucide-react** / **react-icons** → UI icons  

### ⚙️ Backend (Node.js + Express)
- 🚀 **express** → Backend framework  
- 🔌 **socket.io** → Signaling server  
- 🗄️ **mongoose** → MongoDB ODM  
- 🔑 **jsonwebtoken** → JWT authentication  
- 🔒 **bcryptjs** → Password hashing  
- 🌍 **cors** → Cross-origin handling  
- ⚙️ **dotenv** → Environment variables  
- 🍪 **cookie-parser** *(optional)* → Parse cookies  
- 🔁 **nodemon** → Dev server auto-restart  

### 🗃️ Database
- ☁️ **MongoDB Atlas** → Store users, meetings, chats  

### 🌐 WebRTC / Networking
- 🎤 `navigator.mediaDevices.getUserMedia()` → Camera & mic  
- 🔗 **RTCPeerConnection** → Peer connections  
- 🖥️ `navigator.mediaDevices.getDisplayMedia()` → Screen share  
- 🌍 **STUN/TURN Servers**  
  - Free: `stun:stun.l.google.com:19302`  
  - TURN: **coturn** (self-host) / Twilio / Xirsys  

### 🔧 Optional Features
- 🆔 **uuid** → Generate meeting IDs  
- ⏰ **moment** / **dayjs** → Time formatting  
- 📤 **multer**, **cloudinary** → File sharing *(optional)*  
- 📝 **winston** → Logging *(optional)*  
- 🛡️ **express-rate-limit** → Security  

### 🚀 Deployment
- 🎨 **Frontend** → Vercel / Netlify  
- ⚙️ **Backend** → Render / Railway / AWS EC2  
- 🗃️ **Database** → MongoDB Atlas  
- 🌍 **TURN Server** → coturn on DigitalOcean/AWS  
- 🐳 **Docker** *(optional)* → Containerize services  

---

## 🔄 Flow of the App

### 1️⃣ Authentication
- 👤 User registers → **bcryptjs** hashes password → saved in MongoDB  
- 🔑 User logs in → **jsonwebtoken** generates JWT  
- 🗂️ React stores user in Redux/Context  

📦 Used: `bcryptjs`, `jsonwebtoken`, `axios`, `react-router-dom`, `redux`

---

### 2️⃣ Meeting Creation / Join
- ➕ User clicks **Create Meeting** → **uuid** generates unique ID  
- 🗄️ Meeting saved in MongoDB (host, participants, start time)  
- 🔗 Other users join with `/meeting/:id`  

📦 Used: `uuid`, `mongoose`, `axios`

---

### 3️⃣ Video Call (WebRTC + Socket.IO)
- 🎤 Browser asks for **camera/mic** → `navigator.mediaDevices.getUserMedia()`  
- 🔌 User connects to signaling server → **socket.io-client**  
- 🔄 Socket.IO exchanges offer/answer/ICE candidates  
- 🎥 WebRTC connects peers  
- 🌍 **TURN server** helps if behind firewall/NAT  

📦 Used: `socket.io`, `socket.io-client`, `WebRTC`, `coturn`

---

### 4️⃣ Meeting Features
- 🎙️ **Mic/Camera Toggle** → Enable/disable `MediaStreamTrack`  
- 🖥️ **Screen Sharing** → `navigator.mediaDevices.getDisplayMedia()`  
- 💬 **Chat** → Socket.IO messages + MongoDB storage  
- 👥 **Participants List** → Live updates via Socket.IO  

📦 Used: `WebRTC`, `socket.io`, `mongoose`

---

### 5️⃣ End Call
- ❌ User clicks **Leave** → Socket.IO notifies others  
- 🗂️ Meeting marked ended in MongoDB  

📦 Used: `socket.io`, `mongoose`

---

### 6️⃣ Recording *(Optional)*
- 💾 **Client-side** → `MediaRecorder API` (save locally)  
- 🎞️ **Server-side** → Stream + **FFmpeg**  

📦 Used: `MediaRecorder API`, `ffmpeg`

---
