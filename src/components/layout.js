import React from "react"

// styling
// import "../styles/bootstrap.css" // from react-bootstrap
// import "../styles/global.css"

export default function Layout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>PCL Showcase</title>
            </head>
            <body>
                {children}
            <footer style={{height: "50px"}}></footer>
            </body>
        </html>
    )
}