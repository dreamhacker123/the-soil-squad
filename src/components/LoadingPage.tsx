const favicon = require("../public/favicon.webp")

export const LoadingPage = ():JSX.Element=>{

    return(
        <div className="page-loading flex">
            <img className="loading-logo" width={80} height={80} src={favicon} />
        </div>
    )
}