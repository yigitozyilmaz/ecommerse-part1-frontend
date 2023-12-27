"use client"
import React, { useState, useEffect } from 'react';
import  Style  from './UserList.module.css';
const UserList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
     try {
        const response = await fetch('https://webapi-gllx.onrender.com/api/products/getProductDetails');
        const productsData = await response.json();
        console.log(productsData);
        setProducts(productsData);  
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };

    fetchData(); 

  }, []);

  return (
    <div className={Style.urun}>
      {products.map((product, index) => (
        <div key={index} className={Style.anaDiv}><div className={Style.imgDiv}><img src='https://img.kitapyurdu.com/v1/getImage/fn:11477632/wh:true/wi:800' className={Style.userListimg}></img> </div><h1 className={Style.h1}>{product.name}</h1> <h1 className={Style.h1}>{product.price} TL </h1>
        <button className={Style.btn}>Sepete Ekle</button></div>
      ))}
    </div>
  );
};


export { UserList as default, UserList as unstable_useClient };