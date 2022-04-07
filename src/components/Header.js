import '../styles/Header.css'
import Button from './Button'
function Header() {
    return (<div className='headerTitle'>
        <h2 className='title'>Réservez le menu qui vous convient</h2>
        <p className='subtitle'>Découvrez des restaurants d'exception, sélectionnés par nos soins</p>
        <Button />
    </div>
    )
}

export default Header