const GameOne = (props) => {

    const gameOne = props.gameOne;
    // const genresOne = props.genresOne;
    // console.log(genresOne)

    return(
        <div className="gameOne">
        {gameOne.map((item) => (
            <div className="img-game-con" key={item.id}>
                <img src={item.backgroundImg} alt="" />
                <div className="overlay">

                    <div className="game-info" >
                        <select className="form-select">
                            <option>Wee</option>
                        </select>

                        <h4>{item.name}</h4>
                        {/* <p>Genres: {genresOne} </p> */}
                        <p>Rating: {item.esrbRating}</p>
                        <p>Last Updated: {item.lastUpdated}</p>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}

export default GameOne;