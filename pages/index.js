import React , {Component} from "react";
import lottery from "../Lottery"; // to fetch the abi file
import web3 from "../web3";

class Lottery extends Component {

    constructor(prop) {
        super(prop);
        this.state = {
            manager: "",
            participate_amount: "0.5",
            message: "",
            total_amount: ""
    }
}

async componentDidMount() {
    // get the Public address of the managers
    const manager = await lottery.methods.manager().call();
    console.log(manager);
    this.setState({manager: manager});
    const total_amount = await web3.eth.getBalance(Lottery.options.address) // or we can alse add directly address here
    this.setState({total_amount: total_amount})
}

    render() {
        return (
            <div>
                <h1>Total Lottery Pool is {this.state.total_amount}</h1>
                <form>
                    <input placeholder = "0.5"/>
                    <button type = "submit">Participate</button>
                </form>
                <hr/><br/><hr/>
                <p>The Manager of the Lottery Dapp is {this.state.manager}</p>
                <button>Pick Winner</button>
            </div>
        )
    }
}

export default Lottery;