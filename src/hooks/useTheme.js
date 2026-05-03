import { useState, useEffect } from 'react'

export default function useTheme() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark)
  }, [dark])

  const toggle = () => setDark(d => !d)

  return { dark, toggle }
}
