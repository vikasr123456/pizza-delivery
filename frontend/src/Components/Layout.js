import { Outlet, Link } from "react-router-dom";
import { useGetMeQuery } from "../redux/api/userApi";
import { useSelector } from "react-redux";
import { useLazyLogoutQuery } from "../redux/api/authApi";
import { useNavigate } from 'react-router-dom';

const Layout = () => {

  const navigate = useNavigate()
  const {isLoading} = useGetMeQuery()
  const { user } = useSelector((state) => state.auth)
  const [logout , {data}] = useLazyLogoutQuery()
  const logoutHandler = () => {
    logout()
    navigate(0)
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
            {user?(
              <><a>{user?.name}</a><Link to="/" onClick={logoutHandler}>Logout</Link></>
              // <select >
              // <option >
              //   <Link className="dropdown-item" to="/admin/dashboard">
              //     {user?.name}
              //    </Link></option>
              // <option >
              // <Link className="dropdown-item" to="/me/orders">
              //     Orders
              // </Link>

              // </option>
              // <option ><Link className="dropdown-item" to="/me/profile">
              //    Profile
              //  </Link></option>
              // <option >
              // <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}  >
              //    Logout
              //   </Link>
              // </option>
              // </select>

            ):!isLoading &&(
              <><li>
                <Link to="/login">Login</Link>
              </li><li>
                  <Link to="/register">Register</Link>
                </li>
                </>
            )}
         
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;