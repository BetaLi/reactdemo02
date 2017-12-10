import React, { Component } from 'react';
//eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
//eslint-disable-next-line
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';



class App extends Component {





    // constructor(props){
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    // handleClick(){
    //     this.textInput.focus();
    // }
    // render (){
    //     return (
    //         <div>
    //             <input ref={input => this.textInput = input}/>
    //             <Button raised color={'primary'} onClick={this.handleClick}>Focus the input</Button>
    //         </div>
    //     )
    // }
    //


// render(){
//     let textInput = null;
//     function handleClick(){
//         textInput.focus();
//     }
//     return (
//         <div>
//             <input type={'text'} ref={input=>textInput = input}/>
//             <Button raised color={'primary'} value={'Focus on the input'} onClick={handleClick}>Focus on the input</Button>
//         </div>
//     )
// }








//PropTypes类型检查
//     render(){
//         function Greeting(props) {
//             return (
//                 <div>Hello {props.name}</div>
//             )
//         }
//         Greeting.propTypes={
//             name: PropTypes.string
//         };
//         Greeting.defaultProps={
//             name:'Stranger'
//         };
//         return (
//             <Greeting name={'Flash'}/>
//         )
//     }




    // render(){
    //     function Repeat(props){
    //         const item=[];
    //         for(let i =0; i<props.number;i++){
    //             item.push(props.children(i));
    //         }
    //         return (
    //             <div>{item}</div>
    //         )
    //     }
    //     function List(){
    //         return (
    //             <diV>
    //                 <Repeat number="10">
    //                     {(index)=><div key={index}>This is item {index} in List.</div>}
    //                 </Repeat>
    //             </diV>
    //         )
    //     }
    //     return (
    //         <div><List/></div>
    //     )
    // }




// render(){
//     const props = {firstName:'Mr', lastName:"li"}
//     const Greeting = (props)=>{
//         return (
//             <div>
//                 {props.firstName}.{props.lastName}
//             </div>
//         )
//     };
//     return (
//         <div>
//             <Greeting {...props}/>
//         </div>
//     )
// }




    // constructor(props){
    //     super(props);
    //     this.state ={
    //         isGoing:true,
    //         number:2,
    //     };
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    // handleChange(e){
    //     const target = e.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    //     this.setState({
    //         [name]:value,
    //     })
    // }
    // handleSubmit(e){
    //     e.preventDefault();
    //     alert('is Going:'+this.state.isGoing+'     Now number of gust:'+this.state.number);
    // }
    // render(){
    //     return (
    //         <form onSubmit={this.handleSubmit}>
    //             <label>is Going:<input type="checkbox" value={this.state.isGoing} name="isGoing" onChange={this.handleChange}/></label>
    //             <br/>
    //             <label>Number of Gest:<input type="text" value={this.state.number} name="number" onChange={this.handleChange}/></label>
    //             <input type="submit"/>
    //         </form>
    //     )
    // }









    // constructor(props){
    //     super(props);
    //     this.state={
    //         value:'Please write an essay about your favorite DOM element.',
    //     };
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     this.handleChange = this.handleChange.bind(this);
    // }
    // handleSubmit(e){
    //     alert('Name is submited. Name：'+this.state.value);
    // }
    // handleChange(e){
    //     this.setState({
    //         value:e.target.value.toUpperCase(),
    //     })
    // }
    // render(){
    //     return (
    //         <form onSubmit={this.handleSubmit}>
    //             <label>Name:<textarea value={this.state.value} onChange={this.handleChange}/></label>
    //             <input type="submit"/>
    //             <select>
    //                 <option value="flash">Flash</option>
    //                 <option selected value="arrow">Arrow</option>
    //                 <option value="supergirl">SuperGirl</option>
    //             </select>
    //         </form>
    //     )
    // }







    // render(){
    //     const MailBox = function (props){
    //         const unreadMessage = props.message;
    //         return (
    //             <div>
    //                 <h1>MailBox</h1>
    //                 {unreadMessage.length>0 && <h2>
    //                 you have {unreadMessage.length} unread message.
    //             </h2>}
    //             </div>
    //         )
    //     };
    //     const message = ['Jane','Flash','Arrow','superGirl'];
    //     return(
    //         <MailBox message={message}/>
    //     )
    // }






    // constructor(props){
    //   super(props);
    //   this.state={
    //     isLoggedIn: false,
    //   };
    //   this.handleLoggIn = this.handleLoggIn.bind(this);
    //   this.handleLoggOut = this.handleLoggOut.bind(this);
    // }
    // handleLoggIn(){
    //   this.setState({isLoggedIn:true});
    // }
    // handleLoggOut(){
    //   this.setState({isLoggedIn:false});
    // }
    //
    // render() {
    //     const Greeting = function (props) {
    //         const isLoggedIn = props.isLoggedIn;
    //         if (isLoggedIn) {
    //             return (
    //                 <div>
    //                   Welcome back!
    //                 </div>
    //             )
    //         } else {
    //             return (
    //                 <div>
    //                   Please Sign in.
    //                 </div>
    //             )
    //         }
    //     };
    //     const LoggIn = function (props) {
    //         return (
    //             <div>
    //               <Button raised color="primary" onClick={props.onClick}>LoggIn</Button>
    //             </div>
    //         )
    //     };
    //     const LoggOut = function (props) {
    //         return (
    //             <div>
    //               <Button raised color="primary" onClick={props.onClick}>LoggOut</Button>
    //             </div>
    //         )
    //     };
    //
    //     const isLoggedIn = this.state.isLoggedIn;
    //     let button = null;
    //     if(isLoggedIn){
    //       button = <LoggOut onClick={this.handleLoggOut}/>
    //     }else{
    //       button = <LoggIn onClick={this.handleLoggIn}/>
    //     }
    //     return (
    //         <div><Greeting isLoggedIn={isLoggedIn}/>{button}</div>
    //     )
    // }
}

export default App;
