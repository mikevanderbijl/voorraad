import React from 'react';
import HomeScreen from './HomeScreen';
import ProductList from './ProductList';
import ProductDetailScreen from './ProductDetail';

export const JournalScreen = () => <HomeScreen />;
export const MeasureScreen = () => <ProductList />;
export const TreatmentScreen = () => <ProductList />;
export const ProfileScreen = () => <ProductList />;
export const ProductDetail = () => <ProductDetailScreen />;