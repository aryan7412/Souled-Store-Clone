import React from 'react'
import Card from './Card'

function CategoriesW() {
  return (
    <div>
        <h3 className='text-center font-extrabold text-2xl pb-6 pt-6'>CATEGORIES</h3>
        <div className='grid grid-cols-3 ml-2 mr-2 items-center'>
            <Card>
                <div className='mx-1 mb-4 overflow-hidden'>
                    <img className='transition hover:scale-110' src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Big-Tile-tops_yhSi2uz.jpg?format=webp&w=480&dpr=2.0" />
                </div>
            </Card>
            <Card>
                <div className='mx-1 mb-4 overflow-hidden'>
                    <img className='transition hover:scale-110'  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Big-Tile_ZhGLSFa.jpg?format=webp&w=480&dpr=2.0"  />
                </div>
            </Card>
            <Card>
                <div className='mx-1 mb-4 overflow-hidden'>
                    <img className='transition hover:scale-110'  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/jeans-big-tile_hk9R91d.jpg?format=webp&w=480&dpr=2.0"  />
                </div>
            </Card>
        </div>
        <div className='grid grid-cols-4 ml-2 mr-2 gap-2 items-center overflow-hidden'>
            <Card><div className='mx-1 mb-4 overflow-hidden'><img className='transition hover:scale-110' src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Co-ord-set-SMall_duAiwRQ.jpg?format=webp&w=480&dpr=2.0"/></div></Card>
            <Card><div className='mx-1 mb-4 overflow-hidden'><img className='transition hover:scale-110' src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/shirts-small-tile_aRp2ZZw.jpg?format=webp&w=480&dpr=2.0"/></div></Card>
            <Card><div className='mx-1 mb-4 overflow-hidden'><img className='transition hover:scale-110' src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/sneakers-small_1X0SbnO.jpg?format=webp&w=480&dpr=2.0"/></div></Card>
            <Card><div className='mx-1 mb-4 overflow-hidden'><img className='transition hover:scale-110' src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Coord-set-small_iCGiI7m.jpg?format=webp&w=480&dpr=2.0"/></div></Card>
        </div>

    </div>
  )
}

export default CategoriesW