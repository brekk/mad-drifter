"use client"

import { useState, useEffect } from "react"
import blem from "blem"
import "@/app/styles/runnable.scss"

export const RunnableSection = (sectionProps) => {
  const s = blem("Example")
  if (!sectionProps.name) return null

  const { name, content, question, answer } = sectionProps
  return (
    <section className={s("section")}>
      <h2 className={s("section-title")}>{name}</h2>
      <p className={s("section-content")}>{content}</p>
      <strong className={s("section-question")}>{question}</strong>
      <input type="text" className={s("section-prompt")} />
      <button className={s("section-button", ["run"])}>Run</button>
    </section>
  )
}

export default RunnableSection

