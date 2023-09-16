"use client"
import React, {useState} from 'react';
import axios from "axios";

export default function Manufacturer() {

    const [batchID, setBatchID] = useState();
    const [medName, setMedName] = useState('');
    const [sealOn, setSealOn] = useState(true);
    const [count, setCount] = useState();
    const handleSubmit = (e) =>{
        e.preventDefault()
        const data = {
            "batchID" : batchID,
            "medName" : medName,
            "sealOn" : sealOn,
            "count" : count
        }
        console.log(JSON.stringify(data))
        axios.get(`http://api.qrserver.com/v1/create-qr-code/?data=${JSON.stringify(data)}&size=200x200` , {responseType : "blob"}).then(res => {
            let reader = new window.FileReader();
            reader.readAsDataURL(res.data);
            reader.onload = function () {
                let imageDataUrl = reader.result;
                const headers = {
                    "accept": "application/json",
                    "content-type": "application/x-www-form-urlencoded",
                    "X-API-Key": `${process.env.NEXT_PUBLIC_VERBWIRE_KEY}`
                }
                const d = new FormData()
                d.set("fileUrl" , imageDataUrl)
                axios.post("https://api.verbwire.com/v1/nft/store/fileFromUrl" , d ,  {headers : headers}).then(res => console.log(res.data.ipfs_storage.ipfs_url))
            };
        })
    }
    return(
        <div className='dashboard'>
            <div id='content' >
                <form action={'/'} id='prod-form'>
                    <input type="number" placeholder='Batch ID' onChange={(e)=>setBatchID(e.target.value)} />
                    <input type="text" placeholder='Medicine Name' onChange={(e)=>setMedName(e.target.value)}/>
                    <input type="checkbox" placeholder='Seal on'onChange={(e)=> setSealOn(e.target.value)}/>
                    <label htmlFor='seal'>is sealed</label>
                    <input type="number" placeholder='Count' id='seal' onChange={(e => setCount(e.target.value))}/>
                    <button onClick={e => handleSubmit(e)}> SUBMIT</button>
                </form>
            </div>
        </div>
    )
}