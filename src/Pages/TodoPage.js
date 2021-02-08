import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Card} from '../Componenets/Card/card'

axios.defaults.baseURL = 'http://127.0.0.1:5000/'

export const TodoPage = () => {

    const [todo, setTodo] = useState([])

    
    useEffect(()=>{

        async function fetchData(){
            const request = await axios.get('/');
            console.log(request.datagit );
            return request;
        }
        fetchData()
        
        // fetch('/').then(response =>{
        //     if(response.ok){
        //         return response.json()
        //     }
        // }).then(data => console.log(data))
    },[])


    return(
        <Card/>
    )
}