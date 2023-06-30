import React from 'react';

export default function About(props) {
    
    //const [MyStyle, SetMyStyle] = useState({
    //    color: 'black',
    //    backgroundColor: 'white',
    //    border: '1px solid black'
    //});

    let MyStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
    }
    
  return (
    <div className='container'>
        <h1 className='my-3' style={{color: props.mode === 'dark'?'white':'#042743'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={MyStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={MyStyle}>
                    TestUtils gives you a way to analyze your text quickly and efficiently. be it word count, character count or               </div>
                </div>
            </div>
            <div className="accordion-item" style={MyStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free To Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={MyStyle}>
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. 
                    TextUtils reports the number of word and characters. thus it is suitable for writing text with word/ character limit
                </div>
                </div>
            </div>
            <div className="accordion-item" style={MyStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={MyStyle}>
                    This word counter software works in any web browsers such as chrome, firefox, Internet explorer, safari and Opera.
                    Its Suits to count character frmo facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
