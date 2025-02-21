//import { useState } from "react";
//const Ex2 = ({initialItems= [],placeholder = "Add an item"}){
//    const [items,setItems]= useState(initialItems)
//    const [newItem, setNewItem] = useState("");
//    const handelAddItem=()=>{
       // if(newItem.trim()# "") //hedhy tetbadel l # b 3ligne 
//        setItems([... items,newItem]);
//        setNewItem('');
//    }
//    const handleDeleteItem = index =>{
        //setItems(items.filter((_,i) =>i # index))
//    }
    //return(
 //       <>
 //       <h1>Liste: </h1>
 //       <ul>
 //           {
 //               items.map((item, index) => 
 //                   <li>
 //                       {item}
 //                       <button onClick={handleDeleteItem(index)}>Supprimer</button>
 //                   </li>
 //           }
 //       </ul>
 //       <input type="text" onChange={(e) => setNewItem(e.target.value) } placeholder={placeholder} />
 //       <button onClick={handelAddItem}>Ajouter</button>
 //       </>

  //  );

//}
//export default Ex2;