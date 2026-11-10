import { useState } from 'react'
import './index.css'

function Strona_glowna_Logowanie() {
  return (
    <>
      <header>
        <h1>KOMUNIKATOR</h1>
      </header>
      <main>
        <section>
          <h1>LOGOWANIE</h1><br/>
          <p>NAZWA UŻYTKOWNIKA</p><input type='text'></input>
          <p>NAZWA EMAIL</p><input type='email'></input>
          <p>NAZWA HASŁA</p><input type='password'></input>
          <button>ZALOGUJ</button>
        </section>
      </main>
    </>
  )
}

export default Strona_glowna_Logowanie
