import Item from "./Item"
import {NEEDHELP, COMPANY, MOREINFO, STORENEARME} from "./Menus"

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-40 px-5 pt-16">
     <Item Links={NEEDHELP} title="NEEDHELP" />
     <Item Links={COMPANY} title="COMPANY" />
     <Item Links={MOREINFO} title="MOREINFO" />
     <Item Links={STORENEARME} title="STORENEARME" />

     
            
        </div>
  )
}

export default ItemsContainer
