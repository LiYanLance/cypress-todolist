import React,{Component} from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
export default class extends Component{
    render(){
        return(
            <div className="container">
                <h2 style={{"textAlign":"center", "textTransform": "uppercase"}}>todo list</h2>
                <AddTodo/>
                <VisibleTodoList/>
                <Footer/>
            </div>
        )
    }
}