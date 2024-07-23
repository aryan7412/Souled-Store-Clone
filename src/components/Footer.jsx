import React from 'react'
import ItemsContainer from './ItemsContainer';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return <footer className="bg-gray-200 text-red-600">

        <div className=" md:flex md:justify-between md:items-center sm:px-12 px-4 bg-white py-7">

        </div>
        <ItemsContainer />
        <div className=" gap-10 text-left text-gray-600 text-sm pb-8" >
                <div  className="flex px-40">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                    <p>COD Available</p>
                </div>

                <div className="flex px-40">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                    <p>30 Days Easy Return</p>
                </div>
            </div>
        
       
        

        <div class="flex-row">
                    <div class="flex justify-center">
                    <div class="flex-row">
                    <div class="flex text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                          </svg>                      
                        <p class="font-semibold text-gray-700 text-sm ">EXPERIENCE THE SOULED STORE APP</p>
                    </div>
                    <div class="flex">
                        <a href="https://play.google.com/store/apps/details?id=com.thesouledstore">
                           <img class="h-126 w-40" src="https://tss-static-images.gumlet.io/icons/play-store.png" alt="" />
                        </a>
                        <a href="https://www.apple.com/in/app-store/">
                            <img class="h-126 w-40" src="https://tss-static-images.gumlet.io/icons/app-store.png" alt="" />
                        </a>

                    </div>    
                </div>  
            </div>                  
        </div>
        <SocialIcons />
        <div className="flex px-40 py-20">
                    <div className="flex">
                        <p className="text-gray-500">100% Secure Payment:</p>
                        <img className="h-10 w-80" src="./src/assets/payment.png" alt="" />
                    </div>
                    <div className="flex">
                        <p className="text-gray-500">Shipping Partners:</p>
                        <img className="h-8 w-80" src="./src/assets/shipping.png" alt="shipping" />
                    </div>
        </div>

        <div class="">                           
            <div className="flex-row  space-x-36 text-gray-600 px-40 ">
                <span className=" text-sm font-semibold">POPULAR SEARCHES</span>
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
