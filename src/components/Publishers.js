const Publishers = (props) => {

    const totalPublishers = props.totalPublishers;
    
    return(
        <div className="totalPublishers">
            <h3> Publishers </h3>
        <h1> {totalPublishers} Game Publishers </h1>
        </div>
    )
}

export default Publishers;