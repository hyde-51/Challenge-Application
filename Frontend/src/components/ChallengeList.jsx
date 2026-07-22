
function ChallengeList ({challenges}){
    return (
        <div className="list-group">
            {challenges.map(challenge => (
                <div key={challenge.id}>
                    <a href="#" class="list-group-item list-group-item-action " aria-current="true">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{challenge.month}</h5>
                        </div>                  
                    <p className="mb-1">{challenge.desc}</p>
                    </a>
                </div>
            ))}
            
        </div>
    );
}

export default ChallengeList;