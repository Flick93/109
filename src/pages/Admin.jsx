import "./Admin.css";

function Admin(){
    return(
        <div className="admin page">
            <h1>Administrative Support</h1>


            <div className="parent">
                <div className="products" >
                    
                    <div className="form">
                        <h3 >Register a Product</h3>
                        <div>
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div>
                            <label className="form-label">Image</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div>
                            <label className="form-label">Category</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div>
                            <label className="form-label">Price</label>
                            <input type="number" className="form-control" />
                        </div>
                        <div className="controls">
                            <button className="btn btn-outline-dark">Save Product </button>
                        </div>
                    </div>
                </div>

                <div className="coupons">
                    <div className="form">
                        <h3 >Register a Coupon</h3>
                        <div>
                            <label className="form-label">Code</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div>
                            <label className="form-label">Discount</label>
                            <input type="number" className="form-control" />
                        </div>

                        <div className="controls">
                            <button className="btn btn-outline-danger">Save Coupon</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Admin;

/**
 * coupon:
 * code: qwerty
 * discount: 10
 */

/**
 * product:
 * title
 * image
 * category
 * price
 * 
 */