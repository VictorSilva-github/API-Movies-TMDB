import { useParams } from "react-router-dom"



export default function Home(){
    const {id} = useParams()
    return( 
    <>
        <h1>HOMEzinho{id}</h1>
    </>)
}