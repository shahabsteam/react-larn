import React, { Component } from "react";
import Bar from "../Components/Bar";
import Input from "../Components/Input";
import Button from "../Components/Button";

class SortVisualizer extends Component {
    state={array:[],interval :50,InputString:''
    ,green:null,blue:null,status:true,tempArr:[],finished:true,message:'',id:''}
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
        this.setState({message :''})
        this.setState({finished:true,status:true,id:''})


    }
    play = ()=>{
 
    }
    start = (event)=>{
      
        this.insertionSort();
        this.play();
    }
  
    insertionSort = () => {
        // An array of integers to sort.
        
        let copy = this.state.array;
            
        var counter = 1;
        var interval1 = setInterval(()=>{
            if(counter<this.state.array.length){
                if(this.state.finished){
                   
                  
                   
                    counter++;
                    var j=counter-1;
                    this.setState({finished:false})
                    var interval2 = setInterval(()=>{
                        if(j>=0){
                            if(this.state.status){
                                        
                         this.setState({green : j})
                        
                         if (parseInt(copy[j + 1]) < parseInt(copy[j])) {
                             const temp = copy[j];
                             copy[j] = copy[j + 1];
                             copy[j + 1] = temp;
                             this.setState({blue : counter})
                         
                            this.setState({array:copy})
                         }else{
                            this.setState({blue : counter})
                         }
                         j--;
                        }else{
                            clearInterval(interval2)
                        }
                            }else{
                                this.setState({finished:true})
                                clearInterval(interval2)
                                this.setState({green:null})
                            }
                
                    },this.state.interval)
                }
            }else{
                this.setState({blue:null})
                clearInterval(interval1)
                this.setState({message : 'sort finished'})
                this.setState({status:false,id:'end-message'})
            }
        },this.state.interval)
        
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
                <div id={this.state.id}>{this.state.message}</div>
                <div className={"input-container"}>
                  
                    <div>
                        <Input
                        onChange={(event)=>{this.setState({interval :event.target.value})}}
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
