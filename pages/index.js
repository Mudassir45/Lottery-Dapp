import React , {Component} from "react";

class lottery extends Component {
    render() {
        return (
            <div>
                <h1>Total Lottery Pool is 1000</h1>
                <form>
                    <input value = "0.5"/>
                    <button type = "submit">Participate</button>
                </form>
                <hr/><br/><hr/>
                <p>The Manager of the Lottery Dapp is </p>
                <button>Pick Winner</button>
            </div>
        )
    }
}

export default lottery;