import React from 'react';
import FormList from '../form-list/form-list';
import FormListFilter from "../form-list-filter/form-list-filter";
import FormAdd from "../form-add/form-add";
import './app.css'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{task_name:'2156', firstname:'dfsf', secondname:'ytur', email:'tuyru', deadeline:'1', description:'jhmbn', id: Math.random()},
            {task_name:'dddddd', firstname:'dfsf', secondname:'ytur', email:'tuyru', deadeline:'48', description:'jhmbn', id: Math.random()},
            {task_name:'gdfgd', firstname:'dfsf', secondname:'ytur', email:'tuyru', deadeline:'3', description:'jhmbn', id: Math.random()}],
            test: {},
            isFormVisible: false,
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.changeItem = this.changeItem.bind(this);
        this.addNewForm = this.addNewForm.bind(this);
        this.onChangeAdd = this.onChangeAdd.bind(this);
        this.sortShort = this.sortShort.bind(this);
        this.sortLong = this.sortLong.bind(this);
    }

    deleteItem (id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];
            return {
                data : newArr,
            }
        })
    }

    changeItem (id) {
        this.setState(({data}) => {
            console.log(id)
            const dataToChange = {...data.find(elem => elem.id === id)};
            console.log(dataToChange)
            return {
                test: dataToChange || {},
                isFormVisible: true,
            }
        })
    }

    addNewForm () {

        this.setState({
            isFormVisible: false,
        })

        this.setState(() => {
            return {
                test: {},
                isFormVisible: true,
            }
        })
    }

    onChangeAdd (data) {
        if (data.id) {
            const index = this.state.data.findIndex(elem => elem.id === data.id)
            const before = this.state.data.slice(0, index);
            const after = this.state.data.slice(index + 1);
            
            const newArr = [...before, data, ...after];
            this.setState({
                data : newArr,
                isFormVisible: false, 
            })
        } else {
            const newArr = [...this.state.data, {...data, id: Math.random()}];
            this.setState({
                data : newArr,
                isFormVisible: false,
            })
        }
    }

    sortShort () {
        const sortedData = [...this.state.data].sort((item, nextitem) => {
            if (parseInt(item.deadeline) > parseInt(nextitem.deadeline)) {
                return 1
            } else {
                return -1
            }
        })
        this.setState({
            data : sortedData
        })
        
    }

    sortLong () {
        const sortedData = [...this.state.data].sort((item, nextitem) => {
            if (parseInt(item.deadeline) < parseInt(nextitem.deadeline)) {
                return 1
            } else {
                return -1
            }
        })
        this.setState({
            data : sortedData
        })
    }


    render () {
        return (
            <div className='app'>
                <FormListFilter
                    addNewForm={this.addNewForm}
                    sortShort={this.sortShort}
                    sortLong={this.sortLong}
                />
                <FormList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onChange={this.changeItem}
                />
                {
                    this.state.isFormVisible 
                        ? <FormAdd onChangeAdd={this.onChangeAdd} data={this.state.test}/> 
                        : null
                }
            </div>
        )
    }    

}
