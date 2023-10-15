"use client"
import { useEffect, useState } from 'react';
import { InputField } from '../components/InputField';
import axios from 'axios';
import Image from 'next/image';


export default function Home() {
  const [meme, setMeme] = useState<any>({})
  const [generate, setGenerate] = useState(false)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get('https://api.memegen.link/templates/')
      .then((res: any) => {
        const datas = res.data
        const data: any = datas[Math.floor(Math.random() * datas.length)]
        setMeme(data.example.url)
        setLoading(false)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }, [generate])


  return (
    <div className='w-[90%] max-w-[1000px] mx-auto my-10 flex flex-col gap-3 '>
      <h2 className='text-2xl font-bold'>Meme Generator</h2>
      <div className='flex justify-center items-center'>
        <div onClick={() => setGenerate(!generate)} className='bg-black text-white px-4 py-2 rounded-lg cursor-pointer'>Generate Meme</div>
      </div>
      {loading && (
        <div className='text-center'>Loading...</div>
      )}
      {meme && (
        <div className='flex justify-center'>
        <Image src={meme} alt={meme} width={500} height={500} priority  /> 
        </div>
      )}
    </div>
  )
}
