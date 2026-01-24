🚀 FlowTalk – Real-Time Communication Platform

FlowTalk is a modern, real-time communication web application that enables users to connect instantly through secure authentication, live chat, media sharing, and scalable messaging infrastructure. Built with a powerful full-stack tech stack, FlowTalk focuses on performance, security, and seamless user experience.

🌟 Features

🔐 Secure authentication with Clerk

💬 Real-time chat using Stream Chat

📁 Media & file uploads with UploadThing

⚡ GraphQL-powered API using Apollo GraphQL

🔄 Event-driven background tasks using RabbitMQ

🧑‍🤝‍🧑 One-to-one and group messaging

📡 Scalable backend architecture

🎨 Responsive and modern UI using Tailwind CSS

🗄️ Cloud database with MongoDB

🛠️ Tech Stack
Frontend

React

Tailwind CSS

Apollo Client (GraphQL)

Backend

Node.js

Express.js

Apollo Server (GraphQL)

RabbitMQ (message queue)

Database & Auth

MongoDB

Clerk (Authentication & User Management)

Real-Time & Media

Stream Chat (Real-time messaging)

UploadThing (File uploads)

📂 Project Structure
flowtalk/
├── client/        # React frontend
├── backend/       # Node + Express + GraphQL API
├── graphql/       # GraphQL schema & resolvers
├── models/        # MongoDB models
├── queues/        # RabbitMQ consumers & producers
└── utils/         # Helper functions

⚙️ Environment Variables

Create a .env file in backend:

MONGO_URI=your_mongodb_uri
CLERK_SECRET_KEY=your_clerk_secret
STREAM_API_KEY=your_stream_key
STREAM_API_SECRET=your_stream_secret
UPLOADTHING_SECRET=your_uploadthing_key
RABBITMQ_URL=your_rabbitmq_url

▶️ Run Locally
Backend
cd backend
npm install
npm run dev

Frontend
cd client
npm install
npm start

📌 Future Enhancements

Voice & video calling

Message reactions & replies

Online/offline user status

Admin moderation panel

AI-based chat moderation

👩‍💻 Author

Aditi Raj
B.Tech IT Student | Web Developer
📧 aditiraj4176@gmail.com

🔗 LinkedIn | GitHub
