import React from "react"

function Header () {
    const styles = {
        color: "#efefef",
        backgroundColor: "#151515",
        padding: 20
    }
    return (
        <div className="header" style={styles}>
            <ul>
                <li>Home</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Header