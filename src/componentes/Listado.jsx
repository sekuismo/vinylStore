import React, {useState, useEffect} from 'react'

const Listado = () => {
    //setear los hooks useState
    const [vinilos, setVinilos]= useState([])
    const [search, setSearch]= useState("")

    //funcion para consumir la API 
    const URL = 'http://localhost:3004/discos'


    const showData = async () =>{
    const response = await  fetch (URL)
    const data = await response.json()
    //console.log(data)
    setVinilos(data)
    }
    

    //funcion de busqueda
    const searcher = (e) =>{
        setSearch(e.target.value)
        //console.log(e.target.value)
    }

    useEffect(()=>{
       showData ()
    }, [] )

     //metodos de filtrado 1
     let results =[]
     if(!search)
     {
       results = vinilos
     }else{
        results = vinilos.filter((dato) => 
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
        ) 
      } 

    
    useEffect(()=>{
       showData ()
    }, [] )
    //renderizar las vistas


  return (
    <div>

        <h1 className='display-2'>Lista completa</h1>
        <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr >
                    <th>Vinilo</th>
                    <th>intérprete</th>
                    <th>Precio</th>
                    <th>Año</th>
                    <th>estilo</th>
                    <th>stock</th>
                </tr>
            </thead>
            <tbody>
                {results.map( (vinilo)=>(
                    <tr key={vinilo.nombreDisco}>
                        <td>{vinilo.nombreDisco}</td>
                        <td>{vinilo.interprete}</td>
                        <td>{vinilo.precio}</td>
                        <td>{vinilo.year}</td>
                        <td>{vinilo.estilo}</td>
                        <td>{vinilo.stock}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Listado