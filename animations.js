// 4. requestAnimationFrame
const startAnimationBtn = document.getElementById('startAnimationBtn');
const movingBox = document.getElementById('movingBox');

let start = null;

function animateBox(timestamp) {
  if (!start) start = timestamp;

  const progress = timestamp - start;
  const distance = Math.min((progress / 2000) * 200, 200);

  movingBox.style.transform = `translateX(${distance}px)`;

  if (distance < 200) {
    requestAnimationFrame(animateBox);
  }
}

startAnimationBtn.addEventListener('click', () => {
  start = null;
  movingBox.style.transform = 'translateX(0)';
  requestAnimationFrame(animateBox);
});

// 5. Ripple effect
const rippleBtn = document.getElementById('rippleBtn');

rippleBtn.addEventListener('click', function (e) {
  const ripple = document.createElement('span');
  ripple.classList.add('ripple-effect');
  this.appendChild(ripple);

  const diameter = Math.max(this.clientWidth, this.clientHeight);
  const radius = diameter / 2;

  const rect = this.getBoundingClientRect();

  ripple.style.width = ripple.style.height = `${diameter}px`;
  ripple.style.left = `${e.clientX - rect.left - radius}px`;
  ripple.style.top = `${e.clientY - rect.top - radius}px`;

  ripple.onanimationend = () => {
    ripple.remove();
  };
});

// 6. Hover image effect
const hoverImg = document.getElementById('hoverImg');

hoverImg.addEventListener('mouseover', function () {
  this.style.transform = 'scale(1.05)';
  this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
  this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
});

hoverImg.addEventListener('mouseout', function () {
  this.style.transform = 'scale(1)';
  this.style.boxShadow = 'none';
});