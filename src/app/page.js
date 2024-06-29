import Image from 'next/image'
import './styles/page.scss'
import Logo from '@assets/logo.svg'
import blem from 'blem'
import RunnableExample from './views/RunnableExample'

const RUNNABLE_EXAMPLE = {
  title: 'Basic Arithmetic',
  intro: (
    <>
      Here are some simple expressions you can start to play with in the REPL
      before we set up a more serious <a href="#">programming environment</a>.
    </>
  ),
  sections: [
    {
      name: 'Addition',
      content: 'You probably know this!',
      question: '5 + 5',
      answer: '10',
    },
    {
      name: 'Subtraction',
      content: 'You probably know this!',
      question: '10 - 100',
      answer: '-90',
    },
    {
      name: 'Multiplication',
      content: 'You probably know this!',
      question: '42 * 10',
      answer: '420',
    },
    {
      name: 'Division',
      content: 'You probably know this!',
      question: '9 / 6',
      answer: '1.5',
    },
  ],
}

export default function Home() {
  const s = blem('App')
  return (
    <main className={s()}>
      <Logo className={s('logo')} />
      <RunnableExample {...RUNNABLE_EXAMPLE} />
    </main>
  )
}
