const Playtime = (props) => {

    const totalPlaytime = props.totalPlaytime;
    
    return(
        <div className="totalPlaytime">
            <h3> Playtime </h3>
            <h1> {totalPlaytime} hours </h1>
        </div>
    )
}

export default Playtime;