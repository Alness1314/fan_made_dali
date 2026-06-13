function SmokeOverlay() {
  const sparkles = Array.from({ length: 24 }, (_, index) => ({
    id: index,
    left: `${(index * 37 + 7) % 97}%`,
    top: `${(index * 53 + 11) % 88}%`,
    delay: `${-((index * 0.73) % 7)}s`,
    duration: `${3.2 + (index % 6) * 0.75}s`,
    size: `${2 + (index % 3)}px`,
  }))

  return (
    <div className="pointer-events-none absolute inset-0 z-[3] overflow-hidden" aria-hidden="true">
      <div className="smoke smoke-one" />
      <div className="smoke smoke-two" />
      <div className="smoke smoke-three" />
      <div className="smoke-ribbon smoke-ribbon-one" />
      <div className="smoke-ribbon smoke-ribbon-two" />
      <div className="concert-beam concert-beam-left" />
      <div className="concert-beam concert-beam-right" />
      <div className="stars-layer" />
      <div className="sparkle-field">
        {sparkles.map((sparkle) => (
          <i
            key={sparkle.id}
            style={{
              '--sparkle-left': sparkle.left,
              '--sparkle-top': sparkle.top,
              '--sparkle-delay': sparkle.delay,
              '--sparkle-duration': sparkle.duration,
              '--sparkle-size': sparkle.size,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default SmokeOverlay
