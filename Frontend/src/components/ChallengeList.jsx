import axios from 'axios';

function ChallengeList ({challenges, onChallengeDeleted}){

    const handleDelete = async (id) => {
       console.log("Deleting challenge with ID:", id);
    
        try {
            const response = await axios.delete(`http://localhost:8080/challenges/${id}`)
            if(response.status == 200){
                onChallengeDeleted();
            }
        } catch (error) {
            console.error("Error deleting challenges",error);
        }

    }
    return (
        <div className="list-group">
            {challenges.map(challenge => (
                
                <div key={challenge.id}>
                    
                    <div></div>
                    <div className="list-group-item list-group-item-action " aria-current="true">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{challenge.month}</h5>
                        </div>                  
                    <p className="mb-1">{challenge.desc}</p>
                    <button className="btn btn-danger btn-sm" onClick={()=>{handleDelete(challenge.id)}}>Delete</button>
                    </div>
                </div>
            ))}
            
        </div>
    );
}

export default ChallengeList;