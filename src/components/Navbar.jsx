import { NavLink } from 'react-router-dom';

const NavbarContainer = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <NavLink className={'text-decoration-none text-dark'} to={'/'}>
            Inventory Management App
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse flex-row-reverse'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav nav-underline me-0 mb-2 mb-lg-0'>
              <li className='nav-item'>
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to={'/inventory'}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  Inventory
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to={'/sales'}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  Sales
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarContainer;
