import React, {Component} from "react";
import Bar from '../Components/Bar';
import Input from '../Components/Input';
import zxcvbn from 'zxcvbn';

class Password extends Component {
	state={value:'',suggestion:'',result:'',bgColor:'',division:0,score:0}
	inputRef = React.createRef();
    render() {
		
		const ok = (e)=>{
	
			this.setState({division:700/5})
			const check = zxcvbn(e.target.value)
			const score =check.score
			this.setState({score:check.score})
			this.setState({result:this.props.strength[score].text})
			this.setState({bgColor:this.props.strength[score].bgColor})
			this.setState({suggestion:check.feedback.suggestions[0]})
		this.setState({value : e.target.value})
	}
        return (
        
		   <div ref={this.inputRef} >
		  
		   <Input  onChange={ok} value={this.state.value} >
				 
		   </Input>
		   <Bar width={this.state.division*(this.state.score+1)}  height={5} bgColor={this.state.bgColor}/>
		   <div id ='result'>{this.state.result} </div>
		   <div id='suggestion'>{this.state.suggestion}</div>
		   </div>
        )
    }
	componentDidUpdate(prevProps) {
		
	//console.log(this.state.division*(this.state.score),this.inputRef.current )
	}
	


}

export default Password;