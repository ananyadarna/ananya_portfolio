import { useEffect } from 'react'

export default function useCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring   = document.getElementById('cursor-ring')
    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let raf

    const onMove = e => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top  = my + 'px'
    }

    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      raf = requestAnimationFrame(animate)
    }

    const addHover = () => {
      cursor.classList.add('hover')
      ring.classList.add('hover')
    }
    const removeHover = () => {
      cursor.classList.remove('hover')
      ring.classList.remove('hover')
    }

    const attachHovers = () => {
      document.querySelectorAll('a, button, .hoverable').forEach(el => {
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', removeHover)
      })
    }

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)
    attachHovers()

    // re-attach when DOM changes (route changes, re-renders)
    const mo = new MutationObserver(attachHovers)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      mo.disconnect()
    }
  }, [])
}
