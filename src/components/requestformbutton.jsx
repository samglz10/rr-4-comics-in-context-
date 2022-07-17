import React, { useContext } from "react";
import StylesContext from "./stylescontext"


 const RequestFormButton = () => {
  const buttonStyling = React.useContext(StylesContext)

  return (
    <div>
      <input style={buttonStyling} type="submit" value="Submit" />

    </div>
  );
}
export default RequestFormButton