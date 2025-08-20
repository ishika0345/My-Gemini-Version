import React, { useContext, useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';

const Main = () => {

 const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);

const startMic = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setInput(speechResult);  // update input box with recognized text
      onSent(speechResult);    // send recognized text as prompt
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
    };
  };


  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} />
        </div>
        <div className='main-container'>

            {!showResult
            ?<>
       <div className='greet'>
                <p><span>Hello,Ishika.</span></p>
                <p>How can I help you today?</p>
            </div>
         <div className='cards'>
            <div  className='card'>
                <a href='https://www.google.com/search?q=Suggest+beautiful+places+to+see+on+mountains&sca_esv=14fa3785e22f0ee1&rlz=1C1GCEA_enIN1062IN1062&sxsrf=AE3TifP54QxNkPZ7mSO7T7pOLCs0UDzhoA%3A1755380771532&udm=50&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIemkjk18Cn72Gp24fGkjjh6w8f_UmwvItOb-_M1yJww2SYzeSHg5KOTFY_CEPbXQKJuqgzfNiftCXHBRuN-ISSzX-ChuS6BQQI6NdKxtznIlfy09DLZnZv2w5DkS1mXqYLLag-xK9c_qtw_xHdGCy9uoFrHxao53b_IGOt40WXrFZO2VWNQ&aep=1&ntc=1&sa=X&ved=2ahUKEwihudT6ppCPAxXkxjgGHWSGMswQ2J8OegQIDhAD&biw=1366&bih=633&dpr=1&mstk=AUtExfCfUPC2zfhy3SCdwNqf7pBi_lqNRi598MRhv4QZgoSmIyB3l--z1I2bBHa05d7L0Z9a8LCfVWh75cq7NHD5jWsxhYPRQ5jPZuYgfTiFHR5flI7W56ZtbV_OAfU5h60_DcIo41vDO2utiidd4kv0-MfpWoXhdLkkC6-Ubfw5qKOWaNLsINDQdT0vB6KHPWNszE_0eEpIf0Obh5Ol_0zC_lfkSOmCpqr7c0IEn4SUjU3D19VXXhSeZY5K239o0WWT_pQvnXSf-Ps3Mbprmt3uXplLYwlD19CemneUzW3doSyQyEXps5Wx4E_nEbm3_TcwwhobC3xQwI7IHw&csuir=1&mtid=K_ygaLuDEZqN4-EPnq75iAs'>Suggest beautiful places to see on mountains</a>
                <img src={assets.compass_icon} />
            </div>
             <div className='card'>
                <a href='https://www.google.com/search?q=New+satellites+launched+from+NASA&sca_esv=6721c03649f7f6a7&rlz=1C1GCEA_enIN1062IN1062&sxsrf=AE3TifPWcW3hti-VHkHhHCk9N5If05wYxQ%3A1755381150875&udm=50&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeqDdErwP5rACeJAty2zADJjYuUnSkczEhozYdaq1wZrEWeBTRRMkGx8PE2F9zI9kP0W9slwfD0e_E2SCYpxxEsASI-LxkVBvfu-XibWr_YDicyb17E6vKrWBOlLdgfdjFpLOhNCkwKiTYaFviHAaGJoUkT5_nrzWq6VkkQdeHpPTQCkROQ&aep=1&ntc=1&sa=X&ved=2ahUKEwib38WvqJCPAxXx4jgGHTAhN5cQ2J8OegQIEBAD&biw=1366&bih=633&dpr=1&mtid=ov2gaPqBFJqN4-EPnq75iAs&mstk=AUtExfBukEVnRauzjFW7JzlZVmec6JVGiYp9PRFUZ-3WPQaSeHnWPTFd1cQJ34tWHHaW0PjrnK14lRTkU31wr9qfKG1NBn0aEndGkq4whjPTNjvs7CLGqvjsLMKf3sd9KYr-ztjk0tP8IInUNoNliw4GYRu_yH8K0O5Wzan9xt2_ejj2efRB0Qkp-qgjp-gA_xrpYOuLgRNfOa1GVZbIZv5CLcF5Gi8g4mHPRvBZMSW7PsYSlW6ypobZ_Rw75qs9bgWDEQdFnLse2CNaEolRlwzlbu_APca_BtF1VsyJxwnm3mUrw88S7pKoooE12asnk3lHRqkFiO164k_80MeaDpwzR5Ej2PlFd7gK3w&csuir=1'>New satellites launched from NASA</a>
                <img src={assets.bulb_icon} />
            </div>
             <div className='card'>
                <a href='https://www.google.com/search?q=%3EBrainstorm+activities+to+encourage+young+people&num=12&sa=X&sca_esv=6721c03649f7f6a7&rlz=1C1GCEA_enIN1062IN1062&sxsrf=AE3TifMbN4pXHEKo71rcl9Tji9SHLnwhkg%3A1755381230623&udm=50&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIemkjk18Cn72Gp24fGkjjh6w8f_UmwvItOb-_M1yJww2SbnHRjS3sgxwVBPbo0fTnaK82t101Usq9JwWh5qfTFWjKCLXYLV9kw2blfSiZM3Otj7NIlY9bXh6gMeWkUU6TvkeSv_av4HFOWRJ59A-bkTG1aJ3NeDEmhWwPq6Pyy14EW-aztw&aep=1&ntc=1&ved=2ahUKEwjFnMnVqJCPAxWBnmMGHdSfDR0Q2J8OegQIDhAD&mstk=AUtExfCos4rXNXn8_QQXKkm8KPhnLmo6gMcJXx3kMUBfE3lY4AiRlZ-oeB7A2GRg_zD62MKRqWp6PtIv8CTsmTVmS0XT-4o8Sn_kJiPbyuZ3A_qjis_g3xbCIcMY17EjsQGnOuRVE65iJsn4ADcC6vNYyWkZ7tftdyK9kaGVRclrRVeE1Q3SinoZPz0oO7LiKne8sUW5Tb7vrNWJyfPavCAOD0EpzVVDPZ0tDZu07IoDs4XXWnoBEj9BO55auyN-TIbVU4lOzizgqDOZf0FBw5dB9gScg4eNnaqHfoLXuTSIR-LGP-YGXKxU_5IdTzM7HUP023OwnLtPwGuxN5lB5LdNM-1ej33rWnO3nQ&csuir=1&biw=1366&bih=633&dpr=1&mtid=6f2gaOvsE5HU4-EPv6OA2Q0'>Brainstorm activities to encourage young people</a>
                <img src={assets.message_icon} />
            </div>
             <div className='card'>
                <a href='https://www.google.com/search?q=tell+me+today%27s+weather+forecast&num=12&sca_esv=6721c03649f7f6a7&rlz=1C1GCEA_enIN1062IN1062&biw=1366&bih=633&sxsrf=AE3TifMvK6iQt33BgaO5VBjkaVsO1Aje1w%3A1755381288171&ei=KP6gaIeiCsaz4-EPo-j52AQ&oq=Tell+me+of+Today%27s+weather&gs_lp=Egxnd3Mtd2l6LXNlcnAiGlRlbGwgbWUgb2YgVG9kYXkncyB3ZWF0aGVyKgIIATIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIIEAAYFhgKGB4yBhAAGBYYHjIGEAAYFhgeMggQABgWGAoYHkiFH1AAWABwAHgBkAEAmAGHAqABhwKqAQMyLTG4AQHIAQD4AQL4AQGYAgGgAo0CmAMAkgcDMi0xoAfjCbIHAzItMbgHjQLCBwMyLTHIBwU&sclient=gws-wiz-serp'>Tell me of Today's weather</a>
                <img src={assets.code_icon} />
            </div>
         </div>
            </>
            : <div className='result'>
               <div className='result-title'>
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
               </div>
               <div className='result-data'>
                <img src={assets.gemini_icon} alt="" />
                {loading
                ? <div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                    </div>
              :<p dangerouslySetInnerHTML={{__html: resultData}}></p>
               }
                
               </div>
            </div>
            }
           
         <div className='main-bottom'>
            <div className='search-box'>
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Search...' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img onClick={startMic} src={assets.mic_icon} alt="" />
                    <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className='bottom-info'>
                 Gemini may display inaccurate info, including about people, so double check its responses. Your privacy and Gemini Apps.
            </p>
         </div>
        </div>
    </div>
  )
}

export default Main