// /app/components/Menu.tsx
import React from 'react';
import menuData from '@/data/menu';
import MenuSection from './MenuSection';

interface MenuItem {
  title: string;
  price: string;
  description: string;
}

interface Category {
  categoryTitle: string;
  menuItems: MenuItem[];
}

interface MenuData {
  categories: Category[];
}

const Menu: React.FC = () => {
  return (
    <>
      {menuData.categories.map((category: Category, index: number) => (
        <MenuSection 
          key={index} 
          categoryTitle={category.categoryTitle} 
          menuItems={category.menuItems}
        />
      ))}
    </>
  );
}


export default Menu;
