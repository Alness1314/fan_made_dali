import { useCallback, useEffect, useState } from 'react'
import AudioPlayer from './components/AudioPlayer'
import FloatingLogo from './components/FloatingLogo'
import LoaderSkeleton from './components/LoaderSkeleton'
import SmokeOverlay from './components/SmokeOverlay'
import TypingText from './components/TypingText'
import backgroundImage from './assets/img/bts-concert.webp'
import btsLogo from './assets/img/bts_logo.webp'
import btsTitle from './assets/img/bts_txt.webp'
import instagramLogo from './assets/img/Instagram_logo.webp'
import ambientSong from './assets/sound/ambient_sound.mp3'

const CONFIG = {
  instagramUrl: 'https://www.instagram.com/dali_min_/',
  instagramName: 'DALI_MIN_',
  quote:
    'Entre millones de estrellas encontraste el mismo cielo que nosotros. Gracias por formar parte de este universo llamado BTS.',
}

function TourLogo() {
  return (
    <div className="tour-logo animate-title-entrance opacity-0">
      <img
        src={btsTitle}
        alt="BTS World Tour Arirang"
        className="title-edge-glow h-full w-full object-contain"
        draggable="false"
      />
    </div>
  )
}

function App() {
  const [imageReady, setImageReady] = useState(false)
  const [audioReady, setAudioReady] = useState(false)
  const [minimumDelayPassed, setMinimumDelayPassed] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setMinimumDelayPassed(true), 1200)
    const audioFallback = window.setTimeout(() => setAudioReady(true), 3200)
    const image = new Image()
    image.src = backgroundImage
    image.onload = () => setImageReady(true)
    image.onerror = () => setImageReady(true)

    return () => {
      window.clearTimeout(timer)
      window.clearTimeout(audioFallback)
    }
  }, [])

  const handleAudioReady = useCallback(() => setAudioReady(true), [])
  const loaded = imageReady && audioReady && minimumDelayPassed

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09020f] text-white">
      {!loaded && <LoaderSkeleton />}

      <section
        className={`relative min-h-screen overflow-hidden transition-opacity duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="absolute -inset-8 bg-cover bg-center opacity-70 blur-2xl scale-110"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-hidden="true"
        />
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden="true"
          draggable="false"
        />
        <div className="absolute inset-0 z-[1] bg-[#160522]/35 mix-blend-multiply" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#08000e]/45 via-transparent to-[#08000f]/65 backdrop-blur-[.4px]" />
        <div className="vignette absolute inset-0 z-[2]" />
        <SmokeOverlay />

        <div className="relative z-10 mx-auto min-h-screen w-full max-w-[1600px] px-5 py-5 sm:px-8 md:px-12 md:py-7">
          <div className="absolute left-1/2 top-[5.5vh] -translate-x-1/2 sm:top-[4.5vh]">
            <TourLogo />
          </div>

          <a
            href={CONFIG.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="instagram-link absolute right-3 top-3 z-20 flex animate-instagram-entrance flex-col items-center gap-1 opacity-0 sm:right-7 sm:top-6 sm:gap-1.5 md:right-12 md:top-8"
            aria-label={`Instagram de ${CONFIG.instagramName}`}
          >
            <img
              src={instagramLogo}
              alt=""
              className="logo-edge-glow h-12 w-12 animate-float-slow transition duration-300 hover:scale-105 sm:h-20 sm:w-20 md:h-[104px] md:w-[104px]"
            />
            <span className="inline-block animate-float-slow text-xs font-bold uppercase tracking-[.2em] text-white/95 drop-shadow-lg sm:text-sm md:text-base">
              {CONFIG.instagramName}
            </span>
          </a>

          <div className="quote-position absolute bottom-[11vh] left-5 right-5 sm:bottom-[4.5vh] sm:left-8 sm:right-auto md:bottom-[5vh] md:left-12">
            <TypingText text={CONFIG.quote} />
          </div>

          <FloatingLogo
            src={btsLogo}
            alt="Logo BTS"
            delay="700ms"
            className="bottom-logo absolute bottom-[2.5vh] left-1/2 h-12 w-[125px] -translate-x-1/2 sm:h-[68px] sm:w-[180px] md:bottom-[4vh] md:h-[78px] md:w-[210px]"
          />
        </div>
      </section>

      <AudioPlayer src={ambientSong} onReady={handleAudioReady} />
    </main>
  )
}

export default App
