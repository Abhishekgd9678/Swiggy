import Url from "../src/urls";
import { useState ,useEffect} from "react"

const useResMenu=(id)=>{
    const [menu, setmenu] = useState("");
    
  useEffect(() => {
    fetchmenu();
  }, []);
    
    async function fetchmenu() {
        const data = await fetch(Url + id);
        const finaldata = await data.json();
        setmenu(finaldata);
       
      }

    return menu;
}
export default useResMenu;