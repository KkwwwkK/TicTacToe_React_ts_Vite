import React from 'react';
import Square from './Square';

type Props = {
    squares: string[],
    handleClick: (i:number)=> void
};


class Board extends React.Component<Props>{

    renderSquare(i: number) {
        return <Square value={this.props.squares[i]}
                       handleClick={()=> this.props.handleClick(i)}/>;
    }
    render() {

        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;


// type State = {
//     squares: string[],
//     xIsNext: boolean
// }


// constructor(props: Props) {
//     super(props);
//     this.state = {
//         squares: Array(9).fill(null),
//         xIsNext: true
//     }
// }



// const status = 'Next player: ' + this.state.xIsNext ? "X" : "O";
// const winner = this.calculateWinner(this.state.squares);
// let status: string | null;
// if (winner) {
//     status = 'Winner: ' + winner;
// } else {
//     status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
// }
