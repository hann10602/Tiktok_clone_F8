import Header from "~/Components/Layout/Components/Header"

function HeaderOnlyLayout({children}) {
    return (
        <>
            <Header />
            <div className="container">
                <div id="content">{children}</div>
            </div>
        </>
    )
}

export default HeaderOnlyLayout