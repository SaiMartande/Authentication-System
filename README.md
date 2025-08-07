# 🔐 Authentify — Secure Authentication System (Spring Boot + React)

Authentify is a modern full-stack authentication system built using **Spring Boot** for the backend and **React** for the frontend. It includes secure user registration, login with JWT, email-based OTP verification, and password reset functionality. The UI is styled using **Bootstrap 5** for a clean and responsive experience.

---

## ✅ Features

- ✅ **User Registration & Login** with secure password hashing
- ✅ **JWT-Based Authentication** for stateless session handling
- ✅ **Email OTP Verification** on account creation (JavaMailSender)
- ✅ **Password Reset via Email OTP**
- ✅ **React Frontend** with protected routes based on login state
- ✅ **Bootstrap 5 UI** for sleek and responsive design
- ✅ **Fully Commented Codebase** — Easy to understand and customize
- ✅ **Modular REST API Design** using Spring Boot best practices
- ✅ **Token Storage in LocalStorage** and auto-expiration handling

---

## 🛠️ Tech Stack

**Frontend:**
- React (Vite)
- Axios
- React Router DOM
- Bootstrap 5
- React Toastify

**Backend:**
- Spring Boot (v3+)
- Spring Security
- Spring Data JPA
- JavaMailSender
- PostgreSQL (can be switched to H2/MySQL)
- JWT for token-based auth

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
├── application.properties

authentify-frontend/
├── src/
│ ├── pages/
│ ├── components/
│ ├── context/
│ ├── styles/
│ └── App.jsx
└── public/

yaml
Copy
Edit

---

## 🚀 Getting Started

### ⚙️ Backend Setup

1. Clone the project:
    ```bash
    git clone https://github.com/your-username/authentify.git
    cd authentify/authentify-backend
    ```

2. Configure PostgreSQL (or use H2 for dev) in `application.properties`.

3. Run the Spring Boot application:
    ```bash
    ./mvnw spring-boot:run
    ```

### 💻 Frontend Setup

1. Navigate to frontend directory:
    ```bash
    cd authentify-frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the frontend:
    ```bash
    npm run dev
    ```

---

## 🔐 Authentication Flow

1. **Register User** → Sends OTP to email
2. **Verify Email with OTP**
3. **Login with Credentials** → JWT stored in browser
4. **Access Protected Routes (Dashboard)**
5. **Forgot Password?** → Send OTP → Verify → Set New Password

---

## 📸 Screenshots

> _You can add screenshots here of:_
- Register page
- OTP verification UI
- Login page
- Protected Dashboard
- Forgot password flow

---

## 📧 Email Configuration (SMTP)

Add the following in your `application.properties`:

```properties
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=your_email@gmail.com
spring.mail.password=your_app_password
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
