import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId}){
    const [contact, setContact] = useState(null)
    useEffect(() =>{
        async function fetchContact(){
            try{
                const url = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/" + selectedContactId
                const response = await fetch(url)
                const data = await response.json()
                console.log("here", data)
                setContact(data)
            } catch(error){
                console.error(error)
            }
        }
        fetchContact()
    }, [])
    if(contact !== null){
        return (
            <>
             <table>
                <thead>
                    <tr>
                        <th colSpan="3">{contact.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    {Object.keys(contact)
                        .filter((key) => typeof contact[key] !== "object") 
                        .map((key) => (
                            <td key={key}>{key}</td>
                        ))}     
                    </tr>
                    <tr>
                    {Object.keys(contact)
                        .filter((key) => {
                            const value = contact[key];
                            return !(Array.isArray(value) || typeof value === "object"); 
                        })
                        .map((key) => (
                            <td key={key}>{contact[key]}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
            <button onClick={() => setSelectedContactId(null)}>Back to Home Page</button>
            </>
        )
    }
    return (
        <div>NO DATA</div>
    )
}