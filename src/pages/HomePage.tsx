

import { Toaster } from 'react-hot-toast';

import Nav from '../components/Nav'
import PromptBox from '../components/PromptBox'
import RateLimitedUI from '../components/RateLimitedUI'
import SideBar from '../components/SideBar';
import { useRateLimit } from '../components/RateLimitProvider.tsx';

function App() {
  
  const {isRateLimited} = useRateLimit();
  return (
    <>
      <div className='flex'>
        <SideBar/>
        <div className='flex flex-col flex-1'>
          <Nav/>
          {isRateLimited && <RateLimitedUI/>}
          {!isRateLimited && <PromptBox/>}
        </div>
          
      </div>
        <Toaster />
    </>
  )
}

export default App
