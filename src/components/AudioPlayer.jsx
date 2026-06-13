import { useEffect, useRef, useState } from 'react'

function AudioPlayer({ src, onReady }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const markReady = () => onReady?.()
    const attemptPlayback = async () => {
      try {
        await audio.play()
        setPlaying(true)
        return true
      } catch {
        setPlaying(false)
        return false
      }
    }
    const startAfterInteraction = () => {
      void attemptPlayback()
      document.removeEventListener('pointerdown', startAfterInteraction)
      document.removeEventListener('keydown', startAfterInteraction)
      document.removeEventListener('touchstart', startAfterInteraction)
    }
    const startWhenReady = () => {
      markReady()
      void attemptPlayback().then((started) => {
        if (!started) {
          document.addEventListener('pointerdown', startAfterInteraction, { once: true })
          document.addEventListener('keydown', startAfterInteraction, { once: true })
          document.addEventListener('touchstart', startAfterInteraction, { once: true })
        }
      })
    }

    audio.addEventListener('loadedmetadata', markReady, { once: true })
    audio.addEventListener('canplay', startWhenReady, { once: true })
    audio.addEventListener('error', markReady, { once: true })
    audio.load()

    if (audio.readyState >= 3) startWhenReady()
    else if (audio.readyState >= 1) markReady()

    return () => {
      audio.removeEventListener('loadedmetadata', markReady)
      audio.removeEventListener('canplay', startWhenReady)
      audio.removeEventListener('error', markReady)
      document.removeEventListener('pointerdown', startAfterInteraction)
      document.removeEventListener('keydown', startAfterInteraction)
      document.removeEventListener('touchstart', startAfterInteraction)
    }
  }, [onReady, src])

  const toggleAudio = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      try {
        await audio.play()
        setPlaying(true)
      } catch {
        setPlaying(false)
      }
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" autoPlay />
      <button
        type="button"
        onClick={toggleAudio}
        className="audio-control group fixed bottom-5 right-5 z-30 flex h-11 items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 text-white shadow-[0_8px_30px_rgba(0,0,0,.35)] backdrop-blur-md transition hover:border-fuchsia-300/40 hover:bg-purple-950/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300 md:bottom-7 md:right-8"
        aria-label={playing ? 'Pausar música ambiental' : 'Activar música ambiental'}
        aria-pressed={playing}
      >
        <span className="relative flex h-5 w-5 items-center justify-center">
          {playing ? (
            <span className="audio-bars" aria-hidden="true">
              <i /><i /><i />
            </span>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M9 7.2v9.6L17 12 9 7.2Z" />
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" />
            </svg>
          )}
        </span>
        <span className="hidden text-[10px] font-semibold uppercase tracking-[.22em] sm:block">
          {playing ? 'Sonando' : 'Música'}
        </span>
      </button>
    </>
  )
}

export default AudioPlayer
