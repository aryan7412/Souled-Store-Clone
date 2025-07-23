import React from 'react'
import ItemsContainer from './ItemsContainer';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return <footer className="bg-gray-200 text-red-600">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-white py-7">
        </div>
        <ItemsContainer />
        <div className="gap-10 text-left text-gray-600 text-sm pb-8">
                <div className="flex px-40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                    <p>COD Available</p>
                </div>

                <div className="flex px-40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                    <p>30 Days Easy Return</p>
                </div>
            </div>
        
        <div className="flex-row">
                    <div className="flex justify-center">
                    <div className="flex-row">
                    <div className="flex text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-6 h-6"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>                      
                        <p className="font-semibold text-gray-700 text-sm">EXPERIENCE THE SOULED STORE APP</p>
                    </div>
                    <div className="flex">
                        <a href="https://play.google.com/store/apps/details?id=com.thesouledstore">
                           <img className="h-126 w-40" src="https://tss-static-images.gumlet.io/icons/play-store.png" alt="Play Store" />
                        </a>
                        <a href="https://www.apple.com/in/app-store/">
                            <img className="h-126 w-40" src="https://tss-static-images.gumlet.io/icons/app-store.png" alt="App Store" />
                        </a>
                    </div>    
                </div>  
            </div>                  
        </div>
        <SocialIcons />
        <div className="flex px-40 py-20">
                    <div className="flex">
                        <p className="text-gray-500">100% Secure Payment:</p>
                        <img className="h-10 w-80" src="./src/assets/payment.png" alt="Payment Methods" />
                    </div>
                    <div className="flex">
                        <p className="text-gray-500">Shipping Partners:</p>
                        <img className="h-8 w-80" src="./src/assets/shipping.png" alt="Shipping Partners" />
                    </div>
        </div>

        <div className="">                           
            <div className="flex-row space-x-36 text-gray-600 px-40">
                <span className="text-sm font-semibold">POPULAR SEARCHES</span>
                <div className="h-px w-full mt-2 my-0 mb-1 border-0 dark:bg-gray-400"></div>
            </div>
        </div>
          
        <div className="text-gray-500 text-sm px-40">
            <p>
                <a href="#">Oversized T-shirts </a>|<a href="#"> Casual Shirts </a>|<a href="#"> Polos </a>|<a href="#"> All T-Shirts </a>|<a href="#"> Solid T-shirts </a>|<a href="#"> All Shirts </a>|<a href="#"> Classic Fit T-shirts </a>|<a href="#"> Oversized Full Sleeve </a>|<a href="#"> Dropcut T-shirts </a>|<a href="#"> Co-ord Sets </a>|<a href="#"> Jackets </a>|<a href="#"> Hoodies & Sweatshirts </a>|<a href="#"> All Bottoms </a>|<a href="#"> Pants </a>|<a href="#"> Cargos </a>|<a href="#"> Jeans </a>|<a href="#"> Joggers </a>|<a href="#"> Shorts </a>|<a href="#"> Boxers & Innerwear </a>|<a href="#"> Pajamas </a>|<a href="#"> Top 20 T-Shirts </a>|<a href="#"> Top 20 Shirts </a>|<a href="#"> Top 20 Polos </a>|<a href="#"> Top 20 Bottoms </a>|<a href="#"> Top 20 Sneakers </a>|<a href="#"> Backpacks </a>|<a href="#"> Perfumes </a>|<a href="#"> Caps </a>|<a href="#"> New Arrivals </a>|<a href="#"> Best Sellers </a>|<a href="#"> Restocked </a>|<a href="#"> Supima Superheros </a>|<a href="#"> Pet Merch </a>|
            </p>
        </div>

        <div className="text-center text-sm font-semibold text-gray-600 pt-1 pb-5">
            <p>© The Souled Store 2024-25</p>
        </div> 
    </footer>
}

export default Footer;
