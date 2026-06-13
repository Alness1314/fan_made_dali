function FloatingLogo({ src, alt, className = '', delay = '0ms' }) {
  return (
    <div
      className={`animate-logo-entrance opacity-0 ${className}`}
      style={{ animationDelay: delay }}
    >
      <img
        src={src}
        alt={alt}
        className="logo-edge-glow h-full w-full animate-float object-contain"
        draggable="false"
      />
    </div>
  )
}

export default FloatingLogo
