import { useState, useEffect } from 'react';
import {collection, getDocs, getFirestore} from "firebase/firestore"
const FotoInicio = () => {

    const[productos, Setproductos]=useState([])
    useEffect(()=>{
        const db=getFirestore(); 

        const itemsColection = collection(db, "personalviva");
        getDocs(itemsColection).then((snapshot)=>{
            const docs=snapshot.docs.map((doc)=>doc.data());
            Setproductos(docs);
            console.log(docs)
        });
    }, []);
    return (
        
        <div className='foto-inicio'>
            {productos.map((prod)=>(
                <div key={prod.NOMBRE}>
                    <h2>{prod.CARGO}</h2>
                    <h3>{prod.VALOR}</h3>
                    <h3>{prod.ID}</h3>
                </div>
            ))

            }
            
            <img src="/assets/Viva1a.jpg"></img>
            </div>
    )
}

export default FotoInicio