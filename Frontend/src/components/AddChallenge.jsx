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
    <div className="card my-5">
      <div className="card-header">Add New Challenge</div>
      <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="month" className="form-label">Month</label>
          <input
            type="text"
            id="month"
            className="form-control"
            value={month}
            placeholder="e.g. January"
            onChange={(e) => setMonth(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="desc"
            className="form-control"
            value={desc}
            placeholder="Describe the challenge"
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
       </div>
    </div>
  );
}

export default AddChallenge;
