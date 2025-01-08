export const Footer = () => {
    return (
      <>
        <div className="border-t border-black border-opacity-30 bg-primaryPink font-monrope tracking-tighter text-white mt-24">
     
          <div className="flex flex-wrap items-center justify-between px-4 py-6 lg:px-8">
            
            <div className="flex flex-col items-center lg:items-start">
              <div className="h-48 w-48 flex justify-center items-center">
                <h1 className="font-manrope font-extrabold text-white text-3xl  tracking-tighter ">Whisper.io</h1>
              </div>
            </div>
  
            <footer className="w-full lg:w-3/4">
              <div className="grid grid-cols-2 gap-8 px-4 lg:px-0 lg:grid-cols-4">
 
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase">Company</h2>
                  <ul className="text-white opacity-80 font-medium">
                    <li className="mb-4">
                      <a href="javascript:void(0)" className="hover:underline">
                        About
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="javascript:void(0)" className="hover:underline">
                        Careers
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="javascript:void(0)" className="hover:underline">
                        Brand Center
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="javascript:void(0)" className="hover:underline">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
          
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase">Help Center</h2>
                  <ul className="text-white opacity-80 font-medium">
                    <li className="mb-4">
                      <a href="javascript:void(0)" className="hover:underline">
                        Discord Server
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="javascript:void(0)" className="hover:underline">
                        Twitter
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="javascript:void(0)" className="hover:underline">
                        Facebook
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="javascript:void(0)" className="hover:underline">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
           
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
                  <ul className="text-white opacity-80">
                    <li className="mb-4">
                      <a href="javascript:void(0)" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="javascript:void(0)" className="hover:underline">
                        Licensing
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="javascript:void(0)" className="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
    
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase">Download</h2>
                  <ul className="text-white opacity-80 font-medium">
                    <li className="mb-4">
                      <a href="javascript:void(0)" className="hover:underline">
                        iOS
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="javascript:void(0)" className="hover:underline">
                        Android
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="javascript:void(0)" className="hover:underline">
                        Windows
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="javascript:void(0)" className="hover:underline">
                        MacOS
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>
        </div>
  
        
        <div className="flex justify-center items-center py-4 bg-backgroundColor">
          <h1 className="text-lg font-monrope tracking-tighter font-extrabold text-white">
            Made with <span className="text-red-500">&#x1F9E1;</span> by Piyush
          </h1>
        </div>
      </>
    );
  };
  