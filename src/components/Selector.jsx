export default function Selector ({setSelector}) {
    return (
        <div className="button-box">
            <button className="btn" onClick={() => setSelector('all')}>All</button>
            <button className="btn" onClick={() => setSelector('male')}>Male</button>
            <button className="btn" onClick={() => setSelector('female')}>Female</button>
        </div>
    )
}