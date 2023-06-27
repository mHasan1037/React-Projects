import React from 'react'

const PasswordStrengthCheck = ({password = ""}) => {
    const passwordLength = password.length
    const checkpasswordStrength = () =>{
        if(passwordLength < 1){
            return '';
        }else if(passwordLength < 4){
            return 'Very Weak';
        }else if(passwordLength < 8){
            return 'Weak';
        }else if(passwordLength < 12){
            return 'Medium';
        }else if(passwordLength < 16){
            return 'Strong';
        }else{
            return 'Very Strong';
        }
    }

    const checkPassowrd = checkpasswordStrength()

  return (
    <>
        {passwordLength > 0 && (
        <div 
           style={{
              display:'flex', 
              justifyContent: 'space-between',
              margin: '25px 0'
            }}
        >
            <h3>Strength: </h3>
            <h3
               style={
                  checkPassowrd === 'Very Weak' || checkPassowrd === 'Weak' 
                  ? {color: 'red'} : 
                  checkPassowrd === 'Strong' || checkPassowrd === 'Very Strong' 
                  ? {color: 'green'}: {color: 'white'}
                }
            >
                {checkPassowrd === 'Strong' || checkPassowrd === 'Very Strong' ? 
                `\u{1F4AA} ${checkPassowrd}` : 
                checkPassowrd === 'Very Weak' || checkPassowrd === 'Weak'  ? 
                `\u{1F628} ${checkPassowrd}` : 
                `${checkPassowrd}`}
            </h3>
        </div>
        )}
    </>
  )
}

export default PasswordStrengthCheck