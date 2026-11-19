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
            <p>Jeżeli <b>NIE</b> posiadasz konta to możesz <p onClick={() => zmiania_zakladki("rejestruj")} className='rej-log'>Zarejestrować się~!</p></p>
          </section>
          <section className='Reklama_2'>
            Reklama
          </section>
        </main>
        <button onClick={() => zmiania_zakladki("gl_str")}>Temp button</button>
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
            <button className='guzik_log'>ZAREJESTRUJ</button><br/>
            <p>Jeżeli <b>JUŻ</b> posiadasz konto to możesz <p onClick={() => zmiania_zakladki("loguj")} className='rej-log'>Zalogować się~!</p></p>
          </section>
          <section className='Reklama_2'>
            Reklama
          </section>
        </main>
        <button onClick={() => zmiania_zakladki("gl_str")}>Temp button</button>
    </>
    )
  }
  function Glowna_strona() {
    return(
      <>
        <header>
          <h1>KOMUNIKATOR</h1>
        </header>
        <main>
          <section className='Menu_kom'>
            <section className='kontakty'>
              s
            </section>
            <section className='czat'>
              s
            </section>
          </section>
          
        </main>
        <button onClick={() => zmiania_zakladki("loguj")}>Temp button</button>
      </>
    )
  }

  const [zakladka , zmiania_zakladki] = useState("loguj");
  const zakladki = {
    loguj: Logowanie,
    rejestruj: Rejestracja,
    gl_str: Glowna_strona
  }

  return (
    <>
      {zakladki[zakladka]({zmiania_zakladki})}
    </>
  )


}
