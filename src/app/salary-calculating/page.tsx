"use client"
import { useState } from 'react';
import { InputField } from '../components/InputField';


export default function Home() {
  const [gajiPokok, setGajiPokok] = useState('0');
  const [tunjangan, setTunjangan] = useState('0');
  const [kewajibanPokok, setKewajibanPokok] = useState('0');

  const IDR = (number: string) => {
    return Number(number.split('.').join(''))
  }

  const Total = (number: number) => {
    return Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number)
  }

  return (
    <div className='max-w-3xl mx-auto grid grid-cols-2 gap-5 my-10'>
      <div className='flex flex-col gap-3'>
        <InputField
          label="Gaji Pokok"
          value={gajiPokok.toString()}
          onChange={(e: any) => setGajiPokok(e.target.value)}
        />
        <InputField
          label="Tunjangan"
          value={tunjangan.toString()}
          onChange={(e: any) => setTunjangan(e.target.value)}
        />
        <InputField
          label="Kewajiban Pokok"
          value={kewajibanPokok}
          onChange={(e: any) => setKewajibanPokok(e.target.value)}
        />
      </div>

      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-medium'>Salary</h1>
        <p>Gaji Kotor : {Total(IDR(gajiPokok) + IDR(tunjangan))}</p>
        <p>Gaji Pokok : {Total(IDR(gajiPokok))}</p>
        <p>Gaji Bersih : {Total(IDR(gajiPokok) + IDR(tunjangan) - IDR(kewajibanPokok))}</p>
      </div>
    </div>
  )
}
