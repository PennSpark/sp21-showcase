import React from "react"

// styling
// import "../styles/bootstrap.css" // from react-bootstrap
// import "../styles/global.css"

export default function Layout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>PCL Showcase</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </head>
            <body style={{margin: "0px", padding: "0px"}}>
                {children}
            <footer style={{height: "50px", marginTop: "40px", textAlign: "center", fontSize: "1rem"}}><a href="https://github.com/PennCreativeLabs/sp21-showcase" target="_blank" rel="noopener noreferrer">Source Code</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="http://penncreativelabs.com/" target="_blank" rel="noopener noreferrer">Penn Creative Labs</a>&nbsp;&nbsp;<a href="https://www.facebook.com/penncreativelabs" target="_blank" rel="noopener noreferrer" class="fa fa-facebook"/>&nbsp;<a href="https://www.instagram.com/penncreativelabs" target="_blank" rel="noopener noreferrer" class="fa fa-instagram"/>&nbsp;<a href="https://www.github.com/penncreativelabs" target="_blank" rel="noopener noreferrer" class="fa fa-github"/></footer>
            </body>
        </html>
    )
}