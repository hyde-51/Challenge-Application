
function ChallengeList ({challenges}){
    return (
        <div>
            {challenges.map(challenge => (
                <div key={challenge.id}>
                    {challenge.month}
                    <p>{challenge.desc}</p>
                    
                </div>
            ))}
            
        </div>
    );
}

export default ChallengeList;