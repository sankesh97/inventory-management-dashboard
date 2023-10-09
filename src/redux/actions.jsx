import axios from 'axios';

export const addSales = (salesData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      'inventory-management-api.sankeshjain.repl.co:3000/api/sales',
      salesData
    );
    dispatch({ type: 'ADD_SALES_SUCCESS', payload: data });
  } catch (error) {
    console.error('Error Adding Sales data:', error);
    dispatch({ type: 'ADD_SALES_FAILURE' });
  }
};

export const addInventory = (inventoryData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      'inventory-management-api.sankeshjain.repl.co:3000/api/items',
      inventoryData
    );
    dispatch({ type: 'ADD_INVENTORY_SUCCESS', payload: data });
  } catch (error) {
    console.error('Error Adding Inventory data:', error);
    dispatch({ type: 'ADD_INVENTORY_FAILURE' });
  }
};

export const fetchInventory = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      'inventory-management-api.sankeshjain.repl.co/api/items'
    );
    dispatch({ type: 'ADD_INVENTORY_SUCCESS', payload: data });
  } catch (error) {
    console.error('Error fetching Inventory data:', error);
    dispatch({ type: 'ADD_INVENTORY_FAILURE' });
  }
};

export const fetchSales = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      'inventory-management-api.sankeshjain.repl.co/api/sales'
    );
    dispatch({ type: 'ADD_SALES_SUCCESS', payload: data });
  } catch (error) {
    console.error('Error fetching Sales data:', error);
    dispatch({ type: 'ADD_SALES_FAILURE' });
  }
};
