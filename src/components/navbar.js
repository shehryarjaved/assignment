import image from '../images/arabia.png'
import flag from '../images/ship.PNG'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import '../App.css';
function Navbar() {
  return <>
    <nav className="navbar navbar-expand-lg navbar-light head" >
      <div className="container-fluid">


        <div class="row">
          <div class="col">
            <a className="navbar-brand" href="#"><img src='https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg' width='120px' /></a>
          </div>
          <div class="col">
            <form className="d-flex searchh">
              <input className="form-control me-2 " type="search" placeholder="What Are U looking For?" aria-label="Search" />

            </form>
          </div>
          <div class="col">
            <img src={image} width='90px' />
          </div>
          <div class="col">
            <img src={flag} width='90px' />
          </div>
          <div class="col">
            <button class="adj"> <PersonIcon />SignIn</button>

          </div>
          <div class="col adj">
            <button class="adj"> <ShoppingCartIcon />Cart</button>

          </div>
        </div>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>



      </div>
    </nav>


    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
   
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ALL CATEGORIES
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">ELECTRONICS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">MEN</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">WOMEN</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">BEAUTY AND FRAGRANCE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">BABY & TOYS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">GROCERY</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SPORTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">THE DUBAI MALL STORE</a>
        </li>
      </ul>
    </div>
  </div>
</nav>




  </>
}
export default Navbar