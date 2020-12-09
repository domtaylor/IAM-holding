import React from 'react';
import sixStudioLogo from '../assets/images/sixStudioLogo.png';

const Logo = (title) => {
    return(
     <div className="logo"><img src={sixStudioLogo} alt={title} width="345" height="96" />
     </div>
    )
}

export default Logo;