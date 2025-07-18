import { NavLink, useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="error-container">
            <h1>🚫 Oops! Something Went Wrong</h1>
            <p className="error-message">
                {error?.statusText || error?.message || "Unexpected error occurred."}
            </p>

            {/* in router-dom we use navlink in the place of <a> */}
            <NavLink to="/" className="back-link">
                🔙 Go Back Home
            </NavLink>
        </div>
    )
}

export default ErrorPage;