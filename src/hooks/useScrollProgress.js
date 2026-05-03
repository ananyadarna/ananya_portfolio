import { useEffect } from 'react'

export default function useScrollProgress() {
  useEffect(() => {
    const bar     = document.getElementById('scroll-progress')
    const backTop = document.getElementById('back-top')

    const onScroll = () => {
      const pct =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      if (bar)     bar.style.width = pct + '%'
      if (backTop) backTop.classList.toggle('visible', window.scrollY > 400)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
