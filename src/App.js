import React,{Component} from 'react';
import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import FormGroup from './components/FormGroup'

class App extends Component {
  state={
    Result:false,
    Weight:20,
    Height:20,
   
  };
  render() {
   const handleChange=e=>{
     this.setState({
       [e.target.name]:e.target.value
     });
     
    
   }
   const handleSubmit=e=>{
     e.preventDefault();
    this.setState({
      Result:!this.state.Result
    })
     
   }
   function calc(h,w){
     return Math.round((10000*w/(h*h))).toFixed(2);
   }
    return (
      <div className="App">
     <Header dark={true} className="justify-content-center">BMI Calculator</Header>
     {this.state.Result?(
     <Card Header="You Result" className="text-center">
           <form onSubmit={handleSubmit}  className="text-left">
            <h1>{`You BMI is ${calc(this.state.Height,this.state.Weight)}`}</h1>
           <button type="submit" className="btn btn-primary">Calucate Again</button>
           </form>
      </Card>)
      :(
        <div className="container">
        <div className="row">
          <div className="col-12">
            <Card Header={"Enter your basic info"} className="text-center">
             <form onSubmit={handleSubmit} className="text-left">
             {["Weight","Height"].map((e)=> (
                 <FormGroup 
                 Type='number'
                  Label={e==="Weight"?"Weight in Kg":"Height in Cm"}
                  key={e} 
                  Id={e}
                  min={20}
                  max={300}
                  value={this.state.e}
                  onChange={handleChange}
                  />
              ) )}
              <button type="submit" className="btn btn-primary">Calucate BMI</button>
             </form>
             
            </Card>

            
          </div>
        </div>
      </div>
      )}
      
      </div>
    )
  }
}

export default App;

