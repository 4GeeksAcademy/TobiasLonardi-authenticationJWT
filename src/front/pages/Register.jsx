import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"

const initialStateUser = {
    lastname:"",
    firstname:"",
    email:"",
    password:""
}

export const Register = () => {
    const [user, setUser] = useState(initialStateUser)
    const navigate = useNavigate()

    const handleChange = ({target}) => {
        setUser({
            ...user,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (event) =>{
        event.preventDefault()
        const url = import.meta.env.VITE_BACKEND_URL;
        const response = await fetch(`${url}/register`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        if(response.status === 201){
            setUser(initialStateUser)
            setTimeout(()=>{
                navigate("/login")
            }, 2000)
        }
        else if(response.status === 400){
            alert("falta algun valor para crear el usuario, por favor completa el formulario")
        } else{
            alert("Error al registrar el usuario")
        }

    }
    return (
        <div className="container">
            <div>
                <h2 className="text-center my-3">Registrate para continuar</h2>
                <div className="col-12 col-md-6">
                    <form className="border m-2 p-3" onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="btnName">Nombre:</label>
                            <input type="text"
                            placeholder="Jhon"
                            className="form-control"
                            id="btnName"
                            name="firstname"
                            onChange={handleChange}
                            
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="btnName">Apellido:</label>
                            <input type="text"
                            placeholder="Doe"
                            className="form-control"
                            id="btnName"
                            name="lastname"
                            onChange={handleChange}
                            
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="btnEmail">Correo electronico</label>
                            <input
                            type="text"
                            placeholder="JhonDoe@gmail.com"
                            className="form-control"
                            id="btnEmail"
                            name="email"
                            onChange={handleChange}
                            />

                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="btnPass">Contraseña: </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="form-control"
                                id="btnPass"
                                name="password"
                                onChange={handleChange}
                            />
                        </div>
                        <button className="btn btn-outline-primary w-100">
                            Registrar

                        </button>
                    </form>
                    
                </div>
                <div className="w-100"></div>

                <div className="col-12 col-md-6  d-flex justify-content-between my-1 px-4 ">
                    <Link to="/login">Ya tengo una cuenta</Link>
                </div>

            </div>

            
        </div>
    )
}