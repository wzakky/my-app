import React from 'react'
import Biodata from './Biodata';
import Coba2 from './Coba2';

export const mahasiswa2 = [
    {nama: 'budi', alamat: 'surabaya'},
    {nama: 'andi', alamat: 'madiun'},
    {nama: 'joko', alamat: 'jogja'},
    {nama: 'susi', alamat: 'bandung'},
  
  ]
const Coba3 = () => {
   const mahasiswa = ['budi', 'andi', 'joko', 'susi']
   const mahasiswa2 = [
       {nama: 'budi', alamat: 'surabaya'},
       {nama: 'andi', alamat: 'madiun'},
       {nama: 'joko', alamat: 'jogja'},
       {nama: 'susi', alamat: 'bandung'},
    
   ]
   const show = true
    return (
        <div>Coba 1
            <Biodata nama="Budi" alamat ="surabaya" umur={10}/>
            <hr />
            <Coba2 data={mahasiswa2} show={show}/>
            <ul>
                {mahasiswa.map((nama, index) => {
                    return <li key={index}>{nama}</li>
                })}
            </ul>
        </div>

    )
}
export default Coba3