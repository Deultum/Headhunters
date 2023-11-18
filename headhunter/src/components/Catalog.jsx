const Catalog= () => {
    return (
        <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Placeholder Image" />
              <div className="card-body">
                <h5 className="card-title">Card Title 1</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Placeholder Image" />
              <div className="card-body">
                <h5 className="card-title">Card Title 2</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Placeholder Image" />
              <div className="card-body">
                <h5 className="card-title">Card Title 3</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          {/* Add more cards as needed */}
        </div>
      </div>
    )
}
export default Catalog;