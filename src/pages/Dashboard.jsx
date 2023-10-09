import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInventory, fetchSales } from '../redux/actions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const salesData = useSelector((state) => state.sales);
  const inventoryData = useSelector((state) => state.inventory);

  useEffect(() => {
    dispatch(fetchInventory());
    dispatch(fetchSales());
  }, [dispatch]);

  const totalSales = salesData.reduce(
    (totalSales, currentSale) => totalSales + currentSale,
    0
  );

  const totalInventory = inventoryData.reduce(
    (totalInventory, currentItem) => totalInventory + currentItem.quantity,
    0
  );
  return (
    <>
      <div className='container'>
        <div className='row m-5'>
          <div className='col-md m-1'>
            <div className='card'>
              <div className='card-body'>
                <h5>Total Sales : {totalSales}</h5>
              </div>
            </div>
          </div>
          <div className='col-md m-1'>
            <div className='card'>
              <div className='card-body'>
                <h5>Total Inventory : {totalInventory} </h5>
              </div>
            </div>
          </div>
        </div>
        <div className='row m-5'>
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
