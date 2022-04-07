import '../styles/navbar.css'

function Navbar() {
    return (
        <div className="functionPage">
            <h3 className="titleFunction">
                Fonctionnement
            </h3>
            <ol className="functionTools">
                <li className="listFunction">
                    <span>Choississez votre restaurant</span>
                </li>
                <li className="listFunction">
                    <span>Composez votre menu</span>
                </li>
                <li className="listFunction">
                    <span>Dégustez au restaurant</span>
                </li>
            </ol>
        </div>
    )
}

export default Navbar