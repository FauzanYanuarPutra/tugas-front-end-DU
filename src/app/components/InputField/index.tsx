export function InputField({ label, value, onChange }: any) {
  const numericValue = Number(value.replace(/[.,]/g, ''));
  const formattedValue = new Intl.NumberFormat('id-ID').format(numericValue);

  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={label}>{label}</label>
      <input type="text" name={label} id={label} onChange={onChange} value={formattedValue} className='rounded-lg' />
    </div>
  );
}