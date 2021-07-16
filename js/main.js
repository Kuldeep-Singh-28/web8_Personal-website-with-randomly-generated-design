const num= Math.floor(Math.random()*4);
console.log(num);
// document.getElementById('css_sheet').setAttribute('href',`${num}.css`);
// const num = 0;

function GetCssSheet(num) {
  if (num === 0) 
  {

    document.getElementsByTagName("title")[0].innerHTML = `HC`;
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
    const headlink = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/script.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>`;
    document.getElementById("css_sheet").insertAdjacentHTML("afterend", headlink);

    // const scrhead=`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`;
    // document.querySelector("footer").insertAdjacentHTML("afterend",scrhead);

    const bodycnt = ` <section id="main">
    <nav>
        <!--logo--------------->
        <a href="#" class="logo">
            <img
                src="https://media.istockphoto.com/photos/abstract-technology-circles-with-global-connection-lines-energy-picture-id995595516?b=1&k=6&m=995595516&s=170x170&h=e7syk6BgDkLAd0EcgmqM8KgZutZq2nMGxaz_uF-UzLk=" />
        </a>
        <!--menu-btn-------------->
        <input class="menu-btn" type="checkbox" id="menu-btn">
        <label class="menu-icon" for="menu-btn">
            <span class="nav-icon"></span>
        </label>
        <!--menu-------------->
        <ul class="menu">
            <li><a href="#main">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#recent">Projects</a></li>
            <li><a href="#client">Past Recruiters</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <!--say-hey--------->
        <a href="#" class="hey">Chat</a>
    </nav>
</section>

<!--content----------------->
<div class="content">
    <!--model--------------->
    <div class="model">
        <img src="./style/${num}/hc.jpg" />
    </div>
    <!--text-------------->
    <div class="main-text">
        <h1>Hello, I am Harshwardhan</h1>
        <p>I am an Electronics and Communicaation Engineer with an specialisation in Microcontroller Programming,
            IOT devices and Embedded Systems</p>
        <!--btn------->
        <a href="#" class="portfolio-btn">See My Resume</a>
    </div>
</div>

<!--skills------------->
<section id="skills">
    <!--text--------->
    <div class="skill-text">
        <!--heading-->
        <div class="skill-heading">
            <span>My Skills</span>
            <h2>My Experties</h2>
        </div>
        <!--skill-box-container----------->
        <div class="s-box-container">
            <!--skill-box-------------->
            <div class="skill-box">
                <!--icon------->
                <div class="s-box-icon">
                    <i class="fab fa-html5"></i>
                </div>
                <!--skill-box-text--------->
                <div class="s-box-text">
                    <strong>Interfacing with Arduino</strong>
                    <p>I have 3 month experience in Arduino programming and i have completed 30+ project.</p>
                </div>
            </div>
            <!--skill-box-------------->
            <div class="skill-box">
                <!--icon------->
                <div class="s-box-icon">
                    <i class="fab fa-css3-alt"></i>
                </div>
                <!--skill-box-text--------->
                <div class="s-box-text">
                    <strong>MATLAB</strong>
                    <p>I have 1 month experience in MATLAB and Simulink.</p>
                </div>
            </div>
            <!--skill-box-------------->
            <div class="skill-box">
                <!--icon------->
                <div class="s-box-icon">
                    <i class="fab fa-js-square"></i>
                </div>
                <!--skill-box-text--------->
                <div class="s-box-text">
                    <strong>C++</strong>
                    <p>I have 1 year experience in C++ and I write efficient programs in the language.</p>
                </div>
            </div>


        </div>
    </div>
    <!--img--------------->
    <div class="skill-img">
        <img src="https://images.freeimages.com/images/small-previews/2f0/electronic-components-1243284.jpg" />
    </div>
</section>


<!--recent-project---------------------------->
<section id="recent">
    <!--heading--------------->
    <div class="recent-heading">
        <center><span>Recent</span></center>
        <h3>Recent projects and Publications</h3>
    </div>
    <!--img--------------->
    <div class="recent-img">
        <img src="images/recent.png" />
    </div>
    <!--btn----------->
    <a href="#" class="recent-btn">Projects</a>
</section>


<!--client----------------------------------->
<section id="client">
    <!--heading------->
    <div class="client-heading">
        <span>Comments</span>
        <h3>Reviews by Past Recruiters</h3>
    </div>
    <!--client-box-container--------------->
    <div class="c-box-container">
        <!--box-1----->
        <div class="client-box">
            <!--img-------->
            <img
                src="https://www.logo.wine/a/logo/Indian_Space_Research_Organisation/Indian_Space_Research_Organisation-Logo.wine.svg" />
            <!--stars/reviews---------->
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <!--details/comment------>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas dolore nam expedita, vitae
                aliquid quidem doloremque consectetur! Architecto, numquam. </p>
            <!--btn--------->
            <a href="#">Read More</a>
        </div>
        <!--box-2----->
        <div class="client-box">
            <!--img-------->
            <img src="https://image.shutterstock.com/image-photo/image-260nw-489388897.jpg" />
            <!--stars/reviews---------->
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <!--details/comment------>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam harum officiis quod amet sed aliquid,
                obcaecati rerum culpa commodi similique? </p>
            <!--btn--------->
            <a href="#">Read More</a>
        </div>
        <!--box-3----->
        <div class="client-box">
            <!--img-------->
            <img src="https://image.shutterstock.com/image-photo/image-260nw-1374132989.jpg" />
            <!--stars/reviews---------->
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <!--details/comment------>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perferendis sed, qui atque vel
                obcaecati eaque consectetur laboriosam facilis minima? </p>
            <!--btn--------->
            <a href="#">Read More</a>
        </div>
    </div>
</section>

<!--contact------------------------->
<section id="contact">
    <!--img-------->
    <img
        src="https://images.unsplash.com/photo-1580706483913-b6ea7db483a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3Ryb25pY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
    <!--heading---------------->
    <h3>Give a chance to Work TOGETHER</h3>
    <!--input----------------->
    <!-- <div class="contact-input">
        <input type="email" placeholder="harshwardhanchaube@gmail.com"/>
        
        <a href="#">Continue</a>
    </div>
    <br> -->

    <div class="contact-input">
        <input type="Mobile number" placeholder="6397345368" />
        <a href="#">Call now</a>

    </div>
    <br>
    <div class="contact-input">
        <input type="Github" placeholder="Git Hub" />
        <a href="#">Collab</a>

    </div>



</section>

<div class="contact-me">
    <center> <a href="#"><img src="https://img.icons8.com/color/48/000000/twitter--v1.png " class="icons"></a>
        &nbsp;&nbsp;<a href="#"><img src="https://img.icons8.com/fluent/48/000000/gmail-new.png" class="icons"></a>
        &nbsp;&nbsp;<a href="#"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" class="icons"></a>
        &nbsp;&nbsp;<a href="#"><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
                class="icons"></a>
    </center>
</div>  `;
    document.getElementById("home").insertAdjacentHTML("afterbegin", bodycnt);
    document.querySelectorAll(".navbar")[1].remove();
    document.querySelector(".whole").remove();
    document.querySelector("#footer").remove();


   
  }
  else if (num === 1) {

    document.getElementsByTagName("title")[0].innerHTML = `HC`;
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
    const headlink = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/script.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>`;
    document.getElementById("css_sheet").insertAdjacentHTML("afterend", headlink);

    // const scrhead=`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`;
    // document.querySelector("footer").insertAdjacentHTML("afterend",scrhead);

    const bodycnt = ` <section id="main">
    <nav>
        <!--logo--------------->
        <a href="#" class="logo">
            <img
                src="https://media.istockphoto.com/photos/abstract-technology-circles-with-global-connection-lines-energy-picture-id995595516?b=1&k=6&m=995595516&s=170x170&h=e7syk6BgDkLAd0EcgmqM8KgZutZq2nMGxaz_uF-UzLk=" />
        </a>
        <!--menu-btn-------------->
        <input class="menu-btn" type="checkbox" id="menu-btn">
        <label class="menu-icon" for="menu-btn">
            <span class="nav-icon"></span>
        </label>
        <!--menu-------------->
        <ul class="menu">
            <li><a href="#main">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#recent">Projects</a></li>
            <li><a href="#client">Past Recruiters</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <!--say-hey--------->
        <a href="#" class="hey">Chat</a>
    </nav>
</section>

<!--content----------------->
<div class="content">
    <!--model--------------->
    <div class="model">
        <img src="./style/${num}/hc.jpg" />
    </div>
    <!--text-------------->
    <div class="main-text">
        <h1>Hello, I am Harshwardhan</h1>
        <p>I am an Electronics and Communicaation Engineer with an specialisation in Microcontroller Programming,
            IOT devices and Embedded Systems</p>
        <!--btn------->
        <a href="#" class="portfolio-btn">See My Resume</a>
    </div>
</div>

<!--skills------------->
<section id="skills">
    <!--text--------->
    <div class="skill-text">
        <!--heading-->
        <div class="skill-heading">
            <span>My Skills</span>
            <h2>My Experties</h2>
        </div>
        <!--skill-box-container----------->
        <div class="s-box-container">
            <!--skill-box-------------->
            <div class="skill-box">
                <!--icon------->
                <div class="s-box-icon">
                    <i class="fab fa-html5"></i>
                </div>
                <!--skill-box-text--------->
                <div class="s-box-text">
                    <strong>Interfacing with Arduino</strong>
                    <p>I have 3 month experience in Arduino programming and i have completed 30+ project.</p>
                </div>
            </div>
            <!--skill-box-------------->
            <div class="skill-box">
                <!--icon------->
                <div class="s-box-icon">
                    <i class="fab fa-css3-alt"></i>
                </div>
                <!--skill-box-text--------->
                <div class="s-box-text">
                    <strong>MATLAB</strong>
                    <p>I have 1 month experience in MATLAB and Simulink.</p>
                </div>
            </div>
            <!--skill-box-------------->
            <div class="skill-box">
                <!--icon------->
                <div class="s-box-icon">
                    <i class="fab fa-js-square"></i>
                </div>
                <!--skill-box-text--------->
                <div class="s-box-text">
                    <strong>C++</strong>
                    <p>I have 1 year experience in C++ and I write efficient programs in the language.</p>
                </div>
            </div>


        </div>
    </div>
    <!--img--------------->
    <div class="skill-img">
        <img src="https://images.freeimages.com/images/small-previews/2f0/electronic-components-1243284.jpg" />
    </div>
</section>


<!--recent-project---------------------------->
<section id="recent">
    <!--heading--------------->
    <div class="recent-heading">
        <center><span>Recent</span></center>
        <h3>Recent projects and Publications</h3>
    </div>
    <!--img--------------->
    <div class="recent-img">
        <img src="images/recent.png" />
    </div>
    <!--btn----------->
    <a href="#" class="recent-btn">Projects</a>
</section>


<!--client----------------------------------->
<section id="client">
    <!--heading------->
    <div class="client-heading">
        <span>Comments</span>
        <h3>Reviews by Past Recruiters</h3>
    </div>
    <!--client-box-container--------------->
    <div class="c-box-container">
        <!--box-1----->
        <div class="client-box">
            <!--img-------->
            <img
                src="https://www.logo.wine/a/logo/Indian_Space_Research_Organisation/Indian_Space_Research_Organisation-Logo.wine.svg" />
            <!--stars/reviews---------->
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <!--details/comment------>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas dolore nam expedita, vitae
                aliquid quidem doloremque consectetur! Architecto, numquam. </p>
            <!--btn--------->
            <a href="#">Read More</a>
        </div>
        <!--box-2----->
        <div class="client-box">
            <!--img-------->
            <img src="https://image.shutterstock.com/image-photo/image-260nw-489388897.jpg" />
            <!--stars/reviews---------->
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <!--details/comment------>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam harum officiis quod amet sed aliquid,
                obcaecati rerum culpa commodi similique? </p>
            <!--btn--------->
            <a href="#">Read More</a>
        </div>
        <!--box-3----->
        <div class="client-box">
            <!--img-------->
            <img src="https://image.shutterstock.com/image-photo/image-260nw-1374132989.jpg" />
            <!--stars/reviews---------->
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <!--details/comment------>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perferendis sed, qui atque vel
                obcaecati eaque consectetur laboriosam facilis minima? </p>
            <!--btn--------->
            <a href="#">Read More</a>
        </div>
    </div>
</section>

<!--contact------------------------->
<section id="contact">
    <!--img-------->
    <img
        src="https://images.unsplash.com/photo-1580706483913-b6ea7db483a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3Ryb25pY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
    <!--heading---------------->
    <h3>Give a chance to Work TOGETHER</h3>
    <!--input----------------->
    <!-- <div class="contact-input">
        <input type="email" placeholder="harshwardhanchaube@gmail.com"/>
        
        <a href="#">Continue</a>
    </div>
    <br> -->

    <div class="contact-input">
        <input type="Mobile number" placeholder="6397345368" />
        <a href="#">Call now</a>

    </div>
    <br>
    <div class="contact-input">
        <input type="Github" placeholder="Git Hub" />
        <a href="#">Collab</a>

    </div>



</section>

<div class="contact-me">
    <center> <a href="#"><img src="https://img.icons8.com/color/48/000000/twitter--v1.png " class="icons"></a>
        &nbsp;&nbsp;<a href="#"><img src="https://img.icons8.com/fluent/48/000000/gmail-new.png" class="icons"></a>
        &nbsp;&nbsp;<a href="#"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" class="icons"></a>
        &nbsp;&nbsp;<a href="#"><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
                class="icons"></a>
    </center>
</div>  `;
    document.getElementById("home").insertAdjacentHTML("afterbegin", bodycnt);
    document.querySelectorAll(".navbar")[1].remove();
    document.querySelector(".whole").remove();
    document.querySelector("#footer").remove();


   
  }
  else if (num === 2)
  {

    document.getElementsByTagName("title")[0].innerHTML = `HC`;
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
    const headlink = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/script.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>`;
    document.getElementById("css_sheet").insertAdjacentHTML("afterend", headlink);

    // const scrhead=`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`;
    // document.querySelector("footer").insertAdjacentHTML("afterend",scrhead);

    const bodycnt = ` <section id="main">
    <nav>
        <!--logo--------------->
        <a href="#" class="logo">
            <img
                src="https://media.istockphoto.com/photos/abstract-technology-circles-with-global-connection-lines-energy-picture-id995595516?b=1&k=6&m=995595516&s=170x170&h=e7syk6BgDkLAd0EcgmqM8KgZutZq2nMGxaz_uF-UzLk=" />
        </a>
        <!--menu-btn-------------->
        <input class="menu-btn" type="checkbox" id="menu-btn">
        <label class="menu-icon" for="menu-btn">
            <span class="nav-icon"></span>
        </label>
        <!--menu-------------->
        <ul class="menu">
            <li><a href="#main">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#recent">Projects</a></li>
            <li><a href="#client">Past Recruiters</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <!--say-hey--------->
        <a href="#" class="hey">Chat</a>
    </nav>
</section>

<!--content----------------->
<div class="content">
    <!--model--------------->
    <div class="model">
        <img src="./style/${num}/hc.jpg" />
    </div>
    <!--text-------------->
    <div class="main-text">
        <h1>Hello, I am Harshwardhan</h1>
        <p>I am an Electronics and Communicaation Engineer with an specialisation in Microcontroller Programming,
            IOT devices and Embedded Systems</p>
        <!--btn------->
        <a href="#" class="portfolio-btn">See My Resume</a>
    </div>
</div>

<!--skills------------->
<section id="skills">
    <!--text--------->
    <div class="skill-text">
        <!--heading-->
        <div class="skill-heading">
            <span>My Skills</span>
            <h2>My Experties</h2>
        </div>
        <!--skill-box-container----------->
        <div class="s-box-container">
            <!--skill-box-------------->
            <div class="skill-box">
                <!--icon------->
                <div class="s-box-icon">
                    <i class="fab fa-html5"></i>
                </div>
                <!--skill-box-text--------->
                <div class="s-box-text">
                    <strong>Interfacing with Arduino</strong>
                    <p>I have 3 month experience in Arduino programming and i have completed 30+ project.</p>
                </div>
            </div>
            <!--skill-box-------------->
            <div class="skill-box">
                <!--icon------->
                <div class="s-box-icon">
                    <i class="fab fa-css3-alt"></i>
                </div>
                <!--skill-box-text--------->
                <div class="s-box-text">
                    <strong>MATLAB</strong>
                    <p>I have 1 month experience in MATLAB and Simulink.</p>
                </div>
            </div>
            <!--skill-box-------------->
            <div class="skill-box">
                <!--icon------->
                <div class="s-box-icon">
                    <i class="fab fa-js-square"></i>
                </div>
                <!--skill-box-text--------->
                <div class="s-box-text">
                    <strong>C++</strong>
                    <p>I have 1 year experience in C++ and I write efficient programs in the language.</p>
                </div>
            </div>


        </div>
    </div>
    <!--img--------------->
    <div class="skill-img">
        <img src="https://images.freeimages.com/images/small-previews/2f0/electronic-components-1243284.jpg" />
    </div>
</section>


<!--recent-project---------------------------->
<section id="recent">
    <!--heading--------------->
    <div class="recent-heading">
        <center><span>Recent</span></center>
        <h3>Recent projects and Publications</h3>
    </div>
    <!--img--------------->
    <div class="recent-img">
        <img src="images/recent.png" />
    </div>
    <!--btn----------->
    <a href="#" class="recent-btn">Projects</a>
</section>


<!--client----------------------------------->
<section id="client">
    <!--heading------->
    <div class="client-heading">
        <span>Comments</span>
        <h3>Reviews by Past Recruiters</h3>
    </div>
    <!--client-box-container--------------->
    <div class="c-box-container">
        <!--box-1----->
        <div class="client-box">
            <!--img-------->
            <img
                src="https://www.logo.wine/a/logo/Indian_Space_Research_Organisation/Indian_Space_Research_Organisation-Logo.wine.svg" />
            <!--stars/reviews---------->
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <!--details/comment------>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas dolore nam expedita, vitae
                aliquid quidem doloremque consectetur! Architecto, numquam. </p>
            <!--btn--------->
            <a href="#">Read More</a>
        </div>
        <!--box-2----->
        <div class="client-box">
            <!--img-------->
            <img src="https://image.shutterstock.com/image-photo/image-260nw-489388897.jpg" />
            <!--stars/reviews---------->
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <!--details/comment------>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam harum officiis quod amet sed aliquid,
                obcaecati rerum culpa commodi similique? </p>
            <!--btn--------->
            <a href="#">Read More</a>
        </div>
        <!--box-3----->
        <div class="client-box">
            <!--img-------->
            <img src="https://image.shutterstock.com/image-photo/image-260nw-1374132989.jpg" />
            <!--stars/reviews---------->
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <!--details/comment------>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perferendis sed, qui atque vel
                obcaecati eaque consectetur laboriosam facilis minima? </p>
            <!--btn--------->
            <a href="#">Read More</a>
        </div>
    </div>
</section>

<!--contact------------------------->
<section id="contact">
    <!--img-------->
    <img
        src="https://images.unsplash.com/photo-1580706483913-b6ea7db483a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3Ryb25pY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
    <!--heading---------------->
    <h3>Give a chance to Work TOGETHER</h3>
    <!--input----------------->
    <!-- <div class="contact-input">
        <input type="email" placeholder="harshwardhanchaube@gmail.com"/>
        
        <a href="#">Continue</a>
    </div>
    <br> -->

    <div class="contact-input">
        <input type="Mobile number" placeholder="6397345368" />
        <a href="#">Call now</a>

    </div>
    <br>
    <div class="contact-input">
        <input type="Github" placeholder="Git Hub" />
        <a href="#">Collab</a>

    </div>



</section>

<div class="contact-me">
    <center> <a href="#"><img src="https://img.icons8.com/color/48/000000/twitter--v1.png " class="icons"></a>
        &nbsp;&nbsp;<a href="#"><img src="https://img.icons8.com/fluent/48/000000/gmail-new.png" class="icons"></a>
        &nbsp;&nbsp;<a href="#"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" class="icons"></a>
        &nbsp;&nbsp;<a href="#"><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
                class="icons"></a>
    </center>
</div>  `;
    document.getElementById("home").insertAdjacentHTML("afterbegin", bodycnt);
    document.querySelectorAll(".navbar")[1].remove();
    document.querySelector(".whole").remove();
    document.querySelector("#footer").remove();


   
  }
  else if(num===3)
  {

    document.getElementsByTagName("title")[0].innerHTML = `HC`;
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
    const headlink = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/script.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>`;
    document.getElementById("css_sheet").insertAdjacentHTML("afterend", headlink);

    // const scrhead=`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`;
    // document.querySelector("footer").insertAdjacentHTML("afterend",scrhead);

    const bodycnt = ` <section id="main">
    <nav>
        <!--logo--------------->
        <a href="#" class="logo">
            <img
                src="https://media.istockphoto.com/photos/abstract-technology-circles-with-global-connection-lines-energy-picture-id995595516?b=1&k=6&m=995595516&s=170x170&h=e7syk6BgDkLAd0EcgmqM8KgZutZq2nMGxaz_uF-UzLk=" />
        </a>
        <!--menu-btn-------------->
        <input class="menu-btn" type="checkbox" id="menu-btn">
        <label class="menu-icon" for="menu-btn">
            <span class="nav-icon"></span>
        </label>
        <!--menu-------------->
        <ul class="menu">
            <li><a href="#main">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#recent">Projects</a></li>
            <li><a href="#client">Past Recruiters</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <!--say-hey--------->
        <a href="#" class="hey">Chat</a>
    </nav>
</section>

<!--content----------------->
<div class="content">
    <!--model--------------->
    <div class="model">
        <img src="./style/${num}/hc.jpg" />
    </div>
    <!--text-------------->
    <div class="main-text">
        <h1>Hello, I am Harshwardhan</h1>
        <p>I am an Electronics and Communicaation Engineer with an specialisation in Microcontroller Programming,
            IOT devices and Embedded Systems</p>
        <!--btn------->
        <a href="#" class="portfolio-btn">See My Resume</a>
    </div>
</div>

<!--skills------------->
<section id="skills">
    <!--text--------->
    <div class="skill-text">
        <!--heading-->
        <div class="skill-heading">
            <span>My Skills</span>
            <h2>My Experties</h2>
        </div>
        <!--skill-box-container----------->
        <div class="s-box-container">
            <!--skill-box-------------->
            <div class="skill-box">
                <!--icon------->
                <div class="s-box-icon">
                    <i class="fab fa-html5"></i>
                </div>
                <!--skill-box-text--------->
                <div class="s-box-text">
                    <strong>Interfacing with Arduino</strong>
                    <p>I have 3 month experience in Arduino programming and i have completed 30+ project.</p>
                </div>
            </div>
            <!--skill-box-------------->
            <div class="skill-box">
                <!--icon------->
                <div class="s-box-icon">
                    <i class="fab fa-css3-alt"></i>
                </div>
                <!--skill-box-text--------->
                <div class="s-box-text">
                    <strong>MATLAB</strong>
                    <p>I have 1 month experience in MATLAB and Simulink.</p>
                </div>
            </div>
            <!--skill-box-------------->
            <div class="skill-box">
                <!--icon------->
                <div class="s-box-icon">
                    <i class="fab fa-js-square"></i>
                </div>
                <!--skill-box-text--------->
                <div class="s-box-text">
                    <strong>C++</strong>
                    <p>I have 1 year experience in C++ and I write efficient programs in the language.</p>
                </div>
            </div>


        </div>
    </div>
    <!--img--------------->
    <div class="skill-img">
        <img src="https://images.freeimages.com/images/small-previews/2f0/electronic-components-1243284.jpg" />
    </div>
</section>


<!--recent-project---------------------------->
<section id="recent">
    <!--heading--------------->
    <div class="recent-heading">
        <center><span>Recent</span></center>
        <h3>Recent projects and Publications</h3>
    </div>
    <!--img--------------->
    <div class="recent-img">
        <img src="images/recent.png" />
    </div>
    <!--btn----------->
    <a href="#" class="recent-btn">Projects</a>
</section>


<!--client----------------------------------->
<section id="client">
    <!--heading------->
    <div class="client-heading">
        <span>Comments</span>
        <h3>Reviews by Past Recruiters</h3>
    </div>
    <!--client-box-container--------------->
    <div class="c-box-container">
        <!--box-1----->
        <div class="client-box">
            <!--img-------->
            <img
                src="https://www.logo.wine/a/logo/Indian_Space_Research_Organisation/Indian_Space_Research_Organisation-Logo.wine.svg" />
            <!--stars/reviews---------->
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <!--details/comment------>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas dolore nam expedita, vitae
                aliquid quidem doloremque consectetur! Architecto, numquam. </p>
            <!--btn--------->
            <a href="#">Read More</a>
        </div>
        <!--box-2----->
        <div class="client-box">
            <!--img-------->
            <img src="https://image.shutterstock.com/image-photo/image-260nw-489388897.jpg" />
            <!--stars/reviews---------->
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <!--details/comment------>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam harum officiis quod amet sed aliquid,
                obcaecati rerum culpa commodi similique? </p>
            <!--btn--------->
            <a href="#">Read More</a>
        </div>
        <!--box-3----->
        <div class="client-box">
            <!--img-------->
            <img src="https://image.shutterstock.com/image-photo/image-260nw-1374132989.jpg" />
            <!--stars/reviews---------->
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <!--details/comment------>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perferendis sed, qui atque vel
                obcaecati eaque consectetur laboriosam facilis minima? </p>
            <!--btn--------->
            <a href="#">Read More</a>
        </div>
    </div>
</section>

<!--contact------------------------->
<section id="contact">
    <!--img-------->
    <img
        src="https://images.unsplash.com/photo-1580706483913-b6ea7db483a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3Ryb25pY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
    <!--heading---------------->
    <h3>Give a chance to Work TOGETHER</h3>
    <!--input----------------->
    <!-- <div class="contact-input">
        <input type="email" placeholder="harshwardhanchaube@gmail.com"/>
        
        <a href="#">Continue</a>
    </div>
    <br> -->

    <div class="contact-input">
        <input type="Mobile number" placeholder="6397345368" />
        <a href="#">Call now</a>

    </div>
    <br>
    <div class="contact-input">
        <input type="Github" placeholder="Git Hub" />
        <a href="#">Collab</a>

    </div>



</section>

<div class="contact-me">
    <center> <a href="#"><img src="https://img.icons8.com/color/48/000000/twitter--v1.png " class="icons"></a>
        &nbsp;&nbsp;<a href="#"><img src="https://img.icons8.com/fluent/48/000000/gmail-new.png" class="icons"></a>
        &nbsp;&nbsp;<a href="#"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" class="icons"></a>
        &nbsp;&nbsp;<a href="#"><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
                class="icons"></a>
    </center>
</div>  `;
    document.getElementById("home").insertAdjacentHTML("afterbegin", bodycnt);
    document.querySelectorAll(".navbar")[1].remove();
    document.querySelector(".whole").remove();
    document.querySelector("#footer").remove();


   
  }

}
GetCssSheet(num);