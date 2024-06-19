import React from 'react';
export default class Home extends React.Component{
    render(){
        return(
        <>
        <h1>HomePage</h1>
        <a href="./login">Login Page</a><br />
        <a href="./signup">Signup Page</a><br />
        <a href="./profile">Profile Page</a>
        </>
        )
    }
}