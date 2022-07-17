import React, { useContext } from 'react'
import StylesContext from './stylescontext'

const CollectorButton =() => {

    const buttonStyling =React.useContext(StylesContext) 
        return(
            <div>
                <button id="center-button" style={buttonStyling}>
                Click here!
                </button>
            </div>
        );
}

export default CollectorButton;
