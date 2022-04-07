import '../styles/Cards.css'
import '../assets/'

const resto1


function cards() {
    return (
        <div className="cards">
            <article className="restaurantCard">
                <a href="pages">
                    <img className="imgRestaurant" src="./assets/resto1.jpg" alt=""></img>
                    <span className="new">nouveau</span>
                    <h4 className="titleCard">La palette du goût</h4>
                    <p className= "city">Ménilmontant</p>
                </a>
            </article>
            
            <article className="restaurantCard">
                <a href="pages">
                    <img className="imgRestaurant" src="../assets/resto2.jpg" alt=""></img>
                    <span className="new">nouveau</span>
                    <h4 className="titleCard">La palette du goût</h4>
                    <p className= "city">Ménilmontant</p>
                </a>
            </article>
            
            <article className="restaurantCard">
                <a href="pages">
                    <img className="imgRestaurant" src="../assets/resto3.jpg" alt=""></img>
                    <span className="new">nouveau</span>
                    <h4 className="titleCard">La palette du goût</h4>
                    <p className= "city">Ménilmontant</p>
                </a>
            </article>
            
            <article className="restaurantCard">
                <a href="pages">
                    <img className="imgRestaurant" src="../assets/resto4.jpg" alt=""></img>
                    <span className="new">nouveau</span>
                    <h4 className="titleCard">La palette du goût</h4>
                    <p className= "city">Ménilmontant</p>
                </a>
            </article>
            
        </div>
    )
}

export default cards