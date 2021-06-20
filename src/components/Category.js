import { Link } from "react-router-dom";
import '../css/Category.css';


function category() {
    return (
      <>
        <div className="container">
            <div className="row justify-content-around flex-wrap mt-5">
            <Link to="/Psi" className='category-link'> 
                <div className="category-box mb-5">
                    <img src='images/Category/dog.jpg' alt="Psi" />
                        <h3>Psi</h3>
                </div>
            </Link>
            <Link to="/Mačke" className='category-link'> 
                <div className="category-box mb-5">
                    <img src='images/Category/cat.jpg' alt="Macke" />
                    <h3>Mačke</h3>
                </div>
            </Link>
            <Link to="/Ptice" className='category-link'>
                <div className="category-box mb-5">
                    <img src='images/Category/parrot.jpg' alt="Ptice" />
                        <h3>Ptice</h3>
                </div>
            </Link>
            <Link to="/Zečevi" className='category-link'> 
                <div className="category-box mb-5">
                    <img src='images/Category/bunny.jpg' alt="Zecevi" />
                        <h3>Zečevi</h3>
                </div>
            </Link>
            <Link to="/Ribe" className='category-link'> 
                <div className="category-box mb-5" >
                    <img src='images/Category/fish.jpg' alt="Ribice" />
                        <h3>Ribe</h3>
                </div>
            </Link>
            <Link to="/Glodari" className='category-link'>     
                <div className="category-box mb-5">
                    <img src='images/Category/guinea-pig.jpg' alt="Glodari" />
                        <h3>Glodari</h3>
                </div>
            </Link>
            <Link to="/Reptili" className='category-link'>  
                <div className="category-box mb-5">
                    <img src='images/Category/iguana.jpg' alt="Reptili" />
                        <h3>Reptili</h3>
                </div>
            </Link>  
            <Link to="/Domaće_Životinje" className='category-link'>  
                <div className="category-box mb-5">
                    <img src='images/Category/cow.jpg' alt="Domace zivotinje" />
                        <h3>Domaće životinje</h3>
                </div>
            </Link> 
            <Link to="/Zglavkari" className='category-link'>
                <div className="category-box mb-5">
                    <img src='images/Category/spider.jpg' alt="Zglavkari" />
                        <h3>Zglavkari</h3>
                </div>
            </Link> 
            </div>
        </div>
      </>
    );
  }
  
  export default category;
  