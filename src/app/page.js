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
      content: (
        <>
          Let's start by writing some basic addition:{' '}
          <code className={`madlib--inline`}>5 + 5</code>
        </>
      ),
      answer: '5 + 5',
    },
    {
      name: 'Subtraction',
      content: 'You probably know this!',
      answer: '10 - 100',
    },
    {
      name: 'Multiplication',
      content: 'You probably know this!',
      answer: '42 * 10',
    },
    {
      name: 'Division',
      content: 'You probably know this!',
      answer: '9 / 3',
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
