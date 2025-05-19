document.addEventListener('DOMContentLoaded', function() {
    // Admin credentials (in a real app, this would be server-side)
    const ADMIN_USERNAME = "admin";
    const ADMIN_PASSWORD = "admin";
    
    // DOM elements
    const editBtn = document.getElementById('editBtn');
    const loginForm = document.getElementById('loginForm');
    const editArea = document.getElementById('editArea');
    const loginBtn = document.getElementById('loginBtn');
    const saveBtn = document.getElementById('saveBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const contentEditor = document.getElementById('contentEditor');
    const loginError = document.getElementById('loginError');
    
    // News elements
    const newsTitle = document.getElementById('news-title');
    const newsIntro = document.getElementById('news-intro');
    const newsSections = document.getElementById('news-sections');
    const infoTitle = document.getElementById('info-title');
    const infoAuthor = document.getElementById('info-author');
    const infoDate = document.getElementById('info-date');
    
    // Initially hide forms
    loginForm.style.display = 'none';
    editArea.style.display = 'none';
    
    // Load news data from JSON
    let newsData = {};
    
    fetch('data/news-data.json')
        .then(response => response.json())
        .then(data => {
            newsData = data;
            updateNewsDisplay();
        })
        .catch(error => {
            console.error('Error loading news data:', error);
        });
    
    // Update the display with news data
    function updateNewsDisplay() {
        newsTitle.textContent = newsData.title;
        newsIntro.textContent = newsData.content.intro;
        infoTitle.textContent = newsData.title;
        infoAuthor.textContent = newsData.author;
        infoDate.textContent = newsData.date;
        
        // Clear existing sections
        newsSections.innerHTML = '';
        
        // Add each section
        newsData.content.sections.forEach(section => {
            const sectionHTML = `
                <h3>${section.title}</h3>
                <p>${section.content}</p>
            `;
            newsSections.innerHTML += sectionHTML;
        });
    }
    
    // Edit button click handler
    editBtn.addEventListener('click', function() {
        loginForm.style.display = 'block';
        editBtn.style.display = 'none';
    });
    
    // Login button click handler
    loginBtn.addEventListener('click', function() {
        if(usernameInput.value === ADMIN_USERNAME && passwordInput.value === ADMIN_PASSWORD) {
            loginForm.style.display = 'none';
            editArea.style.display = 'block';
            
            // Put current news data in the editor as JSON
            contentEditor.value = JSON.stringify(newsData, null, 2);
            loginError.textContent = '';
        } else {
            loginError.textContent = 'Hatalı kullanıcı adı veya şifre!';
        }
    });
    
    // Save button click handler
    saveBtn.addEventListener('click', function() {
        try {
            const updatedData = JSON.parse(contentEditor.value);
            newsData = updatedData;
            updateNewsDisplay();
            
            // In a real app, you would send this to a server to save the JSON file
            // For now, we'll just update the in-memory data
            console.log('News data updated (not saved to file in this demo)');
            
            // Hide editor and show edit button
            editArea.style.display = 'none';
            editBtn.style.display = 'block';
        } catch (e) {
            loginError.textContent = 'Geçersiz JSON formatı!';
            loginError.style.display = 'block';
            console.error('Invalid JSON:', e);
        }
    });
    
    // Cancel button click handler
    cancelBtn.addEventListener('click', function() {
        editArea.style.display = 'none';
        loginForm.style.display = 'none';
        editBtn.style.display = 'block';
        loginError.textContent = '';
    });
});