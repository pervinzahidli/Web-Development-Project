document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('adminLoginForm');
    const errorMessage = document.getElementById('errorMessage');
    const loginBtn = document.getElementById('loginBtn');
    
    // In a real application, these would be securely stored and verified server-side
    const ADMIN_CREDENTIALS = {
        username: "admin",
        password: "admin" // In production, never store passwords in client-side code
    };
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        
        // Reset error message
        errorMessage.textContent = '';
        loginBtn.disabled = true;
        loginBtn.textContent = 'Authenticating...';
        
        // Simulate network delay for better UX
        setTimeout(() => {
            // Basic client-side validation
            if (!username || !password) {
                showError('Please enter both username and password');
                return;
            }
            
            // In a real app, this would be a secure API call to your backend
            if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
                // Successful login - redirect to dashboard
                // In production, you would receive a secure token from your backend
                simulateSuccessfulLogin();
            } else {
                showError('Invalid credentials. Please try again.');
            }
        }, 800);
    });
    
    function showError(message) {
        errorMessage.textContent = message;
        loginBtn.disabled = false;
        loginBtn.textContent = 'Login';
        
        // Shake animation for error
        loginForm.classList.add('shake');
        setTimeout(() => {
            loginForm.classList.remove('shake');
        }, 500);
    }
    
    function simulateSuccessfulLogin() {
        // In a real application, you would redirect to the admin dashboard
        // For this example, we'll show a success message and redirect
        errorMessage.style.color = 'var(--success-color)';
        errorMessage.textContent = 'Login successful! Redirecting...';
        
        setTimeout(() => {
            // Redirect to admin dashboard
            window.location.href = 'admin-dashboard.html';
        }, 1500);
    }
});

// Add shake animation to CSS
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