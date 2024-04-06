// /app/components/MenuSection.tsx
import React from 'react';

interface MenuItem {
  title: string;
  price: string;
  description: string;
}

interface MenuProps {
  categoryTitle: string;
  menuItems: MenuItem[];
}

const MenuSection: React.FC<MenuProps> = ({ categoryTitle, menuItems }) => {
  return (
    <section className="flex justify-center my-8 menu">
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <h2 className="col-span-full my-5 text-3xl font-bold uppercase">{categoryTitle}</h2>
          {menuItems.map((item, index) => (
            <div key={index} className="text-left">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <span className="flex-grow mx-2 border-b border-dashed border-white opacity-50" />
                <p className="text-lg">{item.price}</p>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
