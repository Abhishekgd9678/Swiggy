import { useRouteError } from "react-router-dom"
import dog from './images/1.png'


const Error=()=> {
const x=useRouteError();

console.log(x);
    return (
    <div className="error">
    <img src={dog} />
    <h1>Oops!</h1>
    <h3>{x.status} {x.data}</h3>
    
    </div>
  )
}
export default  Error
