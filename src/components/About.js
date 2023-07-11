import React from 'react'


const About = (props) => {

    return (
        <div className='container' style={{backgroundColor: props.mode==='dark'?'rgb(19,22,24,1)':'white',color: props.mode==='dark'?'white':'black'}}>
            <h1 className='conatiner my-3'>About Us</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'rgb(19,22,24,1)':'white',color: props.mode==='dark'?'white':'black'}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={{backgroundColor: props.mode==='dark'?'rgb(19,22,24,1)':'white',color: props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        <strong>Analyze Your text</strong> 
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne"  className="accordion-collapse collapse show">
                        <div className="accordion-body">
                        Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or convert Uppercase to Lowercase and convert Lowercase to Uppercase.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'rgb(19,22,24,1)':'white',color: props.mode==='dark'?'white':'black'}}  >
                    <h2 className="accordion-header" >
                        <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='dark'?'rgb(19,22,24,1)':'white',color: props.mode==='dark'?'white':'black'}}  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo"  className="accordion-collapse collapse">
                        <div className="accordion-body">
                        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'rgb(19,22,24,1)':'white',color: props.mode==='dark'?'white':'black'}} >
                    <h2 className="accordion-header" >
                        <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='dark'?'rgb(19,22,24,1)':'white',color: props.mode==='dark'?'white':'black'}}  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree"  className="accordion-collapse collapse">
                        <div className="accordion-body">
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
