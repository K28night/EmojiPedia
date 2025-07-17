import React from "react";
import Emoji from "./Emoji"
import emojipedia from "../emojipedia"
import { useState, useEffect } from "react";

function App() {
  const [search,setSearch]=useState("")
  const [filteredEmojis, setFilteredEmojis] = useState(emojipedia);

     useEffect(() => {
    // This runs whenever `searchTerm` changes
    const results = emojipedia.filter((emoji) =>
      emoji.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredEmojis(results);
  }, [search]); // 👈 Dependency array
  
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <input type="text" name="emoji" value={search} id="" placeholder="Enter emoji to search" onChange={(e)=>setSearch(e.target.value)}/>
      <dl className="dictionary">
       
        {filteredEmojis.map((item,index)=>
        <Emoji 
        key={index}
        name={item.name}  
        emoji={item.emoji} 
        meaning={item.meaning}/>
        )
      }
        
        
      </dl>
    </div>
  );
}

export default App;
