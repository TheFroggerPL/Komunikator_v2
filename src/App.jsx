import { useState } from 'react'
import './index.css'


export default function MyApp() {

  function Logowanie() {
    return (
    <>
        <header>
          <h1>KOMUNIKATOR</h1>
        </header>
        <main>
          <section className='Reklama_1'>
            Reklama
          </section>
          <section className='Menu_log'>
            <h1>LOGOWANIE</h1><br/>
            <p>NAZWA UŻYTKOWNIKA</p><input type='text'></input>
            <p>NAZWA HASŁA</p><input type='password'></input><br/>
            <button className='guzik_log'>ZALOGUJ</button><br/>
            <p>Jeżeli nie posiadasz konto to możesz <p onClick={() => zmiania_zakladki("rejestruj")}>Zarejestrować się~!</p></p>
          </section>
          <section className='Reklama_2'>
            Reklama
          </section>
        </main>
          
    </>
    )
  }
  function Rejestracja() {
    return (
    <>
        <header>
          <h1>KOMUNIKATOR</h1>
        </header>
        <main>
          <section className='Reklama_1'>
            Reklama
          </section>
          <section className='Menu_rej'>
            <h1>REJESTRACJA</h1><br/>
            <p>NAZWA UŻYTKOWNIKA</p><input type='text'></input>
            <p>NAZWA HASŁA</p><input type='password'></input><br/>
            <button className='guzik_log'>ZAREJESTRóJ</button><br/>
            <p>Jeżeli już posiadasz konto to możesz <p onClick={() => zmiania_zakladki("loguj")}>Zalogować się~!</p></p>
          </section>
          <section className='Reklama_2'>
            Reklama
          </section>
        </main>

    </>
    )
  }
  const [zakladka , zmiania_zakladki] = useState("loguj");
  const zakladki = {
    loguj: Logowanie,
    rejestruj: Rejestracja
  }

  return (
    <>
      {zakladki[zakladka]({zmiania_zakladki})}
    </>
  )


}
