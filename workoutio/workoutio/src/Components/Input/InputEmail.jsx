import React from 'react';

import './InputEmail.css';

const InputEmail = ({isInvalid = false, ...props}) => {
  return <>  
          <input class={isInvalid ? 'error' : ''} {...props} />
          {isInvalid && <div class='error-text'>Email is invalid</div>}
         </>;
}

export default InputEmail;