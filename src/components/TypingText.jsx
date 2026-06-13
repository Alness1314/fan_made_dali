import { useEffect, useState } from 'react'

function TypingText({ text, startDelay = 2100 }) {
  const [visibleText, setVisibleText] = useState('')
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    let intervalId
    const delayId = window.setTimeout(() => {
      let index = 0
      intervalId = window.setInterval(() => {
        index += 1
        setVisibleText(text.slice(0, index))

        if (index >= text.length) {
          window.clearInterval(intervalId)
          setFinished(true)
        }
      }, 34)
    }, startDelay)

    return () => {
      window.clearTimeout(delayId)
      window.clearInterval(intervalId)
    }
  }, [startDelay, text])

  return (
    <blockquote
      className={`quote-text max-w-[640px] text-left text-[clamp(1rem,2vw,1.65rem)] font-light italic leading-[1.35] text-white ${
        finished ? 'animate-quote-float' : ''
      }`}
    >
      <span aria-hidden="true">“</span>
      {visibleText}
      <span className={finished ? '' : 'typing-caret'} aria-hidden="true" />
      <span aria-hidden="true">”</span>
      <span className="sr-only">{text}</span>
    </blockquote>
  )
}

export default TypingText
