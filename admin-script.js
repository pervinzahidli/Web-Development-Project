document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('adminLoginForm');
    const errorMessage = document.getElementById('errorMessage');
    const loginBtn = document.getElementById('loginBtn');

    const ADMIN_CREDENTIALS = {
        username: "admin",
        password: "admin"
    };

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const recaptchaResponse = grecaptcha.getResponse();

        errorMessage.textContent = '';
        loginBtn.disabled = true;
        loginBtn.textContent = 'Authenticating...';

        // Simulate delay
        setTimeout(() => {
            // Validation
            if (!username || !password) {
                showError('Please enter both username and password.');
                return;
            }

            if (!recaptchaResponse) {
                showError('Please complete the reCAPTCHA.');
                return;
            }

            // Simulated authentication
            if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
                simulateSuccessfulLogin();
            } else {
                showError('Invalid credentials. Please try again.');
            }
        }, 800);
    });

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.color = 'red';
        loginBtn.disabled = false;
        loginBtn.textContent = 'Login';
        loginForm.classList.add('shake');
        setTimeout(() => {
            loginForm.classList.remove('shake');
        }, 500);
    }

    function simulateSuccessfulLogin() {
        errorMessage.style.color = 'green';
        errorMessage.textContent = 'Login successful! Redirecting...';

        setTimeout(() => {
            window.location.href = 'admin-dashboard.html';
        }, 1500);
    }
});

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    .shake {
        animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
    }
`;
document.head.appendChild(style);
