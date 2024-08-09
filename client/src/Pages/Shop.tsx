import React, { useEffect, useState } from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

interface ShopProps {
  gender: string;
}

interface PopularItem {
  id: number;
  image: string;
  name: string;
  price: string;
}

interface CollectionItem {
  id: number;
  image: string;
  name: string;
  price: string;
}

const Shop: React.FC<ShopProps> = ({ gender }) => {
  const [popular, setPopular] = useState<PopularItem[]>([]);
  const [newCollection, setNewCollection] = useState<CollectionItem[]>([]);

  const fetchInfo = () => {
    fetch('http://localhost:4000/popularinwomen')
      .then((res) => res.json())
      .then((data) => setPopular(data));

    fetch('http://localhost:4000/newcollections')
      .then((res) => res.json())
      .then((data) => setNewCollection(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <Hero />
      <Popular data={popular} />
      <Offers />
      <NewCollections data={newCollection} />
      <NewsLetter />
    </div>
  );
};

export default Shop;
