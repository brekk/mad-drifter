"use client"
import Image from "next/image"
import PrevArrow from "@assets/arrow-left.svg"
import NextArrow from "@assets/arrow-right.svg"

import { useState, useEffect } from "react"
import blem from "blem"
import { RunnableSection } from "@/app/views/RunnableSection"

const RunnableExample = ({ title, intro, sections = [] }) => {
  const s = blem("Example")
  const [$section, $setSection] = useState(0)
  const $prevActive = $section > 0
  const $nextActive = $section <= sections.length

  return (
    <article className={s()}>
      <header className={s("header")}>
      <h1 className={s('title')}>{title}</h1>
      </header>

      <p className={s("intro")}>{intro}</p> 
      <RunnableSection {...(sections[$section] || {})} />
      <menu className={s("nav")}>
        <li className={s('nav-item')}>
          <div className={s("nav-button", ["prev", $prevActive ? "active" : "inactive"])}>
          <PrevArrow className={s("icon", ["prev"])} /> 

          </div>
        </li>
        <li className={s('nav-item')}>
          <div className={s("nav-button", ["next", $nextActive ? "active" : "inactive"])}>
          <NextArrow className={s("icon", ["prev"])} /> 
          </div>
        </li>
      </menu>
    </article>
  )
}

export default RunnableExample
