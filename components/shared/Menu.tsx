// "use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
   } from "./../ui/navigation-menu";
   
const Menu = ( ) => {
    return(  
        <NavigationMenu>
  <NavigationMenuList className="space-x-5" >
    <NavigationMenuItem>
      <Link href={"/"}>
      Female
      </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
    <Link href={"/"}>
      Male
      </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
    <Link href={"/"}>
      Children
      </Link>
    </NavigationMenuItem>
    <NavigationMenuItem><Link href={"/"}>
      All Products
      </Link></NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
    )
}
export default Menu