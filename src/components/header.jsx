import Button from "./button"
import ProdoctList from "./productList"
function Header(){
    const searchProduct = ()=>{
        alert("Searching Product")
    }
    return(
        <>
        <Button handleClick={searchProduct} text="Search product "/>
        <div>
            This is the header
        </div>
        <ProdoctList/>
        </>
    )
}
export default Header;