import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ChallengeList from "./components/ChallengeList";
import axios from "axios";
import AddChallenge from "./components/AddChallenge";

function App() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    fetchChallenges();
  }, []);

   const fetchChallenges = async () => {
      try {
        const response = await axios.get("http://localhost:8080/challenges");
        setChallenges(response.data);
      } catch (error) {
         console.error("Error fetching details:",error)
      }
    };
    
  const handleChallengeAdded = () =>{
    fetchChallenges();
  }
  return (
    <>
      <h1>Monthly Challenges</h1>
      <AddChallenge onChallengeAdded={handleChallengeAdded}/>
      <ChallengeList challenges={challenges} />
    </>
  );
}

export default App;
