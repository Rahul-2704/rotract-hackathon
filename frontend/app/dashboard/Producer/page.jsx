"use client"
import React, {useState} from 'react';


export default function Manufacturer() {

    const [batchID, setBatchID] = useState();
    const [medName, setMedName] = useState('');
    const [sealOn, setSealOn] = useState(true);
    const [count, setCount] = useState();

    return(
        <div className='dashboard'>
            <div id='content' >
                <form action={'/'} id='prod-form'>
                    <input type="number" placeholder='Batch ID' onChange={(e)=>setBatchID(e.target.value)} />
                    <input type="text" placeholder='Medicine Name' onChange={(e)=>setMedName(e.target.value)}/>
                    <input type="checkbox" placeholder='Seal on'onChange={(e)=> setSealOn(e.target.value)}/>
                    <label htmlFor='seal'>is sealed</label>
                    <input type="number" placeholder='Count' id='seal' onChange={(e => setCount(e.target.value))}/>
                    <button type='submit'> SUBMIT</button>
                </form>
            </div>
        </div>
    )
}