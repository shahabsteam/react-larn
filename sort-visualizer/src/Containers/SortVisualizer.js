import React, { Component } from "react";
import Bar from "../Components/Bar";
import Input from "../Components/Input";
import Button from "../Components/Button";

class SortVisualizer extends Component {
    insertionSort = () => {
        // An array of integers to sort.
        let copy = [34, 54, 12, 65, 67];
        for (let i = 1; i <= copy.length; i++) {
            for (let j = i - 1; j >= 0; j--) {
                if (copy[j + 1] < copy[j]) {
                    const temp = copy[j];
                    copy[j] = copy[j + 1];
                    copy[j + 1] = temp;
                } else {
                    break;
                }
            }
        }
    };

    render() {
        return (
            <div className={"visualizer-container"}>
                <div className={"array-container"}>
                    <Bar key={1} height={24} backgroundColor={"limegreen"} />
                    <Bar key={2} height={41} backgroundColor={"limegreen"} />
                    <Bar key={3} height={13} backgroundColor={"limegreen"} />
                    <Bar key={4} height={34} backgroundColor={"limegreen"} />
                    <Bar key={5} height={15} backgroundColor={"limegreen"} />
                </div>
                <div className={"input-container"}>
                    <div>
                        <Input
                            elementId={"interval"}
                            type="text"
                            width={"300px"}
                            placeholder={"Interval(ms) - default is 50ms"}
                        />
                    </div>
                    <div>
                        <Input
                            elementId={"array"}
                            type="text"
                            width={"600px"}
                            placeholder={"Numbers"}
                        />
                    </div>
                </div>
                <footer className="app-footer">
                    <Button elementId={"start"} text={"Insertion Sort"} />
                    <Button elementId={"clean"} text={"Clear"} />
                </footer>
            </div>
        );
    }
}

export default SortVisualizer;
