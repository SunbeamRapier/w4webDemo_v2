import React , { useEffect } from 'react';
import "./cssPages/Section1Blog.css";


function Section1Blog() {

useEffect(() => { document.body.style.backgroundColor = '#3b6978' }, [])   
    return (
  
         <p>Hello, this is the blog</p>
            
    ) // end of Return Statement
 
        } // end function Section1

        console.log("Section1Blog: exporting content");

    export default Section1Blog;