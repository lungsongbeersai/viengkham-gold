import React from 'react'
import { Link ,useLocation} from 'react-router-dom';
import TitlePorfile from './TitlePorfile';
function EditProfile() {
  const location = useLocation();
  return (
    <div className="mx-auto mt-2 w-full space-y-4 px-4 text-sm xl:max-w-7xl">
    <div id="nav-link-top" className="fs-16px">
      <span className="text-blue-700 hover:underline">
        <Link to={'/'}>ໜ້າຫຼັກ</Link>
      </span>
      <span className='px-3'>
        <i className="fas fa-chevron-right text-xs" />
      </span>
      <span>ບັນຊີຂອງຂ້ອຍ</span>
    </div>
    <TitlePorfile parth={location.pathname} />

    
    </div>
  )
}

export default EditProfile