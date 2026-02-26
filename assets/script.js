document.addEventListener('DOMContentLoaded', function(){
  // Nav toggle for mobile
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  navToggle && navToggle.addEventListener('click', ()=>{
    nav.classList.toggle('open');
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    },{threshold:0.12});
    reveals.forEach(r=>obs.observe(r));
  } else {
    // Fallback
    reveals.forEach(r=>r.classList.add('visible'));
  }
});
