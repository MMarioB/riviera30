// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Save checklist state to localStorage
function saveChecklistState() {
    const checkedItems = [];
    document.querySelectorAll('.checklist-items li.checked').forEach((item, index) => {
        checkedItems.push(item.textContent.trim());
    });
    localStorage.setItem('rivieraMayaChecklist', JSON.stringify(checkedItems));
}

// Load checklist state from localStorage
function loadChecklistState() {
    const saved = localStorage.getItem('rivieraMayaChecklist');
    if (saved) {
        const checkedItems = JSON.parse(saved);
        document.querySelectorAll('.checklist-items li').forEach(item => {
            if (checkedItems.includes(item.textContent.trim())) {
                item.classList.add('checked');
            }
        });
    }
}

// Add save on click
document.querySelectorAll('.checklist-items li').forEach(item => {
    item.addEventListener('click', () => {
        setTimeout(saveChecklistState, 100);
    });
});

// Load on page load
loadChecklistState();
