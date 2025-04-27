import logo from '../../assets/logo.png';
import trans from '../../assets/trans.png'
import message from '../../assets/message.png'
import search from '../../assets/search.png'
import notifi from '../../assets/notifi.png'


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-32">
      <div className="flex items-center">
        <div className="mr-6">
          <img src={logo} alt="Tawun Logo" className="h-8" />
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-black font-medium">Home</a>
          <a href="#" className="text-black font-medium">Services</a>
          <a href="#" className="text-black font-medium">About Us</a>
          <a href="#" className="text-black font-medium">Contact Us</a>
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="hidden md:block relative mr-4">
          <input 
            type="text" 
            placeholder="Search for any service or provider"
            className="px-4 py-2 pr-8 border border-gray-300 rounded-full w-[418px] h-[45px]" 
            style={{ borderRadius: '83px' }}
          />
          <img src={search} alt="Search Icon" className="absolute right-3 top-2.5" />

        </div>
        
        <div className="flex space-x-3">
          <a href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200">
            <span className="text-gray-600 text-sm"><img src={trans}></img></span>
          </a>
          <a href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-100">
            <span className="text-yellow-600"><img src={message}></img></span>
          </a>
          <a href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-100">
            <span className="text-yellow-600"><img src={notifi}></img></span>
          </a>
          
          <a 
            href="#" 
            className="text-white px-4 py-1 text-sm" 
            style={{
              width: '130px',
              height: '32px',
              borderRadius: '8px',
              background: '#E0D1AF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;