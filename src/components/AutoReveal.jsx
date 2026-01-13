import { useEffect } from 'react'

export default function AutoReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add staggered animation delay based on index
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 150);
        }
      });
    }, {
      root: null,
      rootMargin: '-50px 0px -50px 0px',
      threshold: 0.1
    });

    reveals.forEach((el) => observer.observe(el));

    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  return null;
}