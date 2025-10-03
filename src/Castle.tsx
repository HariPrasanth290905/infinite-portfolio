import { Outlet } from 'react-router-dom'
import Guides from './rooms/Guides/Guides'

function Castle() {
  return (
    <>
      <Guides />
      <Outlet />
    </>
  )
}

export default Castle