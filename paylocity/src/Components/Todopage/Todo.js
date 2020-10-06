import React from 'react';


export default function ToDO() {
    const [userInput,setUserInput] = React.useState('');
    const [items, setItems] = React.useState([]);
    const [showList, setShowList] = React.useState('all');

    const addToList = (item) => {
        if(userInput !== ''){
            if(items.find(i=>i.name == userInput)){
                return
            }
            let itemObject = {
                name: userInput,
                type: 'active',
            }
            let newArray = [...items]
            newArray.unshift(itemObject)
            setItems(newArray)
            setUserInput('')
        }
    }

    const completed =(item) =>{
        if (item.type === 'active'){
            let newArray = [...items]
            let index = newArray.findIndex(i=>i.name === item.name)
            newArray[index].type = 'completed'
            setItems(newArray)
        }else {
            let newArray = [...items]
            let index = newArray.findIndex(i=>i.name === item.name)
            newArray[index].type = 'active'
            setItems(newArray)
        }
    }

    const clearCompleted = () =>{
        let newArray = [...items]
        let activeArray= []
        newArray.map(item=> item.type === 'active' ? activeArray.push(item):null)
        setItems(activeArray)
    }

    const deleteItem = (item) => {
        let newArray=[...items]
        let index = newArray.findIndex(i=>i.name === item.name)
        newArray.splice(index,1)
        setItems(newArray)
    }

    return(
        <div className="ui container">
            <div className="ui segments">
            <div style={{paddingTop:'2%',textAlign:'center'}}>
                <div style={{border:'double'}} className="ui center aligned header" >
                    <h1>ToDo</h1>
                </div>
                <div className="ui fluid input">
                <input
                    value={userInput}
                    onKeyDown={e=>e.key === 'Enter' ? addToList():null}
                    placeholder='What needs to be done...'
                    onChange={(e)=> {setUserInput(e.target.value)}} 
                />
                </div>
                <div className="ui divider"></div>
                </div>
            <div >
                {showList === 'all' ? (
                    <div>
                        <div className="ui divided list" style={{overflow:'auto',width:'auto', height:'550px'}}>
                            {items.filter(i=> i.type === 'active').map((item)=><div className="item"><input className="ui input" onClick={()=>completed(item)} checked={item.type === 'completed'} type="checkbox"/>{item.name} {item.type === 'active' ? <button onClickCapture={()=>deleteItem(item)} className="right floated content">x</button>:null}</div>)} 
                            {items.filter(i=> i.type === 'completed').map((item)=><div className="item"><input  onClick={()=>completed(item)} checked={item.type === 'completed'} type="checkbox"/>{item.name} {item.type === 'active' ? <button onClickCapture={()=>deleteItem(item)} className="right floated content">x</button>:null}</div>)}
                        </div>
                        <div style={{textAlign:'center'}}><button className="ui disabled button">All Tasks: {items.length}</button></div>
                    </div>
                ):null}
                {showList === 'active' ? (
                    <div >
                        <div className="ui divided list" style={{overflow:'auto',width:'auto', height:'550px'}}>
                            {items.filter(i=>i.type === 'active').map(item=><div className="item"><input className="ui input" onClick={()=>completed(item)} checked={item.type === 'completed'} type="checkbox" />{item.name} {item.type ==='active' ? <button onClickCapture={()=>deleteItem(item)} className="right floated content">x</button>:null}</div>)}
                        </div>
                        <div style={{textAlign:'center'}}><button className="ui disabled button">active Tasks: {items.filter(i=>i.type === 'active').length}</button></div>                   
                    </div>
                ):null}
                {showList === 'completed' ? (
                    <div >
                        <div className="ui divided list" style={{overflow:'auto',width:'auto', height:'550px'}}>
                            {items.filter(i=>i.type === 'completed').map(item=><div  className="item"><input onClick={()=>completed(item)} checked={item.type === 'completed'} type="checkbox" />{item.name} {item.type ==='active' ? <button onClickCapture={()=>deleteItem(item)} className="right floated content">x</button>:null}</div>)}
                        </div>
                        <div style={{textAlign:'center'}}><button className="ui disabled button">Completed Tasks: {items.filter(i=>i.type === 'completed').length}</button></div>
                    </div>
                ):null}
            </div>
            <div style={{textAlign:'center'}}>
                <div className="ui buttons">
                    <button className="ui small button" onClick={()=>setShowList('all')}>All</button>
                    <button className="ui small button" onClick={()=>setShowList('active')}>active</button>
                    <button className="ui small button" onClick={()=>setShowList('completed')}>completed</button>
                </div>
                <button className="ui small button" onClick={()=>clearCompleted()}>Clear Completed</button>
            </div>
            </div>
        </div>
    )
}