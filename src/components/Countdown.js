import React, { Component } from "react";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
export default class Countdown extends Component {
    componentWillMount() {
        const { date } = this.props;
        const daysFrom = distanceInWordsToNow(new Date(date));
        console.log(daysFrom);
        this.setState({ daysFrom: daysFrom });
    }
    render() {
        const { description } = this.props;
        return (
            <div>
                <h1 className="days"> {this.state.daysFrom}</h1>
                <h2> until {description}</h2>
            </div>
        );
    }
}
