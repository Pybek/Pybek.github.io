// লোডিং অ্যানিমেশন (Loading Animation)
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000);
});

// মেনু আইটেম অ্যানিমেশন (Menu Item Animation)
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('.emoji').style.transform = 'scale(1.2)';
    });
    
    item.addEventListener('mouseout', () => {
        item.querySelector('.emoji').style.transform = 'scale(1)';
    });
});

// স্ক্রল অ্যানিমেশন (Scroll Animation)
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.post-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// কুল বাটন এফেক্ট (Cool Button Effect)
document.querySelectorAll('.cool-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        
        const ripple = document.createElement('span');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});
