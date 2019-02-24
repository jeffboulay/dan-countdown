import React, { Component } from "react";
import "./App.css";
import Countdown from "./components/Countdown";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Dan Countdown</h1>
                <Countdown
                    description="Dan moves to texas"
                    date="2019, 3, 23"
                />
                <Countdown
                    description="Dan gives his notice"
                    date="2019, 2, 28"
                />
                <Countdown
                    description="Dan's last day at Priceline"
                    date="2019, 3, 14"
                />
                <Countdown description="Road Trip!" date="2019, 3, 20" />
            </div>
        );
    }
}

export default App;
