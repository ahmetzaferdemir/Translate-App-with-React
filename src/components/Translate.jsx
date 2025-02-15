import React, { useState, useEffect } from 'react';
import '../css/translate.css';
import { LuMoveHorizontal } from "react-icons/lu";
import axios from "axios";
import languages from '../assets/languages.js';

function Translate() {

  const [text, setText] = useState('');
  const [language, setLanguage] = useState('');
  const [tLanguage, setTLanguage] = useState('');
  const [result, setResult] = useState('')


  const api_key = import.meta.env.VITE_API_KEY;

    const URL = `https://api.mymemory.translated.net/get?q=${text}?&langpair=${language}|${tLanguage}&key=${api_key}`;

    const translateText = async () => {
      const response = await axios.get(URL);
      setResult(response.data.responseData.translatedText)
    }

    const change = () => {
      setLanguage(tLanguage);
      setTLanguage(language)
      }

    const clearTexts = () => {
      if(text==''){
        setResult('');
      }
    }

    useEffect(() => {
      clearTexts();
    });

    return (
        <>
            <div className="col-sm-12 col-md-5 my-4 inputFieldDiv">
                <select id="inputField" value={language} onChange={(e) => setLanguage(e.target.value)} className='form-select fw-bold my-3'>
                  <option>Select Input Language</option>
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                ))}
                </select>
                <textarea name="input" id="inputarea" value={text} onChange={(e) => setText(e.target.value)} className='form-control'></textarea>
            </div>

            <div className='col-sm-12 col-md-2'>
                <LuMoveHorizontal className='mx-auto mt-md-5 mb-sm-3 w-100 fs-4' style={{ cursor: 'pointer' }} onClick={change}/>
                <button className='btn btn-sm btn-warning mx-auto mt-md-5 w-100' onClick={translateText}>Translate</button>
            </div>

            <div className="col-sm-12 col-md-5 my-4 outputFieldDiv">
                <select id="outputField" value={tLanguage} onChange={(e) => setTLanguage(e.target.value)} className='form-select fw-bold my-3'>
                <option>Select Output Language</option>
                    {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                ))}
                </select>
                <textarea name="input" id="inputarea" value={result} className='form-control'></textarea></div>
        </>
    )
}

export default Translate