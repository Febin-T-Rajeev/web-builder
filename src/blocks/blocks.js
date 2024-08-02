export const blocks = [

  {
    id: 'full-page-wwwwwebsite3',
    label: '<b>Navbar 2</b>',
    category: 'Navigation',
    content: ` 
    <nav class="navbar">
      <div class="container">
        <a href="#" class="brand-logo">
          <img src="image.png" alt="Logo Icon" class="logo-icon">
          <span class="logo-text">Logo</span>
        </a>
        <button class="burger-menu" aria-label="Toggle navigation">
          <span class="burger-line"></span>
          <span class="burger-line"></span>
          <span class="burger-line"></span>
        </button>
        <ul class="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
    <style>
      .navbar {
        background: #333;
        color: #fff;
        padding: 0.5rem 1rem;
        position: relative;
      }
      .container {
        display: flex;
        justify-content: space-between; /* Align logo and nav-links to the edges */
        align-items: center;
        width: 100%;
      }
      .brand-logo {
        display: flex;
        align-items: center;
        color: #fff;
        text-decoration: none;
        flex-shrink: 0; /* Prevent the logo from shrinking */
      }
      .logo-icon {
        height: 30px;
        width: auto;
        margin-right: 0.5rem;
      }
      .logo-text {
        font-size: 1.5rem;
        font-weight: bold;
      }
      .burger-menu {
        display: none;
        flex-direction: column;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
      }
      .burger-line {
        background: #fff;
        height: 3px;
        width: 25px;
        margin: 3px 0;
        border-radius: 3px;
      }
      .nav-links {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex: 1; /* Allow it to take up remaining space */
        justify-content: flex-end; /* Align items to the right */
        gap: 1rem; /* Space between items */
        margin-left: auto; /* Push the nav-links to the right */
      }
      .nav-links li {
        margin: 0; /* Remove margin on individual list items */
      }
      .nav-links a {
        color: #fff;
        text-decoration: none;
        font-size: 1rem;
        display: block;
        padding: 0.5rem;
      }
      .nav-links a:hover {
        background: #555;
        border-radius: 4px;
      }
      @media (max-width: 768px) {
        .burger-menu {
          display: flex;
        }
        .nav-links {
          display: none;
          flex-direction: column;
          position: absolute;
          top: 100%;
          right: 0;
          background: #333;
          width: 100%;
          border-top: 1px solid #444;
          gap: 0; /* Remove gap for vertical stacking */
        }
        .nav-links.active {
          display: flex;
        }
        .nav-links li {
          margin: 0;
        }
        .nav-links a {
          padding: 1rem;
          border-bottom: 1px solid #444;
        }
      }
    </style>
    <script>
      document.querySelector('.burger-menu').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
      });
    </script>
   `},

  {
    id: 'full-page-website3',
    label: '<b>Website 3</b>',
    category: 'Full template',
    content: `
    <body>
    <!-- Header -->
    <section id="header">
      <div class="header container">
        <div class="nav-bar">
          <div class="brand">
            <a href="#hero">
              <h1>Aren</h1>
            </a>
          </div>
          <div class="nav-list">
            <div class="hamburger">
              <div class="bar"></div>
            </div>
            <ul>
              <li><a href="#hero" data-after="Home">Home</a></li>
              <li><a href="#services" data-after="Service">Services</a></li>
              <li><a href="#projects" data-after="Projects">Projects</a></li>
              <li><a href="#about" data-after="About">About</a></li>
              <li><a href="#contact" data-after="Contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- End Header -->
  
  
    <!-- Hero Section  -->
    <section id="hero">
      <div class="hero container">
        <div>
          <h1>Hello, </h1>
          <h1>My Name is </h1>
          <h1>Aren</h1>
          <a href="#projects" type="button" class="cta">Portfolio</a>
        </div>
      </div>
    </section>
    <!-- End Hero Section  -->
  
    <!-- Service Section -->
    <section id="services">
      <div class="services container">
        <div class="service-top">
          <h1 class="section-title">Serv<span>i</span>ces</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda quas
            magni et, doloribus quod voluptate quasi molestiae magnam officiis dolorum, dolor provident atque molestias
            voluptatum explicabo!</p>
        </div>
        <div class="service-bottom">
          <div class="service-item">
            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
            <h2>Web Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
              architecto placeat beatae tenetur officia quod</p>
          </div>
          <div class="service-item">
            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
            <h2>Web Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
              architecto placeat beatae tenetur officia quod</p>
          </div>
          <div class="service-item">
            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
            <h2>Web Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
              architecto placeat beatae tenetur officia quod</p>
          </div>
          <div class="service-item">
            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
            <h2>Web Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
              architecto placeat beatae tenetur officia quod</p>
          </div>
        </div>
      </div>
    </section>
    <!-- End Service Section -->
  
    <!-- Projects Section -->
    <section id="projects">
      <div class="projects container">
        <div class="projects-header">
          <h1 class="section-title">Recent <span>Projects</span></h1>
        </div>
        <div class="all-projects">
          <div class="project-item">
            <div class="project-info">
              <h1>Project 1</h1>
              <h2>Coding is Love</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
                rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
                harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
            </div>
            <div class="project-img">
              <img src="./img/img-1.png" alt="img">
            </div>
          </div>
          <div class="project-item">
            <div class="project-info">
              <h1>Project 2</h1>
              <h2>Coding is Love</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
                rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
                harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
            </div>
            <div class="project-img">
              <img src="./img/img-1.png" alt="img">
            </div>
          </div>
          <div class="project-item">
            <div class="project-info">
              <h1>Project 3</h1>
              <h2>Coding is Love</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
                rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
                harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
            </div>
            <div class="project-img">
              <img src="./img/img-1.png" alt="img">
            </div>
          </div>
          <div class="project-item">
            <div class="project-info">
              <h1>Project 4</h1>
              <h2>Coding is Love</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
                rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
                harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
            </div>
            <div class="project-img">
              <img src="./img/img-1.png" alt="img">
            </div>
          </div>
          <div class="project-item">
            <div class="project-info">
              <h1>Project 5</h1>
              <h2>Coding is Love</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
                rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
                harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
            </div>
            <div class="project-img">
              <img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt="img">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Projects Section -->
  
    <!-- About Section -->
    <section id="about">
      <div class="about container">
        <div class="col-left">
          <div class="about-img">
            <img src="img.png" alt="img">
          </div>
        </div>
        <div class="col-right">
          <h1 class="section-title">About <span>me</span></h1>
          <h2>Front End Developer</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, velit alias eius non illum beatae atque
            repellat ratione qui veritatis repudiandae adipisci maiores. At inventore necessitatibus deserunt
            exercitationem cumque earum omnis ipsum rem accusantium quis, quas quia, accusamus provident suscipit magni!
            Expedita sint ad dolore, commodi labore nihil velit earum ducimus nulla quae nostrum fugit aut, deserunt
            reprehenderit libero enim!</p>
          <a href="#" class="cta">Download Resume</a>
        </div>
      </div>
    </section>
    <!-- End About Section -->
  
    <!-- Contact Section -->
    <section id="contact">
      <div class="contact container">
        <div>
          <h1 class="section-title">Contact <span>info</span></h1>
        </div>
        <div class="contact-items">
          <div class="contact-item">
            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
            <div class="contact-info">
              <h1>Phone</h1>
              <h2>+1 234 123 1234</h2>
              <h2>+1 234 123 1234</h2>
            </div>
          </div>
          <div class="contact-item">
            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
            <div class="contact-info">
              <h1>Email</h1>
              <h2>info@gmail.com</h2>
              <h2>abcd@gmail.com</h2>
            </div>
          </div>
          <div class="contact-item">
            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
            <div class="contact-info">
              <h1>Address</h1>
              <h2>Fatikchhari, Chittagong, Bangladesh</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Contact Section -->
  
    <!-- Footer -->
    <section id="footer">
      <div class="footer container">
        <div class="brand">
          <h1><span>S</span>haif <span>A</span>rfan</h1>
        </div>
        <h2>Your Complete Web Solution</h2>
        <div class="social-icon">
          <div class="social-item">
            <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" /></a>
          </div>
          <div class="social-item">
            <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" /></a>
          </div>
          
        </div>
        <p>Copyright © 2020 Arfan. All rights reserved</p>
      </div>
    </section>
    <!-- End Footer -->
    <script>
    const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

    </script>
  </body>
  <style>
  @import 'https://fonts.googleapis.com/css?family=Montserrat:300, 400, 700&display=swap';
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
html {
	font-size: 10px;
	font-family: 'Montserrat', sans-serif;
	scroll-behavior: smooth;
}
a {
	text-decoration: none;
}
.container {
	min-height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
img {
	height: 100%;
	width: 100%;
	object-fit: cover;
}
p {
	color: black;
	font-size: 1.4rem;
	margin-top: 5px;
	line-height: 2.5rem;
	font-weight: 300;
	letter-spacing: 0.05rem;
}
.section-title {
	font-size: 4rem;
	font-weight: 300;
	color: black;
	margin-bottom: 10px;
	text-transform: uppercase;
	letter-spacing: 0.2rem;
	text-align: center;
}
.section-title span {
	color: crimson;
}

.cta {
	display: inline-block;
	padding: 10px 30px;
	color: white;
	background-color: transparent;
	border: 2px solid crimson;
	font-size: 2rem;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	margin-top: 30px;
	transition: 0.3s ease;
	transition-property: background-color, color;
}
.cta:hover {
	color: white;
	background-color: crimson;
}
.brand h1 {
	font-size: 3rem;
	text-transform: uppercase;
	color: white;
}
.brand h1 span {
	color: crimson;
}

/* Header section */
#header {
	position: fixed;
	z-index: 1000;
	left: 0;
	top: 0;
	width: 100vw;
	height: auto;
}
#header .header {
	min-height: 8vh;
	background-color: rgba(31, 30, 30, 0.24);
	transition: 0.3s ease background-color;
}
#header .nav-bar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	max-width: 1300px;
	padding: 0 10px;
}
#header .nav-list ul {
	list-style: none;
	position: absolute;
	background-color: rgb(31, 30, 30);
	width: 100vw;
	height: 100vh;
	left: 100%;
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 1;
	overflow-x: hidden;
	transition: 0.5s ease left;
}
#header .nav-list ul.active {
	left: 0%;
}
#header .nav-list ul a {
	font-size: 2.5rem;
	font-weight: 500;
	letter-spacing: 0.2rem;
	text-decoration: none;
	color: white;
	text-transform: uppercase;
	padding: 20px;
	display: block;
}
#header .nav-list ul a::after {
	content: attr(data-after);
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) scale(0);
	color: rgba(240, 248, 255, 0.021);
	font-size: 13rem;
	letter-spacing: 50px;
	z-index: -1;
	transition: 0.3s ease letter-spacing;
}
#header .nav-list ul li:hover a::after {
	transform: translate(-50%, -50%) scale(1);
	letter-spacing: initial;
}
#header .nav-list ul li:hover a {
	color: crimson;
}
#header .hamburger {
	height: 60px;
	width: 60px;
	display: inline-block;
	border: 3px solid white;
	border-radius: 50%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
	cursor: pointer;
	transform: scale(0.8);
	margin-right: 20px;
}
#header .hamburger:after {
	position: absolute;
	content: '';
	height: 100%;
	width: 100%;
	border-radius: 50%;
	border: 3px solid white;
}
#header .hamburger .bar {
	height: 2px;
	width: 30px;
	position: relative;
	background-color: white;
	z-index: -1;
}
#header .hamburger .bar::after,
#header .hamburger .bar::before {
	content: '';
	position: absolute;
	height: 100%;
	width: 100%;
	left: 0;
	background-color: white;
	transition: 0.3s ease;
	transition-property: top, bottom;
}
#header .hamburger .bar::after {
	top: 8px;
}
#header .hamburger .bar::before {
	bottom: 8px;
}
#header .hamburger.active .bar::before {
	bottom: 0;
}
#header .hamburger.active .bar::after {
	top: 0;
}
/* End Header section */

/* Hero Section */
#hero {
	background-image: url(bg.png);
	background-size: cover;
	background-position: top center;
	position: relative;
	z-index: 1;
}
#hero::after {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	background-color: black;
	opacity: 0.7;
	z-index: -1;
}
#hero .hero {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 50px;
	justify-content: flex-start;
}
#hero h1 {
	display: block;
	width: fit-content;
	font-size: 4rem;
	position: relative;
	color: transparent;
	animation: text_reveal 0.5s ease forwards;
	animation-delay: 0.5s;
}
#hero h1:nth-child(1) {
	animation-delay: 1s;
}
#hero h1:nth-child(2) {
	animation-delay: 2s;
}
#hero h1:nth-child(3) {
	animation: text_reveal_name 0.5s ease forwards;
	animation-delay: 3s;
}
#hero h1 span {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 0;
	background-color: crimson;
	animation: text_reveal_box 1s ease;
	animation-delay: 0.5s;
}
#hero h1:nth-child(1) span {
	animation-delay: 0.5s;
}
#hero h1:nth-child(2) span {
	animation-delay: 1s;
}
#hero h1:nth-child(3) span {
	animation-delay: 1.5s;
}

/* End Hero Section */

/* Services Section */
#services .services {
	flex-direction: column;
	text-align: center;
	max-width: 1500px;
	margin: 0 auto;
	padding: 100px 0;
}
#services .service-top {
	max-width: 500px;
	margin: 0 auto;
}
#services .service-bottom {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: 50px;
}
#services .service-item {
	flex-basis: 80%;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	padding: 30px;
	border-radius: 10px;
	background-image: url(./img/img-1.png);
	background-size: cover;
	margin: 10px 5%;
	position: relative;
	z-index: 1;
	overflow: hidden;
}
#services .service-item::after {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
	opacity: 0.9;
	z-index: -1;
}
#services .service-bottom .icon {
	height: 80px;
	width: 80px;
	margin-bottom: 20px;
}
#services .service-item h2 {
	font-size: 2rem;
	color: white;
	margin-bottom: 10px;
	text-transform: uppercase;
}
#services .service-item p {
	color: white;
	text-align: left;
}
/* End Services Section */

/* Projects section */
#projects .projects {
	flex-direction: column;
	max-width: 1200px;
	margin: 0 auto;
	padding: 100px 0;
}
#projects .projects-header h1 {
	margin-bottom: 50px;
}
#projects .all-projects {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
#projects .project-item {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 80%;
	margin: 20px auto;
	overflow: hidden;
	border-radius: 10px;
}
#projects .project-info {
	padding: 30px;
	flex-basis: 50%;
	height: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
	color: white;
}
#projects .project-info h1 {
	font-size: 4rem;
	font-weight: 500;
}
#projects .project-info h2 {
	font-size: 1.8rem;
	font-weight: 500;
	margin-top: 10px;
}
#projects .project-info p {
	color: white;
}
#projects .project-img {
  flex-basis: 50%;
  height: 300px;
  overflow: hidden;
  position: relative;
}

#projects .project-img img {
  transition: 0.3s ease transform;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the container */
  pointer-events: auto; /* Ensure pointer events are enabled */
}

#projects .project-item:hover .project-img img {
  transform: scale(1.1);
}

/* End Projects section */

/* About Section */
#about .about {
	flex-direction: column-reverse;
	text-align: center;
	max-width: 1200px;
	margin: 0 auto;
	padding: 100px 20px;
}
#about .col-left {
	width: 250px;
	height: 360px;
}
#about .col-right {
	width: 100%;
}
#about .col-right h2 {
	font-size: 1.8rem;
	font-weight: 500;
	letter-spacing: 0.2rem;
	margin-bottom: 10px;
}
#about .col-right p {
	margin-bottom: 20px;
}
#about .col-right .cta {
	color: black;
	margin-bottom: 50px;
	padding: 10px 20px;
	font-size: 2rem;
}
#about .col-left .about-img {
	height: 100%;
	width: 100%;
	position: relative;
	border: 10px solid white;
}
#about .col-left .about-img::after {
	content: '';
	position: absolute;
	left: -33px;
	top: 19px;
	height: 98%;
	width: 98%;
	border: 7px solid crimson;
	z-index: -1;
}
/* End About Section */

/* contact Section */
#contact .contact {
	flex-direction: column;
	max-width: 1200px;
	margin: 0 auto;
	width: 90%;
}
#contact .contact-items {
	/* max-width: 400px; */
	width: 100%;
}
#contact .contact-item {
	width: 80%;
	padding: 20px;
	text-align: center;
	border-radius: 10px;
	padding: 30px;
	margin: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	box-shadow: 0px 0px 18px 0 #0000002c;
	transition: 0.3s ease box-shadow;
}
#contact .contact-item:hover {
	box-shadow: 0px 0px 5px 0 #0000002c;
}
#contact .icon {
	width: 70px;
	margin: 0 auto;
	margin-bottom: 10px;
}
#contact .contact-info h1 {
	font-size: 2.5rem;
	font-weight: 500;
	margin-bottom: 5px;
}
#contact .contact-info h2 {
	font-size: 1.3rem;
	line-height: 2rem;
	font-weight: 500;
}
/*End contact Section */

/* Footer */
#footer {
	background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
}
#footer .footer {
	min-height: 200px;
	flex-direction: column;
	padding-top: 50px;
	padding-bottom: 10px;
}
#footer h2 {
	color: white;
	font-weight: 500;
	font-size: 1.8rem;
	letter-spacing: 0.1rem;
	margin-top: 10px;
	margin-bottom: 10px;
}
#footer .social-icon {
	display: flex;
	margin-bottom: 30px;
}
#footer .social-item {
	height: 50px;
	width: 50px;
	margin: 0 5px;
}
#footer .social-item img {
	filter: grayscale(1);
	transition: 0.3s ease filter;
}
#footer .social-item:hover img {
	filter: grayscale(0);
}
#footer p {
	color: white;
	font-size: 1.3rem;
}
/* End Footer */

/* Keyframes */
@keyframes hamburger_puls {
	0% {
		opacity: 1;
		transform: scale(1);
	}
	100% {
		opacity: 0;
		transform: scale(1.4);
	}
}
@keyframes text_reveal_box {
	50% {
		width: 100%;
		left: 0;
	}
	100% {
		width: 0;
		left: 100%;
	}
}
@keyframes text_reveal {
	100% {
		color: white;
	}
}
@keyframes text_reveal_name {
	100% {
		color: crimson;
		font-weight: 500;
	}
}
/* End Keyframes */

/* Media Query For Tablet */
@media only screen and (min-width: 768px) {
	.cta {
		font-size: 2.5rem;
		padding: 20px 60px;
	}
	h1.section-title {
		font-size: 6rem;
	}

	/* Hero */
	#hero h1 {
		font-size: 7rem;
	}
	/* End Hero */

	/* Services Section */
	#services .service-bottom .service-item {
		flex-basis: 45%;
		margin: 2.5%;
	}
	/* End Services Section */

	/* Project */
	#projects .project-item {
		flex-direction: row;
	}
	#projects .project-item:nth-child(even) {
		flex-direction: row-reverse;
	}
	#projects .project-item {
		height: 400px;
		margin: 0;
		width: 100%;
		border-radius: 0;
	}
	#projects .all-projects .project-info {
		height: 100%;
	}
	#projects .all-projects .project-img {
		height: 100%;
	}
	/* End Project */

	/* About */
	#about .about {
		flex-direction: row;
	}
	#about .col-left {
		width: 600px;
		height: 400px;
		padding-left: 60px;
	}
	#about .about .col-left .about-img::after {
		left: -45px;
		top: 34px;
		height: 98%;
		width: 98%;
		border: 10px solid crimson;
	}
	#about .col-right {
		text-align: left;
		padding: 30px;
	}
	#about .col-right h1 {
		text-align: left;
	}
	/* End About */

	/* contact  */
	#contact .contact {
		flex-direction: column;
		padding: 100px 0;
		align-items: center;
		justify-content: center;
		min-width: 20vh;
	}
	#contact .contact-items {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		margin: 0;
	}
	#contact .contact-item {
		width: 30%;
		margin: 0;
		flex-direction: row;
	}
	#contact .contact-item .icon {
		height: 100px;
		width: 100px;
	}
	#contact .contact-item .icon img {
		object-fit: contain;
	}
	#contact .contact-item .contact-info {
		width: 100%;
		text-align: left;
		padding-left: 20px;
	}
	/* End contact  */
}
/* End Media Query For Tablet */

/* Media Query For Desktop */
@media only screen and (min-width: 1200px) {
	/* header */
	#header .hamburger {
		display: none;
	}
	#header .nav-list ul {
		position: initial;
		display: block;
		height: auto;
		width: fit-content;
		background-color: transparent;
	}
	#header .nav-list ul li {
		display: inline-block;
	}
	#header .nav-list ul li a {
		font-size: 1.8rem;
	}
	#header .nav-list ul a:after {
		display: none;
	}
	/* End header */

	#services .service-bottom .service-item {
		flex-basis: 22%;
		margin: 1.5%;
	}
}
  </style>
  

  `,
  },
    {
        id: 'new-full-page-website',
        label: '<b>Website 1</b>',
        category: 'Full template',
        content: `
          <!-- Header -->
          <header style="background-color: #343a40; color: white; padding: 20px; display: flex; flex-direction: column; align-items: center; text-align: center;">
            <div style="max-width: 1200px; width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
              <!-- Logo Container -->
              <div style="display: flex; align-items: center;">
                <!-- Logo Image -->
                <img src="logo.png" alt="Logo" style="height: 40px; margin-right: 10px; display: block;" class="logo-image" />
                <!-- Logo Text -->
                <div class="logo-text" style="font-size: 24px;">Logo</div>
              </div>
              <nav style="display: flex; gap: 15px;">
                <a href="#" style="color: white; text-decoration: none;">Home</a>
                <a href="#" style="color: white; text-decoration: none;">About</a>
                <a href="#" style="color: white; text-decoration: none;">Services</a>
                <a href="#" style="color: white; text-decoration: none;">Contact</a>
              </nav>
              
            </div>
            
          </header>
          
          <section id="hero" style="background: #16a085; color: white; padding: 80px 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 36px;">Explore Our Exceptional Solutions</h1>
          <p style="font-size: 20px; margin: 20px 0;">Innovative services that drive results.</p>
          <a href="#features" style="background-color: #e74c3c; color: white; padding: 15px 25px; text-decoration: none; border-radius: 5px; font-size: 18px;">Learn More</a>
        </section>
          <!-- Features Section -->
          <section id="features" style="padding: 60px 20px; background: #f9f9f9;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <h2 style="text-align: center; font-size: 32px; margin-bottom: 40px;">Our Key Features</h2>
              <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
                <div style="flex: 1 1 calc(33.333% - 20px); background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
                  <h3 style="margin: 0; font-size: 24px;">Feature Alpha</h3>
                  <p>Innovative solutions that meet your needs.</p>
                </div>
                <div style="flex: 1 1 calc(33.333% - 20px); background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
                  <h3 style="margin: 0; font-size: 24px;">Feature Beta</h3>
                  <p>Effective tools for your business growth.</p>
                </div>
                <div style="flex: 1 1 calc(33.333% - 20px); background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
                  <h3 style="margin: 0; font-size: 24px;">Feature Gamma</h3>
                  <p>High-quality services designed for you.</p>
                </div>
              </div>
            </div>
          </section>
        
          <!-- Team Section -->
          <section id="team" style="padding: 60px 20px;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <h2 style="text-align: center; font-size: 32px; margin-bottom: 40px;">Meet Our Experts</h2>
              <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
                <div style="flex: 1 1 calc(33.333% - 20px); background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
                  <img src="team1-new.jpg" alt="Team Member" style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 10px;" />
                  <h3 style="margin: 10px 0;">Alex Turner</h3>
                  <p>Chief Strategy Officer</p>
                </div>
                <div style="flex: 1 1 calc(33.333% - 20px); background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
                  <img src="team2-new.jpg" alt="Team Member" style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 10px;" />
                  <h3 style="margin: 10px 0;">Jamie Lee</h3>
                  <p>Lead Designer</p>
                </div>
                <div style="flex: 1 1 calc(33.333% - 20px); background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
                  <img src="team3-new.jpg" alt="Team Member" style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 10px;" />
                  <h3 style="margin: 10px 0;">Jordan Green</h3>
                  <p>Product Manager</p>
                </div>
              </div>
            </div>
          </section>
        
          <!-- Contact Section -->
          <section id="contact" style="background: #1abc9c; color: white; padding: 60px 20px;">
            <div style="max-width: 600px; margin: 0 auto;">
              <h2 style="text-align: center; font-size: 32px; margin-bottom: 20px;">Contact Us</h2>
              <p style="text-align: center; margin-bottom: 40px;">We're here to assist you. Reach out to us via the form below.</p>
              <form style="display: flex; flex-direction: column; gap: 15px;">
                <input type="text" placeholder="Your Name" style="padding: 10px; border: none; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" />
                <input type="email" placeholder="Your Email" style="padding: 10px; border: none; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" />
                <textarea placeholder="Your Message" style="padding: 10px; border: none; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); resize: vertical;"></textarea>
                <button type="submit" style="background-color: #e74c3c; color: white; padding: 15px; border: none; border-radius: 4px; cursor: pointer; font-size: 18px;">Send Message</button>
              </form>
            </div>
          </section>
        
          <!-- Footer -->
          <footer style="background: #1abc9c; color: white; padding: 20px; text-align: center;">
            <p>&copy; 2024 New Company. All rights reserved.</p>
          </footer>
        
          <style>
            /* Responsive adjustments */
            @media (max-width: 768px) {
            
             
              .feature-item, .team-member {
                flex: 1 1 100%;
                margin-bottom: 20px;
              }
              #hero {
                padding: 40px 20px;
              }
              #contact form {
                width: 100%;
              }
              .logo-text {
                display: none;
              }
            }
           
          </style>
        `,
      },
      
      {
        id: 'unique-full-page-website',
        label: '<b>Website 2</b>',
        category: 'Full template',
        content: `
          <!-- Header -->
          <header style="background-color: #343a40; color: white; padding: 20px; display: flex; flex-direction: column; align-items: center; text-align: center;">
            <div style="max-width: 1200px; width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
              <!-- Logo Container -->
              <div style="display: flex; align-items: center;">
                <!-- Logo Image -->
                <img src="logo.png" alt="Logo" style="height: 40px; margin-right: 10px; display: block;" class="logo-image" />
                <!-- Logo Text -->
                <div class="logo-text" style="font-size: 24px;">Logo</div>
              </div>
              <nav style="display: flex; gap: 15px;">
                <a href="#" style="color: white; text-decoration: none;">Home</a>
                <a href="#" style="color: white; text-decoration: none;">About</a>
                <a href="#" style="color: white; text-decoration: none;">Services</a>
                <a href="#" style="color: white; text-decoration: none;">Contact</a>
              </nav>
            </div>
            
          </header>
        
          <!-- Features Section -->
          <section id="features" style="padding: 60px 20px; background: #ecf0f1;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <h2 style="text-align: center; font-size: 32px; margin-bottom: 40px;">Our Features</h2>
              <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
                <div style="flex: 1 1 calc(33.333% - 20px); background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
                  <h3 style="margin: 0; font-size: 24px;">Feature One</h3>
                  <p>Details about the first feature offered.</p>
                </div>
                <div style="flex: 1 1 calc(33.333% - 20px); background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
                  <h3 style="margin: 0; font-size: 24px;">Feature Two</h3>
                  <p>Details about the second feature offered.</p>
                </div>
                <div style="flex: 1 1 calc(33.333% - 20px); background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
                  <h3 style="margin: 0; font-size: 24px;">Feature Three</h3>
                  <p>Details about the third feature offered.</p>
                </div>
              </div>
            </div>
          </section>
        
          <!-- Team Section -->
          <section id="team" style="padding: 60px 20px;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <h2 style="text-align: center; font-size: 32px; margin-bottom: 40px;">Meet Our Team</h2>
              <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
                <div style="flex: 1 1 calc(33.333% - 20px); background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
                  <img src="team1.jpg" alt="Team Member" style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 10px;" />
                  <h3 style="margin: 10px 0;">John Doe</h3>
                  <p>CEO & Founder</p>
                </div>
                <div style="flex: 1 1 calc(33.333% - 20px); background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
                  <img src="team2.jpg" alt="Team Member" style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 10px;" />
                  <h3 style="margin: 10px 0;">Jane Smith</h3>
                  <p>Lead Developer</p>
                </div>
                <div style="flex: 1 1 calc(33.333% - 20px); background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
                  <img src="team3.jpg" alt="Team Member" style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 10px;" />
                  <h3 style="margin: 10px 0;">Emily Johnson</h3>
                  <p>Marketing Specialist</p>
                </div>
              </div>
            </div>
          </section>
        
          <!-- Contact Section -->
          <section id="contact" style="background: #3498db; color: white; padding: 60px 20px;">
            <div style="max-width: 600px; margin: 0 auto;">
              <h2 style="text-align: center; font-size: 32px; margin-bottom: 20px;">Get in Touch</h2>
              <p style="text-align: center; margin-bottom: 40px;">We would love to hear from you. Please use the form below to contact us.</p>
              <form style="display: flex; flex-direction: column; gap: 15px;">
                <input type="text" placeholder="Your Name" style="padding: 10px; border: none; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" />
                <input type="email" placeholder="Your Email" style="padding: 10px; border: none; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" />
                <textarea placeholder="Your Message" style="padding: 10px; border: none; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); resize: vertical;"></textarea>
                <button type="submit" style="background-color: #e74c3c; color: white; padding: 15px; border: none; border-radius: 4px; cursor: pointer; font-size: 18px;">Send Message</button>
              </form>
            </div>
          </section>
        
          <!-- Footer -->
          <footer style="background: #2c3e50; color: white; padding: 20px; text-align: center;">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </footer>
        
          <style>
            /* Responsive adjustments */
            @media (max-width: 768px) {
              #hero h1 {
                font-size: 28px; /* Reduce font size of hero heading */
              }
              #hero p {
                font-size: 16px; /* Reduce font size of hero paragraph */
              }
              #features .feature-item, #team .team-member {
                flex: 1 1 100%;
              }
              /* Hide navigation links on mobile */
              .dd {
                display: none;
              }
             
            /* Hide logo text on mobile view */
           
              .logo-text {
                display: none;
              }
         
            }
          </style>
        `,
      },
    // blocks.js
 {
    label: 'Bootstrap Navbar',
    category: 'Bootstrap',
    content: `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    `
  },
  
    {
        id: 'top-bar-main-header-features',
        category: 'Part 1',
        label: 'Top Bar, Main Header, and Features Grid',
        content: `
          <!-- Top Bar -->
          <div style="background-color: #f8f9fa; padding: 10px 20px; display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center;">
              <!-- Logo Image -->
              <img src="logo.png" alt="Logo" style="height: 40px; margin-right: 10px;" />
              <!-- Text Icon -->
              <!-- Logo Text -->
              <div class="logo-text" style="font-size: 24px;">Logo</div>
            </div>
            <div style="display: flex; gap: 10px;">
              <input type="search" placeholder="Search..." style="padding: 5px; border: 1px solid #ccc; border-radius: 4px;" />
            </div>
          </div>
          <!-- Main Header -->
          <header style="background: #007bff; color: white; text-align: center; padding: 50px 20px;">
            <div style="margin-bottom: 30px;">
              <h1>Welcome to Our Website</h1>
              <p>Your tagline or introduction goes here.</p>
              <a href="#" style="background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Get Started</a>
            </div>
          </header>
          <!-- Features Grid -->
          <section style="padding: 50px 20px; text-align: center; background: #f8f9fa;">
            <h2>Our Features</h2>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
              <div style="flex: 1 1 300px; padding: 20px; background-color: #ffffff; border-radius: 8px;">
                <h3>Feature One</h3>
                <p>Brief description of the feature.</p>
              </div>
              <div style="flex: 1 1 300px; padding: 20px; background-color: #ffffff; border-radius: 8px;">
                <h3>Feature Two</h3>
                <p>Brief description of the feature.</p>
              </div>
              <div style="flex: 1 1 300px; padding: 20px; background-color: #ffffff; border-radius: 8px;">
                <h3>Feature Three</h3>
                <p>Brief description of the feature.</p>
              </div>
            </div>
          </section>
          <style>
            /* Hide text icon and logo text on mobile view */
            @media (max-width: 768px) {
              .text-icon {
                display: none;
              }
              .logo-text {
                display: none;
              }
            }
          </style>`,
        attributes: { class: 'gjs-block-top-bar-main-header-features' }
      }
      
      ,{
        id: 'header-hero-contact-form',
        category: 'Part 1',
        label: 'Header, Hero, and Contact Form',
        content: `
          <header style="background-color: #343a40; color: white; padding: 20px; display: flex; flex-direction: column; align-items: center; text-align: center;">
            <div style="max-width: 1200px; width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
              <!-- Logo Container -->
              <div style="display: flex; align-items: center;">
                <!-- Logo Image -->
                <img src="logo.png" alt="Logo" style="height: 40px; margin-right: 10px; display: block;" class="logo-image" />
                <!-- Logo Text -->
                <div class="logo-text" style="font-size: 24px;">Logo</div>
              </div>
              <nav style="display: flex; gap: 15px;">
                <a href="#" style="color: white; text-decoration: none;">Home</a>
                <a href="#" style="color: white; text-decoration: none;">About</a>
                <a href="#" style="color: white; text-decoration: none;">Services</a>
                <a href="#" style="color: white; text-decoration: none;">Contact</a>
              </nav>
            </div>
            <section style="background: #007bff; color: white; padding: 40px; border-radius: 8px;">
              <h1>Welcome to Our Website</h1>
              <p>Your tagline or introduction goes here.</p>
              <a href="#" style="background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Get Started</a>
            </section>
            <div style="max-width: 600px; width: 100%; margin-top: 40px;">
              <h2>Contact Us</h2>
              <p>If you have any questions, feel free to reach out to us using the form below.</p>
              <form style="display: flex; flex-direction: column; gap: 15px;">
                <input type="text" placeholder="Your Name" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;" />
                <input type="email" placeholder="Your Email" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;" />
                <textarea placeholder="Your Message" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px; resize: vertical;"></textarea>
                <button type="submit" style="background-color: #28a745; color: white; padding: 10px; border: none; border-radius: 4px; cursor: pointer;">Send Message</button>
              </form>
            </div>
          </header>
          <style>
            /* Hide logo text on mobile view */
            @media (max-width: 768px) {
              .logo-text {
                display: none;
              }
            }
            /* Hide logo image on mobile view and show logo text */
            @media (min-width: 769px) {
              .logo-image {
                display: block;
              }
              .logo-text {
                display: block;
              }
            }
          </style>`,
        attributes: { class: 'gjs-block-header-hero-contact-form' }
      }
      
      
      ,
      
      
      
      
      
      
      {
        id: 'header-welcome-section',
        category: 'Part 1',
        label: 'Header & Welcome Section',
        content: `
        <header style="background-color: #343a40; color: white; padding: 20px; display: flex; flex-direction: column; align-items: center; text-align: center;">
        <div style="max-width: 1200px; width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <!-- Logo Container -->
          <div style="display: flex; align-items: center;">
            <!-- Logo Image -->
            <img src="logo.png" alt="Logo" style="height: 40px; margin-right: 10px; display: block;" class="logo-image" />
            <!-- Logo Text -->
            <div class="logo-text" style="font-size: 24px;">Logo</div>
          </div>
          <nav style="display: flex; gap: 15px;">
            <a href="#" style="color: white; text-decoration: none;">Home</a>
            <a href="#" style="color: white; text-decoration: none;">About</a>
            <a href="#" style="color: white; text-decoration: none;">Services</a>
            <a href="#" style="color: white; text-decoration: none;">Contact</a>
          </nav>
        </div>
       
       
      </header>
          <!-- Welcome Section -->
          <section style="background: #f8f9fa; text-align: center; padding: 60px 20px;">
            <h1>Welcome to Our Site</h1>
            <p>Your solution for [key benefit] and [another key benefit].</p>
            <a href="#" style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px;">Learn More</a>
          </section>
          <style>
            /* Hide logo text on mobile view */
            @media (max-width: 768px) {
              .logo-text {
                display: none;
              }
            }
            /* Hide logo image on mobile view and show logo text */
            @media (min-width: 769px) {
              .logo-image {
                display: block;
              }
              .logo-text {
                display: block;
              }
            }
          </style>
          `,
        attributes: { class: 'gjs-block-header-welcome-section' }
      }
      ,
      {
        id: 'nav-hero-about-footer',
        category: 'Part 1',
        label: 'Navigation, Hero, About & Footer',
        content: `
          <!-- Navigation Bar -->
          <nav style="background-color: #333; color: white; padding: 10px 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <!-- Logo Image -->
              <div style="display: flex; align-items: center;">
                <img src="logo.png" alt="Logo" style="height: 40px; margin-right: 10px;" />
                <!-- Logo Text -->
                <div class="logo-text" style="font-size: 24px; font-weight: bold;">[Logo Text]</div>
              </div>
              <!-- Navigation Links -->
              <div style="display: flex; gap: 20px;">
                <a href="#" style="color: white; text-decoration: none;">Home</a>
                <a href="#" style="color: white; text-decoration: none;">About</a>
                <a href="#" style="color: white; text-decoration: none;">Services</a>
                <a href="#" style="color: white; text-decoration: none;">Contact</a>
              </div>
            </div>
          </nav>
          <style>
            /* Hide logo text on mobile view */
            @media (max-width: 768px) {
              .logo-text {
                display: none;
              }
            }
          </style>
          <!-- Hero Section -->
          <section style="background: #007bff; color: white; text-align: center; padding: 80px 20px;">
            <div style="max-width: 800px; margin: 0 auto;">
              <h1>Discover Our Services</h1>
              <p>We offer a range of solutions to meet your needs.</p>
              <a href="#" style="background-color: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px;">Get Started</a>
            </div>
          </section>
          <!-- About Section -->
          <section style="padding: 60px 20px;">
            <h2>About Us</h2>
            <p>Learn more about our mission, vision, and values.</p>
            <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
              <div style="flex: 1 1 300px; padding: 20px; background-color: #ffffff; border-radius: 8px;">
                <h3>Our Mission</h3>
                <p>What drives us to deliver exceptional services.</p>
              </div>
              <div style="flex: 1 1 300px; padding: 20px; background-color: #ffffff; border-radius: 8px;">
                <h3>Our Vision</h3>
                <p>Where we see ourselves in the future.</p>
              </div>
            </div>
          </section>
          <!-- Footer -->
          <footer style="background-color: #343a40; color: white; padding: 20px; text-align: center;">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </footer>`,
        attributes: { class: 'gjs-block-nav-hero-about-footer' }
      },
      {
        id: 'header-hero-contact-footer',
        category: 'Part 1',
        label: 'Header, Hero, Contact & Footer',
        content: `
          <!-- Header -->
          <nav style="background-color: #333; color: white; padding: 10px 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <!-- Logo Image -->
              <div style="display: flex; align-items: center;">
                <img src="logo.png" alt="Logo" style="height: 40px; margin-right: 10px;" />
                <!-- Logo Text -->
                <div class="logo-text" style="font-size: 24px; font-weight: bold;">[Logo Text]</div>
              </div>
              <!-- Navigation Links -->
              <div style="display: flex; gap: 20px;">
                <a href="#" style="color: white; text-decoration: none;">Home</a>
                <a href="#" style="color: white; text-decoration: none;">About</a>
                <a href="#" style="color: white; text-decoration: none;">Services</a>
                <a href="#" style="color: white; text-decoration: none;">Contact</a>
              </div>
            </div>
          </nav>
          <style>
            /* Hide logo text on mobile view */
            @media (max-width: 768px) {
              .logo-text {
                display: none;
              }
            }
          </style>
          <!-- Hero Section -->
          <section style="background: #007bff; color: white; text-align: center; padding: 80px 20px;">
            <h1>Welcome to Our Site</h1>
            <p>Discover the benefits of our services.</p>
            <a href="#" style="background-color: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px;">Get Started</a>
          </section>
          <!-- Contact Section -->
          <section style="padding: 60px 20px; background-color: #f8f9fa;">
            <h2>Contact Us</h2>
            <p>We would love to hear from you. Reach out to us with any inquiries.</p>
            <form style="max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; gap: 15px;">
              <input type="text" placeholder="Your Name" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;" />
              <input type="email" placeholder="Your Email" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;" />
              <textarea placeholder="Your Message" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px; resize: vertical;"></textarea>
              <button type="submit" style="background-color: #28a745; color: white; padding: 10px; border: none; border-radius: 4px; cursor: pointer;">Send Message</button>
            </form>
          </section>
          <!-- Footer -->
          <footer style="background-color: #343a40; color: white; padding: 20px; text-align: center;">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </footer>`,
        attributes: { class: 'gjs-block-header-hero-contact-footer' }
      }
      
      ,
      {
        id: 'logo-navigation-section',
        category: 'Part 1',
        label: 'Navigation with Logo Image and Text',
        content: `
          <!-- Navigation Bar -->
          <nav style="background-color: #333; color: white; padding: 10px 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <!-- Logo Image -->
              <div style="display: flex; align-items: center;">
                <img src="logo.png" alt="Logo" style="height: 40px; margin-right: 10px;" />
                <!-- Logo Text -->
                <div class="logo-text" style="font-size: 24px; font-weight: bold;">[Logo Text]</div>
              </div>
              <!-- Navigation Links -->
              <div style="display: flex; gap: 20px;">
                <a href="#" style="color: white; text-decoration: none;">Home</a>
                <a href="#" style="color: white; text-decoration: none;">About</a>
                <a href="#" style="color: white; text-decoration: none;">Services</a>
                <a href="#" style="color: white; text-decoration: none;">Contact</a>
              </div>
            </div>
          </nav>
          <style>
            /* Hide logo text on mobile view */
            @media (max-width: 768px) {
              .logo-text {
                display: none;
              }
            }
          </style>`,
        attributes: { class: 'gjs-block-logo-navigation-section' },
      }
      ,
      {
        id: 'logo-navigatsssion-section',
        category: 'Part 1',
        label: 'Navigation with Logo Image and Text',
        content: `
          <!-- Navigation Bar -->
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <!-- Logo Section -->
              <a class="navbar-brand d-flex align-items-center" href="#">
                <img src="logo.png" alt="Logo" style="height: 40px; margin-right: 10px;" />
                <span class="d-none d-lg-inline fs-4 fw-bold">[Logo Text]</span>
              </a>
              <!-- Toggler Button for Mobile View -->
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <!-- Navigation Links -->
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Services</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <!-- Include Bootstrap CSS -->
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
          <!-- Include Bootstrap JS -->
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        `,
        attributes: { class: 'gjs-block-logo-navigation-section' },
      }
      ,
      {
        id: 'custom-nav-bar',
        label: 'Custom Navigation Bar',
        category: 'Components',
        attributes: {
          class: 'gjs-block-custom-nav-bar'
        },
        content: `
          <nav class="navbar navbar-expand-lg navbar-light bg-light" style="padding: 10px;">
            <div class="container">
              <!-- Logo Section -->
              <a class="navbar-brand d-flex align-items-center" href="#">
                <img src="logo.png" alt="Logo" style="height: 40px; margin-right: 10px;" />
                <span style="font-size: 24px; font-weight: bold;">[Logo Text]</span>
              </a>
              
              <!-- Toggler for Mobile View -->
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              
              <!-- Navigation Links -->
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
                <div class="d-flex">
                  <button class="btn btn-outline-primary me-2"><span class="fas fa-lock me-2"></span>Login</button>
                  <button class="btn btn-primary"><span class="fas fa-plus me-2"></span>New account</button>
                </div>
              </div>
            </div>
          </nav>
          <style>
            /* Custom styles */
            .navbar-brand span {
              display: inline-block;
              vertical-align: middle;
            }
            
            .navbar-toggler {
              border-color: transparent;
            }
      
            @media (max-width: 768px) {
              .navbar-brand span {
                display: none;
              }
            }
          </style>
        `,
      }
      
      
      ,
      
      {
            id: 'nav',
            label: 'nav',
            category: 'Components',
            attributes: {
                class: 'gly-one-column'
            },
            content: `<nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
      
      
            
          `
          
        },
        
      
      
      
      
      
      
      
      
      
      
      
      {
        id: 'testimonials-blog-highlights-cta',
        category: 'Part 2',
        label: 'Testimonials Section, Blog Highlights, and Call-to-Action',
        content: `
          <!-- Testimonials Section -->
          <section style="padding: 50px 20px; text-align: center; background: #ffffff;">
            <h2>What Our Clients Say</h2>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
              <div style="flex: 1 1 300px; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
                <img src="testimonial1.jpg" alt="Testimonial 1" style="width: 80px; height: 80px; border-radius: 50%;" />
                <p>"Great service! Highly recommend."</p>
                <p>- Client 1</p>
              </div>
              <div style="flex: 1 1 300px; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
                <img src="testimonial2.jpg" alt="Testimonial 2" style="width: 80px; height: 80px; border-radius: 50%;" />
                <p>"Absolutely fantastic experience."</p>
                <p>- Client 2</p>
              </div>
              <div style="flex: 1 1 300px; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
                <img src="testimonial3.jpg" alt="Testimonial 3" style="width: 80px; height: 80px; border-radius: 50%;" />
                <p>"I couldn't be happier with the results."</p>
                <p>- Client 3</p>
              </div>
            </div>
          </section>
          <!-- Blog Highlights -->
          <section style="padding: 50px 20px; text-align: center; background: #f8f9fa;">
            <h2>Latest Blog Posts</h2>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
              <div style="flex: 1 1 300px; padding: 20px; background-color: #ffffff; border-radius: 8px;">
                <img src="blog1.jpg" alt="Blog Post 1" style="width: 100%; height: auto; border-radius: 8px;" />
                <h3>Blog Post 1</h3>
                <p>Short excerpt from the blog post. <a href="#">Read more</a></p>
              </div>
              <div style="flex: 1 1 300px; padding: 20px; background-color: #ffffff; border-radius: 8px;">
                <img src="blog2.jpg" alt="Blog Post 2" style="width: 100%; height: auto; border-radius: 8px;" />
                <h3>Blog Post 2</h3>
                <p>Short excerpt from the blog post. <a href="#">Read more</a></p>
              </div>
              <div style="flex: 1 1 300px; padding: 20px; background-color: #ffffff; border-radius: 8px;">
                <img src="blog3.jpg" alt="Blog Post 3" style="width: 100%; height: auto; border-radius: 8px;" />
                <h3>Blog Post 3</h3>
                <p>Short excerpt from the blog post. <a href="#">Read more</a></p>
              </div>
            </div>
          </section>
          <!-- Call-to-Action -->
          <section style="padding: 50px 20px; text-align: center; background: #007bff; color: white;">
            <h2>Ready to Get Started?</h2>
            <p>Sign up now and start enjoying our services.</p>
            <div style="margin-top: 20px;">
              <a href="#" style="background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">Sign Up</a>
              <a href="#" style="background-color: #ffffff; color: #007bff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Learn More</a>
            </div>
          </section>`,
        attributes: { class: 'gjs-block-testimonials-blog-highlights-cta' },
      }
      ,
      
      {
        id: 'features-testimonials',
        category: 'Part 2',
        label: 'Feature Highlights and Testimonials',
        content: `
          <section style="padding: 50px 20px; text-align: center;">
            <!-- Feature Highlights -->
            <div style="margin-bottom: 30px;">
              <h2>Our Features</h2>
              <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
                <div style="flex: 1 1 300px; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
                  <h3>Feature One</h3>
                  <p>Brief description of the feature.</p>
                </div>
                <div style="flex: 1 1 300px; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
                  <h3>Feature Two</h3>
                  <p>Brief description of the feature.</p>
                </div>
                <div style="flex: 1 1 300px; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
                  <h3>Feature Three</h3>
                  <p>Brief description of the feature.</p>
                </div>
              </div>
            </div>
            <!-- Testimonials -->
            <div style="background: #e9ecef; padding: 40px; border-radius: 8px;">
              <h2>What Our Clients Say</h2>
              <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
                <div style="flex: 1 1 300px; padding: 20px; background-color: white; border-radius: 8px;">
                  <p>"Great service and support!"</p>
                  <p>- Client One</p>
                </div>
                <div style="flex: 1 1 300px; padding: 20px; background-color: white; border-radius: 8px;">
                  <p>"Highly recommend this company."</p>
                  <p>- Client Two</p>
                </div>
                <div style="flex: 1 1 300px; padding: 20px; background-color: white; border-radius: 8px;">
                  <p>"A fantastic experience from start to finish."</p>
                  <p>- Client Three</p>
                </div>
              </div>
            </div>
          </section>`,
        attributes: { class: 'gjs-block-features-testimonials' }
      }
      ,
      {
        id: 'services-blog-section',
        category: 'Part 2',
        label: 'Services & Blog Highlights',
        content: `
          <!-- Services Section -->
          <section style="padding: 50px 20px; text-align: center; background: #f0f4f8;">
            <h2>Our Services</h2>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
              <div style="flex: 1 1 300px; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <h3>Service One</h3>
                <p>Professional service description that showcases the benefits.</p>
              </div>
              <div style="flex: 1 1 300px; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <h3>Service Two</h3>
                <p>Expert solutions that deliver results.</p>
              </div>
              <div style="flex: 1 1 300px; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <h3>Service Three</h3>
                <p>Innovative approaches to meet your needs.</p>
              </div>
            </div>
          </section>
          <!-- Blog Highlights -->
          <section style="padding: 50px 20px; text-align: center;">
            <h2>Latest Blog Posts</h2>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
              <div style="flex: 1 1 300px; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <h3>Blog Post One</h3>
                <p>Summary of the first blog post with a link to read more.</p>
                <a href="#" style="color: #007bff; text-decoration: none;">Read More</a>
              </div>
              <div style="flex: 1 1 300px; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <h3>Blog Post Two</h3>
                <p>Summary of the second blog post with a link to read more.</p>
                <a href="#" style="color: #007bff; text-decoration: none;">Read More</a>
              </div>
              <div style="flex: 1 1 300px; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <h3>Blog Post Three</h3>
                <p>Summary of the third blog post with a link to read more.</p>
                <a href="#" style="color: #007bff; text-decoration: none;">Read More</a>
              </div>
            </div>
          </section>`,
        attributes: { class: 'gjs-block-services-blog-section' },
      }
      ,
      {
        id: 'contact-footer-section',
        category: 'Part 3',
        label: 'Contact Form & Footer',
        content: `
          <!-- Contact Form -->
          <section style="padding: 50px 20px; text-align: center;">
            <h2>Contact Us</h2>
            <div style="max-width: 600px; margin: auto;">
              <p>If you have any questions or feedback, please use the form below.</p>
              <form style="display: flex; flex-direction: column; gap: 20px;">
                <input type="text" placeholder="Your Name" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;" />
                <input type="email" placeholder="Your Email" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;" />
                <textarea placeholder="Your Message" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px; resize: vertical;"></textarea>
                <button type="submit" style="background-color: #007bff; color: white; padding: 10px; border: none; border-radius: 4px; cursor: pointer;">Send Message</button>
              </form>
            </div>
          </section>
          <!-- Footer -->
          <footer style="background-color: #333; color: white; padding: 20px; text-align: center;">
            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
              <div style="flex: 1 1 200px;">
                <h3>Quick Links</h3>
                <ul style="list-style: none; padding: 0;">
                  <li><a href="#" style="color: white; text-decoration: none;">About</a></li>
                  <li><a href="#" style="color: white; text-decoration: none;">Privacy Policy</a></li>
                  <li><a href="#" style="color: white; text-decoration: none;">Terms of Service</a></li>
                </ul>
              </div>
              <div style="flex: 1 1 200px;">
                <h3>Follow Us</h3>
                <div style="display: flex; gap: 10px; justify-content: center;">
                  <a href="#" style="color: white; text-decoration: none;">Facebook</a>
                  <a href="#" style="color: white; text-decoration: none;">Twitter</a>
                  <a href="#" style="color: white; text-decoration: none;">LinkedIn</a>
                </div>
              </div>
              <div style="flex: 1 1 200px;">
                <h3>Contact Us</h3>
                <p>Address: 456 Avenue, City, Country</p>
                <p>Email: support@example.com</p>
                <p>Phone: (987) 654-3210</p>
              </div>
            </div>
            <div style="margin-top: 20px;">
              <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
          </footer>`,
        attributes: { class: 'gjs-block-contact-footer-section' },
      }
      ,
      {
        id: 'pricing-faq-section',
        category: 'Part 2',
        label: 'Pricing Table & FAQ',
        content: `
          <!-- Pricing Table -->
          <section style="padding: 50px 20px; background-color: #f4f4f4;">
            <h2>Our Pricing Plans</h2>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
              <div style="flex: 1 1 300px; padding: 20px; background-color: white; border: 1px solid #ddd; border-radius: 8px;">
                <h3>Basic Plan</h3>
                <p>$19/month</p>
                <ul style="list-style: none; padding: 0;">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
                <a href="#" style="background-color: #28a745; color: white; padding: 10px; text-decoration: none; border-radius: 4px;">Choose Plan</a>
              </div>
              <div style="flex: 1 1 300px; padding: 20px; background-color: white; border: 1px solid #ddd; border-radius: 8px;">
                <h3>Pro Plan</h3>
                <p>$49/month</p>
                <ul style="list-style: none; padding: 0;">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                  <li>Feature 4</li>
                </ul>
                <a href="#" style="background-color: #28a745; color: white; padding: 10px; text-decoration: none; border-radius: 4px;">Choose Plan</a>
              </div>
              <div style="flex: 1 1 300px; padding: 20px; background-color: white; border: 1px solid #ddd; border-radius: 8px;">
                <h3>Enterprise Plan</h3>
                <p>$99/month</p>
                <ul style="list-style: none; padding: 0;">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                  <li>Feature 4</li>
                  <li>Feature 5</li>
                </ul>
                <a href="#" style="background-color: #28a745; color: white; padding: 10px; text-decoration: none; border-radius: 4px;">Choose Plan</a>
              </div>
            </div>
          </section>
          <!-- FAQ Section -->
          <section style="padding: 50px 20px;">
            <h2>Frequently Asked Questions</h2>
            <div style="max-width: 800px; margin: auto;">
              <details style="margin-bottom: 15px;">
                <summary style="cursor: pointer; font-weight: bold;">What is included in the Basic Plan?</summary>
                <p>The Basic Plan includes Feature 1, Feature 2, and Feature 3.</p>
              </details>
              <details style="margin-bottom: 15px;">
                <summary style="cursor: pointer; font-weight: bold;">Can I upgrade my plan later?</summary>
                <p>Yes, you can upgrade your plan at any time from your account settings.</p>
              </details>
              <details style="margin-bottom: 15px;">
                <summary style="cursor: pointer; font-weight: bold;">Do you offer a money-back guarantee?</summary>
                <p>We offer a 30-day money-back guarantee if you are not satisfied with our service.</p>
              </details>
            </div>
          </section>`,
        attributes: { class: 'gjs-block-pricing-faq-section' },
      }
      ,
      {
        id: 'testimonials-success-stories-section',
        category: 'Part 2',
        label: 'Client Testimonials & Success Stories',
        content: `
          <!-- Client Testimonials -->
          <section style="padding: 50px 20px; background-color: #ffffff;">
            <h2>What Our Clients Say</h2>
            <div style="display: flex; flex-wrap: wrap; gap: 20px;">
              <div style="flex: 1 1 300px; padding: 20px; background-color: #f4f4f4; border-radius: 8px;">
                <p>"The service provided was exceptional and exceeded our expectations!"</p>
                <p><strong>Jane Doe</strong>, CEO of Company</p>
              </div>
              <div style="flex: 1 1 300px; padding: 20px; background-color: #f4f4f4; border-radius: 8px;">
                <p>"A fantastic experience from start to finish. Highly recommend!"</p>
                <p><strong>John Smith</strong>, Founder of Startup</p>
              </div>
              <div style="flex: 1 1 300px; padding: 20px; background-color: #f4f4f4; border-radius: 8px;">
                <p>"Professional and dedicated team. We are thrilled with the results."</p>
                <p><strong>Emily Johnson</strong>, Marketing Director</p>
              </div>
            </div>
          </section>
          <!-- Success Stories -->
          <section style="padding: 50px 20px;">
            <h2>Success Stories</h2>
            <div style="display: flex; flex-wrap: wrap; gap: 20px;">
              <div style="flex: 1 1 400px; padding: 20px; background-color: #007bff; color: white; border-radius: 8px;">
                <h4>Project Alpha</h4>
                <p>How we helped a major brand increase their market share by 30%.</p>
              </div>
              <div style="flex: 1 1 400px; padding: 20px; background-color: #28a745; color: white; border-radius: 8px;">
                <h4>Project Beta</h4>
                <p>Our collaboration with a tech startup to develop an innovative product.</p>
              </div>
              <div style="flex: 1 1 400px; padding: 20px; background-color: #ffc107; color: black; border-radius: 8px;">
                <h4>Project Gamma</h4>
                <p>Achieving a record-breaking user engagement through targeted strategies.</p>
              </div>
            </div>
          </section>`,
        attributes: { class: 'gjs-block-testimonials-success-stories-section' },
      }
      ,
      {
        id: 'service-overview-contact-details-section',
        category: 'Part 3',
        label: 'Service Overview & Contact Details',
        content: `
          <!-- Service Overview -->
          <section style="padding: 50px 20px; background-color: #f4f4f4;">
            <h2>Our Services</h2>
            <div style="display: flex; flex-wrap: wrap; gap: 20px;">
              <div style="flex: 1 1 300px; padding: 20px; background-color: white; border: 1px solid #ddd; border-radius: 8px;">
                <h3>Consulting</h3>
                <p>Expert advice to help your business grow and thrive.</p>
              </div>
              <div style="flex: 1 1 300px; padding: 20px; background-color: white; border: 1px solid #ddd; border-radius: 8px;">
                <h3>Development</h3>
                <p>Custom software solutions tailored to your needs.</p>
              </div>
              <div style="flex: 1 1 300px; padding: 20px; background-color: white; border: 1px solid #ddd; border-radius: 8px;">
                <h3>Design</h3>
                <p>Creative designs to enhance your brand and user experience.</p>
              </div>
            </div>
          </section>
          <!-- Contact Details -->
          <section style="padding: 50px 20px; background-color: #ffffff;">
            <h2>Contact Us</h2>
            <div style="display: flex; flex-wrap: wrap; gap: 20px;">
              <div style="flex: 1 1 300px;">
                <h4>Address</h4>
                <p>1234 Street Name, City, State, 12345</p>
              </div>
              <div style="flex: 1 1 300px;">
                <h4>Phone</h4>
                <p>(123) 456-7890</p>
              </div>
              <div style="flex: 1 1 300px;">
                <h4>Email</h4>
                <p>info@example.com</p>
              </div>
            </div>
          </section>`,
        attributes: { class: 'gjs-block-service-overview-contact-details-section' },
      }
      
      ,
      {
        id: 'image-gallery-section',
        category: 'Part 2',
        label: 'Image Gallery Section',
        content: `
          <section style="padding: 50px 20px; text-align: center;">
            <h2>Our Gallery</h2>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
              <div style="flex: 1 1 300px; position: relative;">
                <img src="image1.jpg" alt="Gallery Image 1" style="width: 100%; height: auto; border-radius: 8px;">
                <div style="position: absolute; bottom: 10px; left: 10px; color: white; background: rgba(0, 0, 0, 0.5); padding: 5px 10px; border-radius: 5px;">Image 1</div>
              </div>
              <div style="flex: 1 1 300px; position: relative;">
                <img src="image2.jpg" alt="Gallery Image 2" style="width: 100%; height: auto; border-radius: 8px;">
                <div style="position: absolute; bottom: 10px; left: 10px; color: white; background: rgba(0, 0, 0, 0.5); padding: 5px 10px; border-radius: 5px;">Image 2</div>
              </div>
              <div style="flex: 1 1 300px; position: relative;">
                <img src="image3.jpg" alt="Gallery Image 3" style="width: 100%; height: auto; border-radius: 8px;">
                <div style="position: absolute; bottom: 10px; left: 10px; color: white; background: rgba(0, 0, 0, 0.5); padding: 5px 10px; border-radius: 5px;">Image 3</div>
              </div>
            </div>
          </section>`,
        attributes: { class: 'gjs-block-image-gallery-section' },
      }
      ,
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      {
        id: 'footer',
        category: 'Part 3',
        label: 'Footer',
        content: `
          <footer style="background: #343a40; color: white; padding: 30px 20px;">
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
              <!-- Quick Links -->
              <div style="flex: 1 1 200px;">
                <h4>Quick Links</h4>
                <ul style="list-style: none; padding: 0;">
                  <li><a href="#" style="color: white; text-decoration: none;">About</a></li>
                  <li><a href="#" style="color: white; text-decoration: none;">Terms</a></li>
                </ul>
              </div>
              <!-- Social Media -->
              <div style="flex: 1 1 200px;">
                <h4>Follow Us</h4>
                <div style="display: flex; gap: 10px;">
                  <a href="#" style="color: white;">[Facebook Icon]</a>
                  <a href="#" style="color: white;">[Twitter Icon]</a>
                  <a href="#" style="color: white;">[Instagram Icon]</a>
                </div>
              </div>
              <!-- Contact Info -->
              <div style="flex: 1 1 200px;">
                <h4>Contact Us</h4>
                <p>1234 Street Name, City, Country</p>
                <p>Email: info@example.com</p>
              </div>
            </div>
            <div style="text-align: center; margin-top: 20px;">
              <p>&copy; 2024 Your Company. All rights reserved.</p>
              <a href="#" style="color: white; text-decoration: none;">Privacy Policy</a> | <a href="#" style="color: white; text-decoration: none;">Terms of Service</a>
            </div>
          </footer>`,
        attributes: { class: 'gjs-block-footer' },
      }
      ,
      {
        id: 'footer-section',
        category: 'Part 3',
        label: 'Footer Section',
        content: `
          <!-- Footer -->
          <footer style="background-color: #343a40; color: white; padding: 20px; text-align: center;">
            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
              <div style="flex: 1 1 200px;">
                <h3>Quick Links</h3>
                <ul style="list-style: none; padding: 0;">
                  <li><a href="#" style="color: white; text-decoration: none;">About</a></li>
                  <li><a href="#" style="color: white; text-decoration: none;">Terms</a></li>
                  <li><a href="#" style="color: white; text-decoration: none;">Privacy</a></li>
                </ul>
              </div>
              <div style="flex: 1 1 200px;">
                <h3>Follow Us</h3>
                <div style="display: flex; gap: 10px; justify-content: center;">
                  <a href="#" style="color: white; text-decoration: none;">Facebook</a>
                  <a href="#" style="color: white; text-decoration: none;">Twitter</a>
                  <a href="#" style="color: white; text-decoration: none;">Instagram</a>
                </div>
              </div>
              <div style="flex: 1 1 200px;">
                <h3>Contact Us</h3>
                <p>Address: 123 Street Name, City, Country</p>
                <p>Email: contact@example.com</p>
                <p>Phone: (123) 456-7890</p>
              </div>
            </div>
            <div style="margin-top: 20px;">
              <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
          </footer>`,
        attributes: { class: 'gjs-block-footer-section' },
      },{
        id: 'contact-form-footer-section',
        category: 'Part 3',
        label: 'Contact Form Section with Footer',
        content: `
          <section style="padding: 50px 20px; background: url('background-image.jpg') no-repeat center center; background-size: cover; color: white;">
            <div style="max-width: 600px; margin: auto; background: rgba(0, 0, 0, 0.5); padding: 20px; border-radius: 8px;">
              <h2>Contact Us</h2>
              <p>If you have any questions, feel free to reach out to us using the form below.</p>
              <form style="display: flex; flex-direction: column; gap: 20px;">
                <input type="text" placeholder="Your Name" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;" />
                <input type="email" placeholder="Your Email" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;" />
                <textarea placeholder="Your Message" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px; resize: vertical;"></textarea>
                <button type="submit" style="background-color: #ff6f61; color: white; padding: 12px 24px; border: none; border-radius: 4px; cursor: pointer;">Send Message</button>
              </form>
            </div>
          </section>
          <!-- Footer -->
          <footer style="background-color: #333; color: white; padding: 20px 10px; text-align: center;">
            <div style="max-width: 1200px; margin: auto;">
              <div style="display: flex; flex-direction: column; gap: 20px;">
                <div>
                  <h3>About Us</h3>
                  <p>Learn more about our company and mission.</p>
                </div>
                <div>
                  <h3>Quick Links</h3>
                  <a href="#" style="color: white; text-decoration: none;">Privacy Policy</a><br>
                  <a href="#" style="color: white; text-decoration: none;">Terms of Service</a><br>
                  <a href="#" style="color: white; text-decoration: none;">Support</a>
                </div>
                <div>
                  <h3>Contact Info</h3>
                  <p>Address: 123 Main Street, Anytown, USA</p>
                  <p>Email: info@example.com</p>
                  <p>Phone: (123) 456-7890</p>
                </div>
              </div>
              <div style="margin-top: 20px; font-size: 14px;">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
              </div>
            </div>
          </footer>`,
        attributes: { class: 'gjs-block-contact-form-footer-section' },
      }
      ,
      
      
,

    {
      id: 'section',
      label: '<b>Section</b>',
      category: 'Extra',
      attributes: { class: 'gjs-block-section' },
      content: `<section>
                  <h1>This is a simple title</h1>
                  <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
                </section>`,
  },
  {
      id: 'text',
      category: 'Extra',
      label: 'Text',
      content: '<div data-gjs-type="text">Insert your text here</div>',
  },
  {
      id: 'image',
      label: 'Image',
      category: 'Extra',
      select: true,
      content: { type: 'image' },
      activate: true,
  },
      
      
      
      
            ];
  
  export default blocks;