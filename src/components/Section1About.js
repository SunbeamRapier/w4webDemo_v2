import React from 'react';
import "./cssPages/Section1About.css";
import SRJphoto from './images/SRJ_ProfilePic300.jpeg';


function Section1About() {

    return (
        <>
        <div className= "AboutPageNameContainer" id= "AboutPageNameContainer">          
            <div className = "AboutTitleContainer" id = "AboutTitleContainer">
                About
            </div>
        </div>

         <div className = "Section1AboutContainer" id="Section1AboutContainer">     
            <div className = "PrincipalImageContainer" id = "PrincipalImageContainer">
               <img src={SRJphoto} alt="Stephen R Jones" class = "imgcenter" />
            </div>   
            <div className = "PrincipalNameContainer" id = "PrincipalNameContainer">
               S  T  E  P  H  E  N      R      J  O  N  E  S
            </div>  
            <div className = "RoleContainer" id = "RoleContainer">
               P    R    I    N    C    I    P    A    L
            </div>  


            <div className = "AboutHeadingContainer" id = "AboutHeadingContainer">
                <div className = "CVHeadingContainer" id = "CVHeadingCOntainer">
                    C      U      R      R      I      C      U      L      U      M             V      I      T      A      E
                </div>

                <div className = "CVIntroContainer" id = "CVIntroContainer">
                I studied programming at IBM in North Sydney in 1977, using the RPG-II language on an IBM System/3 machine while working for Astra Pharmaceuticals (now Astra-Zeneca) in North Ryde.  Today I am building websites in ReactJS.  In the meantime, over 4 decades of working in the IT industry I have accumulated a wealth of experience about all things IT, accounting, business, legal matters and trading on the financial markets.  I have lived and worked mostly in Sydney, but also in London, Spain and France.  I have worked for three major IT vendors and I ran my own Sydney reseller business, Coefficiency PL, for nearly 2 decades.  I acquired an MCSE along the way and I have written a lot of code.

                In early 2020 I completed a Udemy course on web development in ReactJS.  Prior to that I developed an options trading application in Tradestation Inc's proprietary O-O language "EasyLanguage" with 60,000 lines of code.
                </div>

                <div className = "CVSkillsContainer" id = "CVSkillsContainer">
                    <table className = "CVSkillsTable" id = "CVSkillsTable">
                        <thead>
                            <tr>
                                <th colspan = "2">
                                    <h2>  S  K  I  L  L  S</h2>
                                </th>
                             </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Programming Languages:  </td>
                                <td>RPG-II, Cobol, Basic, Fortran, Javascript, </td>
                             </tr> 
                             <tr>
                                <td></td>
                                <td>EasyLanguage, ReactJS (Hooks)</td>
                             </tr>   
                             <tr>  
                                <td></td>
                                <td>Wang Glossary, Microsoft Word VBA</td> 
                             </tr> 
                             <tr>
                                <td>Hardware: </td>
                                <td>IBM System/3, System/34, System/38</td>
                             </tr> 
                             <tr>
                                <td></td>
                                <td>Wang VS, Wang OIS</td>
                             </tr> 
                             <tr>
                                <td></td>
                                <td>Apple Mac, MS Windows, Parallels</td>
                             </tr> 
                             <tr>
                                <td>Training (by me): </td>
                                <td>Wang State Sales Manager;'s PA - Wang WP2</td>
                             </tr>  
                             <tr>
                                <td>: </td>
                                <td>Astra Production Mgr's PA - Vydek WP:</td>
                             </tr>  
                             <tr>
                                <td></td>
                                <td>RPG-II (Wang VS) for software dev company</td>
                             </tr> 
                             <tr>
                                <td></td>
                                <td>ICL London Personnel Mgr's PA: ICL 7700 WP</td>
                             </tr> 
                             <tr>
                                <td></td>
                                <td>Dynamics Accounting (Internal Coefficiency Staff)</td>
                             </tr>
                             <tr>
                                <td>Tender Responses</td>
                                <td>Wang: NSW State Government (Several), ASIO, Dept Social Security</td>                                
                             </tr> 
                             <tr>
                                <td>Major Applications</td>
                                <td>Astra: Debtors, Marketing Reports (Stats), Warehousing(RPG-II)</td>
                             </tr>  
                             <tr>
                                <td></td>
                                <td>Wang: Support Management System (RPG-II), Wang Marathon Results Recording (Basic)</td>
                             </tr>  
                             <tr>
                                <td></td>
                                <td>Wang: ASIO Reports/Database Matching (Cobol)</td>
                             </tr> 
                             <tr>
                                <td></td>
                                <td>CIBC: Loans Module, International Banking</td>
                             </tr> 
                             <tr>
                                <td></td>
                                <td>Coefficiency: C.A.T.S. Just-in-Time Toner Delivery</td>
                             </tr>
                             <tr>
                                <td></td>
                                <td>Coefficiency: Matrix CRM for all divisions</td>
                             </tr> 
                             <tr>
                                <td></td>
                                <td>Coefficiency: OptionTrader5000 - Automated Trading</td>
                             </tr>  
                             <tr>
                                <td>Support</td>
                                <td>Wang: National Support Manager VS Systems</td>
                             </tr>          
                             <tr>
                                <td></td>
                                <td>Coefficiency: MS Servers for various clients</td>
                             </tr>  
                             <tr>
                                <td></td>
                                <td>Coefficiency: Dynamics Accounting for various clients</td>
                             </tr> 
                             <tr>
                                <td></td>
                                <td>Coefficiency: in-house Disaster Recovery site</td>
                             </tr> 
                             <tr>
                                <td>Film</td>
                                <td>Diploma in Film Technology (S.A.E. Southern Cross University)</td>
                             </tr> 
                             <tr>
                                <td></td>
                                <td>Adobe Suite, Final Cut Pro / Pro X, DaVinci Resolve</td>
                             </tr>                                               
                         </tbody> 
                    </table>                     

                </div>
            </div>
        </div>    

    {/*    <div className = "CVImageContainer" id = "CVImageContainer">
            <img src={SRJphoto} alt="Stephen R Jones" />
        </div> 
*/}
        </>
            
    ) // end of Return Statement
 
        } // end function Section1

        console.log("Section1About: exporting content");

    export default Section1About;