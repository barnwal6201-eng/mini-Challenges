import React, { useRef, useState } from 'react'

const App = () => {

  const [otpField, setOtpField] = useState(Array(6).fill(''));
  const [submit, setSubmit] = useState(false);
  const inputRefs = useRef([]);
  
 const handleChanges = (e, index) => {
  let numricValue = e.target.value.replace(/\D/g, '');
  const singleDigit = numricValue.slice(0, 1);
  e.preventDefault();

  const newOtp = [...otpField];
  newOtp[index] = singleDigit;
  setOtpField(newOtp)

  if(singleDigit && index < 5){
    inputRefs.current[index + 1].focus();
  }
 }

 const keysHandler = (e, index) =>{
   if(e.key === 'Backspace'){
    const copyOtp = [...otpField];
    copyOtp[index] = '';
    setOtpField(copyOtp);

    if(index >= 0){
      inputRefs.current[index - 1].focus();
    }
   }
   if(e.key === 'ArrowLeft' && index > 0){
       inputRefs.current[index - 1].focus();
   }
   if(e.key === 'ArrowRight' && index < 5){
    inputRefs.current[index + 1].focus();
   }
 }

 const handlePaste = (e, index) => {
       e.preventDefault()
       let numericValues = e.clipboardData.getData('text').replace(/\D/g, '');
       
      const newOtp = [...otpField];
      numericValues.split('').forEach((digit, i) => {
        if(index + i < 6){
        newOtp[index + i] = digit;
        }
      });
      setOtpField(newOtp);
 }

  const handleSubmit = () =>{
    if(otpField.some(val => val === '')) {
       console.error("Fill OTP");
    } else {
      setSubmit(true);
    }
  }

  return (
    <div>
      <h1 className='text-center text-3xl mt-2 font-semibold mb-2'>OTP</h1>
      <hr />

      <div className='flex m-auto justify-center items-center mt-8 gap-5'>
       {otpField.map((_,index) =>(
        <input
        key={index}
        type="text"
        maxLength={1}
        ref={(val) => inputRefs.current[index] = val}
        value={otpField[index]}
        onChange={(e)=>handleChanges(e, index)}
        onKeyDown={(e)=>keysHandler(e, index)}
        onPaste={(e)=>handlePaste(e, index)}
        className='h-12 w-12 border text-center hover:border-blue-500 hover:border-2' />
       ))}
      </div>

      <div className='flex justify-center mt-10'>
        <button 
        onClick={handleSubmit}
        className='h-10 w-25 bg-blue-500 text-white font-bold hover:bg-blue-700 border-gray-700 border-2 disable'>Submit</button>
      </div>

      {
        submit && (
          <div className='text-green-600 font-bold text-2xl text-center mt-10'>OTP Submitted Successfully!</div>
        )
      }
    </div>
  )
}

export default App