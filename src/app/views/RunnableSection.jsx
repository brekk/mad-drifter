"use client"

import { useState, useEffect, useRef } from "react"
import blem from "blem"
import "@/app/styles/runnable.scss"

export const RunnableSection = (sectionProps) => {
  const s = blem("Example")
  const [$value, $setValue] = useState("")
  const handleText = (e) => {
      $setValue(e.target.value)
  }
  const [$ready, $setReady] = useState(false)
  const [$answered, $setAnswered] = useState(false)
  const [$correct, $setCorrect] = useState(false)
  const $ref = useRef()
  useEffect(
    () => {
      $setReady($value !== "")
    },
    [$value]
  )
  if (!sectionProps.name) return null
  const { name, content, question, answer } = sectionProps
  const handleFocus = () => $ref.current.focus()
  const handleAnswer = () => {
    if ($value !== "") {
      $setAnswered(true)
      $setCorrect(answer === $value)
    }
  }
  return (
    <section className={s("section")}>
      <h2 className={s("section-title")}>
        {name}
      </h2>
      <p className={s("section-content")}>{content}</p>
      <div className={s("section-prompt",
[
            $answered ?
$correct ? "correct" : "incorrect" : "unanswered"
        ]
      )} onClick={handleFocus}>
        <input type="text" className={s("section-input")} onChange={handleText} ref={$ref}/>
        <button onClick={handleAnswer} className={
          s("section-button", [
            "run",
            !$ready ? "inactive" : "active",
          ])
        }>{$answered && !$correct ? "Try Again" : "Run"}</button>
      </div>
    </section>
  )
}

export default RunnableSection

