import React from 'react'


const Consulta = () => {
    
    // const datos=[{ID:1,NOMBRE:"ESCOBAR JARAMILLO DUBAN ESTIVEN",CARGO:"MEDICO GENERAL",FECHA:"16/09/2022"},
	// {ID:2,NOMBRE:"ZAPATA MORENO GLADIS ELENA",CARGO:"AUXILIAR DE SERVICIOS GENERALES",FECHA:"23/10/2022"},
	// {ID:3,NOMBRE:"URICOECHEA ORTIZ JUANITA MARGARITA",CARGO:"MEDICO GENERAL",FECHA:"23/01/2023"},
	// {ID:4,NOMBRE:"MORENO ROVIRA LESLY YICEL",CARGO:"MEDICO GENERAL",FECHA:"18/04/2022"},
	// {ID:5,NOMBRE:"ESCOBAR RESTREPO ANA MILENA",CARGO:"HIGIENISTA ORAL",FECHA:"10/08/2022"},
	// {ID:6,NOMBRE:"VARGAS MONTES LINEY MARGARITA",CARGO:"AUXILIAR DE ENFERMERIA",FECHA:"4/08/2022"},
	// {ID:7,NOMBRE:"SANCHEZ PATINO VERONICA DEL CARMEN",CARGO:"AUXILIAR DE ENFERMERIA",FECHA:"16/03/2022"},
	// {ID:8,NOMBRE:"OSORIO MORENO LAURY CATERINE",CARGO:"NUTRICIONISTA",FECHA:"8/08/2022"},
	// {ID:9,NOMBRE:"ZAPATA DIAZ PAULA ANDREA",CARGO:"ASISTENTE ADMINISTRATIVO",FECHA:"23/05/2022"},
	// {ID:10,NOMBRE:"MUNOZ PELÁEZ SANDRA MILENA",CARGO:"AUXILIAR DE ADMISIONES",FECHA:"20/12/2022"},
	// {ID:11,NOMBRE:"GARCIA BERMUDEZ ELIZABETH",CARGO:"AUXILIAR DE ADMISIONES",FECHA:"8/03/2022"},
	// {ID:12,NOMBRE:"RUA ZAPATA JESSICA TATIANA",CARGO:"ODONTOLOGO(A)",FECHA:"8/08/2022"},
	// {ID:13,NOMBRE:"OLARTE SEPULVEDA ANGELA MARIA",CARGO:"AUXILIAR DE ENFERMERIA",FECHA:"9/12/2022"},
	// {ID:14,NOMBRE:"OSORIO GARCIA ADRIANA MARIA",CARGO:"ATENCION AL USUARIO SIAU",FECHA:"7/12/2022"}]
    
    // const getDatos=()=>{
    //     return new Promise((resolve,reject)=>{
    //         if (datos.length===0){
    //             reject(new Error("No se tienen datos"));
    //             };
    //             setTimeout(()=>{
    //                 resolve(datos)
    //             },3000);
    //     });        
    // };
    // const datos = data;
    // const consutarDatos =async()=>{
    //     const respuesta=await fetch(datos);
    //     const resultado =await respuesta.json();
    //     console.log(resultado);
    // }
    // consutarDatos();

    
    return (
    <>
        {
            data.map((prod)=>{
                return(
                    <div key = {prod.ID}>
                        <h1>{prod.CARGO}</h1>
                    </div>
                )
            })
        }
    </>
    )
}

export default Consulta