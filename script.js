function showPage2() {
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
}

function showFinal() {
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page3').classList.remove('hidden');
}

// --- كود JavaScript لإنشاء القلوب المتحركة ---
function createHearts() {
    const background = document.querySelector('.hearts-background');
    const heartCount = 30; // عدد القلوب

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-shape');
        
        // حجم عشوائي للقلب
        const size = Math.random() * 20 + 10; 
        heart.style.width = ${size}px;
        heart.style.height = ${size}px;
        
        // موقع أفقي عشوائي
        heart.style.left = ${Math.random() * 100}vw;
        
        // سرعة عشوائية للحركة (تأخير عشوائي ومدة عشوائية)
        heart.style.animationDuration = ${Math.random() * 3 + 2}s; // بين 2 و 5 ثواني
        heart.style.animationDelay = ${Math.random() * 5}s;
        
        // لون عشوائي بدرجات الأحمر
        const colors = ['#ff5252', '#ff1744', '#d50000', '#ff8a80'];
        heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        background.appendChild(heart);
    }
}

// تشغيل الدالة عند تحميل الصفحة
window.onload = createHearts;
