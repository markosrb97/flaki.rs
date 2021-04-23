import dogPhoto from '../images/category/dog.jpg'
import { Link } from "react-router-dom";
import '../css/Category.css';


function Category() {
    return (
      <>
        <div className="container">
            <div className="row justify-content-between mt-5">
            <Link to="/Dog"> <div className="category-box">
                    <img src={dogPhoto} alt="Psi" />
                    <h3>Kategorija</h3>
                </div></Link>
                <div className="category-box ">
                    <img src={dogPhoto} alt="Macke" />
                    <h3>Kategorija</h3>
                </div>
                <div className="category-box">
                    <img src={dogPhoto} alt="Zecevi" />
                    <h3>Kategorija</h3>
                </div>
                <div className="category-box">
                    <img src={dogPhoto} alt="Ribice" />
                    <h3>Kategorija</h3>
                </div>
                <div className="category-box">
                    <img src={dogPhoto} alt="Glodari" />
                    <h3>Kategorija</h3>
                </div>
                <div className="category-box">
                    <img src={dogPhoto} alt="Reptili" />
                    <h3>Kategorija</h3>
                </div>
                <div className="category-box">
                    <img src={dogPhoto} alt="Domace zivotinje" />
                    <h3>Kategorija</h3>
                </div>
                <div className="category-box">
                    <img src={dogPhoto} alt="Zglavkari" />
                    <h3>Kategorija</h3>
                </div>
                <div className="category-box">
                    <img src={dogPhoto} alt="Ostalo" />
                    <h3>Kategorija</h3>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default Category;
  