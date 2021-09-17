import React, {useState} from 'react'
import Navbar from '../../../../component/navbar/navbar'
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import Button from "../../../../component/button/button"



const CreateGig = () => {
    const [radioOptions, setRadioOptions] = useState("basic")
    const [tags, setTags] = useState(["Add tag"])

    const onOptionChange = (e:any) => {
        console.log(e.target.value)
        
            setRadioOptions(e.target.value)
          }
    return (
        <div>
            <Navbar/>

            <div className="gig-header">
                <h2 className="">Gigs</h2>
            </div>
<hr></hr>

<div className="">

              <h4>New gig</h4>

              <div className="newgig-wrapper">
                <div className="options-wrapper">
               
             <div className="inner-wrapper"> 
                 <input className="input-field" checked={radioOptions === "basic"} value="basic" type="radio" onChange= {onOptionChange}  />
                    <label htmlFor="company" className="label-text">Basic Data</label>
              </div>
                   
              <div className="inner-wrapper"> 
                    <input className="input-field" checked = {radioOptions === "remuneration"} value="remuneration" type="radio" onChange={onOptionChange}  />
                    <label htmlFor="company" className="label-text">Renumeration</label>
              </div>
                </div>
                <div className="data-wrapper">

               {radioOptions === "basic" ? <form className="from-wrap">
                 <div className="first-inner-wrapper">
                 <div className="inner-wrapper">
                   <label htmlFor="role">Role</label>
                   
                   <input type="text" id="role"  />
                   </div>
                 
                 <div className="inner-wrapper company-wrapper">
                   <label htmlFor="company">Company</label>
                   <input className="input-field" type="text" id="company"  />
                   </div>
                  </div>

                   <div className="inner-wrapper">
                  
                   <input className="input-field" placeholder="Address" type="text"   />
                   </div>
                   <div className="tags-input">
                     <h5 className="tag-header">Add tag</h5>
                   <ReactTagInput 
                    tags={tags} 
                    onChange={(newTags) => setTags(newTags)}
                    placeholder="Add more tags"
                    maxTags={10}
                   />
                   <ul className="tag-list">
                     <p className="suggest-tag-header">Suggested tags:</p>
                     <div className="tag-item-wrapper">
                       <li className="tag-item">full time</li>
                       <li className="tag-item">contract</li>
                       <li className="tag-item">freelance</li>
                     </div>
                   </ul> 
                   </div>
                   <div className="button-wrapper">
                   <Button
                   border="none"
                   color="transparent"
                   height= "fit-content"
                   onClick={() => console.log("")}
                   radius = "10px"
                   width = "rem"
                   padding="8px 16px 8px 16px"
                   margin=""
                   
                   children = "Cancel" />
                   <Button
                   border="none"
                   color="#2F417E"
                   height= "fit-content"
                   onClick={() => console.log("")}
                   radius = "10px"
                   width = "rem"
                   padding="8px 16px 8px 16px"
                   margin=""
                   
                   children = "Continue" />
                   </div>
               </form>:     
             <div className=""> 
             <form className="from-wrap">
               <div className="first-inner-wrapper">
              <div className="inner-wrapper company-wrapper">
                   <label htmlFor="company">Salary</label>
                   <input className="input-field" type="text" placeholder="Minimum"  />
              </div>

              <div className="inner-wrapper company-wrapper">
                   <label htmlFor="company">.</label>
                   <input className="input-field" type="text" placeholder="Maximum"  />
              </div>
              </div>
              <div className="button-renum-wrapper">
                   <Button
                   border="none"
                   color="transparent"
                   height= "fit-content"
                   onClick={() => ""}
                   radius = "10px"
                   width = "rem"
                   padding="8px 16px 8px 16px"
                   margin=""
                   children = "Back" />
                   <Button
                   border="none"
                   color="#2F417E"
                   height= "fit-content"
                   onClick={() => ""}
                   radius = "10px"
                   width = "rem"
                   padding="8px 16px 8px 16px"
                   margin=""
                   
                   children = "Add gig" />
                   </div>
             </form>
             </div>
     }

                





                </div>
            
              </div>
            </div>

        </div>
    )
}

export default CreateGig
