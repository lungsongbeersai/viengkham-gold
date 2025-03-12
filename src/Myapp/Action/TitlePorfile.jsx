import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
function TitlePorfile({parth}) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(()=>{

    },[parth])
  return (
    <>
      <div>
      <h1 className="text-xl font-extrabold sm:text-3xl">ບັນຊີ - ພາບລວມ</h1>
    </div>
    <div className="space-y-3 rounded-lg border border-gray-400 bg-white pt-3 shadow">
      <div className="flex flex-row justify-between px-4 pb-4 xl:pb-0">
        <div className="flex flex-auto space-x-1.5 sm:space-x-3">
          <div className="h-11 w-11 sm:h-20 sm:w-20">
            <img
              className="border-primary-500 h-full w-full rounded-full border-2 p-[3px]"
              src="/assets/img/logo/logo.png"
              alt=""
            />
          </div>
          <div>
            <div className="flex flex-row items-center space-x-1 py-1">
              <span className="text-sm font-extrabold sm:text-lg sm:font-bold">
                John Doe Smith
              </span>
              <span>
                <img src="assets/icons/verified.svg" alt="" />
              </span>
            </div>
            <div className="space-y-2 text-xs font-semibold text-gray-400">
              <p>AccountID: #ECX12345</p>
              <div className="flex flex-col space-y-2 space-x-0 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-5">
                <div>
                  <span>
                    <i className="fas fa-user" />
                  </span>
                  Customer
                </div>
                <div>
                  <span>
                    <i className="fas fa-map-marker-alt" />
                  </span>
                  United States
                </div>
                <div className="whitespace-nowrap">
                  <span>
                    <i className="far fa-envelope" />
                  </span>
                  johndoesmith@email.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block xl:hidden">
        <button
        id="account-dropdown-id"
        onClick={toggleDropdown}
        className="bg-primary hover:bg-primary-800 focus:ring-primary-300 inline-flex items-center rounded-md px-4 py-2.5 text-center text-sm font-medium text-white focus:ring-4"
        type="button"
      >
            <i className="fas fa-list-dots" />
          </button>
          {/* Dropdown menu */}
          <div
          id="account-dropdown-toggle"
          className={`z-10 ${!isDropdownOpen && 'hidden'} h-48 w-56 list-none divide-y divide-gray-100 overflow-y-auto rounded border border-gray-400 bg-white p-1 text-base shadow-md`}
        >
            <ul className="py-1" aria-labelledby="account-dropdown-id">
              <li>
                <Link className="nk-dropdown-menu" to={'/profile'}>
                ພາບລວມບັນຊີ
                </Link>
              </li>
              <li>
                <Link className="nk-dropdown-menu" to={'/setting'}>
                ການຕັ້ງຄ່າ
                </Link>
              </li>
              <li>
                <Link className="nk-dropdown-menu" to={'/order'}>
                  ຄໍາສັ່ງ &amp; ການສັ່ງຊື້
                </Link>
              </li>
              <li>
                <Link className="nk-dropdown-menu" to={'/buy'}>
                ສັ່ງຊື້ທອງຄຳ
                </Link>
              </li>
              <li>
                <Link className="nk-dropdown-menu"
                  to={'/shipping'}  >
                  ການຂົນສົ່ງ &amp; ໃບບິນ
                </Link>
              </li>
            
              <li>
                <Link className="nk-dropdown-menu" to={'/'}>
                ລາຍການທີ່ຢາກໄດ້ &amp; ລາຍການທີ່ບັນທຶກໄວ້
                </Link>
              </li>
              <li>
                <Link className="nk-dropdown-menu"  to={'/'}>
                ການລົງທະບຽນຂອງຂວັນ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden w-full border-b border-gray-400 xl:block" />
      {/* Account Dashboard Tab Links - Start */}
      <div
        id="accountTabs"
        className="mx-auto hidden w-full items-center space-x-2 overflow-x-auto whitespace-nowrap px-4 pb-3 text-sm font-semibold xl:inline-flex xl:flex-row xl:flex-nowrap xl:justify-between xl:overflow-x-hidden"
      >
        <Link className={`${parth==='/profile' ? 'nk-acc-active-tab':'nk-account-tab'}`} to={'/profile'}>
          <div>ພາບລວມບັນຊີ</div>
        </Link>
        <Link className={`${parth==='/setting' ? 'nk-acc-active-tab':'nk-account-tab'}`} to={'/setting'}>
          <div>ການຕັ້ງຄ່າ</div>
        </Link>
        <Link className={`${parth==='/order' ? 'nk-acc-active-tab':'nk-account-tab'}`} to={'/order'}>
          <div>ຄໍາສັ່ງ &amp; ການສັ່ງຊື້</div>
        </Link>

        <Link className={`${parth==='/buy' ? 'nk-acc-active-tab':'nk-account-tab'}`} to={'/buy'}>
          <div>ສັ່ງຊື້ທອງຄຳ</div>
        </Link>
        <Link className={`${parth==='/shipping' ? 'nk-acc-active-tab':'nk-account-tab'}`} to={'/shipping'}>
          <div>ການຂົນສົ່ງ &amp; ໃບບິນ</div>
        </Link>
        <Link className={`${parth==='/gift' ? 'nk-acc-active-tab':'nk-account-tab'}`} to={'/gift'}>
          <div> ລາຍການທີ່ຢາກໄດ້ &amp; ລາຍການທີ່ບັນທຶກໄວ້</div>
        </Link>
        <Link className={`${parth==='/history' ? 'nk-acc-active-tab':'nk-account-tab'}`} to={'/history'}>
          <div>ການລົງທະບຽນຂອງຂວັນ</div>
        </Link>
       
      </div>
      {/* Account Dashboard Tab Links - End */}
    </div>
    </>
  )
}

export default TitlePorfile