import React from "react";


function CreateNavBarTileStyles(createdTileStyles) {
    console.log("CreateNavBarTileStyles: Setting Styles 1-3"); 
  
    const tileStyle1  = "CSS.Properties : {backgroundColor : 'blue', fontFamily : 'londrinaBlackRegular',color:  'yellow'}" ;
    console.log("CreateNavBarTileStyles:  tileStyle1  set to [" + tileStyle1 + "]");
 
    
    const tileStyle2 = "CSS.Properties : {backgroundColor: 'green',fontFamily: 'londrinaBlackRegular', color: 'yellow'}";
    console.log("CreateNavBarTileStyles:  tileStyle2  set to [" + tileStyle2, "]");

    const tileStyle3 = "CSS.Properties : {fontFamily: 'londrinaSketcheRegular'}";
    console.log("CreateNavBarTileStyles:  tileStyle3  set to [" + tileStyle3, "]");

    //const allTileStyles = [tileStyle1, tileStyle2, tileStyle3]; 
 
    createdTileStyles = [tileStyle1, tileStyle2, tileStyle3];
    console.log("CreateNavBarTileStyles: Array of TileStyles set to [" + createdTileStyles + "] for return");
    
    return(createdTileStyles);
}


  export default CreateNavBarTileStyles; 