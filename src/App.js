import Button from './Button'
import { GoBellFill} from "react-icons/go";
import {BsCloudDownload} from "react-icons/bs";

function App() {
    
    const handleClick = () => {
        console.log("Button Pressed")
    }
    return <div>
        <div>
            <Button primary rounded outline className="mb-5" onMouseEnter={handleClick} onClick={handleClick}><GoBellFill/> Click Here!</Button>
        </div>
        <div>
            <Button secondary outline> <BsCloudDownload/> Buy Now</Button>
        </div>
        <div>
            <Button success outline>See Deal</Button>
        </div>
        <div>
            <Button warning>Hide Ads!</Button>
        </div>
        <div>
            <Button danger rounded>Add to Cart</Button>
        </div>
    </div>
}

export default App;