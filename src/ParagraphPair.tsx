interface ParagraphPairProps {
    StringOne : String,
    StringTwo : String
}

function ParagraphPair(strings:{StringOne:String, StringTwo:String}){
    return(<>
    <div className="container">
        <div className="sub-container">
        <p>{strings.StringOne}</p>
        </div>
        <div className="sub-container">
        <p>{strings.StringTwo}</p>
        </div>
    </div>
    </>)
}
export default ParagraphPair;