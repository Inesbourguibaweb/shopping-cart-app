import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget'



export const Header: FunctionComponent = () => {
 
  return (
    <header className={classes.header}>
      <div>
        <Link to="/">
          <img src={logo} className={classes.logo} alt="Shopping Cart Application" />
        </Link>
      </div>
      <div>
        <CartWidget productsCount={productsCount} />
      </div>
    </header>
  )
}