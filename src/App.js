import React, {Component} from 'react'
import './App.css'
// import LetsTryPopper from "./LetsTryPopper";
// import {TestContext, userContext} from "./TestContext"
import store from "./store/index"
import { addArticle } from "./actions/index"
import Post from "./Post"
import {Provider} from "react-redux"
import Articles from "./Articles"
import Form from "./Form"

class App extends Component {

    // constructor(prop){
    //     super(prop)
    //     this.state={
    //         autoCompteur:0
    //     }
    // }
    //
    // componentDidMount(){
    //     this.setState((prev)=>({
    //         autoCompteur: prev.autoCompteur+1
    //     }))
    //     this.setState((prev)=>({
    //         autoCompteur: prev.autoCompteur+1
    //     }))
    //     this.setState((prev)=>({
    //         autoCompteur: prev.autoCompteur+1
    //     }))
    //     this.setState((prev)=>({
    //         autoCompteur: prev.autoCompteur+1
    //     }))
    //     this.setState((prev)=>({
    //         autoCompteur: prev.autoCompteur+1
    //     }))
    //     this.setState((prev)=>({
    //         autoCompteur: prev.autoCompteur+1
    //     }))
    //     this.setState((prev)=>({
    //         autoCompteur: prev.autoCompteur+1
    //     }))
    // }

    /*
    constructor(props){
        super(props)
        this.state={typo:{message:'Hi', kikoo:"lol"}}
    }

    updateState=(event)=>{
        this.setState(prevState=> {
            return {typo:{...prevState.typo, message:event.currentTarget.value? event.currentTarget.value : ''}}
        })
    }

  render() {
    return (
      <div className="App">
          <div>
              <Middleware updateParent={this.updateState}/>
            <span>{this.state.typo.message}</span>
            <span>{this.state.typo.kikoo}</span>
          </div>
          <LetsTryPopper/>
      </div>
    );
  }
  */

    render() {
        // console.log(this.state.autoCompteur)
        return (
            <Provider store={store}>
                <div className="row mt-5">
                    <div className="col-md-4 offset-md-1">
                        <h2>Articles</h2>
                        <Articles />
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <h2>Add a new article</h2>
                        <Form />
                    </div>
                </div>
                <div className="col-md-4 offset-md-1">
                    <h2>API posts</h2>
                    <Post />
                </div>
            </Provider>
        )
    }

    // render() {
    //     console.log(this.state.autoCompteur)
    //     return (
    //         <TestContext>
    //             <div>
    //                 <userContext.Consumer>
    //                     {(context) => <span>kek = {context.nom}</span>}
    //                 </userContext.Consumer>
    //
    //                 <LetsTryPopper/>
    //             </div>
    //         </TestContext>
    //     )
    // }
}

export default App