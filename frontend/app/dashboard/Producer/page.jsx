import React from 'react';
import Header from "@/app/dashboard/Distributor/header";


export default function Manufacturer() {
    return(
        <div className='dashboard'>
            <Header />
            <div id='content'>
                <form action="frontend/app/dashboard/Distributor" id='prod-form'>
                    <input type="number" aria-label='Batch ID'/>
                    <input type="text" aria-label='Medicine Name'/>
                    <input type="radio" aria-label='Seal on'/>
                    <input type="number" aria-label='Count'/>
                    <button type='submit'> SUBMIT</button>
                </form>
            </div>
        </div>
    )
}