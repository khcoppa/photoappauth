import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function LoginPage() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [expandForm, setExpandForm] = useState(false);
    const [OTP, setOTP] = useState("");
  
    const generateRecaptcha = () => {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
        }
      }, auth);
    }
  
    const handleChange = (value, country, e, formattedValue) => {
      setPhoneNumber(formattedValue);
      console.log(formattedValue);
      console.log('phone number:', phoneNumber);
    };
  
  
    const requestOTP = (e) => {
      e.preventDefault();
      console.log('Requesting OTP for phone number:', phoneNumber);
  
      if (phoneNumber.length >= 10) {
        setExpandForm(true);
        generateRecaptcha();
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
  
          }).catch((error) => {
            console.log(error);
          });
      }
    }
  
    const verifyOTP = (e) => {
      let OTP = e.target.value;
  
      setOTP(OTP);
  
      if(OTP.length === 6){
        window.confirmationResult.confirm(OTP)
          .then((result) => {
            console.log(result.user);
            const user = result.user;
          }).catch((error) => {
            console.log(error);
          });
      }
    }
  
    
  
  
    return (
      <div className='formContainer'>
        <form onSubmit={requestOTP}>
          <h1>Sign in with your phone number</h1>
          <div className='mb-3'>
            <PhoneInput
              onlyCountries={['us']}
              country={'us'}
              value={phoneNumber}
              onChange={handleChange}
            />
          </div>
          {expandForm === true?
            <>
              <div className="mb-3"> 
                <label htmlFor="otpInput" className="form-label">OTP</label>
                <input 
                  type='number' 
                  className='form-control' 
                  id='otpInput' 
                  value={OTP} 
                  onChange={verifyOTP} 
                  required 
                />
                <div>Enter OTP sent to {phoneNumber}</div>
              </div>
            </> 
            :
            null
          }
          {expandForm === false?
            <button type='submit'>Request OTP</button>
            :
            null
          }
          <div id="recaptcha-container"></div>
        </form>
      </div>
    )
  }
   
  export default LoginPage;