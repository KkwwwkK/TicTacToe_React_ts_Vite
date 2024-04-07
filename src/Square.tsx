type SquareProps = {
    value: string;
    handleClick: ()=>void
};

function Square(props:SquareProps) {
    return(
        <button className="square" onClick={props.handleClick}>
            {props.value}
        </button>
    )

}

export default Square;

// class Square extends React.Component<SquareProps> {
//
//     render() {
//         return (
//             <button className="square" onClick={this.props.handleClick}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }

// type State = {
//     value: string;
// }


// constructor(props: SquareProps) {
//     super(props);
//     this.state = {
//         value: this.props.value.toString()
//     };
// }
// handleClick = () => {
//     this.setState({
//         value: "X"
//     });
// };
