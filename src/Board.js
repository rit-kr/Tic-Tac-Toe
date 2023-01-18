function Board(props){

    return(
        <>
            {/* {
                props.winner && <div>Winner is {props.winner}</div>
            } */}
            <div className="board flex wrap">
            {
                props.currentState.map((square,i) => {
                    return(
                        <div className="square flex-33 center"  
                        onClick={() =>{props.handlePlayerChange(i)}} key={i}> {square}</div>
                    )
                })
            }
            </div>
        </>
    )
}

export default Board;