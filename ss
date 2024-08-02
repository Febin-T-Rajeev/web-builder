<nav class="navbar">
    <div class="container">
      <a href="#" class="brand-logo">
        <img src="https://via.placeholder.com/30" alt="Logo Icon" class="logo-icon">
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
      justify-content: space-between;
      align-items: center;
    }
    .brand-logo {
      display: flex;
      align-items: center;
      color: #fff;
      text-decoration: none;
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
      flex-wrap: wrap; /* Ensure items wrap to new lines if needed */
    }
    .nav-links li {
      margin: 0 1rem;
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