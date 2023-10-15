"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';

const CurrencyData = ['USD', 'IDR', 'EUR', 'GBP', 'CAD'];

export default function Home() {
  const [currency, setCurrency] = useState<any>({
    USD: 0,
    IDR: 0,
    EUR: 0,
    GBP: 0,
    CAD: 0,
  });
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('USD');
  const [fromAmount, setFromAmount] = useState<any>(0);
  const [toAmount, setToAmount] = useState<any>(0);

  useEffect(() => {
    axios
      .get(
        `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_orcOQk0O6dsmDAGgr83g0QHRzxJRavKc7iQ4vtsv&currencies=EUR,USD,CAD,GBP,IDR${
          selectedCurrency ? '&base_currency=' + selectedCurrency : ''
        }`
      )
      .then((res) => {
        setCurrency(res.data.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [selectedCurrency]);

  useEffect(() => {
    setToAmount(0);
    handleConversion();
      // eslint-disable-next-line
  }, [targetCurrency]);

  const handleConversion = () => {
    if (targetCurrency in currency) {
      const convertedValue = currency[targetCurrency];
      const numericValue = Number(fromAmount.toString().replace(/[.,]/g, ''));
      const result = (numericValue * convertedValue).toFixed(2); 
      setToAmount(result);
    } else {
      console.error('Invalid target currency:', targetCurrency);
    }
  };

  const HandleCurrent = (amount: number) => {
    const numberFormats: any = {
      USD: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
      IDR: new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }),
      EUR: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }),
      GBP: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }),
      CAD: new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }),
    };
  
    return numberFormats[targetCurrency].format(amount);
  }

  
  return (
    <div className="mx-5 my-10 flex flex-col  gap-3">
      <h2 className='text-2xl font-bold'>Current Converter</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <input type="text" value={fromAmount} onChange={(e) =>  setFromAmount(e.target.value) } className='w-full  rounded-lg shadow-lg p-2' />
        <div className='flex gap-2'>
          <select value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)} className='w-full'>
            {CurrencyData.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)} className='w-full'>
            {CurrencyData.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <button type="button" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-lg w-full' onClick={() => handleConversion()}>
            Convert
          </button>
        </div>
      </div>
      <input type="text" value={HandleCurrent(toAmount)} onChange={(e) => setToAmount(e.target.value)} readOnly className='w-full rounded-lg shadow-lg p-2' />

    </div>
  );
}

