import Wrapper from "../assets/wrappers/ErrorPage";
import error from '../assets/images/error.svg'
import { Link } from "react-router-dom";
const Error = () => {
	return <Wrapper className="full-page">
    <div>
      <img src={error} className="img" alt="Page not found" />
      <h3>Oops page was not found</h3>
      <p>try again later/try different url</p>
      <Link to='/'>Back to Home</Link>
    </div>
    </Wrapper>;
};
export default Error;
