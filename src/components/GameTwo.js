const GameTwo = (props) => {

    const gameTwo = props.gameTwo;

    return(
        <div className="gameTwo">
        {gameTwo.map((item) => (
            <div className="img-game-con" key={item.id}>
                <img src={item.backgroundImg} alt="" />
                <div className="overlay">

                    <div className="game-info" >
                        <select className="form-select">
                            <option defaultValue> Open this select menu </option>
                            <option value="1"> One </option>
                            <option value="2"> Two </option>
                            <option value="3"> Three </option>
                        </select>

                        <h4>{item.name}</h4>
                        <p>Rating: {item.esrbRating}</p>
                        <p>Last Updated: {item.lastUpdated}</p>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}

export default GameTwo;