import { useEffect, useState } from 'react'
import './index.css'
import { supabase } from './lib/supabaseClient'


export default function MyApp() {

  function Logowanie() {
    return (
    <>
      {!user?(
        <div>
          <header>
            <h1>KOMUNIKATOR</h1>
          </header>
          <main>
            <section className='Reklama_1'>
              Reklama
            </section>
            <section className='Menu_log'>
              <h1>LOGOWANIE</h1><br/>
              <p>EMAIL</p><input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
              <p>NAZWA HASŁA</p><input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input><br/>
              <button className='guzik_log' onClick={logIn} disabled={loading || !email || !password}>ZALOGUJ</button><br/>
              <p>Jeżeli <b>NIE</b> posiadasz konta to możesz <p onClick={() => zmiania_zakladki("rejestruj")} className='rej-log'>Zarejestrować się~!</p></p>
              {error && <p style={{ color:"red"}}>{error}</p>}
              {loading?"Chwileczkę . . . ": ""}
            </section>
            <section className='Reklama_2'>
              Reklama
            </section>
          </main>
        </div>
      ):(Glowna_strona())}
        
    </>
    )
  }
  function Rejestracja() {
    return (
    <>
      {!user?(
        <div>
          <header>
          <h1>KOMUNIKATOR</h1>
        </header>
        <main>
          <section className='Reklama_1'>
            Reklama
          </section>
          <section className='Menu_rej'>
            <h1>REJESTRACJA</h1><br/>
            <p>NAZWA UŻYTKOWNIKA</p><input type='text' value={username} onChange={e => setUsername(e.target.value)}></input>
            <p>EMAIL</p><input type='text' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <p>NAZWA HASŁA</p><input type='password' value={password} onChange={e => setPassword(e.target.value)}></input><br/>
            <button className='guzik_log' onClick={signUp} disabled={loading || !email || !password}>ZAREJESTRUJ </button><br/>
            <p>Jeżeli <b>JUŻ</b> posiadasz konto to możesz <p onClick={() => zmiania_zakladki("loguj")} className='rej-log'>Zalogować się~!</p></p>
            {error && <p style={{ color:"red"}}>{error}</p>}
            {loading?"Chwileczkę . . . ": ""}
          </section>
          <section className='Reklama_2'>
            Reklama
          </section>
        </main>
        </div>
      ):(Glowna_strona())}
    
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
              <section className='znajomi_1'>
                <h2>ZNAJOMI</h2>
              </section>
              <section className='znajomi_2'>
                <section className='znajomi_2-5' id='kontakty'>lalala</section>
              </section>
              <section className='znajomi_3'>
                <p style={{ fontWeight: 'bold' , fontSize: '25px'}}>DODAJ ZNAJOMEGO</p>
                <p>Nazwa użytkownika</p><input type='text'></input><br/>
                <button>DODAJ</button>
              </section>
            </section>
            <section className='czat'>
              s
            </section>
          </section>
          
        </main>
        <button onClick={logout} disabled={loading }>{loading?"Chwileczkę . . . ": "WYLOGUJ"}</button>
      </>
    )
  }

  const [zakladka , zmiania_zakladki] = useState("rejestruj");
  const zakladki = {
    loguj: Logowanie,
    rejestruj: Rejestracja
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const [notes, setNotes] = useState([])

  const signUp = async()=> {
    setError("");
    setLoading(true);
    const {data, error} = await supabase.auth.signUp({email, password});
    setLoading(false);

    if (error) return setError(error.message);
    setUser(data.user ?? null);
  }

  const logIn = async()=> {
    setError("");
    setLoading(true);
    const {data, error} = await supabase.auth.signInWithPassword({email, password});
    setLoading(false);

    if (error) return setError(error.message);

    setUser(data.user ?? null);
  }

  const logout = async()=> {
    setError("");
    setLoading(true);
    const {data, error} = await supabase.auth.signOut({email, password});
    setLoading(false);

    if (error) return setError(error.message);

    setUser(data.user ?? null);
  }

  useEffect(()=> {
    const fetchNotes = async () => {
      let {data, error} = await supabase
      .from('notes')
      .select('*')
      if (error) {
        console.log('Error fetching notes:', error)
      } else {
        setNotes(data)
      }
    }
    fetchNotes()

    const init = async ()=> {
      const {data: {session}} = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };
    init();

    const {data: {subscription}} =
      supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
      });
      return () => subscription.unsubscribe();

    
  }, []);

  return (
    <>
      {zakladki[zakladka]({zmiania_zakladki})}
      <div>
        <h1>notes</h1>
        {notes.map((note) => (
          <div key={note.id} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
          </div>
        ))}
      </div>
    </>
  );

{/*Brochacho można typ array do tabelki w bazie danych O_O*/}
}
