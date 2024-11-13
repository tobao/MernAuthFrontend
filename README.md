# User:
- Registration and email verification.
- Two-step authentication for login (password + login code sent via email), only required when logging in from a different device or browser than initially registered
- Google account login integration.
Password change and profile update.
Forgot password support. 
- Demo:
  - https://drive.google.com/file/d/1_yP7jDQi_5kltLzsIHSmqjDchwRYCz9Z/view?usp=sharing

# Admin:
- User statistics and view user list.
Edit roles, suspend, and delete inactive accounts.
- Demo:
  - https://drive.google.com/file/d/1OG3bLiZeahpe7K6ctn8-K2HHsyzKiVwV/view?usp=drive_link

# Security:
- System sends confirmation emails for all significant chan

-----

# Frontend (React-based)

## 1. React & React Router DOM
- Sử dụng `React` để xây dựng giao diện người dùng.
- React Router DOM cho điều hướng giữa các trang.

## 2. State Management
- `Redux Toolkit` (authSlice.js, filterSlice.js, emailSlice.js, và store.js)
- Các file Slice (như authSlice.js và emailSlice.js) thường chứa các reducers và actions để quản lý trạng thái liên quan đến xác thực (authentication) và email.
- Redux Toolkit giúp đơn giản hóa việc tạo reducers và actions thông qua `createSlice` và `createAsyncThunk` ( được dùng cho các tác vụ bất đồng bộ như gửi yêu cầu HTTP).

## 3. Form & Input Handling
- `React Hook Form` để quản lý biểu mẫu.
- `React Confirm Alert` để hiển thị các thông báo xác nhận.

## 4. UI & Styling
- `Sass` để mở rộng khả năng viết CSS.
## 5. Authentication
- `@react-oauth/google` để tích hợp Google OAuth cho đăng nhập.

## 6. HTTP Requests
- `Axios` được sử dụng để thực hiện các yêu cầu HTTP đến server.

## 7. Notifications
- `React Toastify `để hiển thị các thông báo cho người dùng.

## 8. Build Tools
- `React Scripts` để chạy và kiểm thử ứng dụng.