const initialState = { sales: [], inventory: [], error: null };

const InventoryManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    // SUCCESSES //
    case 'ADD_SALES_SUCCESS':
      return {
        ...state,
        sales: [...state.sales, action.payload],
        error: null,
      };

    case 'ADD_INVENTORY_SUCCESS':
      return {
        ...state,
        inventory: [state.inventory, action.payload],
        error: null,
      };
    case 'FETCH_INVENTORY_SUCCESS':
      return { ...state, inventory: action.payload, error: null };

    case 'FETCH_SALES_SUCCESS':
      return { ...state, sales: action.payload, error: null };

    // FAILURES //
    case 'ADD_SALES_FAILURE':
      return {
        ...state,
        error: 'Failed to add Sale data',
      };
    case 'ADD_INVENTORY_FAILURE':
      return {
        ...state,
        error: 'Failed to add Item data',
      };
    case 'FETCH_INVENTORY_FAILURE':
      return { ...state, error: 'Error fetching Inventory data' };

    case 'FETCH_SALES_FAILURE':
      return { ...state, error: 'Error fetching Sales data' };

    default:
      return state;
  }
};
export default InventoryManagementReducer;
