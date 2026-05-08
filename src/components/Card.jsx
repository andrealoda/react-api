export default function Card({actors, actresses}) {
    return (


        <>
            {actors.map(actor => (
                <div className="card" key={actor.id}>
                    <div className="image-wrapper">
                        <img src={actor.image} alt="actor" />
                    </div>
                    <div className="card-body">
                        <h2 className="name"> {actor.name}</h2>
                        <p className="details">
                            <span className="birth">{actor.birth_year}</span>
                            <span className="dot">•</span>
                            <span className="nationality">{actor.nationality}</span>
                        </p>
                        <p className="bio">
                            {actor.biography}
                        </p>
                        <div className="awards">
                            {actor.awards.map((award, i) => (
                               <span className="award-pill" key={i}>{award}</span>  
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            {actresses.map(actress => (
                <div className="card" key={actress.id}>
                    <div className="image-wrapper">
                        <img src={actress.image} alt="actress" />
                    </div>
                    <div className="card-body">
                        <h2 className="name"> {actress.name}</h2>
                        <p className="details">
                            <span className="birth">{actress.birth_year}</span>
                            <span className="dot">•</span>
                            <span className="nationality">{actress.nationality}</span>
                        </p>
                        <p className="bio">
                            {actress.biography}
                        </p>
                        <div className="awards">
                            {actress.awards.map((award, i) => (
                               <span className="award-pill" key={i}>{award}</span>  
                            ))}
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}