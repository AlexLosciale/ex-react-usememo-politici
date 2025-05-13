function PoliticiansList() {
    const [politicians, setPoliticians] = React.useState([]);

    React.useEffect(() => {
        fetch("https://boolean-spec-frontend.vercel.app/freetestapi/politicians")
            .then((res) => res.json())
            .then((data) => setPoliticians(data))
            .catch((err) => console.error("Errore nel caricamento dei dati:", err));
    }, []);

    return (
        <div>
            <h1>Politici</h1>
            <div className="politicians-container">
                {politicians.map((p) => (
                    <div key={p.id} className="card">
                        <img src={p.image} alt={p.name} />
                        <h2>{p.name}</h2>
                        <p className="position">{p.position}</p>
                        <p>{p.biography}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

ReactDOM.render(<PoliticiansList />, document.getElementById("root"));