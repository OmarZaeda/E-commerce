import "./Slider.css";
function Slider() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-bootstrap-ecommerce-templates.png"
            className="d-block w-100 height-500"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://designmodo.com/wp-content/uploads/2016/05/ecommerce-icons.jpg"
            className="d-block w-100 height-500"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.freeprivacypolicy.com/public/uploads/2018/07/privacy-policies-ecommerce-stores-update.jpg"
            className="d-block w-100 height-500"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Slider;
