import React, { Component } from "react";
import Bar from "../Components/Bar";
import Input from "../Components/Input";
import Button from "../Components/Button";

class SortVisualizer extends Component {
    state={array:[],interval :0,InputString:'',green:null,blue:null,timeout:5000,status:[]}
     onChangeInput = (event)=>{
         const tempArr = event.target.value.split(" ");
        this.setState({InputString:event.target.value})
        this.setState({array :tempArr.filter((number,index)=>{
           
            return number !==''
        }) })

   
    }
    setColor = (number)=>{
        if(number==this.state.green){
            return 'green'
        }
        if(number==this.state.blue){
            return 'blue'
        }
        return 'limegreen'
    }
    Clear = (event)=>{
        this.setState({array : []});
        this.setState({InputString:''})

    }
    start = (event)=>{
       
        this.insertionSort();
    }
    insertionSort = () => {
        // An array of integers to sort.
        
        let copy = this.state.array;
        for (let i = 1; i <= copy.length; i++) {
            console.log('runninga')
            setTimeout(()=>{
               
                this.setState({blue:i})
                for (let j = i - 1; j >= 0; j--) {
                   
                        this.setState({green : j})
                        if (copy[j + 1] < copy[j]) {
                            const temp = copy[j];
                            copy[j] = copy[j + 1];
                            copy[j + 1] = temp;
                            this.setState({array:copy})
                        } else {
                            //break;
                        }
                  
                }
            },this.state.timeout)
     
        }
    };

    render() {
        /*
           <Bar key={1} height={24} backgroundColor={"limegreen"} />
                    <Bar key={2} height={41} backgroundColor={"limegreen"} />
                    <Bar key={3} height={13} backgroundColor={"limegreen"} />
                    <Bar key={4} height={34} backgroundColor={"limegreen"} />
                    <Bar key={5} height={15} backgroundColor={"limegreen"} />
                    /*/
        return (
            <div className={"visualizer-container"}>
                <div className={"array-container"}>
                 {
                     this.state.array.map((number,index)=>{
                            return <Bar key={index} height={number} backgroundColor={this.setColor(index)}/>
                     })
                 }
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
                            onChange={this.onChangeInput}
                            elementId={"array"}
                            type="text"
                            value={this.state.InputString}
                            width={"600px"}
                            placeholder={"Numbers"}
                        />
                    </div>
                </div>
                <footer className="app-footer">
                    <Button elementId={"start"} text={"Insertion Sort"} onClick={this.start} />
                    <Button elementId={"clean"} text={"Clear"} onClick={this.Clear} />
                </footer>
            </div>
        );
    }
}

export default SortVisualizer;
