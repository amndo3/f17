// ==========================================
//     استبدل الكود到这里 بكل يلي تحت
// ==========================================

// ======= الاسم وكلمة المرور الثابتة =======

const myUsername = "amndo";      // ← مثلاً: admin
const myPassword = "1234";  // ← مثلاً: 1234

// ======= دالة التحقق =======
function checkLogin(username, password) {
    return (username === myUsername && password === myPassword);
}

// ======= دالة تسجيل الدخول =======
function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    if (username === "" || password === "") {
        message.textContent = "يرجى ملء جميع الحقول!";
        message.style.color = "red";
        return;
    }
    
    if (checkLogin(username, password)) {
        sessionStorage.setItem('currentUser', username);
        window.location.href = "home.html";
    } else {
        message.textContent = "اسم المستخدم أو كلمة المرور خطأ!";
        message.style.color = "red";
    }
}

// ======= التحقق =======
window.onload = function() {
    const currentUser = sessionStorage.getItem('currentUser');
    if (currentUser) {
        window.location.href = "home.html";
    }
};