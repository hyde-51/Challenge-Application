import { useState } from "react";
import axios from "axios";

function AddChallenge({onChallengeAdded}) {
  const [month, setMonth] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
        await axios.post('http://localhost:8080/challenges',{month,desc})
        setMonth('')
        setDesc('')
        onChallengeAdded();
    } catch (error) {
        console.error("Error adding challenges",error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="month">Month</label>
          <input
            type="text"
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default AddChallenge;
