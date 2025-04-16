import Button from "./button";
const ProdoctData = ()=>{
    const bottonFunction = ()=>{
        alert("Product added to cart")
    }
    return(
        <>
            <div>
                <p>Shoe</p>
                <span>$200</span>
                <Button handleClick={bottonFunction} text="Add to Cart"/>
            </div>
        </>
    )
}
export default ProdoctData;