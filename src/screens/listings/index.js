import React, { Component } from 'react';
import '../../App.css';
import '../../css/master.css';
import '../../assets/switcher/css/switcher.css';
import '../../assets/switcher/css/color1.css';
import '../../assets/switcher/css/color2.css';
import '../../assets/switcher/css/color3.css';
import '../../assets/switcher/css/color4.css';
import '../../assets/switcher/css/color5.css';
import '../../assets/switcher/css/color6.css';
import { Link } from 'react-router-dom';
import { dataVehicle } from '../../mockData';

class Listings extends Component {
  constructor() {
    super();
    this.state = {
      vehicleList: []
    }
  }

  typeClass(type) {
    switch(type) {
      case 'PREMIUM':
        return <span className="b-items__cars-one-img-type m-premium">{type}</span>;
      case 'LEASING AVAILABLE':
        return <span className="b-items__cars-one-img-type m-leasing">{type}</span>;
      case 'NEW LISTING':
        return <span className="b-items__cars-one-img-type m-listing">{type}</span>;
      case '1 OWNER':
        return <span className="b-items__cars-one-img-type m-owner">{type}</span>;
      default:
        return null;
    }
  }

  UNSAFE_componentWillMount() {
    this.setState({
      vehicleList: dataVehicle
    })
  }

