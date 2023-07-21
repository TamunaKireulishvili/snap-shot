import "./style.css";
const ImageList = ({data})=>{
    console.log(data)
    return(
        <div className="image-container">
           {data.map((image)=>{
            return(
                <div className="image-list" style={{
                    backgroundImage:`url(https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg)`
                }}>
            </div>
           )})}


        </div>
    )
}

export default ImageList;