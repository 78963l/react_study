import React, {useState} from 'react'
import './App.css';

function Header(props){
    return(
        <header>
            <h1><a href='/' onClick={(e)=>{
                e.preventDefault();
                props.onChangeMod();
            }}>
                {props.title}</a></h1>
        </header>
    )
}

function Nav(props){
    const lis = []

    for(let i=0; i < props.topic.length; i++){
        let t = props.topic[i];
        lis.push(<li key={t.id}>
            <a id={t.id} href={'/read/'+t.id} onClick={(e)=>{
                e.preventDefault();
                props.onChangeMod(e.target.id);
            }}>
            {t.title}</a>
            </li>)
    }

    return(
        <nav>
            <ol> {lis} </ol>
        </nav>
    )
}

function Article(props){
    return(
        <div>
            <h2>{props.title}</h2>
            {props.body}
        </div>
    )
}

function Chap3(){
    const topics = [
        {id:1, title:'html', body:'html is ...'},
        {id:2, title:'css', body:'css is ...'},
        {id:3, title:'js', body:'js is ...'}
    ]
    return(
        <div>
            <Header title="WEB" onChangeMod={()=>{alert('헤더클릭')}}/>
            <Nav topic={topics} onChangeMod={(id)=>{alert(id)}}/>
            <hr></hr>
            <Article title='Welcome' body='Welcome, WEB'/>
            <Article title='Hi' body='Hello, WEB'/>
        </div>
    )
}

export default Chap3