  render() {
    const { vehicleList } = this.state;
    return (
      <body className="m-listings" data-scrolling-animations="true">

        {/* Loader */}
        {/*<div id="page-preloader"><span className="spinner"></span></div>*/}
        {/* Loader end */}
        {/* Start Switcher */}
        <div className="switcher-wrapper">
          <div className="demo_changer">
            <div className="demo-icon customBgColor"><i className="fa fa-cog fa-spin fa-2x"></i></div>
            <div className="form_holder">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="predefined_styles">
                    <div className="skin-theme-switcher">
                      <h4>Color</h4>
                      <a href="#" data-switchcolor="color1" className="styleswitch"
                         style={{backgroundColor:"#f76d2b"}}> </a>
                      <a href="#" data-switchcolor="color2" className="styleswitch"
                         style={{backgroundColor:"#de483d"}}> </a>
                      <a href="#" data-switchcolor="color3" className="styleswitch"
                         style={{backgroundColor:"#228dcb"}}> </a>
                      <a href="#" data-switchcolor="color4" className="styleswitch"
                         style={{backgroundColor:"#00bff3"}}> </a>
                      <a href="#" data-switchcolor="color5" className="styleswitch"
                         style={{backgroundColor:"#2dcc70"}}> </a>
                      <a href="#" data-switchcolor="color6" className="styleswitch"
                         style={{backgroundColor:"#6054c2"}}> </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Switcher */}

        <section className="b-modal">
          <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
               aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  <h4 className="modal-title" id="myModalLabel">Video</h4>
                </div>
                <div className="modal-body">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/a_ugz7GoHwY"
                          allowFullScreen></iframe>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*b-modal*/}
        <header className="b-topBar wow slideInDown" data-wow-delay="0.7s">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-xs-6">
                <div className="b-topBar__addr">
                  <span className="fa fa-map-marker"></span>
                  202 W 7TH ST, LOS ANGELES, CA 90014
                </div>
              </div>
              <div className="col-md-2 col-xs-6">
                <div className="b-topBar__tel">
                  <span className="fa fa-phone"></span>
                  1-800- 624-5462
                </div>
              </div>
              <div className="col-md-4 col-xs-6">
                <nav className="b-topBar__nav">
                  <ul>
                    <li><a href="#">Cart</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Sign in</a></li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-2 col-xs-6">
                <div className="b-topBar__lang">
                  <div className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle='dropdown'>Language</a>
                    <a className="m-langLink dropdown-toggle" data-toggle='dropdown' href="#"><span
                        className="b-topBar__lang-flag m-en"></span>EN<span className="fa fa-caret-down"></span></a>
                    <ul className="dropdown-menu h-lang">
                      <li><a className="m-langLink dropdown-toggle" data-toggle='dropdown' href="#"><span
                          className="b-topBar__lang-flag m-en"></span>EN</a></li>
                      <li><a className="m-langLink dropdown-toggle" data-toggle='dropdown' href="#"><span
                          className="b-topBar__lang-flag m-es"></span>ES</a></li>
                      <li><a className="m-langLink dropdown-toggle" data-toggle='dropdown' href="#"><span
                          className="b-topBar__lang-flag m-de"></span>DE</a></li>
                      <li><a className="m-langLink dropdown-toggle" data-toggle='dropdown' href="#"><span
                          className="b-topBar__lang-flag m-fr"></span>FR</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*b-topBar*/}

        <nav className="b-nav">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 col-xs-4">
                <div className="b-nav__logo wow slideInLeft" data-wow-delay="0.3s">
                  <h3><Link to="/">Auto<span>Club</span></Link></h3>
                  <h2><Link to="/">AUTO DEALER TEMPLATE</Link></h2>
                </div>
              </div>
              <div className="col-sm-9 col-xs-8">
                <div className="b-nav__list wow slideInRight" data-wow-delay="0.3s">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>
                  <div className="collapse navbar-collapse navbar-main-slide" id="nav">
                    <ul className="navbar-nav-menu">
                      <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle='dropdown' href="home.html">Home <span
                            className="fa fa-caret-down"></span></a>
                        <ul className="dropdown-menu h-nav">
                          <li><a href="home.html">Home Page 1</a></li>
                          <li><a href="home-2.html">Home Page 2</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle='dropdown' href="#">Grid <span
                            className="fa fa-caret-down"></span></a>
                        <ul className="dropdown-menu h-nav">
                          <li><a href="listings.html">listing 1</a></li>
                          <li><a href="listingsTwo.html">listing 2</a></li>
                          <li><a href="listTable.html">listing 3</a></li>
                          <li><a href="listTableTwo.html">listing 4</a></li>
                        </ul>
                      </li>
                      <li><a href="compare.html">compare</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="article.html">Services</a></li>
                      <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle='dropdown' href="#">Blog <span
                            className="fa fa-caret-down"></span></a>
                        <ul className="dropdown-menu h-nav">
                          <li><a href="blog.html">Blog 1</a></li>
                          <li><a href="blogTwo.html">Blog 2</a></li>
                          <li><a href="404.html">Page 404</a></li>
                        </ul>
                      </li>
                      <li><a href="submit1.html">Shop</a></li>
                      <li><a href="contacts.html">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/*b-nav*/}

        <section className="b-pageHeader">
          <div className="container">
            <h1 className=" wow zoomInLeft" data-wow-delay="0.5s">Auto Listings</h1>
            <div className="b-pageHeader__search wow zoomInRight" data-wow-delay="0.5s">
              <h3>Your search returned 28 results</h3>
            </div>
          </div>
        </section>
        {/*b-pageHeader*/}

        <div className="b-breadCumbs s-shadow">
          <div className="container wow zoomInUp" data-wow-delay="0.5s">
            <a href="home.html" className="b-breadCumbs__page">Home</a><span className="fa fa-angle-right"></span><a
              href="listings.html" className="b-breadCumbs__page m-active">Search Results</a>
          </div>
        </div>
        {/*b-breadCumbs*/}

        <div className="b-infoBar">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-xs-12">
                <div className="b-infoBar__compare wow zoomInUp" data-wow-delay="0.5s">
                  <div className="dropdown">
                    <a href="#" className="dropdown-toggle b-infoBar__compare-item" data-toggle='dropdown'><span
                        className="fa fa-clock-o"></span>RECENTLY VIEWED<span className="fa fa-caret-down"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="detail.html">Item</a></li>
                      <li><a href="detail.html">Item</a></li>
                      <li><a href="detail.html">Item</a></li>
                      <li><a href="detail.html">Item</a></li>
                    </ul>
                  </div>
                  <a href="compare.html" className="b-infoBar__compare-item"><span className="fa fa-compress"></span>COMPARE
                    VEHICLES: 2</a>
                </div>
              </div>
              <div className="col-lg-8 col-xs-12">
                <div className="b-infoBar__select">
                  <form method="post" action="/">
                    <div className="b-infoBar__select-one wow zoomInUp" data-wow-delay="0.5s">
                      <span className="b-infoBar__select-one-title">SELECT VIEW</span>
                      <a href="listingsTwo.html" className="m-list m-active"><span className="fa fa-list"></span></a>
                      <a href="listTable.html" className="m-table"><span className="fa fa-table"></span></a>
                    </div>
                    <div className="b-infoBar__select-one wow zoomInUp" data-wow-delay="0.5s">
                      <span className="b-infoBar__select-one-title">SHOW ON PAGE</span>
                      <select name="select1" className="m-select">
                        <option value="" selected="">10 items</option>
                      </select>
                      <span className="fa fa-caret-down"></span>
                    </div>
                    <div className="b-infoBar__select-one wow zoomInUp" data-wow-delay="0.5s">
                      <span className="b-infoBar__select-one-title">SORT BY</span>
                      <select name="select2" className="m-select">
                        <option value="" selected="">Last Added</option>
                      </select>
                      <span className="fa fa-caret-down"></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*b-infoBar*/}

        <section className="b-items s-shadow">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-sm-8 col-xs-12">
                <div className="b-items__cars">

                  {
                    vehicleList.map((vehicle, index) => (
                      <div className="b-items__cars-one wow zoomInUp" data-wow-delay="0.5s">
                        <div className="b-items__cars-one-img">
                          <img src={require("../../media/270x230/dodge.jpg")} alt='dodge'/>
                          <a data-toggle="modal" data-target="#myModal" href="#"
                             className="b-items__cars-one-img-video"><span className="fa fa-film"></span>VIDEO</a>
                          { this.typeClass(vehicle.type) }
                          <form action="/" method="post">
                            <input type="checkbox" name="check1" id='check1'/>
                            <label htmlFor="check1" className="b-items__cars-one-img-check"><span
                                className="fa fa-check"></span></label>
                          </form>
                        </div>
                        <div className="b-items__cars-one-info">
                          <header className="b-items__cars-one-info-header s-lineDownLeft">
                            <h2>{vehicle.name}</h2>
                            <span>{vehicle.price}</span>
                          </header>
                          <p>
                            {vehicle.description}
                          </p>
                          <div className="b-items__cars-one-info-km">
                            <span className="fa fa-tachometer"></span> {vehicle.distance}
                          </div>
                          <div className="b-items__cars-one-info-details">
                            <div className="b-featured__item-links">
                              <a href="#">Registered {vehicle.year}</a>
                              <a href="#">{vehicle.condition}</a>
                              <a href="#">{vehicle.speed}-Speed Automatic</a>
                              <a href="#">{vehicle.fuel}</a>
                            </div>
                            <a href="detail.html" className="btn m-btn">VIEW DETAILS<span
                                className="fa fa-angle-right"></span></a>
                          </div>
                        </div>
                      </div>
                      )
                    )
                  }
                </div>
                <div className="b-items__pagination wow zoomInUp" data-wow-delay="0.5s">
                  <div className="b-items__pagination-main">
                    <a data-toggle="modal" data-target="#myModal" href="#" className="m-left"><span
                        className="fa fa-angle-left"></span></a>
                    <span className="m-active"><a href="#">1</a></span>
                    <span><a href="#">2</a></span>
                    <span><a href="#">3</a></span>
                    <span><a href="#">4</a></span>
                    <a href="#" className="m-right"><span className="fa fa-angle-right"></span></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-4 col-xs-12">
                <aside className="b-items__aside">
                  <h2 className="s-title wow zoomInUp" data-wow-delay="0.5s">REFINE YOUR SEARCH</h2>
                  <div className="b-items__aside-main wow zoomInUp" data-wow-delay="0.5s">
                    <form>
                      <div className="b-items__aside-main-body">
                        <div className="b-items__aside-main-body-item">
                          <label>SELECT A MAKE</label>
                          <div>
                            <select name="select1" className="m-select">
                              <option value="" selected="">Any Make</option>
                            </select>
                            <span className="fa fa-caret-down"></span>
                          </div>
                        </div>
                        <div className="b-items__aside-main-body-item">
                          <label>SELECT A MODEL</label>
                          <div>
                            <select name="select1" className="m-select">
                              <option value="" selected="">Any Make</option>
                            </select>
                            <span className="fa fa-caret-down"></span>
                          </div>
                        </div>
                        <div className="b-items__aside-main-body-item">
                          <label>PRICE RANGE</label>
                          <div className="slider"></div>
                          <input type="hidden" name="min" value="100" className="j-min"/>
                          <input type="hidden" name="max" value="1000" className="j-max"/>
                        </div>
                        <div className="b-items__aside-main-body-item">
                          <label>VEHICLE TYPE</label>
                          <div>
                            <select name="select1" className="m-select">
                              <option value="" selected="">Any Type</option>
                            </select>
                            <span className="fa fa-caret-down"></span>
                          </div>
                        </div>
                        <div className="b-items__aside-main-body-item">
                          <label>VEHICLE STATUS</label>
                          <div>
                            <select name="select1" className="m-select">
                              <option value="" selected="">Any Status</option>
                            </select>
                            <span className="fa fa-caret-down"></span>
                          </div>
                        </div>
                        <div className="b-items__aside-main-body-item">
                          <label>FUEL TYPE</label>
                          <div>
                            <select name="select1" className="m-select">
                              <option value="" selected="">All Fuel Types</option>
                            </select>
                            <span className="fa fa-caret-down"></span>
                          </div>
                        </div>
                      </div>
                      <footer className="b-items__aside-main-footer">
                        <button type="submit" className="btn m-btn">FILTER VEHICLES<span
                            className="fa fa-angle-right"></span></button>
                        <br/>
                        <a href="">RESET ALL FILTERS</a>
                      </footer>
                    </form>
                  </div>
                  <div className="b-items__aside-sell wow zoomInUp" data-wow-delay="0.5s">
                    <div className="b-items__aside-sell-img">
                      <h3>SELL YOUR CAR</h3>
                    </div>
                    <div className="b-items__aside-sell-info">
                      <p>
                        Nam tellus enimds eleifend dignis lsim
                        biben edum tristique sed metus fusce
                        Maecenas lobortis.
                      </p>
                      <a href="submit1.html" className="btn m-btn">REGISTER NOW<span
                          className="fa fa-angle-right"></span></a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
        {/*b-items*/}

        <div className="b-features">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-md-offset-3 col-xs-6 col-xs-offset-6">
                <ul className="b-features__items">
                  <li className="wow zoomInUp" data-wow-delay="0.3s" data-wow-offset="100">Low Prices, No Haggling</li>
                  <li className="wow zoomInUp" data-wow-delay="0.3s" data-wow-offset="100">Largest Car Dealership</li>
                  <li className="wow zoomInUp" data-wow-delay="0.3s" data-wow-offset="100">Multipoint Safety Check</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*b-features*/}

        <div className="b-info">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-xs-6">
                <aside className="b-info__aside wow zoomInLeft" data-wow-delay="0.3s">
                  <article className="b-info__aside-article">
                    <h3>OPENING HOURS</h3>
                    <div className="b-info__aside-article-item">
                      <h6>Sales Department</h6>
                      <p>Mon-Sat : 8:00am - 5:00pm<br/>
                        Sunday is closed</p>
                    </div>
                    <div className="b-info__aside-article-item">
                      <h6>Service Department</h6>
                      <p>Mon-Sat : 8:00am - 5:00pm<br/>
                        Sunday is closed</p>
                    </div>
                  </article>
                  <article className="b-info__aside-article">
                    <h3>About us</h3>
                    <p>Vestibulum varius od lio eget conseq
                      uat blandit, lorem auglue comm lodo
                      nisl non ultricies lectus nibh mas lsa
                      Duis scelerisque aliquet. Ante donec
                      libero pede porttitor dacu msan esct
                      venenatis quis.</p>
                  </article>
                  <a href="about.html" className="btn m-btn">Read More<span className="fa fa-angle-right"></span></a>
                </aside>
              </div>
              <div className="col-md-3 col-xs-6">
                <div className="b-info__latest">
                  <h3>LATEST AUTOS</h3>
                  <div className="b-info__latest-article wow zoomInUp" data-wow-delay="0.3s">
                    <div className="b-info__latest-article-photo m-audi"></div>
                    <div className="b-info__latest-article-info">
                      <h6><a href="detail.html">MERCEDES-AMG GT S</a></h6>
                      <p><span className="fa fa-tachometer"></span> 35,000 KM</p>
                    </div>
                  </div>
                  <div className="b-info__latest-article wow zoomInUp" data-wow-delay="0.3s">
                    <div className="b-info__latest-article-photo m-audiSpyder"></div>
                    <div className="b-info__latest-article-info">
                      <h6><a href="#">AUDI R8 SPYDER V-8</a></h6>
                      <p><span className="fa fa-tachometer"></span> 35,000 KM</p>
                    </div>
                  </div>
                  <div className="b-info__latest-article wow zoomInUp" data-wow-delay="0.3s">
                    <div className="b-info__latest-article-photo m-aston"></div>
                    <div className="b-info__latest-article-info">
                      <h6><a href="#">ASTON MARTIN VANTAGE</a></h6>
                      <p><span className="fa fa-tachometer"></span> 35,000 KM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-6">
                <div className="b-info__twitter">
                  <h3>from twitter</h3>
                  <div className="b-info__twitter-article wow zoomInUp" data-wow-delay="0.3s">
                    <div className="b-info__twitter-article-icon"><span className="fa fa-twitter"></span></div>
                    <div className="b-info__twitter-article-content">
                      <p>Duis scelerisque aliquet ante donec libero pede porttitor dacu</p>
                      <span>20 minutes ago</span>
                    </div>
                  </div>
                  <div className="b-info__twitter-article wow zoomInUp" data-wow-delay="0.3s">
                    <div className="b-info__twitter-article-icon"><span className="fa fa-twitter"></span></div>
                    <div className="b-info__twitter-article-content">
                      <p>Duis scelerisque aliquet ante donec libero pede porttitor dacu</p>
                      <span>20 minutes ago</span>
                    </div>
                  </div>
                  <div className="b-info__twitter-article wow zoomInUp" data-wow-delay="0.3s">
                    <div className="b-info__twitter-article-icon"><span className="fa fa-twitter"></span></div>
                    <div className="b-info__twitter-article-content">
                      <p>Duis scelerisque aliquet ante donec libero pede porttitor dacu</p>
                      <span>20 minutes ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-6">
                <address className="b-info__contacts wow zoomInUp" data-wow-delay="0.3s">
                  <p>contact us</p>
                  <div className="b-info__contacts-item">
                    <span className="fa fa-map-marker"></span>
                    <em>202 W 7th St, Suite 233 Los Angeles,
                      California 90014 USA</em>
                  </div>
                  <div className="b-info__contacts-item">
                    <span className="fa fa-phone"></span>
                    <em>Phone: 1-800- 624-5462</em>
                  </div>
                  <div className="b-info__contacts-item">
                    <span className="fa fa-fax"></span>
                    <em>FAX: 1-800- 624-5462</em>
                  </div>
                  <div className="b-info__contacts-item">
                    <span className="fa fa-envelope"></span>
                    <em>Email: info@domain.com</em>
                  </div>
                </address>
                <address className="b-info__map">
                  <a href="contacts.html">Open Location Map</a>
                </address>
              </div>
            </div>
          </div>
        </div>
        {/*b-info*/}

        <footer className="b-footer">
          <a id="to-top" href="#this-is-top"><i className="fa fa-chevron-up"></i></a>
          <div className="container">
            <div className="row">
              <div className="col-xs-4">
                <div className="b-footer__company wow fadeInLeft" data-wow-delay="0.3s">
                  <div className="b-nav__logo">
                    <h3><a href="home.html">Auto<span>Club</span></a></h3>
                  </div>
                  <p>&copy; 2015 Designed by Templines &amp; Powered by WordPress.</p>
                </div>
              </div>
              <div className="col-xs-8">
                <div className="b-footer__content wow fadeInRight" data-wow-delay="0.3s">
                  <div className="b-footer__content-social">
                    <a href="#"><span className="fa fa-facebook-square"></span></a>
                    <a href="#"><span className="fa fa-twitter-square"></span></a>
                    <a href="#"><span className="fa fa-google-plus-square"></span></a>
                    <a href="#"><span className="fa fa-instagram"></span></a>
                    <a href="#"><span className="fa fa-youtube-square"></span></a>
                    <a href="#"><span className="fa fa-skype"></span></a>
                  </div>
                  <nav className="b-footer__content-nav">
                    <ul>
                      <li><a href="home.html">Home</a></li>
                      <li><a href="404.html">Pages</a></li>
                      <li><a href="listings.html">Inventory</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="404.html">Services</a></li>
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="listTable.html">Shop</a></li>
                      <li><a href="contacts.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    );
  }
}

export default Listings;
