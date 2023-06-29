import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"


const Navbar = () => {
    const [loginStatus, setLoginStatus] = useState(false)
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const menus = [ 'signup', 'login']
    useEffect(() => {
        let token = localStorage.getItem("token")
        if(!token) {
            setLoginStatus(false)
        } else {
            setLoginStatus(true)
        }
    }, [loginStatus])

    const handleLogout = () => {
        localStorage.clear()
        setLoginStatus(false)
        navigate('/')
    }

    const menuHandler = () => {
        setOpen(true)
    }

    const handlePageChange = (menu) =>{
        navigate('/'+menu)
    }

   const carts = useSelector(state => state.carts)

    return (
        <nav className="nav-main">
            <div className="nav-1">
                <Link className="navbar-brand" to={'/'}>
                    <small className="small-1">SHOP</small><small className="small-2 text-dark">LANE</small>
                </Link>
            <div className="nav-button">
                {loginStatus ? (
                    <>
                    <Link
                        className="btn btn-danger"
                        onClick={handleLogout}> Logout </Link>
                    <Link
                        className="btn btn-primary cart-container"
                        to={"/cart"}
                        >Cart {carts.length}</Link>
                        
                    <Link
                        className="btn btn-primary"
                        to={"/favourite"}
                        >Favourite</Link>
                    </>
                ) : (
                    <ul className="nav-dropdowns">
                    <li
                     className="nav-dropdown" 
                     onClick={menuHandler}
                     style={{cursor:"pointer"}}
                    >Login or Sign Up</li>
                    { 
                        open && (menus.map((menu) => (
                            <li className="nav-dropdown" onClick={() => setOpen(false)}>
                               <a onClick={() => handlePageChange(menu)}>{menu}</a>
                                </li>
                        )))
                    }
                    
                </ul>
                )
                }
                
            </div>   
                
            </div>
            <hr />
            <div className="nav-2">
                <li className="nav-item active">
                    <Link className="nav-link text-dark" to={'/'}>All</Link>
                </li>

                <li className="nav-item active">
                    <Link className="nav-link text-dark" to={'/Electronics'}>Electronics</Link>
                </li>

                <li className="nav-item active">
                    <Link className="nav-link text-dark" to={'/Jewellery'}>Jewelery</Link>
                </li>

                <li className="nav-item active">
                    <Link className="nav-link text-dark" to={"/Mensclothing"}>Men's Clothing</Link>
                </li>

                <li className="nav-item active">
                    <Link className="nav-link text-dark" to={"/Womenscolthing"}>Women's Clothing</Link>
                </li>
            </div>
            <hr />
        </nav>
    )
}

export default Navbar