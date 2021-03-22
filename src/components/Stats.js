import useStats from "./useStats"
function Stats({url}) {
    const { stats, error, loading }= useStats(url);
    if (loading) return <h2>loading ...</h2>;
    if (error) return <h2>error occured!!</h2>;
    return (
        <section>
            <div className = "confirmed-case">
                <h2>CONFIRMED CASES</h2>
                <h2>{stats.confirmed.value}</h2>
            </div>
            <div className="death-case">
            <h2>DEATH CASES</h2>
            <h2>{stats.deaths.value}</h2>
            </div>
            <div className="recovery-case">
            <h2>RECOVERED CASES</h2>
            <h2>{stats.recovered.value}</h2>
            </div>
        </section>
        
    );
}
export default Stats;