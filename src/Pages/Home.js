import React,{useState} from 'react'
import data from '../csvjson.json';
import { useHistory } from "react-router-dom";
import './Home.css';




function Home() {
    const [playerName, setPlayerName] = useState('');
    let history = useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(playerName);
        history.push("/"+playerName);
    }

    return (
        
        
        <form onSubmit={handleSubmit}>
            <input list="playersName" value={playerName} type="text" placeholder="Search player" onChange={e => setPlayerName(e.target.value)} />
            <datalist id="playersName">
                {data.map((d, idx) => 
                    <option key={idx} value={d.Name} />
                )}
            </datalist>
            <button>Search</button>
        
        </form>
       
    )
}

export default Home;
