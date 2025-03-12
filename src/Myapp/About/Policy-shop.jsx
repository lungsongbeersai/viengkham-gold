import React,{useState,useEffect} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import { Config} from '../../Config/connection';
function PolicyShop() {
  const api = Config.urlApi;
  const [itemPolicy, setItemPolicy] = useState([]);
  const fetchPolicy = async () => {
      try {
          const response = await fetch(api + 'policy/');
          const jsonData = await response.json();
          setItemPolicy(jsonData);
          console.log(jsonData)
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  }

  useEffect(() => {
      fetchPolicy()
  }, [])

  return (
    <>
      <div>
        <div id="nav-link-top">
          <div className="mx-auto w-full py-3 px-4 text-sm sm:px-6 md:px-8 lg:px-12 xl:max-w-7xl xl:px-0">
            <span className="text-blue-700 hover:underline">
              <Link to={'/'}>Home</Link>
            </span>
            <span className='px-2'>
              <i className="fas fa-chevron-right text-xs" />
            </span>
            <span>ນະໂຍບາຍປະຈຳຮ້ານ</span>
          </div>
        </div>
        <div>
          
          <div className="mx-auto w-full space-y-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:max-w-6xl xl:px-0">
            <div className="flex space-x-16">
              <div className="w-full space-y-6">
                <h1 className="text-xl font-bold text-gray"> ນະໂຍບາຍຂອງ ຮ້ານຄຳ ນາງວຽງຄຳ </h1>
                <div className="w-24 border-2 border-gray-600" />
                <div className="space-y-3 text-dark">
                <Accordion defaultActiveKey="0" >
                {itemPolicy.map((item, index) => (
                    <Accordion.Item eventKey={index} >
                      <Accordion.Header className='bg-danger'> {item.policy_name}</Accordion.Header>
                      <Accordion.Body >
                      <div dangerouslySetInnerHTML={{ __html: item.policy_detail }} />
                      </Accordion.Body>
                    </Accordion.Item>
))}
                    
                  </Accordion>
                </div>
                {/* Our Offices */}
                <div>
                  <div className="w-3/5 space-y-3">
                    <h1 className="text-xl font-bold text-gray-600">Our Offices</h1>
                    <div className="w-24 border-2 border-gray-600" />
                  </div>
                  <div className="pt-6" />
                  <div className="pb-3">
                    Please choose the Office which is nearest to you.
                  </div>
                  <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-6 sm:gap-x-4 md:gap-x-8 lg:gap-x-16">
                    <div className="col-span-2 grid rounded bg-white px-4 py-6 shadow">
                      <div className="text-base font-semibold">Head Office</div>
                      <div className="text-base font-semibold">Neykart LLC</div>
                      <div className="space-y-1 py-2 text-sm">
                        <p>info@email.com</p>
                        <p>(123) 345-6789</p>
                        <p>12345 N Park Ave,</p>
                        <p>STE 67110</p>
                        <p>Elkhart, IN</p>
                        <p>46514, United States</p>
                      </div>
                    </div>
                    <div className="col-span-2 grid rounded bg-white px-4 py-6 shadow">
                      <div className="text-base font-semibold">California Office</div>
                      <div className="text-base font-semibold">Neykart LLC</div>
                      <div className="space-y-1 py-2 text-sm">
                        <p>info.ca@email.com</p>
                        <p>(123) 345-6789</p>
                        <p>12345 N Park Ave,</p>
                        <p>STE 67110</p>
                        <p>Los Angeles, CA</p>
                        <p>12345, United States</p>
                      </div>
                    </div>
                    <div className="col-span-2 grid rounded bg-white px-4 py-6 shadow">
                      <div className="text-base font-semibold">UK Office</div>
                      <div className="text-base font-semibold">Neykart LLC</div>
                      <div className="space-y-1 py-2 text-sm">
                        <p>info.uk@email.com</p>
                        <p>(123) 345-6789</p>
                        <p>12345 N Park Ave,</p>
                        <p>STE 67110</p>
                        <p>London, United Kingdom</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* User Feedback */}
                <div className="mx-auto w-full border border-gray-400 bg-white px-5 py-6 sm:w-2/3">
                  <div className="flex flex-col lg:flex-row lg:space-x-4">
                    <div>
                      <span className="font-semibold">FAQs Feedback:</span>{" "}
                      <br className="block xl:hidden" />
                      Did you find what you were looking for?
                    </div>
                    <div className="mt-3 space-x-4 xl:mt-0">
                      <span className="cursor-pointer rounded border border-gray-400 px-10 py-2 text-center hover:bg-gray-100">
                        Yes
                      </span>
                      <span className="cursor-pointer rounded border border-gray-400 px-10 py-2 text-center hover:bg-gray-100">
                        No
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default PolicyShop