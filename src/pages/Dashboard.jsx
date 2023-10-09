const Dashboard = () => {
  return (
    <>
      <div className='container'>
        <div className='row m-2'>
          <div className='col'>
            <div className='card'>
              <div className='card-body'>
                <h5>Total Sales</h5>
                <h3></h3>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <div className='card-body'>
                <h5>Total Inventory</h5>
                <h3></h3>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <div className='card-body'>
                <h5>Total Sales</h5>
                <h3></h3>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <div className='card-body'>
                <h5>Total Sales</h5>
                <h3></h3>
              </div>
            </div>
          </div>
        </div>
        <div className='row m-2'>
          <div className='col-md-6'>
            <h2 className='text-center text-decoration-underline'>
              Inventory Report
            </h2>
          </div>
          <div className='col-md-6'>
            <h2 className='text-center text-decoration-underline'>
              Sales Report
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
