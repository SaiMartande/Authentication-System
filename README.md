# 🔐 Authentify — Secure Authentication System (Spring Boot + React)

**Authentify** is a modern full-stack authentication system built using **Spring Boot** for the backend and **React** for the frontend. It includes secure user registration, login with JWT, email-based OTP verification, and password reset functionality. The UI is styled using **Bootstrap 5** for a clean and responsive experience.

---

## ✅ Features

- ✅ User Registration & Login with secure password hashing  
- ✅ JWT-Based Authentication for stateless session handling  
- ✅ Email OTP Verification on account creation (JavaMailSender)  
- ✅ Password Reset via Email OTP  
- ✅ React Frontend with protected routes based on login state  
- ✅ Bootstrap 5 UI for sleek and responsive design  
- ✅ Fully Commented Codebase — Easy to understand and customize  
- ✅ Modular REST API Design using Spring Boot best practices  
- ✅ Token Storage in LocalStorage and auto-expiration handling  

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router DOM
- Bootstrap 5
- React Toastify

### Backend
- Spring Boot (v3+)
- Spring Security
- Spring Data JPA
- JavaMailSender
- PostgreSQL *(can be switched to H2/MySQL)*
- JWT for token-based authentication

---

## 📂 Project Structure

authentify-backend/
│
├── src/main/java/com/example/authentify
│ ├── controller/
│ ├── service/
│ ├── repository/
│ ├── entity/
│ ├── security/
│ └── dto/
│
└── src/main/resources/
└── application.properties

authentify-frontend/
├── src/
│ ├── pages/
│ ├── components/
│ ├── context/
│ ├── styles/
│ └── App.jsx
└── public/

---

## 🚀 Getting Started

### ⚙️ Backend Setup

Clone the project:

```bash
git clone https://github.com/SaiMartande/Authentication-System.git
cd authentify/authentify-backend
Configure PostgreSQL (or H2 for development) in application.properties.

Run the Spring Boot application:
./mvnw spring-boot:run

💻 Frontend Setup
Navigate to the frontend directory:
cd authentify-frontend

Install dependencies:
npm install

Start the React development server:
npm run dev

🔐 Authentication Flow
Register User → Sends OTP to email
Verify Email with OTP
Login with credentials → JWT stored in browser
Access Protected Routes (Dashboard, etc.)
Forgot Password? → Send OTP → Verify → Set New Password


📧 Email Configuration (SMTP)
Configure the following properties in application.properties:
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=your_email@gmail.com
spring.mail.password=your_app_password
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
💡 Note: Use App Passwords for Gmail if 2FA is enabled.


