import {Link} from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h1>Page not found</h1>
      <Link to='/'>Go to home</Link>
    </>
  )
}