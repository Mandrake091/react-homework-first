import React from 'react'

const PswRequisite = ({capsLetterFlag, numberFlag, pwdLenghtFlag}) => {



  return (
    <div>
      <p className={capsLetterFlag}> At least one uppercase</p>
      <p className={numberFlag}> At least one number</p>
      <p className={pwdLenghtFlag}> At least 8 characters</p>
    </div>
  );
}

export default PswRequisite
