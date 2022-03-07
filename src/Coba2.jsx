import React from 'react'
import { Biodata2 } from './Biodata'

export default function Coba2( {data, show}) {
  console.log(data);
  return (
    <div>Coba2
        <Biodata2 />
        {show? (
            <ol>
                {data.map((value, index)=>{
                    return <li key={index}>{value.nama} {value.alamat}</li>
                })}
            </ol>
            ) : (
              <div>Show is {show? 'true' : 'false'}</div>
          )}
    </div>
  )
}
