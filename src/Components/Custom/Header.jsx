import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='flex justify-between text-center p-3'>
          <div>
              <img src="https://as2.ftcdn.net/v2/jpg/03/33/39/57/1000_F_333395790_t8aeuXKVOojMngKZIBvvs44E0Rqqrlna.jpg" alt="logo" className='w-20' />
          </div>
        <Button className="mt-5"> Sign In</Button>
      </div>
    </>
  )
}

export default Header