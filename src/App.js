import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
    const styles = {
        width: 200,
        height: "auto",
        margin: "auto",
        padding: 20,
        boxShadow: "0 0 20px rgba(0,0,0, 0.2)",
    }
    return (
        <div style={styles}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App