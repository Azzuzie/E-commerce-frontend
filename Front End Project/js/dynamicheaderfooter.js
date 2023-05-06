// Dynamically generated Header
function Header(){
    var dynamicheader=document.getElementById("dynamicheader");
    dynamicheader.innerHTML=
    '<nav class="navbar  navbar-expand-lg navbar-dark bg-dark">'+
    '<div class="container-fluid " id="header">'+
    '<a class="navbar-brand brand-style" href="home.html" >'+
    ' <h2 class="brand">Ecommerce</h2>'+
    '</a>'+
   
    ' <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">'+
    ' <span class="navbar-toggler-icon"></span>'+
    '</button>'+
      
    '<div class="collapse navbar-collapse justify-content-around" id="navbarNav" >'+
    '<ul class="navbar-nav">'+
    '<li class="nav-item">'+
    ' <form class="d-flex search-form">'+
    ' <input class="form-control me-2 search" type="search" placeholder="Search for products" aria-label="Search">'+
    ' <button class="btn btn-warning btn-hover" type="submit" style="color:black;font-weight:bold;">Search</button>'+
    ' </form>'+
    ' </li>'+
    ' </ul>'+
    ' <ul class="navbar-nav">'+
    ' <li class="nav-item me-3 login-btn">'+
    ' <a class="nav-link btn btn-warning lg-btn btn-hover" href="login.html" style="color:black;font-weight:bold;">Login</a>'+
    '</li>'+
    '<li class="nav-item cart-logo">'+
    '<a class="nav-link" href="mycart.html">'+
    '  <i class="fa-solid fa-cart-shopping"></i>'+
    ' </a>'+
    ' </li>'+
    ' </ul>'+
    '</div>'+
    '</div>'+
    '</nav>'+
    '<!-- Top Header end -->'+


    '<!-- Bottom Header start -->'+
    ' <!-- Nav Links -->'+
    '<nav class="navbar navbar-expand-lg navbar-light bg-light">'+
    ' <div class="container-fluid">'+
    ' <div class="collapse navbar-collapse justify-content-center" id="navbarNav">'+
    '<ul class="navbar-nav navbar-nav-small">'+

    ' <li class="nav-item li-width">'+
    '  <a class="nav-link active" aria-current="page" href="home.html">Home</a>'+
    ' </li>'+

    '<li class="nav-item li-width">'+
    ' <a class="nav-link" href="allproducts.html">All Products</a>'+
    ' </li>'+

    ' <li class="nav-item dropdown li-width">'+
    '<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Women</a>'+
    '<ul class="dropdown-menu">'+
    ' <!-- dropdown items -->'+
    ' <li><a class="dropdown-item" href="women-all.html">All</a></li>'+
    ' <li><a class="dropdown-item" href="dresses.html">Dresses</a></li>'+
    '<li><a class="dropdown-item" href="women-pants.html">Pants</a></li>'+
    ' <li><a class="dropdown-item" href="skirts.html">Skirts</a></li>'+
    ' </ul>'+
    ' </li>'+

    ' <li class="nav-item dropdown li-width">'+
    ' <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Men</a>'+
    ' <ul class="dropdown-menu">'+
    '  <!-- dropdown items -->'+
    ' <li><a class="dropdown-item" href="men-all.html">All</a></li>'+
    '<li><a class="dropdown-item" href="shirts.html">Shirts</a></li>'+
    ' <li><a class="dropdown-item" href="men-pants.html">Pants</a></li>'+
    '<li><a class="dropdown-item" href="hoodies.html">Hoodies</a></li>'+
    ' </ul>'+
    '  </li>'+

    // ' <li class="nav-item dropdown li-width">'+
    // ' <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Kids</a>'+
    // ' <ul class="dropdown-menu">'+
    // '  <!-- dropdown items -->'+
    // ' <li><a class="dropdown-item" href="kids-boy.html">Boys</a></li>'+
    // '<li><a class="dropdown-item" href="kids-girl.html">Girls</a></li>'+
    // ' </ul>'+
    // '  </li>'+

    '<li class="nav-item li-width">'+
    ' <a class="nav-link" href="kids.html">Kids</a>'+
    ' </li>'+

    '<li class="nav-item li-width">'+
    ' <a class="nav-link" href="contact.html">Contact</a>'+
    '  </li>'+
    ' </ul>'+
    ' </div>'+
    ' </div>'+
  '</nav> ';
}
Header();

// Dynamically generated Footer
function Footer(){
    var dynamicfooter=document.getElementById("dynamicfooter");
    dynamicfooter.innerHTML=
    '<footer>'+
    '<div class="row">'+
    ' <div class="col-lg-3 col-md-12">'+
        '<h3>Women</h3>'+
           ' <ul>'+
              '<li><a href="dresses.html">Dresses</a></li>'+
              ' <li><a href="women-pants.html">Pants</a></li>'+
              '<li><a href="skirts.html">Skirts</a></li>'+
              ' </ul>'+
              ' </div>'+
              '<div class="col-lg-3 col-md-12">'+
              ' <h3>Men</h3>'+
              '  <ul>'+
              '<li><a href="shirts.html">Shirts</a></li>'+
              '<li><a href="men-pants.html">Pants</a></li>'+
              '<li><a href="hoodies.html">Hoodies</a></li>'+
              ' </ul>'+
              ' </div>'+

              '<div class="col-lg-3 col-md-12">'+
              ' <h3>Kids</h3>'+
              '<ul>'+
              '<li><a href="kids.html">Dresses</a></li>'+
              // ' <li><a href="kids-girl.html">Girls</a></li>'+
              '  </ul>'+
              ' </div>'+

              ' <div class="col-lg-3 col-md-12">'+
              '<h3>Links</h3>'+
              ' <ul>'+
              ' <li><a href="home.html">Home</a></li>'+
              ' <li><a href="contact.html">Contact</a></li>'+
              '  <li><a href="login.html">Login</a></li>'+
              '  </ul>'+
              ' </div>'+
              ' </div>'+
              '  <hr>'+
              ' <p>COPYRIGHT &copy; Ajith Design  2023</p>'+
              '</footer>';
}
Footer();

