import React, { useState } from 'react'
import usePassowrdGenerator from './hooks/usePasswordGenerate'
import PasswordStrengthCheck from './components/PasswordStrengthCheck'
import Checkboxs from './components/Checkboxs'
import Button from './components/Button'
import style from './password.module.css'

const PasswordGenerator = () => {
    const [length, setLength] = useState(4)
    const [checkboxData, setCheckboxData] = useState([
        {title: 'Include Uppercase Letters', state: false},
        {title: 'Include Lowercase Letters', state: false},
        {title: 'Include Numbers', state: false},
        {title: 'Include Symbols', state: false},
    ])
    const [copied, setCopied] = useState(false)

    const handleCheckboxChange = (i) =>{
        const updatedCheckboxData = [...checkboxData]
        updatedCheckboxData[i].state = !updatedCheckboxData[i].state

        setCheckboxData(updatedCheckboxData)
    }


    const {password, errorMessage, generatePassword} = usePassowrdGenerator()

    const handleCopy = () =>{
        navigator.clipboard.writeText(password)
        setCopied(true)

        setTimeout(()=>{
           setCopied(false)
        }, 1000)
    }


  return (
    <div className={style.passwordWrapper}>
        <div className={style.passwordContainer}>
            {/*password and copy btn*/}
            {password && (
            <div className={style.passwordDisplay}>
                <h2>[ {password} ]</h2>
                <Button 
                text={copied ? "Copied" : 'Copy'}
                onClick = {handleCopy}
                customeClass = {style.btn}
                />
            </div>
            )}
            {/*Password character length*/}
            <div className={style.charLength}>
                <h4>Character Length</h4>
                <h2>{length}</h2>
            </div>
            {/*password character input range*/}
            <input 
                type='range'
                min="4"
                max="20"
                value={length}
                onChange={(e)=> setLength(e.target.value)}
                className={style.rangeInput}
            />
            {/*checkbox of character*/}
            <div className={style.checkBox}>
                {checkboxData.map((checkbox, index)=>{
                    return (
                        <Checkboxs  
                        key={index}
                        state = {checkbox.state}
                        title = {checkbox.title}
                        onChange={()=> handleCheckboxChange(index)}
                        />
                    )
                })}
            </div>

            {/*Strength of the password*/}
            <PasswordStrengthCheck password={password}/>

            {/*Error Message*/}
            <div>
            {errorMessage}
            </div>

            {/*Generate password button*/}
            <Button
                onClick={()=> generatePassword(length, checkboxData)}
                text="Generate Password"
                customeClass = {style.btnGenerate}
            />
        </div>
    </div>
  )
}

export default PasswordGenerator