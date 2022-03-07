import React from 'react'
import { mahasiswa2 } from './Coba'

export default function Biodata(props) {
    const {nama, alamat, umur} = props
    console.log(props)
    return (
    <div>Biodata 1 {nama} {alamat} {umur}</div>
  )
}
export function Biodata2() {
    console.log('biodata', mahasiswa2);
    return (
        <div>Biodata 2</div>
    )
    
}

