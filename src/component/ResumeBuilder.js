import './ResumeBuilder.css';
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { useState,useRef } from 'react';
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport} from "@progress/kendo-react-pdf";



function ResumeBuilder(){
    const ddData = [
        { text: "A4", value: "size-a4" },
        { text: "Letter", value: "size-letter" },
        { text: "Executive", value: "size-executive" }
      ];

    const [layoutSelection, setLayoutSelection] = useState({
        text: "A4",
        value: "size-a4"
      });
    
    const updatePageLayout = event => {
        setLayoutSelection(event.target.value);
      };

      const pdfExportComponent = useRef(null);

  const handleExportWithComponent = event => {
    pdfExportComponent.current.save();
  };
    return(
        <>
        <div className="container">

            {/* -------------------------- */}

        <div className="box wide hidden-on-narrow">
                <div className="box-col">
                    <h4>Select a Page Size</h4>
                    <DropDownList
                        data={ddData}
                        textField="text"
                        dataItemKey="value"
                        value={layoutSelection}
                        onChange={updatePageLayout}
                    />
                </div>
                <div className="box-col">
                    <h4>Export PDF</h4>
                    <Button primary={true} onClick={handleExportWithComponent}>
                        Export
                    </Button>
                </div>
        </div>


{/* content area for resume generation */}
<PDFExport ref={pdfExportComponent}>
            <div className="container1">

                {/*  */}
                <div className="row1">
                
                    <div className='nameDetails'>
                        <input type="text" className='name' placeholder='enter-name-here'/>
                        <input type="text" className='profession' placeholder='enter-profession'/>
                    </div>

                    <div className='contactDetails'>
                        <div>
                            <input type="text" className='mobile' placeholder='enter-your-mobile-number'/>
                        </div>
                        <div>
                            {/* <img src="" alt="" /> */}
                            <input type="text" className='email' placeholder='enter email here'/>
                        </div>
                        <div>
                            {/* <img src="" alt="" /> */}
                            <input type="text" className='address' placeholder='enter address here'/>
                        </div>
                </div>

        
            </div>

                {/* about me  */}
                <div className="row2">
                    <h3>About Me</h3>
                    <textarea name="" id="" cols="30" rows="10" placeholder='write about your self'></textarea>
                </div>

                {/*  */}
                <div className="row3">
                    <h3>Experience</h3>
                    <div className='experience'>
                        <div>
                            <input type="text" placeholder='company and year' className='company'/>
                            <input type="text" placeholder='job position' />
                            <textarea name="" id="" cols="30" rows="10" placeholder='write what you done there'></textarea>
                        </div>
                        <div>
                            <input type="text" placeholder='company and year' className='company'/>
                            <input type="text" placeholder='job position' />
                            <textarea name="" id="" cols="30" rows="10" placeholder='write what you done there'></textarea>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className="row3">
                    <h3>Education</h3>
                        <div className='experience'>
                            <div>
                                <input type="text" placeholder='College-name and year' className='company'/>
                                <input type="text" placeholder='Degree' />
                                <textarea name="" id="" cols="30" rows="10" placeholder='write what are the skills aquired?'></textarea>
                            </div>
                            <div>
                                <input type="text" placeholder='University and year' className='company'/>
                                <input type="text" placeholder='Masters in?' />
                                <textarea name="" id="" cols="30" rows="10" placeholder='write what are the skills aquired?'></textarea>
                            </div>
                        </div>
                </div>

                {/*  */}
                <div className="row4">
                    <div>
                        <h3>Languages:</h3>
                        <input type="text" placeholder='language'/>
                        <input type="text" placeholder='language'/>
                        <input type="text" placeholder='language'/>
                        <input type="text" placeholder='language'/>
                    </div>
                    <div>
                        <h3>Expertise:</h3>
                        <input type="text" placeholder='skill'/>
                        <input type="text" placeholder='skill'/>
                        <input type="text" placeholder='skill'/>
                        <input type="text" placeholder='skill'/>
                    </div>
                    <div>
                        <h3>Reference:</h3>
                        <h4>Name</h4>
                        <input type="text" placeholder='Company'/>
                        <h4>Phone</h4>
                        <input type="text" placeholder='PhoneNumber'/>
                    </div>
                </div>

            </div>
            </PDFExport>
        </div>
        </>
    )
}
export default ResumeBuilder;